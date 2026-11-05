# Get Field Evaluation Contour [sMN GetFieldEvaluationContour]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#get-field-evaluation-contour-smn-getfieldevaluationcontour

Returns the contour of an existing field. This telegram requires at least user level: Authorized Client.

**Telegram structure: sMN GetFieldEvaluationContour**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Get Field Evaluation Contour | String | 25 | | `GetFieldEvaluationContour` | `47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| EvaluationId | ID of the evaluation | Uint_16 | 2 | 0 ... 65535 | `0 ... FFFF` | `00 00 ... FF FF` |

**Example: sMN GetFieldEvaluationContour**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}GetFieldEvaluationContour{SPC}1<ETX>
```

```text
<STX>sMN GetFieldEvaluationContour 1<ETX>
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
| Command | Get Field Evaluation Contour | String | 25 | | `GetFieldEvaluationContour` | `47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72` |
| Contour length | Number of Contour elements (max. 1) | Uint_16 | 2 | | `0 ... 1` | `00 00 ... 00 01` |
| Contour[].EvaluationId | ID of the evaluation (repeated once per element) | Uint_16 | 2 | 0 ... 65535 | `0 ... FFFF` | `00 00 ... FF FF` |
| Contour[].Points length | Number of Points elements (max. 100) | Uint_16 | 2 | | `0 ... 64` | `00 00 ... 00 64` |
| Contour[].Points[].x | x coordinate (repeated once per element) | Int_32 | 4 | -2147483648 ... 2147483647 mm | `-2147483648 ... +2147483647` | `80 00 00 00 ... 7F FF FF FF` |
| Contour[].Points[].y | y coordinate | Int_32 | 4 | -2147483648 ... 2147483647 mm | `-2147483648 ... +2147483647` | `80 00 00 00 ... 7F FF FF FF` |
| Contour[].LowerZLimit | Lower bound of extrusion in z direction | Int_32 | 4 | -100000 ... 100000 | `-100000 ... +100000` | `FF FE 79 60 ... 00 01 86 A0` |
| Contour[].UpperZLimit | Upper bound of extrusion in z direction | Int_32 | 4 | -100000 ... 100000 | `-100000 ... +100000` | `FF FE 79 60 ... 00 01 86 A0` |

**Example: sAN GetFieldEvaluationContour**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}GetFieldEvaluationContour{SPC}0<ETX>
```

```text
02 73 41 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 41 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 74 6F 75 72 20 00 00 00
```
