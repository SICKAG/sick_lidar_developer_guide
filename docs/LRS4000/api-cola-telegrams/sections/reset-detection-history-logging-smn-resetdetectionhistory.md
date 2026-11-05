# Reset Detection History Logging [sMN ResetDetectionHistory]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Detection History

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#reset-detection-history-logging-smn-resetdetectionhistory

Resets the detection history logs. This telegram requires at least user level: Authorized Client.

**Telegram structure: sMN ResetDetectionHistory**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Reset Detection History Logging | String | 21 | | `ResetDetectionHistory` | `52 65 73 65 74 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79` |

**Example: sMN ResetDetectionHistory**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}ResetDetectionHistory<ETX>
```

```text
<STX>sMN ResetDetectionHistory<ETX>
```

```text
sMN ResetDetectionHistory
```

```text
02 73 4D 4E 20 52 65 73 65 74 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 4D 4E 20 52 65 73 65 74 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 08
```

```text
73 4D 4E 20 52 65 73 65 74 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79
```

**Telegram structure: sAN ResetDetectionHistory**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Reset Detection History Logging | String | 21 | | `ResetDetectionHistory` | `52 65 73 65 74 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79` |

**Example: sAN ResetDetectionHistory**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}ResetDetectionHistory<ETX>
```

```text
02 73 41 4E 20 52 65 73 65 74 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1A 73 41 4E 20 52 65 73 65 74 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 20 24
```
