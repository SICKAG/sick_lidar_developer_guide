# Set Activation of Evaluation Group [sMN ActivateEvaluationGroup]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-activation-of-evaluation-group-smn-activateevaluationgroup

The telegram is intended to activate or deactivate groups via telegram. The group activation needs to be changed from always to telegram in advance.

**Telegram structure: sMN ActivateEvaluationGroup**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Activate / deactivate evaluation group | String | 23 | | `ActivateEvaluationGroup` | `41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70` |
| Amount of evaluation groups to activate/ deactivate | Array | Uint_16 | 2 | Each array element contains two parameters:Evaluation group numberDeactivation / activation of evaluation group | `1d ... 48d (1 ... 30h)` | `00 01 … 00 30` |
| Evaluation group number | Evaluation group 1 | UInt_16 | 2 | | `1` | `00 01` |
| Deactivation / activation of evaluation group | Activate / deactivate evaluation group 1 | Bool_1 | 1 | Deactivate:<br>Activate: | `0<br>1` | `00<br>01` |
| Evaluation group number | Evaluation group 2 | UInt_16 | 2 | | `2` | `00 02` |
| Activate/ deactivate evaluation group | Activate / deactivate evaluation group 2 | Bool_1 | 1 | Deactivate:<br>Activate: | `0<br>1` | `00<br>01` |
| ... | | | | | | |
| Evaluation group number | Evaluation group 48 | UInt_16 | 2 | | `48d (30h)` | `00 30` |
| Activate/ deactivate evaluation group | Activate / deactivate evaluation group 48 | Bool_1 | 1 | Deactivate:<br>Activate: | `0<br>1` | `00<br>01` |

**Example1: sMN ActivateEvaluationGroup - Deactivate evaluation group 1 and 10**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}ActivateEvaluationGroup{SPC}2{SPC}1{SPC}0{SPC}+10{SPC}0<ETX>
```

```text
<STX>sMN ActivateEvaluationGroup 2 1 0 +10 0<ETX>
```

```text
sMN ActivateEvaluationGroup 2 1 0 +10 0
```

```text
02 73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 32 20 31 20 30 20 2B 31 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 24 73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 02 00 01 00 00 0A 00 29
```

```text
73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 02 00 01 00 00 0A 00
```

**Example2: sMN ActivateEvaluationGroup - Deactivate evaluation group 1 and 10, activate evaluation group 2 and 3**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}ActivateEvaluationGroup{SPC}4{SPC}1{SPC}0{SPC}+10{SPC}0{SPC}2{SPC}1{SPC}3{SPC}1<ETX>
```

```text
<STX>sMN ActivateEvaluationGroup 4 1 0 +10 0 2 1 3 1<ETX>
```

```text
sMN ActivateEvaluationGroup 4 1 0 +10 0 2 1 3 1
```

```text
02 73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 34 20 31 20 30 20 2B 31 30 20 30 20 32 20 31 20 33 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2A 73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 04 00 01 00 00 0A 00 00 02 01 00 03 01 2E
```

```text
73 4D 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 04 00 01 00 00 0A 00 00 02 01 00 03 01
```

**Telegram structure: sAN ActivateEvaluationGroup**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 52 41` |
| Command | Activate / deactivate evaluation group | String | 23 | | `ActivateEvaluationGroup` | `41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70` |
| Amount of activated/deactivated evaluation groups | - | UInt_16 | 2 | | `1h... 30h` | `00 01 … 00 30` |
| State of activation / deactivation | - | Bool_1 | 1 | Activation/Deactivation failed:<br>Successfully activated/deactivated: | `0<br>1` | `00<br>01` |

**Example 1: sAN ActivateEvaluationGroup - Successfully deactivated evaluation group 1**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}ActivateEvaluationGroup{SPC}1{SPC}1<ETX>
```

```text
02 73 41 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 31 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 41 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 01 01 2C
```

**Example 2: sAN ActivateEvaluationGroup - Successfully deactivated evaluation group 1, successfully activated evaluation group 2, failed activation of evaluation group 3**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}ActivateEvaluationGroup{SPC}3{SPC}1{SPC}1{SPC}0<ETX>
```

```text
02 73 41 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 33 20 31 20 31 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 21 73 41 4E 20 41 63 74 69 76 61 74 65 45 76 61 6C 75 61 74 69 6F 6E 47 72 6F 75 70 20 00 03 01 01 00 2F
```
