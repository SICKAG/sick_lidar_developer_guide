# Set Output State [sMN mDOSetOutput]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Inputs and Outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-output-state-smn-mdosetoutput

Set an output to active or not active. The port must be configured as output, with the source **SOPAS command**. Otherwise, the device answers with status `0`.

**Telegram structure: sMN mDOSetOutput**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Set output state | String | 12 | | `mDOSetOutput` | `6D 44 4F 53 65 74 4F 75 74 70 75 74` |
| Output number | | Uint_8 | 1 | | `1 … 3` | `01 … 03` |
| Output state | | Enum_8 | 1 | Not active:<br>Active: | `0<br>1` | `00<br>01` |

**Example: sMN mDOSetOutput - Set output 1 to not active**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}mDOSetOutput{SPC}1{SPC}0<ETX>
```

```text
sMN mDOSetOutput 1 0
```

```text
02 73 4D 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 31 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 4D 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 01 00 6A
```

```text
73 4D 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 01 00
```

**Telegram structure: sAN mDOSetOutput**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Set output state | String | 12 | | `mDOSetOutput` | `6D 44 4F 53 65 74 4F 75 74 70 75 74` |
| Status Code | Status code | Bool_1 | 1 | Error:<br>Success: | `0<br>1` | `00<br>01` |

**Example: sAN mDOSetOutput**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}mDOSetOutput{SPC}1<ETX>
```

```text
02 73 41 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 41 4E 20 6D 44 4F 53 65 74 4F 75 74 70 75 74 20 01 66
```
