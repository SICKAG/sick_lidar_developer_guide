# Read Encoder Translation [sRN EncoderTranslation]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-encoder-translation-srn-encodertranslation

Returns the translation of the encoder in mm.

**Telegram structure: sRN EncoderTranslation**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Encoder Translation | String | 18 | | `EncoderTranslation` | `45 6E 63 6F 64 65 72 54 72 61 6E 73 6C 61 74 69 6F 6E` |

**Example: sRN EncoderTranslation**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EncoderTranslation<ETX>
```

```text
<STX>sRN EncoderTranslation<ETX>
```

```text
sRN EncoderTranslation
```

```text
02 73 52 4E 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 6C 61 74 69 6F 6E 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 52 4E 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 6C 61 74 69 6F 6E 50
```

```text
73 52 4E 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 6C 61 74 69 6F 6E
```

**Telegram structure: sRA EncoderTranslation**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Encoder Translation | String | 18 | | `EncoderTranslation` | `45 6E 63 6F 64 65 72 54 72 61 6E 73 6C 61 74 69 6F 6E` |
| x | in mm | Float_32 | 4 | -100000 ... 100000 mm | `00000000 ... FFFFFFFF` | `00 00 00 00 ... FF FF FF FF` |
| y | in mm | Float_32 | 4 | -100000 ... 100000 mm | `00000000 ... FFFFFFFF` | `00 00 00 00 ... FF FF FF FF` |
| z | in mm | Float_32 | 4 | -100000 ... 100000 mm | `00000000 ... FFFFFFFF` | `00 00 00 00 ... FF FF FF FF` |

**Example: sRA EncoderTranslation**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EncoderTranslation{SPC}00000000{SPC}00000000{SPC}3F800000<ETX>
```

```text
02 73 52 41 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 6C 61 74 69 6F 6E 20 30 30 30 30 30 30 30 30 20 30 30 30 30 30 30 30 30 20 33 46 38 30 30 30 30 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 23 73 52 41 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 6C 61 74 69 6F 6E 20 00 00 00 00 00 00 00 00 3F 80 00 00 C0
```
