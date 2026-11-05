# Get Field Evaluation Contour [sMN GetFieldEvaluationContour]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#get-field-evaluation-contour-smn-getfieldevaluationcontour

Read the polygon and the Z limits of a field evaluation.

Required user level: Authorized client.

**Telegram structure: sMN GetFieldEvaluationContour**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Get the region of interest of an object detection evaluation | String | 25 | | `GetFieldEvaluationContour` | `47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| Evaluation ID | Specific ID of the evaluation that is to be changed | Uint_16 | 2 | | `1` | `00 01` |

**Example: sMN GetFieldEvaluationContour - Evaluation 1**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}GetFieldEvaluationContour{SPC}1<ETX>
```

```text
sMN GetFieldEvaluationContour 1
```

```text
02 73 4D 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 4D 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 0D
```

```text
73 4D 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01
```

**Telegram structure: sAN GetFieldEvaluationContour**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Get the region of interest of an object detection evaluation | String | 25 | | `GetFieldEvaluationContour` | `47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| Contour count | Number of returned contours | Uint_16 | 2 | A value of 0 means no contour is configured for the requested ID. | `1` | `00 01` |
| Evaluation ID | Specific ID of the evaluation that is to be changed | Uint_16 | 2 | Range: 1 ... 48 | `1` | `00 01` |
| Amount of polygon vertices | E. g. triangle = 3, square = 4 | Uint_16 | 2 | Range: 0 ... 100 | `4` | `00 04` |
| Polygon vertex | Coordinates of first polygon vertex in mm | Dint_32 | 4 | X coordinate: | `58FCh` | `00 00 58 FC` |
| | | Dint_32 | 4 | Y coordinate: | `1D6h` | `00 00 01 D6` |
| Polygon vertex | Coordinates of second polygon vertex in mm | Dint_32 | 4 | X coordinate: | `3E62h` | `00 00 3E 62` |
| | | Dint_32 | 4 | Y coordinate: | `FFFFDBC0h` | `FF FF DB C0` |
| Polygon vertex | Coordinates of last polygon vertex in mm | Dint_32 | 4 | X coordinate: | `7094h` | `00 00 70 94` |
| | | Dint_32 | 4 | Y coordinate: | `FFFFEE12h` | `FF FF EE 12` |
| Lower Z limit | Lower bound of extrusion in Z direction | Dint_32 | 4 | | `0h` | `00 00 00 00` |
| Upper Z limit | Upper bound of extrusion in Z direction | Dint_32 | 4 | | `11D0h` | `00 00 11 D0` |

**Example: sAN GetFieldEvaluationContour**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}GetFieldEvaluationContour{SPC}1{SPC}1{SPC}4{SPC}32A{SPC}112{SPC}FFFFF95C{SPC}FE{SPC}FFFFF92A{SPC}69E{SPC}2B2{SPC}6A8{SPC}0{SPC}3D0<ETX>
```

```text
02 73 41 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 31 20 31 20 34 20 33 32 41 20 31 31 32 20 46 46 46 46 46 39 35 43 20 46 45 20 46 46 46 46 46 39 32 41 20 36 39 45 20 32 42 32 20 36 41 38 20 30 20 33 44 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4C 73 41 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 01 00 04 00 00 03 2A 00 00 01 12 FF FF F9 5C 00 00 00 FE FF FF F9 2A 00 00 06 9E 00 00 02 B2 00 00 06 A8 00 00 00 00 00 00 03 D0 E3
```
