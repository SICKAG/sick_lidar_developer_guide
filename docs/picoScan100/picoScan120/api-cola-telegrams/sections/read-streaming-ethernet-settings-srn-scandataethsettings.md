# Read Streaming Ethernet Settings [sRN ScanDataEthSettings]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#read-streaming-ethernet-settings-srn-scandataethsettings

Read ethernet settings for the scan data streaming functionality of the device.

**Telegram structure: sRN ScanDataEthSettings**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | String | String | 19 | | `ScanDataEthSettings` | `53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |

**Example: sRN ScanDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ScanDataEthSettings<ETX>
```

```text
<STX>sRN ScanDataEthSettings<ETX>
```

```text
sRN ScanDataEthSettings
```

```text
02 73 52 4E 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 4E 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 3C
```

```text
73 52 4E 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73
```

**Telegram structure: sRA ScanDataEthSettings**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | String | String | 19 | | `ScanDataEthSettings` | `53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |
| Protocol | Transport protocol for streaming data | Enum_8 | 1 | UDP:<br>TCP: | `+1d (01h)<br>+2d (02h)` | `01<br>02` |
| IPAddress | IP address of the destination for data receiver | Array | 4 | | `0 …+255d (00…FF)<br>0 …+255d (00..FF)<br>0 …+255d (00…FF)<br>0 …+255d (00…FF)` | `00 … FF<br>00 … FF<br>00 … FF<br>00 … FF` |
| Port | Port destination of the data receiver | Uint_16 | 2 | | `0 .. +65535d(00 00…FF FF)` | `00 00 … FF FF` |

Example: sRA ScanDataEthSettings +1 +192 +168 +0 +100 +2115

Protocol is set to UDP (1), IPAddress (192.168.0.100), Port (2115)

**Example: sRA ScanDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ScanDataEthSettings{SPC}1{SPC}C0{SPC}A8{SPC}0{SPC}64{SPC}843<ETX>
```

```text
02 73 52 41 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 31 20 43 30 20 41 38 20 30 20 36 34 20 38 34 33 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 52 41 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 08 43 55
```
