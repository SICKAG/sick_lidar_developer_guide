# LRS4000 Overview

> Developer entry point for the SICK LRS4000 long-range 2D LiDAR sensor: SOPASair, REST and CoLa, measurement data, synchronization, and applications.

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/

# LRS4000

The LRS4000 is a long-range 2D LiDAR sensor for demanding outdoor
applications. This developer section covers the LRS4581R. For a sensor and cable combination to get started, see the [Starter Kit](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/starter-kit/).

[Specifications and data sheet on sick.com](https://www.sick.com/de/en/search?text=LRS4000)

<div class="product-scans product-scans--single">
  <picture><source media="(prefers-reduced-motion: reduce)" srcset="../assets/LRS4000/img/lrs4000-scan-plane.png"><img src="https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/lrs4000-scan-plane.gif" width="396" height="193" alt="LRS4000 with a rotating blue beam and fading wall hit points in a single horizontal scan plane"></picture>
  *LRS4000: one scan plane, up to 360° depending on settings. Blue represents infrared; beam geometry, wall hits, and speed are schematic.*
</div>

Find firmware, EPLAN and CAD data, NVIDIA Isaac Sim models, and Milestone
XProtect plug-ins on the *Downloads* tab of your device variant's product page:
[search for LRS4000 on sick.com](https://www.sick.com/de/en/search?text=LRS4000).
Select the files for your device variant; see [Release Notes](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/release-notes/)
for firmware changes.

<div class="io-flow" markdown>

<div class="io-flow__col" markdown>

**Input**

- [CoLa A/B](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/)
- [Digital inputs](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/electrical-connection/)
- [Encoder](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/electrical-connection/)
- [Ethernet](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/electrical-connection/)
- [HTTPS](https://sickag.github.io/sick_lidar_developer_guide/configuration/https-and-certificates/)
- [NTP](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/)
- [PTP](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/)
- [REST API](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/)
- [SOPASair](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/graphical-user-interface/)

</div>
<div class="io-flow__arrow" aria-hidden="true">→</div>
<div class="io-flow__col" markdown>

**Processing**

- [3D scan recording](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/3d-scan-recording/)
- [Contamination indication](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/contamination-indication/)
- [Device discovery](https://sickag.github.io/sick_lidar_developer_guide/shared-features/device-discovery/)
- [Echo filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/)
- [Field evaluation](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/)
- [Long-range 2D scanning](https://sickag.github.io/sick_lidar_developer_guide/lidar-basics/)
- [Mean filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/)
- [Median filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/)
- [Motor synchronization](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/motor-synchronization/)
- [Particle filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/)
- [Perpendicular distance](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/perpendicular-distance-measurement/)
- [Range filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/)

</div>
<div class="io-flow__arrow" aria-hidden="true">→</div>
<div class="io-flow__col" markdown>

**Output**

- [CoLa A/B telegrams](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/)
- [Compact over TCP](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/)
- [Contamination status](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/contamination-indication/)
- [Detection history](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/graphical-user-interface/)
- [Diagnostic recordings](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/graphical-user-interface/)
- [Digital outputs](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/electrical-connection/)
- [Field-evaluation states](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/)
- [LMDscandata over TCP](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/lmdscandata-format/)
- [Perpendicular-distance values](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/perpendicular-distance-measurement/)
- [REST JSON responses](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/)
- [ROS 2 via sick_scan_xd](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/ros-integration/)

</div>

</div>
*Inputs, onboard processing, and outputs of the **LRS4000**. Each column is an independent list.*

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
