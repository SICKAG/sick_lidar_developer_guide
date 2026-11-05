# Read State of the Inputs [sRN LIDinputstate]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Inputs and Outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-state-of-the-inputs-srn-lidinputstate

Read the state of the inputs.

**Telegram structure: sRN LIDinputstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Input state | String | 13 | | `LIDinputstate` | `4C 49 44 69 6E 70 75 74 73 74 61 74 65` |

**Example: sRN LIDinputstate**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LIDinputstate<ETX>
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
| Command | Output state | String | 13 | | `LIDinputstate` | `4C 49 44 69 6E 70 75 74 73 74 61 74 65` |
| Version | Version number | Uint_16 | 2 | | `0 … FFFF` | `00 00 … FF FF` |
| System counter | Time in µs since power-up; restarts at 0 after about 71 min | Uint_32 | 4 | | `0 … FFFFFFFF` | `00 00 00 00 … FF FF FF FF` |
| Input state | Port 1 … 8, one value per port | Enum_8 | 1 | Not active:<br>Active:<br>Not used as input: | `0<br>1<br>2` | `00<br>01<br>02` |
| Time | Time data present | Uint_16 | 2 | No time data:<br>Time data: | `0<br>1` | `00 00<br>00 01` |
| Year | Time of the last change | Uint_16 | 2 | | `7B2 … 833` | `07 B2 … 08 33` |
| Month | | Uint_8 | 1 | | `1 … C` | `01 … 0C` |
| Day | | Uint_8 | 1 | | `1 … 1F` | `01 … 1F` |
| Hour | | Uint_8 | 1 | | `0 … 17` | `00 … 17` |
| Minute | | Uint_8 | 1 | | `0 … 3B` | `00 … 3B` |
| Second | | Uint_8 | 1 | | `0 … 3B` | `00 … 3B` |
| Microsecond | | Uint_32 | 4 | | `0 … F423F` | `00 00 00 00 … 00 0F 42 3F` |

**Example: sRA LIDinputstate**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LIDinputstate{SPC}1{SPC}920AB8{SPC}2{SPC}2{SPC}0{SPC}0{SPC}0{SPC}0{SPC}2{SPC}2{SPC}1{SPC}7B2{SPC}1{SPC}1{SPC}0{SPC}0{SPC}9{SPC}8B678<ETX>
```

```text
02 73 52 41 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 31 20 39 32 30 41 42 38 20 32 20 32 20 30 20 30 20 30 20 30 20 32 20 32 20 31 20 37 42 32 20 31 20 31 20 30 20 30 20 39 20 38 42 36 37 38 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2D 73 52 41 20 4C 49 44 69 6E 70 75 74 73 74 61 74 65 20 00 01 00 92 0A B8 02 02 00 00 00 00 02 02 00 01 07 B2 01 01 00 00 09 00 08 B6 78 7A
```
