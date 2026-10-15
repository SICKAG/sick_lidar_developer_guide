# LRS4000

![LRS4000 2D LiDAR sensor](../assets/LRS4000/img/product-photo.png)
<p class="caption product-image-caption">LRS4000 2D LiDAR sensor.</p>

The LRS4000 is a long-range 2D LiDAR sensor for demanding outdoor
applications. This developer section covers the LRS4581R. Use the Product ID
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
| [CoLa A/B](./cola-telegram-listing.md) | [3D scan recording](../integration-notes/3d-with-2d-lidars.md) | [CoLa A/B telegrams](./cola-telegram-listing.md) |
| [Digital inputs](./electrical-connection.md) | [Contamination indication](../on-device-applications/contamination-indication.md) | [Compact over TCP](../data-streaming/compact-format.md) |
| [Encoder](./electrical-connection.md) | [Device discovery](../shared-features/device-discovery.md) | [Contamination status](../on-device-applications/contamination-indication.md) |
| [Ethernet](./electrical-connection.md) | [Echo filtering](../data-streaming/filter-details.md) | [Detection history](./graphical-user-interface.md) |
| [HTTPS](../configuration/https-and-certificates.md) | [Field evaluation](../on-device-applications/field-evaluation.md) | [Diagnostic recordings](./graphical-user-interface.md) |
| [NTP](../shared-features/time-synchronization.md) | [Long-range 2D scanning](../lidar-basics.md) | [Digital outputs](./electrical-connection.md) |
| [PTP](../shared-features/time-synchronization.md) | [Mean filtering](../data-streaming/filter-details.md) | [Field-evaluation states](../on-device-applications/field-evaluation.md) |
| [REST API](./rest-api-openapi.md) | [Median filtering](../data-streaming/filter-details.md) | [LMDscandata over TCP](../data-streaming/lmdscandata-format.md) |
| [SOPASair](./graphical-user-interface.md) | [Motor synchronization](./motor-synchronization.md) | [Perpendicular-distance values](../on-device-applications/perpendicular-distance-measurement.md) |
| &nbsp; | [Particle filtering](../data-streaming/filter-details.md) | [REST JSON responses](./rest-api-openapi.md) |
| &nbsp; | [Perpendicular distance](../on-device-applications/perpendicular-distance-measurement.md) | [ROS 2 via sick_scan_xd](../integration-notes/ros-integration.md) |
| &nbsp; | [Range filtering](../data-streaming/filter-details.md) | &nbsp; |

</div>
