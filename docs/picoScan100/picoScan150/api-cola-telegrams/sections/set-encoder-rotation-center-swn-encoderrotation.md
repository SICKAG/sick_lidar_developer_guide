# Set Encoder Rotation Center [sWN EncoderRotation]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-encoder-rotation-center-swn-encoderrotation

Sets the rotation center of the encoder in mm. This telegram requires at least user level: Authorized Client.

**Telegram structure: sWN EncoderRotation**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set Encoder Rotation Center | String | 15 | | `EncoderRotation` | `45 6E 63 6F 64 65 72 52 6F 74 61 74 69 6F 6E` |
| yaw | in deg per tick | Float_32 | 4 | -360 ... 360 ° | `00000000 ... FFFFFFFF` | `00 00 00 00 ... FF FF FF FF` |
| pitch | in deg per tick | Float_32 | 4 | -360 ... 360 ° | `00000000 ... FFFFFFFF` | `00 00 00 00 ... FF FF FF FF` |
| roll | in deg per tick | Float_32 | 4 | -360 ... 360 ° | `00000000 ... FFFFFFFF` | `00 00 00 00 ... FF FF FF FF` |

**Example: sWN EncoderRotation**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EncoderRotation{SPC}00000000{SPC}3DCCCCCD{SPC}00000000<ETX>
```

```text
<STX>sWN EncoderRotation 00000000 3DCCCCCD 00000000<ETX>
```

```text
sWN EncoderRotation 00000000 3DCCCCCD 00000000
```

```text
02 73 57 4E 20 45 6E 63 6F 64 65 72 52 6F 74 61 74 69 6F 6E 20 30 30 30 30 30 30 30 30 20 33 44 43 43 43 43 43 44 20 30 30 30 30 30 30 30 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 57 4E 20 45 6E 63 6F 64 65 72 52 6F 74 61 74 69 6F 6E 20 00 00 00 00 3D CC CC CD 00 00 00 00 FA
```

```text
73 57 4E 20 45 6E 63 6F 64 65 72 52 6F 74 61 74 69 6F 6E 20 00 00 00 00 3D CC CC CD 00 00 00 00
```

**Telegram structure: sWA EncoderRotation**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set Encoder Rotation Center | String | 15 | | `EncoderRotation` | `45 6E 63 6F 64 65 72 52 6F 74 61 74 69 6F 6E` |

**Example: sWA EncoderRotation**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EncoderRotation<ETX>
```

```text
02 73 57 41 20 45 6E 63 6F 64 65 72 52 6F 74 61 74 69 6F 6E 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 57 41 20 45 6E 63 6F 64 65 72 52 6F 74 61 74 69 6F 6E 20 05
```
