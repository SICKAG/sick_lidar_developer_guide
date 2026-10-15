# ROS Bag | db3

ROS bag recordings capture sensor topics in a ROS environment. They support scenario replay, integrate with robotics frameworks, and suit algorithm development for AMR validation, SLAM, and AI or perception projects. ROS 1 saves them as `.bag` files, ROS 2 as bag databases (`.db3` or `.mcap`).

To get the sensor data into ROS 2, use [Native ROS 2](../integration-notes/ros-integration.md#native-ros-2) where the device supports sensor-side DDS publishing, or [sick_scan_xd](../integration-notes/ros-integration.md#sick_scan_xd) for host-side publishing.

## Record Sensor Topics

With the sensor publishing in ROS 2, record the topics you need. Record only the topics your application uses, because point clouds produce large files.

```bash
ros2 bag record -o my_recording /cloud/all_points
```

List the available topics with `ros2 topic list`. Stop the recording with ++ctrl+c++.

## Replay a Recording

Play the recording back and visualize it in `rviz2`:

```bash
ros2 bag play my_recording
```

Use `ros2 bag info my_recording` to check the recorded topics, message counts, and duration.

## picoScan150 Sample Recordings

SICK provides sample recordings of a picoScan150 on a mobile robot, together with a camera image, in indoor production and logistics scenarios. Use them to test your processing pipeline before a sensor is available.

<p class="table-caption" markdown>**picoScan150 Sample Recordings:** scenario, length, size, and download.</p>

| Scenario | Length | Size | Download |
| --- | --- | --- | --- |
| Electronic production: static scenario | ~15 s | 376 MB | [picoScan150_S1.bag](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/picoScan150/picoScan150_S1.bag) |
| Electronic production: dynamic scenario | ~15 s | 376 MB | [picoScan150_S2.bag](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/picoScan150/picoScan150_S2.bag) |
| Electronic production: dynamic scenario with a person walking by | ~15 s | 376 MB | [picoScan150_S3.bag](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/picoScan150/picoScan150_S3.bag) |
| Electronic production: approaching a manufacturing cell | ~15 s | 376 MB | [picoScan150_S4.bag](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/picoScan150/picoScan150_S4.bag) |
| Logistics: approaching a pallet | ~15 s | 376 MB | [picoScan150_S5.bag](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/picoScan150/picoScan150_S5.bag) |
| Logistics: long corridor | ~30 s | 759 MB | [picoScan150_S6.bag](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/picoScan150/picoScan150_S6.bag) |
| Electronic production: AMR driving by | ~30 s | 759 MB | [picoScan150_S7.bag](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/picoScan150/picoScan150_S7.bag) |

All recordings share these properties:

<p class="table-caption" markdown>**picoScan150 Sample Recordings:** property and value.</p>

| Property | Value |
| --- | --- |
| Sensor | picoScan150 (2D LiDAR) and a camera |
| Application | Mobile robot, indoor |
| Format | ROS 1 bag (`.bag`) |
| Topics | `cloud_unstructured_fullframe` (`sensor_msgs/PointCloud2`), `cv_camera/image_raw` (`sensor_msgs/Image`) |

The recordings are ROS 1 bag files. To replay them in ROS 2, convert them first, for example with the [rosbags](https://pypi.org/project/rosbags/) Python package:

```bash
pip install rosbags
rosbags-convert --src picoScan150_S1.bag --dst picoScan150_S1
ros2 bag play picoScan150_S1
```

## multiScan100 Sample Recordings

SICK provides multiScan100 sample recordings from production and logistics environments. Use them to validate perception pipelines, object detection, and AMR applications before a sensor is available on site.

<p class="table-caption" markdown>**multiScan100 Sample Recordings:** scenario, basic recording, and advanced recording.</p>

| Scenario | Basic recording | Advanced recording |
| --- | --- | --- |
| Electronic production: people walking by | [Mounting 1](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/electronicProduction-peopleWalkingBy/electronicProduction-peopleWalkingBy-mounting1-basic/) · [Mounting 2](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/electronicProduction-peopleWalkingBy/electronicProduction-peopleWalkingBy-mounting2-basic/) | [Mounting 1](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/electronicProduction-peopleWalkingBy/electronicProduction-peopleWalkingBy-mounting1-advanced/) · [Mounting 2](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/electronicProduction-peopleWalkingBy/electronicProduction-peopleWalkingBy-mounting2-advanced/) |
| Electronic production: approaching manufacturing cell | [Mounting 1](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/electronicProduction-approachingManufacturingCell/electronicProduction-approachingManufacturingCell-mounting1-basic/) · [Mounting 2](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/electronicProduction-approachingManufacturingCell/electronicProduction-approachingManufacturingCell-mounting2-basic/) | [Mounting 1](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/electronicProduction-approachingManufacturingCell/electronicProduction-approachingManufacturingCell-mounting1-advanced/) · [Mounting 2](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/electronicProduction-approachingManufacturingCell/electronicProduction-approachingManufacturingCell-mounting2-advanced/) |
| Logistics: approaching storage rack | [Mounting 1](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/logistics-approachingStorageRack/logistics-approachingStorageRack-mounting1-basic/) · [Mounting 2](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/logistics-approachingStorageRack/logistics-approachingStorageRack-mounting2-basic/) | [Mounting 1](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/logistics-approachingStorageRack/logistics-approachingStorageRack-mounting1-advanced/) · [Mounting 2](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/logistics-approachingStorageRack/logistics-approachingStorageRack-mounting2-advanced/) |
| Logistics: approaching pallets | [Mounting 1](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/logistics-approachingPallets/logistics-approachingPallets-mounting1-basic/) · [Mounting 2](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/logistics-approachingPallets/logistics-approachingPallets-mounting2-basic/) | [Mounting 1](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/logistics-approachingPallets/logistics-approachingPallets-mounting1-advanced/) · [Mounting 2](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/logistics-approachingPallets/logistics-approachingPallets-mounting2-advanced/) |
| Logistics: driving through a corridor | [Mounting 1](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/logistics-drivingThroughACorridor/logistics-drivingThroughACorridor-mounting1-basic/) · [Mounting 2](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/logistics-drivingThroughACorridor/logistics-drivingThroughACorridor-mounting2-basic/) | [Mounting 1](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/logistics-drivingThroughACorridor/logistics-drivingThroughACorridor-mounting1-advanced/) · [Mounting 2](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/logistics-drivingThroughACorridor/logistics-drivingThroughACorridor-mounting2-advanced/) |
| Electronic production: AGV driving by | [Mounting 1](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/electronicProduction-agvDrivingBy/electronicProduction-agvDrivingBy-mounting1-basic/) · [Mounting 2](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/electronicProduction-agvDrivingBy/electronicProduction-agvDrivingBy-mounting2-basic/) | [Mounting 1](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/electronicProduction-agvDrivingBy/electronicProduction-agvDrivingBy-mounting1-advanced/) · [Mounting 2](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/electronicProduction-agvDrivingBy/electronicProduction-agvDrivingBy-mounting2-advanced/) |
| Electronic production: AGV leaving manufacturing cell | [Mounting 1](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/electronicProduction-agvLeavingManufacturingCell/electronicProduction-agvLeavingManufacturingCell-mounting1-basic/) · [Mounting 2](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/electronicProduction-agvLeavingManufacturingCell/electronicProduction-agvLeavingManufacturingCell-mounting2-basic/) | [Mounting 1](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/electronicProduction-agvLeavingManufacturingCell/electronicProduction-agvLeavingManufacturingCell-mounting1-advanced/) · [Mounting 2](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/electronicProduction-agvLeavingManufacturingCell/electronicProduction-agvLeavingManufacturingCell-mounting2-advanced/) |
| Electronic production: two AGVs driving by | [Basic](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/electronicProduction-twoAGVsDrivingBy/electronicProduction-twoAGVsDrivingBy-basic/) | [Advanced](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/electronicProduction-twoAGVsDrivingBy/electronicProduction-twoAGVsDrivingBy-advanced/) |
| Logistics: pallet truck driving by | [Basic](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/logistics-palletTruckDrivingBy/logistics-palletTruckDrivingBy-basic/) | [Advanced](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/logistics-palletTruckDrivingBy/logistics-palletTruckDrivingBy-advanced/) |
| Logistics: approaching an edge | [Basic](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/logistics-approachingAnEdge/logistics-approachingAnEdge-basic/) | [Advanced](https://sickdistribution.jfrog.io/artifactory/ros-bag-data-generic-local/multiScan/electronicProduction/logistics-approachingAnEdge/logistics-approachingAnEdge-advanced/) |

All recordings share these properties:

<p class="table-caption" markdown>**multiScan100 Sample Recordings:** property and value.</p>

| Property | Value |
| --- | --- |
| Sensor | multiScan136 / multiScan165 (3D LiDAR) and a camera |
| Application | Mobile robot, indoor |
| Format | ROS 2 bag database (`.db3`) |
| Topics | `/multiscan136/cloud_unstructured_fullframe`, `/multiscan165/cloud_unstructured_fullframe` and camera image topics |

The recordings are `.db3` files and can be replayed in ROS 2 directly. For ROS 1 compatibility, convert them first with the [rosbags](https://pypi.org/project/rosbags/) Python package.

## Related Articles

- [multiScan100: rosbag recordings - production hall](https://support.sick.com/sick-knowledgebase/article/?code=KA-09442)
- [picoScan100: rosbag recordings](https://support.sick.com/sick-knowledgebase/article/?code=KA-09356)
