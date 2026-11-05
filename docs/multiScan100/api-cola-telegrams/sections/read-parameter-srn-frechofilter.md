# Read Parameter [sRN FREchoFilter]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-parameter-srn-frechofilter

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN FREchoFilter**

| Telegram part | Description  | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | ------------ | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Read         | String   | 3      |                    | `sRN`          | `73 52 4E`                            |
| Command       | FREchoFilter | String   | 12     |                    | `FREchoFilter` | `46 52 45 63 68 6F 46 69 6C 74 65 72` |

**Example: sRN FREchoFilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}FREchoFilter<ETX>
```

```text
<STX>sRN FREchoFilter<ETX>
```

```text
sRN FREchoFilter
```

```text
02 73 52 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72 5A
```

```text
73 52 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72
```

**Example: sRA FREchoFilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}FREchoFilter{SPC}1<ETX>
```

```text
02 73 52 41 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 41 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 01 74
```
