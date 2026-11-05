# Set Horizontal Field of View Center Angle [sWN horizontalFieldOfViewCenterAngle]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-horizontal-field-of-view-center-angle-swn-horizontalfieldofviewcenterangle

Rotate the horizontal field of view by setting its center angle in 1/10000°: center angle = (stop angle − start angle) / 2.

Required user level: Authorized client.

**Telegram structure: sWN horizontalFieldOfViewCenterAngle**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | Set the orientation of the horizontal field of view, defined by its center angle: horizontalFieldOfViewCenterAngle = (stopAngle - startAngle)/2. | String | 32 | | `horizontalFieldOfViewCenterAngle` | `68 6F 72 69 7A 6F 6E 74 61 6C 46 69 65 6C 64 4F 66 56 69 65 77 43 65 6E 74 65 72 41 6E 67 6C 65` |
| Value | Set the orientation of the horizontal field of view, defined by its center angle: horizontalFieldOfViewCenterAngle = (stopAngle - startAngle)/2. | Int_32 | 4 | | `0` | `00 00 00 00` |

**Example: sWN horizontalFieldOfViewCenterAngle**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}horizontalFieldOfViewCenterAngle{SPC}0<ETX>
```

```text
sWN horizontalFieldOfViewCenterAngle 0
```

```text
02 73 57 4E 20 68 6F 72 69 7A 6F 6E 74 61 6C 46 69 65 6C 64 4F 66 56 69 65 77 43 65 6E 74 65 72 41 6E 67 6C 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 29 73 57 4E 20 68 6F 72 69 7A 6F 6E 74 61 6C 46 69 65 6C 64 4F 66 56 69 65 77 43 65 6E 74 65 72 41 6E 67 6C 65 20 00 00 00 00 58
```

```text
73 57 4E 20 68 6F 72 69 7A 6F 6E 74 61 6C 46 69 65 6C 64 4F 66 56 69 65 77 43 65 6E 74 65 72 41 6E 67 6C 65 20 00 00 00 00
```

**Telegram structure: sWA horizontalFieldOfViewCenterAngle**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 32 | | `horizontalFieldOfViewCenterAngle` | `68 6F 72 69 7A 6F 6E 74 61 6C 46 69 65 6C 64 4F 66 56 69 65 77 43 65 6E 74 65 72 41 6E 67 6C 65` |

**Example: sWA horizontalFieldOfViewCenterAngle**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}horizontalFieldOfViewCenterAngle<ETX>
```

```text
02 73 57 41 20 68 6F 72 69 7A 6F 6E 74 61 6C 46 69 65 6C 64 4F 66 56 69 65 77 43 65 6E 74 65 72 41 6E 67 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 25 73 57 41 20 68 6F 72 69 7A 6F 6E 74 61 6C 46 69 65 6C 64 4F 66 56 69 65 77 43 65 6E 74 65 72 41 6E 67 6C 65 20 57
```
