# House in 3D with picoScan

> Use picoScan 3D scan recording to create PCD point clouds from selected viewpoints around a house, then inspect the captures in CloudCompare.

Source: https://sickag.github.io/sick_lidar_developer_guide/beginner-projects/house-3d-capture/

# House in 3D

Compatible with: LRS4000 picoScan100

This example shows how to use a picoScan150 3D scan recording as a starting
point for documenting a building. The sensor combines its 2D scan profiles with
rotation information from its internal IMU or an external encoder and exports
the result as a `.pcd` point-cloud file.

## Suggested Data Path

The on-device scan merger records one point cloud at a time.

Mount and orient the sensor so its scan plane sweeps the area of interest as
it rotates. Configure an IMU or encoder rotation source and the sensor offset
in **Application → 3D scan recording**. Clear the previous recording, capture
the sweep, stop recording, and wait for saving to finish. Download `/cloud.pcd`
before starting the next capture; the device keeps only the most recent point
cloud.

## Example Solution

The video demonstrates capturing the house as a 3D point cloud with
picoScan150:

*House environment captured as a 3D point cloud with picoScan.*

Open each `.pcd` capture in [CloudCompare](https://sickag.github.io/sick_lidar_developer_guide/visualization/cloudcompare/)
to inspect coverage, identify missing areas, and compare the separate
viewpoints.

The next video shows the captured point cloud being opened and inspected in
CloudCompare:

*House point cloud opened and inspected in CloudCompare.*
