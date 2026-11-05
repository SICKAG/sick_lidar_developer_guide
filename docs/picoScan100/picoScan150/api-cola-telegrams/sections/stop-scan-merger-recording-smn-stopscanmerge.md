# Stop Scan Merger Recording [sMN StopScanMerge]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#stop-scan-merger-recording-smn-stopscanmerge

Stops the 3D scan merge recording. This telegram requires at least user level: Authorized Client.

**Telegram structure: sMN StopScanMerge**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Stop Scan Merger Recording | String | 13 | | `StopScanMerge` | `53 74 6F 70 53 63 61 6E 4D 65 72 67 65` |

**Example: sMN StopScanMerge**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}StopScanMerge<ETX>
```

```text
<STX>sMN StopScanMerge<ETX>
```

```text
sMN StopScanMerge
```

```text
02 73 4D 4E 20 53 74 6F 70 53 63 61 6E 4D 65 72 67 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 4D 4E 20 53 74 6F 70 53 63 61 6E 4D 65 72 67 65 0F
```

```text
73 4D 4E 20 53 74 6F 70 53 63 61 6E 4D 65 72 67 65
```

**Telegram structure: sAN StopScanMerge**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Stop Scan Merger Recording | String | 13 | | `StopScanMerge` | `53 74 6F 70 53 63 61 6E 4D 65 72 67 65` |

**Example: sAN StopScanMerge**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}StopScanMerge<ETX>
```

```text
02 73 41 4E 20 53 74 6F 70 53 63 61 6E 4D 65 72 67 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 41 4E 20 53 74 6F 70 53 63 61 6E 4D 65 72 67 65 20 23
```
