# Receive Temperature by Event [sEN OPcurtmpdev]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Operating Data

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#receive-temperature-by-event-sen-opcurtmpdev

Returns the current device temperature in Celsius. After registration, the device sends the current value as an `sSN` telegram whenever it changes. Send the telegram with the value 0 to stop the event.

**Telegram structure: sEN OPcurtmpdev**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Receive Temperature by Event | String | 11 | | `OPcurtmpdev` | `4F 50 63 75 72 74 6D 70 64 65 76` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN OPcurtmpdev**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}OPcurtmpdev{SPC}1<ETX>
```

```text
<STX>sEN OPcurtmpdev 1<ETX>
```

```text
sEN OPcurtmpdev 1
```

```text
02 73 45 4E 20 4F 50 63 75 72 74 6D 70 64 65 76 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 45 4E 20 4F 50 63 75 72 74 6D 70 64 65 76 20 01 1C
```

```text
73 45 4E 20 4F 50 63 75 72 74 6D 70 64 65 76 20 01
```

**Telegram structure: sEA OPcurtmpdev**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Receive Temperature by Event | String | 11 | | `OPcurtmpdev` | `4F 50 63 75 72 74 6D 70 64 65 76` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEA OPcurtmpdev**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}OPcurtmpdev{SPC}1<ETX>
```

```text
02 73 45 41 20 4F 50 63 75 72 74 6D 70 64 65 76 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 45 41 20 4F 50 63 75 72 74 6D 70 64 65 76 20 01 13
```
