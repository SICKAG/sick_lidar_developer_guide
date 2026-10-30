# Common SICK LiDAR Issues and Quick Fixes

> Symptom and check tables for SICK LiDAR connection, configuration, REST access, and measurement-data problems.

Source: https://sickag.github.io/sick_lidar_developer_guide/troubleshooting/common-issues/

# Common Issues

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

Quick fixes for the problems you are most likely to encounter during commissioning and integration. Each row links to the page with the details.
Available settings, protocols, and menu paths vary by device family and firmware.
Use the relevant device guide and release notes to confirm support.

## Connection

<p class="table-caption" markdown>**Connection:** symptom and check.</p>

| Symptom | Check |
| --- | --- |
| Sensor not reachable / ping fails | Computer and sensor in the same subnet; power and Ethernet connected ([Getting Started](https://sickag.github.io/sick_lidar_developer_guide/getting-started/)) |
| IP address unknown | [Device Discovery](https://sickag.github.io/sick_lidar_developer_guide/shared-features/device-discovery/): SOPAS ET search, or ARP when device search is disabled |
| Lost connection after an IP change | Move the computer to the new subnet, or use device search to find the sensor |
| IP change through device search is rejected | The default IP change policy allows it only within 60 s after boot; reboot or log in ([IP Address Assignment](https://sickag.github.io/sick_lidar_developer_guide/shared-features/ip-address-assignment/#troubleshooting)) |
| Web UI does not load | Open `http://<ip>/` in Chrome, Edge, or Firefox; clear the cache; check that the web server is not disabled ([Cybersecurity](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/cybersecurity/#web-server)) |
| HTTPS refuses connections after a certificate upload | Read `httpsStatus` over HTTP on port 80, fix the certificate, and upload it again ([HTTPS & Certificates](https://sickag.github.io/sick_lidar_developer_guide/configuration/https-and-certificates/#remove-the-bundle)) |

## Configuration

<p class="table-caption" markdown>**Configuration:** symptom and check.</p>

| Symptom | Check |
| --- | --- |
| Cannot change settings in the web UI | Log in with an enabled [user level](https://sickag.github.io/sick_lidar_developer_guide/shared-features/user-levels/); without login, the UI is read-only |
| REST response has `header.status` 4 (Access Denied) | The HTTP status is always `200`; check `header.status`. Fetch a new challenge for every `POST`, check the password and that the user level is enabled, and wait 30 s after five failed logins ([REST Interface](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#status-codes-and-errors)) |
| REST file transfer returns 403 | Send a valid `X-Session-Token` header ([Backup & Restore](https://sickag.github.io/sick_lidar_developer_guide/configuration/configuration-backup-and-restore/)) |
| Settings lost after power cycle | Persist with `WriteEeprom` or **Save permanently** ([REST Interface](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#reading-vs-writing)) |
| CoLa `sFA` error response | Look up the [CoLa error code](https://sickag.github.io/sick_lidar_developer_guide/configuration/cola-interface/#cola-error-codes) |
| Web UI shows an error ID | Look up the ID in the [Error Codes](https://sickag.github.io/sick_lidar_developer_guide/troubleshooting/error-codes/) list |
| Need to restore factory settings | [How to perform a factory reset](https://support.sick.com/sick-knowledgebase/article?id=e1f49414-a351-f011-877b-7c1e52263b55) |
| Firmware update stuck or fails | Do not power-cycle while `UpdateState` is `1`; allow 2-5 minutes for flash and reboot; on `3` (Error), check for the correct `.spk.signed` package ([Firmware Update](https://sickag.github.io/sick_lidar_developer_guide/shared-features/firmware-update/#error-handling)) |

## Measurement Data

<p class="table-caption" markdown>**Measurement Data:** symptom and check.</p>

| Symptom | Check |
| --- | --- |
| No UDP data arrives | Data output enabled and destination IP/port set to your computer; Windows network profile set to Private; firewall allows the UDP port ([Compact Format](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/#transport)) |
| No TCP data on LRS4000 or multiScan200 | The sensor sends Compact over TCP only while a client is connected; connect to port `2115` ([Compact Format](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/#transport)) |
| LMDscandata returns only zeros | The output format is not set to LMDscandata; `sRN LMDscandata` then answers without an error ([LMDscandata Format](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/lmdscandata-format/#receive-lmdscandata)) |
| Scan view empty | Measurement is active and data output is enabled in the device's web interface |
| CRC errors in your parser | Compact: CRC32 over the whole frame; MSGPACK: CRC32 over the MSGPACK buffer only ([MSGPACK Format](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/msgpack-format/#framing)) |
| Fewer points than expected | [Filters](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) and scan range reduce or zero out points |
| No ROS 2 topics visible on a device with Native ROS 2 support | Cyclone DDS configured with the host interface IP; matching domain ID ([Native ROS 2](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/ros-integration/#native-ros-2)) |
| WebSocket closes with error 1002 on a device with WebSocket support | Check the negotiated extensions and firmware; use a client compatible with the negotiated mode ([WebSocket Events](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/websocket-events/#troubleshooting)) |
| Reduced range or warnings | Check [contamination indication](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/contamination-indication/) and clean the optics cover |

If the problem persists, create a [diagnostic file](https://sickag.github.io/sick_lidar_developer_guide/troubleshooting/diagnostics/) and contact SICK.
