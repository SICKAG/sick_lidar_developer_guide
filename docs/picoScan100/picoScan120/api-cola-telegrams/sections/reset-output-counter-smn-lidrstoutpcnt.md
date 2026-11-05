# Reset Output Counter [sMN LIDrstoutpcnt]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Inputs and Outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#reset-output-counter-smn-lidrstoutpcnt

Reset the counter which keeps track of how often an digital output has been active (and not active). Information from the counter is included in LIDoutputstate.

**Telegram structure: sMN LIDrstoutpcnt**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Reset output counter | String | 13 | | `LIDrstoutpcnt` | `4C 49 44 72 73 74 6F 75 74 70 63 6E 74` |

**Example: sMN LIDrstoutpcnt**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}LIDrstoutpcnt<ETX>
```

```text
<STX>sMN LIDrstoutpcnt<ETX>
```

```text
sMN LIDrstoutpcnt
```

```text
02 73 4D 4E 20 4C 49 44 72 73 74 6F 75 74 70 63 6E 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 4D 4E 20 4C 49 44 72 73 74 6F 75 74 70 63 6E 74 03
```

```text
73 4D 4E 20 4C 49 44 72 73 74 6F 75 74 70 63 6E 74
```

**Telegram structure: sAN LIDrstoutpcnt**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Reset output counter | String | 13 | | `LIDrstoutpcnt` | `4C 49 44 72 73 74 6F 75 74 70 63 6E 74` |
| Status code | Code number | Bool_1 | 1 | Success:<br>Error: | `0<br>1` | `00<br>01` |

**Example: sAN LIDrstoutpcnt**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}LIDrstoutpcnt{SPC}0<ETX>
```

```text
02 73 41 4E 20 4C 49 44 72 73 74 6F 75 74 70 63 6E 74 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 41 4E 20 4C 49 44 72 73 74 6F 75 74 70 63 6E 74 20 00 2F
```
