# Read Encoder Resolution [sRN LICencres]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Encoder Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-encoder-resolution-srn-licencres

Returns the encoder resolution.

**Telegram structure: sRN LICencres**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Encoder Resolution | String | 9 | | `LICencres` | `4C 49 43 65 6E 63 72 65 73` |

**Example: sRN LICencres**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LICencres<ETX>
```

```text
<STX>sRN LICencres<ETX>
```

```text
sRN LICencres
```

```text
02 73 52 4E 20 4C 49 43 65 6E 63 72 65 73 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 52 4E 20 4C 49 43 65 6E 63 72 65 73 05
```

```text
73 52 4E 20 4C 49 43 65 6E 63 72 65 73
```

**Telegram structure: sRA LICencres**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Encoder Resolution | String | 9 | | `LICencres` | `4C 49 43 65 6E 63 72 65 73` |
| EncResolution | Conversion resolution of the encoder | Float_32 | 4 | 0.001 ... 2000.0 | `00000000 ... FFFFFFFF` | `00 00 00 00 ... FF FF FF FF` |

**Example: sRA LICencres**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LICencres{SPC}3F800000<ETX>
```

```text
02 73 52 41 20 4C 49 43 65 6E 63 72 65 73 20 33 46 38 30 30 30 30 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 41 20 4C 49 43 65 6E 63 72 65 73 20 3F 80 00 00 95
```
