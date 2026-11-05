# Receive the Device State by Event [sEN DevSta]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Status

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#receive-the-device-state-by-event-sen-devsta

Returns the device state (9 possible states). After registration, the device sends the current value as an `sSN` telegram whenever it changes. Send the telegram with the value 0 to stop the event.

**Telegram structure: sEN DevSta**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Receive the Device State by Event | String | 6 | | `DevSta` | `44 65 76 53 74 61` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN DevSta**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}DevSta{SPC}1<ETX>
```

```text
<STX>sEN DevSta 1<ETX>
```

```text
sEN DevSta 1
```

```text
02 73 45 4E 20 44 65 76 53 74 61 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 45 4E 20 44 65 76 53 74 61 20 01 68
```

```text
73 45 4E 20 44 65 76 53 74 61 20 01
```

**Telegram structure: sEA DevSta**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Receive the Device State by Event | String | 6 | | `DevSta` | `44 65 76 53 74 61` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEA DevSta**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}DevSta{SPC}1<ETX>
```

```text
02 73 45 41 20 44 65 76 53 74 61 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 45 41 20 44 65 76 53 74 61 20 01 67
```
