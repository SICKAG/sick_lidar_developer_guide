# Get Field Evaluation Contour [sMN GetFieldEvaluationContour]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#get-field-evaluation-contour-smn-getfieldevaluationcontour

This telegram can be used to read the contour/ polygon of an already defined field.

**Telegram structure: sMN GetFieldEvaluationContour**

| Telegram part | Description                                                  | Variable | Length | Additional details | Values CoLa A (ASCII)                                    | Values CoLa B (Binary)                                                                                    |
| ------------- | ------------------------------------------------------------ | -------- | ------ | ------------------ | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Command type  | Method                                                       | String   | 3      |                    | `sMN`                       | `73 4D 4E`                                                                   |
| Command       | Get the region of interest of an object detection evaluation | String   | 25     |                    | `GetFieldEvaluationContour` | `47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| Evaluation ID | Specific ID of the evaluation that is to be changed          | UInt_16  | 2      |                    | `+1d ... +48d (1h ... 30h)` | `00 01 … 00 30`                                                              |

**Example request: sMN GetFieldEvaluationContour (evaluation ID 1)**

- CoLa A: `<STX>sMN GetFieldEvaluationContour 1<ETX>`
- CoLa A hex: `02 73 4D 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 31 03`
- CoLa B: `02 02 02 02 00 00 00 20 73 4D 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 0D`

**Telegram structure: sAN GetFieldEvaluationContour**

| Telegram part              | Description                                                  | Variable | Length    | Additional details | Values CoLa A (ASCII)                                    | Values CoLa B (Binary)                                                                                    |
| -------------------------- | ------------------------------------------------------------ | -------- | --------- | ------------------ | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Command type               | Answer                                                       | String   | 3         |                    | `sAN`                       | `73 52 41`                                                                   |
| Command                    | Get the region of interest of an object detection evaluation | String   | 25        |                    | `GetFieldEvaluationContour` | `47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| Length of array            |                                                              | Uint_8   | 1         | Always:            | `1`                         | `00 01`                                                                      |
| Evaluation ID              | Specific ID of the evaluation that is to be changed          | UInt_16  | 2         |                    | `1h ... 30h`                | `00 01 … 00 30`                                                              |
| Amount of polygon vertices | E. g. triangle = 3, square = 4                               | Array    | 3 ... 100 |                    | `3h ... 320h`               | `00 03... 03 20`                                                             |
| Polygon vertex             | Coordinates of first polygon vertex in mm                    | Dint_32  | 4         | X coordinate:      | `FFFE2B40h ... 1D4C0h`      | `FF FE 2B 40 … 00 01 D4 C0`                                                  |
| Polygon vertex             | Coordinates of first polygon vertex in mm                    | Dint_32  | 4         | Y coordinate:      | `FFFE2B40h ... 1D4C0h`      | `FF FE 2B 40 … 00 01 D4 C0`                                                  |
| Polygon vertex             | Coordinates of second polygon vertex in mm                   | Dint_32  | 4         | X coordinate:      | `FFFE2B40h ... 1D4C0h`      | `FF FE 2B 40 … 00 01 D4 C0`                                                  |
| Polygon vertex             | Coordinates of second polygon vertex in mm                   | Dint_32  | 4         | Y coordinate:      | `FFFE2B40h ... 1D4C0h`      | `FF FE 2B 40 … 00 01 D4 C0`                                                  |
| ..                         |                                                              |          |           |                    |                                                          |                                                                                                           |
| Polygon vertex             | Coordinates of last polygon vertex in mm                     | Dint_32  | 4         | X coordinate:      | `FFFE2B40h ... 1D4C0h`      | `FF FE 2B 40 … 00 01 D4 C0`                                                  |
| Polygon vertex             | Coordinates of last polygon vertex in mm                     | Dint_32  | 4         | Y coordinate:      | `FFFE2B40h ... 1D4C0h`      | `FF FE 2B 40 … 00 01 D4 C0`                                                  |
| Lower Z limit              | Lower bound of extrusion in Z direction                      | Dint_32  | 4         | Always:            | `0`                         | `00 00 00 00`                                                                |
| Upper Z limit              | Upper bound of extrusion in Z direction                      | Dint_32  | 4         | Always:            | `0`                         | `00 00 00 00`                                                                |

**Example: sAN GetFieldEvaluationContour**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}GetFieldEvaluationContour{SPC}1{SPC}1{SPC}4{SPC}7D0{SPC}3E8{SPC}0{SPC}3E8{SPC}0{SPC}0{SPC}7D0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 41 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 31 20 31 20 34 20 37 44 30 20 33 45 38 20 30 20 33 45 38 20 30 20 30 20 37 44 30 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4C 73 41 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 01 00 04 00 00 07 D0 00 00 03 E8 00 00 00 00 00 00 03 E8 00 00 00 00 00 00 00 00 00 00 07 D0 00 00 00 00 00 00 00 00 00 00 00 00 04
```
