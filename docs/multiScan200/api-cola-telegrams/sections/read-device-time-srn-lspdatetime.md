# Read Device Time [sRN LSPdatetime]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Date and System Time

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-device-time-srn-lspdatetime

Read the device time.

Required user level: Read-only.

**Telegram structure: sRN LSPdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read request | String | 3 | | `sRN` | `73 52 4E` |
| Variable name | The device time | String | 11 | | `LSPdatetime` | `4C 53 50 64 61 74 65 74 69 6D 65` |

**Example: sRN LSPdatetime**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LSPdatetime<ETX>
```

```text
sRN LSPdatetime
```

```text
02 73 52 4E 20 4C 53 50 64 61 74 65 74 69 6D 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 4C 53 50 64 61 74 65 74 69 6D 65 01
```

```text
73 52 4E 20 4C 53 50 64 61 74 65 74 69 6D 65
```

**Telegram structure: sRA LSPdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read answer | String | 3 | | `sRA` | `73 52 41` |
| Variable name | The device time | String | 11 | | `LSPdatetime` | `4C 53 50 64 61 74 65 74 69 6D 65` |
| Year | | Uint_16 | 2 | Max: 2105 | `0` | `00 00` |
| Month | | Uint_8 | 1 | | `+1` | `01` |
| Day | | Uint_8 | 1 | | `+1` | `01` |
| Hours | Value for [h] in current time | Uint_8 | 1 | | `0` | `00` |
| Minutes | Value for [min] in current time | Uint_8 | 1 | | `0` | `00` |
| Seconds | Value for [s] in current time | Uint_8 | 1 | | `0` | `00` |
| Microseconds | Value for [µs] in current time | Uint_32 | 4 | | `0` | `00 00 00 00` |

**Example: sRA LSPdatetime**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LSPdatetime{SPC}7B2{SPC}1{SPC}1{SPC}9{SPC}14{SPC}3A{SPC}45D30<ETX>
```

```text
02 73 52 41 20 4C 53 50 64 61 74 65 74 69 6D 65 20 37 42 32 20 31 20 31 20 39 20 31 34 20 33 41 20 34 35 44 33 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 52 41 20 4C 53 50 64 61 74 65 74 69 6D 65 20 07 B2 01 01 09 14 3A 00 04 5D 30 D5
```
