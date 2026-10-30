# multiScan200 Overview

> Developer entry point for the SICK multiScan200 3D LiDAR family (multiScan270): web GUI, REST API, CoLa telegrams, native ROS 2, and firmware release notes.

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/

# multiScan200

The multiScan200 is a compact 3D LiDAR sensor family with high detection reliability in harsh environments. The first variant is the multiScan270.

[Specifications and data sheet on sick.com](https://www.sick.com/de/en/search?text=multiScan200)

<div class="product-scans product-scans--single">
  <picture><source media="(prefers-reduced-motion: reduce)" srcset="../assets/multiScan200/img/multiscan270-scan-layers.png"><img src="https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan200/img/multiscan270-scan-layers.gif" width="392" height="239" alt="multiScan270 with up to 192 scan layers and labelled physical elevation limits of −22.5° downward and +22.5° upward"></picture>
  *multiScan270: up to 192 layers, 45° vertical and 360° horizontal coverage, depending on configuration. Schematic infrared beams in blue; angles are positive upward.*
</div>

On sick.com, open your device variant's download area for firmware, EPLAN and CAD data,
and available NVIDIA Isaac Sim models and Milestone XProtect plug-ins.
See [Release Notes](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/release-notes/) for firmware changes.

<div class="io-flow" markdown>

<div class="io-flow__col" markdown>

**Input**

- [CoLa A/B](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/)
- [Digital inputs](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/electrical-connection/)
- [Gigabit Ethernet](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/electrical-connection/)
- [HTTPS](https://sickag.github.io/sick_lidar_developer_guide/configuration/https-and-certificates/)
- [NTP](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/)
- [PTP](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/)
- [REST API](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/)
- [SOPASair](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/graphical-user-interface/)

</div>
<div class="io-flow__arrow" aria-hidden="true">→</div>
<div class="io-flow__col" markdown>

**Processing**

- [Angle-range focus filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/#angle-range-focus-filter)
- [Blooming filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/#blooming-filter)
- [Compact 3D scanning](https://sickag.github.io/sick_lidar_developer_guide/lidar-basics/)
- [Contamination indication](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/contamination-indication/)
- [Device discovery](https://sickag.github.io/sick_lidar_developer_guide/shared-features/device-discovery/)
- [Echo filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/)
- [Field evaluation](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/)
- [High-precision mode](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/#moving-average-filter)
- [Interval filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/)
- [Particle filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/)
- [Sensitivity modes](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/#sensitivity-mode)
- [Time synchronization](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/)

</div>
<div class="io-flow__arrow" aria-hidden="true">→</div>
<div class="io-flow__col" markdown>

**Output**

- [Ambient-light images](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/graphical-user-interface/#data-output)
- [Compact over TCP](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/)
- [CoLa A/B telegrams](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/)
- [Contamination status](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/contamination-indication/)
- [Device status](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/)
- [Diagnostic and error data](https://sickag.github.io/sick_lidar_developer_guide/troubleshooting/error-codes/)
- [Digital outputs](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/electrical-connection/)
- [Field-evaluation states](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/)
- [IMU data](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/graphical-user-interface/#inertial-measuring-unit-imu)
- [Native ROS 2 topics](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/ros-integration/)
- [REST JSON responses](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/)
- [Synchronized timestamps](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/)
- [WebSocket JSON events](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/websocket-events/)

</div>

</div>
*Inputs, onboard processing, and outputs of the **multiScan200**. Each column is an independent list.*

Use the Product ID (PID) to find the exact product variant on [sick.com](https://www.sick.com/): enter the part number (P/N) and optional serial number (S/N), for example `1134610/25250710`. A complete [pid.sick.com](https://pid.sick.com/) URL is also accepted.

<form class="product-id-lookup" data-product-id-lookup>
  <label for="multiscan200-product-id">Product ID</label>
  <div class="product-id-lookup__control">
    <a class="notranslate" href="https://pid.sick.com/" translate="no">pid.sick.com/</a>
    <input id="multiscan200-product-id" name="product-id" type="text" inputmode="url" autocomplete="off" placeholder="1134610/25250710" required>
    <button type="submit">Open product</button>
  </div>
  <p class="product-id-lookup__status" data-product-id-status aria-live="polite"></p>
</form>
