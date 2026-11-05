# Read Parameter [sRN LFPradialDistanceRangeFilter]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Region of Interest

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-parameter-srn-lfpradialdistancerangefilter

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LFPradialDistanceRangeFilter**

| Telegram part | Description                  | Variable | Length | Additional details | Values CoLa A (ASCII)                                       | Values CoLa B (Binary)                                                                                             |
| ------------- | ---------------------------- | -------- | ------ | ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Command type  | Read                         | String   | 3      |                    | `sRN`                          | `73 52 4E`                                                                            |
| Command       | LFPradialDistanceRangeFilter | String   | 28     |                    | `LFPradialDistanceRangeFilter` | `4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72` |

**Example: sRN LFPradialDistanceRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFPradialDistanceRangeFilter<ETX>
```

```text
<STX>sRN LFPradialDistanceRangeFilter<ETX>
```

```text
sRN LFPradialDistanceRangeFilter
```

```text
02 73 52 4E 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 52 4E 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 5A
```

```text
73 52 4E 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72
```

**Example: sRA LFPradialDistanceRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFPradialDistanceRangeFilter{SPC}0{SPC}0{SPC}4E20<ETX>
```

```text
02 73 52 41 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 20 30 20 30 20 34 45 32 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2A 73 52 41 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 20 00 00 00 00 00 00 00 4E 20 1B
```
