# Read Rectangular Filter [sRN LFPcubicareafilter]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Range Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-rectangular-filter-srn-lfpcubicareafilter

Returns the cuboid area filter settings. The cuboid area filter limits the measurement data to a box defined by its extension in the x- and y-axis.

**Telegram structure: sRN LFPcubicareafilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Rectangular Filter | String | 18 | | `LFPcubicareafilter` | `4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72` |

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

**Telegram structure: sRA LFPcubicareafilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Rectangular Filter | String | 18 | | `LFPcubicareafilter` | `4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72` |
| bEnable | Enables/Disables the filter. | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| lXMin | Lower bound of the filter range in x-direction. | Int_32 | 4 | -200000 ... 200000 | `-200000 ... +200000` | `FF FC F2 C0 ... 00 03 0D 40` |
| lXMax | Upper bound of the filter range in x-direction. | Int_32 | 4 | -200000 ... 200000 | `-200000 ... +200000` | `FF FC F2 C0 ... 00 03 0D 40` |
| lYMin | Lower bound of the filter range in y-direction. | Int_32 | 4 | -200000 ... 200000 | `-200000 ... +200000` | `FF FC F2 C0 ... 00 03 0D 40` |
| lYMax | Upper bound of the filter range in y-direction. | Int_32 | 4 | -200000 ... 200000 | `-200000 ... +200000` | `FF FC F2 C0 ... 00 03 0D 40` |
| lZMin | Lower bound of the filter range in z-direction. | Int_32 | 4 | -200000 ... 200000 | `-200000 ... +200000` | `FF FC F2 C0 ... 00 03 0D 40` |
| lZMax | Upper bound of the filter range in z-direction. | Int_32 | 4 | -200000 ... 200000 | `-200000 ... +200000` | `FF FC F2 C0 ... 00 03 0D 40` |

**Example: sRA LFPcubicareafilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFPcubicareafilter{SPC}0{SPC}0{SPC}1388{SPC}FFFFEC78{SPC}1388{SPC}FFFFFFFB{SPC}5<ETX>
```

```text
02 73 52 41 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 20 30 20 30 20 31 33 38 38 20 46 46 46 46 45 43 37 38 20 31 33 38 38 20 46 46 46 46 46 46 46 42 20 35 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 30 73 52 41 20 4C 46 50 63 75 62 69 63 61 72 65 61 66 69 6C 74 65 72 20 00 00 00 00 00 00 00 13 88 FF FF EC 78 00 00 13 88 FF FF FF FB 00 00 00 05 C6
```
