# Receive Contamination Indication Data by Event [sEN ContaminationData]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Contamination Indication

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#receive-contamination-indication-data-by-event-sen-contaminationdata

Returns the contamination state of all contamination sectors. After registration, the device sends the current value as an `sSN` telegram whenever it changes. Send the telegram with the value 0 to stop the event.

**Telegram structure: sEN ContaminationData**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Receive Contamination Indication Data by Event | String | 17 | | `ContaminationData` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

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

**Telegram structure: sEA ContaminationData**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Receive Contamination Indication Data by Event | String | 17 | | `ContaminationData` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 44 61 74 61` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

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
