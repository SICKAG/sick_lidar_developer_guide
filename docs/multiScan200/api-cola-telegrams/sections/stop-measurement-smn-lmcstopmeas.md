# Stop Measurement [sMN LMCstopmeas]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#stop-measurement-smn-lmcstopmeas

Switch off the laser. The motor keeps running at the configured frequency.

Required user level: Authorized client.

**Telegram structure: sMN LMCstopmeas**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Stop measurement | String | 11 | | `LMCstopmeas` | `4C 4D 43 73 74 6F 70 6D 65 61 73` |

**Example: sMN LMCstopmeas**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}LMCstopmeas<ETX>
```

```text
sMN LMCstopmeas
```

```text
02 73 4D 4E 20 4C 4D 43 73 74 6F 70 6D 65 61 73 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 4D 4E 20 4C 4D 43 73 74 6F 70 6D 65 61 73 10
```

```text
73 4D 4E 20 4C 4D 43 73 74 6F 70 6D 65 61 73
```

**Telegram structure: sAN LMCstopmeas**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Stop measurement | String | 11 | | `LMCstopmeas` | `4C 4D 43 73 74 6F 70 6D 65 61 73` |
| Status code | Accepted when value is 0 | Enum_8 | 1 | No error:<br>Not allowed: | `0<br>1` | `00<br>01` |

**Example: sAN LMCstopmeas**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}LMCstopmeas{SPC}0<ETX>
```

```text
02 73 41 4E 20 4C 4D 43 73 74 6F 70 6D 65 61 73 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 41 4E 20 4C 4D 43 73 74 6F 70 6D 65 61 73 20 00 3C
```
