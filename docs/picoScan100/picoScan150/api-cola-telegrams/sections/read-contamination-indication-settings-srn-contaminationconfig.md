# Read Contamination Indication Settings [sRN ContaminationConfig]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Contamination Indication

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-contamination-indication-settings-srn-contaminationconfig

Reads the current contamination settings that define how and under which conditions the device indicates a potential contamination of the optics cover to enable preventive cleaning.

**Telegram structure: sRN ContaminationConfig**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | | String | 19 | | `ContaminationConfig` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67` |

**Example: sRN ContaminationConfig**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ContaminationConfig<ETX>
```

```text
<STX>sRN ContaminationConfig<ETX>
```

```text
sRN ContaminationConfig
```

```text
02 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 25
```

```text
73 52 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67
```

**Telegram structure: sRA ContaminationConfig**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | | String | 19 | | `ContaminationConfig` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67` |
| Strategy | Strategy code | Enum_8 | 1 | No output:<br>All sectors contaminated:<br>One sector contaminated: | `0<br>1<br>2` | `00<br>01<br>02` |
| Response time | How fast (in seconds) the sensor reacts after a contamination | Uint_16 | 2 | Value range 3 ... 60<br>Default: 3 | `03h … 3Ch` | `00 03 … 00 3C` |
| Threshold warning | Sensitivity | Enum_8 | 1 | High:<br>Medium:<br>Low: | `0<br>1<br>2` | `00<br>01<br>02` |
| Sector preselection | Selection of either custom sectors or used weather protection hood | Enum_8 | 1 | All sectors:<br>Weather protection hood:<br>Custom sectors: | `0<br>6<br>FF` | `00<br>06<br>FF` |
| Length | | UInt_16 | 2 | Always: | `7` | `00 07` |
| Custom sectors | Enable/ disable individual sectors when custom sectors got selected in Sector preselection | Array | 7 | Active: 1<br>Inactive: 0<br>Default value of all sectors is active | `0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1` | `00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01` |
| Enable Warning | Warning monitoring | Bool_1 | 1 | Off (False):<br>On (True): | `0<br>1` | `00<br>01` |
| Enable Error | Error monitoring | Bool_1 | 1 | Off (False):<br>On (True): | `0<br>1` | `00<br>01` |

**Example: sRA ContaminationConfig No output, response time 3 sec, All sectors active, warning enabled, error enabled**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ContaminationConfig{SPC}0{SPC}3{SPC}0{SPC}0{SPC}7{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1<ETX>
```

```text
02 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 30 20 33 20 30 20 30 20 37 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 28 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 00 00 03 00 00 00 07 01 01 01 01 01 01 01 01 01 0F
```
