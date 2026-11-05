# Read Rotation Offset [sRN RotationOffset]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-rotation-offset-srn-rotationoffset

Returns the rotation center offset (x, y, z in mm) relative to the scanner.

**Telegram structure: sRN RotationOffset**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Rotation Offset | String | 14 | | `RotationOffset` | `52 6F 74 61 74 69 6F 6E 4F 66 66 73 65 74` |

**Example: sRN RotationOffset**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}RotationOffset<ETX>
```

```text
<STX>sRN RotationOffset<ETX>
```

```text
sRN RotationOffset
```

```text
02 73 52 4E 20 52 6F 74 61 74 69 6F 6E 4F 66 66 73 65 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 52 6F 74 61 74 69 6F 6E 4F 66 66 73 65 74 56
```

```text
73 52 4E 20 52 6F 74 61 74 69 6F 6E 4F 66 66 73 65 74
```

**Telegram structure: sRA RotationOffset**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Rotation Offset | String | 14 | | `RotationOffset` | `52 6F 74 61 74 69 6F 6E 4F 66 66 73 65 74` |
| x | in mm | Int_32 | 4 | -100000 ... 100000 | `-100000 ... +100000` | `FF FE 79 60 ... 00 01 86 A0` |
| y | in mm | Int_32 | 4 | -100000 ... 100000 | `-100000 ... +100000` | `FF FE 79 60 ... 00 01 86 A0` |
| z | in mm | Int_32 | 4 | -100000 ... 100000 | `-100000 ... +100000` | `FF FE 79 60 ... 00 01 86 A0` |

**Example: sRA RotationOffset**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}RotationOffset{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 52 6F 74 61 74 69 6F 6E 4F 66 66 73 65 74 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 52 41 20 52 6F 74 61 74 69 6F 6E 4F 66 66 73 65 74 20 00 00 00 00 00 00 00 00 00 00 00 00 79
```
