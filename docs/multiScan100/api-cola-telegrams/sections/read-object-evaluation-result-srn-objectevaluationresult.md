# Read Object Evaluation Result [sRN ObjectEvaluationResult]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Object Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-object-evaluation-result-srn-objectevaluationresult

This telegram returns the state of all 48 object evaluations. The timestamp changes only when an evaluation state changes.

**Telegram structure: sRN ObjectEvaluationResult**

| Telegram part | Description              | Variable | Length | Additional details | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                           |
| ------------- | ------------------------ | -------- | ------ | ------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type  | Read                     | String   | 3      |                    | `sRN`                    | `73 52 4E`                                                          |
| Command       | Object evaluation result | String   | 22     |                    | `ObjectEvaluationResult` | `4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |

**Example: sRN ObjectEvaluationResult**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ObjectEvaluationResult<ETX>
```

```text
sRN ObjectEvaluationResult
```

```text
02 73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1A 73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 65
```

```text
73 52 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74
```

**Telegram structure: sRA ObjectEvaluationResult**

| Telegram part     | Description                                                                                                        | Variable | Length | Additional details                                                                             | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ------ | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type      | Answer                                                                                                             | String   | 3      |                                                                                                | `sRA`                        | `73 52 41`                                                          |
| Command           | Object evaluation result                                                                                           | String   | 22     |                                                                                                | `ObjectEvaluationResult`     | `4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Version           | Version number                                                                                                     | Uint_16  | 2      |                                                                                                | `1`                          | `00 01`                                                             |
| Timestamp         | Time of the last state change, in microseconds since January 1, 1970, 00:00 (UTC), based on the sensor system time | ULInt_64 | 8      |                                                                                                | `0 ... FFFFFFFFFFFFFFFFh`    | `00 00 00 00 00 00 00 00 ... FF FF FF FF FF FF FF FF`               |
| Evaluation result | State of evaluation 1                                                                                              | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                                  |
| Evaluation result | State of evaluation 2                                                                                              | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                                  |
| ..                |                                                                                                                    |          |        |                                                                                                |                                                           |                                                                                                  |
| Evaluation result | State of evaluation 48. The array always has 48 entries.                                                           | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                                  |

**Example: sRA ObjectEvaluationResult**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ObjectEvaluationResult{SPC}1{SPC}2AF4D38{SPC}2{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 20 32 41 46 34 44 33 38 20 32 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 55 73 52 41 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 00 01 00 00 00 00 02 AF 4D 38 02 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 91
```
