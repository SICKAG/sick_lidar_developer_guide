# Read Parameter [sRN TSCTCtimezone]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Date and System Time

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-parameter-srn-tsctctimezone

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN TSCTCtimezone**

| Telegram part | Description   | Variable | Length | Additional details | Values CoLa A (ASCII)                        | Values CoLa B (Binary)                                                |
| ------------- | ------------- | -------- | ------ | ------------------ | -------------------------------------------- | --------------------------------------------------------------------- |
| Command type  | Read          | String   | 3      |                    | `sRN`           | `73 52 4E`                               |
| Command       | TSCTCtimezone | String   | 13     |                    | `TSCTCtimezone` | `54 53 43 54 43 74 69 6D 65 7A 6F 6E 65` |

**Example: sRN TSCTCtimezone**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}TSCTCtimezone<ETX>
```

```text
<STX>sRN TSCTCtimezone<ETX>
```

```text
sRN TSCTCtimezone
```

```text
02 73 52 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 17
```

```text
73 52 4E 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65
```

**Example: sRA TSCTCtimezone**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}TSCTCtimezone{SPC}24<ETX>
```

```text
02 73 52 41 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 32 34 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 54 53 43 54 43 74 69 6D 65 7A 6F 6E 65 20 24 1C
```
