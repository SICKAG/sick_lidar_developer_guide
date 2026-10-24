# LiDAR Visualization Tools: SOPASair, SOPAS ET, CloudCompare

> Compare SOPASair, Sentio Creator, SOPAS ET, and CloudCompare for configuring SICK LiDAR sensors, finding devices, and viewing point clouds.

Source: https://sickag.github.io/sick_lidar_developer_guide/visualization/

# Choose a Visualization Tool

Choose a tool based on whether you need to configure a live sensor, manage
devices and firmware, locate a device, or inspect point-cloud files.

<p class="table-caption" markdown>**Choose a Visualization Tool:** tool, what it is for, advantages, trade-offs, and best fit.</p>

| Tool | What it is for | Advantages | Trade-offs | Best fit |
| --- | --- | --- | --- | --- |
| [CloudCompare](https://sickag.github.io/sick_lidar_developer_guide/visualization/cloudcompare/) | View and process saved 3D point clouds. | Free and open source; useful for inspecting point-cloud files such as PCD without writing a viewer. | Works on saved point-cloud files rather than configuring the live sensor; requires compatible exported data. | Offline 3D point-cloud inspection and processing. |
| [ROS 2 rviz](https://sickag.github.io/sick_lidar_developer_guide/visualization/rviz2/) | Visualize live ROS 2 topics and point clouds. | Standard ROS 2 desktop viewer; easy to validate frame alignment and scan coverage. | Requires ROS 2 to be running; it is a visualization tool, not a device configuration UI. | Debugging ROS 2 data flow and verifying topic quality. |
| [Sentio Creator](https://sickag.github.io/sick_lidar_developer_guide/visualization/sentio-creator/) | SICK software for device commissioning and firmware package access. | Helps manage and commission SICK devices and provides a source for matching firmware packages. | Requires installing and using a separate SICK software tool; it is focused on commissioning, not on point-cloud analysis. | Device discovery/commissioning workflows and finding firmware packages. |
| [SOPAS ET](https://sickag.github.io/sick_lidar_developer_guide/visualization/sopas-et/) | Legacy SICK engineering tool. | Can discover sensors on a local network when the IP address is unknown; related workflows include configuration import/export and CSV recording. | Legacy and no longer maintained for picoScan100 commissioning or configuration; continue in SOPASair for supported setup. | Finding a device on the local network or accessing a legacy workflow. |
| [SOPASair](https://sickag.github.io/sick_lidar_developer_guide/visualization/sopasair/) | Configure and commission a sensor through its built-in web interface. | Nothing to install; opens in a browser; supports live settings and interactive workflows such as field teach-in and firmware update. | Requires a network connection to the sensor; intended for device setup and live operation, not offline 3D point-cloud analysis. | Day-to-day setup, configuration, and commissioning. |

These tools serve different stages: use SOPASair or Sentio Creator for the
device, ROS 2 rviz for topic validation, SOPAS ET for legacy discovery tasks,
and CloudCompare for offline point-cloud work.
