# Set Device Name [sWN LocationName]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Device Information

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-device-name-swn-locationname

Give the device a specific description name such as its location.

**Telegram structure: sWN LocationName**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set device name | String | 12 | | `LocationName` | `4C 6F 63 61 74 69 6F 6E 4E 61 6D 65` |
| Value | Number of characters of the following device name | Uint_16 | 2 | | `0d … +16d (0h … 10h )` | `00 00 … 00 10` |
| Value | Device name | String | 32 | | `[Device name]` | `[Device name]` |

**Example: sWN LocationName +9 LongRange**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LocationName{SPC}+9{SPC}LongRange<ETX>
```

```text
<STX>sWN LocationName +9 LongRange<ETX>
```

```text
sWN LocationName +9 LongRange
```

```text
02 73 57 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 39 20 4C 6F 6E 67 52 61 6E 67 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 57 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 00 09 4C 6F 6E 67 52 61 6E 67 65 0C
```

```text
73 57 4E 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 00 09 4C 6F 6E 67 52 61 6E 67 65
```

**Telegram structure: sWA LocationName**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set device name | String | 12 | | `LocationName` | `4C 6F 63 61 74 69 6F 6E 4E 61 6D 65` |

**Example: sWA LocationName**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LocationName<ETX>
```

```text
02 73 57 41 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 57 41 20 4C 6F 63 61 74 69 6F 6E 4E 61 6D 65 20 7F
```
