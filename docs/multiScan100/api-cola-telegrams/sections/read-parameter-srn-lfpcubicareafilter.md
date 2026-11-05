# Read Parameter [sRN LFPcubicareafilter]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Region of Interest

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-parameter-srn-lfpcubicareafilter

Read the current parameter values. The returned parameter block corresponds to the parameters of the matching write command.

**Telegram structure: sRN LFPcubicareafilter**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |
| ------------- | ------------------ | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command type  | Read               | String   | 3      |                    | `sRN`                | `73 52 4E`                                              |
| Command       | LFPcubicareafilter | String   | 18     |                    | `LFPcubicareafilter` | `4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72` |

**Example: sRN LFPcubicareafilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFPcubicareafilter<ETX>
```

```text
<STX>sRN LFPcubicareafilter<ETX>
```

```text
sRN LFPcubicareafilter
```

```text
02 73 52 4E 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 52 4E 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 7C
```

```text
73 52 4E 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72
```

**Example: sRA LFPcubicareafilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFPcubicareafilter{SPC}0{SPC}FFFFB1E0{SPC}4E20{SPC}FFFFB1E0{SPC}4E20{SPC}FFFFB1E0{SPC}4E20<ETX>
```

```text
02 73 52 41 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 20 30 20 46 46 46 46 42 31 45 30 20 34 45 32 30 20 46 46 46 46 42 31 45 30 20 34 45 32 30 20 46 46 46 46 42 31 45 30 20 34 45 32 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 30 73 52 41 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 20 00 FF FF B1 E0 00 00 4E 20 FF FF B1 E0 00 00 4E 20 FF FF B1 E0 00 00 4E 20 6C
```
