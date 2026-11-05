# Receive Field Evaluation Group State by Event [sEN FieldEvaluationGroupState]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#receive-field-evaluation-group-state-by-event-sen-fieldevaluationgroupstate

Returns the activation condition for all existing evaluation groups (not configured, active, or inactive). After registration, the device sends the current value as an `sSN` telegram whenever it changes. Send the telegram with the value 0 to stop the event.

**Telegram structure: sEN FieldEvaluationGroupState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Receive Field Evaluation Group State by Event | String | 25 | | `FieldEvaluationGroupState` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN FieldEvaluationGroupState**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}FieldEvaluationGroupState{SPC}1<ETX>
```

```text
<STX>sEN FieldEvaluationGroupState 1<ETX>
```

```text
sEN FieldEvaluationGroupState 1
```

```text
02 73 45 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 45 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65 20 01 05
```

```text
73 45 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65 20 01
```

**Telegram structure: sEA FieldEvaluationGroupState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Receive Field Evaluation Group State by Event | String | 25 | | `FieldEvaluationGroupState` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEA FieldEvaluationGroupState**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}FieldEvaluationGroupState{SPC}1<ETX>
```

```text
02 73 45 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 45 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 53 74 61 74 65 20 01 0A
```
