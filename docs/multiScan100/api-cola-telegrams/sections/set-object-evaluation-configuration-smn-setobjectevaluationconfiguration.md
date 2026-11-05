# Set Object Evaluation Configuration [sMN SetObjectEvaluationConfiguration]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Object Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#set-object-evaluation-configuration-smn-setobjectevaluationconfiguration

This telegram changes the name and the criteria of an existing object evaluation. Write all parameters; read the current configuration first and change only the values you need. The example sets evaluation 1 to moving objects of at least 200 mm width with a speed between 300 mm/s and 15000 mm/s.

Values outside the allowed range are rejected with `sFA 30`, and a name longer than 20 characters with `sFA 7`. A minimum that is greater than its maximum, for example for the size or speed, returns error code 2.

**Telegram structure: sMN SetObjectEvaluationConfiguration**

| Telegram part            | Description                                                          | Variable | Length   | Additional details             | Values CoLa A (ASCII)                                           | Values CoLa B (Binary)                                                                                                         |
| ------------------------ | -------------------------------------------------------------------- | -------- | -------- | ------------------------------ | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Command type             | Method                                                               | String   | 3        |                                | `sMN`                              | `73 4D 4E`                                                                                        |
| Command                  | Set the criteria of an object evaluation                             | String   | 32       |                                | `SetObjectEvaluationConfiguration` | `53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
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

**Example: sMN SetObjectEvaluationConfiguration**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}SetObjectEvaluationConfiguration{SPC}1{SPC}+12{SPC}Evaluation{SPC}1{SPC}1{SPC}1{SPC}+500{SPC}+0{SPC}+500{SPC}+200{SPC}+0{SPC}0{SPC}+2000{SPC}+2000{SPC}1{SPC}1{SPC}+300{SPC}+15000{SPC}0{SPC}+180{SPC}+90{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
sMN SetObjectEvaluationConfiguration 1 +12 Evaluation 1 1 1 +500 +0 +500 +200 +0 0 +2000 +2000 1 1 +300 +15000 0 +180 +90 0 0 0 0 0 0 0 0
```

```text
02 73 4D 4E 20 53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 31 20 2B 31 32 20 45 76 61 6C 75 61 74 69 6F 6E 20 31 20 31 20 31 20 2B 35 30 30 20 2B 30 20 2B 35 30 30 20 2B 32 30 30 20 2B 30 20 30 20 2B 32 30 30 30 20 2B 32 30 30 30 20 31 20 31 20 2B 33 30 30 20 2B 31 35 30 30 30 20 30 20 2B 31 38 30 20 2B 39 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 7D 73 4D 4E 20 53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 00 01 00 0C 45 76 61 6C 75 61 74 69 6F 6E 20 31 00 01 00 01 01 F4 00 00 00 00 01 F4 00 00 00 C8 00 00 00 00 00 00 00 07 D0 00 00 07 D0 01 01 00 00 01 2C 00 00 3A 98 00 00 B4 00 5A 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 E2
```

```text
73 4D 4E 20 53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 00 01 00 0C 45 76 61 6C 75 61 74 69 6F 6E 20 31 00 01 00 01 01 F4 00 00 00 00 01 F4 00 00 00 C8 00 00 00 00 00 00 00 07 D0 00 00 07 D0 01 01 00 00 01 2C 00 00 3A 98 00 00 B4 00 5A 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```

**Telegram structure: sAN SetObjectEvaluationConfiguration**

| Telegram part | Description                              | Variable | Length | Additional details                                            | Values CoLa A (ASCII)                                           | Values CoLa B (Binary)                                                                                                         |
| ------------- | ---------------------------------------- | -------- | ------ | ------------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Command type  | Answer                                   | String   | 3      |                                                               | `sAN`                              | `73 41 4E`                                                                                        |
| Command       | Set the criteria of an object evaluation | String   | 32     |                                                               | `SetObjectEvaluationConfiguration` | `53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| Error code    | Result of the change                     | Enum_8   | 1      | No error:<br>Invalid evaluation ID:<br>Invalid configuration: | `0<br>1<br>2`                      | `00<br>01<br>02`                                                                                  |

**Example: sAN SetObjectEvaluationConfiguration**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}SetObjectEvaluationConfiguration{SPC}0<ETX>
```

```text
02 73 41 4E 20 53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 26 73 41 4E 20 53 65 74 4F 62 6A 65 63 74 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 00 6D
```
