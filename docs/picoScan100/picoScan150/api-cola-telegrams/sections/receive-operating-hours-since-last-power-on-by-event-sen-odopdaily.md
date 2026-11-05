# Receive Operating Hours Since Last Power on by Event [sEN ODopdaily]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Operating Data

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#receive-operating-hours-since-last-power-on-by-event-sen-odopdaily

Returns the runtime duration since the last power on (non-persistent). After registration, the device sends the current value as an `sSN` telegram whenever it changes. Send the telegram with the value 0 to stop the event.

**Telegram structure: sEN ODopdaily**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Receive Operating Hours Since Last Power On by Event | String | 9 | | `ODopdaily` | `4F 44 6F 70 64 61 69 6C 79` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN ODopdaily**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}ODopdaily{SPC}1<ETX>
```

```text
<STX>sEN ODopdaily 1<ETX>
```

```text
sEN ODopdaily 1
```

```text
02 73 45 4E 20 4F 44 6F 70 64 61 69 6C 79 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 45 4E 20 4F 44 6F 70 64 61 69 6C 79 20 01 14
```

```text
73 45 4E 20 4F 44 6F 70 64 61 69 6C 79 20 01
```

**Telegram structure: sEA ODopdaily**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Receive Operating Hours Since Last Power On by Event | String | 9 | | `ODopdaily` | `4F 44 6F 70 64 61 69 6C 79` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEA ODopdaily**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}ODopdaily{SPC}1<ETX>
```

```text
02 73 45 41 20 4F 44 6F 70 64 61 69 6C 79 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 45 41 20 4F 44 6F 70 64 61 69 6C 79 20 01 1B
```
