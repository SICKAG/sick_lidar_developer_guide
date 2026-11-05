# Copy Sensor Orientation from IMU [sMN CopySensorOrientationFromImu]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Mounting Position

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#copy-sensor-orientation-from-imu-smn-copysensororientationfromimu

Copies the roll and pitch angles from the IMU data to the sensor orientation. This telegram requires at least user level: Authorized Client.

**Telegram structure: sMN CopySensorOrientationFromImu**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Copy Sensor Orientation from IMU | String | 28 | | `CopySensorOrientationFromImu` | `43 6F 70 79 53 65 6E 73 6F 72 4F 72 69 65 6E 74 61 74 69 6F 6E 46 72 6F 6D 49 6D 75` |

**Example: sMN CopySensorOrientationFromImu**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}CopySensorOrientationFromImu<ETX>
```

```text
<STX>sMN CopySensorOrientationFromImu<ETX>
```

```text
sMN CopySensorOrientationFromImu
```

```text
02 73 4D 4E 20 43 6F 70 79 53 65 6E 73 6F 72 4F 72 69 65 6E 74 61 74 69 6F 6E 46 72 6F 6D 49 6D 75 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 4D 4E 20 43 6F 70 79 53 65 6E 73 6F 72 4F 72 69 65 6E 74 61 74 69 6F 6E 46 72 6F 6D 49 6D 75 72
```

```text
73 4D 4E 20 43 6F 70 79 53 65 6E 73 6F 72 4F 72 69 65 6E 74 61 74 69 6F 6E 46 72 6F 6D 49 6D 75
```

**Telegram structure: sAN CopySensorOrientationFromImu**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Copy Sensor Orientation from IMU | String | 28 | | `CopySensorOrientationFromImu` | `43 6F 70 79 53 65 6E 73 6F 72 4F 72 69 65 6E 74 61 74 69 6F 6E 46 72 6F 6D 49 6D 75` |

**Example: sAN CopySensorOrientationFromImu**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}CopySensorOrientationFromImu<ETX>
```

```text
02 73 41 4E 20 43 6F 70 79 53 65 6E 73 6F 72 4F 72 69 65 6E 74 61 74 69 6F 6E 46 72 6F 6D 49 6D 75 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 21 73 41 4E 20 43 6F 70 79 53 65 6E 73 6F 72 4F 72 69 65 6E 74 61 74 69 6F 6E 46 72 6F 6D 49 6D 75 20 5E
```
