# Set Evaluations to Log [sWN EvaluationsToLog]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Detection History

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#set-evaluations-to-log-swn-evaluationstolog

Sets which evaluations are logged when they are in use. This telegram requires at least user level: Authorized Client.

**Telegram structure: sWN EvaluationsToLog**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set Evaluations to Log | String | 16 | | `EvaluationsToLog` | `45 76 61 6C 75 61 74 69 6F 6E 73 54 6F 4C 6F 67` |
| EvaluationsToLog[] | Value (repeated 48 times) | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sWN EvaluationsToLog**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EvaluationsToLog{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1<ETX>
```

```text
<STX>sWN EvaluationsToLog 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1<ETX>
```

```text
sWN EvaluationsToLog 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
```

```text
02 73 57 4E 20 45 76 61 6C 75 61 74 69 6F 6E 73 54 6F 4C 6F 67 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 45 73 57 4E 20 45 76 61 6C 75 61 74 69 6F 6E 73 54 6F 4C 6F 67 20 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 50
```

```text
73 57 4E 20 45 76 61 6C 75 61 74 69 6F 6E 73 54 6F 4C 6F 67 20 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01
```

**Telegram structure: sWA EvaluationsToLog**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set Evaluations to Log | String | 16 | | `EvaluationsToLog` | `45 76 61 6C 75 61 74 69 6F 6E 73 54 6F 4C 6F 67` |

**Example: sWA EvaluationsToLog**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EvaluationsToLog<ETX>
```

```text
02 73 57 41 20 45 76 61 6C 75 61 74 69 6F 6E 73 54 6F 4C 6F 67 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 57 41 20 45 76 61 6C 75 61 74 69 6F 6E 73 54 6F 4C 6F 67 20 5F
```
