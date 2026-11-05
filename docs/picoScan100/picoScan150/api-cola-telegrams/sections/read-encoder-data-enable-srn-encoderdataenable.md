# Read Encoder Data Enable [sRN EncoderDataEnable]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Encoder Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-encoder-data-enable-srn-encoderdataenable

Returns whether the encoder data streaming is enabled. The encoder data itself is sent via a UDP-based SICK-specific format.

**Telegram structure: sRN EncoderDataEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Encoder Data Enable | String | 17 | | `EncoderDataEnable` | `45 6E 63 6F 64 65 72 44 61 74 61 45 6E 61 62 6C 65` |

**Example: sRN EncoderDataEnable**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EncoderDataEnable<ETX>
```

```text
<STX>sRN EncoderDataEnable<ETX>
```

```text
sRN EncoderDataEnable
```

```text
02 73 52 4E 20 45 6E 63 6F 64 65 72 44 61 74 61 45 6E 61 62 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 52 4E 20 45 6E 63 6F 64 65 72 44 61 74 61 45 6E 61 62 6C 65 0A
```

```text
73 52 4E 20 45 6E 63 6F 64 65 72 44 61 74 61 45 6E 61 62 6C 65
```

**Telegram structure: sRA EncoderDataEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Encoder Data Enable | String | 17 | | `EncoderDataEnable` | `45 6E 63 6F 64 65 72 44 61 74 61 45 6E 61 62 6C 65` |
| EncoderDataEnable | Enables or disables streaming Encoder data. | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sRA EncoderDataEnable**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EncoderDataEnable{SPC}0<ETX>
```

```text
02 73 52 41 20 45 6E 63 6F 64 65 72 44 61 74 61 45 6E 61 62 6C 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 41 20 45 6E 63 6F 64 65 72 44 61 74 61 45 6E 61 62 6C 65 20 00 25
```
