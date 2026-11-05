# Read Contamination Indication Settings [sRN ContaminationConfig]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Contamination Indication

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-contamination-indication-settings-srn-contaminationconfig

Reads the current contamination settings that define how and under which conditions the device indicates a potential contamination of the optics cover to enable preventive cleaning.

**Telegram structure: sRN ContaminationConfig**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                              | Values CoLa B (Binary)                                                                  |
| ------------- | ----------- | -------- | ------ | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type  | Read        | String   | 3      |                    | `sRN`                 | `73 52 4E`                                                 |
| Command       |             | String   | 19     |                    | `ContaminationConfig` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67` |

**Telegram structure: sRA ContaminationConfig**

| Telegram part       | Description                                                                                       | Variable        | Length | Additional details                                                                                                                                                                                           | Values CoLa A (ASCII)                                                 | Values CoLa B (Binary)                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------- | --------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Command type        | Answer                                                                                            | String          | 3      |                                                                                                                                                                                                              | `sRA`                                    | `73 52 41`                                                 |
| Command             |                                                                                                   | String          | 19     |                                                                                                                                                                                                              | `ContaminationConfig`                    | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67` |
| Strategy            | Strategy code                                                                                     | Enum_8          | 1      | No output:<br>All sectors contaminated:<br>One sector contaminated:                                                                                                                                          | `0<br>1<br>2`                            | `00<br>01<br>02`                                           |
| Response time       | How fast (in seconds) the sensor reacts after a contamination                                     | Uint_16         | 2      | Value range 3 ... 60<br>Default: 3                                                                                                                                                                           | `03h … 3Ch`                              | `00 03 … 00 3C`                                            |
| Threshold warning   | Sensitivity                                                                                       | Enum_8          | 1      | High:<br>Medium:<br>Low:                                                                                                                                                                                     | `0<br>1<br>2`                            | `00<br>01<br>02`                                           |
| Sector preselection | Selection of custom sectors or of the mounted cover                                               | Enum_8          | 1      | CM_COVER_NONE:<br>CM_COVER_210_NO_FLAPS:<br>CM_COVER_210_FLAP_LEFT:<br>CM_COVER_210_FLAP_RIGTH:<br>CM_COVER_210_BOTH_FLAPS:<br>CM_COVER_275:<br>CM_COVER_REAR_MOUNTING_BRACKETS:<br>CM_COVER_CUSTOM_SECTORS: | `0<br>1<br>2<br>3<br>4<br>5<br>80<br>FF` | `00<br>01<br>02<br>03<br>04<br>05<br>80<br>FF`             |
| Custom sectors      | Enable/ disable the 12 individual sectors when custom sectors are selected in Sector preselection | Array of Bool_1 | 12     | Active: 1<br>Inactive: 0<br>Fixed length, no length field                                                                                                                                                    | `0 ... 1 (12 values)`                    | `00 ... 01 (12 bytes)`                                     |
| Enable Warning      | Warning monitoring                                                                                | Bool_1          | 1      | Off (False):<br>On (True):                                                                                                                                                                                   | `0<br>1`                                 | `00<br>01`                                                 |
| Enable Error        | Error monitoring                                                                                  | Bool_1          | 1      | Off (False):<br>On (True):                                                                                                                                                                                   | `0<br>1`                                 | `00<br>01`                                                 |

**Example: sRA ContaminationConfig: one sector contaminated, response time 3 s, medium threshold, 210° cover without flaps, sectors 2 and 11 inactive, warning and error disabled**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ContaminationConfig{SPC}2{SPC}3{SPC}1{SPC}1{SPC}1{SPC}0{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}0{SPC}1{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 32 20 33 20 31 20 31 20 31 20 30 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 30 20 31 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2B 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 02 00 03 01 01 01 00 01 01 01 01 01 01 01 01 00 01 00 00 0B
```
