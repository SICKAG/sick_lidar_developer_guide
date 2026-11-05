# Read Scan Output Angles [sRN LMPoutputRange]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-scan-output-angles-srn-lmpoutputrange

Read the active output range. The example shows 0.5 degree angular resolution and an output range of -180 to +180 degrees.

**Telegram structure: sRN LMPoutputRange**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Read           | String   | 3      |                    | `sRN`            | `73 52 4E`                                  |
| Command       | LMPoutputRange | String   | 14     |                    | `LMPoutputRange` | `4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65` |

**Example: sRN LMPoutputRange**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LMPoutputRange<ETX>
```

```text
<STX>sRN LMPoutputRange<ETX>
```

```text
sRN LMPoutputRange
```

```text
02 73 52 4E 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 5E
```

```text
73 52 4E 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65
```

**Telegram structure: sRA LMPoutputRange**

| Telegram part      | Description             | Variable | Length | Additional details                             | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                   |
| ------------------ | ----------------------- | -------- | ------ | ---------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------ |
| Command type       | Answer                  | String   | 3      |                                                | `sRA`                 | `73 52 41`                                  |
| Command            | LMPoutputRange          | String   | 14     |                                                | `LMPoutputRange`      | `4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65` |
| Reserved           | Single output range     | Int_16   | 2      | Always 1                                       | `1`                   | `00 01`                                     |
| Angular resolution | Units of 1/10000 degree | Uint_32  | 4      | Read from scan configuration; not changed here | `1388 (0.5 degree)`   | `00 00 13 88`                               |
| Start angle        | Units of 1/10000 degree | Int_32   | 4      | -180 to +180 degrees                           | `FFE488C0 ... 1B7740` | `FF E4 88 C0 ... 00 1B 77 40`               |
| Stop angle         | Units of 1/10000 degree | Int_32   | 4      | -180 to +180 degrees                           | `FFE488C0 ... 1B7740` | `FF E4 88 C0 ... 00 1B 77 40`               |

**Example: sRA LMPoutputRange**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LMPoutputRange{SPC}1{SPC}1388{SPC}FFE488C0{SPC}1B7740<ETX>
```

```text
02 73 52 41 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 31 20 31 33 38 38 20 46 46 45 34 38 38 43 30 20 31 42 37 37 34 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 21 73 52 41 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 00 01 00 00 13 88 FF E4 88 C0 00 1B 77 40 94
```
