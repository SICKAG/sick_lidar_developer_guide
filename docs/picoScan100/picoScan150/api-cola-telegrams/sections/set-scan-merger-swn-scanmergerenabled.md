# Set Scan Merger [sWN ScanMergerEnabled]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-scan-merger-swn-scanmergerenabled

Enables/disables the 3D scan merger feature. This telegram requires at least user level: Authorized Client.

**Telegram structure: sWN ScanMergerEnabled**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set Scan Merger | String | 17 | | `ScanMergerEnabled` | `53 63 61 6E 4D 65 72 67 65 72 45 6E 61 62 6C 65 64` |
| ScanMergerEnabled | ScanMergerEnabled | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sWN ScanMergerEnabled**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ScanMergerEnabled{SPC}0<ETX>
```

```text
<STX>sWN ScanMergerEnabled 0<ETX>
```

```text
sWN ScanMergerEnabled 0
```

```text
02 73 57 4E 20 53 63 61 6E 4D 65 72 67 65 72 45 6E 61 62 6C 65 64 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 57 4E 20 53 63 61 6E 4D 65 72 67 65 72 45 6E 61 62 6C 65 64 20 00 3A
```

```text
73 57 4E 20 53 63 61 6E 4D 65 72 67 65 72 45 6E 61 62 6C 65 64 20 00
```

**Telegram structure: sWA ScanMergerEnabled**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set Scan Merger | String | 17 | | `ScanMergerEnabled` | `53 63 61 6E 4D 65 72 67 65 72 45 6E 61 62 6C 65 64` |

**Example: sWA ScanMergerEnabled**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}ScanMergerEnabled<ETX>
```

```text
02 73 57 41 20 53 63 61 6E 4D 65 72 67 65 72 45 6E 61 62 6C 65 64 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 57 41 20 53 63 61 6E 4D 65 72 67 65 72 45 6E 61 62 6C 65 64 20 35
```
