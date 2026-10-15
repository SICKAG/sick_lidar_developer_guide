# Reversing Assistant

When reversing a vehicle, objects behind it can be difficult to see and the
available stopping distance decreases quickly. A LiDAR sensor can monitor this
area and provide an immediate warning: the closer the nearest obstacle is, the
faster the sensor LEDs flash.

![Forklift with a LiDAR sensor monitoring the reversing area and detecting a pallet](../assets/beginner-projects/reverse-camera-application.png)
*The LiDAR monitors the reversing area. A shorter distance to the nearest obstacle produces a faster warning flash.*

## Before You Start

- Connect the picoScan150 and the development computer to the same network.
- Mount the sensor so its field of view covers the monitored reversing area.
- Build and install
  [sick_perception_sdk](https://github.com/SICKAG/sick_perception_sdk) with the
  `picoScan100` examples.
- Change `receiverAddress` if the computer does not use `192.168.0.100`.
- This minimal example uses the default Service password `servicelevel`.

## Minimal Example

This example is based on the SDK's UDP streaming example. The point-cloud
callback only calculates the flash period; the main loop performs the REST
writes so scan reception is not blocked by an HTTP request.

The warning uses the radial range supplied by the scanner in the Compact scan
data. Every point in the received frame is considered.

<details>
<summary>Expand to view the complete C++ example</summary>

```cpp
#include <sick_perception_sdk/compact_format/PointCloud/UnorganizedPointCloud.hpp>
#include <sick_perception_sdk/drivers/picoScan100/PicoScan100Driver.hpp>
#include <sick_perception_sdk/sensor_configuration/HttpClient/httplib_client/HttpClient.hpp>
#include <sick_perception_sdk/sensor_configuration/picoScan150/PicoScan150Configurator.hpp>

#include <atomic>
#include <algorithm>
#include <chrono>
#include <csignal>
#include <cstdint>
#include <limits>
#include <memory>
#include <thread>

// The signal handler changes this flag when the user presses Ctrl+C.
std::atomic<bool> running {true};

int main()
{
  // Change these addresses if the sensor or computer uses another subnet.
  constexpr char sensorAddress[] = "192.168.0.1";
  sick::IpV4Address receiverAddress {"192.168.0.100"};
  constexpr std::uint16_t scanPort = 2115;

  auto const httpClient =
    std::make_shared<sick::httplib_client::HttpClient>(sensorAddress, 80);
  sick::picoScan150::v2_3_3::Configurator configurator(
    httpClient, sick::UserLevel::Service, "servicelevel");

  configurator.enableScanDataStreamingCompactUdp(receiverAddress, scanPort);

  // The scan callback writes these values while the main loop reads them.
  std::atomic<int> flashPeriodMs {0};
  std::atomic<std::chrono::steady_clock::time_point> lastFrame {
    std::chrono::steady_clock::time_point {}};

  // Request the scanner-provided radial range for every point.
  sick::point_cloud::PointCloudConfiguration pointCloudConfig;
  pointCloudConfig.fields.enableSpherical = true;

  sick::picoScan100::Driver driver;
  driver.scanDataReceiver()
    .setup(scanPort)
    .setOnNewFrameCallback(
      [&](sick::point_cloud::UnorganizedPointCloud const& cloud) {
        // Find the closest valid radial range in the complete scan frame.
        float nearest = std::numeric_limits<float>::infinity();
        for (std::size_t i = 0; i < cloud.numberOfPoints(); ++i)
        {
          nearest = std::min(nearest, cloud.getRange(i));
        }

        // Store one full LED on/off period for the selected warning level.
        flashPeriodMs =
          nearest <= 0.5F ? 333 :
          nearest <= 2.0F ? 500 :
          nearest < std::numeric_limits<float>::infinity() ? 2000 : 0;
        lastFrame = std::chrono::steady_clock::now();
      },
      pointCloudConfig);
  driver.run();

  std::signal(SIGINT, [](int) { running = false; });
  bool ledOn = false;
  while (running)
  {
    // Treat missing scan data as "no obstacle" after 500 ms.
    bool const scanIsCurrent =
      std::chrono::steady_clock::now() - lastFrame.load() <=
      std::chrono::milliseconds(500);
    int const period = scanIsCurrent ? flashPeriodMs.load() : 0;

    if (period == 0)
    {
      if (ledOn)
      {
        configurator.setLEDEnable(false);
        ledOn = false;
      }
      std::this_thread::sleep_for(std::chrono::milliseconds(50));
      continue;
    }

    // Toggling after half a period produces the requested flash frequency.
    ledOn = !ledOn;
    configurator.setLEDEnable(ledOn);
    std::this_thread::sleep_for(std::chrono::milliseconds(period / 2));
  }

  configurator.setLEDEnable(true);
}
```

</details>

Add the source as another picoScan100 example target and link it with
`sick_perception_sdk::drivers` and
`sick_perception_sdk::sensor_configuration`, like the SDK's
`data_streaming_udp` example. Stop it with **Ctrl+C**; the final call enables
the LEDs again, which is their default state.

## Expected Behavior

If no scan frame arrives for 500 ms, the scan is treated as stale and the LEDs
are switched off.

<p class="table-caption" markdown>**Expected Behavior:** nearest point, flash frequency, and result.</p>

| Nearest point | Flash frequency | Result |
| ---: | ---: | --- |
| No obstacle or stale scan | Off | LEDs stay off |
| 0 m to 0.5 m | 3 Hz | Fast warning |
| More than 0.5 m to 2 m | 2 Hz | Medium warning |
| More than 2 m | 0.5 Hz | Slow warning |

Move a test object through the sensor's field of view and check that the reported behavior
changes monotonically: every smaller distance must produce the same or a
shorter period. Test only in a controlled area; this example is a warning aid,
not a safety function.

## Optional Digital Output

The same `ledOn` value can be sent to `POST /api/SetOutput` at the same cadence.
First configure that output's source as **SOPAS command**, then call the SDK's
`setOutput()` method with the output number and value. Do not use
`OutputState` for this: that endpoint only reads the current output states.
