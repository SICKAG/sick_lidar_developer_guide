# Read Data Output Mode [sRN dataOutputMode]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-data-output-mode-srn-dataoutputmode

Returns the data output mode (e.g. Compact format) or disables scan data transmission.

**Telegram structure: sRN dataOutputMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Data Output Mode | String | 14 | | `dataOutputMode` | `64 61 74 61 4F 75 74 70 75 74 4D 6F 64 65` |

**Example: sRN dataOutputMode**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}dataOutputMode<ETX>
```

```text
<STX>sRN dataOutputMode<ETX>
```

```text
sRN dataOutputMode
```

```text
02 73 52 4E 20 64 61 74 61 4F 75 74 70 75 74 4D 6F 64 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 64 61 74 61 4F 75 74 70 75 74 4D 6F 64 65 43
```

```text
73 52 4E 20 64 61 74 61 4F 75 74 70 75 74 4D 6F 64 65
```

**Telegram structure: sRA dataOutputMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Data Output Mode | String | 14 | | `dataOutputMode` | `64 61 74 61 4F 75 74 70 75 74 4D 6F 64 65` |
| dataOutputMode | Data output mode | Enum_8 | 1 | DISABLED:<br>TCP_COMPACT:<br>UDP_COMPACT:<br>NATIVE_ROS_2: | `0<br>1<br>2<br>3` | `00<br>01<br>02<br>03` |

**Example: sRA dataOutputMode**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}dataOutputMode{SPC}1<ETX>
```

```text
02 73 52 41 20 64 61 74 61 4F 75 74 70 75 74 4D 6F 64 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 64 61 74 61 4F 75 74 70 75 74 4D 6F 64 65 20 01 6D
```
