# Set to Run [sMN Run]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › General

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#set-to-run-smn-run

Log out from device and activate all parameter changes.

**Telegram structure: sMN Run**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Start the device | String | 3 | | `Run` | `52 75 6E` |

**Example: sMN Run**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}Run<ETX>
```

```text
<STX>sMN Run<ETX>
```

```text
sMN Run
```

```text
02 73 4D 4E 20 52 75 6E 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 07 73 4D 4E 20 52 75 6E 19
```

```text
73 4D 4E 20 52 75 6E
```

**Telegram structure: sAN Run**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Start the device | String | 3 | | `Run` | `52 75 6E` |
| Status code | Accepted when value is 1 | Bool_1 | 1 | Error:<br>Success: | `0<br>1` | `00<br>01` |

**Example: sAN Run**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}Run{SPC}1<ETX>
```

```text
02 73 41 4E 20 52 75 6E 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 09 73 41 4E 20 52 75 6E 20 01 34
```
