# Set Rotation Offset [sWN RotationOffset]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-rotation-offset-swn-rotationoffset

Sets the rotation center offset (x, y, z in mm) relative to the scanner. This telegram requires at least user level: Authorized Client.

**Telegram structure: sWN RotationOffset**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set Rotation Offset | String | 14 | | `RotationOffset` | `52 6F 74 61 74 69 6F 6E 4F 66 66 73 65 74` |
| x | in mm | Int_32 | 4 | -100000 ... 100000 | `-100000 ... +100000` | `FF FE 79 60 ... 00 01 86 A0` |
| y | in mm | Int_32 | 4 | -100000 ... 100000 | `-100000 ... +100000` | `FF FE 79 60 ... 00 01 86 A0` |
| z | in mm | Int_32 | 4 | -100000 ... 100000 | `-100000 ... +100000` | `FF FE 79 60 ... 00 01 86 A0` |

**Example: sWN RotationOffset**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}RotationOffset{SPC}0{SPC}0{SPC}0<ETX>
```

```text
<STX>sWN RotationOffset 0 0 0<ETX>
```

```text
sWN RotationOffset 0 0 0
```

```text
02 73 57 4E 20 52 6F 74 61 74 69 6F 6E 4F 66 66 73 65 74 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 57 4E 20 52 6F 74 61 74 69 6F 6E 4F 66 66 73 65 74 20 00 00 00 00 00 00 00 00 00 00 00 00 73
```

```text
73 57 4E 20 52 6F 74 61 74 69 6F 6E 4F 66 66 73 65 74 20 00 00 00 00 00 00 00 00 00 00 00 00
```

**Telegram structure: sWA RotationOffset**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set Rotation Offset | String | 14 | | `RotationOffset` | `52 6F 74 61 74 69 6F 6E 4F 66 66 73 65 74` |

**Example: sWA RotationOffset**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}RotationOffset<ETX>
```

```text
02 73 57 41 20 52 6F 74 61 74 69 6F 6E 4F 66 66 73 65 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 41 20 52 6F 74 61 74 69 6F 6E 4F 66 66 73 65 74 20 7C
```
