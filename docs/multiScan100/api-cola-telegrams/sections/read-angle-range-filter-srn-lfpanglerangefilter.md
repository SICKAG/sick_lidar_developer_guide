# Read Angle Range Filter [sRN LFPangleRangeFilter]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Data Reduction

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-angle-range-filter-srn-lfpanglerangefilter

The angle range Horizontal (theta) and vertical (phi) limits in units of 1/10000 degree.

BeamIncrement = the 'beamIncrement' which is used to subsample the beams within the selected angle range. With a 'beamIncrement' of n only every nth beam from the selected angle range is copied to the output scan, i.e. the angle resolution is reduced by factor n. If the beamIncrement is zero it is set to one.

**Telegram structure: sRN LFPangleRangeFilter**

| Telegram part | Description                                                             | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |
| ------------- | ----------------------------------------------------------------------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type  | Read                                                                    | String   | 3      |                    | `sRN`                 | `73 52 4E`                                                 |
| Command       | Horizontal (theta) and vertical (phi) limits in units of 1/10000 degree | String   | 19     |                    | `LFPangleRangeFilter` | `4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72` |

**Example: sRN LFPangleRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFPangleRangeFilter<ETX>
```

```text
<STX>sRN LFPangleRangeFilter<ETX>
```

```text
sRN LFPangleRangeFilter
```

```text
02 73 52 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 0B
```

```text
73 52 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72
```

**Telegram structure: sRA LFPangleRangeFilter**

| Telegram part   | Description                                                             | Variable | Length | Additional details          | Values CoLa A (ASCII)                                                               | Values CoLa B (Binary)                                                                  |
| --------------- | ----------------------------------------------------------------------- | -------- | ------ | --------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type    | Answer                                                                  | String   | 3      |                             | `sRA`                                                  | `73 52 41`                                                 |
| Command         | Horizontal (theta) and vertical (phi) limits in units of 1/10000 degree | String   | 19     |                             | `LFPangleRangeFilter`                                  | `4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72` |
| Variable Data 1 | Enables/Disables the filter                                             | Bool_1   | 1      | Off:<br>On:                 | `+0d<br>+1d`                                           | `00<br>01`                                                 |
| Variable Data 2 | ThetaStart                                                              | Int_32   | 4      | No impact on sensor setting | `-1,800,000d ... +1,800,000d (FFE488C0 ... 001B7740h)` | `FF E4 88 C0 … 00 1B 77 40`                                |
| Variable Data 3 | ThetaStop                                                               | Int_32   | 4      | No impact on sensor setting | `-1,800,000d ... +1,800,000d (FFE488C0 ... 001B7740h)` | `FF E4 88 C0 … 00 1B 77 40`                                |
| Variable Data 4 | PhiStart                                                                | Int_32   | 4      | No impact on sensor setting | `-900,000d ... +900,000d (FFF24460 ... 000DBBA0h)`     | `FF F2 44 60 … 00 0D BB A0`                                |
| Variable Data 5 | PhiStop                                                                 | Int_32   | 4      | No impact on sensor setting | `-900,000d ... +900,000d (FFF24460 ... 000DBBA0h)`     | `FF F2 44 60 … 00 0D BB A0`                                |
| Variable Data 6 | BeamIncrement                                                           | UInt_16  | 2      | No impact on sensor setting | `1d…+20d`                                              | `00 01 … 00 14`                                            |

The example response has the filter disabled, theta and phi limits of -90° to +90°, and beam increment 1.

**Example: sRA LFPangleRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFPangleRangeFilter{SPC}0{SPC}FFF24460{SPC}DBBA0{SPC}FFF24460{SPC}DBBA0{SPC}1<ETX>
```

```text
02 73 52 41 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 30 20 46 46 46 32 34 34 36 30 20 44 42 42 41 30 20 46 46 46 32 34 34 36 30 20 44 42 42 41 30 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2B 73 52 41 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 00 FF F2 44 60 00 0D BB A0 FF F2 44 60 00 0D BB A0 00 01 25
```
