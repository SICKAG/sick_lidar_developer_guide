# Read Device Type [sRN DItype]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Device Information

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-device-type-srn-ditype

This telegram asks for the device type of the product family.

**Telegram structure: sRN DItype**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Ask state | String | 6 | | `DItype` | `44 49 74 79 70 65` |

**Example: sRN DItype**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}DItype<ETX>
```

```text
<STX>sRN DItype<ETX>
```

```text
sRN DItype
```

```text
02 73 52 4E 20 44 49 74 79 70 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0A 73 52 4E 20 44 49 74 79 70 65 5A
```

```text
73 52 4E 20 44 49 74 79 70 65
```

**Telegram structure: sRA DItype**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Ask state | String | 6 | | `DItype` | `44 49 74 79 70 65` |
| Length of type key | Number of characters of the following type code | Uint_16 | 2 | | `0d … 65535d (0h … FFFFh)` | `00 00 … FF FF` |
| Device type | Type code of the device | String | (var.) | | `(Device type)` | `(Device type)` |

**Example: sRA DItype (picoScan150)**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}DItype{SPC}B{SPC}picoScan150<ETX>
```

```text
02 73 52 41 20 44 49 74 79 70 65 20 42 20 70 69 63 6F 53 63 61 6E 31 35 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 52 41 20 44 49 74 79 70 65 20 00 0B 70 69 63 6F 53 63 61 6E 31 35 30 60
```
