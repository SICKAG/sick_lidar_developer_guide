# Receive Outputstate by Event [sEN LIDoutputstate]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Inputs and Outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#receive-outputstate-by-event-sen-lidoutputstate

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
<STX>sEN LIDoutputstate 1<ETX>
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
