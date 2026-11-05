# Read Device Order Number [sRN OrdNum]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Device Information

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-device-order-number-srn-ordnum

Returns the order number (SICK part number).

**Telegram structure: sRN OrdNum**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Device Order Number | String | 6 | | `OrdNum` | `4F 72 64 4E 75 6D` |

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
| Command | Read Device Order Number | String | 6 | | `OrdNum` | `4F 72 64 4E 75 6D` |
| OrderNumber length | Length of OrderNumber (max. 32) | Uint_16 | 2 | | `0 ... 20` | `00 00 ... 00 20` |
| OrderNumber | This variable's value matches the SICK order number (million number) in SAP. | String | n | | `<text>` | `<bytes>` |

**Example: sRA OrdNum**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}OrdNum{SPC}7{SPC}1154078<ETX>
```

```text
02 73 52 41 20 4F 72 64 4E 75 6D 20 37 20 31 31 35 34 30 37 38 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 4F 72 64 4E 75 6D 20 00 07 31 31 35 34 30 37 38 56
```
