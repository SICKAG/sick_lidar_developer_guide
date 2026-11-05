# Read Evaluation Configuration State [sRN EvaluationConfigState]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-evaluation-configuration-state-srn-evaluationconfigstate

The telegram is intended to read the current configuration state of the field evaluation. Depending on the device, computational limits can be reached. If so, the telegram returns an error or warning if the number of beams, the number of beams per evaluation, or the number of evaluations reaches the maximum defined threshold.

**Telegram structure: sRN EvaluationConfigState**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Info on current configuration state | String | 21 | | `EvaluationConfigState` | `45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65` |

**Example: sRN EvaluationConfigState**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EvaluationConfigState<ETX>
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

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Info on current configuration state | String | 21 | | `EvaluationConfigState` | `45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65` |
| Active beams limit | - | Enum_8 | 1 | OK:<br>Warning:<br>Error: | `0<br>1<br>2` | `00<br>01<br>02` |
| Active evaluations limit | - | Enum_8 | 1 | OK:<br>Warning:<br>Error: | `0<br>1<br>2` | `00<br>01<br>02` |
| Active beams per evaluation limit | - | Enum_8 | 1 | OK:<br>Warning:<br>Error: | `0<br>1<br>2` | `00<br>01<br>02` |
| Number of intersecting beams | One value per evaluation, evaluation 1 to 48 | Array Uint_32 | 192 | | `0 ... FFFFFFFFh` | `00 00 00 00 ... FF FF FF FF` |
| Input is output error list | Number of list entries. Normally 0 (empty list). | Uint_16 | 2 | | `0 ... +48d (0 ... 30h)` | `00 00 ... 00 30` |

**Example: sRA EvaluationConfigState - one evaluation active, intersected by 172 beams, status of all limits is OK**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EvaluationConfigState{SPC}0{SPC}0{SPC}0{SPC}AC{SPC}0{SPC}0…(48 beam counts){SPC}0<ETX>
```

```text
02 73 52 41 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 20 30 20 30 20 30 20 41 43 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 DF 73 52 41 20 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 53 74 61 74 65 20 00 00 00 00 00 00 AC 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 87
```
