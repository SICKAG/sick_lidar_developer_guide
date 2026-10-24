# PLC Integration of SICK LiDAR Sensors via CoLa B over TCP

> Connect SICK LiDAR sensors to Siemens, Beckhoff, Mitsubishi, or Rockwell PLCs using CoLa B over TCP port 2112: framing, polling, telegrams, and troubleshooting.

Source: https://sickag.github.io/sick_lidar_developer_guide/integration-notes/plc-integration/

# PLC Integration

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

Use the CoLa command protocol over a TCP/IP socket to receive measurement,
field-evaluation, and I/O data from SICK LiDAR sensors on Siemens, Beckhoff,
Mitsubishi, or Rockwell PLCs. SICK does not provide maintained PLC function
blocks for the product families on this page; implement a small
length-prefixed receive routine using the controller's native TCP socket API.

## Interface and Approach

For PLC applications, use CoLa B on TCP port `2112`. Its length-prefixed telegrams are easier to process than CoLa A on port `2111`. Open one bidirectional TCP connection from the PLC to the sensor, keep it open, and poll the required values by sending an `sRN` request and reading the matching `sRA` response on that same connection.

<p class="table-caption" markdown>**Interface and Approach:** interface, transport, and suitable use.</p>

| Interface | Transport | Suitable use |
| --- | --- | --- |
| CoLa A / B | TCP 2111 / 2112 | PLC commands and telegram access |
| Compact / MSGPACK | UDP | High-rate scan streams to a computer or edge device |
| REST API | HTTP(S) 80 / 443 | Configuration, diagnostics, and firmware updates |

Configure the sensor once through SOPASair: use a fixed IP address reachable from the PLC, configure scan profiles, field-evaluation groups, and I/O, then export a parameter backup. Do not repeatedly configure the sensor from cyclic PLC logic. Enable LMDscandata only when the PLC requires distance data.

## Polling and CoLa B Framing

The PLC is the client and connects to `<device-ip>:2112`. Send a request, receive one complete telegram, parse it, and reconnect after an error or timeout.

```txt
connect(device_ip, 2112)
loop:
  send(frame("sRN LMDscandata"))
  reply = receive_one_telegram()
  parse(reply)
```

Every CoLa B telegram has this layout:

<p class="table-caption" markdown>**Polling and CoLa B Framing:** field, size, and value.</p>

| Field | Size | Value |
| --- | --- | --- |
| Start | 4 bytes | `02 02 02 02` |
| Length | 4 bytes | Big-endian payload length |
| Payload | N bytes | Command type, name, and data |
| Checksum | 1 byte | XOR of all payload bytes |

TCP is a byte stream: a receive operation can return a partial telegram or several telegrams. Buffer incoming bytes; after at least eight bytes are available, validate the start sequence, read the big-endian length, then wait for exactly `8 + length + 1` bytes. Validate the XOR checksum, consume one telegram, and retain any remaining bytes for the next call.

## Common Telegrams

<p class="table-caption" markdown>**Common Telegrams:** telegram, purpose, and PLC consideration.</p>

| Telegram | Purpose | PLC consideration |
| --- | --- | --- |
| `SCdevicestate` | Device health | Poll slowly and invalidate dependent values when not ready. |
| `LMDscandata` | Distance and optional RSSI data | Reduce it below the network MTU where possible. |
| `perpendicularDistanceResult` | Minimum and maximum distance to a field boundary where the device supports perpendicular distance | Its value can remain unchanged after the field is clear; gate it with field state. |
| `FieldEvaluationResult` | Free/occupied result for each evaluation group | Map each group index to the configured physical zone. |
| `LIDinputstate` / `LIDoutputstate` | Digital I/O states | Use to mirror sensor I/O in the PLC process image. |

Request each with `sRN <name>` and parse the `sRA <name> ...` response. Confirm the exact payload layout, byte offsets, and data types against the Telegram Listing for the installed firmware.

To keep `LMDscandata` manageable, use only the required echo, disable RSSI when not needed, restrict the scan angle, and select the coarsest acceptable angular resolution. A small telegram reduces PLC processing load and TCP segmentation.

## Controller Notes

<p class="table-caption" markdown>**Controller Notes:** controller and TCP mechanism.</p>

| Controller | TCP mechanism |
| --- | --- |
| Siemens S7-1500 / S7-1200 | Open User Communication: `TCON_IP_v4`, `TSEND_C`, and `TRCV_C`; use variable-length receives. |
| Siemens S7-300 / S7-400 | CP module with `AG_SEND` / `AG_RECV` and FB54 TCP. |
| Beckhoff TwinCAT 3 | Tc2_TcpIp: `FB_SocketConnect`, `FB_SocketSend`, and `FB_SocketReceive`. |
| Mitsubishi GX Works2 / iQ | Ethernet socket services: `SP_SOCOPEN`, `SP_SOCSND`, `SP_SOCRCV`, and `SP_SOCCLOSE`. |
| Rockwell / Allen-Bradley | Raw TCP socket object with MSG instructions for connect, write, read, and close. |

The transport API differs, but the CoLa B framing and receive-buffer logic are identical for every PLC.

## Troubleshooting

<p class="table-caption" markdown>**Troubleshooting:** symptom, cause, and action.</p>

| Symptom | Cause | Action |
| --- | --- | --- |
| Connection refused on `2112` | Incorrect network settings or CoLa B disabled | Verify the sensor IP/subnet and CoLa B configuration. |
| No response | Malformed request or wrong telegram name | Validate start bytes, length, XOR checksum, and case-sensitive command name. |
| `sFA` error response | Unsupported or unavailable variable | Check the [CoLa error codes](https://sickag.github.io/sick_lidar_developer_guide/configuration/cola-interface/#cola-error-codes), Telegram Listing, and firmware version. |
| Receive never completes | Fixed-size receive or TCP fragmentation | Buffer data and use the length field to determine the complete frame. |
| Misaligned data | Concatenated frames or unconsumed bytes | Consume exactly one frame and retain the buffer remainder. |
| Frozen values | Repeated scan or stale perpendicular-distance result | Verify scan counter/timestamp and use `FieldEvaluationResult` to validate the distance. |
