# Receive Output State by Event [sEN LIDoutputstate]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Inputs and Outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#receive-output-state-by-event-sen-lidoutputstate

Subscribe to the output state. After `sEA LIDoutputstate 1`, the device sends `sSN LIDoutputstate` every time an output state changes, with the structure of `sRA LIDoutputstate`. Send `sEN LIDoutputstate 0` to stop.

**Telegram structure: sEN LIDoutputstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Output state | String | 14 | | `LIDoutputstate` | `4C 49 44 6F 75 74 70 75 74 73 74 61 74 65` |
| | Start/stop | Enum_8 | 1 | Start:<br>Stop: | `1<br>0` | `01<br>00` |

**Example: sEN LIDoutputstate**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}LIDoutputstate{SPC}1<ETX>
```

```text
sEN LIDoutputstate 1
```

```text
02 73 45 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 45 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 01 50
```

```text
73 45 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 01
```

**Example: sEA LIDoutputstate**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}LIDoutputstate{SPC}1<ETX>
```

```text
02 73 45 41 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 45 41 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 01 5F
```

**Telegram structure: sRA/sSN LIDoutputstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA / sSN` | `73 52 41 / 73 53 4E` |
| Command | Output state | String | 14 | | `LIDoutputstate` | `4C 49 44 6F 75 74 70 75 74 73 74 61 74 65` |
| Version | Version number | Uint_16 | 2 | | `0 … FFFF` | `00 00 … FF FF` |
| System counter | Time in µs since power-up; restarts at 0 after about 71 min | Uint_32 | 4 | | `0 … FFFFFFFF` | `00 00 00 00 … FF FF FF FF` |
| Output state | Port 1 … 8, one state and one counter per port | Enum_8 | 1 | Not active:<br>Active:<br>Not used as output: | `0<br>1<br>2` | `00<br>01<br>02` |
| Output counter | Number of times the output was active | Uint_32 | 4 | | `0 … FFFFFFFF` | `00 00 00 00 … FF FF FF FF` |
| Time | Time data present | Uint_16 | 2 | No time data:<br>Time data: | `0<br>1` | `00 00<br>00 01` |
| Year | Time of the last change | Uint_16 | 2 | | `7B2 … 833` | `07 B2 … 08 33` |
| Month | | Uint_8 | 1 | | `1 … C` | `01 … 0C` |
| Day | | Uint_8 | 1 | | `1 … 1F` | `01 … 1F` |
| Hour | | Uint_8 | 1 | | `0 … 17` | `00 … 17` |
| Minute | | Uint_8 | 1 | | `0 … 3B` | `00 … 3B` |
| Second | | Uint_8 | 1 | | `0 … 3B` | `00 … 3B` |
| Microsecond | | Uint_32 | 4 | | `0 … F423F` | `00 00 00 00 … 00 0F 42 3F` |

**Example: sSN LIDoutputstate**

**CoLa A (ASCII)**

```text
<STX>sSN{SPC}LIDoutputstate{SPC}1{SPC}E1764E77{SPC}1{SPC}1{SPC}0{SPC}3{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}0{SPC}3{SPC}0{SPC}3{SPC}1{SPC}7EA{SPC}A{SPC}1{SPC}10{SPC}36{SPC}24{SPC}E57E0<ETX>
```

```text
02 73 53 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 31 20 45 31 37 36 34 45 37 37 20 31 20 31 20 30 20 33 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 30 20 33 20 30 20 33 20 31 20 37 45 41 20 41 20 31 20 31 30 20 33 36 20 32 34 20 45 35 37 45 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4E 73 53 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 00 01 E1 76 4E 77 01 00 00 00 01 00 00 00 00 03 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 00 00 00 00 03 00 00 00 00 03 00 01 07 EA 0A 01 10 36 24 00 0E 57 E0 B7
```
