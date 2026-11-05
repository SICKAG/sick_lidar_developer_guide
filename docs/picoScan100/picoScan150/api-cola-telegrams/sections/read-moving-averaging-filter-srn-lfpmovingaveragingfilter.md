# Read Moving Averaging Filter [sRN LFPmovingAveragingFilter]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-moving-averaging-filter-srn-lfpmovingaveragingfilter

Returns the mean filter settings. This filter smooths the distance value by calculating the arithmetic mean from the configured number of scans (2..4 scans). Points with zero distance are treated as missing values and are not taken into account for averaging. If all distances considered for averaging have the value 0, the result will be 0 as well.

**Telegram structure: sRN LFPmovingAveragingFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Moving Averaging Filter | String | 24 | | `LFPmovingAveragingFilter` | `4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72` |

**Example: sRN LFPmovingAveragingFilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFPmovingAveragingFilter<ETX>
```

```text
<STX>sRN LFPmovingAveragingFilter<ETX>
```

```text
sRN LFPmovingAveragingFilter
```

```text
02 73 52 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 52 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 67
```

```text
73 52 4E 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72
```

**Telegram structure: sRA LFPmovingAveragingFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Moving Averaging Filter | String | 24 | | `LFPmovingAveragingFilter` | `4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72` |
| bEnable | Moving averaging is enabled | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| uiAveragingDepth | averaging depth | Uint_16 | 2 | 2 ... 4 | `2 ... 4` | `00 02 ... 00 04` |

**Example: sRA LFPmovingAveragingFilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFPmovingAveragingFilter{SPC}0{SPC}3<ETX>
```

```text
02 73 52 41 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 30 20 33 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 52 41 20 4C 46 50 6D 6F 76 69 6E 67 41 76 65 72 61 67 69 6E 67 46 69 6C 74 65 72 20 00 00 03 4B
```
