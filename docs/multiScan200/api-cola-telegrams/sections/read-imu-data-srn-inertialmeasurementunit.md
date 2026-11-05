# Read IMU Data [sRN InertialMeasurementUnit]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-imu-data-srn-inertialmeasurementunit

Read the latest IMU data. To receive the IMU data continuously as `sSN InertialMeasurementUnit` events, send `sEN InertialMeasurementUnit 1`; send `sEN InertialMeasurementUnit 0` to stop. For continuous IMU data at 100 Hz, prefer the Compact IMU output (telegram type 7).

Required user level: Authorized client.

**Telegram structure: sRN InertialMeasurementUnit**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read IMU data | String | 23 | | `InertialMeasurementUnit` | `49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74` |

**Example: sRN InertialMeasurementUnit**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}InertialMeasurementUnit<ETX>
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
| Command | Read IMU data | String | 23 | | `InertialMeasurementUnit` | `49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74` |
| Acceleration X | Acceleration along the X axis, including gravity | Float_32 | 4 | m/s² | `IEEE 754 float, hex` | `4 bytes` |
| Acceleration Y | Acceleration along the Y axis, including gravity | Float_32 | 4 | m/s² | `IEEE 754 float, hex` | `4 bytes` |
| Acceleration Z | Acceleration along the Z axis, including gravity | Float_32 | 4 | m/s² | `IEEE 754 float, hex` | `4 bytes` |
| Angular velocity X | Rotation rate around the X axis | Float_32 | 4 | rad/s | `IEEE 754 float, hex` | `4 bytes` |
| Angular velocity Y | Rotation rate around the Y axis | Float_32 | 4 | rad/s | `IEEE 754 float, hex` | `4 bytes` |
| Angular velocity Z | Rotation rate around the Z axis | Float_32 | 4 | rad/s | `IEEE 754 float, hex` | `4 bytes` |
| Orientation W | Orientation as quaternion | Float_32 | 4 | | `IEEE 754 float, hex` | `4 bytes` |
| Orientation X | Orientation as quaternion | Float_32 | 4 | | `IEEE 754 float, hex` | `4 bytes` |
| Orientation Y | Orientation as quaternion | Float_32 | 4 | | `IEEE 754 float, hex` | `4 bytes` |
| Orientation Z | Orientation as quaternion | Float_32 | 4 | | `IEEE 754 float, hex` | `4 bytes` |
| Time stamp | Time of the measurement in µs since power-up | Uint_64 | 8 | µs | `0 … FFFFFFFFFFFFFFFF` | `8 bytes` |

**Example: sRA InertialMeasurementUnit**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}InertialMeasurementUnit{SPC}3DCDF229{SPC}BDA6B7D8{SPC}411C2520{SPC}00000000{SPC}00000000{SPC}BA8BA16F{SPC}3F596000{SPC}B9000000{SPC}BC010000{SPC}3F072C00{SPC}7D6323159<ETX>
```

```text
02 73 52 41 20 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 20 33 44 43 44 46 32 32 39 20 42 44 41 36 42 37 44 38 20 34 31 31 43 32 35 32 30 20 30 30 30 30 30 30 30 30 20 30 30 30 30 30 30 30 30 20 42 41 38 42 41 31 36 46 20 33 46 35 39 36 30 30 30 20 42 39 30 30 30 30 30 30 20 42 43 30 31 30 30 30 30 20 33 46 30 37 32 43 30 30 20 37 44 36 33 32 33 31 35 39 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4C 73 52 41 20 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 20 3D CD F2 29 BD A6 B7 D8 41 1C 25 20 00 00 00 00 00 00 00 00 BA 8B A1 6F 3F 59 60 00 B9 00 00 00 BC 01 00 00 3F 07 2C 00 00 00 00 07 D6 32 31 59 49
```
