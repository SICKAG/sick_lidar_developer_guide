# Read Power on Counter [sRN ODpwrc]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Operating Data

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-power-on-counter-srn-odpwrc

Returns the number of power on cycles.

**Telegram structure: sRN ODpwrc**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Power on Counter | String | 6 | | `ODpwrc` | `4F 44 70 77 72 63` |

**Example: sRN ODpwrc**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ODpwrc<ETX>
```

```text
<STX>sRN ODpwrc<ETX>
```

```text
sRN ODpwrc
```

```text
02 73 52 4E 20 4F 44 70 77 72 63 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0A 73 52 4E 20 4F 44 70 77 72 63 52
```

```text
73 52 4E 20 4F 44 70 77 72 63
```

**Telegram structure: sRA ODpwrc**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Power on Counter | String | 6 | | `ODpwrc` | `4F 44 70 77 72 63` |
| PowerOnCnt | The number of power on cycles | Uint_32 | 4 | 0 ... 4294967295 | `0 ... FFFFFFFF` | `00 00 00 00 ... FF FF FF FF` |

**Example: sRA ODpwrc**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ODpwrc{SPC}8E<ETX>
```

```text
02 73 52 41 20 4F 44 70 77 72 63 20 38 45 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 41 20 4F 44 70 77 72 63 20 00 00 00 8E F3
```
