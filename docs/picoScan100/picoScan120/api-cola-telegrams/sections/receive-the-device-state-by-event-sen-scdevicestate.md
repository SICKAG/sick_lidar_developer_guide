# Receive the Device State by Event [sEN SCdevicestate]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Status

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#receive-the-device-state-by-event-sen-scdevicestate

This telegram reads the general device state continuously.

**Telegram structure: sEN SCdevicestate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Read the device state | String | 13 | | `SCdevicestate` | `53 43 64 65 76 69 63 65 73 74 61 74 65` |
| Data | Start/ Stop | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN SCdevicestate**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}SCdevicestate{SPC}1<ETX>
```

```text
<STX>sEN SCdevicestate 1<ETX>
```

```text
sEN SCdevicestate 1
```

```text
02 73 45 4E 20 53 43 64 65 76 69 63 65 73 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 45 4E 20 53 43 64 65 76 69 63 65 73 74 61 74 65 20 01 06
```

```text
73 45 4E 20 53 43 64 65 76 69 63 65 73 74 61 74 65 20 01
```

**Telegram structure: sRA SCdevicestate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sSN` | `73 53 4E` |
| Command | Read the device state | String | 13 | | `SCdevicestate` | `53 43 64 65 76 69 63 65 73 74 61 74 65` |
| Status code | Code number | Enum_8 | 1 | Busy / logged-in:<br>Ready:<br>Error: | `0<br>1<br>2` | `00<br>01<br>02` |

**Example: sSN SCdevicestate**

**CoLa A (ASCII)**

```text
<STX>sSN{SPC}SCdevicestate{SPC}1<ETX>
```

```text
02 73 53 4E 20 53 43 64 65 76 69 63 65 73 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 53 4E 20 53 43 64 65 76 69 63 65 73 74 61 74 65 20 01 10
```
