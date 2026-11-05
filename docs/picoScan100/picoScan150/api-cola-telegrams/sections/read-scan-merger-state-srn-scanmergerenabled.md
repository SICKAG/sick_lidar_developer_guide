# Read Scan Merger State [sRN ScanMergerEnabled]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-scan-merger-state-srn-scanmergerenabled

Returns whether the 3D scan merger feature is enabled.

**Telegram structure: sRN ScanMergerEnabled**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Scan Merger State | String | 17 | | `ScanMergerEnabled` | `53 63 61 6E 4D 65 72 67 65 72 45 6E 61 62 6C 65 64` |

**Example: sRN ScanMergerEnabled**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ScanMergerEnabled<ETX>
```

```text
<STX>sRN ScanMergerEnabled<ETX>
```

```text
sRN ScanMergerEnabled
```

```text
02 73 52 4E 20 53 63 61 6E 4D 65 72 67 65 72 45 6E 61 62 6C 65 64 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 52 4E 20 53 63 61 6E 4D 65 72 67 65 72 45 6E 61 62 6C 65 64 1F
```

```text
73 52 4E 20 53 63 61 6E 4D 65 72 67 65 72 45 6E 61 62 6C 65 64
```

**Telegram structure: sRA ScanMergerEnabled**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Scan Merger State | String | 17 | | `ScanMergerEnabled` | `53 63 61 6E 4D 65 72 67 65 72 45 6E 61 62 6C 65 64` |
| ScanMergerEnabled | ScanMergerEnabled | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sRA ScanMergerEnabled**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ScanMergerEnabled{SPC}0<ETX>
```

```text
02 73 52 41 20 53 63 61 6E 4D 65 72 67 65 72 45 6E 61 62 6C 65 64 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 41 20 53 63 61 6E 4D 65 72 67 65 72 45 6E 61 62 6C 65 64 20 00 30
```
