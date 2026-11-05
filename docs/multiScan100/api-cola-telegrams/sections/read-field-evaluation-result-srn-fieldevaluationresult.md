# Read Field Evaluation Result [sRN FieldEvaluationResult]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-field-evaluation-result-srn-fieldevaluationresult

This telegram returns the status information of all evaluations.

**Telegram structure: sRN FieldEvaluationResult**

| Telegram part | Description                     | Variable | Length | Additional details | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                                                        |
| ------------- | ------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Command type  | Read                            | String   | 3      |                    | `sRN`                   | `73 52 4E`                                                       |
| Command       | Info on field evaluation result | String   | 21     |                    | `FieldEvaluationResult` | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |

**Example: sRN FieldEvaluationResult**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}FieldEvaluationResult<ETX>
```

```text
<STX>sRN FieldEvaluationResult<ETX>
```

```text
sRN FieldEvaluationResult
```

```text
02 73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 12
```

```text
73 52 4E 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74
```

**Telegram structure: sRA FieldEvaluationResult**

| Telegram part     | Description                                                                                                                                                                                      | Variable | Length | Additional details                                                                             | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------ | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Command type      | Answer                                                                                                                                                                                           | String   | 3      |                                                                                                | `sRA`                        | `73 52 41`                                                       |
| Command           | Info on field evaluation result                                                                                                                                                                  | String   | 21     |                                                                                                | `FieldEvaluationResult`      | `46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Version           | Version number                                                                                                                                                                                   | Uint_16  | 2      |                                                                                                | `0 ... FFFFh`                | `00 ... FF FF`                                                   |
| Timestamp         | Time of the last field infringement. Time base is the sensor system time in microseconds since January 1, 1970, 00:00 (UTC). If a time server is being used, the configured system time is used. | ULInt_64 | 8      |                                                                                                | `0 ... FFFFFFFFFFFFFFFFh`    | `00 00 00 00 00 00 00 00 ... FF FF FF FF FF FF FF FF`            |
| Evaluation Result | Evaluation state of the first field.                                                                                                                                                             | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                               |
| Evaluation Result | Evaluation state of the second field.                                                                                                                                                            | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                               |

| ..                |                                                                                                                                                                                                  |          |        |                                                                                                |                                                           |                                                                                               |     |
| Evaluation Result | Evaluation state of the last field. (maximum amount of evaluations = 48)                                                                                                                         | Enum_8   | 1      | Not configured:<br>Inactive:<br>Free:<br>Detecting infringed:<br>Infringed:<br>Detecting free: | `0<br>1<br>2<br>3<br>4<br>5` | `00<br>01<br>02<br>03<br>04<br>05`                               |     |

On firmware 2.4.4.0R, the parameter block is a 2-byte version,
an 8-byte timestamp, and 48 one-byte result codes (58 bytes total).
Each result occupies one byte, with no additional reserved byte.

The timestamp unit is microseconds for both read replies (`sRA`) and events
(`sSN`), not milliseconds. For example, the event timestamp `65D2897B50D60`
is 1,791,278,785,564,000 microseconds, corresponding to
October 6, 2026, 09:26:25.564 UTC. Interpreting it as milliseconds would put
the date more than 56,000 years after 1970.

**Example: sRA FieldEvaluationResult**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}FieldEvaluationResult{SPC}1{SPC}A07E2E8{SPC}4{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 20 41 30 37 45 32 45 38 20 34 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 54 73 52 41 20 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 52 65 73 75 6C 74 20 00 01 00 00 00 00 0A 07 E2 E8 04 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 3F
```
