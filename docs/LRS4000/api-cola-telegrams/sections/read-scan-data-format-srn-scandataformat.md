# Read Scan Data Format [sRN ScanDataFormat]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-scan-data-format-srn-scandataformat

Returns the scan data format (e.g. Compact format) or whether scan data transmission is disabled.

**Telegram structure: sRN ScanDataFormat**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Scan Data Format | String | 14 | | `ScanDataFormat` | `53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74` |

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
| Command | Read Scan Data Format | String | 14 | | `ScanDataFormat` | `53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74` |
| ScanDataFormat | Data serialization format | Enum_8 | 1 | Deactivated:<br>Compact:<br>LMDscandata: | `0<br>2<br>3` | `00<br>02<br>03` |

**Example: sRA ScanDataFormat**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ScanDataFormat{SPC}0<ETX>
```

```text
02 73 52 41 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 20 00 4C
```
