# Read Parameter [sRN TSCRole]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Date and System Time

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-parameter-srn-tscrole

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN TSCRole**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                  | Values CoLa B (Binary)                              |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------- | --------------------------------------------------- |
| Command type  | Read        | String   | 3      |                    | `sRN`     | `73 52 4E`             |
| Command       | TSCRole     | String   | 7      |                    | `TSCRole` | `54 53 43 52 6F 6C 65` |

**Example: sRN TSCRole**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}TSCRole<ETX>
```

```text
<STX>sRN TSCRole<ETX>
```

```text
sRN TSCRole
```

```text
02 73 52 4E 20 54 53 43 52 6F 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0B 73 52 4E 20 54 53 43 52 6F 6C 65 3F
```

```text
73 52 4E 20 54 53 43 52 6F 6C 65
```

**Example: sRA TSCRole**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}TSCRole{SPC}0<ETX>
```

```text
02 73 52 41 20 54 53 43 52 6F 6C 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 52 41 20 54 53 43 52 6F 6C 65 20 00 10
```
