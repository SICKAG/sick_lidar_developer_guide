# Read Operating Hours [sRN ODoprh]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Operating Data

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-operating-hours-srn-odoprh

Views the total number of operating hours during the lifetime of the device.

**Telegram structure: sRN ODoprh**

| Telegram part | Description          | Variable | Length | Additional details | Values CoLa A (ASCII)                 | Values CoLa B (Binary)                           |
| ------------- | -------------------- | -------- | ------ | ------------------ | ------------------------------------- | ------------------------------------------------ |
| Command type  | Read                 | String   | 3      |                    | `sRN`    | `73 52 4E`          |
| Command       | Read operating hours | String   | 6      |                    | `ODoprh` | `4F 44 6F 70 72 68` |

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

| Telegram part | Description               | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                  |
| ------------- | ------------------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------- |
| Command type  | Answer                    | String   | 3      |                    | `sRA`            | `73 52 41`                 |
| Command       | Read operating hours      | String   | 6      |                    | `ODoprh`         | `4F 44 6F 70 72 68`        |
| Value         | Operating hours in 1/10 h | Uint_32  | 4      |                    | `0h … FFFFFFFFh` | `00 00 00 00 …FF FF FF FF` |

**Example: sRA ODoprh**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ODoprh{SPC}1B50B<ETX>
```

```text
02 73 52 41 20 4F 44 6F 70 72 68 20 31 42 35 30 42 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 41 20 4F 44 6F 70 72 68 20 00 01 B5 0B D1
```

Calculation of the value: 1B50B (hex) 111883 (dez) × 1/10 h = 11188.3 h
