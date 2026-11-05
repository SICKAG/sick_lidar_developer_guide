# Read State of the Ports [sRN LIDportstate]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Inputs and Outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-state-of-the-ports-srn-lidportstate

Read the state and the change counter of all ports. The answer contains 8 internal (physical) ports and 8 external (virtual) ports. A tri-state port is neither input nor output; it is set inactive in the configuration.

**Telegram structure: sRN LIDportstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Ask for port configuration | String | 12 | | `LIDportstate` | `4C 49 44 70 6F 72 74 73 74 61 74 65` |

**Example: sRN LIDportstate**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LIDportstate<ETX>
```

```text
sRN LIDportstate
```

```text
02 73 52 4E 20 4C 49 44 70 6F 72 74 73 74 61 74 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 4E 20 4C 49 44 70 6F 72 74 73 74 61 74 65 60
```

```text
73 52 4E 20 4C 49 44 70 6F 72 74 73 74 61 74 65
```

**Telegram structure: sRA LIDportstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Port state | String | 12 | | `LIDportstate` | `4C 49 44 70 6F 72 74 73 74 61 74 65` |
| Version | Version number | Uint_16 | 2 | | `0 … FFFF` | `00 00 … FF FF` |
| System counter | Time in µs since power-up; restarts at 0 after about 71 min | Uint_32 | 4 | | `0 … FFFFFFFF` | `00 00 00 00 … FF FF FF FF` |
| Internal port state | Port 1 … 8, one state and one counter per port | Enum_8 | 1 | Output voltage low (relay open):<br>Output voltage high (relay closed):<br>Tri-state (port inactive):<br>Input voltage high (level) or low to high (edge):<br>Input voltage low (level) or high to low (edge): | `0<br>1<br>2<br>3<br>4` | `00<br>01<br>02<br>03<br>04` |
| Internal port counter | Number of state changes of the port | Uint_32 | 4 | | `0 … FFFFFFFF` | `00 00 00 00 … FF FF FF FF` |
| External port state | Virtual port 1 … 8, one state and one counter per port | Enum_8 | 1 | Output voltage low (relay open):<br>Output voltage high (relay closed):<br>Tri-state (port inactive):<br>Input voltage high (level) or low to high (edge):<br>Input voltage low (level) or high to low (edge): | `0<br>1<br>2<br>3<br>4` | `00<br>01<br>02<br>03<br>04` |
| External port counter | Number of state changes of the port | Uint_32 | 4 | | `0 … FFFFFFFF` | `00 00 00 00 … FF FF FF FF` |
| Time | Time data present | Uint_16 | 2 | No time data:<br>Time data: | `0<br>1` | `00 00<br>00 01` |
| Year | Time of the last change | Uint_16 | 2 | | `7B2 … 833` | `07 B2 … 08 33` |
| Month | | Uint_8 | 1 | | `1 … C` | `01 … 0C` |
| Day | | Uint_8 | 1 | | `1 … 1F` | `01 … 1F` |
| Hour | | Uint_8 | 1 | | `0 … 17` | `00 … 17` |
| Minute | | Uint_8 | 1 | | `0 … 3B` | `00 … 3B` |
| Second | | Uint_8 | 1 | | `0 … 3B` | `00 … 3B` |
| Microsecond | | Uint_32 | 4 | | `0 … F423F` | `00 00 00 00 … 00 0F 42 3F` |

**Example: sRA LIDportstate**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LIDportstate{SPC}0{SPC}9DBED0{SPC}0{SPC}1{SPC}1{SPC}1{SPC}4{SPC}0{SPC}4{SPC}0{SPC}4{SPC}0{SPC}4{SPC}0{SPC}1{SPC}1{SPC}1{SPC}1{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}1{SPC}7B2{SPC}1{SPC}1{SPC}0{SPC}0{SPC}A{SPC}52850<ETX>
```

```text
02 73 52 41 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 30 20 39 44 42 45 44 30 20 30 20 31 20 31 20 31 20 34 20 30 20 34 20 30 20 34 20 30 20 34 20 30 20 31 20 31 20 31 20 31 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 31 20 37 42 32 20 31 20 31 20 30 20 30 20 41 20 35 32 38 35 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 74 73 52 41 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 00 00 00 9D BE D0 00 00 00 00 01 01 00 00 00 01 04 00 00 00 00 04 00 00 00 00 04 00 00 00 00 04 00 00 00 00 01 00 00 00 01 01 00 00 00 01 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 00 01 07 B2 01 01 00 00 0A 00 05 28 50 7E
```
