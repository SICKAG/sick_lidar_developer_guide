# Configure Aperture Angle of the Scandata for Output [sWN LMPoutputRange]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#configure-aperture-angle-of-the-scandata-for-output-swn-lmpoutputrange

Configure aperture angle of the scandata for output.

**Access:** Authorized client user level is required.

**Request: `sWN LMPoutputRange`**

| Telegram part / meaning   | Variable type | Length (bytes) | Values, ranges, and notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------- | ------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Write                     | String        | 3              | CoLa A: sWN                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Change output angle range | String        | 14             | CoLa A: LMPoutputRange                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -                         | Int_16        | 2              | Always:<br>CoLa A: 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [1/10000°]                | Uint_32       | 4              | Normal mode @ 12.5 Hz: 0.0200°: 0.0400°: 0.0600°: 0.1000°: 0.1200°: Normal mode @ 25 Hz: 0.0400°: 0.0800°: 0.1200°: 0.2000°: 0.2400°: Extended range mode @ 12.5 Hz: 0.240°: 0.120°: 0.080°: 0.040°: Extended range mode @ 25 Hz: 0.480°: 0.240°: 0.160°: 0.080°:<br>CoLa A: +200d (C8h) +400d (190h) +600d (258h) +1000d (3E8h) +1200d (4B0h) +400d (190h) +800d (320h) +1200d (4B0h) +2000d (7D0h) +2400d (960h) +2400d (960h) +1200d (4B0h) +800d (320h) +400d (190h) +4800d (12C0h) +2400d (960h) +1600d (640h) +800d (320h) |
| [1/10000°]                | Int_32        | 4              | -180° ... +180°:<br>CoLa A: -1800000d (FFE488C0h) … +1800000d (1B7740h)                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [1/10000°]                | Int_32        | 4              | -180° ... +180°<br>CoLa A: -1800000d (FFE488C0h) … +1800000d (1B7740h)                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

**Response: `sWA LMPoutputRange`**

| Telegram part / meaning   | Variable type | Length (bytes) | Values, ranges, and notes |
| ------------------------- | ------------- | -------------- | ------------------------- |
| Answer                    | String        | 3              | CoLa A: sWA               |
| Change output angle range | String        | 14             | CoLa A: LMPoutputRange    |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sWN LMPoutputRange 1 +400 0 +900000<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 21 73 57 4E 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 00 01 00 00 01 90 00 00 00 00 00 0D BB A0 FD
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sWA LMPoutputRange<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 41 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 74
```
