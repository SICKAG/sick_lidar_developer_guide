# Set Scan Data Enable [sWN ScanDataEnable]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#set-scan-data-enable-swn-scandataenable

Enables/ Disables streaming data output

**Telegram structure: sWN ScanDataEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 E4` |
| Command | Enables/ Disables streaming data output. | String | 14 | | `ScanDataEnable` | `53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65` |
| Data | | Bool | 1 | Off:<br>On: | `0d (00h)<br>+1d (01h)` | `00 ... 01` |

**Example: sWN ScanDataEnable 0 - Disable the streaming data output**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ScanDataEnable{SPC}0<ETX>
```

```text
<STX>sWN ScanDataEnable 0<ETX>
```

```text
sWN ScanDataEnable 0
```

```text
02 73 57 4E 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 57 4E 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 20 00 44
```

```text
73 57 4E 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 20 00
```

**Telegram structure: sWA ScanDataEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Enables/ Disables streaming data output. | String | 14 | | `ScanDataEnable` | `53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65` |

**Example: sWA ScanDataEnable**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}ScanDataEnable<ETX>
```

```text
02 73 57 41 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 41 20 53 63 61 6E 44 61 74 61 45 6E 61 62 6C 65 20 4B
```
