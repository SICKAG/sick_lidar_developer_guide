# Set Encoder Translation [sWN EncoderTranslation]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-encoder-translation-swn-encodertranslation

Sets the translation of the encoder in mm. This telegram requires at least user level: Authorized Client.

**Telegram structure: sWN EncoderTranslation**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set Encoder Translation | String | 18 | | `EncoderTranslation` | `45 6E 63 6F 64 65 72 54 72 61 6E 73 6C 61 74 69 6F 6E` |
| x | in mm | Float_32 | 4 | -100000 ... 100000 mm | `00000000 ... FFFFFFFF` | `00 00 00 00 ... FF FF FF FF` |
| y | in mm | Float_32 | 4 | -100000 ... 100000 mm | `00000000 ... FFFFFFFF` | `00 00 00 00 ... FF FF FF FF` |
| z | in mm | Float_32 | 4 | -100000 ... 100000 mm | `00000000 ... FFFFFFFF` | `00 00 00 00 ... FF FF FF FF` |

**Example: sWN EncoderTranslation**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EncoderTranslation{SPC}00000000{SPC}00000000{SPC}3F800000<ETX>
```

```text
<STX>sWN EncoderTranslation 00000000 00000000 3F800000<ETX>
```

```text
sWN EncoderTranslation 00000000 00000000 3F800000
```

```text
02 73 57 4E 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 6C 61 74 69 6F 6E 20 30 30 30 30 30 30 30 30 20 30 30 30 30 30 30 30 30 20 33 46 38 30 30 30 30 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 23 73 57 4E 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 6C 61 74 69 6F 6E 20 00 00 00 00 00 00 00 00 3F 80 00 00 CA
```

```text
73 57 4E 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 6C 61 74 69 6F 6E 20 00 00 00 00 00 00 00 00 3F 80 00 00
```

**Telegram structure: sWA EncoderTranslation**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set Encoder Translation | String | 18 | | `EncoderTranslation` | `45 6E 63 6F 64 65 72 54 72 61 6E 73 6C 61 74 69 6F 6E` |

**Example: sWA EncoderTranslation**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EncoderTranslation<ETX>
```

```text
02 73 57 41 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 6C 61 74 69 6F 6E 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 57 41 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 6C 61 74 69 6F 6E 20 7A
```
