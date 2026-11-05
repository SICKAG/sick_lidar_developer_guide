# Read Version of the Application Software [sRN FirmwareVersion]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Device

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-version-of-the-application-software-srn-firmwareversion

**Telegram structure: sRN FirmwareVersion**

| Telegram part | Description                              | Variable | Length | Additional details | Values CoLa A (ASCII)                          | Values CoLa B (Binary)                                                      |
| ------------- | ---------------------------------------- | -------- | ------ | ------------------ | ---------------------------------------------- | --------------------------------------------------------------------------- |
| Command type  | Read                                     | String   | 3      |                    | `sRN`             | `73 52 4E`                                     |
| Command       | Read version of the application software | String   | 15     |                    | `FirmwareVersion` | `46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E` |

**Example: sRN FirmwareVersion**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}FirmwareVersion<ETX>
```

```text
<STX>sRN FirmwareVersion<ETX>
```

```text
sRN FirmwareVersion
```

```text
02 73 52 4E 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 4E 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E 24
```

```text
73 52 4E 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E
```

**Telegram structure: sRA FirmwareVersion**

| Telegram part | Description                              | Variable | Length   | Additional details                       | Values CoLa A (ASCII)                          | Values CoLa B (Binary)                                                      |
| ------------- | ---------------------------------------- | -------- | -------- | ---------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------- |
| Command type  | Answer                                   | String   | 3        |                                          | `sRA`             | `73 52 41`                                     |
| Command       | Read version of the application software | String   | 15       |                                          | `FirmwareVersion` | `46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E` |
| Value         | Length of version                        | Uint_16  | 2        |                                          | `0 ... 28h`       | `0 ... 28h`                                    |
| Value         | Version                                  | String   | variable | Length is given by the preceding Uint_16 | `(See example)`   | `(See example)`                                |

**Example: sRA FirmwareVersion**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}FirmwareVersion{SPC}5{SPC}2.4.4<ETX>
```

```text
02 73 52 41 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E 20 35 20 32 2E 34 2E 34 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 52 41 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E 20 00 05 32 2E 34 2E 34 3C
```
