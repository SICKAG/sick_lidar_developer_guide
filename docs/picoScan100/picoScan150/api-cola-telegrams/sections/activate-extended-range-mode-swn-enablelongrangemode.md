# Activate Extended Range Mode [sWN EnableLongRangeMode]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#activate-extended-range-mode-swn-enablelongrangemode

Extends the maximum scanning distance .

**Telegram structure: sWN EnableLongRangeMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Enable extended range mode | String | 19 | | `EnableLongRangeMode` | `45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65` |
| Status code | Activate / deactivate extended range mode | Bool_1 | 1 | Inactive:<br>Active: | `0<br>1` | `00<br>01` |

**Example: sWN EnableLongRangeMode 1**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EnableLongRangeMode{SPC}1<ETX>
```

```text
<STX>sWN EnableLongRangeMode 1<ETX>
```

```text
sWN EnableLongRangeMode 1
```

```text
02 73 57 4E 20 45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 57 4E 20 45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65 20 01 1C
```

```text
73 57 4E 20 45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65 20 01
```

**Telegram structure: sWA EnableLongeRangeModer**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Enable extended range mode | String | 19 | | `EnableLongRangeMode` | `45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65` |

**Example: sWA EnableLongeRangeMode**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EnableLongRangeMode<ETX>
```

```text
02 73 57 41 20 45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 57 41 20 45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65 20 12
```
