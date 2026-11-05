# Receive Device Time by Event [sEN LSPdatetime]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Date and System Time

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#receive-device-time-by-event-sen-lspdatetime

Returns the current time of the device (years, months, days, hours, minutes, seconds, microseconds). After registration, the device sends the current value as an `sSN` telegram whenever it changes. Send the telegram with the value 0 to stop the event.

**Telegram structure: sEN LSPdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Receive Device Time by Event | String | 11 | | `LSPdatetime` | `4C 53 50 64 61 74 65 74 69 6D 65` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN LSPdatetime**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}LSPdatetime{SPC}1<ETX>
```

```text
<STX>sEN LSPdatetime 1<ETX>
```

```text
sEN LSPdatetime 1
```

```text
02 73 45 4E 20 4C 53 50 64 61 74 65 74 69 6D 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 45 4E 20 4C 53 50 64 61 74 65 74 69 6D 65 20 01 37
```

```text
73 45 4E 20 4C 53 50 64 61 74 65 74 69 6D 65 20 01
```

**Telegram structure: sEA LSPdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Receive Device Time by Event | String | 11 | | `LSPdatetime` | `4C 53 50 64 61 74 65 74 69 6D 65` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEA LSPdatetime**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}LSPdatetime{SPC}1<ETX>
```

```text
02 73 45 41 20 4C 53 50 64 61 74 65 74 69 6D 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 45 41 20 4C 53 50 64 61 74 65 74 69 6D 65 20 01 38
```
