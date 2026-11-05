# Read Date of Last Permanent Save [sRN DIpara]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Operating Data

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-date-of-last-permanent-save-srn-dipara

This command reads the date at which the last permanent save was executed.

**Telegram structure: sRN DIpara**

| Telegram part | Description                      | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |
| ------------- | -------------------------------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ |
| Command type  | Read                             | String   | 3      |                    | `sRN`    | `73 52 4E`          |
| Command       | Read date of last permanent save | String   | 6      |                    | `DIpara` | `44 49 70 61 72 61` |

**Example: sRN DIpara**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}DIpara<ETX>
```

```text
<STX>sRN DIpara<ETX>
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

| Telegram part               | Description                                       | Variable   | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                           |
| --------------------------- | ------------------------------------------------- | ---------- | ------ | ------------------ | -------------------------------------------- | ------------------------------------------------ |
| Command type                | Answer                                            | String     | 3      |                    | `sRA`           | `73 52 41`          |
| Command                     | Read date of last permanent save                  | String     | 6      |                    | `DIpara`        | `44 49 70 61 72 61` |
| String length               | Number of bytes in the following date/time string | Uint_16    | 2      | Always:            | `Ah`            | `00 0A`             |
| Date of last permanent save | DD.MM.YYYY                                        | FlexString | 10     |                    | `(see example)` | `(see example)`     |

**Example: sRA DIpara**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}DIpara{SPC}A{SPC}06.10.2026<ETX>
```

```text
02 73 52 41 20 44 49 70 61 72 61 20 41 20 30 36 2E 31 30 2E 32 30 32 36 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 41 20 44 49 70 61 72 61 20 00 0A 30 36 2E 31 30 2E 32 30 32 36 64
```
