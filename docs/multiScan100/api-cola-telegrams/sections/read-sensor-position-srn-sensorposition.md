# Read Sensor Position [sRN SensorPosition]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Mounting Position

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-sensor-position-srn-sensorposition

Returns the mounting position in increments of 1/10,000 degree.

**Telegram structure: sRN SensorPosition**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Sensor Position | String | 14 | | `SensorPosition` | `53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E` |

**Example: sRN SensorPosition**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}SensorPosition<ETX>
```

```text
<STX>sRN SensorPosition<ETX>
```

```text
sRN SensorPosition
```

```text
02 73 52 4E 20 53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E 40
```

```text
73 52 4E 20 53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E
```

**Telegram structure: sRA SensorPosition**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Sensor Position | String | 14 | | `SensorPosition` | `53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E` |
| x | in mm | Int_32 | 4 | -100000 ... 100000 | `-100000 ... +100000` | `FF FE 79 60 ... 00 01 86 A0` |
| y | in mm | Int_32 | 4 | -100000 ... 100000 | `-100000 ... +100000` | `FF FE 79 60 ... 00 01 86 A0` |
| z | in mm | Int_32 | 4 | -100000 ... 100000 | `-100000 ... +100000` | `FF FE 79 60 ... 00 01 86 A0` |
| yaw | in 1/10000 deg | Int_32 | 4 | -3600000 ... 3600000 | `-3600000 ... +3600000` | `FF C9 11 80 ... 00 36 EE 80` |
| pitch | in 1/10000 deg | Int_32 | 4 | -3600000 ... 3600000 | `-3600000 ... +3600000` | `FF C9 11 80 ... 00 36 EE 80` |
| roll | in 1/10000 deg | Int_32 | 4 | -3600000 ... 3600000 | `-3600000 ... +3600000` | `FF C9 11 80 ... 00 36 EE 80` |

**Example: sRA SensorPosition**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}SensorPosition{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E 20 30 20 30 20 30 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2B 73 52 41 20 53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E 20 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 6F
```
