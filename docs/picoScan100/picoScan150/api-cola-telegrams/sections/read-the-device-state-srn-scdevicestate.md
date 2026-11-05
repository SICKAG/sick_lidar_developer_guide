# Read the Device State [sRN SCdevicestate]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Status

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-the-device-state-srn-scdevicestate

This telegram reads the general device state.

**Telegram structure: sRN SCdevicestate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read the device state | String | 13 | | `SCdevicestate` | `53 43 64 65 76 69 63 65 73 74 61 74 65` |

**Example: sRN SCdevicestate**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}SCdevicestate<ETX>
```

```text
<STX>sRN SCdevicestate<ETX>
```

```text
sRN SCdevicestate
```

```text
02 73 52 4E 20 53 43 64 65 76 69 63 65 73 74 61 74 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 4E 20 53 43 64 65 76 69 63 65 73 74 61 74 65 30
```

```text
73 52 4E 20 53 43 64 65 76 69 63 65 73 74 61 74 65
```

**Telegram structure: sRA SCdevicestate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read the device state | String | 13 | | `SCdevicestate` | `53 43 64 65 76 69 63 65 73 74 61 74 65` |
| Status code | Code number | Enum_8 | 1 | Busy / logged-in:<br>Ready:<br>Error: | `0<br>1<br>2` | `00<br>01<br>02` |

**Example: sRA SCdevicestate**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}SCdevicestate{SPC}1<ETX>
```

```text
02 73 52 41 20 53 43 64 65 76 69 63 65 73 74 61 74 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 53 43 64 65 76 69 63 65 73 74 61 74 65 20 01 1E
```
