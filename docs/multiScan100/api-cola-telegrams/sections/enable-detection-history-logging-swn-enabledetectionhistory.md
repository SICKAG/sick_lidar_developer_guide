# Enable Detection History Logging [sWN EnableDetectionHistory]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Detection History

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#enable-detection-history-logging-swn-enabledetectionhistory

Enables or disables the detection history logging. This telegram requires at least user level: Authorized Client.

**Telegram structure: sWN EnableDetectionHistory**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Enable Detection History Logging | String | 22 | | `EnableDetectionHistory` | `45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79` |
| EnableDetectionHistory | EnableDetectionHistory | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sWN EnableDetectionHistory**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EnableDetectionHistory{SPC}1<ETX>
```

```text
<STX>sWN EnableDetectionHistory 1<ETX>
```

```text
sWN EnableDetectionHistory 1
```

```text
02 73 57 4E 20 45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 57 4E 20 45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 20 01 47
```

```text
73 57 4E 20 45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 20 01
```

**Telegram structure: sWA EnableDetectionHistory**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Enable Detection History Logging | String | 22 | | `EnableDetectionHistory` | `45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79` |

**Example: sWA EnableDetectionHistory**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EnableDetectionHistory<ETX>
```

```text
02 73 57 41 20 45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 57 41 20 45 6E 61 62 6C 65 44 65 74 65 63 74 69 6F 6E 48 69 73 74 6F 72 79 20 49
```
