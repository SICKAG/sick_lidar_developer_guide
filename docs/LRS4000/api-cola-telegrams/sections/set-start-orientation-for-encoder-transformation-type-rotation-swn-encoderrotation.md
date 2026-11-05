# Set Start Orientation for Encoder Transformation Type Rotation [sWN EncoderRotation]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#set-start-orientation-for-encoder-transformation-type-rotation-swn-encoderrotation

Set start orientation for encoder transformation type rotation.

**Access:** Authorized client user level is required.

**Request: `sWN EncoderRotation`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes                                                           |
| ----------------------- | ------------- | -------------- | ----------------------------------------------------------------------------------- |
| Write                   | String        | 3              | CoLa A: sWN                                                                         |
| Set encoder rotation    | String        | 15             | CoLa A: EncoderRotation                                                             |
| Yaw in 1/10000°         | Int_32        | 4              | Default: Min: Max:<br>CoLa A: +0 d (0h) -3600000 d (FFC91180h) +3600000 d (36EE80h) |
| Pitch in 1/10000°       | Int_32        | 4              | Default: Min: Max:<br>CoLa A: +0 d (0h) -3600000d (FFC91180h) +3600000 d (36EE80h)  |
| Roll in 1/10000°        | Int_32        | 4              | Default: Min: Max:<br>CoLa A: +0 d (0h) -3600000d (FFC91180h) +3600000 d (36EE80h)  |

**Response: `sWA EncoderRotation`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| ----------------------- | ------------- | -------------- | ------------------------- |
| Answer                  | String        | 3              | CoLa A: sWA               |
| Set encoder rotation    | String        | 15             | CoLa A: EncoderRotation   |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sWN EncoderRotation FFF24460 0 DBBA0<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 57 4E 20 45 6E 63 6F 64 65 72 52 6F 74 61 74 69 6F 6E 20 FF F2 44 60 00 00 00 00 00 0D BB A0 35
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sWA EncoderRotation<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 57 41 20 45 6E 63 6F 64 65 72 52 6F 74 61 74 69 6F 6E 20 05
```
