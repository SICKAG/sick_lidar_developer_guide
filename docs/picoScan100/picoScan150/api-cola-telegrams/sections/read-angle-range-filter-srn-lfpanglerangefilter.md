# Read Angle Range Filter [sRN LFPangleRangeFilter]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Data Reduction

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-angle-range-filter-srn-lfpanglerangefilter

The angle range filter set up the horizontal (theta) and vertical (phi) start- and stop angle in rad.

BeamIncrement = the 'beamIncrement' which is used to subsample the beams within the selected angle range. With a 'beamIncrement' of n only every nth beam from the selected angle range is copied to the output scan, i.e. the angle resolution is reduced by factor n. If the beamIncrement is zero it is set to one.

**Telegram structure: sRN LFPangleRangeFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | filter set up the horizontal (theta) and vertical (phi) start- and stop angle in rad | String | 19 | | `LFPangleRangeFilter` | `4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72` |

**Example: sRN LFPangleRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFPangleRangeFilter<ETX>
```

```text
02 73 52 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 0B
```

**Telegram structure: sRA LFP AngleRangeFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | filter set up the horizontal (theta) and vertical (phi) start- and stop angle in rad | String | 19 | | `LFPangleRangeFilter` | `4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72` |
| Variable Data 1 | Enables/Disables the filter | Bool_1 | 1 | Off:<br>On: | `+0d<br>+1d` | `00<br>01` |
| Variable Data 2 | ThetaStart | Real | 4 | No impact on sensor setting | `-1,800,000d ... +1,800,000d (FFE488C0 ... 001B7740h)` | `FF E4 88 C0 … 00 1B 77 40` |
| Variable Data 3 | ThetaStop | Real | 4 | No impact on sensor setting | `-1,800,000d ... +1,800,000d (FFE488C0 ... 001B7740h)` | `FF E4 88 C0 … 00 1B 77 40` |
| Variable Data 4 | PhiStart | Real | 4 | No impact on sensor setting | `-900,000d ... +900,000d (FFF24460 ... 000DBBA0h)` | `FF F2 44 60 … 00 0D BB A0` |
| Variable Data 5 | PhiStop | Real | 4 | No impact on sensor setting | `-900,000d ... +900,000d (FFF24460 ... 000DBBA0h)` | `FF F2 44 60 … 00 0D BB A0` |
| Variable Data 6 | BeamIncrement | UInt_16 | 2 | No impact on sensor setting | `1d…+20d` | `00 01 … 00 14` |

Explanation: Angle range filter enabled and set up theta (horizontal) start -90°, theta stop +90°, phi (vertical) start -90°, phi stop +90°, beam increment 1

**Example: sRA LFPangleRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFPangleRangeFilter{SPC}1{SPC}FFF24460{SPC}DBBA0{SPC}FFF24460{SPC}DBBA0{SPC}1<ETX>
```

```text
<STX>sRA LFPangleRangeFilter 1 FFF24460 DBBA0 FFF24460 DBBA0 1<ETX>
```

```text
sRA LFPangleRangeFilter 1 FFF24460 DBBA0 FFF24460 DBBA0 1
```

```text
02 73 52 41 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 31 20 46 46 46 32 34 34 36 30 20 44 42 42 41 30 20 46 46 46 32 34 34 36 30 20 44 42 42 41 30 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2B 73 52 41 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 01 FF F2 44 60 00 0D BB A0 FF F2 44 60 00 0D BB A0 00 01 24
```

```text
73 52 41 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 01 FF F2 44 60 00 0D BB A0 FF F2 44 60 00 0D BB A0 00 01
```
