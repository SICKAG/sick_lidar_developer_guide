# LMDscandata Format

`LMDscandata` is a scan data telegram of SICK's [CoLa interface](../configuration/cola-interface.md). LRS4000 and picoScan100 expose it as a selectable scan data format. On picoScan100 it is sent over a TCP connection that the client opens to the sensor, so delivery is ordered and error-checked. Use it for PLCs and integrations that already use CoLa. For new high-rate integrations, use [Compact](./compact-format.md) or [MSGPACK](./msgpack-format.md) over the transport supported by the device.

## Receive LMDscandata

1. Select **LMDscandata** as the measurement data output format (`sWN ScanDataFormat`, or in SOPASair under **Application > Data output**).
2. Open a TCP connection to the sensor: port `2111` for CoLa A or `2112` for CoLa B.
3. Request data:

<p class="table-caption" markdown>**Receive LMDscandata:** telegram and result.</p>

| Telegram | Result |
| --- | --- |
| `sRN LMDscandata` | Returns one scan (polling) |
| `sEN LMDscandata 1` | Starts continuous output: one telegram per scan |
| `sEN LMDscandata 0` | Stops continuous output |

No data is sent during boot-up or in some error states (for example Device Not Ready). A login session does not block the output. RSSI in LMDscandata is 8-bit; the value `254` marks a detected reflector.

If the output format is not set to LMDscandata, `sRN LMDscandata` still returns an `sRA LMDscandata` telegram, but every field is `0`. There is no error code, so check the output format first when you only receive zeros.

## Angle Reference

LMDscandata uses the CoLa angle convention: `90°` points straight ahead along the sensor X axis. Compact, MSGPACK, and the REST API use `0°` for straight ahead. The same full scan of the picoScan100 therefore starts at `-48°` in LMDscandata and at `-138°` in Compact. Subtract `90°` from an LMDscandata angle to compare it with Compact or MSGPACK data. The start angle and the angular step in the telegram are given in 1/10000°.

## Configure and Parse

- Configure the picoScan100 telegram content, such as the echoes and RSSI, with [`sWN LMDscandatacfg`](../picoScan100/cola-telegram-listing.md#configure-the-data-content-for-the-scan-swn-lmdscandatacfg). Smaller telegrams reduce PLC load.
- The picoScan100 field layout is in the [picoScan100 CoLa Telegram Listing](../picoScan100/cola-telegram-listing.md#poll-one-telegram-srn-lmdscandata).
- For TCP stream parsing (partial and concatenated telegrams), follow [PLC Integration](../integration-notes/plc-integration.md#polling-and-cola-b-framing).
