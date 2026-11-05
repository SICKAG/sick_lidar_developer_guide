# Read Autostart Measurement [sRN LMPautostartmeas]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-autostart-measurement-srn-lmpautostartmeas

Returns the mode for automatic start of measurement after boot-up.

**Telegram structure: sRN LMPautostartmeas**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Autostart Measurement | String | 16 | | `LMPautostartmeas` | `4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73` |

**Example: sRN LMPautostartmeas**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LMPautostartmeas<ETX>
```

```text
<STX>sRN LMPautostartmeas<ETX>
```

```text
sRN LMPautostartmeas
```

```text
02 73 52 4E 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 4E 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 6B
```

```text
73 52 4E 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73
```

**Telegram structure: sRA LMPautostartmeas**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Autostart Measurement | String | 16 | | `LMPautostartmeas` | `4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73` |
| AutoStartMeasure | Start measurement after boot-up automatically | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sRA LMPautostartmeas**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LMPautostartmeas{SPC}1<ETX>
```

```text
02 73 52 41 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 52 41 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 20 01 45
```
