# Read Cloning Plug Functionality [sRN enableCloningPlug]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Inputs and Outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-cloning-plug-functionality-srn-enablecloningplug

Check if the cloning plug functionality is enabled.

**Telegram structure: sRN enableCloningPlug**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read request | String | 3 | | `sRN` | `73 52 4E` |
| Variable name | enableCloningPlug | String | 17 | | `enableCloningPlug` | `65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67` |

**Example: sRN enableCloningPlug**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}enableCloningPlug<ETX>
```

```text
<STX>sRN enableCloningPlug<ETX>
```

```text
sRN enableCloningPlug
```

```text
02 73 52 4E 20 65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 52 4E 20 65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67 2E
```

```text
73 52 4E 20 65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67
```

**Telegram structure: sRA enableCloningPlug**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read answer | String | 3 | | `sRA` | `73 52 41` |
| Variable name | enableCloningPlug | String | 17 | | `enableCloningPlug` | `65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67` |
| Value | Cloning plug functionality disabled / enabled | Bool_1 | 1 | Disabled:<br>Enabled: | `0<br>1` | `00<br>01` |

**Example: sRA enableCloningPlug**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}enableCloningPlug{SPC}1<ETX>
```

```text
02 73 52 41 20 65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 41 20 65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67 20 01 00
```
