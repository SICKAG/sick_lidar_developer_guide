# multiScan100 Overview

> Developer entry point for the SICK multiScan100 multi-layer 3D LiDAR family: setup, REST and CoLa interfaces, scan data, and device applications.

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/

# multiScan100

The multiScan100 is a family of multi-layer 3D LiDAR sensors. Supported
variants include the multiScan136, multiScan165, and multiScan166. For a sensor and cable combination to get started, see the [Starter Kit](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/starter-kit/).

[Specifications and data sheet on sick.com](https://www.sick.com/de/en/search?text=multiScan100)

<div class="product-scans product-scans--combined">
  <picture><source media="(prefers-reduced-motion: reduce)" srcset="../assets/multiScan100/img/multiscan100-scan-layers.png"><img src="https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/multiscan100-scan-layers.gif" width="817" height="295" alt="multiScan136/166 on the left, measuring from −22.7° to +42.8°, and multiScan165 on the right, from −7.3° to +35.3°, with positive elevation upward"></picture>
  *multiScan136/166 (left; high-resolution layers 6 and 14 emphasized) and multiScan165 (right). Schematic infrared beams in blue; angles are positive upward, opposite to the DIN ISO output sign.*
</div>

Find firmware, EPLAN and CAD data, NVIDIA Isaac Sim models, and Milestone
XProtect plug-ins on the *Downloads* tab of your device variant's product page:
[search for multiScan100 on sick.com](https://www.sick.com/de/en/search?text=multiScan100).
Select the files for your device variant; see [Release Notes](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/release-notes/)
for firmware changes.

See [Licenses](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/licenses/) for software packages, included functions, and
license part numbers.

<div class="io-flow" markdown>

<div class="io-flow__col" markdown>

**Input**

- [CoLa A/B](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/)
- [Digital inputs](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/electrical-connection/)
- [Ethernet](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/electrical-connection/)
- [HTTPS](https://sickag.github.io/sick_lidar_developer_guide/configuration/https-and-certificates/)
- [NTP](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/)
- [PTP](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/)
- [REST API](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/)
- [SOPASair](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/graphical-user-interface/)

</div>
<div class="io-flow__arrow" aria-hidden="true">→</div>
<div class="io-flow__col" markdown>

**Processing**

- [Contamination indication](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/contamination-indication/)
- [Device discovery](https://sickag.github.io/sick_lidar_developer_guide/shared-features/device-discovery/)
- [Echo filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/)
- [Field evaluation](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/)
- [Object evaluation](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/object-evaluation/)
- [Fog filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/)
- [Ground filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/)
- [Mounting transformation](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/graphical-user-interface/)
- [Moving-average filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/)
- [Multi-layer 3D scanning](https://sickag.github.io/sick_lidar_developer_guide/lidar-basics/)
- [Particle filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/)
- [Perpendicular distance](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/perpendicular-distance-measurement/)
- [Range and cuboid filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/)

</div>
<div class="io-flow__arrow" aria-hidden="true">→</div>
<div class="io-flow__col" markdown>

**Output**

- [CoLa A/B telegrams](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/)
- [Compact over UDP](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/)
- [Detection history](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/graphical-user-interface/)
- [Digital outputs](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/electrical-connection/)
- [Field-evaluation states](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/)
- [IMU data](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/)
- [MSGPACK over UDP](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/msgpack-format/)
- [Perpendicular-distance values](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/perpendicular-distance-measurement/)
- [REST JSON responses](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/)
- [ROS 2 via sick_scan_xd](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/ros-integration/)

</div>

</div>
*Inputs, onboard processing, and outputs of the **multiScan100**. Each column is an independent list.*

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
