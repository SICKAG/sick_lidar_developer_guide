# Read Object Evaluation Configuration State [sRN ObjectEvaluationConfigState]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Object Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-object-evaluation-configuration-state-srn-objectevaluationconfigstate

This telegram reports whether the configured evaluations stay within the resources of the device.

**Telegram structure: sRN ObjectEvaluationConfigState**

| Telegram part | Description                           | Variable | Length | Additional details | Values CoLa A (ASCII)                                      | Values CoLa B (Binary)                                                                                          |
| ------------- | ------------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Command type  | Read                                  | String   | 3      |                    | `sRN`                         | `73 52 4E`                                                                         |
| Command       | Object evaluation configuration state | String   | 27     |                    | `ObjectEvaluationConfigState` | `4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65` |

**Example: sRN ObjectEvaluationConfigState**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ObjectEvaluationConfigState<ETX>
```

```text
sRN ObjectEvaluationConfigState
```

```text
02 73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 31
```

```text
73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65
```

**Telegram structure: sRA ObjectEvaluationConfigState**

| Telegram part            | Description                                                                    | Variable | Length | Additional details           | Values CoLa A (ASCII)                                      | Values CoLa B (Binary)                                                                                          |
| ------------------------ | ------------------------------------------------------------------------------ | -------- | ------ | ---------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Command type             | Answer                                                                         | String   | 3      |                              | `sRA`                         | `73 52 41`                                                                         |
| Command                  | Object evaluation configuration state                                          | String   | 27     |                              | `ObjectEvaluationConfigState` | `4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65` |
| Active beams limit       | Load from the beams that intersect the evaluations                             | Enum_8   | 1      | OK:<br>Warning:<br>Exceeded: | `0<br>1<br>2`                 | `00<br>01<br>02`                                                                   |
| Active evaluations limit | Load from the number of active evaluations                                     | Enum_8   | 1      | OK:<br>Warning:<br>Exceeded: | `0<br>1<br>2`                 | `00<br>01<br>02`                                                                   |
| Intersecting beams       | Number of beams that intersect evaluation 1                                    | Uint_16  | 2      |                              | `0 ... FFFFh`                 | `00 00 ... FF FF`                                                                  |
| ..                       |                                                                                |          |        |                              |                                                            |                                                                                                                 |
| Intersecting beams       | Number of beams that intersect evaluation 48. The array always has 48 entries. | Uint_16  | 2      |                              | `0 ... FFFFh`                 | `00 00 ... FF FF`                                                                  |
| Error list length        | Number of entries in the input/output error list (`InputIsOutputErrorList`)    | Uint_16  | 2      |                              | `0 ... 30h`                   | `00 00 ... 00 30`                                                                  |
| Error list entry         | Entry of the input/output error list                                           | Uint_16  | 2      |                              | `0 ... FFFFh`                 | `00 00 ... FF FF`                                                                  |

**Example: sRA ObjectEvaluationConfigState**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ObjectEvaluationConfigState{SPC}0{SPC}0{SPC}451{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 20 30 20 30 20 34 35 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 84 73 52 41 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 20 00 00 04 51 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 4B
```
