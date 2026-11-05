# Read Contamination Indication Data [sRN ContaminationData]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Contamination Indication

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-contamination-indication-data-srn-contaminationdata

Returns the contamination state of all contamination sectors.

**Telegram structure: sRN ContaminationData**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Contamination Indication Data | String | 17 | | `ContaminationData` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61` |

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
| Command | Read Contamination Indication Data | String | 17 | | `ContaminationData` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61` |
| ContaminationData length | Number of ContaminationData elements (max. 12) | Uint_16 | 2 | | `0 ... C` | `00 00 ... 00 0C` |
| ContaminationData[] | Value (repeated once per element) | Enum_8 | 1 | CM_DATA_NONE:<br>CM_DATA_CLEAN:<br>CM_DATA_WARN:<br>CM_DATA_ERROR: | `0<br>1<br>2<br>3` | `00<br>01<br>02<br>03` |

**Example: sRA ContaminationData**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ContaminationData{SPC}C{SPC}1{SPC}2{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}2{SPC}1<ETX>
```

```text
02 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 43 20 31 20 32 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 32 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 24 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 00 0C 01 02 00 00 00 00 00 00 00 00 02 01 1C
```
