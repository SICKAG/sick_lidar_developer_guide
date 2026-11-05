# Set Rectangular Filter [sWN LFPcubicareafilter]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Range Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-rectangular-filter-swn-lfpcubicareafilter

**Telegram structure: sWN LFPcubicareafilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | CubicAreaFilter limits a polar scan to a axisparallel cube | String | 18 | | `LFPcubicareafilter` | `4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72` |
| Variable data 1 | Enables/Disables the filter. | Bool | 1 | Off:<br>On: | `0d<br>1d` | `00<br>01` |
| Variable Data 2 | X min<br>1/10 mm | Int_32 | 4 | | `-200000d…+200000d` | `FF FF B1 E0 … 00 00 4E 20` |
| Variable Data 3 | X max<br>1/10 mm | Int_32 | 4 | | `-200000d…+200000d` | `FF FF B1 E0 … 00 00 4E 20` |
| Variable Data 4 | Y min<br>1/10 mm | Int_32 | 4 | | `-200000d…+200000d` | `FF FF B1 E0 … 00 00 4E 20` |
| Variable Data 5 | Y max<br>1/10 mm | Int_32 | 4 | | `-200000d…+200000d` | `FF FF B1 E0 … 00 00 4E 20` |
| Variable Data 6 | Z min<br>1/10 mm | Int_32 | 4 | Other values than 0 will be ignored | `0` | `00 00 00 00` |
| Variable Data 7 | Z max<br>1/10 mm | Int_32 | 4 | Other values than 0 will be ignored | `0` | `00 00 00 00` |

**Example: sWN LFPcubicAreafilter**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LFPcubicareafilter{SPC}0{SPC}FFFFB1E0{SPC}4E20{SPC}FFFFB1E0{SPC}4E20{SPC}FFFFB1E0{SPC}4E20<ETX>
```

```text
<STX>sWN LFPcubicareafilter 0 FFFFB1E0 4E20 FFFFB1E0 4E20 FFFFB1E0 4E20<ETX>
```

```text
sWN LFPcubicareafilter 0 FFFFB1E0 4E20 FFFFB1E0 4E20 FFFFB1E0 4E20
```

```text
02 73 57 4E 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 20 30 20 46 46 46 46 42 31 45 30 20 34 45 32 30 20 46 46 46 46 42 31 45 30 20 34 45 32 30 20 46 46 46 46 42 31 45 30 20 34 45 32 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 30 73 57 4E 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 20 00 FF FF B1 E0 00 00 4E 20 FF FF B1 E0 00 00 4E 20 FF FF B1 E0 00 00 4E 20 66
```

```text
73 57 4E 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 20 00 FF FF B1 E0 00 00 4E 20 FF FF B1 E0 00 00 4E 20 FF FF B1 E0 00 00 4E 20
```

**Telegram structure: sWA LFPcubicareafilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | CubicAreaFilter limits a polar scan to a axisparallel cube | String | 18 | | `LFPcubicareafilter` | `4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72` |

**Example: sWA LFPcubicareafilter**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LFPcubicareafilter<ETX>
```

```text
02 73 57 41 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 57 41 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 20 56
```
