# Read Contamination Indication Data [sRN ContaminationData]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Contamination Indication

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-contamination-indication-data-srn-contaminationdata

Get the current contamination indication data.

**Telegram structure: sRN ContaminationData**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Reading status of all contamination sectors | String | 17 | | `ContaminationData` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61` |

**Example: sRN ContaminationData**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ContaminationData<ETX>
```

```text
<STX>sRN ContaminationData<ETX>
```

```text
sRN ContaminationData
```

```text
02 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 3F
```

```text
73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61
```

**Telegram structure: sRA ContaminationData**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Reading status of all contamination sectors | String | 17 | | `ContaminationData` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61` |
| Number of contamination sectors | | Uint_16 | 2 | Always: | `7` | `00 07` |
| Contamination data | Status of contamination of each sector | Array of Enum_8 | 7 | Blocked:<br>Clean:<br>Warning:<br>Error: | `0<br>1<br>2<br>3` | `00<br>01<br>02<br>03` |

**Example: sRA ContaminationData**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ContaminationData{SPC}7{SPC}2{SPC}1{SPC}2{SPC}3{SPC}2{SPC}1{SPC}2<ETX>
```

```text
02 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 37 20 32 20 31 20 32 20 33 20 32 20 31 20 32 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 00 07 02 01 02 03 02 01 02 14
```
