# LiDAR Recording Methods: SOPASair, pcap, ROS Bag, JSON

> Choose how to capture SICK LiDAR data, from raw packets and ROS topics to structured recordings and custom applications.

Source: https://sickag.github.io/sick_lidar_developer_guide/recording/

# Choose a Recording Method

Choose a recording approach based on what you need to preserve and how you
plan to inspect or replay it. The Recording section currently covers five
options:

* [SOPASair Recorder \| .sc](https://sickag.github.io/sick_lidar_developer_guide/recording/sopasair/): save sensor measurement scenarios for repeatable analysis, replay, or support; the documented workflow uses picoScan100.
* [Wireshark \| pcap](https://sickag.github.io/sick_lidar_developer_guide/recording/wireshark-pcap/): capture raw Ethernet traffic for network or protocol troubleshooting and preserve exactly what was transmitted.
* [ROS Bag \| db3](https://sickag.github.io/sick_lidar_developer_guide/recording/ros-bag-db3/): record ROS topics for familiar playback and repeatable robotics testing; requires a running ROS setup.
* [ScanSegmentAPI \| JSON](https://sickag.github.io/sick_lidar_developer_guide/recording/scansegmentapi-json/): store Compact or supported MSGPACK measurements as portable JSON for offline analysis and automated tests.
* [sick_perception_sdk](https://sickag.github.io/sick_lidar_developer_guide/recording/sick-perception-sdk/): build custom C++ applications that acquire Compact data, create point clouds, and convert output such as PCD; requires a development setup.

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
