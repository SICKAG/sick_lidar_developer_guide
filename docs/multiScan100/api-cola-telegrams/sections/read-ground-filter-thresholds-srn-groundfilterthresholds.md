# Read Ground Filter Thresholds [sRN groundFilterThresholds]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-ground-filter-thresholds-srn-groundfilterthresholds

Read the signed ground-point distance limits in mm (manual pages 154-155).

**Telegram structure: sRN groundFilterThresholds**

| Telegram part | Description            | Variable | Length | Additional details | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                           |
| ------------- | ---------------------- | -------- | ------ | ------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type  | Read                   | String   | 3      |                    | `sRN`                    | `73 52 4E`                                                          |
| Command       | groundFilterThresholds | String   | 22     |                    | `groundFilterThresholds` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73` |

**Example: sRN groundFilterThresholds**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}groundFilterThresholds<ETX>
```

```text
<STX>sRN groundFilterThresholds<ETX>
```

```text
sRN groundFilterThresholds
```

```text
02 73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1A 73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 4E
```

```text
73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73
```

**Telegram structure: sRA groundFilterThresholds**

| Telegram part    | Description                             | Variable | Length | Additional details           | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                           |
| ---------------- | --------------------------------------- | -------- | ------ | ---------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type     | Answer                                  | String   | 3      |                              | `sRA`                    | `73 52 41`                                                          |
| Command          | groundFilterThresholds                  | String   | 22     |                              | `groundFilterThresholds` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73` |
| Minimum distance | Signed distance from ground plane in mm | Int_16   | 2      | -1000 to +1000; default -100 | `-100`                   | `FF 9C`                                                             |
| Maximum distance | Signed distance from ground plane in mm | Int_16   | 2      | -1000 to +1000; default +100 | `+100`                   | `00 64`                                                             |

**Example: sRA groundFilterThresholds**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}groundFilterThresholds{SPC}FF9C{SPC}64<ETX>
```

```text
02 73 52 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 20 46 46 39 43 20 36 34 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 52 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 20 FF 9C 00 64 66
```
