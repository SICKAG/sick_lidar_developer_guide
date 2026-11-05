# Read Contamination Indication Result [sRN ContaminationResult]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Contamination Indication

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-contamination-indication-result-srn-contaminationresult

Read the contamination result: one value for the warning and one for the error. Depending on the strategy, the state changes when one or all sectors reach warning or error.

**Telegram structure: sRN ContaminationResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | | String | 19 | | `ContaminationResult` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74` |

**Example: sRN ContaminationResult**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ContaminationResult<ETX>
```

```text
sRN ContaminationResult
```

```text
02 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 26
```

```text
73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74
```

**Telegram structure: sRA ContaminationResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | | String | 19 | | `ContaminationResult` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Warning | Contamination warning | Bool_1 | 1 | Inactive:<br>Active: | `0<br>1` | `00<br>01` |
| Error | Contamination error | Bool_1 | 1 | Inactive:<br>Active: | `0<br>1` | `00<br>01` |

**Example: sRA ContaminationResult**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ContaminationResult{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1A 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 00 00 09
```
