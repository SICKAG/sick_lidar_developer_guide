# Enable Encoder Reference Input 2 Signal [sWN LICpos2enable]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Encoder Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#enable-encoder-reference-input-2-signal-swn-licpos2enable

This command enables the encoder reference input signal.

**Telegram structure: sWN LICpos2enable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Enable encoder reference input signal | String | 13 | | `LICpos2enable` | `4C 49 43 70 6F 73 32 65 6E 61 62 6C 65` |
| Variable Data | Disable/ enable | Bool_1 | 1 | Disable:<br>Enable: | `0d (00h)<br>+1d (01h)` | `00<br>01` |

**Example: sWN LICpos2enable - Enable reference input signal**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LICpos2enable{SPC}1<ETX>
```

```text
<STX>sWN LICpos2enable 1<ETX>
```

```text
sWN LICpos2enable 1
```

```text
02 73 57 4E 20 4C 49 43 70 6F 73 32 65 6E 61 62 6C 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 4E 20 4C 49 43 70 6F 73 32 65 6E 61 62 6C 65 20 01 72
```

```text
73 57 4E 20 4C 49 43 70 6F 73 32 65 6E 61 62 6C 65 20 01
```

**Telegram structure: sWA LICpos2enable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Enable encoder reference input signal | String | 13 | | `LICpos2enable` | `4C 49 43 70 6F 73 32 65 6E 61 62 6C 65` |

**Example: sWA LICpos2enable**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LICpos2enable<ETX>
```

```text
02 73 57 41 20 4C 49 43 70 6F 73 32 65 6E 61 62 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 57 41 20 4C 49 43 70 6F 73 32 65 6E 61 62 6C 65 20 7C
```
