# multiScan200 3D LiDAR Sensor Developer Guide (multiScan270)

> Developer entry point for the SICK multiScan200 3D LiDAR family (multiScan270): web GUI, REST API, CoLa telegrams, native ROS 2, and firmware release notes.

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/

# multiScan200

The multiScan200 is a compact 3D LiDAR sensor family with high detection reliability in harsh environments. The first variant is the multiScan270.

<div class="product-scans product-scans--single">
  <picture><source media="(prefers-reduced-motion: reduce)" srcset="../assets/multiScan200/img/multiscan270-scan-layers.png"><img src="https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan200/img/multiscan270-scan-layers.gif" width="314" height="239" alt="multiScan270 with 192 closely spaced blue scan layers and fading wall hit points"></picture>
  *multiScan270: up to 192 layers across 45° vertically and 360° horizontally, depending on scan configuration. Blue represents infrared; housing, beam geometry, wall hits, and speed are schematic.*
</div>

[Find multiScan200 on sick.com](https://www.sick.com/de/en/search?text=multiScan200)
and open your device variant's download area for firmware, EPLAN and CAD data,
and available NVIDIA Isaac Sim models and Milestone XProtect plug-ins.
See [Release Notes](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/release-notes/) for firmware changes.

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

<div class="product-overview-table" markdown>

<p class="table-caption" markdown>Supported inputs, onboard processing functions, and outputs for the **multiScan200**.</p>

| Input | Processing | Output |
| :---: | :---: | :---: |
| [CoLa A/B](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/cola-telegram-listing/) | [Angle-range focus filtering](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/cola-telegram-listing/) | [Ambient-light images](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/graphical-user-interface/#data-output) |
| [Digital inputs](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/electrical-connection/) | [Blooming filtering](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/cola-telegram-listing/) | [Compact over TCP](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/) |
| [Gigabit Ethernet](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/electrical-connection/) | [Compact 3D scanning](https://sickag.github.io/sick_lidar_developer_guide/lidar-basics/) | [CoLa A/B telegrams](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/cola-telegram-listing/) |
| &nbsp; | &nbsp; | [Contamination status](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/contamination-indication/) |
| [HTTPS](https://sickag.github.io/sick_lidar_developer_guide/configuration/https-and-certificates/) | [Contamination indication](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/contamination-indication/) | [Device status](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/cola-telegram-listing/) |
| [NTP](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/) | [Device discovery](https://sickag.github.io/sick_lidar_developer_guide/shared-features/device-discovery/) | [Diagnostic and error data](https://sickag.github.io/sick_lidar_developer_guide/shared-features/error-codes/) |
| [PTP](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/) | [Echo filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) | [Digital outputs](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/electrical-connection/) |
| [REST API](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/rest-api-openapi/) | [Field evaluation](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/) | [Field-evaluation states](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/) |
| [SOPASair](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/graphical-user-interface/) | [High-precision mode](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/#moving-average-filter) | [IMU data](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/graphical-user-interface/#inertial-measuring-unit-imu) |
| &nbsp; | [Interval filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) | [Native ROS 2 topics](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/ros-integration/) |
| &nbsp; | [Particle filtering](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) | [REST JSON responses](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/rest-api-openapi/) |
| &nbsp; | [Sensitivity modes](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/cola-telegram-listing/) | [Synchronized timestamps](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/) |
| &nbsp; | [Time synchronization](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/) | &nbsp; |

</div>
