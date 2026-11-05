# Read Parameter [sRN LMPautostartmeas]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-parameter-srn-lmpautostartmeas

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LMPautostartmeas**

| Telegram part | Description      | Variable | Length | Additional details | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                                         |
| ------------- | ---------------- | -------- | ------ | ------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------ |
| Command type  | Read             | String   | 3      |                    | `sRN`              | `73 52 4E`                                        |
| Command       | LMPautostartmeas | String   | 16     |                    | `LMPautostartmeas` | `4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73` |

**Example: sRN LMPautostartmeas**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LMPautostartmeas<ETX>
```

```text
<STX>sRN LMPautostartmeas<ETX>
```

```text
sRN LMPautostartmeas
```

```text
02 73 52 4E 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 4E 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 6B
```

```text
73 52 4E 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73
```

**Example: sRA LMPautostartmeas**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LMPautostartmeas{SPC}1<ETX>
```

```text
02 73 52 41 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 52 41 20 4C 4D 50 61 75 74 6F 73 74 61 72 74 6D 65 61 73 20 01 45
```
