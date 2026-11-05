# Read Parameter [sRN LEDEnable]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-parameter-srn-ledenable

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LEDEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                    | Values CoLa B (Binary)                                    |
| ------------- | ----------- | -------- | ------ | ------------------ | ---------------------------------------- | --------------------------------------------------------- |
| Command type  | Read        | String   | 3      |                    | `sRN`       | `73 52 4E`                   |
| Command       | LEDEnable   | String   | 9      |                    | `LEDEnable` | `4C 45 44 45 6E 61 62 6C 65` |

**Example: sRN LEDEnable**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LEDEnable<ETX>
```

```text
<STX>sRN LEDEnable<ETX>
```

```text
sRN LEDEnable
```

```text
02 73 52 4E 20 4C 45 44 45 6E 61 62 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 52 4E 20 4C 45 44 45 6E 61 62 6C 65 23
```

```text
73 52 4E 20 4C 45 44 45 6E 61 62 6C 65
```

**Example: sRA LEDEnable**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LEDEnable{SPC}1<ETX>
```

```text
02 73 52 41 20 4C 45 44 45 6E 61 62 6C 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 41 20 4C 45 44 45 6E 61 62 6C 65 20 01 0D
```
