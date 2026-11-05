# Read IMU Data [sRN InertialMeasurementUnit]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › IMU Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-imu-data-srn-inertialmeasurementunit

Returns the current IMU data (e.g. acceleration and orientation). The data uses a coordinate system based on DIN 70000. The x-axis lies on the 90-degree beam of the 0-degree layer. The y-axis is perpendicular to the x-axis and lies in the 0-degree layer. The y-values increase in the counterclockwise rotation direction (right-handed system). The z-axis is perpendicular to the x-y plane, with positive values pointing toward the top of the scanner.

**Telegram structure: sRN InertialMeasurementUnit**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read IMU Data | String | 23 | | `InertialMeasurementUnit` | `49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74` |

**Example: sRN InertialMeasurementUnit**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}InertialMeasurementUnit<ETX>
```

```text
<STX>sRN InertialMeasurementUnit<ETX>
```

```text
sRN InertialMeasurementUnit
```

```text
02 73 52 4E 20 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 52 4E 20 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 03
```

```text
73 52 4E 20 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74
```

**Telegram structure: sRA InertialMeasurementUnit**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read IMU Data | String | 23 | | `InertialMeasurementUnit` | `49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74` |
| Acceleration[] | Vector (x,y,z) with accelerations (including gravity) along the three coordinate axes (repeated 3 times) | Float_32 | 4 | IEEE 754 m/s^2 | `00000000 ... FFFFFFFF` | `00 00 00 00 ... FF FF FF FF` |
| AngularVelocity[] | Vector (x,y,z) with rotation rates along the three coordinate axes (repeated 3 times) | Float_32 | 4 | IEEE 754 rad/s | `00000000 ... FFFFFFFF` | `00 00 00 00 ... FF FF FF FF` |
| Orientation[] | Orientation in the specified coordinate system given as quaternion (w,x,y,z) (repeated 4 times) | Float_32 | 4 | IEEE 754 | `00000000 ... FFFFFFFF` | `00 00 00 00 ... FF FF FF FF` |
| TimeStamp | The time stamp is synchronized to the sensor time since boot-up. | Uint_64 | 8 | 0 ... 18446744073709551615 µs | `0 ... FFFFFFFFFFFFFFFF` | `00 00 00 00 00 00 00 00 ... FF FF FF FF FF FF FF FF` |

**Example: sRA InertialMeasurementUnit**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}InertialMeasurementUnit{SPC}3EAFE983{SPC}3ED8FA90{SPC}411BB940{SPC}BA8BA16F{SPC}BB0BA16F{SPC}00000000{SPC}3F663800{SPC}3C280000{SPC}BCE98000{SPC}BEDF6800{SPC}113CB59CC<ETX>
```

```text
02 73 52 41 20 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 20 33 45 41 46 45 39 38 33 20 33 45 44 38 46 41 39 30 20 34 31 31 42 42 39 34 30 20 42 41 38 42 41 31 36 46 20 42 42 30 42 41 31 36 46 20 30 30 30 30 30 30 30 30 20 33 46 36 36 33 38 30 30 20 33 43 32 38 30 30 30 30 20 42 43 45 39 38 30 30 30 20 42 45 44 46 36 38 30 30 20 31 31 33 43 42 35 39 43 43 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4C 73 52 41 20 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 20 3E AF E9 83 3E D8 FA 90 41 1B B9 40 BA 8B A1 6F BB 0B A1 6F 00 00 00 00 3F 66 38 00 3C 28 00 00 BC E9 80 00 BE DF 68 00 00 00 00 01 13 CB 59 CC 9C
```
