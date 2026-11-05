# Read Encoder Rotation Center [sRN EncoderRotation]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-encoder-rotation-center-srn-encoderrotation

Returns the rotation center of the encoder in mm.

**Telegram structure: sRN EncoderRotation**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Encoder Rotation Center | String | 15 | | `EncoderRotation` | `45 6E 63 6F 64 65 72 52 6F 74 61 74 69 6F 6E` |

**Example: sRN EncoderRotation**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EncoderRotation<ETX>
```

```text
<STX>sRN EncoderRotation<ETX>
```

```text
sRN EncoderRotation
```

```text
02 73 52 4E 20 45 6E 63 6F 64 65 72 52 6F 74 61 74 69 6F 6E 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 4E 20 45 6E 63 6F 64 65 72 52 6F 74 61 74 69 6F 6E 2F
```

```text
73 52 4E 20 45 6E 63 6F 64 65 72 52 6F 74 61 74 69 6F 6E
```

**Telegram structure: sRA EncoderRotation**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Encoder Rotation Center | String | 15 | | `EncoderRotation` | `45 6E 63 6F 64 65 72 52 6F 74 61 74 69 6F 6E` |
| yaw | in deg per tick | Float_32 | 4 | -360 ... 360 ° | `00000000 ... FFFFFFFF` | `00 00 00 00 ... FF FF FF FF` |
| pitch | in deg per tick | Float_32 | 4 | -360 ... 360 ° | `00000000 ... FFFFFFFF` | `00 00 00 00 ... FF FF FF FF` |
| roll | in deg per tick | Float_32 | 4 | -360 ... 360 ° | `00000000 ... FFFFFFFF` | `00 00 00 00 ... FF FF FF FF` |

**Example: sRA EncoderRotation**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EncoderRotation{SPC}00000000{SPC}3DCCCCCD{SPC}00000000<ETX>
```

```text
02 73 52 41 20 45 6E 63 6F 64 65 72 52 6F 74 61 74 69 6F 6E 20 30 30 30 30 30 30 30 30 20 33 44 43 43 43 43 43 44 20 30 30 30 30 30 30 30 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 52 41 20 45 6E 63 6F 64 65 72 52 6F 74 61 74 69 6F 6E 20 00 00 00 00 3D CC CC CD 00 00 00 00 F0
```
