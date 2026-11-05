# Set Encoder Transformation Type [sWN EncoderTransformationType]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-encoder-transformation-type-swn-encodertransformationtype

Sets the encoder transformation type (ROTATION or DISPLACEMENT). This telegram requires at least user level: Authorized Client.

**Telegram structure: sWN EncoderTransformationType**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set Encoder Transformation Type | String | 25 | | `EncoderTransformationType` | `45 6E 63 6F 64 65 72 54 72 61 6E 73 66 6F 72 6D 61 74 69 6F 6E 54 79 70 65` |
| EncoderTransformationType | The Encoder can track a rotation or translation | Enum_8 | 1 | ROTATION:<br>TRANSLATION: | `0<br>1` | `00<br>01` |

**Example: sWN EncoderTransformationType**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EncoderTransformationType{SPC}0<ETX>
```

```text
<STX>sWN EncoderTransformationType 0<ETX>
```

```text
sWN EncoderTransformationType 0
```

```text
02 73 57 4E 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 66 6F 72 6D 61 74 69 6F 6E 54 79 70 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 57 4E 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 66 6F 72 6D 61 74 69 6F 6E 54 79 70 65 20 00 37
```

```text
73 57 4E 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 66 6F 72 6D 61 74 69 6F 6E 54 79 70 65 20 00
```

**Telegram structure: sWA EncoderTransformationType**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set Encoder Transformation Type | String | 25 | | `EncoderTransformationType` | `45 6E 63 6F 64 65 72 54 72 61 6E 73 66 6F 72 6D 61 74 69 6F 6E 54 79 70 65` |

**Example: sWA EncoderTransformationType**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EncoderTransformationType<ETX>
```

```text
02 73 57 41 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 66 6F 72 6D 61 74 69 6F 6E 54 79 70 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 57 41 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 66 6F 72 6D 61 74 69 6F 6E 54 79 70 65 20 38
```
