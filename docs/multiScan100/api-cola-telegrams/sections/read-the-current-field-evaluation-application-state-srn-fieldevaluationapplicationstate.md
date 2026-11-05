# Read the Current Field Evaluation Application State [sRN FieldEvaluationApplicationState]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-the-current-field-evaluation-application-state-srn-fieldevaluationapplicationstate

Returns the state (DEACTIVATED, ACTIVE, CONFIGURING, ERROR) of the field evaluation.

**Telegram structure: sRN FieldEvaluationApplicationState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read the Current Field Evaluation Application State | String | 31 | | `FieldEvaluationApplicationState` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65` |

**Example: sRN FieldEvaluationApplicationState**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}FieldEvaluationApplicationState<ETX>
```

```text
<STX>sRN FieldEvaluationApplicationState<ETX>
```

```text
sRN FieldEvaluationApplicationState
```

```text
02 73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 23 73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 36
```

```text
73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65
```

**Telegram structure: sRA FieldEvaluationApplicationState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read the Current Field Evaluation Application State | String | 31 | | `FieldEvaluationApplicationState` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65` |
| FieldEvaluationApplicationState | FieldEvaluationApplicationState | Enum_8 | 1 | DEACTIVATED:<br>ACTIVE:<br>CONFIGURING:<br>ERROR: | `0<br>1<br>2<br>3` | `00<br>01<br>02<br>03` |

**Example: sRA FieldEvaluationApplicationState**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}FieldEvaluationApplicationState{SPC}0<ETX>
```

```text
02 73 52 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 25 73 52 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 20 00 19
```
