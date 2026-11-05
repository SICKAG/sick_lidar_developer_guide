# Receive Outputstate by Event [sEN LIDoutputstate]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Inputs and Outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#receive-outputstate-by-event-sen-lidoutputstate

Output telegram is sent every time an output state changes.

**Telegram structure: sEN LIDoutputstate**

| Telegram part | Description  | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | ------------ | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Event        | String   | 3      |                    | `sEN`            | `73 45 4E`                                  |
| Command       | Output state | String   | 14     |                    | `LIDoutputstate` | `4C 49 44 6F 75 74 70 75 74 73 74 61 74 65` |
|               | Start/stop   | Enum_8   | 1      | Start:<br>Stop:    | `1<br>0`         | `01<br>00`                                  |

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

| Telegram part                                                                                                                   | Description                                                                         | Variable | Length | Additional details                         | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- | ------ | ------------------------------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type                                                                                                                    | Answer                                                                              | String   | 3      |                                            | `sRA / sSN`      | `73 52 41 / 73 53 4E`                       |
| Command                                                                                                                         | Output state                                                                        | String   | 14     |                                            | `LIDoutputstate` | `4C 49 44 6F 75 74 70 75 74 73 74 61 74 65` |
| Status code                                                                                                                     | Version number                                                                      | Uint_16  | 2      |                                            | `0h … FFFFh`     | `00 00 … FF FF`                             |
| Status code                                                                                                                     | System counter<br>(time in µs since power up max. 71min then starting from 0 again) | Uint_32  | 4      |                                            | `0h … FFFFFFFFh` | `00 00 00 00 … FF FF FF FF`                 |
| State of the outputs 1 ... n and count value in hex. (values of an example)<br>Amount of outputs (n) depending of device family | Output 1 ... n state                                                                | Enum_8   | 1      | Not active:<br>Active:<br>Output not used: | `0<br>1<br>2`    | `00<br>01<br>02`                            |
| State of the outputs 1 ... n and count value in hex. (values of an example)<br>Amount of outputs (n) depending of device family | Output 1 ... n count                                                                | Uint_32  | 4      |                                            | `0h … FFFFFFFFh` | `00 00 00 00 … FF FF FF FF`                 |
| Time                                                                                                                            | States code                                                                         | Uint_16  | 2      | No time data:<br>Time data:                | `0<br>1`         | `00 00<br>00 01`                            |
| Time Block<br>(sensor-time from the last change of min. one of the outputs)                                                     | Year                                                                                | Array    | 2      | E. g.                                      | `1970`           | `07 B2`                                     |
| Time Block<br>(sensor-time from the last change of min. one of the outputs)                                                     | Month                                                                               | Array    | 1      |                                            | `1 … 12`         | `01 … 0C`                                   |
| Time Block<br>(sensor-time from the last change of min. one of the outputs)                                                     | Day                                                                                 | Array    | 1      |                                            | `1 … 31`         | `01 … 1F`                                   |
| Time Block<br>(sensor-time from the last change of min. one of the outputs)                                                     | Hour                                                                                | Array    | 1      |                                            | `0 … 23`         | `00 … 17`                                   |
| Time Block<br>(sensor-time from the last change of min. one of the outputs)                                                     | Minute                                                                              | Array    | 1      |                                            | `0 … 59`         | `00 … 3B`                                   |
| Time Block<br>(sensor-time from the last change of min. one of the outputs)                                                     | Second                                                                              | Array    | 1      |                                            | `0 … 59`         | `00 … 3B`                                   |
| Time Block<br>(sensor-time from the last change of min. one of the outputs)                                                     | Microsecond                                                                         | Array    | 4      |                                            | `0 … 999999`     | `00 00 00 00 … 00 0F 42 3F`                 |

**Example: sSN LIDoutputstate**

**CoLa A (ASCII)**

```text
<STX>sSN{SPC}LIDoutputstate{SPC}1{SPC}70D6F68{SPC}0{SPC}1{SPC}1{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}2{SPC}0{SPC}1{SPC}0{SPC}1{SPC}0{SPC}1{SPC}7EA{SPC}A{SPC}6{SPC}9{SPC}1A{SPC}2{SPC}1CCF0<ETX>
```

```text
02 73 53 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 31 20 37 30 44 36 46 36 38 20 30 20 31 20 31 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 32 20 30 20 31 20 30 20 31 20 30 20 31 20 37 45 41 20 41 20 36 20 39 20 31 41 20 32 20 31 43 43 46 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4E 73 53 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 20 00 01 07 14 F5 30 00 00 00 00 02 01 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 02 00 00 00 00 01 00 00 00 00 01 00 00 00 00 00 01 07 EA 0A 06 09 1A 02 00 09 52 B8 81
```
