# Read Object Evaluation Group State [sRN ObjectEvaluationGroupState]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Object Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-object-evaluation-group-state-srn-objectevaluationgroupstate

This telegram returns the activation state of all 48 object evaluation groups.

**Telegram structure: sRN ObjectEvaluationGroupState**

| Telegram part | Description                   | Variable | Length | Additional details | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                                                                       |
| ------------- | ----------------------------- | -------- | ------ | ------------------ | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Command type  | Read                          | String   | 3      |                    | `sRN`                        | `73 52 4E`                                                                      |
| Command       | Object evaluation group state | String   | 26     |                    | `ObjectEvaluationGroupState` | `4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65` |

**Example: sRN ObjectEvaluationGroupState**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ObjectEvaluationGroupState<ETX>
```

```text
sRN ObjectEvaluationGroupState
```

```text
02 73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65 44
```

```text
73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65
```

**Telegram structure: sRA ObjectEvaluationGroupState**

| Telegram part | Description                                         | Variable | Length | Additional details                      | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                                                                       |
| ------------- | --------------------------------------------------- | -------- | ------ | --------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Command type  | Answer                                              | String   | 3      |                                         | `sRA`                        | `73 52 41`                                                                      |
| Command       | Object evaluation group state                       | String   | 26     |                                         | `ObjectEvaluationGroupState` | `4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65` |
| Group state   | State of group 1                                    | Enum_8   | 1      | Not configured:<br>Active:<br>Inactive: | `0<br>1<br>2`                | `00<br>01<br>02`                                                                |
| Group state   | State of group 2                                    | Enum_8   | 1      | Not configured:<br>Active:<br>Inactive: | `0<br>1<br>2`                | `00<br>01<br>02`                                                                |
| ..            |                                                     |          |        |                                         |                                                           |                                                                                                              |
| Group state   | State of group 48. The array always has 48 entries. | Enum_8   | 1      | Not configured:<br>Active:<br>Inactive: | `0<br>1<br>2`                | `00<br>01<br>02`                                                                |

**Example: sRA ObjectEvaluationGroupState**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ObjectEvaluationGroupState{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4F 73 52 41 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65 20 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 6A
```
