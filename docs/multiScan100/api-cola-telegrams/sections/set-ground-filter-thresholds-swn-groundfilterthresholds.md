# Set Ground Filter Thresholds [sWN groundFilterThresholds]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#set-ground-filter-thresholds-swn-groundfilterthresholds

Set the minimum and maximum signed ground-plane distances in mm (manual pages 152-154). Both values are two-byte signed integers; the manual's Int_8 label is inconsistent with its length and bytes.

Requires Authorized client.

**Telegram structure: sWN groundFilterThresholds**

| Telegram part    | Description                             | Variable | Length | Additional details           | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                           |
| ---------------- | --------------------------------------- | -------- | ------ | ---------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type     | Write                                   | String   | 3      |                              | `sWN`                    | `73 57 4E`                                                          |
| Command          | groundFilterThresholds                  | String   | 22     |                              | `groundFilterThresholds` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73` |
| Minimum distance | Signed distance from ground plane in mm | Int_16   | 2      | -1000 to +1000; default -100 | `-100`                   | `FF 9C`                                                             |
| Maximum distance | Signed distance from ground plane in mm | Int_16   | 2      | -1000 to +1000; default +100 | `+100`                   | `00 64`                                                             |

**Example: sWN groundFilterThresholds**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}groundFilterThresholds{SPC}-50{SPC}+50<ETX>
```

```text
sWN groundFilterThresholds -50 +50
```

```text
02 73 57 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 20 2D 35 30 20 2B 35 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 57 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 20 FF CE 00 32 68
```

```text
73 57 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 20 FF CE 00 32
```

**Telegram structure: sWA groundFilterThresholds**

| Telegram part | Description            | Variable | Length | Additional details | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                                           |
| ------------- | ---------------------- | -------- | ------ | ------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Command type  | Answer                 | String   | 3      |                    | `sWA`                    | `73 57 41`                                                          |
| Command       | groundFilterThresholds | String   | 22     |                    | `groundFilterThresholds` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73` |

**Example: sWA groundFilterThresholds**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}groundFilterThresholds<ETX>
```

```text
02 73 57 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 57 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 68 72 65 73 68 6F 6C 64 73 20 64
```
