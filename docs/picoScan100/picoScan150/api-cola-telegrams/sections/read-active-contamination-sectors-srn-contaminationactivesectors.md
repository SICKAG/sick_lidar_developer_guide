# Read Active Contamination Sectors [sRN ContaminationActiveSectors]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Contamination Indication

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-active-contamination-sectors-srn-contaminationactivesectors

Returns the active contamination sectors. Starts by the first sector at -138 degree and continues counterclockwise.

**Telegram structure: sRN ContaminationActiveSectors**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Active Contamination Sectors | String | 26 | | `ContaminationActiveSectors` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 41 63 74 69 76 65 53 65 63 74 6F 72 73` |

**Example: sRN ContaminationActiveSectors**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ContaminationActiveSectors<ETX>
```

```text
<STX>sRN ContaminationActiveSectors<ETX>
```

```text
sRN ContaminationActiveSectors
```

```text
02 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 41 63 74 69 76 65 53 65 63 74 6F 72 73 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 41 63 74 69 76 65 53 65 63 74 6F 72 73 6C
```

```text
73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 41 63 74 69 76 65 53 65 63 74 6F 72 73
```

**Telegram structure: sRA ContaminationActiveSectors**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Active Contamination Sectors | String | 26 | | `ContaminationActiveSectors` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 41 63 74 69 76 65 53 65 63 74 6F 72 73` |
| ContaminationActiveSectors length | Number of ContaminationActiveSectors elements (max. 12) | Uint_16 | 2 | | `0 ... C` | `00 00 ... 00 0C` |
| ContaminationActiveSectors[] | Value (repeated once per element) | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sRA ContaminationActiveSectors**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ContaminationActiveSectors{SPC}7{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1<ETX>
```

```text
02 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 41 63 74 69 76 65 53 65 63 74 6F 72 73 20 37 20 31 20 31 20 31 20 31 20 31 20 31 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 28 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 41 63 74 69 76 65 53 65 63 74 6F 72 73 20 00 07 01 01 01 01 01 01 01 45
```
