# Read Scan Data Format [sRN ScanDataFormat]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#read-scan-data-format-srn-scandataformat

Return of the scan data format

**Telegram structure: sRN ScanDataFormat**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Data serialization format | String | 14 | | `ScanDataFormat` | `53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74` |

Example: sRN ScanDataFormat

Read of the data serialization format

**Example: sRN ScanDataFormat**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ScanDataFormat<ETX>
```

```text
<STX>sRN ScanDataFormat<ETX>
```

```text
sRN ScanDataFormat
```

```text
02 73 52 4E 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 63
```

```text
73 52 4E 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74
```

**Telegram structure: sRA ScanDataFormat**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Data serialization format | String | 14 | | `ScanDataFormat` | `53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74` |
| Data | | Enum_8 | 1 | MSGPACK:<br>Compact:<br>LMDscandata:<br>Native ROS2: | `1h<br>2h<br>3h<br>4h` | `01<br>02<br>03<br>04` |

Example: sRA ScanDataFormat

Scan data format is set to Compact = 2

**Example: sRA ScanDataFormat**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ScanDataFormat{SPC}2<ETX>
```

```text
02 73 52 41 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 20 32 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 20 02 4E
```
