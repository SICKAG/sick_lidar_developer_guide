# Beginner Projects

> Try LiDAR building security, bulk scanning, height measurement, 3D capture, ROS 2 localization, reversing aids, or a picoScan IMU-controlled game.

Source: https://sickag.github.io/sick_lidar_developer_guide/beginner-projects/

# Beginner Projects

These examples outline how to turn a LiDAR use case into an application. Each
starts with a goal, a sensor-to-application data path, and practical steps for
prototyping and validation. Level 1 projects introduce guided sensor
applications, Level 2 adds 3D evaluation, point-cloud tools, native ROS 2 SLAM,
or an IMU-controlled game, and Level 3 combines SDK wrappers, asynchronous
field status, runtime field selection, and image visualization.

<p class="table-caption" markdown>**Beginner Projects:** level, example, compatible device family, and goal. Model names in parentheses identify the model used in the example.</p>

| Level | Example | Compatible device family | Goal |
| --- | --- | --- | --- |
| 1 | [Building Security](https://sickag.github.io/sick_lidar_developer_guide/beginner-projects/building-security/) | LRS4000, picoScan family | Monitor an area (e.g. a room floor) very precisely. |
| 1 | [Bulk Scan](https://sickag.github.io/sick_lidar_developer_guide/beginner-projects/bulk-scan/) | LRS4000, picoScan family | Measure the material height on a conveyor belt as a starting point for bulk-material profiles. |
| 2 | [3D Height Measurement](https://sickag.github.io/sick_lidar_developer_guide/beginner-projects/height-measurement/) | multiScan100 family | Measure body height with a multiScan100 using perpendicular distance above a floor reference. |
| 2 | [House in 3D](https://sickag.github.io/sick_lidar_developer_guide/beginner-projects/house-3d-capture/) | LRS4000, picoScan family (picoScan150) | Record picoScan 3D point clouds around a house and inspect the exported PCD files. |
| 2 | [Reversing Assistant](https://sickag.github.io/sick_lidar_developer_guide/beginner-projects/reversing-assistant/) | picoScan family (picoScan150) | Detect the closest obstacle behind a vehicle and flash the warning LEDs faster as it gets closer. |
| 2 | [Native ROS 2 SLAM](https://sickag.github.io/sick_lidar_developer_guide/beginner-projects/native-ros2-slam/) | picoScan family (picoScan150) | Build a map and localize a vehicle within it using native ROS 2 and SLAM Toolbox. |
| 2 | [picoScan150 Jump & Run](https://sickag.github.io/sick_lidar_developer_guide/beginner-projects/imu-jump-and-run/) | picoScan family (picoScan150) | Use picoScan IMU data, a generated Kaitai Python parser, and a browser game to turn sensor movement into player movement. |
| 2 | [Smart Shelf](https://sickag.github.io/sick_lidar_developer_guide/beginner-projects/smart-shelf/) | picoScan family (picoScan150) | Detect which shelf compartment a pen reaches into using picoScan perpendicular distance and WebSocket events in a browser. |
| 3 | [ROS 2 Reversing Assistant with an Ambient-Light Image](https://sickag.github.io/sick_lidar_developer_guide/beginner-projects/ros2-reversing-assistant-camera/) | multiScan200 family (multiScan270) | Wrap multiScan270 SDK data for ROS 2 over Zenoh, display an ambient image, receive field events, and switch near/wide groups. |
