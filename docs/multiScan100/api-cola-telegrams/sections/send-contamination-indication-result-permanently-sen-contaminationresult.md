# Send Contamination Indication Result Permanently [sEN ContaminationResult]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Contamination Indication

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#send-contamination-indication-result-permanently-sen-contaminationresult

This telegram is intended to activate the event for read the contamination result permanently. The telegram returns two Boolean. One for warning and one for error. Depending on the strategy of the contamination indication the state changes if one or all sectors are in the specific status (warning or error).

**Telegram structure: sEN ContaminationResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type  | Read        | String   | 3      |                    | `sEN`                 | `73 45 4E`                                                 |
| Command       |             | String   | 19     |                    | `ContaminationResult` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Data          | Start/ Stop | Bool_1   | 1      | Stop:<br>Start:    | `0<br>1`              | `00<br>01`                                                 |

**Example: sEN ContaminationResult**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}ContaminationResult{SPC}1<ETX>
```

```text
sEN ContaminationResult 1
```

```text
02 73 45 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 45 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 01 10
```

```text
73 45 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 01
```

**Example: sEA ContaminationResult**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}ContaminationResult{SPC}1<ETX>
```

```text
02 73 45 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 45 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 01 1F
```

**Telegram structure: sSN ContaminationResult**

| Telegram part        | Description | Variable | Length | Additional details     | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                  |
| -------------------- | ----------- | -------- | ------ | ---------------------- | ------------------------------------- | --------------------------------------- |
| Command type         | Answer      | String   | 3      |                        | `sSN`    | `73 53 4E` |
| Contamination Result | Warning     | Bool_1   | 1      | Not active:<br>Active: | `0<br>1` | `00<br>01` |
| Contamination Result | Error       | Bool_1   | 1      | Not active:<br>Active: | `0<br>1` | `00<br>01` |

**Example: sSN ContaminationResult warning active error inactive**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ContaminationResult{SPC}1{SPC}0<ETX>
```

```text
02 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 31 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1A 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74 20 01 00 08
```
