# ROS 2 rviz

Use `rviz2` to inspect SICK LiDAR point clouds, laser scans, and coordinate
frames from native ROS 2 or `sick_scan_xd`.

1. Configure the sensor for ROS 2 output as described in [ROS Integration](../integration-notes/ros-integration.md).
2. Start the ROS 2 middleware and sensor publisher. For native ROS 2, use
   Cyclone DDS; for `sick_scan_xd`, start the driver on the host.
3. Confirm that ROS 2 can see the sensor topics:

   ```bash
   ros2 topic list
   ```

   For native ROS 2, `/cloud/all_points` is the combined point cloud. A
   `sick_scan_xd` launch can use different topic names; select the
   `sensor_msgs/msg/PointCloud2` or `sensor_msgs/msg/LaserScan` topic shown by
   `ros2 topic list`.
4. Launch `rviz2` in the same sourced ROS 2 environment:

   ```bash
   rviz2
   ```

5. In the left panel, add a display such as:
   - `PointCloud2` for a dense 3D point cloud,
   - `LaserScan` for 2D planar output,
   - `TF` to verify coordinate frames,
   - `Axes` to confirm sensor orientation.
6. Select the published topic, set the fixed frame, and check the sensor data
   against the expected field of view.

## If the Display Is Empty

Set **Reliability Policy** to match the publisher when rviz2 reports an
incompatible QoS profile. Check that data arrives on the topic:

```bash
ros2 topic info --verbose /cloud/all_points
ros2 topic echo --once /cloud/all_points
```

Replace the topic for a `sick_scan_xd` launch. If data arrives but rviz2 shows a
**No transform** error, set **Fixed Frame** to the message's
`header.frame_id`, or publish the required static transform.
