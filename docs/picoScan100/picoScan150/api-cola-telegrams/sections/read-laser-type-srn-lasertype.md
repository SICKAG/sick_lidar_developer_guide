# Read Laser Type [sRN laserType]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › General

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-laser-type-srn-lasertype

Returns the type of the sending unit.

**Telegram structure: sRN laserType**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Laser Type | String | 9 | | `laserType` | `6C 61 73 65 72 54 79 70 65` |

**Example: sRN laserType**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}laserType<ETX>
```

```text
<STX>sRN laserType<ETX>
```

```text
sRN laserType
```

```text
02 73 52 4E 20 6C 61 73 65 72 54 79 70 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 52 4E 20 6C 61 73 65 72 54 79 70 65 1E
```

```text
73 52 4E 20 6C 61 73 65 72 54 79 70 65
```

**Telegram structure: sRA laserType**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Laser Type | String | 9 | | `laserType` | `6C 61 73 65 72 54 79 70 65` |
| laserType | Laser type of the device frontend | Uint_8 | 1 | 0 ... 255 | `0 ... FF` | `00 ... FF` |

**Example: sRA laserType**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}laserType{SPC}2<ETX>
```

```text
02 73 52 41 20 6C 61 73 65 72 54 79 70 65 20 32 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 41 20 6C 61 73 65 72 54 79 70 65 20 02 33
```
