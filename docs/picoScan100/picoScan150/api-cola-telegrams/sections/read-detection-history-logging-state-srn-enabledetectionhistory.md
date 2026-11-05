# Read Detection History Logging State [sRN EnableDetectionHistory]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Detection History

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-detection-history-logging-state-srn-enabledetectionhistory

Reads whether the detection history logging is enabled or disabled.

**Telegram structure: sRN EnableDetectionHistory**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | | String | 3 | | `sRN` | `73 52 4E` |
| Command | EnableDetectionHistory | String | 22 | | `EnableDetectionHistory` | `45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79` |

**Example: sRN EnableDetectionHistory**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EnableDetectionHistory<ETX>
```

```text
<STX>sRN EnableDetectionHistory<ETX>
```

```text
sRN EnableDetectionHistory
```

```text
02 73 52 4E 20 45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1A 73 52 4E 20 45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 63
```

```text
73 52 4E 20 45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79
```

**Telegram structure: sRA EnableDetectionHistory**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | EnableDetectionHistory | String | 22 | | `EnableDetectionHistory` | `45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79` |
| Detection history logging | Enabled/ Disabled | Bool_1 | 1 | Disabled:<br>Enabled: | `0<br>1` | `00<br>01` |

**Example: sRA EnableDetectionHistory**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EnableDetectionHistory{SPC}1<ETX>
```

```text
02 73 52 41 20 45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 52 41 20 45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 20 01 4D
```
