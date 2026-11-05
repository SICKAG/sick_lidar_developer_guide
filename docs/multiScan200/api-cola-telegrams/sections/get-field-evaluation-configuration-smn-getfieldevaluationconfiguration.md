# Get Field Evaluation Configuration [sMN GetFieldEvaluationConfiguration]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#get-field-evaluation-configuration-smn-getfieldevaluationconfiguration

Read the configuration of a field evaluation.

Required user level: Authorized client.

**Telegram structure: sMN GetFieldEvaluationConfiguration**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method invocation | String | 3 | | `sMN` | `73 4D 4E` |
| Method name | Get the configuration of an object detection evaluation | String | 31 | | `GetFieldEvaluationConfiguration` | `47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| EvaluationId | ID of the evaluation | Uint_16 | 2 | Range: 1 ... 48 | `1` | `00 01` |

**Example: sMN GetFieldEvaluationConfiguration - Evaluation 1**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}GetFieldEvaluationConfiguration{SPC}1<ETX>
```

```text
sMN GetFieldEvaluationConfiguration 1
```

```text
02 73 4D 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 26 73 4D 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 00 01 03
```

```text
73 4D 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 00 01
```

**Telegram structure: sAN GetFieldEvaluationConfiguration**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method answer | String | 3 | | `sAN` | `73 41 4E` |
| Method name | Echo of method name | String | 31 | | `GetFieldEvaluationConfiguration` | `47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E` |
| Configuration count | Number of returned configurations | Uint_16 | 2 | A value of 0 means no configuration is present for the requested ID. | `1` | `00 01` |
| EvaluationId | ID of the returned evaluation | Uint_16 | 2 | Repeated once for each configuration | `1` | `00 01` |
| Name length | Length of `Name` | Uint_16 | 2 | String-length prefix in bytes | `C` | `00 0C` |
| Name | Evaluation name | String | 12 | UTF-8/ASCII bytes following Name length | `Evaluation 1` | `45 76 61 6C 75 61 74 69 6F 6E 20 31` |
| Version | Evaluation structure version | Uint_16 | 2 | | `2` | `00 02` |
| Source | Evaluation source | Enum_8 | 1 | Standard: | `0` | `00` |
| Deprecated name length | Length of deprecated `Evaluation t.Name` | Uint_16 | 2 | | `C` | `00 0C` |
| Deprecated name | Deprecated `Evaluation t.Name` | String | 12 | | `Evaluation 1` | `45 76 61 6C 75 61 74 69 6F 6E 20 31` |
| Deprecated ID | Deprecated `Evaluation t.ID` | Uint_16 | 2 | | `1` | `00 01` |
| Maskbased parameter count | Number of mask-based parameter records | Uint_16 | 2 | | `1` | `00 01` |
| InfringementThresholdFactor | Required infringed pixels [%] | Uint_32 | 4 | | `50` | `00 00 00 50` |
| Segmentation parameter count | Number of segmentation parameter records | Uint_16 | 2 | | `1` | `00 01` |
| SampleParam1 | Segmentation parameter | Uint_32 | 4 | | `0` | `00 00 00 00` |
| Common parameter count | Number of common parameter records | Uint_16 | 2 | | `1` | `00 01` |
| MinimumObjectSizeHorizontal | Minimum horizontal object size [mm] | Uint_32 | 4 | | `C8` | `00 00 00 C8` |
| MinimumObjectSizeVertical | Minimum vertical object size [mm] | Uint_32 | 4 | | `C8` | `00 00 00 C8` |
| OcclusionHandling | Treat occluded volume as infringed | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| TreatMissingDataAsInfringed | Treat missing data as infringed | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| TimeForInfringedState | Time before reporting infringed [ms] | Uint_32 | 4 | | `32` | `00 00 00 32` |
| TimeForFreeState | Time before reporting free [ms] | Uint_32 | 4 | | `32` | `00 00 00 32` |
| Reserved3 | Reserved | Uint_32 | 4 | | `0` | `00 00 00 00` |
| Reserved4 | Reserved | Uint_32 | 4 | | `0` | `00 00 00 00` |
| Exit-size parameter count | Number of exit-size parameter records | Uint_16 | 2 | | `1` | `00 01` |
| disableExitSize | Disable exit-size processing | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| exitSizeVertical | Vertical exit-size percentage | Uint_16 | 2 | | `46` | `00 46` |
| exitSizeHorizontal | Horizontal exit-size percentage | Uint_16 | 2 | | `64` | `00 64` |
| Volume count | Number of referenced volumes | Uint_16 | 2 | | `1` | `00 01` |
| Volume ID | Referenced volume ID | Uint_16 | 2 | | `1` | `00 01` |

**Example: sAN GetFieldEvaluationConfiguration**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}GetFieldEvaluationConfiguration{SPC}1{SPC}1{SPC}C{SPC}Evaluation{SPC}1{SPC}2{SPC}0{SPC}C{SPC}Evaluation{SPC}1{SPC}1{SPC}1{SPC}50{SPC}1{SPC}0{SPC}1{SPC}14{SPC}14{SPC}0{SPC}0{SPC}1E{SPC}32{SPC}0{SPC}0{SPC}1{SPC}0{SPC}46{SPC}64{SPC}1{SPC}1<ETX>
```

```text
02 73 41 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 31 20 31 20 43 20 45 76 61 6C 75 61 74 69 6F 6E 20 31 20 32 20 30 20 43 20 45 76 61 6C 75 61 74 69 6F 6E 20 31 20 31 20 31 20 35 30 20 31 20 30 20 31 20 31 34 20 31 34 20 30 20 30 20 31 45 20 33 32 20 30 20 30 20 31 20 30 20 34 36 20 36 34 20 31 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 7C 73 41 4E 20 47 65 74 46 69 65 6C 64 45 76 61 6C 75 61 74 69 6F 6E 43 6F 6E 66 69 67 75 72 61 74 69 6F 6E 20 00 01 00 01 00 0C 45 76 61 6C 75 61 74 69 6F 6E 20 31 00 02 00 00 0C 45 76 61 6C 75 61 74 69 6F 6E 20 31 00 01 00 01 00 00 00 50 00 01 00 00 00 00 00 01 00 00 00 14 00 00 00 14 00 00 00 00 00 1E 00 00 00 32 00 00 00 00 00 00 00 00 00 01 00 00 46 00 64 00 01 00 01 53
```
