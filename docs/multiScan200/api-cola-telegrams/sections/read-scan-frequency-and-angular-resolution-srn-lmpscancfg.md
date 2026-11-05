# Read Scan Frequency and Angular Resolution [sRN LMPscancfg]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-scan-frequency-and-angular-resolution-srn-lmpscancfg

Read the scanning frequency, the angular resolution, and the angular range of the active scan configuration. The values apply before any filter.

**Telegram structure: sRN LMPscancfg**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Info of scan frequency and angular resolution | String | 10 | | `LMPscancfg` | `4C 4D 50 73 63 61 6E 63 66 67` |

**Example: sRN LMPscancfg**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LMPscancfg<ETX>
```

```text
sRN LMPscancfg
```

```text
02 73 52 4E 20 4C 4D 50 73 63 61 6E 63 66 67 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 52 4E 20 4C 4D 50 73 63 61 6E 63 66 67 63
```

```text
73 52 4E 20 4C 4D 50 73 63 61 6E 63 66 67
```

**Telegram structure: sRA LMPscancfg**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Info of scan frequency and angular resolution | String | 10 | | `LMPscancfg` | `4C 4D 50 73 63 61 6E 63 66 67` |
| Scan frequency | In 1/100 Hz | Uint_32 | 4 | 20 Hz: | `7D0` | `00 00 07 D0` |
| Reserved | - | Int_16 | 2 | Always: | `1` | `00 01` |
| Theta angular resolution | Horizontal angular resolution in 1/10000° | Uint_32 | 4 | 0.4662°: | `1236` | `00 00 12 36` |
| Theta start angle | In 1/10000° | Int_32 | 4 | −138°: | `FFEAF160` | `FF EA F1 60` |
| Theta stop angle | In 1/10000° | Int_32 | 4 | +138°: | `150EA0` | `00 15 0E A0` |
| Phi angular resolution | Vertical angular resolution in 1/10000° | Uint_32 | 4 | 0.4688°: | `1250` | `00 00 12 50` |
| Phi start angle | In 1/10000° | Int_32 | 4 | −22.5°: | `FFFC9118` | `FF FC 91 18` |
| Phi stop angle | In 1/10000° | Int_32 | 4 | +22.5°: | `36EE8` | `00 03 6E E8` |

**Example: sRA LMPscancfg**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LMPscancfg{SPC}7D0{SPC}1{SPC}1236{SPC}FFEAF160{SPC}150EA0{SPC}928{SPC}FFFC9118{SPC}36EE8<ETX>
```

```text
02 73 52 41 20 4C 4D 50 73 63 61 6E 63 66 67 20 37 44 30 20 31 20 31 32 33 36 20 46 46 45 41 46 31 36 30 20 31 35 30 45 41 30 20 39 32 38 20 46 46 46 43 39 31 31 38 20 33 36 45 45 38 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2D 73 52 41 20 4C 4D 50 73 63 61 6E 63 66 67 20 00 00 07 D0 00 01 00 00 12 36 FF EA F1 60 00 15 0E A0 00 00 09 28 FF FC 91 18 00 03 6E E8 AF
```
