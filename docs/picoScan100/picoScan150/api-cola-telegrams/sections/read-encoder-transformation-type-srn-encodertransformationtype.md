# Read Encoder Transformation Type [sRN EncoderTransformationType]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-encoder-transformation-type-srn-encodertransformationtype

Returns the encoder transformation type (ROTATION or DISPLACEMENT).

**Telegram structure: sRN EncoderTransformationType**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Encoder Transformation Type | String | 25 | | `EncoderTransformationType` | `45 6E 63 6F 64 65 72 54 72 61 6E 73 66 6F 72 6D 61 74 69 6F 6E 54 79 70 65` |

**Example: sRN EncoderTransformationType**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EncoderTransformationType<ETX>
```

```text
<STX>sRN EncoderTransformationType<ETX>
```

```text
sRN EncoderTransformationType
```

```text
02 73 52 4E 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 66 6F 72 6D 61 74 69 6F 6E 54 79 70 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1D 73 52 4E 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 66 6F 72 6D 61 74 69 6F 6E 54 79 70 65 12
```

```text
73 52 4E 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 66 6F 72 6D 61 74 69 6F 6E 54 79 70 65
```

**Telegram structure: sRA EncoderTransformationType**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Encoder Transformation Type | String | 25 | | `EncoderTransformationType` | `45 6E 63 6F 64 65 72 54 72 61 6E 73 66 6F 72 6D 61 74 69 6F 6E 54 79 70 65` |
| EncoderTransformationType | The Encoder can track a rotation or translation | Enum_8 | 1 | ROTATION:<br>TRANSLATION: | `0<br>1` | `00<br>01` |

**Example: sRA EncoderTransformationType**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EncoderTransformationType{SPC}0<ETX>
```

```text
02 73 52 41 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 66 6F 72 6D 61 74 69 6F 6E 54 79 70 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 52 41 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 66 6F 72 6D 61 74 69 6F 6E 54 79 70 65 20 00 3D
```
