# Read Scan Merger Source [sRN ScanMergerSource]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-scan-merger-source-srn-scanmergersource

Returns the data source for angle information used during scan merging (IMU or ENCODER).

**Telegram structure: sRN ScanMergerSource**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Scan Merger Source | String | 16 | | `ScanMergerSource` | `53 63 61 6E 4D 65 72 67 65 72 53 6F 75 72 63 65` |

**Example: sRN ScanMergerSource**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ScanMergerSource<ETX>
```

```text
<STX>sRN ScanMergerSource<ETX>
```

```text
sRN ScanMergerSource
```

```text
02 73 52 4E 20 53 63 61 6E 4D 65 72 67 65 72 53 6F 75 72 63 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 4E 20 53 63 61 6E 4D 65 72 67 65 72 53 6F 75 72 63 65 67
```

```text
73 52 4E 20 53 63 61 6E 4D 65 72 67 65 72 53 6F 75 72 63 65
```

**Telegram structure: sRA ScanMergerSource**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Scan Merger Source | String | 16 | | `ScanMergerSource` | `53 63 61 6E 4D 65 72 67 65 72 53 6F 75 72 63 65` |
| ScanMergerSource | Data source for angle information | Enum_8 | 1 | IMU:<br>ENCODER: | `0<br>1` | `00<br>01` |

**Example: sRA ScanMergerSource**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ScanMergerSource{SPC}0<ETX>
```

```text
02 73 52 41 20 53 63 61 6E 4D 65 72 67 65 72 53 6F 75 72 63 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 52 41 20 53 63 61 6E 4D 65 72 67 65 72 53 6F 75 72 63 65 20 00 48
```
