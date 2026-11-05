# Read Firmware Version [sRN DeviceIdent]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Device

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-firmware-version-srn-deviceident

**Telegram structure: sRN DeviceIdent**

| Telegram part | Description           | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |
| ------------- | --------------------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- |
| Command type  | Read                  | String   | 3      |                    | `sRN`         | `73 52 4E`                         |
| Command       | Read firmware version | String   | 11     |                    | `DeviceIdent` | `44 65 76 69 63 65 49 64 65 6E 74` |

**Example: sRN DeviceIdent**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}DeviceIdent<ETX>
```

```text
<STX>sRN DeviceIdent<ETX>
```

```text
sRN DeviceIdent
```

```text
02 73 52 4E 20 44 65 76 69 63 65 49 64 65 6E 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 44 65 76 69 63 65 49 64 65 6E 74 25
```

```text
73 52 4E 20 44 65 76 69 63 65 49 64 65 6E 74
```

**Telegram structure: sRA DeviceIdent**

| Telegram part | Description                            | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                          |
| ------------- | -------------------------------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------- |
| Command type  | Answer                                 | String   | 3      |                    | `sRA`           | `73 52 41`                         |
| Command       |                                        | String   | 11     |                    | `DeviceIdent`   | `44 65 76 69 63 65 49 64 65 6E 74` |
| Value         | Length of firmware designation         | Enum_16  | 2      |                    | `0 ... 22h`     | `0 ... 22h`                        |
| Value         | Firmware designation for device family | String   |        |                    | `(See example)` | `(See example)`                    |
| Value         | Length of firmware version             | Enum_16  | 2      |                    | `0 ... 22h`     | `0 ... 22h`                        |
| Value         | Firmware version                       | String   |        |                    | `(See example)` | `(See example)`                    |
