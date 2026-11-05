# Read Mean Filter [sRN LFPmeanfilter]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-mean-filter-srn-lfpmeanfilter

Returns the mean filter settings. This filter smooths the distance value by calculating the arithmetic mean from the configured number of scans.

**Telegram structure: sRN LFPmeanfilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Mean Filter | String | 13 | | `LFPmeanfilter` | `4C 46 50 6D 65 61 6E 66 69 6C 74 65 72` |

**Example: sRN LFPmeanfilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFPmeanfilter<ETX>
```

```text
<STX>sRN LFPmeanfilter<ETX>
```

```text
sRN LFPmeanfilter
```

```text
02 73 52 4E 20 4C 46 50 6D 65 61 6E 66 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 4E 20 4C 46 50 6D 65 61 6E 66 69 6C 74 65 72 12
```

```text
73 52 4E 20 4C 46 50 6D 65 61 6E 66 69 6C 74 65 72
```

**Telegram structure: sRA LFPmeanfilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Mean Filter | String | 13 | | `LFPmeanfilter` | `4C 46 50 6D 65 61 6E 66 69 6C 74 65 72` |
| bEnable | mean filter is enRAabled | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| uiScanNumber | number of averaging scans | Uint_16 | 2 | 2 ... 100 | `2 ... 64` | `00 02 ... 00 64` |
| eFilterMethod | method of average calculation (arithmetic, moving,..) | Enum_8 | 1 | ARITHMETIC: | `0` | `00` |

**Example: sRA LFPmeanfilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFPmeanfilter{SPC}0{SPC}A{SPC}0<ETX>
```

```text
02 73 52 41 20 4C 46 50 6D 65 61 6E 66 69 6C 74 65 72 20 30 20 41 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 52 41 20 4C 46 50 6D 65 61 6E 66 69 6C 74 65 72 20 00 00 0A 00 37
```
