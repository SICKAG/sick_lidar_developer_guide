# Read Scan Merger Trigger [sRN ScanMergeTrigger]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-scan-merger-trigger-srn-scanmergetrigger

Returns how the scan merge is triggered (e.g. via method call).

**Telegram structure: sRN ScanMergeTrigger**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Scan Merger Trigger | String | 16 | | `ScanMergeTrigger` | `53 63 61 6E 4D 65 72 67 65 54 72 69 67 67 65 72` |

**Example: sRN ScanMergeTrigger**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ScanMergeTrigger<ETX>
```

```text
<STX>sRN ScanMergeTrigger<ETX>
```

```text
sRN ScanMergeTrigger
```

```text
02 73 52 4E 20 53 63 61 6E 4D 65 72 67 65 54 72 69 67 67 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 4E 20 53 63 61 6E 4D 65 72 67 65 54 72 69 67 67 65 72 70
```

```text
73 52 4E 20 53 63 61 6E 4D 65 72 67 65 54 72 69 67 67 65 72
```

**Telegram structure: sRA ScanMergeTrigger**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Scan Merger Trigger | String | 16 | | `ScanMergeTrigger` | `53 63 61 6E 4D 65 72 67 65 54 72 69 67 67 65 72` |
| ScanMergeTrigger | How to start the merge | Enum_8 | 1 | METHOD: | `0` | `00` |

**Example: sRA ScanMergeTrigger**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ScanMergeTrigger{SPC}0<ETX>
```

```text
02 73 52 41 20 53 63 61 6E 4D 65 72 67 65 54 72 69 67 67 65 72 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 52 41 20 53 63 61 6E 4D 65 72 67 65 54 72 69 67 67 65 72 20 00 5F
```
