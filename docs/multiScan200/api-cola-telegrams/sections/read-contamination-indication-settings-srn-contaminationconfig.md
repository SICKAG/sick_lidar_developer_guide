# Read Contamination Indication Settings [sRN ContaminationConfig]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Contamination Indication

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-contamination-indication-settings-srn-contaminationconfig

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
| Strategy | Strategy code | Enum_8 | 1 | Inactive:<br>High available:<br>Sensitive: | `0<br>1<br>2` | `00<br>01<br>02` |
| Response time | How fast (in seconds) the sensor reacts after a contamination | Uint_16 | 2 | 3 … 60, default 3 | `+3d … +60d (3 … 3Ch)` | `00 03 … 00 3C` |
| Threshold warning | Sensitivity | Enum_8 | 1 | Low:<br>Medium:<br>High: | `0<br>1<br>2` | `00<br>01<br>02` |
| Cover | No cover, weather protection hood, or custom sectors | Enum_8 | 1 | No cover:<br>Weather protection hood:<br>Custom sectors: | `0<br>6<br>+255d (FFh)` | `00<br>06<br>FF` |
| Number of sectors | Number of the following sector values | Uint_16 | 2 | Always 12 | `C` | `00 0C` |
| Custom sector | Sector 1 … 12 is evaluated, one value per sector | Bool_1 | 1 | Inactive:<br>Active (default): | `0<br>1` | `00<br>01` |
| Enable warning | Warning monitoring | Bool_1 | 1 | Off:<br>On: | `0<br>1` | `00<br>01` |
| Enable error | Error monitoring | Bool_1 | 1 | Off:<br>On: | `0<br>1` | `00<br>01` |

**Example: sRA ContaminationConfig**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ContaminationConfig{SPC}0{SPC}3{SPC}0{SPC}0{SPC}C{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1{SPC}1<ETX>
```

```text
02 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 30 20 33 20 30 20 30 20 43 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 2D 73 52 41 20 43 6F 6E 74 61 6D 69 6E 61 74 69 6F 6E 43 6F 6E 66 69 67 20 00 00 03 00 00 00 0C 01 01 01 01 01 01 01 01 01 01 01 01 01 01 05
```
