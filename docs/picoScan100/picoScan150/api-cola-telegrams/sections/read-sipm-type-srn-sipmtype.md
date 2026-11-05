# Read SiPM Type [sRN sipmType]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › General

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-sipm-type-srn-sipmtype

Returns the type of the receiving unit.

**Telegram structure: sRN sipmType**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read SiPM Type | String | 8 | | `sipmType` | `73 69 70 6D 54 79 70 65` |

**Example: sRN sipmType**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}sipmType<ETX>
```

```text
<STX>sRN sipmType<ETX>
```

```text
sRN sipmType
```

```text
02 73 52 4E 20 73 69 70 6D 54 79 70 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 52 4E 20 73 69 70 6D 54 79 70 65 70
```

```text
73 52 4E 20 73 69 70 6D 54 79 70 65
```

**Telegram structure: sRA sipmType**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read SiPM Type | String | 8 | | `sipmType` | `73 69 70 6D 54 79 70 65` |
| sipmType | SiPM type of the device frontend | Uint_8 | 1 | 0 ... 255 | `0 ... FF` | `00 ... FF` |

**Example: sRA sipmType**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}sipmType{SPC}2<ETX>
```

```text
02 73 52 41 20 73 69 70 6D 54 79 70 65 20 32 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 52 41 20 73 69 70 6D 54 79 70 65 20 02 5D
```
