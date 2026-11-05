# Read Parameter [sRN LFPlayerFilter]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Data Reduction

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-parameter-srn-lfplayerfilter

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LFPlayerFilter**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Read           | String   | 3      |                    | `sRN`            | `73 52 4E`                                  |
| Command       | LFPlayerFilter | String   | 14     |                    | `LFPlayerFilter` | `4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72` |

**Example: sRN LFPlayerFilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFPlayerFilter<ETX>
```

```text
<STX>sRN LFPlayerFilter<ETX>
```

```text
sRN LFPlayerFilter
```

```text
02 73 52 4E 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 56
```

```text
73 52 4E 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72
```

**Example: sRA LFPlayerFilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFPlayerFilter{SPC}0{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1<ETX>
```

```text
02 73 52 41 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 20 30 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 24 73 52 41 20 4C 46 50 6C 61 79 65 72 46 69 6C 74 65 72 20 00 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 79
```
