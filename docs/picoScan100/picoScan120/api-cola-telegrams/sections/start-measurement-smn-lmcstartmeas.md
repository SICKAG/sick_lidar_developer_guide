# Start Measurement [sMN LMCstartmeas]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#start-measurement-smn-lmcstartmeas

Start the laser and (unless in Standby mode) the motor of the device

**Telegram structure: sMN LMCstartmeas**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Start measurement | String | 12 | | `LMCstartmeas` | `4C 4D 43 73 74 61 72 74 6D 65 61 73` |

**Example: sMN LMCstartmeas**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}LMCstartmeas<ETX>
```

```text
<STX>sMN LMCstartmeas<ETX>
```

```text
sMN LMCstartmeas
```

```text
02 73 4D 4E 20 4C 4D 43 73 74 61 72 74 6D 65 61 73 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 4D 4E 20 4C 4D 43 73 74 61 72 74 6D 65 61 73 68
```

```text
73 4D 4E 20 4C 4D 43 73 74 61 72 74 6D 65 61 73
```

**Telegram structure: sAN LMCstartmeas**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Start measurement | String | 12 | | `LMCstartmeas` | `4C 4D 43 73 74 61 72 74 6D 65 61 73` |
| Status code | Accepted when value is 0 | Enum_8 | 1 | Success:<br>Not allowed: | `0<br>1` | `00<br>01` |

**Example: sAN LMCstartmeas**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}LMCstartmeas{SPC}0<ETX>
```

```text
02 73 41 4E 20 4C 4D 43 73 74 61 72 74 6D 65 61 73 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 41 4E 20 4C 4D 43 73 74 61 72 74 6D 65 61 73 20 00 44
```
