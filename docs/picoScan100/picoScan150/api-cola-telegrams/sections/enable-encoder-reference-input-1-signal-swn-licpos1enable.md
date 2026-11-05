# Enable Encoder Reference Input 1 Signal [sWN LICpos1enable]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Encoder Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#enable-encoder-reference-input-1-signal-swn-licpos1enable

This command enables the encoder reference input signal.

**Telegram structure: sWN LICpos1enable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Enable encoder reference input signal | String | 13 | | `LICpos1enable` | `4C 49 43 70 6F 73 31 65 6E 61 62 6C 65` |
| Variable Data | Disable/ enable | Bool_1 | 1 | Disable:<br>Enable: | `0d (00h)<br>+1d (01h)` | `00<br>01` |

**Example: sWN LICpos1enable - Enable reference input signal**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LICpos1enable{SPC}1<ETX>
```

```text
<STX>sWN LICpos1enable 1<ETX>
```

```text
sWN LICpos1enable 1
```

```text
02 73 57 4E 20 4C 49 43 70 6F 73 31 65 6E 61 62 6C 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 4E 20 4C 49 43 70 6F 73 31 65 6E 61 62 6C 65 20 01 71
```

```text
73 57 4E 20 4C 49 43 70 6F 73 31 65 6E 61 62 6C 65 20 01
```

**Telegram structure: sWA LICpos1enable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Enable encoder reference input signal | String | 13 | | `LICpos1enable` | `4C 49 43 70 6F 73 31 65 6E 61 62 6C 65` |

**Example: sWA LICpos1enable**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LICpos1enable<ETX>
```

```text
02 73 57 41 20 4C 49 43 70 6F 73 31 65 6E 61 62 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 57 41 20 4C 49 43 70 6F 73 31 65 6E 61 62 6C 65 20 7F
```
