# Read Operating Mode [sRN operatingMode]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#read-operating-mode-srn-operatingmode

Returns the operating mode of the receiver unit.

**Telegram structure: sRN operatingMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Operating Mode | String | 13 | | `operatingMode` | `6F 70 65 72 61 74 69 6E 67 4D 6F 64 65` |

**Example: sRN operatingMode**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}operatingMode<ETX>
```

```text
<STX>sRN operatingMode<ETX>
```

```text
sRN operatingMode
```

```text
02 73 52 4E 20 6F 70 65 72 61 74 69 6E 67 4D 6F 64 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 4E 20 6F 70 65 72 61 74 69 6E 67 4D 6F 64 65 11
```

```text
73 52 4E 20 6F 70 65 72 61 74 69 6E 67 4D 6F 64 65
```

**Telegram structure: sRA operatingMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Operating Mode | String | 13 | | `operatingMode` | `6F 70 65 72 61 74 69 6E 67 4D 6F 64 65` |
| operatingMode | Operating mode of the receiver unit | Enum_8 | 1 | Standard:<br>Reflector optimization: | `0<br>1` | `00<br>01` |

**Example: sRA operatingMode**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}operatingMode{SPC}0<ETX>
```

```text
02 73 52 41 20 6F 70 65 72 61 74 69 6E 67 4D 6F 64 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 6F 70 65 72 61 74 69 6E 67 4D 6F 64 65 20 00 3E
```
