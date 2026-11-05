# Read IMU Data [sRN InertialMeasurementUnit]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › IMU Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-imu-data-srn-inertialmeasurementunit

Returns the current IMU data (e.g. Acceleration, Orientation, ... ). The data is given in the following coordinate system which is based on the DIN70000 system. The x-axis lies on the 90-degree-beam of the 0-degree-layer. The y-axis is perpendicular to the x-axis and lies in the 0-degree-layer. The y-values are rising in the counterclockwise rotation direction (right-handed system). The z-axis is perpendicular to the x-y-plane and the scanner top points to rising z-values.

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
<STX>sRA{SPC}InertialMeasurementUnit{SPC}C06CBEF2{SPC}3F67FEE3{SPC}4108745A{SPC}00000000{SPC}3BAE89CB{SPC}BA8BA16F{SPC}3F5E9000{SPC}BD46C000{SPC}3E4E9000{SPC}3EE58800{SPC}114600F78<ETX>
```

```text
02 73 52 41 20 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 20 43 30 36 43 42 45 46 32 20 33 46 36 37 46 45 45 33 20 34 31 30 38 37 34 35 41 20 30 30 30 30 30 30 30 30 20 33 42 41 45 38 39 43 42 20 42 41 38 42 41 31 36 46 20 33 46 35 45 39 30 30 30 20 42 44 34 36 43 30 30 30 20 33 45 34 45 39 30 30 30 20 33 45 45 35 38 38 30 30 20 31 31 34 36 30 30 46 37 38 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4C 73 52 41 20 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 20 C0 6C BE F2 3F 67 FE E3 41 08 74 5A 00 00 00 00 3B AE 89 CB BA 8B A1 6F 3F 5E 90 00 BD 46 C0 00 3E 4E 90 00 3E E5 88 00 00 00 00 01 14 60 0F 78 BD
```
