# Set Scan Merger Source [sWN ScanMergerSource]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-scan-merger-source-swn-scanmergersource

Sets the data source for angle information used during scan merging (IMU or ENCODER). This telegram requires at least user level: Authorized Client.

**Telegram structure: sWN ScanMergerSource**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set Scan Merger Source | String | 16 | | `ScanMergerSource` | `53 63 61 6E 4D 65 72 67 65 72 53 6F 75 72 63 65` |
| ScanMergerSource | Data source for angle information | Enum_8 | 1 | IMU:<br>ENCODER: | `0<br>1` | `00<br>01` |

**Example: sWN ScanMergerSource**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ScanMergerSource{SPC}0<ETX>
```

```text
<STX>sWN ScanMergerSource 0<ETX>
```

```text
sWN ScanMergerSource 0
```

```text
02 73 57 4E 20 53 63 61 6E 4D 65 72 67 65 72 53 6F 75 72 63 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 57 4E 20 53 63 61 6E 4D 65 72 67 65 72 53 6F 75 72 63 65 20 00 42
```

```text
73 57 4E 20 53 63 61 6E 4D 65 72 67 65 72 53 6F 75 72 63 65 20 00
```

**Telegram structure: sWA ScanMergerSource**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set Scan Merger Source | String | 16 | | `ScanMergerSource` | `53 63 61 6E 4D 65 72 67 65 72 53 6F 75 72 63 65` |

**Example: sWA ScanMergerSource**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}ScanMergerSource<ETX>
```

```text
02 73 57 41 20 53 63 61 6E 4D 65 72 67 65 72 53 6F 75 72 63 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 57 41 20 53 63 61 6E 4D 65 72 67 65 72 53 6F 75 72 63 65 20 4D
```
