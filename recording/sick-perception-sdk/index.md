# sick_perception_sdk

The [sick_perception_sdk](https://github.com/SICKAG/sick_perception_sdk) is a
C++17 library for receiving SICK LiDAR data, configuring sensors, and building
diagnostic or recording applications. It provides event-driven, thread-safe
data acquisition from multiple sensors, as well as ready-to-use examples.

![sick_perception_sdk architecture showing sensor data streaming, REST-based configuration, and additional tools](../assets/recording/sick-perception-sdk-overview.png)
*sick_perception_sdk data streaming, REST-based configuration, and additional tools.*

## Supported Devices and Platforms

The SDK supports these device variants:

<p class="table-caption" markdown>**Supported Devices and Platforms:** product family and variants.</p>

| Product family | Variants |
| --- | --- |
| LRS4000 | LRS4581 |
| multiScan100 | multiScan136, multiScan165, multiScan166 |
| multiScan200 | multiScan270 |
| picoScan100 | picoScan120, picoScan150 |

The SDK's example build option targets `LRS4000`, `multiScan100`, `multiScan200`, or
`picoScan100`.

The project builds with CMake on Linux and Windows and supports x86_64 and
ARM64. Tested platforms are Ubuntu 22.04 LTS, Ubuntu 24.04 LTS, and
Windows 11. macOS is not a tested platform.

## Build and Integrate

The SDK uses CMake and Conan 2 is available for dependency
management. Follow the upstream [build instructions and CMake integration example](https://github.com/SICKAG/sick_perception_sdk/blob/main/README.md) for
the current options and dependencies. The example build can be selected for a
device family, and the CMake project exposes separate components for drivers,
sensor configuration, and Compact format.

## Receive and Record Data

The SDK receives event-driven scan, IMU, and encoder data using SICK's Compact
format over TCP or UDP. Scan data is exposed as point clouds (Public
[`PointField::DataType` API](https://github.com/SICKAG/sick_perception_sdk/blob/main/src/compact_format/include/sick_perception_sdk/compact_format/PointCloud/PointCloudAttributes.hpp)).

The Compact-format layer provides a `PointCloudToPCDConverter` helper for
converting scan-derived point clouds to PCD for tools such as CloudCompare.
This is a conversion facility. The SDK does not provide a separate,
ready-made recording workflow. The `sensor_configuration` component
provides REST-based access to sensor settings and status.

## Threading, Diagnostics, and Logging

Data acquisition is thread-safe and event-driven, including when acquiring
from multiple sensors. The SDK includes diagnostic examples and built-in
diagnostic and logging capabilities. The default logger uses plog; applications
can provide a custom logger and set a minimum log level.

See the [SDK README](https://github.com/SICKAG/sick_perception_sdk/blob/main/README.md)
for current setup details, examples, and API documentation.
