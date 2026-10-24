# picoScan100 2D LiDAR Guide: picoScan120 and picoScan150

> Developer guide for the SICK picoScan100 2D LiDAR family (picoScan120, picoScan150): web GUI, REST API, CoLa telegrams, licenses, and release notes.

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/

# picoScan100

The picoScan100 is a compact 2D LiDAR sensor with one scan plane and a 276° scan range. It comes in two variants: the picoScan120 and the picoScan150.

<div class="product-scans product-scans--single">
  <picture><source media="(prefers-reduced-motion: reduce)" srcset="../assets/picoScan100/img/picoscan150-scan-plane.png"><img src="https://sickag.github.io/sick_lidar_developer_guide/assets/picoScan100/img/picoscan150-scan-plane.gif" width="384" height="190" alt="picoScan150 with a blue beam sweeping its 276-degree scan plane and fading wall hit points"></picture>
  *picoScan150: one 276° scan plane. Blue represents infrared; beam geometry, wall hits, and speed are schematic.*
</div>

Open the official
[picoScan100 download area](https://www.sick.com/de/en/catalog/products/lidar-and-radar-sensors/lidar-sensors/picoscan100/pics150-01000-pro-1/p/p677850?category=g569793&tab=downloads)
for firmware, EPLAN and CAD data, and available NVIDIA Isaac Sim models and
Milestone XProtect plug-ins. Select the files for your device variant; see
[Licenses](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/licenses/) for feature availability and
[Release Notes](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/release-notes/) for firmware changes.

Use the Product ID (PID) to find the exact product variant on [sick.com](https://www.sick.com/): enter the part number (P/N) and optional serial number (S/N), for example `1134610/25250710`. A complete [pid.sick.com](https://pid.sick.com/) URL is also accepted.

<form class="product-id-lookup" data-product-id-lookup>
  <label for="picoscan100-product-id">Product ID</label>
  <div class="product-id-lookup__control">
    <a class="notranslate" href="https://pid.sick.com/" translate="no">pid.sick.com/</a>
    <input id="picoscan100-product-id" name="product-id" type="text" inputmode="url" autocomplete="off" placeholder="1134610/25250710" required>
    <button type="submit">Open product</button>
  </div>
  <p class="product-id-lookup__status" data-product-id-status aria-live="polite"></p>
</form>

<div class="product-overview-table" markdown>

<p class="table-caption" markdown>Supported inputs, onboard processing functions, and outputs for the **picoScan100**.</p>

| Input | Processing | Output |
| :---: | :---: | :---: |
| [CoLa A/B](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/cola-telegram-listing/) | [2D scan profiles](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/graphical-user-interface/) | [CoLa A/B telegrams](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/cola-telegram-listing/) |
| [Digital inputs](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/electrical-connection/) | [Contamination indication](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/contamination-indication/) | [Compact over UDP](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/) |
| [Ethernet](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/electrical-connection/) | [Device discovery](https://sickag.github.io/sick_lidar_developer_guide/shared-features/device-discovery/) | [Contamination status](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/contamination-indication/) |
| [HTTPS](https://sickag.github.io/sick_lidar_developer_guide/configuration/https-and-certificates/) | [Echo filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) | [Digital outputs](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/electrical-connection/) |
| [NTP](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/) | [Field evaluation](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/) | [Field-evaluation states](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/) |
| [PoE](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/electrical-connection/) | [Fog filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) | [IMU data](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/) |
| [PTP](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/) | [Interval filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) | [LMDscandata over TCP](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/lmdscandata-format/) |
| [PWR and I/O connector](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/electrical-connection/) | [Moving-average filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) | [MSGPACK over UDP](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/msgpack-format/) |
| [REST API](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/) | [Particle filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) | [Native ROS 2 topics](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/ros-integration/) |
| [SOPASair](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/graphical-user-interface/) | [Perpendicular distance](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/perpendicular-distance-measurement/) | [Perpendicular-distance values](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/perpendicular-distance-measurement/) |
| &nbsp; | [Radial-distance filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) | [REST JSON responses](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/) |
| &nbsp; | [Region-of-interest filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) | [WebSocket JSON events](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/websocket-events/) |
| &nbsp; | [Sensitivity modes](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/graphical-user-interface/) | &nbsp; |

</div>
