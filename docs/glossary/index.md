# Glossary: SICK LiDAR, CoLa, REST, and ROS Terms

> Definitions of the terms, abbreviations, and SICK-specific names used in this developer guide.

Source: https://sickag.github.io/sick_lidar_developer_guide/glossary/

# Glossary

This glossary explains the terms, abbreviations, and SICK-specific names used in this guide. Where a term has its own page, the entry links to it. Glossary terms on other pages link to their entry here.

<div class="glossary-tables" markdown="1">

## A

| Term | Meaning |
| --- | --- |
| AAS (Asset Administration Shell) | Standardized digital twin of a product with its data sheet, operating instructions, certificates, and CAD data. See [Asset Administration Shell](https://sickag.github.io/sick_lidar_developer_guide/shared-features/asset-administration-shell/). |
| Activation type | Setting of an evaluation group that defines when the group is evaluated: always, controlled by digital inputs, or controlled by a telegram. See [Field Evaluation](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/#activate-and-monitor-a-group). |
| Ambient light image | Passive image captured through a LiDAR receiver. |
| AMR (autonomous mobile robot) | Mobile robot that navigates without fixed guidance. A typical application for LiDAR sensors. |
| Angle range filter | Filter that limits the output to a horizontal and vertical angle range. See [Filter Details](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/#angle-range-filter). |
| API (application programming interface) | Interface through which programs access the sensor, for example REST or CoLa. |
| Authorized Client | User level for configuring the sensor in daily operation. See [User Levels](https://sickag.github.io/sick_lidar_developer_guide/shared-features/user-levels/). |
| AutoIP | Method in which the sensor assigns itself an IP address when no DHCP server answers. |
| Azimuth | Horizontal angle of a beam (theta). |

## B

| Term | Meaning |
| --- | --- |
| Beam | One measurement direction of the sensor. Each beam can return one or more echoes. |
| Blanking | Detection mode of field evaluation: the field is infringed when an object at least as large as the minimum object size is inside the field. Smaller objects are ignored ("blanked"). |
| Blooming | False points that appear near highly reflective objects such as retroreflectors. |

## C

| Term | Meaning |
| --- | --- |
| Challenge-response authentication | Login method of the REST API. The client requests a one-time challenge and answers with a hash that includes the password; the password itself is not transmitted. See [REST Interface](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/). |
| Checksum | Value calculated over data to detect transmission errors or changes. CoLa B uses an XOR checksum, the Compact format CRC32, and the device reports MD5 checksums of its software and parameters. See [Checksums](https://sickag.github.io/sick_lidar_developer_guide/shared-features/checksums/). |
| CloudCompare | Open source software for viewing and processing 3D point clouds. See [CloudCompare](https://sickag.github.io/sick_lidar_developer_guide/visualization/cloudcompare/). |
| CoLa (Command Language) | SICK protocol for monitoring, maintaining, and using sensors, including configuration and data requests. CoLa A uses ASCII text on TCP port 2111, CoLa B binary data on TCP port 2112, and CoLa 2 uses TCP port 2122. See [CoLa Interface](https://sickag.github.io/sick_lidar_developer_guide/configuration/cola-interface/). |
| CoLa1 | Collective name for CoLa A and CoLa B. |
| Compact format | SICK binary format for measurement data over UDP or TCP, described by Kaitai Struct definitions. See [Compact Format](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/). |
| Contamination indication | Function that detects dirt on the optics cover and reports warnings or errors. See [Contamination Indication](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/contamination-indication/). |
| Contour mode | Detection mode of field evaluation that compares the scan with a taught-in reference contour. |
| CRC32 | 32-bit cyclic redundancy check. Protects each Compact and MSGPACK telegram. |
| Cyclone DDS | DDS implementation specified as the ROS 2 middleware for native ROS 2. |

## D

| Term | Meaning |
| --- | --- |
| Data output | Application in SOPASair that configures which measurement data the sensor sends and in which format. |
| DDS (Data Distribution Service) | Publish-subscribe middleware used by ROS 2. Native ROS 2 runs a DDS participant on the sensor. |
| Device Not Ready | Device state that signals that the sensor does not work correctly. Can be output on a digital output (`DRDY`). |
| Device search | Discovery of sensors in the network through UDP broadcasts on port 30718. See [Device Discovery](https://sickag.github.io/sick_lidar_developer_guide/shared-features/device-discovery/). |
| DHCP (Dynamic Host Configuration Protocol) | Protocol with which a network server assigns IP addresses automatically. |
| Diagnostic file | File with log entries for in-depth analysis by SICK. Created in SOPASair under Diagnostics. |
| DIN 70000 | German standard for vehicle coordinate systems (x forward, y left, z up). The IMU coordinate system of the Compact format is based on it. See [Compact Format](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/#type-2-imu). |
| Distance-dependent | Field evaluation parameter that decides, based on their axial separation, whether two objects are evaluated separately or merged. See [Field Evaluation](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/#distance-dependent). |

## E

| Term | Meaning |
| --- | --- |
| Echo | Reflection of one laser pulse. One beam can return several echoes, for example from a raindrop and a wall behind it. |
| Echo filter | Filter that selects which echoes are output, for example the first, the last, or all echoes. See [Filter Details](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/#echo-filter). |
| EEPROM | Non-volatile memory of the sensor. Changes are stored permanently only after `WriteEeprom` (REST) or `mEEwriteall` (CoLa). |
| Elevation | Vertical angle of a beam (phi). |
| Encoder | Sensor that measures the rotation or position of a moving axis. Encoder data can be combined with 2D LiDAR scans to build 3D point clouds. See [3D With 2D LiDARs](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/3d-with-2d-lidars/). |
| EPLAN | Electrical engineering software for designing schematics. SICK provides EPLAN macros as product data. See [Asset Administration Shell](https://sickag.github.io/sick_lidar_developer_guide/shared-features/asset-administration-shell/). |
| Evaluation | One detection field with its parameters. Up to 48 evaluations can be configured. |
| Evaluation group | Set of evaluations that is activated and deactivated together. |

## F

| Term | Meaning |
| --- | --- |
| Field evaluation | On-sensor application that checks whether objects are inside a defined field and reports `FREE` or `INFRINGED`. See [Field Evaluation](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/). |
| Firmware | Software that runs on the sensor. See [Firmware Update](https://sickag.github.io/sick_lidar_developer_guide/shared-features/firmware-update/). |
| Fog filter | Filter that suppresses echoes caused by fog, particularly at close range. |
| Frame | One complete scan. A frame is split into segments for output. |

## H

| Term | Meaning |
| --- | --- |
| HDDM<sup>+</sup> (High Definition Distance Measurement Plus) | SICK time-of-flight technology that combines returns from many laser pulses to calculate a distance value. See [LiDAR Basics](https://sickag.github.io/sick_lidar_developer_guide/lidar-basics/#measuring-distance-with-light). |

## I

| Term | Meaning |
| --- | --- |
| IGMP (Internet Group Management Protocol) | Protocol with which hosts join a multicast group. Switches with IGMP snooping forward multicast traffic only to ports with receivers. See [UDP Unicast / Multicast](https://sickag.github.io/sick_lidar_developer_guide/shared-features/udp-unicast-multicast/). |
| IMU (inertial measurement unit) | Built-in sensor that measures acceleration, angular velocity, and orientation. |
| Interlaced mode | Scan mode that combines several scans shifted relative to one another to increase angular resolution. |
| Interval filter | Filter that outputs only every n-th scan. |

## K

| Term | Meaning |
| --- | --- |
| Kaitai Struct | Language for describing binary formats. SICK publishes the Compact format as Kaitai Struct definitions (`.ksy`). |

## L

| Term | Meaning |
| --- | --- |
| Layer | One horizontal scan line at a fixed elevation angle. A multi-layer sensor provides several layers; a single-layer sensor provides one. |
| LiDAR (light detection and ranging) | Measurement principle that determines distances from the time-of-flight of laser pulses. |
| LMDscandata | CoLa telegram with measurement data. See [LMDscandata Format](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/lmdscandata-format/). |

## M

| Term | Meaning |
| --- | --- |
| Maintenance | User level for maintenance tasks. See [User Levels](https://sickag.github.io/sick_lidar_developer_guide/shared-features/user-levels/). |
| Mean filter | Filter that averages the distance of each point over several scans, also called moving average filter. Some devices refer to this as high precision mode. See [Filter Details](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/#moving-average-filter). |
| Minimum object size | Smallest object that infringes a field in blanking mode. |
| MIP (Milestone Integration Platform) | Platform for integrating applications and devices with Milestone XProtect video management software. Its software development kit (SDK) supports protocols, components, and plug-ins. See [Milestone XProtect Camera Plugin](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/milestones-camera/). |
| MessagePack (MSGPACK) | Compact binary serialization format for exchanging data between programming languages. See [MSGPACK Format](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/msgpack-format/). |
| Multi-echo | Ability of the sensor to measure several echoes per beam. |
| Multicast | Transmission of one data stream to a group of receivers. |

## N

| Term | Meaning |
| --- | --- |
| Native ROS 2 | Function with which the sensor publishes ROS 2 messages itself over DDS, without a host driver. See [ROS Integration](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/ros-integration/#native-ros-2). |
| NTP (Network Time Protocol) | Protocol for synchronizing the sensor clock with a time server. See [Time Synchronization](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/). |

## O

| Term | Meaning |
| --- | --- |
| OpenAPI | Machine-readable description of a REST API. SICK publishes OpenAPI files for its REST APIs. |

## P

| Term | Meaning |
| --- | --- |
| Particle filter | Filter that removes isolated points caused by dust, rain, or snow. See [Filter Details](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/#particle-filter). |
| pcap | File format for recorded network traffic, created for example with Wireshark. See [Wireshark](https://sickag.github.io/sick_lidar_developer_guide/recording/wireshark-pcap/). |
| PCD (Point Cloud Data) | File format of the Point Cloud Library for 3D point clouds. Viewers such as CloudCompare open it. See [CloudCompare](https://sickag.github.io/sick_lidar_developer_guide/visualization/cloudcompare/). |
| Performance profile | See scan configuration. |
| Perpendicular distance measurement | On-device application that measures the distance of objects to a reference line. See [Perpendicular Distance Measurement](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/perpendicular-distance-measurement/). |
| PLC (programmable logic controller) | Industrial controller. See [PLC Integration](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/plc-integration/). |
| Point cloud | Set of 3D points calculated from the measured distances and angles. |
| PointCloud2 | ROS message type for point clouds. |
| Product ID | Globally unique identifier for SICK products that provides access to product-related information. It contains the part number (P/N) and, if available, the serial number (S/N). See [`pid.sick.com/{P/N}/{S/N}`](https://pid.sick.com/). |
| PSIRT (Product Security Incident Response Team) | SICK team that handles reports of security vulnerabilities. |
| PTP (Precision Time Protocol, IEEE 1588) | Protocol for precise time synchronization over Ethernet. |
| PWR (power) | Connector label for a sensor's power supply connection; some variants combine power and digital I/O. |

## Q

| Term | Meaning |
| --- | --- |
| Quaternion | Four values (w, x, y, z) that describe an orientation in 3D. The IMU reports its orientation as a quaternion. |

## R

| Term | Meaning |
| --- | --- |
| Reflector | Highly reflective target, such as a retroreflector. The sensor can mark points on reflectors. |
| Region of interest | Selected range of measured values used for further evaluation. In this guide, it limits an evaluation or a filter; for teach-in, a polygon bounds where the contour is learned. |
| Remission factor | Measure of the light reflected by a surface relative to a defined white reference surface, expressed as a percentage. A value of 100 % means the same return as the reference, not that all incident light is reflected. Retroreflectors can exceed 100 %. Sensor ranges are specified for a given remission factor, for example 10 %. |
| REST (Representational State Transfer) | HTTP-based interface of the sensor for reading and writing variables and calling methods. See [REST Interface](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/). |
| RMW (ROS middleware) | Layer that connects ROS 2 to a DDS implementation. |
| ROS (Robot Operating System) | Open source framework for robot software. See [ROS Integration](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/ros-integration/). |
| ROS bag | Recording of ROS messages in a file (`.bag` in ROS 1, `.db3` or `.mcap` in ROS 2). See [ROS Bag](https://sickag.github.io/sick_lidar_developer_guide/recording/ros-bag-db3/). |
| RSSI (received signal strength indicator) | Measure of the strength of an echo. |

## S

| Term | Meaning |
| --- | --- |
| Scan configuration | Predefined combination of aperture angle, scanning frequency, and angular resolution, identified by a number. |
| Scan merger | On-device function that combines the 2D scans of a rotating sensor into one 3D point cloud. See [3D Scan Recording](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/3d-scan-recording/). |
| Scan range | Angle range covered by the sensor. |
| ScanSegmentAPI | SICK Python and C# libraries for receiving segmented scan data. Supported devices and features depend on the library version. |
| Segment | Part of a scan restricted to an azimuth (horizontal) and/or elevation (vertical) angle range. In the segmented output described in this guide, parts of a frame are sent as separate telegrams so they can be processed immediately. |
| Sensitivity mode | Receiver setting that trades scanning range against robustness to ambient light and noise. See [Filter Details](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/#sensitivity-mode). |
| Service | Highest user level. See [User Levels](https://sickag.github.io/sick_lidar_developer_guide/shared-features/user-levels/). |
| Session token | Token that authorizes binary file transfers, for example firmware updates and configuration backups. |
| sick_perception_sdk | SICK C++ SDK for configuring compatible sensors and receiving Compact data. See [Coding Tools & Examples](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/coding-tools-and-examples/). |
| sick_scan_xd | SICK driver for ROS 1, ROS 2, and applications without ROS. See [ROS Integration](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/ros-integration/#sick_scan_xd). |
| SLAM (simultaneous localization and mapping) | Method in which a robot builds or updates a map of an unknown environment while tracking its own position in that map. See [Native ROS 2 SLAM](https://sickag.github.io/sick_lidar_developer_guide/beginner-projects/native-ros2-slam/). |
| Slot | One column of measurements at a horizontal angle step. |
| SOPAS ET | SOPAS Engineering Tool for parameterization, configuration, diagnostics, and monitoring of SICK sensors and systems. The Windows application can discover devices and save, export, and import parameter sets. See [SOPAS ET](https://sickag.github.io/sick_lidar_developer_guide/visualization/sopas-et/). |
| SOPASair | Application for parameterization, configuration, diagnostics, and monitoring of SICK sensors. In this guide, it is the sensor's web interface, opened in a browser. See [SOPASair](https://sickag.github.io/sick_lidar_developer_guide/visualization/sopasair/). |
| STX / ETX | Start of text (`0x02`) and end of text (`0x03`), the control characters that frame a CoLa A telegram. |
| Swagger UI | Interactive viewer for OpenAPI files. |
| System plug | Customer-replaceable component required for device operation that provides device functions and may store communication parameters or other configuration, depending on the device. |

## T

| Term | Meaning |
| --- | --- |
| Teach-in | Learning process during configuration that collects data for later analysis during operation. In field evaluation, it learns the current environment as the reference contour of a field. See [Field Evaluation](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/#teach-in). |
| Telegram | One message exchanged with the sensor, for example a CoLa command or a Compact data packet. |
| Telegram type | Number in a Compact telegram that identifies its content, for example scan data or IMU data. |

## U

| Term | Meaning |
| --- | --- |
| Unicast | Transmission of a data stream to one receiver. |
| User level | Access level that defines which settings a user can change: Maintenance, Authorized Client, or Service. See [User Levels](https://sickag.github.io/sick_lidar_developer_guide/shared-features/user-levels/). |

## V

| Term | Meaning |
| --- | --- |
| Virtual Sensor Lab | Browser-based simulation of SICK sensors. See [Virtual Sensor Lab](https://sickag.github.io/sick_lidar_developer_guide/simulation/virtual-sensor-lab/). |

## W

| Term | Meaning |
| --- | --- |
| WebSocket | Protocol for a persistent connection over which the sensor pushes events. See [WebSocket Events](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/websocket-events/). |
| Wireshark | Network analysis tool. SICK provides a Wireshark dissector for the Compact format. |

## X

| Term | Meaning |
| --- | --- |
| XOR checksum | Checksum of CoLa B telegrams: the exclusive OR of all payload bytes. |

</div>
