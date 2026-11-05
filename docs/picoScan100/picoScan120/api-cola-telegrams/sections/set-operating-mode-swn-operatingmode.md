# Set Operating Mode [sWN operatingMode]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#set-operating-mode-swn-operatingmode

Sets the operating mode of the receiver unit. This telegram requires at least user level: Authorized Client.

**Telegram structure: sWN operatingMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set Operating Mode | String | 13 | | `operatingMode` | `6F 70 65 72 61 74 69 6E 67 4D 6F 64 65` |
| operatingMode | Operating mode of the receiver unit | Enum_8 | 1 | Standard:<br>Reflector optimization: | `0<br>1` | `00<br>01` |

**Example: sWN operatingMode**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}operatingMode{SPC}0<ETX>
```

```text
<STX>sWN operatingMode 0<ETX>
```

```text
sWN operatingMode 0
```

```text
02 73 57 4E 20 6F 70 65 72 61 74 69 6E 67 4D 6F 64 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 4E 20 6F 70 65 72 61 74 69 6E 67 4D 6F 64 65 20 00 34
```

```text
73 57 4E 20 6F 70 65 72 61 74 69 6E 67 4D 6F 64 65 20 00
```

**Telegram structure: sWA operatingMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set Operating Mode | String | 13 | | `operatingMode` | `6F 70 65 72 61 74 69 6E 67 4D 6F 64 65` |

**Example: sWA operatingMode**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}operatingMode<ETX>
```

```text
02 73 57 41 20 6F 70 65 72 61 74 69 6E 67 4D 6F 64 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 57 41 20 6F 70 65 72 61 74 69 6E 67 4D 6F 64 65 20 3B
```
