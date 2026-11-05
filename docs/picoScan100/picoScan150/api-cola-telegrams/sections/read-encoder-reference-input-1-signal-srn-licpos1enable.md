# Read Encoder Reference Input 1 Signal [sRN LICpos1enable]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Encoder Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-encoder-reference-input-1-signal-srn-licpos1enable

This command reads the state (enabled/ disabled) of the encoder reference input signal.

**Telegram structure: sRN LICpos1enable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Enable encoder reference input signal | String | 13 | | `LICpos1enable` | `4C 49 43 70 6F 73 31 65 6E 61 62 6C 65` |

**Example: sRN LICpos1enable**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LICpos1enable<ETX>
```

```text
<STX>sRN LICpos1enable<ETX>
```

```text
sRN LICpos1enable
```

```text
02 73 52 4E 20 4C 49 43 70 6F 73 31 65 6E 61 62 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 4E 20 4C 49 43 70 6F 73 31 65 6E 61 62 6C 65 55
```

```text
73 52 4E 20 4C 49 43 70 6F 73 31 65 6E 61 62 6C 65
```

**Telegram structure: sRA LICpos1enable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Enable encoder reference input signal | String | 13 | | `LICpos1enable` | `4C 49 43 70 6F 73 31 65 6E 61 62 6C 65` |
| Variable Data | Disabled/ enabled | Bool_1 | 1 | Disabled:<br>Enabled: | `0d (00h)<br>+1d (01h)` | `00<br>01` |

**Example: sRA LICpos1enable - Encoder reference input signal is enabled**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LICpos1enable{SPC}1<ETX>
```

```text
02 73 52 41 20 4C 49 43 70 6F 73 31 65 6E 61 62 6C 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 4C 49 43 70 6F 73 31 65 6E 61 62 6C 65 20 01 7B
```
