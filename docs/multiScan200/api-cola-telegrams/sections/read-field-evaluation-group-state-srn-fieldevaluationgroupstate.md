# Read Field Evaluation Group State [sRN FieldEvaluationGroupState]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-field-evaluation-group-state-srn-fieldevaluationgroupstate

Read the activation state of all 48 evaluation groups: not configured, active, or inactive.

**Telegram structure: sRN FieldEvaluationGroupState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read request | String | 3 | | `sRN` | `73 52 4E` |
| Variable name | Contains the current activation state of all available groups (not configured, active or inactive) | String | 25 | | `FieldEvaluationGroupState` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65` |

**Example: sRN FieldEvaluationGroupState**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}FieldEvaluationGroupState<ETX>
```

```text
sRN FieldEvaluationGroupState
```

```text
02 73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1D 73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65 33
```

```text
73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65
```

**Telegram structure: sRA FieldEvaluationGroupState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read answer | String | 3 | | `sRA` | `73 52 41` |
| Variable name | Contains the current activation state of all available groups (not configured, active or inactive) | String | 25 | | `FieldEvaluationGroupState` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65` |
| Value | Array of 48 × Enum8 elements | Array | 48 | Not configured = 0 Active = 1 Inactive = 2 | `0 0 0 0 0 0 0 00 0 0 0 0 0 0 00 0 0 0 0 0 0 00 0 0 0 0 0 0 00 0 0 0 0 0 0 00 0 0 0 0 0 0 0` | `00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00` |

**Example: sRA FieldEvaluationGroupState**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}FieldEvaluationGroupState{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4E 73 52 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65 20 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 1D
```
