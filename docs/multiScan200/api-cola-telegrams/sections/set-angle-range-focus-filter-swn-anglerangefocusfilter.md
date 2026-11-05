# Set Angle Range Focus Filter [sWN angleRangeFocusFilter]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Data Reduction

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-angle-range-focus-filter-swn-anglerangefocusfilter

Restricts streaming data output to a specified 3D field of view. The theta parameters define the azimuth range and the phi parameters define the elevation range. Beams outside these ranges are not transmitted. Within the selected range, subsampling can be applied to reduce data bandwidth. Additionally, a focus region can be defined where full resolution is preserved (no subsampling). This filter only affects raw data streaming and has no effect on object detection.

Required user level: Authorized client.

**Telegram structure: sWN angleRangeFocusFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | Restricts streaming data output to a specified 3D field of view. The theta parameters define the azimuth range and the phi parameters define the elevation range. Beams outside these ranges are not transmitted. Within the selected range, subsampling can be applied to reduce data bandwidth. Additionally, a focus region can be defined where full resolution is preserved (no subsampling). This filter only affects raw data streaming and has no effect on object detection. | String | 21 | | `angleRangeFocusFilter` | `61 6E 67 6C 65 52 61 6E 67 65 46 6F 63 75 73 46 69 6C 74 65 72` |
| enable | Enables/Disables the filter. | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| thetaStart | Lower boundary of the azimuth range. Columns outside this range are not transmitted. | Int_32 | 4 | | `-900000` | `FF F2 44 60` |
| thetaStop | Upper boundary of the azimuth range. Columns outside this range are not transmitted. | Int_32 | 4 | | `+900000` | `00 0D BB A0` |
| phiStart | Lower boundary of the elevation range. Layers outside this range are not transmitted. | Int_32 | 4 | | `-250000` | `FF FC 2F 70` |
| phiStop | Upper boundary of the elevation range. Layers outside this range are not transmitted. | Int_32 | 4 | | `+250000` | `00 03 D0 90` |
| thetaIndexIncrement | The 'thetaIndexIncrement' is used to sub-sample the slots within the selected theta angle range. With a 'thetaIndexIncrement' of n only every n'th slot from the selected angle range is serialized, i.e. the angle resolution is reduced by factor n. | Uint_16 | 2 | | `+1` | `00 01` |
| phiIndexIncrement | The 'phiIndexIncrement' is used to sub-sample the layers within the selected phi angle range. With a 'phiIndex-Increment' of n only every n'th layer from the selected angle range is serialized, i.e. the angle resolution is reduced by factor n. | Uint_16 | 2 | | `+1` | `00 01` |
| enable | Enables/Disables the focus region. In this region, the sub-sampling is not applied. | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| direction | Focus direction: selects whether the focus region spans the vertical or horizontal axis. | Enum_8 | 1 | | `0` | `00` |
| thetaStart | Lower boundary of the azimuth focus range | Int_32 | 4 | | `-450000` | `FF F9 22 30` |
| thetaStop | Upper boundary of the azimuth focus range | Int_32 | 4 | | `+450000` | `00 06 DD D0` |
| phiStart | Lower boundary of the elevation focus range | Int_32 | 4 | | `-100000` | `FF FE 79 60` |
| phiStop | Upper boundary of the elevation focus range | Int_32 | 4 | | `+100000` | `00 01 86 A0` |

**Example: sWN angleRangeFocusFilter - −90° … +90° × −25° … +25°, focus −45° … +45° × −10° … +10°**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}angleRangeFocusFilter{SPC}0{SPC}-900000{SPC}+900000{SPC}-250000{SPC}+250000{SPC}+1{SPC}+1{SPC}0{SPC}0{SPC}-450000{SPC}+450000{SPC}-100000{SPC}+100000<ETX>
```

```text
sWN angleRangeFocusFilter 0 -900000 +900000 -250000 +250000 +1 +1 0 0 -450000 +450000 -100000 +100000
```

```text
02 73 57 4E 20 61 6E 67 6C 65 52 61 6E 67 65 46 6F 63 75 73 46 69 6C 74 65 72 20 30 20 2D 39 30 30 30 30 30 20 2B 39 30 30 30 30 30 20 2D 32 35 30 30 30 30 20 2B 32 35 30 30 30 30 20 2B 31 20 2B 31 20 30 20 30 20 2D 34 35 30 30 30 30 20 2B 34 35 30 30 30 30 20 2D 31 30 30 30 30 30 20 2B 31 30 30 30 30 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 41 73 57 4E 20 61 6E 67 6C 65 52 61 6E 67 65 46 6F 63 75 73 46 69 6C 74 65 72 20 00 FF F2 44 60 00 0D BB A0 FF FC 2F 70 00 03 D0 90 00 01 00 01 00 00 FF F9 22 30 00 06 DD D0 FF FE 79 60 00 01 86 A0 38
```

```text
73 57 4E 20 61 6E 67 6C 65 52 61 6E 67 65 46 6F 63 75 73 46 69 6C 74 65 72 20 00 FF F2 44 60 00 0D BB A0 FF FC 2F 70 00 03 D0 90 00 01 00 01 00 00 FF F9 22 30 00 06 DD D0 FF FE 79 60 00 01 86 A0
```

**Telegram structure: sWA angleRangeFocusFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 21 | | `angleRangeFocusFilter` | `61 6E 67 6C 65 52 61 6E 67 65 46 6F 63 75 73 46 69 6C 74 65 72` |

**Example: sWA angleRangeFocusFilter**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}angleRangeFocusFilter<ETX>
```

```text
02 73 57 41 20 61 6E 67 6C 65 52 61 6E 67 65 46 6F 63 75 73 46 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1A 73 57 41 20 61 6E 67 6C 65 52 61 6E 67 65 46 6F 63 75 73 46 69 6C 74 65 72 20 37
```
