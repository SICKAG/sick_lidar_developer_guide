# Set Sensor Position [sWN SensorPosition]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#set-sensor-position-swn-sensorposition

Sets the mounting position in 1/10000 deg. This only affects the PointCloud2 format output by native ROS2. This telegram requires at least user level: Authorized Client.

**Telegram structure: sWN SensorPosition**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set Sensor Position | String | 14 | | `SensorPosition` | `53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E` |
| x | in mm | Int_32 | 4 | -100000 ... 100000 | `-100000 ... +100000` | `FF FE 79 60 ... 00 01 86 A0` |
| y | in mm | Int_32 | 4 | -100000 ... 100000 | `-100000 ... +100000` | `FF FE 79 60 ... 00 01 86 A0` |
| z | in mm | Int_32 | 4 | -100000 ... 100000 | `-100000 ... +100000` | `FF FE 79 60 ... 00 01 86 A0` |
| yaw | in 1/10000 deg | Int_32 | 4 | -3600000 ... 3600000 | `-3600000 ... +3600000` | `FF C9 11 80 ... 00 36 EE 80` |
| pitch | in 1/10000 deg | Int_32 | 4 | -3600000 ... 3600000 | `-3600000 ... +3600000` | `FF C9 11 80 ... 00 36 EE 80` |
| roll | in 1/10000 deg | Int_32 | 4 | -3600000 ... 3600000 | `-3600000 ... +3600000` | `FF C9 11 80 ... 00 36 EE 80` |

**Example: sWN SensorPosition**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}SensorPosition{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
<STX>sWN SensorPosition 0 0 0 0 0 0<ETX>
```

```text
sWN SensorPosition 0 0 0 0 0 0
```

```text
02 73 57 4E 20 53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E 20 30 20 30 20 30 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2B 73 57 4E 20 53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E 20 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 65
```

```text
73 57 4E 20 53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E 20 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```

**Telegram structure: sWA SensorPosition**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set Sensor Position | String | 14 | | `SensorPosition` | `53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E` |

**Example: sWA SensorPosition**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}SensorPosition<ETX>
```

```text
02 73 57 41 20 53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 41 20 53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E 20 6A
```
