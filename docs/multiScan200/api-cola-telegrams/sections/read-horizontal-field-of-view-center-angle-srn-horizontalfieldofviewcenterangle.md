# Read Horizontal Field of View Center Angle [sRN horizontalFieldOfViewCenterAngle]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-horizontal-field-of-view-center-angle-srn-horizontalfieldofviewcenterangle

Returns the horizontal field of view center angle.

**Telegram structure: sRN horizontalFieldOfViewCenterAngle**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Horizontal Field of View Center Angle | String | 32 | | `horizontalFieldOfViewCenterAngle` | `68 6F 72 69 7A 6F 6E 74 61 6C 46 69 65 6C 64 4F 66 56 69 65 77 43 65 6E 74 65 72 41 6E 67 6C 65` |

**Example: sRN horizontalFieldOfViewCenterAngle**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}horizontalFieldOfViewCenterAngle<ETX>
```

```text
<STX>sRN horizontalFieldOfViewCenterAngle<ETX>
```

```text
sRN horizontalFieldOfViewCenterAngle
```

```text
02 73 52 4E 20 68 6F 72 69 7A 6F 6E 74 61 6C 46 69 65 6C 64 4F 66 56 69 65 77 43 65 6E 74 65 72 41 6E 67 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 24 73 52 4E 20 68 6F 72 69 7A 6F 6E 74 61 6C 46 69 65 6C 64 4F 66 56 69 65 77 43 65 6E 74 65 72 41 6E 67 6C 65 7D
```

```text
73 52 4E 20 68 6F 72 69 7A 6F 6E 74 61 6C 46 69 65 6C 64 4F 66 56 69 65 77 43 65 6E 74 65 72 41 6E 67 6C 65
```

**Telegram structure: sRA horizontalFieldOfViewCenterAngle**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Horizontal Field of View Center Angle | String | 32 | | `horizontalFieldOfViewCenterAngle` | `68 6F 72 69 7A 6F 6E 74 61 6C 46 69 65 6C 64 4F 66 56 69 65 77 43 65 6E 74 65 72 41 6E 67 6C 65` |
| horizontalFieldOfViewCenterAngle | Set the orientation of the horizontal field of view, defined by its center angle: horizontalFieldOfViewCenterAngle = (stopAngle - startAngle)/2. | Int_32 | 4 | -1790000 ... 1800000 1/10000° | `-1790000 ... +1800000` | `FF E4 AF D0 ... 00 1B 77 40` |

**Example: sRA horizontalFieldOfViewCenterAngle**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}horizontalFieldOfViewCenterAngle{SPC}0<ETX>
```

```text
02 73 52 41 20 68 6F 72 69 7A 6F 6E 74 61 6C 46 69 65 6C 64 4F 66 56 69 65 77 43 65 6E 74 65 72 41 6E 67 6C 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 29 73 52 41 20 68 6F 72 69 7A 6F 6E 74 61 6C 46 69 65 6C 64 4F 66 56 69 65 77 43 65 6E 74 65 72 41 6E 67 6C 65 20 00 00 00 00 52
```
