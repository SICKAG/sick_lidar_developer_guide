# Set Encoder Data Enable [sWN EncoderDataEnable]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Encoder Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-encoder-data-enable-swn-encoderdataenable

Enables/ Disables streaming Encoder data output.

**Telegram structure: sWN EncoderDataEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set streaming Encoder data output. | String | 17 | | `EncoderDataEnable` | `45 6E 63 6F 64 65 72 44 61 74 61 45 6E 61 62 6C 65` |
| Encoder data stream | Enable/ disable | Bool | 1 | Disable:<br>Enable: | `0d (00h)<br>+1d (01h)` | `00 ... 01` |

**Example: sWN EncoderDataEnable 0 - Disable the streaming Encoder data output**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EncoderDataEnable{SPC}0<ETX>
```

```text
<STX>sWN EncoderDataEnable 0<ETX>
```

```text
sWN EncoderDataEnable 0
```

```text
02 73 57 4E 20 45 6E 63 6F 64 65 72 44 61 74 61 45 6E 61 62 6C 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 57 4E 20 45 6E 63 6F 64 65 72 44 61 74 61 45 6E 61 62 6C 65 20 00 2F
```

```text
73 57 4E 20 45 6E 63 6F 64 65 72 44 61 74 61 45 6E 61 62 6C 65 20 00
```

**Telegram structure: sWA EncoderDataEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set streaming Encoder data output. | String | 17 | | `EncoderDataEnable` | `45 6E 63 6F 64 65 72 44 61 74 61 45 6E 61 62 6C 65` |

**Example: sWA EncoderDataEnable**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EncoderDataEnable<ETX>
```

```text
02 73 57 41 20 45 6E 63 6F 64 65 72 44 61 74 61 45 6E 61 62 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 57 41 20 45 6E 63 6F 64 65 72 44 61 74 61 45 6E 61 62 6C 65 20 20
```
