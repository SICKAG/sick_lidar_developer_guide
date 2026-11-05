# Receive Encoder Speed by Event [sEN LICencsp]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Encoder

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#receive-encoder-speed-by-event-sen-licencsp

Read encoder speed in m/s. After registration, the device sends the current value as an `sSN` telegram whenever it changes. Send the telegram with the value 0 to stop the event.

**Telegram structure: sEN LICencsp**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Receive Encoder Speed by Event | String | 8 | | `LICencsp` | `4C 49 43 65 6E 63 73 70` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN LICencsp**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}LICencsp{SPC}1<ETX>
```

```text
<STX>sEN LICencsp 1<ETX>
```

```text
sEN LICencsp 1
```

```text
02 73 45 4E 20 4C 49 43 65 6E 63 73 70 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 45 4E 20 4C 49 43 65 6E 63 73 70 20 01 54
```

```text
73 45 4E 20 4C 49 43 65 6E 63 73 70 20 01
```

**Telegram structure: sEA LICencsp**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Receive Encoder Speed by Event | String | 8 | | `LICencsp` | `4C 49 43 65 6E 63 73 70` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEA LICencsp**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}LICencsp{SPC}1<ETX>
```

```text
02 73 45 41 20 4C 49 43 65 6E 63 73 70 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 45 41 20 4C 49 43 65 6E 63 73 70 20 01 5B
```
