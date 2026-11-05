# Read State of the Outputs [sRN LIDoutputstate]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Inputs and Outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#read-state-of-the-outputs-srn-lidoutputstate

Status of all outputs

**Telegram structure: sRN LIDoutputstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Output state | String | 14 | | `LIDoutputstate` | `4C 49 44 6F 75 74 70 75 74 73 74 61 74 65` |

**Example: sRN LIDoutputstate**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LIDoutputstate<ETX>
```

```text
<STX>sRN LIDoutputstate<ETX>
```

```text
sRN LIDoutputstate
```

```text
02 73 52 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65 66
```

```text
73 52 4E 20 4C 49 44 6F 75 74 70 75 74 73 74 61 74 65
```

**Telegram structure: sRA LIDoutputstate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Complete telegram structure of the answer . | | | | | | |
