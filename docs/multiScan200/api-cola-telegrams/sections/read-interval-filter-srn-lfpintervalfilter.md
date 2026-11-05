# Read Interval Filter [sRN LFPintervalFilter]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Data Reduction

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-interval-filter-srn-lfpintervalfilter

Returns the interval filter settings. The filter reduces the scan output rate by a given factor.

**Telegram structure: sRN LFPintervalFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Interval Filter | String | 17 | | `LFPintervalFilter` | `4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72` |

**Example: sRN LFPintervalFilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFPintervalFilter<ETX>
```

```text
<STX>sRN LFPintervalFilter<ETX>
```

```text
sRN LFPintervalFilter
```

```text
02 73 52 4E 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 52 4E 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 2A
```

```text
73 52 4E 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72
```

**Telegram structure: sRA LFPintervalFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Interval Filter | String | 17 | | `LFPintervalFilter` | `4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72` |
| bEnable | Enables/Disables the filter. | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| uiReductionFactor | Only every nth frame is output where n is given by the value of uiReductionFactor. | Int_32 | 4 | 2 ... 50 | `+2 ... +50` | `00 00 00 02 ... 00 00 00 32` |

**Example: sRA LFPintervalFilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFPintervalFilter{SPC}0{SPC}2<ETX>
```

```text
02 73 52 41 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 20 30 20 32 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 52 41 20 4C 46 50 69 6E 74 65 72 76 61 6C 46 69 6C 74 65 72 20 00 00 00 00 02 07
```
