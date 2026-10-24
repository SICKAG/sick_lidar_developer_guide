# Use SICK LiDAR Data in MATLAB via ROS 2

> Subscribe to picoScan100 PointCloud2 data in MATLAB with the ROS Toolbox over native ROS 2 (DDS), without a SICK driver.

Source: https://sickag.github.io/sick_lidar_developer_guide/integration-notes/matlab-integration/

# MATLAB Integration

Compatible with: multiScan200 picoScan100

<div class="tool-intro" markdown>

![MATLAB](https://sickag.github.io/sick_lidar_developer_guide/assets/integration-notes/matlab-logo.png)
MATLAB ROS Toolbox can subscribe directly to native ROS 2 data from
multiScan200 or picoScan100 through DDS. No SICK ROS driver or bridge is
required. The example below uses picoScan100 point-cloud data on
`/cloud/all_points` as `sensor_msgs/PointCloud2` with the default ROS domain
ID `0`.

</div>

## Validated Setup

<p class="table-caption" markdown>**Validated Setup:** component and version or setting.</p>

| Component | Version / setting |
| --- | --- |
| Operating system | Windows 11 |
| MATLAB | R2025b with ROS Toolbox |
| ROS 2 / DDS | Kilted with CycloneDDS |
| ROS domain ID | `0` (device default) |

All DDS participants must use the same domain ID as the sensor. Ensure that the sensor's native ROS 2 interface is enabled and that the computer firewall allows DDS traffic. See [Native ROS 2](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/ros-integration/#native-ros-2) for sensor-side setup.

## Receive PointCloud2 Data

The following script creates a MATLAB ROS 2 node, lists visible topics, and prints the number of points received on `/cloud/all_points`.

```matlab
node = ros2node("/matlab_cloud_counter");

disp("Available ROS 2 topics:");
disp(ros2("topic", "list"));

sub = ros2subscriber( ...
    node, ...
    "/cloud/all_points", ...
    "sensor_msgs/PointCloud2", ...
    @onPointCloud);

disp("Subscribed to /cloud/all_points");

t0 = tic;
while toc(t0) < 10
    pause(0.1);
end

clear sub node
disp("Finished.");

function onPointCloud(msg)
    pointCount = double(msg.width) * double(msg.height);
    fprintf("PointCloud received: %d points\n", pointCount);
end
```

## Visualize Live Data

Open **Apps** > **ROS 2 Data Analyzer**, choose **Open** > **Live Network Data**, select **Live ROS 2 network data**, and set the ROS domain ID to `0`. Create a PointCloud Visualizer, choose `/cloud/all_points`, then select **Start**.

## Verify Connectivity

Use the ROS 2 CLI independently of MATLAB to verify that DDS data is present:

```sh
ros2 topic echo /cloud/all_points
```

If no data is visible, confirm the native ROS 2 interface configuration,
firewall rules, DDS compatibility, and ROS domain ID. On multiScan200 and on
picoScan100 from firmware V2.3.1, the sensor domain ID is configurable
(`rosDomainId`); make sure MATLAB uses the same value.
