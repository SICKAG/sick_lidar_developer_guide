# picoScan100 Overview

> Developer guide for the SICK picoScan100 2D LiDAR family (picoScan120, picoScan150): web GUI, REST API, CoLa telegrams, licenses, and release notes.

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/

# picoScan100

The picoScan100 is a compact 2D LiDAR sensor with one scan plane and a 276° scan range. It comes in two variants: the picoScan120 and the picoScan150. For a sensor and cable combination to get started, see the [Starter Kit](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/starter-kit/).

[Specifications and data sheet on sick.com](https://www.sick.com/de/en/search?text=picoScan100)

<div class="product-scans product-scans--single">
  <picture><source media="(prefers-reduced-motion: reduce)" srcset="../assets/picoScan100/img/picoscan150-scan-plane.png"><img src="https://sickag.github.io/sick_lidar_developer_guide/assets/picoScan100/img/picoscan150-scan-plane.gif" width="384" height="190" alt="picoScan150 with a blue beam sweeping its 276-degree scan plane and fading wall hit points"></picture>
  *picoScan150: one 276° scan plane. Blue represents infrared; beam geometry, wall hits, and speed are schematic.*
</div>

[Search for picoScan100 on sick.com](https://www.sick.com/de/en/search?text=picoScan100)
and open the *Downloads* tab of your device variant's product page for firmware, EPLAN and CAD data, and available NVIDIA Isaac Sim models and
Milestone XProtect plug-ins. Select the files for your device variant; see
[Licenses](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/licenses/) for feature availability and
[Release Notes](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/release-notes/) for firmware changes.

<div class="io-flow" markdown>

<div class="io-flow__col" markdown>

**Input**

- [CoLa A/B](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-cola-telegrams/)
- [Digital inputs](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/electrical-connection/)
- [Ethernet](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/electrical-connection/)
- [HTTPS](https://sickag.github.io/sick_lidar_developer_guide/configuration/https-and-certificates/)
- [NTP](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/)
- [PTP](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/)
- [PWR and I/O connector](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/electrical-connection/)
- [REST API](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-rest-openapi/)
- [SOPASair](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/graphical-user-interface/)

</div>
<div class="io-flow__arrow" aria-hidden="true">→</div>
<div class="io-flow__col" markdown>

**Processing**

- [3D scan recording](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/3d-scan-recording/)
- [2D scan profiles](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/graphical-user-interface/)
- [Contamination indication](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/contamination-indication/)
- [Device discovery](https://sickag.github.io/sick_lidar_developer_guide/shared-features/device-discovery/)
- [Echo filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/)
- [Field evaluation](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/)
- [Fog filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/)
- [Interval filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/)
- [Moving-average filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/)
- [Particle filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/)
- [Perpendicular distance](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/perpendicular-distance-measurement/)
- [Radial-distance filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/)
- [Region-of-interest filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/)
- [Sensitivity modes](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/#sensitivity-mode)

</div>
<div class="io-flow__arrow" aria-hidden="true">→</div>
<div class="io-flow__col" markdown>

**Output**

- [CoLa A/B telegrams](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-cola-telegrams/)
- [Compact over UDP](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/)
- [Contamination status](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/contamination-indication/)
- [Digital outputs](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/electrical-connection/)
- [Field-evaluation states](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/)
- [IMU data](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/)
- [LMDscandata over TCP](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/lmdscandata-format/)
- [MSGPACK over UDP](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/msgpack-format/)
- [Native ROS 2 topics](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/ros-integration/)
- [Perpendicular-distance values](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/perpendicular-distance-measurement/)
- [REST JSON responses](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-rest-openapi/)
- [WebSocket JSON events](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/websocket-events/)

</div>

</div>
*Inputs, onboard processing, and outputs of the **picoScan100**. Each column is an independent list.*

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
