# Read Parameter [sRN LFPmovingAveragingFilter]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-parameter-srn-lfpmovingaveragingfilter

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LFPmovingAveragingFilter**

| Telegram part | Description              | Variable | Length | Additional details | Values CoLa A (ASCII)                                   | Values CoLa B (Binary)                                                                                 |
| ------------- | ------------------------ | -------- | ------ | ------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Command type  | Read                     | String   | 3      |                    | `sRN`                      | `73 52 4E`                                                                |
| Command       | LFPmovingAveragingFilter | String   | 24     |                    | `LFPmovingAveragingFilter` | `4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72` |

**Example: sRN LFPmovingAveragingFilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFPmovingAveragingFilter<ETX>
```

```text
<STX>sRN LFPmovingAveragingFilter<ETX>
```

```text
sRN LFPmovingAveragingFilter
```

```text
02 73 52 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 52 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 67
```

```text
73 52 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72
```

**Example: sRA LFPmovingAveragingFilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFPmovingAveragingFilter{SPC}0{SPC}3<ETX>
```

```text
02 73 52 41 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 30 20 33 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 52 41 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 00 00 03 4B
```
