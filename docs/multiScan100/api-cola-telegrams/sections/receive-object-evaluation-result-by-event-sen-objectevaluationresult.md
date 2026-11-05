# Receive Object Evaluation Result by Event [sEN ObjectEvaluationResult]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Object Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#receive-object-evaluation-result-by-event-sen-objectevaluationresult

This telegram starts or stops the `sSN ObjectEvaluationResult` event. The device sends the event when the state of an evaluation changes, not cyclically.

**Telegram structure: sEN ObjectEvaluationResult**

| Telegram part | Description              | Variable | Length | Additional details | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                           |
| ------------- | ------------------------ | -------- | ------ | ------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type  | Event                    | String   | 3      |                    | `sEN`                    | `73 45 4E`                                                          |
| Command       | Object evaluation result | String   | 22     |                    | `ObjectEvaluationResult` | `4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Reporting     | Start/ stop              | Enum_8   | 1      | Stop:<br>Start:    | `0<br>1`                 | `00<br>01`                                                          |

**Example: sEN ObjectEvaluationResult**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}ObjectEvaluationResult{SPC}1<ETX>
```

```text
sEN ObjectEvaluationResult 1
```

```text
02 73 45 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 45 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 01 53
```

```text
73 45 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 01
```

**Telegram structure: sEA ObjectEvaluationResult**

| Telegram part | Description              | Variable | Length | Additional details   | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                           |
| ------------- | ------------------------ | -------- | ------ | -------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type  | Answer                   | String   | 3      |                      | `sEA`                    | `73 45 41`                                                          |
| Command       | Object evaluation result | String   | 22     |                      | `ObjectEvaluationResult` | `4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Reporting     | Start/ stop              | Enum_8   | 1      | Stopped:<br>Started: | `0<br>1`                 | `00<br>01`                                                          |

**Example: sEA ObjectEvaluationResult**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}ObjectEvaluationResult{SPC}1<ETX>
```

```text
02 73 45 41 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 45 41 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 01 5C
```

The `sSN` event has the same parameters as the `sRA ObjectEvaluationResult` answer. The example shows evaluation 1 after its group was deactivated: state 1 (Inactive).

**Telegram structure: sSN ObjectEvaluationResult**

| Telegram part     | Description                                                                                                        | Variable | Length | Additional details                                                                             | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ------ | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type      | Event                                                                                                              | String   | 3      |                                                                                                | `sSN`                        | `73 53 4E`                                                          |
| Command           | Object evaluation result                                                                                           | String   | 22     |                                                                                                | `ObjectEvaluationResult`     | `4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Version           | Version number                                                                                                     | Uint_16  | 2      |                                                                                                | `1`                          | `00 01`                                                             |
| Timestamp         | Time of the last state change, in microseconds since January 1, 1970, 00:00 (UTC), based on the sensor system time | ULInt_64 | 8      |                                                                                                | `0 ... FFFFFFFFFFFFFFFFh`    | `00 00 00 00 00 00 00 00 ... FF FF FF FF FF FF FF FF`               |
| Evaluation result | State of evaluation 1                                                                                              | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                                  |
| Evaluation result | State of evaluation 2                                                                                              | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                                  |
| ..                |                                                                                                                    |          |        |                                                                                                |                                                           |                                                                                                  |
| Evaluation result | State of evaluation 48. The array always has 48 entries.                                                           | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                                  |

**Example: sSN ObjectEvaluationResult**

**CoLa A (ASCII)**

```text
<STX>sSN{SPC}ObjectEvaluationResult{SPC}1{SPC}22434938{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 53 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 20 32 32 34 33 34 39 33 38 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 55 73 53 4E 20 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 00 01 00 00 00 00 22 43 49 38 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 54
```
