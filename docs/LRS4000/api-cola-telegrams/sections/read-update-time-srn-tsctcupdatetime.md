# Read Update Time [sRN TSCTCupdatetime]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Date and System Time

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-update-time-srn-tsctcupdatetime

Returns the NTP update time.

**Telegram structure: sRN TSCTCupdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Update Time | String | 15 | | `TSCTCupdatetime` | `54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65` |

**Example: sRN TSCTCupdatetime**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}TSCTCupdatetime<ETX>
```

```text
<STX>sRN TSCTCupdatetime<ETX>
```

```text
sRN TSCTCupdatetime
```

```text
02 73 52 4E 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 4E 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 18
```

```text
73 52 4E 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65
```

**Telegram structure: sRA TSCTCupdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Update Time | String | 15 | | `TSCTCupdatetime` | `54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65` |
| TSCTCupdatetime | Update time for the time client | Uint_32 | 4 | 1 ... 3600 s | `1 ... E10` | `00 00 00 01 ... 00 00 0E 10` |

**Example: sRA TSCTCupdatetime**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}TSCTCupdatetime{SPC}258<ETX>
```

```text
02 73 52 41 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 20 32 35 38 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 52 41 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 20 00 00 02 58 6D
```
