# Read Ground Filter State [sRN groundFilterEnable]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-ground-filter-state-srn-groundfilterenable

Read whether the ground filter is enabled.

**Telegram structure: sRN groundFilterEnable**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |
| ------------- | ------------------ | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command type  | Read               | String   | 3      |                    | `sRN`                | `73 52 4E`                                              |
| Command       | groundFilterEnable | String   | 18     |                    | `groundFilterEnable` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65` |

**Example: sRN groundFilterEnable**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}groundFilterEnable<ETX>
```

```text
<STX>sRN groundFilterEnable<ETX>
```

```text
sRN groundFilterEnable
```

```text
02 73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 4B
```

```text
73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65
```

**Telegram structure: sRA groundFilterEnable**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |
| ------------- | ------------------ | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command type  | Answer             | String   | 3      |                    | `sRA`                | `73 52 41`                                              |
| Command       | groundFilterEnable | String   | 18     |                    | `groundFilterEnable` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65` |
| State         | Filter enabled     | Bool_1   | 1      | Disabled / enabled | `0 / 1`              | `00 / 01`                                               |

**Example: sRA groundFilterEnable**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}groundFilterEnable{SPC}0<ETX>
```

```text
02 73 52 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 52 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 20 00 64
```
