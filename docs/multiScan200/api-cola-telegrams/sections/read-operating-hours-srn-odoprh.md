# Read Operating Hours [sRN ODoprh]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Operating Data

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-operating-hours-srn-odoprh

Returns the total number of operating hours during the lifetime of the device. The resolution is 1/10 hour.

**Telegram structure: sRN ODoprh**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Operating Hours | String | 6 | | `ODoprh` | `4F 44 6F 70 72 68` |

**Example: sRN ODoprh**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ODoprh<ETX>
```

```text
<STX>sRN ODoprh<ETX>
```

```text
sRN ODoprh
```

```text
02 73 52 4E 20 4F 44 6F 70 72 68 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0A 73 52 4E 20 4F 44 6F 70 72 68 41
```

```text
73 52 4E 20 4F 44 6F 70 72 68
```

**Telegram structure: sRA ODoprh**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Operating Hours | String | 6 | | `ODoprh` | `4F 44 6F 70 72 68` |
| OpHours | The total number of operating hours during the lifetime of the device. Resolution is a 1/10 hour | Uint_32 | 4 | 0 ... 4294967295 1/10 h | `0 ... FFFFFFFF` | `00 00 00 00 ... FF FF FF FF` |

**Example: sRA ODoprh**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ODoprh{SPC}740<ETX>
```

```text
02 73 52 41 20 4F 44 6F 70 72 68 20 37 34 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 41 20 4F 44 6F 70 72 68 20 00 00 07 40 29
```
