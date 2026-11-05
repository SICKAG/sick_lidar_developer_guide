# Set Ground Filter [sWN groundFilterEnable]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#set-ground-filter-swn-groundfilterenable

Enable ground-point exclusion for field evaluation and perpendicular-distance measurement (manual pages 149-151).

Requires Authorized client.

**Telegram structure: sWN groundFilterEnable**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |
| ------------- | ------------------ | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command type  | Write              | String   | 3      |                    | `sWN`                | `73 57 4E`                                              |
| Command       | groundFilterEnable | String   | 18     |                    | `groundFilterEnable` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65` |
| State         | Filter enabled     | Bool_1   | 1      | Disabled / enabled | `0 / 1`              | `00 / 01`                                               |

**Example: sWN groundFilterEnable**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}groundFilterEnable{SPC}1<ETX>
```

```text
sWN groundFilterEnable 1
```

```text
02 73 57 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 57 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 20 01 6F
```

```text
73 57 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 20 01
```

**Telegram structure: sWA groundFilterEnable**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |
| ------------- | ------------------ | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command type  | Answer             | String   | 3      |                    | `sWA`                | `73 57 41`                                              |
| Command       | groundFilterEnable | String   | 18     |                    | `groundFilterEnable` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65` |

**Example: sWA groundFilterEnable**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}groundFilterEnable<ETX>
```

```text
02 73 57 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 57 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 45 6E 61 62 6C 65 20 61
```
