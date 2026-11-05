# Read Object Evaluation Configuration [sMN GetObjectEvaluationConfiguration]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Object Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-object-evaluation-configuration-smn-getobjectevaluationconfiguration

This telegram returns the name and the criteria of an object evaluation.

**Telegram structure: sMN GetObjectEvaluationConfiguration**

| Telegram part | Description                               | Variable | Length | Additional details | Values CoLa A (ASCII)                                           | Values CoLa B (Binary)                                                                                                         |
| ------------- | ----------------------------------------- | -------- | ------ | ------------------ | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Command type  | Method                                    | String   | 3      |                    | `sMN`                              | `73 4D 4E`                                                                                        |
| Command       | Read the criteria of an object evaluation | String   | 32     |                    | `GetObjectEvaluationConfiguration` | `47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| Evaluation ID | ID of the evaluation                      | Uint_16  | 2      |                    | `1 ... +48`                        | `00 01 ... 00 30`                                                                                 |

**Example: sMN GetObjectEvaluationConfiguration**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}GetObjectEvaluationConfiguration{SPC}1<ETX>
```

```text
sMN GetObjectEvaluationConfiguration 1
```

```text
02 73 4D 4E 20 47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 27 73 4D 4E 20 47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 00 01 74
```

```text
73 4D 4E 20 47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 00 01
```

**Telegram structure: sAN GetObjectEvaluationConfiguration**

| Telegram part            | Description                                                          | Variable | Length   | Additional details             | Values CoLa A (ASCII)                                           | Values CoLa B (Binary)                                                                                                         |
| ------------------------ | -------------------------------------------------------------------- | -------- | -------- | ------------------------------ | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Command type             | Answer                                                               | String   | 3        |                                | `sAN`                              | `73 41 4E`                                                                                        |
| Command                  | Read the criteria of an object evaluation                            | String   | 32       |                                | `GetObjectEvaluationConfiguration` | `47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| Number of configurations | 0 if the evaluation does not exist                                   | Uint_16  | 2        |                                | `0<br>1`                           | `00 00<br>00 01`                                                                                  |
| Evaluation ID            | ID of the evaluation                                                 | Uint_16  | 2        |                                | `1 ... +48`                        | `00 01 ... 00 30`                                                                                 |
| Name length              | Number of characters of the name                                     | Uint_16  | 2        |                                | `0 ... +20`                        | `00 00 ... 00 14`                                                                                 |
| Name                     | Name of the evaluation                                               | String   | 0 ... 20 |                                | `Evaluation 1`                     | `45 76 61 6C ...`                                                                                 |
| Version                  | Version of the parameter structure                                   | Uint_16  | 2        |                                | `1`                                | `00 01`                                                                                           |
| Number of parameter sets | Always 1                                                             | Uint_16  | 2        |                                | `1`                                | `00 01`                                                                                           |
| Maximum hidden time      | Maximum time in ms that a tracked object can be hidden in the region | Uint_16  | 2        |                                | `0 ... +1000`                      | `00 00 ... 03 E8`                                                                                 |
| Minimum object age       | Minimum time in ms that an object must be tracked                    | Uint_16  | 2        |                                | `0 ... FFFFh`                      | `00 00 ... FF FF`                                                                                 |
| Time for infringed state | Time in ms that a qualifying object must be in the region            | Uint_32  | 4        |                                | `1 ... FFFFFFFFh`                  | `00 00 00 01 ...`                                                                                 |
| Minimum object width     | Minimum horizontal size in mm                                        | Uint_32  | 4        |                                | `0 ... +200000`                    | `00 00 00 00 ... 00 03 0D 40`                                                                     |
| Minimum object height    | Minimum vertical size in mm                                          | Uint_32  | 4        |                                | `0 ... +200000`                    | `00 00 00 00 ... 00 03 0D 40`                                                                     |
| Maximum size filter      | Rejects objects larger than the maximum size                         | Bool_1   | 1        | Off:<br>On:                    | `0<br>1`                           | `00<br>01`                                                                                        |
| Maximum object width     | Maximum horizontal size in mm                                        | Uint_32  | 4        |                                | `0 ... +200000`                    | `00 00 00 00 ... 00 03 0D 40`                                                                     |
| Maximum object height    | Maximum vertical size in mm                                          | Uint_32  | 4        |                                | `0 ... +200000`                    | `00 00 00 00 ... 00 03 0D 40`                                                                     |
| Motion state             | Tracks that are evaluated                                            | Enum_8   | 1        | All:<br>Moving:<br>Stationary: | `0<br>1<br>2`                      | `00<br>01<br>02`                                                                                  |
| Speed filter             | Evaluates only tracks within the speed range                         | Bool_1   | 1        | Off:<br>On:                    | `0<br>1`                           | `00<br>01`                                                                                        |
| Minimum speed            | Minimum speed in mm/s                                                | Uint_32  | 4        |                                | `0 ... +65000`                     | `00 00 00 00 ... 00 00 FD E8`                                                                     |
| Maximum speed            | Maximum speed in mm/s                                                | Uint_32  | 4        |                                | `0 ... +65000`                     | `00 00 00 00 ... 00 00 FD E8`                                                                     |
| Direction filter         | Evaluates only tracks that move in the configured direction          | Bool_1   | 1        | Off:<br>On:                    | `0<br>1`                           | `00<br>01`                                                                                        |
| Direction                | Direction of movement in degrees                                     | Int_16   | 2        |                                | `-180 ... +180`                    | `FF 4C ... 00 B4`                                                                                 |
| Direction uncertainty    | Accepted deviation from the direction in degrees                     | Uint_16  | 2        |                                | `0 ... +180`                       | `00 00 ... 00 B4`                                                                                 |
| Reserved                 | Reserved1 ... Reserved6, 6 values. Send 0; the device returns 0.     | Int_32   | 4        |                                | `0`                                | `00 00 00 00`                                                                                     |
| Reserved parameters 1    | Number of entries, always 0                                          | Uint_16  | 2        |                                | `0`                                | `00 00`                                                                                           |
| Reserved parameters 2    | Number of entries, always 0                                          | Uint_16  | 2        |                                | `0`                                | `00 00`                                                                                           |

**Example: sAN GetObjectEvaluationConfiguration**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}GetObjectEvaluationConfiguration{SPC}1{SPC}1{SPC}C{SPC}Evaluation{SPC}1{SPC}1{SPC}1{SPC}1F4{SPC}0{SPC}1F4{SPC}C8{SPC}0{SPC}0{SPC}7D0{SPC}7D0{SPC}1{SPC}1{SPC}12C{SPC}3A98{SPC}0{SPC}B4{SPC}5A{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 41 4E 20 47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 31 20 31 20 43 20 45 76 61 6C 75 61 74 69 6F 6E 20 31 20 31 20 31 20 31 46 34 20 30 20 31 46 34 20 43 38 20 30 20 30 20 37 44 30 20 37 44 30 20 31 20 31 20 31 32 43 20 33 41 39 38 20 30 20 42 34 20 35 41 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 7F 73 41 4E 20 47 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 00 01 00 01 00 0C 45 76 61 6C 75 61 74 69 6F 6E 20 31 00 01 00 01 01 F4 00 00 00 00 01 F4 00 00 00 C8 00 00 00 00 00 00 00 07 D0 00 00 07 D0 01 01 00 00 01 2C 00 00 3A 98 00 00 B4 00 5A 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 FB
```
