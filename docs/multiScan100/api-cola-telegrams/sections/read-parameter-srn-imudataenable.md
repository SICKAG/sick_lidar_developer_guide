# Read Parameter [sRN ImuDataEnable]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › IMU Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-parameter-srn-imudataenable

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN ImuDataEnable**

| Telegram part | Description   | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |
| ------------- | ------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Read          | String   | 3      |                    | `sRN`           | `73 52 4E`                               |
| Command       | ImuDataEnable | String   | 13     |                    | `ImuDataEnable` | `49 6D 75 44 61 74 61 45 6E 61 62 6C 65` |

**Example: sRN ImuDataEnable**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ImuDataEnable<ETX>
```

```text
<STX>sRN ImuDataEnable<ETX>
```

```text
sRN ImuDataEnable
```

```text
02 73 52 4E 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 4E 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 0F
```

```text
73 52 4E 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65
```

**Example: sRA ImuDataEnable**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ImuDataEnable{SPC}0<ETX>
```

```text
02 73 52 41 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 20 00 20
```
