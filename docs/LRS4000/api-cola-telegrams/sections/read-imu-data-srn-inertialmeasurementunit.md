# Read IMU Data [sRN InertialMeasurementUnit]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › IMU Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-imu-data-srn-inertialmeasurementunit

Read IMU data.

**Access:** Authorized client user level is required.

**Request: `sRN InertialMeasurementUnit`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes       |
| ----------------------- | ------------- | -------------- | ------------------------------- |
| Write                   | String        | 3              | CoLa A: sRN                     |
| Read IMU data           | String        | 23             | CoLa A: InertialMeasurementUnit |

**Response: `sRA InertialMeasurementUnit`**

| Telegram part / meaning                                                                                                                   | Variable type                      | Length (bytes) | Values, ranges, and notes                        |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | -------------- | ------------------------------------------------ |
| Answer                                                                                                                                    | String                             | 3              | CoLa A: sRA                                      |
| Read IMU data                                                                                                                             | String                             | 23             | CoLa A: InertialMeasurementUnit                  |
| Vector with acceleration (including gravity) along the X axes.                                                                            | Real as float according to IEEE754 | 4              | Real in m/s^2<br>CoLa A: 00000000h ... FFFFFFFFh |
| Vector with acceleration (including gravity) along the Y axes.                                                                            | Real as float according to IEEE754 | 4              | Real in m/s^2<br>CoLa A: 00000000h ... FFFFFFFFh |
| Vector with acceleration (including gravity) along the Z axes.                                                                            | Real as float according to IEEE754 | 4              | Real in m/s^2<br>CoLa A: 00000000h ... FFFFFFFFh |
| Vector with rotation rates along the X coordinate axes.                                                                                   | Real as float according to IEEE754 | 4              | Real in rad/s<br>CoLa A: 00000000h ... FFFFFFFFh |
| Vector with rotation rates along the Y coordinate axes.                                                                                   | Real as float according to IEEE754 | 4              | Real in rad/s<br>CoLa A: 00000000h ... FFFFFFFFh |
| Vector with rotation rates along the Z coordinate axes.                                                                                   | Real as float according to IEEE754 | 4              | Real in rad/s<br>CoLa A: 00000000h ... FFFFFFFFh |
| Vector with magnetic field strength along the X coordinate axes.                                                                          | Real as float according to IEEE754 | 4              | Real in T<br>CoLa A: 00000000h ... FFFFFFFFh     |
| Vector with magnetic field strength along the Y coordinate axes.                                                                          | Real as float according to IEEE754 | 4              | Real in T<br>CoLa A: 00000000h ... FFFFFFFFh     |
| Vector with magnetic field strength along the Z coordinate axes.                                                                          | Real as float according to IEEE754 | 4              | Real in T<br>CoLa A: 00000000h ... FFFFFFFFh     |
| Orientation in the specified coordinate system given as quaternion                                                                        | Real as float according to IEEE754 | 4              | CoLa A: 00000000h ... FFFFFFFFh                  |
| Orientation in the specified coordinate system given as quaternion                                                                        | Real as float according to IEEE754 | 4              | CoLa A: 00000000h ... FFFFFFFFh                  |
| Orientation in the specified coordinate system given as quaternion                                                                        | Real as float according to IEEE754 | 4              | CoLa A: 00000000h ... FFFFFFFFh                  |
| Orientation in the specified coordinate system given as quaternion                                                                        | Real as float according to IEEE754 | 4              | CoLa A: 00000000h ... FFFFFFFFh                  |
| Point in time when the IMU data was captured. Time base is the boot-up time in µs since power up, max. 71 min then starting from 0 again. | Uint_32                            | 4              | µs<br>CoLa A: 0h ... FFFFFFFFh                   |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sRN InertialMeasurementUnit<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 52 4E 20 49 6E 65 72 74 69 61 6C 4D 65 61 73 75 72 65 6D 65 6E 74 55 6E 69 74 03
```
