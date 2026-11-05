# Send Contamination Indication Data Permanently [sEN ContaminationData]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Contamination Indication

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#send-contamination-indication-data-permanently-sen-contaminationdata

Subscribe to the contamination data. After `sEA ContaminationData 1`, the device sends `sSN ContaminationData` with the state of all sectors every time the contamination state of a sector changes. Send `sEN ContaminationData 0` to stop.

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

**Example: sEA ContaminationData**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}ContaminationData{SPC}1<ETX>
```

```text
02 73 45 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 45 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61 20 01 06
```

**Telegram structure: sSN ContaminationData**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sSN` | `73 53 4E` |
| Command | Get the contamination indication data continuously | String | 17 | | `ContaminationData` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61` |
| Number of sectors | Number of the following sector values | Uint_16 | 2 | Always 12 | `C` | `00 0C` |
| Contamination data | Status of contamination of sector 1 … 12, one value per sector | Enum_8 | 1 | Deactivated:<br>Clean:<br>Warning:<br>Error: | `0<br>1<br>2<br>3` | `00<br>01<br>02<br>03` |
