# Set Field Evaluation Contour [sMN SetFieldEvaluationContour]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-field-evaluation-contour-smn-setfieldevaluationcontour

This telegram describes how to change the polygon coordinates. A predefined polygon is required, setting up a polygon from scratch is not possible.

**Telegram structure: sMN SetFieldEvaluationContour**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Set the region of interest of an object detection evaluation | String | 25 | | `SetFieldEvaluationContour` | `53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| Evaluation ID | Specific ID of the evaluation that is to be changed | UInt_16 | 2 | | `+1d ... +48d (1h ... 30h)` | `00 01 … 00 30` |
| Amount of polygon vertices | E. g. triangle = 3, square = 4 | Uint_16 | 2 | | `+3d ... +100d (3h ... 64h)` | `00 03 ... 00 64` |
| Polygon vertex | Coordinates of first polygon vertex in mm | Dint_32 | 4 | X coordinate: | `-100,000d ... +100,000d (FFFE7960h … 186A0h)` | `FF FE 79 60 … 00 01 86 A0` |
| Polygon vertex | Coordinates of first polygon vertex in mm | Dint_32 | 4 | Y coordinate: | `-100,000d ... +100,000d (FFFE7960h … 186A0h)` | `FF FE 79 60 … 00 01 86 A0` |
| Polygon vertex | Coordinates of second polygon vertex in mm | Dint_32 | 4 | X coordinate: | `-100,000d ... +100,000d (FFFE7960h … 186A0h)` | `FF FE 79 60 … 00 01 86 A0` |
| Polygon vertex | Coordinates of second polygon vertex in mm | Dint_32 | 4 | Y coordinate: | `-100,000d ... +100,000d (FFFE7960h … 186A0h)` | `FF FE 79 60 … 00 01 86 A0` |
| ... | ... | ... | ... | | | |
| Polygon vertex | Coordinates of last polygon vertex in mm | Dint_32 | 4 | X coordinate: | `-100,000d ... +100,000d (FFFE7960h … 186A0h)` | `FF FE 79 60 … 00 01 86 A0` |
| Polygon vertex | Coordinates of last polygon vertex in mm | Dint_32 | 4 | Y coordinate: | `-100,000d ... +100,000d (FFFE7960h … 186A0h)` | `FF FE 79 60 … 00 01 86 A0` |
| Lower Z limit | Lower bound of extrusion in Z direction | Dint_32 | 4 | | `-100,000d ... +100,000d (FFFE7960h … 186A0h)` | `FF FE 79 60 … 00 01 86 A0` |
| Upper Z limit | Upper bound of extrusion in Z direction | Dint_32 | 4 | | `-100,000d ... +100,000d (FFFE7960h … 186A0h)` | `FF FE 79 60 … 00 01 86 A0` |

**Example: sMN SetFieldEvaluationContour – Conversion of an evaluation into a 1 m³ cube**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}SetFieldEvaluationContour{SPC}1{SPC}4{SPC}+1000{SPC}+1000{SPC}-1000{SPC}+1000{SPC}-1000{SPC}-1000{SPC}+1000{SPC}-1000{SPC}-500{SPC}+500<ETX>
```

```text
sMN SetFieldEvaluationContour 1 4 +1000 +1000 -1000 +1000 -1000 -1000 +1000 -1000 -500 +500
```

```text
02 73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 31 20 34 20 2B 31 30 30 30 20 2B 31 30 30 30 20 2D 31 30 30 30 20 2B 31 30 30 30 20 2D 31 30 30 30 20 2D 31 30 30 30 20 2B 31 30 30 30 20 2D 31 30 30 30 20 2D 35 30 30 20 2B 35 30 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4A 73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 04 00 00 03 E8 00 00 03 E8 FF FF FC 18 00 00 03 E8 FF FF FC 18 FF FF FC 18 00 00 03 E8 FF FF FC 18 FF FF FE 0C 00 00 01 F4 1A
```

```text
73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 04 00 00 03 E8 00 00 03 E8 FF FF FC 18 00 00 03 E8 FF FF FC 18 FF FF FC 18 00 00 03 E8 FF FF FC 18 FF FF FE 0C 00 00 01 F4
```

**Telegram structure: sAN SetFieldEvaluationContour**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Set the region of interest of an object detection evaluation | String | 25 | | `SetFieldEvaluationContour` | `53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| State of evaluation conversion | - | Enum_8 | 1 | Conversion successful:<br>Invalid Evaluation:<br>Invalid Polygon:<br>Invalid Z limit: | `0<br>1<br>2<br>3` | `00<br>01<br>02<br>03` |

**Example: sAN SetFieldEvaluationContour – Evaluation conversion successful**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}SetFieldEvaluationContour{SPC}0<ETX>
```

```text
02 73 41 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 41 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 14
```
