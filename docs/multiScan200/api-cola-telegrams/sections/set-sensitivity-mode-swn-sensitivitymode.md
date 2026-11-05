# Set Sensitivity Mode [sWN SensitivityMode]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-sensitivity-mode-swn-sensitivitymode

Set the sensitivity of the measurement: maximum robustness, standard (recommended), or maximum detectivity.

Required user level: Authorized client.

**Telegram structure: sWN SensitivityMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Sensitivity Mode | String | 15 | | `SensitivityMode` | `53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65` |
| Sensitivity | Choose Sensitivity Mode | Enum_8 | 1 | Maximum robustness:<br>Standard (recommended):<br>Maximum detectivity: | `0<br>1<br>2` | `00<br>01<br>02` |

**Example: sWN SensitivityMode**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}SensitivityMode{SPC}1<ETX>
```

```text
sWN SensitivityMode 1
```

```text
02 73 57 4E 20 53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 57 4E 20 53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65 20 01 05
```

```text
73 57 4E 20 53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65 20 01
```

**Telegram structure: sWA SensitivityMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Sensitivity Mode | String | 15 | | `SensitivityMode` | `53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65` |

**Example: sWA SensitivityMode**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}SensitivityMode<ETX>
```

```text
02 73 57 41 20 53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 57 41 20 53 65 6E 73 69 74 69 76 69 74 79 4D 6F 64 65 20 0B
```
