# Reset Scan Merger View [sMN ResetScanMergeView]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#reset-scan-merger-view-smn-resetscanmergeview

Deletes the currently displayed point clouds. This telegram requires at least user level: Authorized Client.

**Telegram structure: sMN ResetScanMergeView**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Reset Scan Merger View | String | 18 | | `ResetScanMergeView` | `52 65 73 65 74 53 63 61 6E 4D 65 72 67 65 56 69 65 77` |

**Example: sMN ResetScanMergeView**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}ResetScanMergeView<ETX>
```

```text
<STX>sMN ResetScanMergeView<ETX>
```

```text
sMN ResetScanMergeView
```

```text
02 73 4D 4E 20 52 65 73 65 74 53 63 61 6E 4D 65 72 67 65 56 69 65 77 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 4D 4E 20 52 65 73 65 74 53 63 61 6E 4D 65 72 67 65 56 69 65 77 4F
```

```text
73 4D 4E 20 52 65 73 65 74 53 63 61 6E 4D 65 72 67 65 56 69 65 77
```

**Telegram structure: sAN ResetScanMergeView**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Reset Scan Merger View | String | 18 | | `ResetScanMergeView` | `52 65 73 65 74 53 63 61 6E 4D 65 72 67 65 56 69 65 77` |

**Example: sAN ResetScanMergeView**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}ResetScanMergeView<ETX>
```

```text
02 73 41 4E 20 52 65 73 65 74 53 63 61 6E 4D 65 72 67 65 56 69 65 77 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 41 4E 20 52 65 73 65 74 53 63 61 6E 4D 65 72 67 65 56 69 65 77 20 63
```
