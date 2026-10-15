# Troubleshooting

Quick fixes for the problems you are most likely to encounter during commissioning and integration. Each row links to the page with the details.
Available settings, protocols, and menu paths vary by device family and firmware.
Use the relevant device guide and release notes to confirm support.

## Connection

<p class="table-caption" markdown>**Connection:** symptom and check.</p>

| Symptom | Check |
| --- | --- |
| Sensor not reachable / ping fails | Computer and sensor in the same subnet; power and Ethernet connected ([Getting Started](getting-started.md)) |
| IP address unknown | [Device Discovery](shared-features/device-discovery.md): SOPAS ET search, or ARP when device search is disabled |
| Lost connection after an IP change | Move the computer to the new subnet, or use device search to find the sensor |
| Web UI does not load | Open `http://<ip>/` in Chrome, Edge, or Firefox; clear the cache; check that the web server is not disabled ([Cybersecurity](integration-notes/cybersecurity.md#web-server)) |

## Configuration

<p class="table-caption" markdown>**Configuration:** symptom and check.</p>

| Symptom | Check |
| --- | --- |
| Cannot change settings in the web UI | Log in with an enabled [user level](shared-features/user-levels.md); without login, the UI is read-only |
| REST response has `header.status` 4 (Access Denied) | The HTTP status is always `200`; check `header.status`. Fetch a new challenge for every `POST`, check the password and that the user level is enabled, and wait 30 s after five failed logins ([REST Interface](configuration/rest-interface.md#status-codes-and-errors)) |
| REST file transfer returns 403 | Send a valid `X-Session-Token` header ([Backup & Restore](configuration/configuration-backup-and-restore.md)) |
| Settings lost after power cycle | Persist with `WriteEeprom` or **Save permanently** ([REST Interface](configuration/rest-interface.md#reading-vs-writing)) |
| CoLa `sFA` error response | Look up the [CoLa error code](configuration/cola-interface.md#cola-error-codes) |
| Web UI shows an error ID | Look up the ID in the [Error Codes](shared-features/error-codes.md) list |
| Need to restore factory settings | [How to perform a factory reset](https://support.sick.com/sick-knowledgebase/article?id=e1f49414-a351-f011-877b-7c1e52263b55) |

## Measurement Data

<p class="table-caption" markdown>**Measurement Data:** symptom and check.</p>

| Symptom | Check |
| --- | --- |
| No UDP data arrives | Data output enabled and destination IP/port set to your computer; Windows network profile set to Private; firewall allows the UDP port ([Compact Format](data-streaming/compact-format.md#transport)) |
| Scan view empty | Measurement is active and data output is enabled in the device's web interface |
| CRC errors in your parser | Compact: CRC32 over the whole frame; MSGPACK: CRC32 over the MSGPACK buffer only ([MSGPACK Format](data-streaming/msgpack-format.md#framing)) |
| Fewer points than expected | [Filters](data-streaming/filter-details.md) and scan range reduce or zero out points |
| No ROS 2 topics visible on a device with Native ROS 2 support | Cyclone DDS configured with the host interface IP; matching domain ID ([Native ROS 2](integration-notes/ros-integration.md#native-ros-2)) |
| WebSocket closes with error 1002 on a device with WebSocket support | Negotiate `permessage-deflate` ([WebSocket Events](data-streaming/websocket-events.md#troubleshooting)) |
| Reduced range or warnings | Check [contamination indication](on-device-applications/contamination-indication.md) and clean the optics cover |

## Get Support

Create a diagnostic file in SOPASair (**Diagnostics → Overview → Diagnostic file**) and send it to SICK with a description of the problem. See [Contact](contact.md).
