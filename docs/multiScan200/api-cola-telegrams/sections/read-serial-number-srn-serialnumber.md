# Read Serial Number [sRN SerialNumber]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Device Information

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-serial-number-srn-serialnumber

Returns the serial number.

**Telegram structure: sRN SerialNumber**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Serial Number | String | 12 | | `SerialNumber` | `53 65 72 69 61 6C 4E 75 6D 62 65 72` |

**Example: sRN SerialNumber**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}SerialNumber<ETX>
```

```text
<STX>sRN SerialNumber<ETX>
```

```text
sRN SerialNumber
```

```text
02 73 52 4E 20 53 65 72 69 61 6C 4E 75 6D 62 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 4E 20 53 65 72 69 61 6C 4E 75 6D 62 65 72 4C
```

```text
73 52 4E 20 53 65 72 69 61 6C 4E 75 6D 62 65 72
```

**Telegram structure: sRA SerialNumber**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Serial Number | String | 12 | | `SerialNumber` | `53 65 72 69 61 6C 4E 75 6D 62 65 72` |
| SerialNumber length | Length of SerialNumber (max. 9) | Uint_16 | 2 | | `0 ... 9` | `00 00 ... 00 09` |
| SerialNumber | serial number of device | String | n | | `<text>` | `<bytes>` |

**Example: sRA SerialNumber**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}SerialNumber{SPC}8{SPC}26110162<ETX>
```

```text
02 73 52 41 20 53 65 72 69 61 6C 4E 75 6D 62 65 72 20 38 20 32 36 31 31 30 31 36 32 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 52 41 20 53 65 72 69 61 6C 4E 75 6D 62 65 72 20 00 08 32 36 31 31 30 31 36 32 6A
```
