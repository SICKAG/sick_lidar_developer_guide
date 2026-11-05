# Read Device Name [sRN LocationName]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Device Information

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-device-name-srn-locationname

Returns the device name.

**Telegram structure: sRN LocationName**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Device Name | String | 12 | | `LocationName` | `4C 6F 63 61 74 69 6F 6E 4E 61 6D 65` |

**Example: sRN LocationName**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LocationName<ETX>
```

```text
<STX>sRN LocationName<ETX>
```

```text
sRN LocationName
```

```text
02 73 52 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 55
```

```text
73 52 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65
```

**Telegram structure: sRA LocationName**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Device Name | String | 12 | | `LocationName` | `4C 6F 63 61 74 69 6F 6E 4E 61 6D 65` |
| LocationName length | Length of LocationName (max. 32) | Uint_16 | 2 | | `0 ... 20` | `00 00 ... 00 20` |
| LocationName | Location of Device (set by user) | String | n | | `<text>` | `<bytes>` |

**Example: sRA LocationName**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LocationName{SPC}15{SPC}multiScan2xx{SPC}26110162<ETX>
```

```text
02 73 52 41 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 31 35 20 6D 75 6C 74 69 53 63 61 6E 32 78 78 20 32 36 31 31 30 31 36 32 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 28 73 52 41 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 00 15 6D 75 6C 74 69 53 63 61 6E 32 78 78 20 32 36 31 31 30 31 36 32 2A
```
