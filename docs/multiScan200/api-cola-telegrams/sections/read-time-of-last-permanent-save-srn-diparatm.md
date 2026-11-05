# Read Time of Last Permanent Save [sRN DIparatm]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Operating Data

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-time-of-last-permanent-save-srn-diparatm

This command reads the time at which the last permanent save was executed.

**Telegram structure: sRN DIparatm**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read time of last permanent save | String | 8 | | `DIparatm` | `44 49 70 61 72 61 74 6D` |

**Example: sRN DIparatm**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}DIparatm<ETX>
```

```text
sRN DIparatm
```

```text
02 73 52 4E 20 44 49 70 61 72 61 74 6D 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 52 4E 20 44 49 70 61 72 61 74 6D 59
```

```text
73 52 4E 20 44 49 70 61 72 61 74 6D
```

**Telegram structure: sRA DIparatm**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read time of last permanent save | String | 8 | | `DIparatm` | `44 49 70 61 72 61 74 6D` |
| Time length | Number of characters of time | Uint_16 | 2 | 0 … 5 | `5` | `00 05` |
| Time | Time of the last permanent save, HH:MM | String | Length | Maximum 5 characters | `13:55` | `31 33 3A 35 35` |

**Example: sRA DIparatm**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}DIparatm{SPC}5{SPC}13:55<ETX>
```

```text
02 73 52 41 20 44 49 70 61 72 61 74 6D 20 35 20 31 33 3A 35 35 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 44 49 70 61 72 61 74 6D 20 00 05 31 33 3A 35 35 4B
```
