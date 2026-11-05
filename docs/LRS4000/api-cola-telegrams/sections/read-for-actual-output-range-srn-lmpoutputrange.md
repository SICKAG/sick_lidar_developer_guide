# Read for Actual Output Range [sRN LMPoutputRange]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-for-actual-output-range-srn-lmpoutputrange

Read for actual output range.

**Access:** No additional user-level requirement is specified in this telegram table.

**Request: `sRN LMPoutputRange`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| ----------------------- | ------------- | -------------- | ------------------------- |
| Read                    | String        | 3              | CoLa A: sRN               |
| Output range            | String        | 14             | CoLa A: LMPoutputRange    |

**Response: `sRA LMPoutputRange`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes                                                                                                                                                                                                                                                                                                                                             |
| ----------------------- | ------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Answer                  | String        | 3              | CoLa A: sRA                                                                                                                                                                                                                                                                                                                                                           |
| Output range            | String        | 14             | CoLa A: LMPoutputRange                                                                                                                                                                                                                                                                                                                                                |
| Parameter               | Int_16        | 2              | Always:<br>CoLa A: 1h                                                                                                                                                                                                                                                                                                                                                 |
| [1/10000°]              | Uint_32       | 4              | Normal mode @ 12.5 Hz 0.0200°: 0.0400°: 0.0600°: 0.1000°: 0.1200°: Normal mode @ 25 Hz: 0.0400°: 0.0800°: 0.1200°: 0.2000°: 0.2400°: Extended range mode @ 12.5 Hz: 0.240°: 0.120°: 0.080°: 0.040°: Extended range mode @ 25 Hz: 0.480°: 0.240°: 0.160°: 0.080°:<br>CoLa A: C8h 190h 258h 3E8h 4B0h 190h 320h 4B0h 7D0h 960h 960h 4B0h 320h 190h 12C0h 960h 640h 320h |
| [1/10000°]              | Int_32        | 4              | -180° ... +180°<br>CoLa A: FFE488C0h … 1B7740h                                                                                                                                                                                                                                                                                                                        |
| [1/10000°]              | Int_32        | 4              | -180° ... +180°<br>CoLa A: FFE488C0h … 1B7740h                                                                                                                                                                                                                                                                                                                        |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sRN LMPoutputRange<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 5E
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sRA LMPoutputRange 1 190 0 DBBA0<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 21 73 52 41 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 00 01 00 00 01 90 00 00 00 00 00 0D BB A0 F7
```
