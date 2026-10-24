# LRS4000 Long-Range 2D LiDAR Sensor Developer Guide

> Developer entry point for the SICK LRS4000 long-range 2D LiDAR sensor: SOPASair, REST and CoLa, measurement data, synchronization, and applications.

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/

# LRS4000

The LRS4000 is a long-range 2D LiDAR sensor for demanding outdoor
applications. This developer section covers the LRS4581R.

<div class="product-scans product-scans--single">
  <picture><source media="(prefers-reduced-motion: reduce)" srcset="../assets/LRS4000/img/lrs4000-scan-plane.png"><img src="https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/lrs4000-scan-plane.gif" width="396" height="193" alt="LRS4000 with a rotating blue beam and fading wall hit points in a single horizontal scan plane"></picture>
  *LRS4000: one scan plane, up to 360° depending on settings. Blue represents infrared; beam geometry, wall hits, and speed are schematic.*
</div>

Find firmware, EPLAN and CAD data, NVIDIA Isaac Sim models, and Milestone
XProtect plug-ins in the official
[LRS4000 download area](https://www.sick.com/de/en/catalog/products/lidar-and-radar-sensors/lidar-sensors/lrs4000/c/g555594?tab=downloads).
Select the files for your device variant; see [Release Notes](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/release-notes/)
for firmware changes.

Use the Product ID
(PID) to find the exact product variant on [sick.com](https://www.sick.com/):
enter the part number (P/N) and optional serial number (S/N), for example
`1134610/25250710`. A complete [pid.sick.com](https://pid.sick.com/) URL is
also accepted.

<form class="product-id-lookup" data-product-id-lookup>
  <label for="lrs4000-product-id">Product ID</label>
  <div class="product-id-lookup__control">
    <a class="notranslate" href="https://pid.sick.com/" translate="no">pid.sick.com/</a>
    <input id="lrs4000-product-id" name="product-id" type="text" inputmode="url" autocomplete="off" placeholder="1134610/25250710" required>
    <button type="submit">Open product</button>
  </div>
  <p class="product-id-lookup__status" data-product-id-status aria-live="polite"></p>
</form>

<div class="product-overview-table" markdown>

<p class="table-caption" markdown>Supported inputs, onboard processing functions, and outputs for the **LRS4000**.</p>

| Input | Processing | Output |
| :---: | :---: | :---: |
| [CoLa A/B](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/cola-telegram-listing/) | [3D scan recording](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/3d-with-2d-lidars/) | [CoLa A/B telegrams](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/cola-telegram-listing/) |
| [Digital inputs](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/electrical-connection/) | [Contamination indication](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/contamination-indication/) | [Compact over TCP](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/) |
| [Encoder](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/electrical-connection/) | [Device discovery](https://sickag.github.io/sick_lidar_developer_guide/shared-features/device-discovery/) | [Contamination status](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/contamination-indication/) |
| [Ethernet](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/electrical-connection/) | [Echo filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) | [Detection history](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/graphical-user-interface/) |
| [HTTPS](https://sickag.github.io/sick_lidar_developer_guide/configuration/https-and-certificates/) | [Field evaluation](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/) | [Diagnostic recordings](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/graphical-user-interface/) |
| [NTP](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/) | [Long-range 2D scanning](https://sickag.github.io/sick_lidar_developer_guide/lidar-basics/) | [Digital outputs](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/electrical-connection/) |
| [PTP](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/) | [Mean filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) | [Field-evaluation states](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/) |
| [REST API](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/) | [Median filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) | [LMDscandata over TCP](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/lmdscandata-format/) |
| [SOPASair](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/graphical-user-interface/) | [Motor synchronization](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/motor-synchronization/) | [Perpendicular-distance values](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/perpendicular-distance-measurement/) |
| &nbsp; | [Particle filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) | [REST JSON responses](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/) |
| &nbsp; | [Perpendicular distance](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/perpendicular-distance-measurement/) | [ROS 2 via sick_scan_xd](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/ros-integration/) |
| &nbsp; | [Range filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) | &nbsp; |

</div>
