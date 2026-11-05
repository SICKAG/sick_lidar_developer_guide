# Set IMU Data Enable [sWN EnableInertialMeasurementUnit]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › IMU Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#set-imu-data-enable-swn-enableinertialmeasurementunit

Set IMU data enable.

**Access:** Authorized client user level is required.

**Request: `sWN EnableInertialMeasurementUnit`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes             |
| ----------------------- | ------------- | -------------- | ------------------------------------- |
| Write                   | String        | 3              | CoLa A: sWN                           |
| Set IMU data output.    | String        | 28             | CoLa A: EnableInertialMeasurementUnit |
| Enable/ disable         | Bool          | 1              | Disable: 0<br>Enable: 1               |

**Response: `sWA EnableInertialMeasurementUnit`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes             |
| ----------------------- | ------------- | -------------- | ------------------------------------- |
| Answer                  | String        | 3              | CoLa A: sWA                           |
| Set IMU data output.    | String        | 28             | CoLa A: EnableInertialMeasurementUnit |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sWN EnableInertialMeasurementUnit 0<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 23 73 57 4E 20 45 6E 61 62 6C 65 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 20 00 07
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sWA EnableInertialMeasurementUnit<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 22 73 57 41 20 45 6E 61 62 6C 65 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 20 08
```
