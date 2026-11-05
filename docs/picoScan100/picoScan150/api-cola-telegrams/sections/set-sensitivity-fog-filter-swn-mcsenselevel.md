# Set Sensitivity Fog Filter [sWN MCSenseLevel]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-sensitivity-fog-filter-swn-mcsenselevel

Filter out disturbances in the meausurement data caused by fog or steam.

**Telegram structure: sWN MCSenseLevel**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Sense level | String | 12 | | `MCSenseLevel` | `4D 43 53 65 6E 73 65 4C 65 76 65 6C` |
| Sensitivity level | Enable or disable fog filter and Sense Level | Uint_8 | 1 | Fog Filter off<br>Fog Filter on | `0<br>1` | `00<br>01` |

**Example: sWN MCSenseLevel**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}MCSenseLevel{SPC}1<ETX>
```

```text
<STX>sWN MCSenseLevel 1<ETX>
```

```text
sWN MCSenseLevel 1
```

```text
02 73 57 4E 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 57 4E 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 20 01 7D
```

```text
73 57 4E 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 20 01
```

**Telegram structure: sWA MCSenseLevel**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Sense level | String | 12 | | `MCSenseLevel` | `4D 43 53 65 6E 73 65 4C 65 76 65 6C` |

**Example: sWA MCSenseLevel**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}MCSenseLevel<ETX>
```

```text
02 73 57 41 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 57 41 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 20 73
```
