# Configure Scan Output Angles [sWN LMPoutputRange]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#configure-scan-output-angles-swn-lmpoutputrange

Select the scan output start and stop angles (manual pages 124-126). Angular resolution is taken from the scan configuration. This example uses 0.5 degree and -90 to +90 degrees.

Requires Authorized client.

**Telegram structure: sWN LMPoutputRange**

| Telegram part      | Description             | Variable | Length | Additional details                             | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                   |
| ------------------ | ----------------------- | -------- | ------ | ---------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------ |
| Command type       | Write                   | String   | 3      |                                                | `sWN`                 | `73 57 4E`                                  |
| Command            | LMPoutputRange          | String   | 14     |                                                | `LMPoutputRange`      | `4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65` |
| Reserved           | Single output range     | Int_16   | 2      | Always 1                                       | `1`                   | `00 01`                                     |
| Angular resolution | Units of 1/10000 degree | Uint_32  | 4      | Read from scan configuration; not changed here | `1388 (0.5 degree)`   | `00 00 13 88`                               |
| Start angle        | Units of 1/10000 degree | Int_32   | 4      | -180 to +180 degrees                           | `FFE488C0 ... 1B7740` | `FF E4 88 C0 ... 00 1B 77 40`               |
| Stop angle         | Units of 1/10000 degree | Int_32   | 4      | -180 to +180 degrees                           | `FFE488C0 ... 1B7740` | `FF E4 88 C0 ... 00 1B 77 40`               |

**Example: sWN LMPoutputRange**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LMPoutputRange{SPC}1{SPC}1388{SPC}FFF24460{SPC}DBBA0<ETX>
```

```text
sWN LMPoutputRange 1 1388 FFF24460 DBBA0
```

```text
02 73 57 4E 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 31 20 31 33 38 38 20 46 46 46 32 34 34 36 30 20 44 42 42 41 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 21 73 57 4E 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 00 01 00 00 13 88 FF F2 44 60 00 0D BB A0 DE
```

```text
73 57 4E 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 00 01 00 00 13 88 FF F2 44 60 00 0D BB A0
```

**Telegram structure: sWA LMPoutputRange**

| Telegram part | Description    | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | -------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Answer         | String   | 3      |                    | `sWA`            | `73 57 41`                                  |
| Command       | LMPoutputRange | String   | 14     |                    | `LMPoutputRange` | `4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65` |

**Example: sWA LMPoutputRange**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LMPoutputRange<ETX>
```

```text
02 73 57 41 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 41 20 4C 4D 50 6F 75 74 70 75 74 52 61 6E 67 65 20 74
```
