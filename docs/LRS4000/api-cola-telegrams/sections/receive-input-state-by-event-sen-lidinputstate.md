# Receive Input State by Event [sEN LIDinputstate]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Inputs and Outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#receive-input-state-by-event-sen-lidinputstate

Returns the state of all inputs. After registration, the device sends the current value as an `sSN` telegram whenever it changes. Send the telegram with the value 0 to stop the event.

**Telegram structure: sEN LIDinputstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Receive Input State by Event | String | 13 | | `LIDinputstate` | `4C 49 44 69 6E 70 75 74 73 74 61 74 65` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN LIDinputstate**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}LIDinputstate{SPC}1<ETX>
```

```text
<STX>sEN LIDinputstate 1<ETX>
```

```text
sEN LIDinputstate 1
```

```text
02 73 45 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 45 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 01 39
```

```text
73 45 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 01
```

**Telegram structure: sEA LIDinputstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Receive Input State by Event | String | 13 | | `LIDinputstate` | `4C 49 44 69 6E 70 75 74 73 74 61 74 65` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEA LIDinputstate**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}LIDinputstate{SPC}1<ETX>
```

```text
02 73 45 41 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 45 41 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 01 36
```
