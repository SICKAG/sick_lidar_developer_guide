# Send Contamination Indication Result Permanently [sEN ContaminationResult]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Contamination Indication

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#send-contamination-indication-result-permanently-sen-contaminationresult

Subscribe to the contamination result. After `sEA ContaminationResult 1`, the device sends `sSN ContaminationResult` every time the warning or error state changes. Send `sEN ContaminationResult 0` to stop.

**Telegram structure: sEN ContaminationResult**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | | String | 19 | | `ContaminationResult` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 52 65 73 75 6C 74` |
| Data | Start/ Stop | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

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

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sSN` | `73 53 4E` |
| Warning | Contamination warning | Bool_1 | 1 | Inactive:<br>Active: | `0<br>1` | `00<br>01` |
| Error | Contamination error | Bool_1 | 1 | Inactive:<br>Active: | `0<br>1` | `00<br>01` |
