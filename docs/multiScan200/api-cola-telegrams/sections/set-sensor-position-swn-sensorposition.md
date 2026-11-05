# Set Sensor Position [sWN SensorPosition]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Mounting Position

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-sensor-position-swn-sensorposition

Required user level: Authorized client.

**Telegram structure: sWN SensorPosition**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | | String | 14 | | `SensorPosition` | `53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E` |
| x | in mm | Int_32 | 4 | Max: 100000 | `0` | `00 00 00 00` |
| y | in mm | Int_32 | 4 | Max: 100000 | `0` | `00 00 00 00` |
| z | in mm | Int_32 | 4 | Max: 100000 | `0` | `00 00 00 00` |
| yaw | in 1/10000 deg | Int_32 | 4 | Max: 3600000 | `0` | `00 00 00 00` |
| pitch | in 1/10000 deg | Int_32 | 4 | Max: 3600000 | `0` | `00 00 00 00` |
| roll | in 1/10000 deg | Int_32 | 4 | Max: 3600000 | `0` | `00 00 00 00` |

**Example: sWN SensorPosition**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}SensorPosition{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
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
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 14 | | `SensorPosition` | `53 65 6E 73 6F 72 50 6F 73 69 74 69 6F 6E` |

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
