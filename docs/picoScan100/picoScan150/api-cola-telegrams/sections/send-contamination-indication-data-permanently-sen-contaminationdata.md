# Send Contamination Indication Data Permanently [sEN ContaminationData]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Contamination Indication

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#send-contamination-indication-data-permanently-sen-contaminationdata

Provides continuous contamination indication data for the individual sectors of the optical cover. When a change in contamination is detected in any sector, the current contamination status of all sectors will be transmitted

**Telegram structure: sEN ContaminationData**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sEN` | `73 45 4E` |
| Command | Get the contamination indication data continuously | String | 17 | | `ContaminationData` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61` |
| Data | Start/ Stop | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN ContaminationData**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}ContaminationData{SPC}1<ETX>
```

```text
<STX>sEN ContaminationData 1<ETX>
```

```text
sEN ContaminationData 1
```

```text
02 73 45 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 45 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 01 09
```

```text
73 45 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 01
```

**Telegram structure: sSN ContaminationData**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sSN` | `73 53 4E` |
| Command | Get the contamination indication data continuously | String | 17 | | `ContaminationData` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61` |
| Number of contamination sectors | | Uint_16 | 2 | Always: | `7` | `00 07` |
| Contamination data | Status of contamination of each sector | Array of Enum_8 | 7 | Blocked:<br>Clean:<br>Warning:<br>Error: | `0<br>1<br>2<br>3` | `00<br>01<br>02<br>03` |

**Example: sSN ContaminationData**

**CoLa A (ASCII)**

```text
<STX>sSN{SPC}ContaminationData{SPC}7{SPC}0{SPC}0{SPC}0{SPC}2{SPC}2{SPC}1{SPC}1<ETX>
```

```text
02 73 53 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 37 20 30 20 30 20 30 20 32 20 32 20 31 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 53 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 00 07 00 00 00 02 02 01 01 19
```
