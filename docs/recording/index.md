# LiDAR Recording Methods: SOPASair, pcap, ROS Bag, JSON

> Compare ways to record SICK LiDAR data: SOPASair Recorder, Wireshark pcap, ROS bag, ScanSegmentAPI JSON, and the sick_perception_sdk.

Source: https://sickag.github.io/sick_lidar_developer_guide/recording/

# Choose a Recording Method

Choose a recording approach based on what you need to preserve and how you
plan to inspect or replay it. The Recording section currently covers five
options:

<p class="table-caption" markdown>**Choose a Recording Method:** method, what it captures, advantages, trade-offs, and best fit.</p>

| Method | What it captures | Advantages | Trade-offs | Best fit |
| --- | --- | --- | --- | --- |
| [SOPASair Recorder \| .sc](https://sickag.github.io/sick_lidar_developer_guide/recording/sopasair/) | Sensor measurement scenarios saved through the SOPASair-linked recorder application. | Captures real scenes for repeatable analysis, replay, and sharing with support. | Requires installing and connecting the separate recorder application; the illustrated workflow is for picoScan100. It does not replace a configuration backup or raw packet capture. | Reproducing an LRS4000, multiScan100, or picoScan100 measurement scenario during troubleshooting or application validation. |
| [Wireshark \| pcap](https://sickag.github.io/sick_lidar_developer_guide/recording/wireshark-pcap/) | Raw Ethernet packets exchanged between sensor and host. | Preserves the protocol traffic for troubleshooting, support cases, and decoder development; can be decoded later with the Compact dissector. | Captures can be large and include traffic that is not useful to the analysis. You need protocol knowledge or a dissector to interpret measurement payloads. | Debugging network or protocol problems; keeping evidence of exactly what was transmitted. |
| [ROS Bag \| db3](https://sickag.github.io/sick_lidar_developer_guide/recording/ros-bag-db3/) | ROS topics recorded from a running ROS 1 or ROS 2 setup. | Plays back through familiar ROS tools and preserves the topic/message interface used by the application. Useful for repeatable robotics testing and replay. | Requires the ROS publisher, topic setup, and a compatible ROS environment while recording; it records published topics rather than the underlying Ethernet exchange. | Replaying a robotics scenario for SLAM, perception, or application testing. |
| [ScanSegmentAPI \| JSON](https://sickag.github.io/sick_lidar_developer_guide/recording/scansegmentapi-json/) | Compact or MSGPACK measurement data stored as JSON. | Portable structured output that is convenient to inspect, process, and replay after capture without the sensor. | JSON is generally more verbose than a binary recording format; MSGPACK applies only where the selected device supports it. | Capturing LRS4000, multiScan100, or picoScan100 measurement data for offline analysis or automated tests. |
| [sick_perception_sdk](https://sickag.github.io/sick_lidar_developer_guide/recording/sick-perception-sdk/) | Application-consumed Compact events and scan-derived point clouds; provides conversion utilities such as PCD output. | Provides C++ APIs, event-driven data acquisition, configuration and diagnostic capabilities, and building blocks for application-specific processing. | Requires a C++ application and build/dependency setup; it is not a turnkey recorder. | Integrating capture for LRS4000, multiScan100, or picoScan100 into an application or building a custom processing pipeline. |

These methods capture at different layers and are not interchangeable. A
SOPASair Recorder saves measurement scenarios; a packet capture is useful
when you need the exact wire traffic; a ROS bag stores ROS messages;
ScanSegmentAPI stores structured measurement data; and the SDK is a
development library for building a custom application.

If you are unsure, start with [SOPASair Recorder](https://sickag.github.io/sick_lidar_developer_guide/recording/sopasair/) for a
supported measurement scenario, [ROS Bag](https://sickag.github.io/sick_lidar_developer_guide/recording/ros-bag-db3/) when your
application already runs in ROS, [Wireshark](https://sickag.github.io/sick_lidar_developer_guide/recording/wireshark-pcap/) for a
communication problem, or [ScanSegmentAPI](https://sickag.github.io/sick_lidar_developer_guide/recording/scansegmentapi-json/) for
JSON recordings.
