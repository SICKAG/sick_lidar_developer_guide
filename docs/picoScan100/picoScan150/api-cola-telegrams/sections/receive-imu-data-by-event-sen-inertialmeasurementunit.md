# Receive IMU Data by Event [sEN InertialMeasurementUnit]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › IMU Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#receive-imu-data-by-event-sen-inertialmeasurementunit

Returns the current IMU data (e.g. Acceleration, Orientation, ... ). The data is given in the following coordinate system which is based on the DIN70000 system. The x-axis lies on the 90-degree-beam of the 0-degree-layer. The y-axis is perpendicular to the x-axis and lies in the 0-degree-layer. The y-values are rising in the counterclockwise rotation direction (right-handed system). The z-axis is perpendicular to the x-y-plane and the scanner top points to rising z-values. After registration, the device sends the current value as an `sSN` telegram whenever it changes. Send the telegram with the value 0 to stop the event.

**Telegram structure: sEN InertialMeasurementUnit**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Receive IMU Data by Event | String | 23 | | `InertialMeasurementUnit` | `49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN InertialMeasurementUnit**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}InertialMeasurementUnit{SPC}1<ETX>
```

```text
<STX>sEN InertialMeasurementUnit 1<ETX>
```

```text
sEN InertialMeasurementUnit 1
```

```text
02 73 45 4E 20 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1D 73 45 4E 20 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 20 01 35
```

```text
73 45 4E 20 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 20 01
```

**Telegram structure: sEA InertialMeasurementUnit**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Receive IMU Data by Event | String | 23 | | `InertialMeasurementUnit` | `49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEA InertialMeasurementUnit**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}InertialMeasurementUnit{SPC}1<ETX>
```

```text
02 73 45 41 20 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1D 73 45 41 20 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 20 01 3A
```
