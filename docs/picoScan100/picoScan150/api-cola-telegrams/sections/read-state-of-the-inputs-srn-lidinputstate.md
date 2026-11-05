# Read State of the Inputs [sRN LIDinputstate]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Inputs and Outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-state-of-the-inputs-srn-lidinputstate

Use sEN LIDinputstate 1 to receive a telegram each time an input signal (e.g. by trigger) changes.

**Telegram structure: sRN LIDinputstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Input state | String | 14 | | `LIDinputstate` | `4C 49 44 69 6E 70 75 74 73 74 61 74 65` |

**Example: sRN LIDinputstate**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LIDinputstate<ETX>
```

```text
<STX>sRN LIDinputstate<ETX>
```

```text
sRN LIDinputstate
```

```text
02 73 52 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 0F
```

```text
73 52 4E 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65
```

**Telegram structure: sRA LIDinputstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Output state | String | 14 | | `LIDinputstate` | `4C 49 44 69 6E 70 75 74 73 74 61 74 65` |
| Status code | Version number | Uint_16 | 2 | | `0h … FFFFh` | `00 00 … FF FF` |
| Status code | System counter<br>(time in µs since power up max. 71min then starting from 0 again) | Uint_32 | 4 | | `0 h … FFFFFFFFh` | `00 00 00 00 … FF FF FF FF` |
| State of the inputs 1 … n | Amount of inputs (n) depending of device family | Enum_8 | 1 | Not active:<br>Active:<br>Input not used: | `0<br>1<br>2` | `00<br>01<br>02` |
| Time | States code | Uint_16 | 2 | No time data:<br>Time data: | `0<br>1` | `00 00<br>00 01` |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Year | Array | 2 | E. g. | `1970` | `07 B2` |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Month | Array | 1 | | `1 … 12` | `01 … 0C` |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Day | Array | 1 | | `1 … 31` | `01 … 1F` |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Hour | Array | 1 | | `0 … 23` | `00 … 17` |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Minute | Array | 1 | | `0 … 59` | `00 … 3B` |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Second | Array | 1 | | `0 … 59` | `00 … 3B` |
| Time Block<br>(sensor-time from the last change of min. one of the outputs) | Microsecond | Array | 4 | | `0 … 999999` | `00 00 00 00 … 00 0F 42 3F` |

**Example: sRA LIDinputstate In1 not used, In2 inactive, In3 inactive, In4 not used, In5 not used, In6 not used, In7 not used, In8 not used, time: 1970-01-01 0:13 58.443 sec**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LIDinputstate{SPC}1{SPC}31F99C10{SPC}2{SPC}0{SPC}0{SPC}2{SPC}2{SPC}2{SPC}2{SPC}2{SPC}1{SPC}7B2{SPC}1{SPC}1{SPC}0{SPC}D{SPC}3A{SPC}6C278<ETX>
```

```text
02 73 52 41 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 31 20 33 31 46 39 39 43 31 30 20 32 20 30 20 30 20 32 20 32 20 32 20 32 20 32 20 31 20 37 42 32 20 31 20 31 20 30 20 44 20 33 41 20 36 43 32 37 38 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2D 73 52 41 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 00 01 31 F9 9C 10 02 00 00 02 02 02 02 02 00 01 07 B2 01 01 00 0D 3A 00 06 C2 78 5A
```
