# 3D Scan Recording: On-Device Point Clouds from a 2D LiDAR

> Record a 3D point cloud on an LRS4000 or picoScan150 that rotates on an axis, using the IMU or an encoder, and download it as a PCD file.

Source: https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/3d-scan-recording/

# 3D Scan Recording

Compatible with: LRS4000 picoScan100

3D scan recording turns a rotating 2D LiDAR into a 3D scanner without host-side
geometry code. While the sensor rotates on an axis, it combines consecutive 2D
scans with the rotation angle and stores one point cloud as a `.pcd` file on
the device. The angle comes from the built-in IMU or from an encoder on the
axis. Open the result in [CloudCompare](https://sickag.github.io/sick_lidar_developer_guide/visualization/cloudcompare/).

The device keeps only the most recent point cloud, and there is no continuous
3D output. For continuous 3D data or custom transforms, process the scans on
the host as described in [3D With 2D LiDARs](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/3d-with-2d-lidars/).

![3D scan recording interface](https://sickag.github.io/sick_lidar_developer_guide/assets/picoScan100/img/sopasair-application-pointcloud.png)
*Live capture of the 3D scan recording interface on a picoScan100.*

## Record in SOPASair

1. Mount the sensor so its scan plane sweeps the area of interest as it rotates.
2. Open **Application → 3D scan recording**, select the rotation source (IMU or
   encoder), and enter the sensor offset from the rotation axis.
3. Start the recording, rotate the sensor through the sweep, and stop the
   recording.
4. Download the point cloud when saving is complete.

## Record over the REST API

Writing parameters and calling methods requires
[challenge-response authentication](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

<p class="table-caption" markdown>**Record over the REST API:** parameter and values.</p>

| Parameter           | Values                                                         |
| ------------------- | -------------------------------------------------------------- |
| `ScanMergerEnabled` | `true` / `false`                                               |
| `ScanMergerSource`  | `0` IMU, `1` ENCODER                                           |
| `ScanMergeTrigger`  | `0` METHOD; on the LRS4000 also `1` DIGITAL_INPUT              |
| `RotationOffset`    | `{x, y, z}` in mm: sensor offset from the rotation axis        |

1. Write the parameters and persist them with `POST /api/WriteEeprom`.
2. picoScan150 only: `POST /api/ResetScanMergeView` to clear the previous recording.
3. `POST /api/StartScanMerge` and move the axis through the sweep. With
   `ScanMergeTrigger = 1`, a digital input starts and stops the recording instead.
4. `POST /api/StopScanMerge`.
5. picoScan150 only: poll `GET /api/MergeSaving` until it changes from `true` back to `false`.
6. Download the point cloud. On the picoScan150, use port 80 outside `/api/`:
   `curl http://192.168.0.1/cloud.pcd -o cloud.pcd`. On the LRS4000, download it
   in SOPASair under **Application → 3D scan recording**.

The endpoints are listed in the [LRS4000](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/) and
[picoScan100](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-rest-openapi/) REST API references. For a
complete example, see the [House 3D Capture](https://sickag.github.io/sick_lidar_developer_guide/beginner-projects/house-3d-capture/)
project.
