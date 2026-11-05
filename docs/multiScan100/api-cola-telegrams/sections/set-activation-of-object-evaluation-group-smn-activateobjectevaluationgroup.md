# Set Activation of Object Evaluation Group [sMN ActivateObjectEvaluationGroup]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Object Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#set-activation-of-object-evaluation-group-smn-activateobjectevaluationgroup

This telegram activates or deactivates object evaluation groups. It switches only groups whose activation type is Telegram. For a group with the activation type Always, the device confirms the telegram, but the group stays active. Check the result with [sRN ObjectEvaluationGroupState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-object-evaluation-group-state-srn-objectevaluationgroupstate).

**Telegram structure: sMN ActivateObjectEvaluationGroup**

| Telegram part    | Description                                   | Variable | Length | Additional details       | Values CoLa A (ASCII)                                        | Values CoLa B (Binary)                                                                                                |
| ---------------- | --------------------------------------------- | -------- | ------ | ------------------------ | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Command type     | Method                                        | String   | 3      |                          | `sMN`                           | `73 4D 4E`                                                                               |
| Command          | Activate / deactivate object evaluation group | String   | 29     |                          | `ActivateObjectEvaluationGroup` | `41 63 74 69 76 61 74 65 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70` |
| Number of groups | Number of following group entries             | Uint_16  | 2      |                          | `1 ... +48`                     | `00 01 ... 00 30`                                                                        |
| Group number     | Group 1                                       | Uint_16  | 2      |                          | `1 ... +48`                     | `00 01 ... 00 30`                                                                        |
| Activation       | Activate / deactivate the group               | Bool_1   | 1      | Deactivate:<br>Activate: | `0<br>1`                        | `00<br>01`                                                                               |
| ..               |                                               |          |        |                          |                                                              |                                                                                                                       |
| Group number     | Last group                                    | Uint_16  | 2      |                          | `1 ... +48`                     | `00 01 ... 00 30`                                                                        |
| Activation       | Activate / deactivate the group               | Bool_1   | 1      | Deactivate:<br>Activate: | `0<br>1`                        | `00<br>01`                                                                               |

**Example: sMN ActivateObjectEvaluationGroup**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}ActivateObjectEvaluationGroup{SPC}1{SPC}1{SPC}0<ETX>
```

```text
sMN ActivateObjectEvaluationGroup 1 1 0
```

```text
02 73 4D 4E 20 41 63 74 69 76 61 74 65 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 31 20 31 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 27 73 4D 4E 20 41 63 74 69 76 61 74 65 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 01 00 01 00 15
```

```text
73 4D 4E 20 41 63 74 69 76 61 74 65 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 01 00 01 00
```

**Telegram structure: sAN ActivateObjectEvaluationGroup**

| Telegram part     | Description                                   | Variable | Length | Additional details  | Values CoLa A (ASCII)                                        | Values CoLa B (Binary)                                                                                                |
| ----------------- | --------------------------------------------- | -------- | ------ | ------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Command type      | Answer                                        | String   | 3      |                     | `sAN`                           | `73 41 4E`                                                                               |
| Command           | Activate / deactivate object evaluation group | String   | 29     |                     | `ActivateObjectEvaluationGroup` | `41 63 74 69 76 61 74 65 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70` |
| Number of results | One result per group in the request           | Uint_16  | 2      |                     | `1 ... +48`                     | `00 01 ... 00 30`                                                                        |
| Result            | Result for the group                          | Bool_1   | 1      | Failed:<br>Success: | `0<br>1`                        | `00<br>01`                                                                               |

**Example: sAN ActivateObjectEvaluationGroup**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}ActivateObjectEvaluationGroup{SPC}1{SPC}1<ETX>
```

```text
02 73 41 4E 20 41 63 74 69 76 61 74 65 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 31 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 25 73 41 4E 20 41 63 74 69 76 61 74 65 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 01 01 19
```
