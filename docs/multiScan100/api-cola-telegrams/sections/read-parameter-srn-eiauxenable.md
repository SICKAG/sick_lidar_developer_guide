# Read Parameter [sRN EIAuxEnable]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Legacy Protocols

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-parameter-srn-eiauxenable

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN EIAuxEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |
| ------------- | ----------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- |
| Command type  | Read        | String   | 3      |                    | `sRN`         | `73 52 4E`                         |
| Command       | EIAuxEnable | String   | 11     |                    | `EIAuxEnable` | `45 49 41 75 78 45 6E 61 62 6C 65` |

**Example: sRN EIAuxEnable**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIAuxEnable<ETX>
```

```text
<STX>sRN EIAuxEnable<ETX>
```

```text
sRN EIAuxEnable
```

```text
02 73 52 4E 20 45 49 41 75 78 45 6E 61 62 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 45 49 41 75 78 45 6E 61 62 6C 65 2E
```

```text
73 52 4E 20 45 49 41 75 78 45 6E 61 62 6C 65
```

**Example: sRA EIAuxEnable**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIAuxEnable{SPC}1<ETX>
```

```text
02 73 52 41 20 45 49 41 75 78 45 6E 61 62 6C 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 41 20 45 49 41 75 78 45 6E 61 62 6C 65 20 01 00
```
