# Set Data Output Mode [sWN dataOutputMode]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-data-output-mode-swn-dataoutputmode

Select the measurement data output. Firmware V1.1.0 supports Compact over TCP and Native ROS 2.

Required user level: Authorized client.

**Telegram structure: sWN dataOutputMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | Data output mode | String | 14 | | `dataOutputMode` | `64 61 74 61 4F 75 74 70 75 74 4D 6F 64 65` |
| Value | Data output mode | Enum_8 | 1 | Disable:<br>TCP Compact:<br>Native ROS 2: | `0<br>1<br>3` | `00<br>01<br>03` |

**Example: sWN dataOutputMode**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}dataOutputMode{SPC}1<ETX>
```

```text
sWN dataOutputMode 1
```

```text
02 73 57 4E 20 64 61 74 61 4F 75 74 70 75 74 4D 6F 64 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 57 4E 20 64 61 74 61 4F 75 74 70 75 74 4D 6F 64 65 20 01 67
```

```text
73 57 4E 20 64 61 74 61 4F 75 74 70 75 74 4D 6F 64 65 20 01
```

**Telegram structure: sWA dataOutputMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 14 | | `dataOutputMode` | `64 61 74 61 4F 75 74 70 75 74 4D 6F 64 65` |

**Example: sWA dataOutputMode**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}dataOutputMode<ETX>
```

```text
02 73 57 41 20 64 61 74 61 4F 75 74 70 75 74 4D 6F 64 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 41 20 64 61 74 61 4F 75 74 70 75 74 4D 6F 64 65 20 69
```
