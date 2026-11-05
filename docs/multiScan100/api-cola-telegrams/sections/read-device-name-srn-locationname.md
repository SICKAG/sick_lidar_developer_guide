# Read Device Name [sRN LocationName]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Device

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-device-name-srn-locationname

Read the given name of the device (Default is the serial number of the device).

**Telegram structure: sRN LocationName**

| Telegram part | Description      | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | ---------------- | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Read             | String   | 3      |                    | `sRN`          | `73 52 4E`                            |
| Command       | Read device name | String   | 12     |                    | `LocationName` | `4C 6F 63 61 74 69 6F 6E 4E 61 6D 65` |

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

| Telegram part                                     | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| ------------------------------------------------- | ----------- | -------- | ------ | ------------------ | --------------------- | ---------------------- |
| Find complete telegram structure of the answer in |             |          |        |                    |                       |                        |

**Example: sRA LocationName**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LocationName{SPC}15{SPC}multiScan165{SPC}24480041<ETX>
```

```text
02 73 52 41 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 31 35 20 6D 75 6C 74 69 53 63 61 6E 31 36 35 20 32 34 34 38 30 30 34 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 28 73 52 41 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 00 15 6D 75 6C 74 69 53 63 61 6E 31 36 35 20 32 34 34 38 30 30 34 31 24
```
