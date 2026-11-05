# Receive State of the Ports by Event [sEN LIDportstate]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Inputs and Outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#receive-state-of-the-ports-by-event-sen-lidportstate

Returns the state of the ports. "PortState" is preferred over "OutputState". After registration, the device sends the current value as an `sSN` telegram whenever it changes. Send the telegram with the value 0 to stop the event.

**Telegram structure: sEN LIDportstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Receive State of the Ports by Event | String | 12 | | `LIDportstate` | `4C 49 44 70 6F 72 74 73 74 61 74 65` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN LIDportstate**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}LIDportstate{SPC}1<ETX>
```

```text
<STX>sEN LIDportstate 1<ETX>
```

```text
sEN LIDportstate 1
```

```text
02 73 45 4E 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 45 4E 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 01 56
```

```text
73 45 4E 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 01
```

**Telegram structure: sEA LIDportstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Receive State of the Ports by Event | String | 12 | | `LIDportstate` | `4C 49 44 70 6F 72 74 73 74 61 74 65` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEA LIDportstate**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}LIDportstate{SPC}1<ETX>
```

```text
02 73 45 41 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 45 41 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 01 59
```
