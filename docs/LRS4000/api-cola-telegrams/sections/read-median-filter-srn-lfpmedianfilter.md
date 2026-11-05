# Read Median Filter [sRN LFPmedianfilter]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-median-filter-srn-lfpmedianfilter

Returns the median filter settings. This filter smooths the distance values by transmitting just the median value of the last X scans.

**Telegram structure: sRN LFPmedianfilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Median Filter | String | 15 | | `LFPmedianfilter` | `4C 46 50 6D 65 64 69 61 6E 66 69 6C 74 65 72` |

**Example: sRN LFPmedianfilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFPmedianfilter<ETX>
```

```text
<STX>sRN LFPmedianfilter<ETX>
```

```text
sRN LFPmedianfilter
```

```text
02 73 52 4E 20 4C 46 50 6D 65 64 69 61 6E 66 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 4E 20 4C 46 50 6D 65 64 69 61 6E 66 69 6C 74 65 72 1F
```

```text
73 52 4E 20 4C 46 50 6D 65 64 69 61 6E 66 69 6C 74 65 72
```

**Telegram structure: sRA LFPmedianfilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Median Filter | String | 15 | | `LFPmedianfilter` | `4C 46 50 6D 65 64 69 61 6E 66 69 6C 74 65 72` |
| bEnable | median filter enable flag | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| uiMedianWidth | number of averaging scans | Uint_16 | 2 | 3 ... 3 | `3 ... 3` | `00 03 ... 00 03` |

**Example: sRA LFPmedianfilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFPmedianfilter{SPC}0{SPC}3<ETX>
```

```text
02 73 52 41 20 4C 46 50 6D 65 64 69 61 6E 66 69 6C 74 65 72 20 30 20 33 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 41 20 4C 46 50 6D 65 64 69 61 6E 66 69 6C 74 65 72 20 00 00 03 33
```
