# Bulk Scan with LiDAR: Material Height on a Conveyor

> Measure the height of woodchips or other bulk material on a conveyor belt with on-device perpendicular distance measurement.

Source: https://sickag.github.io/sick_lidar_developer_guide/beginner-projects/bulk-scan/

# Bulk Scan

Compatible with: LRS4000 picoScan100

This project measures the height of woodchips or other bulk material on a
conveyor belt. Mounted above the belt, the sensor scans the material surface
and reports its distance to the empty belt. It is a height measurement, not a
calibrated volume measurement; a volume estimate needs your own processing.

![LiDAR mounted above a conveyor belt carrying woodchips, with the scan area highlighted in purple](https://sickag.github.io/sick_lidar_developer_guide/assets/shared-features/woodchip-volume-conveyor.png)
*Example woodchip conveyor installation. The highlighted scan area covers the material profile across the belt.*

Use [Perpendicular Distance Measurement](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/perpendicular-distance-measurement/)
as a starting point for measuring material height:

1. In SOPASair, open **Application > Perpendicular distance measurement** and add an evaluation group.
2. Draw the zone across the belt and set the reference line to the empty belt surface.
3. Save the configuration and read the minimum and maximum distances from the result list or `GET /api/perpendicularDistanceResult`.
4. Check the result: with an empty belt, no distance is reported; with a test object of known height on the belt, the maximum distance matches that height.

To estimate volume throughput, your application can calculate the cross-sectional area from the scan profile and multiply it by the belt speed.

*Perpendicular-distance measurement demonstration for the woodchip example.*
