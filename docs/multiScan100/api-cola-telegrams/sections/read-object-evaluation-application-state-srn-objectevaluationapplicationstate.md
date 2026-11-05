# Read Object Evaluation Application State [sRN ObjectEvaluationApplicationState]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Object Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-object-evaluation-application-state-srn-objectevaluationapplicationstate

This telegram returns the state of the Object Evaluation application.

**Telegram structure: sRN ObjectEvaluationApplicationState**

| Telegram part | Description                         | Variable | Length | Additional details | Values CoLa A (ASCII)                                           | Values CoLa B (Binary)                                                                                                         |
| ------------- | ----------------------------------- | -------- | ------ | ------------------ | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Command type  | Read                                | String   | 3      |                    | `sRN`                              | `73 52 4E`                                                                                        |
| Command       | Object evaluation application state | String   | 32     |                    | `ObjectEvaluationApplicationState` | `4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65` |

**Example: sRN ObjectEvaluationApplicationState**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ObjectEvaluationApplicationState<ETX>
```

```text
sRN ObjectEvaluationApplicationState
```

```text
02 73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 24 73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 41
```

```text
73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65
```

**Telegram structure: sRA ObjectEvaluationApplicationState**

| Telegram part     | Description                         | Variable | Length | Additional details                                | Values CoLa A (ASCII)                                           | Values CoLa B (Binary)                                                                                                         |
| ----------------- | ----------------------------------- | -------- | ------ | ------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Command type      | Answer                              | String   | 3      |                                                   | `sRA`                              | `73 52 41`                                                                                        |
| Command           | Object evaluation application state | String   | 32     |                                                   | `ObjectEvaluationApplicationState` | `4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65` |
| Application state | State of the application            | Enum_8   | 1      | Deactivated:<br>Active:<br>Configuring:<br>Error: | `0<br>1<br>2<br>3`                 | `00<br>01<br>02<br>03`                                                                            |

**Example: sRA ObjectEvaluationApplicationState**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ObjectEvaluationApplicationState{SPC}1<ETX>
```

```text
02 73 52 41 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 26 73 52 41 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 20 01 6F
```
