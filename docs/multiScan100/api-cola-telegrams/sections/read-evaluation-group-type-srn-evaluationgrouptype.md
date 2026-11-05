# Read Evaluation Group Type [sRN EvaluationGroupType]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-evaluation-group-type-srn-evaluationgrouptype

Array with the type of each group: field evaluation, perpendicular distance, or object evaluation (firmware 2.5.0 and later).

**Telegram structure: sRN EvaluationGroupType**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type  | Read        | String   | 3      |                    | `sRN`                 | `73 52 4E`                                                 |
| Command       |             | String   | 19     |                    | `EvaluationGroupType` | `45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65` |

**Example: sRN EvaluationGroupType**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EvaluationGroupType<ETX>
```

```text
<STX>sRN EvaluationGroupType<ETX>
```

```text
sRN EvaluationGroupType
```

```text
02 73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65 1E
```

```text
73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65
```

**Telegram structure: sRA EvaluationGroupType**

| Telegram part | Description              | Variable | Length | Additional details                                                 | Values CoLa A (ASCII)                                             | Values CoLa B (Binary)                                                                  |     |
| ------------- | ------------------------ | -------- | ------ | ------------------------------------------------------------------ | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| Command type  | Answer                   | String   | 3      |                                                                    | `sRA`                                | `73 52 41`                                                 |     |
| Command       |                          | String   | 19     |                                                                    | `EvaluationGroupType`                | `45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65` |     |
| Data          | Type of evaluation group | Array    | 48     | Field evaluation:<br>Perpendicular distance:<br>Object evaluation: | `0d (00h)<br>+1d (01h)<br>+2d (02h)` | `00<br>01<br>02`                                           |     |

**Example: sRA EvaluationGroupType**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EvaluationGroupType{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 48 73 52 41 20 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 54 79 70 65 20 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 31
```
