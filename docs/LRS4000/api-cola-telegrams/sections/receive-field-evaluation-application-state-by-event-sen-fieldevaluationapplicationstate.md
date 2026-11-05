# Receive Field Evaluation Application State by Event [sEN FieldEvaluationApplicationState]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#receive-field-evaluation-application-state-by-event-sen-fieldevaluationapplicationstate

Returns the state (DEACTIVATED, ACTIVE, CONFIGURING, ERROR) of the field evaluation. After registration, the device sends the current value as an `sSN` telegram whenever it changes. Send the telegram with the value 0 to stop the event.

**Telegram structure: sEN FieldEvaluationApplicationState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Receive Field Evaluation Application State by Event | String | 31 | | `FieldEvaluationApplicationState` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN FieldEvaluationApplicationState**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}FieldEvaluationApplicationState{SPC}1<ETX>
```

```text
<STX>sEN FieldEvaluationApplicationState 1<ETX>
```

```text
sEN FieldEvaluationApplicationState 1
```

```text
02 73 45 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 25 73 45 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 20 01 00
```

```text
73 45 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 20 01
```

**Telegram structure: sEA FieldEvaluationApplicationState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Receive Field Evaluation Application State by Event | String | 31 | | `FieldEvaluationApplicationState` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEA FieldEvaluationApplicationState**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}FieldEvaluationApplicationState{SPC}1<ETX>
```

```text
02 73 45 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 25 73 45 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 20 01 0F
```
