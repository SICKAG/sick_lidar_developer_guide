# Read Device Search State [sRN EnableColaScan]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Legacy Protocols

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-device-search-state-srn-enablecolascan

Returns whether the device search by SICK tools is enabled. If disabled, finding the device via device search and changing the IP address via SICK tools is not possible.

**Telegram structure: sRN EnableColaScan**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Device Search State | String | 14 | | `EnableColaScan` | `45 6E 61 62 6C 65 43 6F 6C 61 53 63 61 6E` |

**Example: sRN EnableColaScan**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EnableColaScan<ETX>
```

```text
<STX>sRN EnableColaScan<ETX>
```

```text
sRN EnableColaScan
```

```text
02 73 52 4E 20 45 6E 61 62 6C 65 43 6F 6C 61 53 63 61 6E 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 45 6E 61 62 6C 65 43 6F 6C 61 53 63 61 6E 70
```

```text
73 52 4E 20 45 6E 61 62 6C 65 43 6F 6C 61 53 63 61 6E
```

**Telegram structure: sRA EnableColaScan**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Device Search State | String | 14 | | `EnableColaScan` | `45 6E 61 62 6C 65 43 6F 6C 61 53 63 61 6E` |
| EnableColaScan | Disables ColaScan / AutoIP. Port 30178 will not be opened. Changing IP address via ColaScan protocol not possible any longer. | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sRA EnableColaScan**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EnableColaScan{SPC}1<ETX>
```

```text
02 73 52 41 20 45 6E 61 62 6C 65 43 6F 6C 61 53 63 61 6E 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 45 6E 61 62 6C 65 43 6F 6C 61 53 63 61 6E 20 01 5E
```
