# Read Parameter [sRN TSCTCSrvAddr]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Date and System Time

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-parameter-srn-tsctcsrvaddr

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN TSCTCSrvAddr**

| Telegram part | Description  | Variable | Length | Additional details | Values CoLa A (ASCII)                       | Values CoLa B (Binary)                                             |
| ------------- | ------------ | -------- | ------ | ------------------ | ------------------------------------------- | ------------------------------------------------------------------ |
| Command type  | Read         | String   | 3      |                    | `sRN`          | `73 52 4E`                            |
| Command       | TSCTCSrvAddr | String   | 12     |                    | `TSCTCSrvAddr` | `54 53 43 54 43 53 72 76 41 64 64 72` |

**Example: sRN TSCTCSrvAddr**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}TSCTCSrvAddr<ETX>
```

```text
<STX>sRN TSCTCSrvAddr<ETX>
```

```text
sRN TSCTCSrvAddr
```

```text
02 73 52 4E 20 54 53 43 54 43 53 72 76 41 64 64 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 4E 20 54 53 43 54 43 53 72 76 41 64 64 72 78
```

```text
73 52 4E 20 54 53 43 54 43 53 72 76 41 64 64 72
```

**Example: sRA TSCTCSrvAddr**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}TSCTCSrvAddr{SPC}C0{SPC}A8{SPC}0{SPC}B<ETX>
```

```text
02 73 52 41 20 54 53 43 54 43 53 72 76 41 64 64 72 20 43 30 20 41 38 20 30 20 42 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 52 41 20 54 53 43 54 43 53 72 76 41 64 64 72 20 C0 A8 00 0B 34
```
