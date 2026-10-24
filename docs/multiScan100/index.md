# multiScan100 3D LiDAR Sensor Developer Guide

> Developer entry point for the SICK multiScan100 multi-layer 3D LiDAR family: setup, REST and CoLa interfaces, scan data, and device applications.

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/

# multiScan100

The multiScan100 is a family of multi-layer 3D LiDAR sensors. Supported
variants include the multiScan136, multiScan165, and multiScan166. Feature
availability can depend on the device configuration and variant.

<div class="product-scans">
  <picture><source media="(prefers-reduced-motion: reduce)" srcset="../assets/multiScan100/img/multiscan136-scan-layers.png"><img src="https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/multiscan136-scan-layers.gif" width="308" height="319" alt="multiScan136 and multiScan166 circular module beam patterns with thicker high-resolution layers, denser dots, and fading wall hit points"></picture><picture><source media="(prefers-reduced-motion: reduce)" srcset="../assets/multiScan100/img/multiscan165-scan-layers.png"><img src="https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/multiscan165-scan-layers.gif" width="353" height="291" alt="multiScan165 circular module beam patterns and fading wall hit points"></picture>
  *multiScan136/166 (left; thick rays and denser dots: high-resolution layers 6 and 14) and multiScan165 (right). Blue represents infrared; housing, beam geometry, wall hits, and speed are schematic.*
</div>

Find firmware, EPLAN and CAD data, NVIDIA Isaac Sim models, and Milestone
XProtect plug-ins in the official
[multiScan100 download area](https://www.sick.com/de/en/catalog/products/lidar-and-radar-sensors/lidar-sensors/multiscan100/muls1aa-114322-multiscan165/p/p680210?category=g568283&tab=downloads).
Select the files for your device variant; see [Release Notes](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/release-notes/)
for firmware changes.

Use the
Product ID (PID) to find the exact product variant on
[sick.com](https://www.sick.com/): enter the part number (P/N) and optional
serial number (S/N), for example `1134610/25250710`. A complete
[pid.sick.com](https://pid.sick.com/) URL is also accepted.

<form class="product-id-lookup" data-product-id-lookup>
  <label for="multiscan100-product-id">Product ID</label>
  <div class="product-id-lookup__control">
    <a class="notranslate" href="https://pid.sick.com/" translate="no">pid.sick.com/</a>
    <input id="multiscan100-product-id" name="product-id" type="text" inputmode="url" autocomplete="off" placeholder="1134610/25250710" required>
    <button type="submit">Open product</button>
  </div>
  <p class="product-id-lookup__status" data-product-id-status aria-live="polite"></p>
</form>

<div class="product-overview-table" markdown>

<p class="table-caption" markdown>Supported inputs, onboard processing functions, and outputs for the **multiScan100**.</p>

| Input | Processing | Output |
| :---: | :---: | :---: |
| [CoLa A/B](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/cola-telegram-listing/) | [Contamination indication](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/contamination-indication/) | [CoLa A/B telegrams](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/cola-telegram-listing/) |
| [Digital inputs](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/electrical-connection/) | [Device discovery](https://sickag.github.io/sick_lidar_developer_guide/shared-features/device-discovery/) | [Compact over UDP](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/) |
| [Ethernet](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/electrical-connection/) | [Echo filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) | [Detection history](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/graphical-user-interface/) |
| [HTTPS](https://sickag.github.io/sick_lidar_developer_guide/configuration/https-and-certificates/) | [Field evaluation](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/) | [Digital outputs](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/electrical-connection/) |
| [NTP](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/) | [Fog filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) | [Field-evaluation states](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/) |
| [PTP](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/) | [Ground filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) | [IMU data](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/) |
| [REST API](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/) | [Mounting transformation](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/graphical-user-interface/) | [MSGPACK over UDP](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/msgpack-format/) |
| [SOPASair](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/graphical-user-interface/) | [Moving-average filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) | [Perpendicular-distance values](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/perpendicular-distance-measurement/) |
| &nbsp; | [Multi-layer 3D scanning](https://sickag.github.io/sick_lidar_developer_guide/lidar-basics/) | [REST JSON responses](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/) |
| &nbsp; | [Particle filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) | [ROS 2 via sick_scan_xd](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/ros-integration/) |
| &nbsp; | [Perpendicular distance](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/perpendicular-distance-measurement/) | &nbsp; |
| &nbsp; | [Range and cuboid filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) | &nbsp; |

</div>
