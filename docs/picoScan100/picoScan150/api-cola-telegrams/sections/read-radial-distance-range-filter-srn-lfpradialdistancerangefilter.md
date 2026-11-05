# Read Radial Distance Range Filter [sRN LFPradialDistanceRangeFilter]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Range Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-radial-distance-range-filter-srn-lfpradialdistancerangefilter

Returns the scanning range filter settings. Restriction of the distance measurements to a specified distance range. Measurement distances outside of the specified range are assigned the distance and RSSI value 0.

**Telegram structure: sRN LFPradialDistanceRangeFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Radial Distance Range Filter | String | 28 | | `LFPradialDistanceRangeFilter` | `4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72` |

**Example: sRN LFPradialDistanceRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFPradialDistanceRangeFilter<ETX>
```

```text
<STX>sRN LFPradialDistanceRangeFilter<ETX>
```

```text
sRN LFPradialDistanceRangeFilter
```

```text
02 73 52 4E 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 52 4E 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 5A
```

```text
73 52 4E 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72
```

**Telegram structure: sRA LFPradialDistanceRangeFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Radial Distance Range Filter | String | 28 | | `LFPradialDistanceRangeFilter` | `4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72` |
| bEnable | Enables/Disables the filter. | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| ulDistMin | Lower boundary of the distance range. | Int_32 | 4 | 0 ... 200000 mm | `+0 ... +200000` | `00 00 00 00 ... 00 03 0D 40` |
| ulDistMax | Upper boundary of the distance range. | Int_32 | 4 | 0 ... 200000 mm | `+0 ... +200000` | `00 00 00 00 ... 00 03 0D 40` |

**Example: sRA LFPradialDistanceRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFPradialDistanceRangeFilter{SPC}0{SPC}0{SPC}30D40<ETX>
```

```text
02 73 52 41 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 20 30 20 30 20 33 30 44 34 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2A 73 52 41 20 4C 46 50 72 61 64 69 61 6C 44 69 73 74 61 6E 63 65 52 61 6E 67 65 46 69 6C 74 65 72 20 00 00 00 00 00 00 03 0D 40 3B
```
