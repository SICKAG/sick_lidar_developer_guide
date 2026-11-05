# Read Device Time [sRN LSPdatetime]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Date and System Time

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-device-time-srn-lspdatetime

Returns the current time of the device (years, months, days, hours, minutes, seconds, microseconds).

**Telegram structure: sRN LSPdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Device Time | String | 11 | | `LSPdatetime` | `4C 53 50 64 61 74 65 74 69 6D 65` |

**Example: sRN LSPdatetime**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LSPdatetime<ETX>
```

```text
<STX>sRN LSPdatetime<ETX>
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
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Device Time | String | 11 | | `LSPdatetime` | `4C 53 50 64 61 74 65 74 69 6D 65` |
| uiYear | uiYear | Uint_16 | 2 | 0 ... 2105 | `0 ... 839` | `00 00 ... 08 39` |
| usiMonth | usiMonth | Uint_8 | 1 | 0 ... 12 | `0 ... C` | `00 ... 0C` |
| usiDay | usiDay | Uint_8 | 1 | 0 ... 31 | `0 ... 1F` | `00 ... 1F` |
| usiHour | Value for [h] in current time | Uint_8 | 1 | 0 ... 23 | `0 ... 17` | `00 ... 17` |
| usiMinute | Value for [min] in current time | Uint_8 | 1 | 0 ... 59 | `0 ... 3B` | `00 ... 3B` |
| usiSec | Value for [s] in current time | Uint_8 | 1 | 0 ... 59 | `0 ... 3B` | `00 ... 3B` |
| udiUSec | Value for [µs] in current time | Uint_32 | 4 | 0 ... 999999 | `0 ... F423F` | `00 00 00 00 ... 00 0F 42 3F` |

**Example: sRA LSPdatetime**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LSPdatetime{SPC}7B2{SPC}1{SPC}1{SPC}1{SPC}11{SPC}10{SPC}29040<ETX>
```

```text
02 73 52 41 20 4C 53 50 64 61 74 65 74 69 6D 65 20 37 42 32 20 31 20 31 20 31 20 31 31 20 31 30 20 32 39 30 34 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 52 41 20 4C 53 50 64 61 74 65 74 69 6D 65 20 07 B2 01 01 01 11 10 00 02 90 40 49
```
