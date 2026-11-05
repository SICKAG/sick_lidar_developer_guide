# Receive Evaluation Configuration State by Event [sEN EvaluationConfigState]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#receive-evaluation-configuration-state-by-event-sen-evaluationconfigstate

Returns the performance state (OK, WARNING, EXCEEDED) of an evaluation config. After registration, the device sends the current value as an `sSN` telegram whenever it changes. Send the telegram with the value 0 to stop the event.

**Telegram structure: sEN EvaluationConfigState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Receive Evaluation Configuration State by Event | String | 21 | | `EvaluationConfigState` | `45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN EvaluationConfigState**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}EvaluationConfigState{SPC}1<ETX>
```

```text
<STX>sEN EvaluationConfigState 1<ETX>
```

```text
sEN EvaluationConfigState 1
```

```text
02 73 45 4E 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 45 4E 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 20 01 32
```

```text
73 45 4E 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 20 01
```

**Telegram structure: sEA EvaluationConfigState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Receive Evaluation Configuration State by Event | String | 21 | | `EvaluationConfigState` | `45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEA EvaluationConfigState**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}EvaluationConfigState{SPC}1<ETX>
```

```text
02 73 45 41 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 45 41 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 20 01 3D
```
