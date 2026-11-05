# Read State of the Ports [sRN LIDportstate]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Inputs and Outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-state-of-the-ports-srn-lidportstate

LIDportstate has to be available additionally or as successor of the LIDoutputstate telegram.

Valid for all sensors with Ethernet and ports (inputs / outputs).

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
| Command | Port state | String | 12 | | `LIDportstate` | `4C 49 44 70 6F 72 74 73 74 61 74 65` |
| Status code | Version number | Uint_16 | 2 | Current version: | `0 … FFFFh<br>0` | `00 01 … FF FF` |
| Status code | System counter (time in µs since power up max. 71min then starting from 0 again) | Uint_32 | 4 | | `0 … FFFFFFFFh` | `00 00 00 00 … FF FF FF FF` |
| ARRAY which defines the number of internal ports* | 0...n | Uint_16 | 2 | Hex:<br>Not available:<br>Number of ports: | `0000 - FFFF<br>00<br>01 ... n` | `00 00 - FF FF` |
| State of the ports and count value in hex | Internal port state | Enum_8 | 1 | Output voltage low:(Relays open)<br>Output voltage high:(Relays closed)<br>Tri-state:<br>Input voltage high (level):Input voltage from low to high (edge)<br>Input voltage low (level):Input voltage high to low (edge) | `00<br>01<br>02<br>03<br>04` | `00<br>01<br>02<br>03<br>04` |
| State of the ports and count value in hex | Internal port counter | Uint_32 | 4 | | `0 … FFFFFFFFh` | `00 00 00 00 … FF FF FF FF` |
| | ….. | | | | | |
| ARRAY which defines the number of external or virtual ports* | 0...n | Uint_16 | 1 | Hex:<br>Not available:<br>Number of ports: | `00 00 - FF FF<br>00<br>01 ... n` | `00 00 - FF FF` |
| State of the ports and count value in hex | External port state | Enum_8 | 1 | Output voltage low:(Relays open)<br>Output voltage high:(Relays closed)<br>Tri-state:<br>Input voltage high (level):Input voltage from low to high (edge)<br>Input voltage low (level):Input voltage high to low (edge) | `00<br>01<br>02<br>03<br>04` | `00<br>01<br>02<br>03<br>04` |
| State of the ports and count value in hex | External port counter | Uint_32 | 4 | | `0 … FFFFFFFFh` | `00 00 00 00 … FF FF FF FF` |
| Time | States code | Enum_16 | 1 | No time data:<br>Time data: | `00 00<br>00 01` | `00 00<br>00 01` |
| Time Block (sensor time from the last change of min. one of the outputs) | Year | Array | 2 | E.g. | `1970` | `07 B2` |
| Time Block (sensor time from the last change of min. one of the outputs) | Month | Array | 1 | | `1 … 12` | `01 … 0C` |
| Time Block (sensor time from the last change of min. one of the outputs) | Day | Array | 1 | | `1 … 31` | `01 … 1F` |
| Time Block (sensor time from the last change of min. one of the outputs) | Hour | Array | 1 | | `0 … 23` | `00 … 17` |
| Time Block (sensor time from the last change of min. one of the outputs) | Minute | Array | 1 | | `0 … 59` | `00 … 3B` |
| Time Block (sensor time from the last change of min. one of the outputs) | Second | Array | 1 | | `0 … 59` | `00 … 3B` |
| Time Block (sensor time from the last change of min. one of the outputs) | Microsecond | Array | 4 | | `0 … 999999` | `00 00 00 00 … 00 0F 42 3F` |

Inputs/outputs: If the device has separate inputs and outputs (instead of general purpose ports) the ARRAY shall start with inputs followed by the outputs.

Virtual ports are ports that can be used to expand the number of ports but are not physically available. They just show up in the corresponding ethernet telegrams (like LIDportstate).

Tri-State: Port is neither input nor output; the port is set inactive in SOPAS

**Example: sRA LIDportstate**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LIDportstate{SPC}0{SPC}3340BBDA{SPC}1{SPC}0{SPC}1{SPC}0{SPC}4{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}1{SPC}7B2{SPC}1{SPC}1{SPC}2{SPC}25{SPC}1D{SPC}C6F98<ETX>
```

```text
02 73 52 41 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 30 20 33 33 34 30 42 42 44 41 20 31 20 30 20 31 20 30 20 34 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 31 20 37 42 32 20 31 20 31 20 32 20 32 35 20 31 44 20 43 36 46 39 38 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 74 73 52 41 20 4C 49 44 70 6F 72 74 73 74 61 74 65 20 00 00 33 40 BB DA 01 00 00 00 00 01 00 00 00 00 04 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 00 01 07 B2 01 01 02 25 1D 00 0C 6F 98 2E
```
