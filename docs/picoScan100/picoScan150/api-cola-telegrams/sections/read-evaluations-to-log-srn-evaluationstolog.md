# Read Evaluations to Log [sRN EvaluationsToLog]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Detection History

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-evaluations-to-log-srn-evaluationstolog

Returns the evaluations which are logged (if they are in use).

**Telegram structure: sRN EvaluationsToLog**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Evaluations to Log | String | 16 | | `EvaluationsToLog` | `45 76 61 6C 75 61 74 69 6F 6E 73 54 6F 4C 6F 67` |

**Example: sRN EvaluationsToLog**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EvaluationsToLog<ETX>
```

```text
<STX>sRN EvaluationsToLog<ETX>
```

```text
sRN EvaluationsToLog
```

```text
02 73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 73 54 6F 4C 6F 67 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 73 54 6F 4C 6F 67 75
```

```text
73 52 4E 20 45 76 61 6C 75 61 74 69 6F 6E 73 54 6F 4C 6F 67
```

**Telegram structure: sRA EvaluationsToLog**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Evaluations to Log | String | 16 | | `EvaluationsToLog` | `45 76 61 6C 75 61 74 69 6F 6E 73 54 6F 4C 6F 67` |
| EvaluationsToLog[] | Value (repeated 48 times) | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sRA EvaluationsToLog**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EvaluationsToLog{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1<ETX>
```

```text
02 73 52 41 20 45 76 61 6C 75 61 74 69 6F 6E 73 54 6F 4C 6F 67 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 45 73 52 41 20 45 76 61 6C 75 61 74 69 6F 6E 73 54 6F 4C 6F 67 20 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 5A
```
