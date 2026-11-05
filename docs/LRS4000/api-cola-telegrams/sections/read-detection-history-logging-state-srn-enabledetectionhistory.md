# Read Detection History Logging State [sRN EnableDetectionHistory]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Detection History

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-detection-history-logging-state-srn-enabledetectionhistory

Returns whether the detection history logging is enabled.

**Telegram structure: sRN EnableDetectionHistory**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Detection History Logging State | String | 22 | | `EnableDetectionHistory` | `45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79` |

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
| Command | Read Detection History Logging State | String | 22 | | `EnableDetectionHistory` | `45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79` |
| EnableDetectionHistory | EnableDetectionHistory | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

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
