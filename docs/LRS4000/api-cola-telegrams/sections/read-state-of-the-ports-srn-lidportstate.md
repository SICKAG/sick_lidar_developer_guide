# Read State of the Ports [sRN LIDportstate]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Inputs and Outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-state-of-the-ports-srn-lidportstate

Returns the state of the ports. PortState is preferred over OutputState.

**Telegram structure: sRN LIDportstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read State of the Ports | String | 12 | | `LIDportstate` | `4C 49 44 70 6F 72 74 73 74 61 74 65` |

**Example: sRN LIDportstate**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LIDportstate<ETX>
```

```text
<STX>sRN LIDportstate<ETX>
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
| Command | Read State of the Ports | String | 12 | | `LIDportstate` | `4C 49 44 70 6F 72 74 73 74 61 74 65` |
| uiVersionNumber | Version number | Uint_16 | 2 | 0 ... 65535 | `0 ... FFFF` | `00 00 ... FF FF` |
| udiSystCount | System counter (Time in µs since power up max. 71min then starting from 0 again) | Uint_32 | 4 | 0 ... 4294967295 | `0 ... FFFFFFFF` | `00 00 00 00 ... FF FF FF FF` |
| aInternalPorts[].ePortState | Possible states of ports (repeated 6 times) | Enum_8 | 1 | OUTPUT_NOT_ACTIVE:<br>OUTPUT_ACTIVE:<br>TRISTATE:<br>INPUT_ACTIVE:<br>INPUT_NOT_ACTIVE: | `0<br>1<br>2<br>3<br>4` | `00<br>01<br>02<br>03<br>04` |
| aInternalPorts[].PortCounter | Port counter | Uint_32 | 4 | 0 ... 4294967295 | `0 ... FFFFFFFF` | `00 00 00 00 ... FF FF FF FF` |
| aExternalPorts[].ePortState | Possible states of ports (repeated 6 times) | Enum_8 | 1 | OUTPUT_NOT_ACTIVE:<br>OUTPUT_ACTIVE:<br>TRISTATE:<br>INPUT_ACTIVE:<br>INPUT_NOT_ACTIVE: | `0<br>1<br>2<br>3<br>4` | `00<br>01<br>02<br>03<br>04` |
| aExternalPorts[].PortCounter | Port counter | Uint_32 | 4 | 0 ... 4294967295 | `0 ... FFFFFFFF` | `00 00 00 00 ... FF FF FF FF` |
| aTimeBlock length | Number of aTimeBlock elements (max. 1) | Uint_16 | 2 | | `0 ... 1` | `00 00 ... 00 01` |
| aTimeBlock[].uiYear | uiYear (repeated once per element) | Uint_16 | 2 | 0 ... 2105 | `0 ... 839` | `00 00 ... 08 39` |
| aTimeBlock[].usiMonth | usiMonth | Uint_8 | 1 | 0 ... 12 | `0 ... C` | `00 ... 0C` |
| aTimeBlock[].usiDay | usiDay | Uint_8 | 1 | 0 ... 31 | `0 ... 1F` | `00 ... 1F` |
| aTimeBlock[].usiHour | Value for [h] in current time | Uint_8 | 1 | 0 ... 23 | `0 ... 17` | `00 ... 17` |
| aTimeBlock[].usiMinute | Value for [min] in current time | Uint_8 | 1 | 0 ... 59 | `0 ... 3B` | `00 ... 3B` |
| aTimeBlock[].usiSec | Value for [s] in current time | Uint_8 | 1 | 0 ... 59 | `0 ... 3B` | `00 ... 3B` |
| aTimeBlock[].udiUSec | Value for [µs] in current time | Uint_32 | 4 | 0 ... 999999 | `0 ... F423F` | `00 00 00 00 ... 00 0F 42 3F` |

**Example: sRA LIDportstate**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LIDportstate{SPC}0{SPC}110F6E8{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}1{SPC}7B2{SPC}1{SPC}1{SPC}0{SPC}0{SPC}11{SPC}D90A8<ETX>
```

```text
02 73 52 41 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 30 20 31 31 30 46 36 45 38 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 31 20 37 42 32 20 31 20 31 20 30 20 30 20 31 31 20 44 39 30 41 38 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 60 73 52 41 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 00 00 01 10 F6 E8 01 00 00 00 01 01 00 00 00 01 01 00 00 00 01 01 00 00 00 01 01 00 00 00 01 01 00 00 00 01 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 00 01 07 B2 01 01 00 00 11 00 0D 90 A8 D0
```
