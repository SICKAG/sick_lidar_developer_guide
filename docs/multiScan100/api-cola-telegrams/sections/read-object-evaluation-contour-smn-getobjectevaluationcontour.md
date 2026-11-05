# Read Object Evaluation Contour [sMN GetObjectEvaluationContour]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Object Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-object-evaluation-contour-smn-getobjectevaluationcontour

This telegram returns the polygon and the Z limits of the region of an object evaluation. Coordinates are in the sensor coordinate system.

**Telegram structure: sMN GetObjectEvaluationContour**

| Telegram part | Description                             | Variable | Length | Additional details | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                                                                       |
| ------------- | --------------------------------------- | -------- | ------ | ------------------ | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Command type  | Method                                  | String   | 3      |                    | `sMN`                        | `73 4D 4E`                                                                      |
| Command       | Read the region of an object evaluation | String   | 26     |                    | `GetObjectEvaluationContour` | `47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| Evaluation ID | ID of the evaluation                    | Uint_16  | 2      |                    | `1 ... +48`                  | `00 01 ... 00 30`                                                               |

**Example: sMN GetObjectEvaluationContour**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}GetObjectEvaluationContour{SPC}1<ETX>
```

```text
sMN GetObjectEvaluationContour 1
```

```text
02 73 4D 4E 20 47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 21 73 4D 4E 20 47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 7A
```

```text
73 4D 4E 20 47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01
```

**Telegram structure: sAN GetObjectEvaluationContour**

| Telegram part              | Description                                    | Variable | Length | Additional details                     | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                                                                       |
| -------------------------- | ---------------------------------------------- | -------- | ------ | -------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Command type               | Answer                                         | String   | 3      |                                        | `sAN`                        | `73 41 4E`                                                                      |
| Command                    | Read the region of an object evaluation        | String   | 26     |                                        | `GetObjectEvaluationContour` | `47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| Number of contours         | 0 if the evaluation does not exist             | Uint_16  | 2      |                                        | `0<br>1`                     | `00 00<br>00 01`                                                                |
| Evaluation ID              | ID of the evaluation                           | Uint_16  | 2      |                                        | `1 ... +48`                  | `00 01 ... 00 30`                                                               |
| Number of polygon vertices | At least 3, at most 100                        | Uint_16  | 2      |                                        | `3 ... +100`                 | `00 03 ... 00 64`                                                               |
| Polygon vertex             | X coordinate of the first vertex in mm         | Int_32   | 4      |                                        | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |
| Polygon vertex             | Y coordinate of the first vertex in mm         | Int_32   | 4      |                                        | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |
| ..                         |                                                |          |        |                                        |                                                           |                                                                                                              |
| Polygon vertex             | X coordinate of the last vertex in mm          | Int_32   | 4      |                                        | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |
| Polygon vertex             | Y coordinate of the last vertex in mm          | Int_32   | 4      |                                        | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |
| Lower Z limit              | Lower bound of the region in Z direction in mm | Int_32   | 4      | Must be less than the upper Z limit    | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |
| Upper Z limit              | Upper bound of the region in Z direction in mm | Int_32   | 4      | Must be greater than the lower Z limit | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |

**Example: sAN GetObjectEvaluationContour**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}GetObjectEvaluationContour{SPC}1{SPC}1{SPC}4{SPC}FFFFFF38{SPC}0{SPC}FFFFFCE0{SPC}64{SPC}FFFFFCE0{SPC}FFFFFE0C{SPC}FFFFFF38{SPC}FFFFFE0C{SPC}C8{SPC}7D0<ETX>
```

```text
02 73 41 4E 20 47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 31 20 31 20 34 20 46 46 46 46 46 46 33 38 20 30 20 46 46 46 46 46 43 45 30 20 36 34 20 46 46 46 46 46 43 45 30 20 46 46 46 46 46 45 30 43 20 46 46 46 46 46 46 33 38 20 46 46 46 46 46 45 30 43 20 43 38 20 37 44 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4D 73 41 4E 20 47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 01 00 04 FF FF FF 38 00 00 00 00 FF FF FC E0 00 00 00 64 FF FF FC E0 FF FF FE 0C FF FF FF 38 FF FF FE 0C 00 00 00 C8 00 00 07 D0 08
```
