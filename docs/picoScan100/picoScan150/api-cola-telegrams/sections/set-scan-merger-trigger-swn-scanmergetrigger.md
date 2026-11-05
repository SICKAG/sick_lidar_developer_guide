# Set Scan Merger Trigger [sWN ScanMergeTrigger]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-scan-merger-trigger-swn-scanmergetrigger

Sets how the scan merge is triggered (e.g. via method call). This telegram requires at least user level: Authorized Client.

**Telegram structure: sWN ScanMergeTrigger**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set Scan Merger Trigger | String | 16 | | `ScanMergeTrigger` | `53 63 61 6E 4D 65 72 67 65 54 72 69 67 67 65 72` |
| ScanMergeTrigger | How to start the merge | Enum_8 | 1 | METHOD: | `0` | `00` |

**Example: sWN ScanMergeTrigger**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ScanMergeTrigger{SPC}0<ETX>
```

```text
<STX>sWN ScanMergeTrigger 0<ETX>
```

```text
sWN ScanMergeTrigger 0
```

```text
02 73 57 4E 20 53 63 61 6E 4D 65 72 67 65 54 72 69 67 67 65 72 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 57 4E 20 53 63 61 6E 4D 65 72 67 65 54 72 69 67 67 65 72 20 00 55
```

```text
73 57 4E 20 53 63 61 6E 4D 65 72 67 65 54 72 69 67 67 65 72 20 00
```

**Telegram structure: sWA ScanMergeTrigger**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set Scan Merger Trigger | String | 16 | | `ScanMergeTrigger` | `53 63 61 6E 4D 65 72 67 65 54 72 69 67 67 65 72` |

**Example: sWA ScanMergeTrigger**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}ScanMergeTrigger<ETX>
```

```text
02 73 57 41 20 53 63 61 6E 4D 65 72 67 65 54 72 69 67 67 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 57 41 20 53 63 61 6E 4D 65 72 67 65 54 72 69 67 67 65 72 20 5A
```
