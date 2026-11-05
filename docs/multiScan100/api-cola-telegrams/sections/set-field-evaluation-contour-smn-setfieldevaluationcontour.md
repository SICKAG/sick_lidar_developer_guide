# Set Field Evaluation Contour [sMN SetFieldEvaluationContour]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#set-field-evaluation-contour-smn-setfieldevaluationcontour

This telegram can be used to change or reshape the contour/ polygon of an already defined field. It´s possible to add additional points.

**Telegram structure: sMN SetFieldEvaluationContour**

| Telegram part              | Description                                                  | Variable | Length | Additional details                        | Values CoLa A (ASCII)                                                       | Values CoLa B (Binary)                                                                                    |
| -------------------------- | ------------------------------------------------------------ | -------- | ------ | ----------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Command type               | Method                                                       | String   | 3      |                                           | `sMN`                                          | `73 4D 4E`                                                                   |
| Command                    | Set the region of interest of an object detection evaluation | String   | 25     |                                           | `SetFieldEvaluationContour`                    | `53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| Evaluation ID              | Specific ID of the evaluation that is to be changed          | UInt_16  | 2      |                                           | `+1d ... +48d (1h ... 30h)`                    | `00 01 … 00 30`                                                              |
| Amount of polygon vertices | E. g. triangle = 3, square = 4                               | Uint_16  | 2      |                                           | `+3d ... +800d (3h ... 320h)`                  | `00 03... 03 20`                                                             |
| Polygon vertex             | Coordinates of first polygon vertex in mm                    | Dint_32  | 4      | X coordinate:                             | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |
| Polygon vertex             | Coordinates of first polygon vertex in mm                    | Dint_32  | 4      | Y coordinate:                             | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |
| Polygon vertex             | Coordinates of second polygon vertex in mm                   | Dint_32  | 4      | X coordinate:                             | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |
| Polygon vertex             | Coordinates of second polygon vertex in mm                   | Dint_32  | 4      | Y coordinate:                             | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |
| ..                         |                                                              |          |        |                                           |                                                                             |                                                                                                           |
| Polygon vertex             | Coordinates of last polygon vertex in mm                     | Dint_32  | 4      | X coordinate:                             | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |
| Polygon vertex             | Coordinates of last polygon vertex in mm                     | Dint_32  | 4      | Y coordinate:                             | `-120,000d ... +120,000d (FFFE2B40h … 1D4C0h)` | `FF FE 2B 40 … 00 01 D4 C0`                                                  |
| Lower Z limit              | Lower bound of extrusion in Z direction                      | Dint_32  | 4      | Lower limit must be less than upper limit | `-100000 ... +100000`                          | `FF FE 79 60 ... 00 01 86 A0`                                                |
| Upper Z limit              | Upper bound of extrusion in Z direction                      | Dint_32  | 4      | Lower limit must be less than upper limit | `-100000 ... +100000`                          | `FF FE 79 60 ... 00 01 86 A0`                                                |

**Example: sMN SetFieldEvaluationContour**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}SetFieldEvaluationContour{SPC}1{SPC}4{SPC}+2000{SPC}+1000{SPC}+0{SPC}+1000{SPC}+0{SPC}+0{SPC}+2000{SPC}+0{SPC}+0{SPC}+1000<ETX>
```

```text
sMN SetFieldEvaluationContour 1 4 +2000 +1000 +0 +1000 +0 +0 +2000 +0 +0 +1000
```

```text
02 73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 31 20 34 20 2B 32 30 30 30 20 2B 31 30 30 30 20 2B 30 20 2B 31 30 30 30 20 2B 30 20 2B 30 20 2B 32 30 30 30 20 2B 30 20 2B 30 20 2B 31 30 30 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4A 73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 04 00 00 07 D0 00 00 03 E8 00 00 00 00 00 00 03 E8 00 00 00 00 00 00 00 00 00 00 07 D0 00 00 00 00 00 00 00 00 00 00 03 E8 F6
```

```text
73 4D 4E 20 53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 04 00 00 07 D0 00 00 03 E8 00 00 00 00 00 00 03 E8 00 00 00 00 00 00 00 00 00 00 07 D0 00 00 00 00 00 00 00 00 00 00 03 E8
```

**Telegram structure: sAN SetFieldEvaluationContour**

| Telegram part                  | Description                                                  | Variable | Length | Additional details                                                                    | Values CoLa A (ASCII)                                    | Values CoLa B (Binary)                                                                                    |
| ------------------------------ | ------------------------------------------------------------ | -------- | ------ | ------------------------------------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Command type                   | Answer                                                       | String   | 3      |                                                                                       | `sAN`                       | `73 41 4E`                                                                   |
| Command                        | Set the region of interest of an object detection evaluation | String   | 25     |                                                                                       | `SetFieldEvaluationContour` | `53 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| State of evaluation conversion | -                                                            | Enum_8   | 1      | Conversion successful:<br>Invalid Evaluation:<br>Invalid Polygon:<br>Invalid Z limit: | `0<br>1<br>2<br>3`          | `00<br>01<br>02<br>03`                                                       |

**Example: sAN SetFieldEvaluationContour**

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
