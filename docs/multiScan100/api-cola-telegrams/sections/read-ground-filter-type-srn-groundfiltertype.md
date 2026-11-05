# Read Ground Filter Type [sRN groundFilterType]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-ground-filter-type-srn-groundfiltertype

Read the ground-plane source (manual pages 151-152).

**Telegram structure: sRN groundFilterType**

| Telegram part | Description      | Variable | Length | Additional details | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                                         |
| ------------- | ---------------- | -------- | ------ | ------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------ |
| Command type  | Read             | String   | 3      |                    | `sRN`              | `73 52 4E`                                        |
| Command       | groundFilterType | String   | 16     |                    | `groundFilterType` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 54 79 70 65` |

**Example: sRN groundFilterType**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}groundFilterType<ETX>
```

```text
<STX>sRN groundFilterType<ETX>
```

```text
sRN groundFilterType
```

```text
02 73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 79 70 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 79 70 65 52
```

```text
73 52 4E 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 79 70 65
```

**Telegram structure: sRA groundFilterType**

| Telegram part | Description         | Variable | Length | Additional details | Values CoLa A (ASCII)                           | Values CoLa B (Binary)                                                         |
| ------------- | ------------------- | -------- | ------ | ------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------ |
| Command type  | Answer              | String   | 3      |                    | `sRA`              | `73 52 41`                                        |
| Command       | groundFilterType    | String   | 16     |                    | `groundFilterType` | `67 72 6F 75 6E 64 46 69 6C 74 65 72 54 79 70 65` |
| Type          | Ground-plane source | Enum_8   | 1      | P3D / IMU          | `0 / 1`            | `00 / 01`                                         |

**Example: sRA groundFilterType**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}groundFilterType{SPC}0<ETX>
```

```text
02 73 52 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 79 70 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 52 41 20 67 72 6F 75 6E 64 46 69 6C 74 65 72 54 79 70 65 20 00 7D
```
