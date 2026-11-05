# Read for Rotation Offset [sRN RotationOffset]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-for-rotation-offset-srn-rotationoffset

Read for rotation offset.

**Access:** Authorized client user level is required.

**Request: `sRN RotationOffset`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| ----------------------- | ------------- | -------------- | ------------------------- |
| Read                    | String        | 3              | CoLa A: sRN               |
| Read rotation offset    | String        | 14             | CoLa A: RotationOffset    |

**Response: `sRA RotationOffset`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes                                                        |
| ----------------------- | ------------- | -------------- | -------------------------------------------------------------------------------- |
| Answer                  | String        | 3              | CoLa A: sRA                                                                      |
| Read rotation offset    | String        | 14             | CoLa A: RotationOffset                                                           |
| Offset for X in mm      | Int_32        | 4              | Default: Min: Max:<br>CoLa A: +0 d (0h) -100000 d (FFFE7960h) +100000 d (186A0h) |
| Offset for Y in mm      | Int_32        | 4              | Default: Min: Max:<br>CoLa A: +0 d (0h) -100000 d (FFFE7960h) +100000 d (186A0h) |
| Offset for Z in mm      | Int_32        | 4              | Default: Min: Max:<br>CoLa A: +0 d (0h) -100000 d (FFFE7960h) +100000 d (186A0h) |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sRN RotationOffset<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 52 6F 74 61 74 69 6F 6E 4F 66 66 73 65 74 56
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sRA RotationOffset FFFE7960 0 186A0<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 52 41 20 52 6F 74 61 74 69 6F 6E 4F 66 66 73 65 74 20 FF FE 79 60 00 00 00 00 00 01 86 A0 46
```
