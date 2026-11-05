# Activate Standby Mode [sMN LMCstandby]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#activate-standby-mode-smn-lmcstandby

Set the device to standby mode.

Required user level: Authorized client.

**Telegram structure: sMN LMCstandby**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Set device to standby | String | 10 | | `LMCstandby` | `4C 4D 43 73 74 61 6E 64 62 79` |

**Example: sMN LMCstandby**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}LMCstandby<ETX>
```

```text
sMN LMCstandby
```

```text
02 73 4D 4E 20 4C 4D 43 73 74 61 6E 64 62 79 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 4D 4E 20 4C 4D 43 73 74 61 6E 64 62 79 65
```

```text
73 4D 4E 20 4C 4D 43 73 74 61 6E 64 62 79
```

**Telegram structure: sAN LMCstandby**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Set device to standby | String | 10 | | `LMCstandby` | `4C 4D 43 73 74 61 6E 64 62 79` |
| Status code | Accepted when value is 0 | Enum_8 | 1 | Success: | `0` | `00` |

**Example: sAN LMCstandby**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}LMCstandby{SPC}0<ETX>
```

```text
02 73 41 4E 20 4C 4D 43 73 74 61 6E 64 62 79 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 41 4E 20 4C 4D 43 73 74 61 6E 64 62 79 20 00 49
```
