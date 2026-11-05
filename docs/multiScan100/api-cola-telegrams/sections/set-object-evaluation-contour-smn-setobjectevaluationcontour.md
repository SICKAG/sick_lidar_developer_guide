# Set Object Evaluation Contour [sMN SetObjectEvaluationContour]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Object Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#set-object-evaluation-contour-smn-setobjectevaluationcontour

This telegram changes the polygon and the Z limits of the region of an existing object evaluation. The example sets a rectangle from -200 mm to -800 mm in X and from 100 mm to -500 mm in Y, between 200 mm and 2000 mm in Z.

**Telegram structure: sMN SetObjectEvaluationContour**

| Telegram part              | Description                                    | Variable | Length | Additional details                     | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                                                                       |
| -------------------------- | ---------------------------------------------- | -------- | ------ | -------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Command type               | Method                                         | String   | 3      |                                        | `sMN`                        | `73 4D 4E`                                                                      |
| Command                    | Set the region of an object evaluation         | String   | 26     |                                        | `SetObjectEvaluationContour` | `53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| Evaluation ID              | ID of the evaluation                           | Uint_16  | 2      |                                        | `1 ... +48`                  | `00 01 ... 00 30`                                                               |
| Number of polygon vertices | At least 3, at most 100                        | Uint_16  | 2      |                                        | `3 ... +100`                 | `00 03 ... 00 64`                                                               |
| Polygon vertex             | X coordinate of the first vertex in mm         | Int_32   | 4      |                                        | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |
| Polygon vertex             | Y coordinate of the first vertex in mm         | Int_32   | 4      |                                        | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |
| ..                         |                                                |          |        |                                        |                                                           |                                                                                                              |
| Polygon vertex             | X coordinate of the last vertex in mm          | Int_32   | 4      |                                        | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |
| Polygon vertex             | Y coordinate of the last vertex in mm          | Int_32   | 4      |                                        | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |
| Lower Z limit              | Lower bound of the region in Z direction in mm | Int_32   | 4      | Must be less than the upper Z limit    | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |
| Upper Z limit              | Upper bound of the region in Z direction in mm | Int_32   | 4      | Must be greater than the lower Z limit | `-100000 ... +100000`        | `FF FE 79 60 ... 00 01 86 A0`                                                   |

**Example: sMN SetObjectEvaluationContour**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}SetObjectEvaluationContour{SPC}1{SPC}4{SPC}-200{SPC}+0{SPC}-800{SPC}+100{SPC}-800{SPC}-500{SPC}-200{SPC}-500{SPC}+200{SPC}+2000<ETX>
```

```text
sMN SetObjectEvaluationContour 1 4 -200 +0 -800 +100 -800 -500 -200 -500 +200 +2000
```

```text
02 73 4D 4E 20 53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 31 20 34 20 2D 32 30 30 20 2B 30 20 2D 38 30 30 20 2B 31 30 30 20 2D 38 30 30 20 2D 35 30 30 20 2D 32 30 30 20 2D 35 30 30 20 2B 32 30 30 20 2B 32 30 30 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 4B 73 4D 4E 20 53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 04 FF FF FF 38 00 00 00 00 FF FF FC E0 00 00 00 64 FF FF FC E0 FF FF FE 0C FF FF FF 38 FF FF FE 0C 00 00 00 C8 00 00 07 D0 11
```

```text
73 4D 4E 20 53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 01 00 04 FF FF FF 38 00 00 00 00 FF FF FC E0 00 00 00 64 FF FF FC E0 FF FF FE 0C FF FF FF 38 FF FF FE 0C 00 00 00 C8 00 00 07 D0
```

**Telegram structure: sAN SetObjectEvaluationContour**

| Telegram part | Description                            | Variable | Length | Additional details                                                           | Values CoLa A (ASCII)                                     | Values CoLa B (Binary)                                                                                       |
| ------------- | -------------------------------------- | -------- | ------ | ---------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Command type  | Answer                                 | String   | 3      |                                                                              | `sAN`                        | `73 41 4E`                                                                      |
| Command       | Set the region of an object evaluation | String   | 26     |                                                                              | `SetObjectEvaluationContour` | `53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| Error code    | Result of the change                   | Enum_8   | 1      | No error:<br>Invalid evaluation ID:<br>Invalid polygon:<br>Invalid Z limits: | `0<br>1<br>2<br>3`           | `00<br>01<br>02<br>03`                                                          |

**Example: sAN SetObjectEvaluationContour**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}SetObjectEvaluationContour{SPC}0<ETX>
```

```text
02 73 41 4E 20 53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 41 4E 20 53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 63
```
