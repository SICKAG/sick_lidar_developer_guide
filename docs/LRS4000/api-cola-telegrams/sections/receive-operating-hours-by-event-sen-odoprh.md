# Receive Operating Hours by Event [sEN ODoprh]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Operating Data

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#receive-operating-hours-by-event-sen-odoprh

Returns the total number of operating hours during the lifetime of the device. The resolution is 1/10 hour. After registration, the device sends the current value as an `sSN` telegram whenever it changes. Send the telegram with the value 0 to stop the event.

**Telegram structure: sEN ODoprh**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Receive Operating Hours by Event | String | 6 | | `ODoprh` | `4F 44 6F 70 72 68` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN ODoprh**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}ODoprh{SPC}1<ETX>
```

```text
<STX>sEN ODoprh 1<ETX>
```

```text
sEN ODoprh 1
```

```text
02 73 45 4E 20 4F 44 6F 70 72 68 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 45 4E 20 4F 44 6F 70 72 68 20 01 77
```

```text
73 45 4E 20 4F 44 6F 70 72 68 20 01
```

**Telegram structure: sEA ODoprh**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Receive Operating Hours by Event | String | 6 | | `ODoprh` | `4F 44 6F 70 72 68` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEA ODoprh**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}ODoprh{SPC}1<ETX>
```

```text
02 73 45 41 20 4F 44 6F 70 72 68 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 45 41 20 4F 44 6F 70 72 68 20 01 78
```
