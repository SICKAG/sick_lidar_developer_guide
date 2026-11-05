# Read Device Order Number [sRN OrdNum]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Device Information

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-device-order-number-srn-ordnum

This telegram reads the device order number which corresponds to the SICK part number of the device.

**Telegram structure: sRN OrdNum**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read device order number | String | 6 | | `OrdNum` | `4F 72 64 4E 75 6D` |

**Example: sRN OrdNum**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}OrdNum<ETX>
```

```text
<STX>sRN OrdNum<ETX>
```

```text
sRN OrdNum
```

```text
02 73 52 4E 20 4F 72 64 4E 75 6D 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0A 73 52 4E 20 4F 72 64 4E 75 6D 40
```

```text
73 52 4E 20 4F 72 64 4E 75 6D
```

**Telegram structure: sRA OrdNum**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read device order number | String | 6 | | `OrdNum` | `4F 72 64 4E 75 6D` |
| Length | Number of characters of the following order number | Uint_16 | 2 | | `0h ... 20h` | `00 00 ... 00 20` |
| Order number | Order number in 7 digits | String | 7 | | `0000000 … 9999999` | `00 00 00 00 00 00 00 … FF FF FF FF FF FF FF` |

Example: sRA OrdNum 1134610 (Order Number for picoScan150 Pro-1)

**Example for picoScan150 Pro-1: sRA OrdNum**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}OrdNum{SPC}7{SPC}1134610<ETX>
```

```text
02 73 52 41 20 4F 72 64 4E 75 6D 20 37 20 31 31 33 34 36 31 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 4F 72 64 4E 75 6D 20 00 07 31 31 33 34 36 31 30 58
```
