# Receive the Device State by Event [sEN SCdevicestate]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Status

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#receive-the-device-state-by-event-sen-scdevicestate

Returns the device state (busy, ready, or error). After registration, the device sends the current value as an `sSN` telegram whenever it changes. Send the telegram with the value 0 to stop the event.

**Telegram structure: sEN SCdevicestate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Receive the Device State by Event | String | 13 | | `SCdevicestate` | `53 43 64 65 76 69 63 65 73 74 61 74 65` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

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

**Telegram structure: sEA SCdevicestate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Receive the Device State by Event | String | 13 | | `SCdevicestate` | `53 43 64 65 76 69 63 65 73 74 61 74 65` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEA SCdevicestate**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}SCdevicestate{SPC}1<ETX>
```

```text
02 73 45 41 20 53 43 64 65 76 69 63 65 73 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 45 41 20 53 43 64 65 76 69 63 65 73 74 61 74 65 20 01 09
```
