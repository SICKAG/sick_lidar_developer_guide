# Read Sensitivity Mode [sRN SensitivityMode]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-sensitivity-mode-srn-sensitivitymode

The sensitivity mode can be used to adjust the detection behavior. A higher sensitivity increases the scanning range. This setting should only be used when there is no direct sunlight and only low ambient light. A higher sensitivity increases the proneness to measurement noise and data loss. Ambient light can negatively affect the signal quality and impair the measurement performance.

**Telegram structure: sRN SensitivityMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Sensitivity Mode | String | 15 | | `SensitivityMode` | `53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65` |

**Example: sRN SensitivityMode**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}SensitivityMode<ETX>
```

```text
<STX>sRN SensitivityMode<ETX>
```

```text
sRN SensitivityMode
```

```text
02 73 52 4E 20 53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 4E 20 53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65 21
```

```text
73 52 4E 20 53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65
```

**Telegram structure: sRA SensitivityMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Sensitivity Mode | String | 15 | | `SensitivityMode` | `53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65` |
| SensitivityMode | SensitivityMode | Enum_8 | 1 | NORMAL:<br>INCREASED:<br>HIGHEST: | `0<br>1<br>2` | `00<br>01<br>02` |

**Example: sRA SensitivityMode**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}SensitivityMode{SPC}0<ETX>
```

```text
02 73 52 41 20 53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 52 41 20 53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65 20 00 0E
```
