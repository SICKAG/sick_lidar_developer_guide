# Set Encoder Transformation Type [sWN EncoderTransformationType]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#set-encoder-transformation-type-swn-encodertransformationtype

Set Encoder transformation type.

**Access:** Authorized client user level is required.

**Request: `sWN EncoderTransformationType`**

| Telegram part / meaning         | Variable type | Length (bytes) | Values, ranges, and notes         |
| ------------------------------- | ------------- | -------------- | --------------------------------- |
| Write                           | String        | 3              | CoLa A: sWN                       |
| Set encoder transformation type | String        | 25             | CoLa A: EncoderTransformationType |
| Transformation type             | Enum_8        | 1              | Rotation:: 0<br>Translation:: 1   |

**Response: `sWA EncoderTransformationType`**

| Telegram part / meaning         | Variable type | Length (bytes) | Values, ranges, and notes         |
| ------------------------------- | ------------- | -------------- | --------------------------------- |
| Answer                          | String        | 3              | CoLa A: sWA                       |
| Set encoder transformation type | String        | 25             | CoLa A: EncoderTransformationType |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sWN EncoderTransformationType 0<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 57 4E 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 66 6F 72 6D 61 74 69 6F 6E 54 79 70 65 20 00 37
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sWA EncoderTransformationType<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 57 41 20 45 6E 63 6F 64 65 72 54 72 61 6E 73 66 6F 72 6D 61 74 69 6F 6E 54 79 70 65 20 38
```
