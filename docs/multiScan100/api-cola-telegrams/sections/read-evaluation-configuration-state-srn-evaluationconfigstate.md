# Read Evaluation Configuration State [sRN EvaluationConfigState]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-evaluation-configuration-state-srn-evaluationconfigstate

Read beam-limit and evaluation-limit status. On firmware 2.4.4.0R, the response contains two status bytes followed by 49 two-byte words. Retain the final word when parsing the response; its meaning is unspecified.

**Telegram structure: sRN EvaluationConfigState**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                                                        |
| ------------- | --------------------- | -------- | ------ | ------------------ | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Command type  | Read                  | String   | 3      |                    | `sRN`                   | `73 52 4E`                                                       |
| Command       | EvaluationConfigState | String   | 21     |                    | `EvaluationConfigState` | `45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65` |

**Example: sRN EvaluationConfigState**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EvaluationConfigState<ETX>
```

```text
<STX>sRN EvaluationConfigState<ETX>
```

```text
sRN EvaluationConfigState
```

```text
02 73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 04
```

```text
73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65
```

**Telegram structure: sRA EvaluationConfigState**

| Telegram part            | Description                   | Variable         | Length                 | Additional details            | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                        |
| ------------------------ | ----------------------------- | ---------------- | ---------------------- | ----------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Command type             | Answer                        | String           | 3                      |                               | `sRA`                    | `73 52 41`                                                       |
| Command                  | EvaluationConfigState         | String           | 21                     |                               | `EvaluationConfigState`  | `45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65` |
| Active beams limit       | Limit status                  | Enum_8           | 1                      | OK / warning / error          | `0 / 1 / 2`              | `00 / 01 / 02`                                                   |
| Active evaluations limit | Limit status                  | Enum_8           | 1                      | OK / warning / error          | `0 / 1 / 2`              | `00 / 01 / 02`                                                   |
| Beam counts              | Raw returned beam-count words | Array of Uint_16 | 98 (firmware 2.4.4.0R) | 49 words on firmware 2.4.4.0R | `0 ... FFFF (each word)` | `00 00 ... FF FF (each word)`                                    |

**Example: sRA EvaluationConfigState**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EvaluationConfigState{SPC}0{SPC}0{SPC}F1F{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 20 30 20 30 20 46 31 46 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 7E 73 52 41 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 20 00 00 0F 1F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 3B
```
