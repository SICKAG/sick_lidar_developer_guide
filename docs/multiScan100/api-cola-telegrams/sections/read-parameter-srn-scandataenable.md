# Read Parameter [sRN ScanDataEnable]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-parameter-srn-scandataenable

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN ScanDataEnable**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Read           | String   | 3      |                    | `sRN`            | `73 52 4E`                                  |
| Command       | ScanDataEnable | String   | 14     |                    | `ScanDataEnable` | `53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65` |

**Example: sRN ScanDataEnable**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ScanDataEnable<ETX>
```

```text
<STX>sRN ScanDataEnable<ETX>
```

```text
sRN ScanDataEnable
```

```text
02 73 52 4E 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 61
```

```text
73 52 4E 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65
```

**Example: sRA ScanDataEnable**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ScanDataEnable{SPC}0<ETX>
```

```text
02 73 52 41 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 20 00 4E
```
