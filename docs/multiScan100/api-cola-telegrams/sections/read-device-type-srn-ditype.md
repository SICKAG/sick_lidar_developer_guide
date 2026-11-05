# Read Device Type [sRN DItype]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Device

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-device-type-srn-ditype

This telegram asks for the device type of the product family.

**Telegram structure: sRN DItype**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |
| ------------- | ----------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ |
| Command type  | Read        | String   | 3      |                    | `sRN`    | `73 52 4E`          |
| Command       | Ask state   | String   | 6      |                    | `DItype` | `44 49 74 79 70 65` |

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

| Telegram part      | Description                                        | Variable | Length | Additional details     | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                           |
| ------------------ | -------------------------------------------------- | -------- | ------ | ---------------------- | -------------------------------------------- | ------------------------------------------------ |
| Command type       | Answer                                             | String   | 3      |                        | `sRA`           | `73 52 41`          |
| Command            | Ask state                                          | String   | 6      |                        | `DItype`        | `44 49 74 79 70 65` |
| Length of type key | Number of digits of the following type code length | Uint_16  | 2      | String length in bytes | `0 ... FFFF`    | `00 00 ... FF FF`   |
| Device type        | Type code of the device                            | String   | (var.) |                        | `(Device type)` | `(Device type)`     |

**Example: sRA DItype**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}DItype{SPC}C{SPC}multiScan165<ETX>
```

```text
02 73 52 41 20 44 49 74 79 70 65 20 43 20 6D 75 6C 74 69 53 63 61 6E 31 36 35 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 52 41 20 44 49 74 79 70 65 20 00 0C 6D 75 6C 74 69 53 63 61 6E 31 36 35 1D
```
