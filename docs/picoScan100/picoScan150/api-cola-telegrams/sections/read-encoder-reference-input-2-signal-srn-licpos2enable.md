# Read Encoder Reference Input 2 Signal [sRN LICpos2enable]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Encoder Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-encoder-reference-input-2-signal-srn-licpos2enable

This command reads the state (enabled/ disabled) of the encoder reference input signal.

**Telegram structure: sRN LICpos2enable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Enable encoder reference input signal | String | 13 | | `LICpos2enable` | `4C 49 43 70 6F 73 32 65 6E 61 62 6C 65` |

**Example: sRN LICpos2enable**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LICpos2enable<ETX>
```

```text
<STX>sRN LICpos2enable<ETX>
```

```text
sRN LICpos2enable
```

```text
02 73 52 4E 20 4C 49 43 70 6F 73 32 65 6E 61 62 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 4E 20 4C 49 43 70 6F 73 32 65 6E 61 62 6C 65 56
```

```text
73 52 4E 20 4C 49 43 70 6F 73 32 65 6E 61 62 6C 65
```

**Telegram structure: sRA LICpos2enable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Enable encoder reference input signal | String | 13 | | `LICpos2enable` | `4C 49 43 70 6F 73 32 65 6E 61 62 6C 65` |
| Variable Data | Disabled/ enabled | Bool_1 | 1 | Disabled:<br>Enabled: | `0d (00h)<br>+1d (01h)` | `00<br>01` |

**Example: sRA LICpos2enable - Encoder reference input signal is enabled**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LICpos2enable{SPC}1<ETX>
```

```text
02 73 52 41 20 4C 49 43 70 6F 73 32 65 6E 61 62 6C 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 4C 49 43 70 6F 73 32 65 6E 61 62 6C 65 20 01 78
```
