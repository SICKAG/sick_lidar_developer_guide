# Set Start Orientation for Encoder Transformation Type Translation [sWN EncoderTranslation]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#set-start-orientation-for-encoder-transformation-type-translation-swn-encodertranslation

Set start orientation for encoder transformation type translation.

**Access:** Authorized client user level is required.

**Request: `sWN EncoderTranslation`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes                                                        |
| ----------------------- | ------------- | -------------- | -------------------------------------------------------------------------------- |
| Write                   | String        | 3              | CoLa A: sWN                                                                      |
| Set encoder translation | String        | 18             | CoLa A: EncoderTranslation                                                       |
| Offset for X in mm      | Int_32        | 4              | Default: Min: Max:<br>CoLa A: +0 d (0h) -100000 d (FFFE7960h) +100000 d (186A0h) |
| Offset for Y in mm      | Int_32        | 4              | Default: Min: Max:<br>CoLa A: +0 d (0h) -100000 d (FFFE7960h) +100000 d (186A0h) |
| Offset for Z in mm      | Int_32        | 4              | Default: Min: Max:<br>CoLa A: +0 d (0h) -100000 d (FFFE7960h) +100000 d (186A0h) |

**Response: `sWA EncoderTranslation`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes  |
| ----------------------- | ------------- | -------------- | -------------------------- |
| Answer                  | String        | 3              | CoLa A: sWA                |
| Set encoder translation | String        | 18             | CoLa A: EncoderTranslation |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sWN EncoderTranslation FFFE7960 0 186A0<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 23 73 57 4E 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 6C 61 74 69 6F 6E 20 FF FE 79 60 00 00 00 00 00 01 86 A0 4A
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sWA EncoderTranslation<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 57 41 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 6C 61 74 69 6F 6E 20 7A
```
