# sick_perception_sdk: C++ SDK for SICK LiDAR Sensors

> C++17 SDK for receiving, configuring, and diagnosing SICK LRS4000, multiScan100, and picoScan100 sensors, with PCD conversion and examples.

Source: https://sickag.github.io/sick_lidar_developer_guide/recording/sick-perception-sdk/

# sick_perception_sdk

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

The [sick_perception_sdk](https://github.com/SICKAG/sick_perception_sdk) is
mainly a C++17 SDK for receiving SICK LiDAR data and configuring sensors. It is
listed under Recording because it converts received scans to PCD files, which
you can store and open in tools such as [CloudCompare](https://sickag.github.io/sick_lidar_developer_guide/visualization/cloudcompare/).
It provides event-driven, thread-safe data acquisition from multiple sensors and
ready-to-use examples.

![sick_perception_sdk architecture showing sensor data streaming, REST-based configuration, and additional tools](https://sickag.github.io/sick_lidar_developer_guide/assets/recording/sick-perception-sdk-overview.png)
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
converting scan-derived point clouds to PCD. There is ready-made recording
application; you can use it to write the PCD files from your own code. The `sensor_configuration` component provides REST-based access to sensor settings
and status.

## Threading, Diagnostics, and Logging

Data acquisition is thread-safe and event-driven, including when acquiring
from multiple sensors. The SDK includes diagnostic examples and built-in
diagnostic and logging capabilities. The default logger uses plog; applications
can provide a custom logger and set a minimum log level.

See the [SDK README](https://github.com/SICKAG/sick_perception_sdk/blob/main/README.md)
for current setup details, examples, and API documentation.
