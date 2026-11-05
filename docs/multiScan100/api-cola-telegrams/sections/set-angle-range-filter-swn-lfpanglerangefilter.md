# Set Angle Range Filter [sWN LFPangleRangeFilter]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Data Reduction

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#set-angle-range-filter-swn-lfpanglerangefilter

The angle range Horizontal (theta) and vertical (phi) limits in units of 1/10000 degree.

BeamIncrement = the 'beamIncrement' which is used to subsample the beams within the selected angle range. With a 'beamIncrement' of n only every nth beam from the selected angle range is copied to the output scan, i.e. the angle resolution is reduced by factor n. If the beamIncrement is zero it is set to one.

**Telegram structure: sWN LFPangleRangeFilter**

| Telegram part   | Description                                                             | Variable | Length | Additional details                                               | Values CoLa A (ASCII)                                                               | Values CoLa B (Binary)                                                                  |
| --------------- | ----------------------------------------------------------------------- | -------- | ------ | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type    | Write                                                                   | String   | 3      |                                                                  | `sWN`                                                  | `73 57 4E`                                                 |
| Command         | Horizontal (theta) and vertical (phi) limits in units of 1/10000 degree | String   | 19     |                                                                  | `LFPangleRangeFilter`                                  | `4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72` |
| Variable Data 1 | Enables/Disables the filter                                             | Bool_1   | 1      | Off:<br>On:                                                      | `+0d<br>+1d`                                           | `00<br>01`                                                 |
| Variable Data 2 | ThetaStart                                                              | Int_32   | 4      | No impact on sensor setting but needs to be filled (see example) | `-1,800,000d ... +1,800,000d (FFE488C0 ... 001B7740h)` | `FF E4 88 C0 … 00 1B 77 40`                                |
| Variable Data 3 | ThetaStop                                                               | Int_32   | 4      | No impact on sensor setting but needs to be filled (see example) | `-1,800,000d ... +1,800,000d (FFE488C0 ... 001B7740h)` | `FF E4 88 C0 … 00 1B 77 40`                                |
| Variable Data 4 | PhiStart                                                                | Int_32   | 4      | No impact on sensor setting but needs to be filled (see example) | `-900,000d ... +900,000d (FFF24460 ... 000DBBA0h)`     | `FF F2 44 60 … 00 0D BB A0`                                |
| Variable Data 5 | PhiStop                                                                 | Int_32   | 4      | No impact on sensor setting but needs to be filled (see example) | `-900,000d ... +900,000d (FFF24460 ... 000DBBA0h)`     | `FF F2 44 60 … 00 0D BB A0`                                |
| Variable Data 6 | BeamIncrement                                                           | UInt_16  | 2      | No impact on sensor setting but needs to be filled (see example) | `1d…+20d`                                              | `00 01 … 00 14`                                            |

Explanation: Enable the angle range filter and set up theta (horizontal) start -90°, theta stop +90°, phi (vertical) start -90°, phi stop +90°, beam increment 1

**Example: sWN LFPangleRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LFPangleRangeFilter{SPC}0{SPC}FFF24460{SPC}DBBA0{SPC}FFF24460{SPC}DBBA0{SPC}1<ETX>
```

```text
sWN LFPangleRangeFilter 0 FFF24460 DBBA0 FFF24460 DBBA0 1
```

```text
02 73 57 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 30 20 46 46 46 32 34 34 36 30 20 44 42 42 41 30 20 46 46 46 32 34 34 36 30 20 44 42 42 41 30 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2B 73 57 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 00 FF F2 44 60 00 0D BB A0 FF F2 44 60 00 0D BB A0 00 01 2F
```

```text
73 57 4E 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 00 FF F2 44 60 00 0D BB A0 FF F2 44 60 00 0D BB A0 00 01
```

**Telegram structure: sWA LFP AngleRangeFilter**

| Telegram part | Description                                                             | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |
| ------------- | ----------------------------------------------------------------------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type  | Answer                                                                  | String   | 3      |                    | `sWA`                 | `73 57 41`                                                 |
| Command       | Horizontal (theta) and vertical (phi) limits in units of 1/10000 degree | String   | 19     |                    | `LFPangleRangeFilter` | `4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72` |

**Example: sWA LFPangleRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LFPangleRangeFilter<ETX>
```

```text
02 73 57 41 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 57 41 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 21
```

**Telegram structure: sWA LFPangleRangeFilter**

| Telegram part | Description        | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |
| ------------- | ------------------ | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type  | Answer             | String   | 3      |                    | `sWA`                 | `73 57 41`                                                 |
| Command       | Angle range filter | String   | 19     |                    | `LFPangleRangeFilter` | `4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72` |

**Example: sWA LFPangleRangeFilter**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LFPangleRangeFilter<ETX>
```

```text
02 73 57 41 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 57 41 20 4C 46 50 61 6E 67 6C 65 52 61 6E 67 65 46 69 6C 74 65 72 20 21
```
