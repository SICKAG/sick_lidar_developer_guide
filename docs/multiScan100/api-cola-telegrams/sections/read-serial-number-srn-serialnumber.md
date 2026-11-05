# Read Serial Number [sRN SerialNumber]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Device

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-serial-number-srn-serialnumber

Read the serial number of the device.

**Telegram structure: sRN SerialNumber**

| Telegram part | Description                      | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | -------------------------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Read                             | String   | 3      |                    | `sRN`          | `73 52 4E`                            |
| Command       | Read serial number of the device | String   | 12     |                    | `SerialNumber` | `53 65 72 69 61 6C 4E 75 6D 62 65 72` |

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

| Telegram part           | Description                                               | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                             |
| ----------------------- | --------------------------------------------------------- | -------- | ------ | ------------------ | -------------------------------------------- | ------------------------------------------------------------------ |
| Command type            | Answer                                                    | String   | 3      |                    | `sRA`           | `73 52 41`                            |
| Command                 | Read serial number of the device                          | String   | 12     |                    | `SerialNumber`  | `53 65 72 69 61 6C 4E 75 6D 62 65 72` |
| Length of serial number | Number of characters of the serial number                 | Uint_16  | 2      |                    | `0 ... 8h`      | `00 00 ... 00 08h`                    |
| Serial number           | Production period (year, calendar week, number): YYWWxxxx | String   | 8      |                    | `(See example)` | `(See example)`                       |

**Example: sRA SerialNumber**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}SerialNumber{SPC}8{SPC}24480041<ETX>
```

```text
02 73 52 41 20 53 65 72 69 61 6C 4E 75 6D 62 65 72 20 38 20 32 34 34 38 30 30 34 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 52 41 20 53 65 72 69 61 6C 4E 75 6D 62 65 72 20 00 08 32 34 34 38 30 30 34 31 64
```
