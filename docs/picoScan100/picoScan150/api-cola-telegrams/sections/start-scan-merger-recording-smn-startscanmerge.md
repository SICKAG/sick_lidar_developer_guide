# Start Scan Merger Recording [sMN StartScanMerge]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#start-scan-merger-recording-smn-startscanmerge

Starts the 3D scan merge recording. This telegram requires at least user level: Authorized Client.

**Telegram structure: sMN StartScanMerge**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Start Scan Merger Recording | String | 14 | | `StartScanMerge` | `53 74 61 72 74 53 63 61 6E 4D 65 72 67 65` |

**Example: sMN StartScanMerge**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}StartScanMerge<ETX>
```

```text
<STX>sMN StartScanMerge<ETX>
```

```text
sMN StartScanMerge
```

```text
02 73 4D 4E 20 53 74 61 72 74 53 63 61 6E 4D 65 72 67 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 4D 4E 20 53 74 61 72 74 53 63 61 6E 4D 65 72 67 65 77
```

```text
73 4D 4E 20 53 74 61 72 74 53 63 61 6E 4D 65 72 67 65
```

**Telegram structure: sAN StartScanMerge**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Start Scan Merger Recording | String | 14 | | `StartScanMerge` | `53 74 61 72 74 53 63 61 6E 4D 65 72 67 65` |

**Example: sAN StartScanMerge**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}StartScanMerge<ETX>
```

```text
02 73 41 4E 20 53 74 61 72 74 53 63 61 6E 4D 65 72 67 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 41 4E 20 53 74 61 72 74 53 63 61 6E 4D 65 72 67 65 20 5B
```
