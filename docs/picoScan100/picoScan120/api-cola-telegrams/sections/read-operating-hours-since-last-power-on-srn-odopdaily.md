# Read Operating Hours Since Last Power On [sRN ODopdaily]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Operating Data

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#read-operating-hours-since-last-power-on-srn-odopdaily

Shows the runtime duration since the last power on of the device.

**Telegram structure: sRN ODopdaily**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read operating hours | String | 9 | | `ODopdaily` | `4F 44 6F 70 64 61 69 6C 79` |

**Example: sRN ODopdaily**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ODopdaily<ETX>
```

```text
<STX>sRN ODopdaily<ETX>
```

```text
sRN ODopdaily
```

```text
02 73 52 4E 20 4F 44 6F 70 64 61 69 6C 79 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 52 4E 20 4F 44 6F 70 64 61 69 6C 79 22
```

```text
73 52 4E 20 4F 44 6F 70 64 61 69 6C 79
```

**Telegram structure: sRA ODopdaily**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read operating hours since last power on | String | 9 | | `ODopdaily` | `4F 44 6F 70 64 61 69 6C 79` |
| Value | Operating hours in 1/10 h | Real as float according to IEEE754 | 4 | | `0h … FFFFFFFFh` | `00 00 00 00 …FF FF FF FF` |

**Example: sRA ODopdaily**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ODopdaily{SPC}424772B8<ETX>
```

```text
02 73 52 41 20 4F 44 6F 70 64 61 69 6C 79 20 34 32 34 37 37 32 42 38 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 41 20 4F 44 6F 70 64 61 69 6C 79 20 42 47 72 B8 C2
```
