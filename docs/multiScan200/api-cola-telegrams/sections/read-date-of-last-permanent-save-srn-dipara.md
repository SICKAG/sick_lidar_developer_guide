# Read Date of Last Permanent Save [sRN DIpara]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Operating Data

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-date-of-last-permanent-save-srn-dipara

This command reads the date at which the last permanent save was executed.

**Telegram structure: sRN DIpara**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read date of last permanent save | String | 6 | | `DIpara` | `44 49 70 61 72 61` |

**Example: sRN DIpara**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}DIpara<ETX>
```

```text
sRN DIpara
```

```text
02 73 52 4E 20 44 49 70 61 72 61 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0A 73 52 4E 20 44 49 70 61 72 61 40
```

```text
73 52 4E 20 44 49 70 61 72 61
```

**Telegram structure: sRA DIpara**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read date of last permanent save | String | 6 | | `DIpara` | `44 49 70 61 72 61` |
| Date length | Number of characters of date | Uint_16 | 2 | 0 … 10 | `A` | `00 0A` |
| Date | Date of the last permanent save, DD.MM.YYYY | String | Length | Maximum 10 characters | `29.09.2026` | `32 39 2E 30 39 2E 32 30 32 36` |

**Example: sRA DIpara**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}DIpara{SPC}A{SPC}29.09.2026<ETX>
```

```text
02 73 52 41 20 44 49 70 61 72 61 20 41 20 32 39 2E 30 39 2E 32 30 32 36 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 41 20 44 49 70 61 72 61 20 00 0A 32 39 2E 30 39 2E 32 30 32 36 61
```
