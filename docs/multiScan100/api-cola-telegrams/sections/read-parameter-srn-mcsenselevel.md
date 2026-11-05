# Read Parameter [sRN MCSenseLevel]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-parameter-srn-mcsenselevel

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN MCSenseLevel**

| Telegram part | Description  | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | ------------ | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Read         | String   | 3      |                    | `sRN`          | `73 52 4E`                            |
| Command       | MCSenseLevel | String   | 12     |                    | `MCSenseLevel` | `4D 43 53 65 6E 73 65 4C 65 76 65 6C` |

**Example: sRN MCSenseLevel**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}MCSenseLevel<ETX>
```

```text
<STX>sRN MCSenseLevel<ETX>
```

```text
sRN MCSenseLevel
```

```text
02 73 52 4E 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 4E 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 59
```

```text
73 52 4E 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C
```

**Example: sRA MCSenseLevel**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}MCSenseLevel{SPC}0<ETX>
```

```text
02 73 52 41 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 41 20 4D 43 53 65 6E 73 65 4C 65 76 65 6C 20 00 76
```
