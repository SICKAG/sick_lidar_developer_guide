# Read Parameter [sRN LFPparticle]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-parameter-srn-lfpparticle

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LFPparticle**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                      | Values CoLa B (Binary)                                          |
| ------------- | ----------- | -------- | ------ | ------------------ | ------------------------------------------ | --------------------------------------------------------------- |
| Command type  | Read        | String   | 3      |                    | `sRN`         | `73 52 4E`                         |
| Command       | LFPparticle | String   | 11     |                    | `LFPparticle` | `4C 46 50 70 61 72 74 69 63 6C 65` |

**Example: sRN LFPparticle**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFPparticle<ETX>
```

```text
<STX>sRN LFPparticle<ETX>
```

```text
sRN LFPparticle
```

```text
02 73 52 4E 20 4C 46 50 70 61 72 74 69 63 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 4C 46 50 70 61 72 74 69 63 6C 65 01
```

```text
73 52 4E 20 4C 46 50 70 61 72 74 69 63 6C 65
```

**Example: sRA LFPparticle**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFPparticle{SPC}0{SPC}1F4<ETX>
```

```text
02 73 52 41 20 4C 46 50 70 61 72 74 69 63 6C 65 20 30 20 31 46 34 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 4C 46 50 70 61 72 74 69 63 6C 65 20 00 01 F4 DB
```
