# Set Streaming Ethernet Settings [sWN ScanDataEthSettings]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#set-streaming-ethernet-settings-swn-scandataethsettings

Ethernet settings for the scan data streaming functionality of the device

**Telegram structure: sWN ScanDataEthSettings**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | String | String | 19 | | `ScanDataEthSettings` | `53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |
| Protocol | Transport protocol for streaming data | Enum_8 | 1 | UDP (fix): | `+1d (01h)` | `01` |
| IPAddress | IP address of the destination for data receiver | Array | 4 | | `0 …+255d (00…FF)<br>0 …+255d (00..FF)<br>0 …+255d (00…FF)<br>0 …+255d (00…FF)` | `00 … FF<br>00 … FF<br>00 … FF<br>00 … FF` |
| Port | Port destination of the data reseiver | Uint_16 | 2 | | `0 .. +65535d(00 00…FF FF)` | `00 00 … FF FF` |

Example: sWN ScanDataEthSettings +1 +192 +168 +0 +100 +2115

Protocol is set to UDP (1), IPAddress (192.168.0.100), Port (2115)

**Example: sWN ScanDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ScanDataEthSettings{SPC}+1{SPC}+192{SPC}+168{SPC}+0{SPC}+100{SPC}+2115<ETX>
```

```text
<STX>sWN ScanDataEthSettings +1 +192 +168 +0 +100 +2115<ETX>
```

```text
sWN ScanDataEthSettings +1 +192 +168 +0 +100 +2115
```

```text
02 73 57 4E 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 31 20 43 30 20 41 38 20 30 20 36 34 20 38 34 33 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 57 4E 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 08 43 5F
```

```text
73 57 4E 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 08 43
```

**Telegram structure: sWA ScanDataEthSettings**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | String | String | 19 | | `ScanDataEthSettings` | `53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |

**Example: sWA ScanDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}ScanDataEthSettings<ETX>
```

```text
02 73 57 41 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 57 41 20 53 63 61 6E 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 16
```
