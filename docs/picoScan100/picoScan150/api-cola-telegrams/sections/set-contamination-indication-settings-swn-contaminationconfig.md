# Set Contamination Indication Settings [sWN ContaminationConfig]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Contamination Indication

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-contamination-indication-settings-swn-contaminationconfig

Define how and under which conditions the device shall indicate a potential contamination of the optics cover to enable preventive cleaning.

**Telegram structure: sWN ContaminationConfig**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | | String | 19 | | `ContaminationConfig` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67` |
| Strategy | Strategy code | Enum_8 | 1 | No output:<br>All sectors contaminated:<br>One sector contaminated: | `0<br>1<br>2` | `00<br>01<br>02` |
| Response time | How fast (in seconds) the sensor reacts after a contamination | Uint_16 | 2 | Value range 3 ... 60<br>Default: 3 | `+3d … +60d (03h … 3Ch)` | `00 03 … 00 3C` |
| Threshold warning | Sensitivity | Enum_8 | 1 | High:<br>Medium:<br>Low: | `0<br>1<br>2` | `00<br>01<br>02` |
| Sector preselection | Selection of either custom sectors or used weather protection hood | Enum_8 | 1 | All sectors:<br>Weather protection hood:<br>Custom sectors: | `0<br>6<br>255d (FFh)` | `00<br>06<br>FF` |
| Length | | UInt_16 | 2 | Always: | `7` | `00 07` |
| Custom sectors | Enable/ disable individual sectors when custom sectors got selected in Sector preselection | Array | 7 | Active: 1<br>Inactive: 0<br>Default value of all sectors is active | `0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1<br>0 ... 1` | `00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01<br>00 ... 01` |
| Enable Warning | Warning monitoring | Bool_1 | 1 | Off (False):<br>On (True): | `0<br>1` | `00<br>01` |
| Enable Error | Error monitoring | Bool_1 | 1 | Off (False):<br>On (True): | `0<br>1` | `00<br>01` |

**Example: sWN ContaminationConfig One sector contaminated, response time 60 seconds, sensitivity low, weather protection hood, enable warning, enable error**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ContaminationConfig{SPC}2{SPC}3C{SPC}2{SPC}6{SPC}7{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1<ETX>
```

```text
<STX>sWN ContaminationConfig 2 3C 2 6 7 1 1 1 1 1 1 1 1 1<ETX>
```

```text
sWN ContaminationConfig 2 3C 2 6 7 1 1 1 1 1 1 1 1 1
```

```text
02 73 57 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 32 20 33 43 20 32 20 36 20 37 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 28 73 57 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 02 00 3C 02 06 00 07 01 01 01 01 01 01 01 01 01 3C
```

```text
73 57 4E 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 02 00 3C 02 06 00 07 01 01 01 01 01 01 01 01 01
```

**Telegram structure: sWA ContaminationConfig**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | | String | 19 | | `ContaminationConfig` | `43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67` |

**Example: sWA ContaminationConfig**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}ContaminationConfig<ETX>
```

```text
02 73 57 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 57 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 0F
```
