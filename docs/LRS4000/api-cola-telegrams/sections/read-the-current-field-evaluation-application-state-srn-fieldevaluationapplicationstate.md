# Read the Current Field Evaluation Application State [sRN FieldEvaluationApplicationState]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-the-current-field-evaluation-application-state-srn-fieldevaluationapplicationstate

Read the current field evaluation application state.

**Access:** No additional user-level requirement is specified in this telegram table.

**Request: `sRN FieldEvaluationApplicationState`**

| Telegram part / meaning                            | Variable type | Length (bytes) | Values, ranges, and notes               |
| -------------------------------------------------- | ------------- | -------------- | --------------------------------------- |
| Read                                               | String        | 3              | CoLa A: sRN                             |
| Info on current field evaluation application state | String        | 31             | CoLa A: FieldEvaluationApplicationState |

**Response: `sRA FieldEvaluationApplicationState`**

| Telegram part / meaning                            | Variable type | Length (bytes) | Values, ranges, and notes                                     |
| -------------------------------------------------- | ------------- | -------------- | ------------------------------------------------------------- |
| Answer                                             | String        | 3              | CoLa A: sRA                                                   |
| Info on current field evaluation application state | String        | 31             | CoLa A: FieldEvaluationApplicationState                       |
| -                                                  | Enum_8        | 1              | Deactivated:: 0<br>Active:: 1<br>Configuring:: 2<br>Error:: 3 |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sRN FieldEvaluationApplicationState<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 23 73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 36
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sRA FieldEvaluationApplicationState 1<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 25 73 52 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 41 70 70 6C 69 63 61 74 69 6F 6E 53 74 61 74 65 20 01 18
```
