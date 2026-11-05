# Set Scan Configuration [sMN mCLsetscancfglist]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#set-scan-configuration-smn-mclsetscancfglist

Set scan configuration.

**Access:** Authorized client user level is required.

**Request: `sMN mCLsetscancfglist`**

| Telegram part / meaning              | Variable type | Length (bytes) | Values, ranges, and notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------ | ------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Method                               | String        | 3              | CoLa A: sMN                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Set scan configuration               | String        | 17             | CoLa A: mCLsetscancfglist                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Scan configuration (see table below) | Enum_8        | 1              | Normal mode: 12.5Hz & 0.020°: 12.5Hz & 0.040°: 12.5Hz & 0.060°: 12.5Hz & 0.100°: 12.5Hz & 0.120°: 25Hz & 0.040°: 25Hz & 0.080°: 25Hz & 0.120°: 25Hz & 0.200°: 25Hz & 0.240°: Extended range mode: 12,5Hz & 0.240° 12,5Hz & 0.120° 12,5Hz & 0.080° 12,5Hz & 0.040° 25Hz & 0.480° 25Hz & 0.240° 25Hz & 0.160° 25Hz & 0.080°<br>CoLa A: 11d (0Bh) 1d (1h) 2d (2h) 4d (4h) 5d (5h) 71d (47h) 61d (3Dh) 62d (3Eh) 64d (40h) 65d (41h) 31d (1Fh) 32d (20h) 33d (21h) 35d (23h) 91d (5Bh) 92d (5Ch) 93d (5Dh) 95d (5Fh) |

**Response: `sAN mCLsetscancfglist`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes                                                                                                                 |
| ----------------------- | ------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Answer                  | String        | 3              | CoLa A: sAN                                                                                                                               |
| Set scan configuration  | String        | 17             | CoLa A: mCLsetscancfglist                                                                                                                 |
| Wrong setting           | Enum_8        | 1              | Ok:: 0<br>Error frequency:: 1<br>Error resolution:: 2<br>Error resolution and frequency:: 3<br>Error Range error:: 4<br>General Error:: 5 |

The selected scan configuration changes scan frequency, angular resolution, field of view, and interlace mode. The sensor may need up to 30 seconds to apply a changed configuration.

**Request example**

**CoLa A (ASCII)**

```text
<STX>sMN mCLsetscancfglist 1<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 4D 4E 20 6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74 20 01 0E
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sAN mCLsetscancfglist 0<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 41 4E 20 6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74 20 00 03
```
