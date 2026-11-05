# Read Status of Extended Range Mode [sRN EnableLongRangeMode]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-status-of-extended-range-mode-srn-enablelongrangemode

Read if the extended range mode is currently active.

**Telegram structure: sRN EnableLongRangeMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read status of extended range mode | String | 19 | | `EnableLongRangeMode` | `45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65` |

**Example: sRN EnableLongRangeMode**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EnableLongRangeMode<ETX>
```

```text
<STX>sRN EnableLongRangeMode<ETX>
```

```text
sRN EnableLongRangeMode
```

```text
02 73 52 4E 20 45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 4E 20 45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65 38
```

```text
73 52 4E 20 45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65
```

**Telegram structure: sRA EnableLongRangeMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read status of extended range mode | String | 19 | | `EnableLongRangeMode` | `45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65` |
| Status code | Status of extended range mode | Bool_1 | 1 | Inactive:<br>Active: | `0<br>1` | `00<br>01` |

**Example: sRA EnableLongRangeMode**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EnableLongRangeMode{SPC}1<ETX>
```

```text
02 73 52 41 20 45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 52 41 20 45 6E 61 62 6C 65 4C 6F 6E 67 52 61 6E 67 65 4D 6F 64 65 20 01 16
```
