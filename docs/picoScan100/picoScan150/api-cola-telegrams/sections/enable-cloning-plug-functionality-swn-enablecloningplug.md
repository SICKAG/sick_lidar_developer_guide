# Enable Cloning Plug Functionality [sWN enableCloningPlug]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Inputs and Outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#enable-cloning-plug-functionality-swn-enablecloningplug

Enables or disables the cloning plug functionality.

**Telegram structure: sWN enableCloningPlug**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | enableCloningPlug | String | 17 | | `enableCloningPlug` | `65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67` |
| Value | Enable/ disable cloning plug functionality | Bool_1 | 1 | Disable:<br>Enable: | `0<br>1` | `00<br>01` |

**Example: sWN enableCloningPlug**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}enableCloningPlug{SPC}1<ETX>
```

```text
<STX>sWN enableCloningPlug 1<ETX>
```

```text
sWN enableCloningPlug 1
```

```text
02 73 57 4E 20 65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 57 4E 20 65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67 20 01 0A
```

```text
73 57 4E 20 65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67 20 01
```

**Telegram structure: sWA enableCloningPlug**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 17 | | `enableCloningPlug` | `65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67` |

**Example: sWA enableCloningPlug**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}enableCloningPlug<ETX>
```

```text
02 73 57 41 20 65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 57 41 20 65 6E 61 62 6C 65 43 6C 6F 6E 69 6E 67 50 6C 75 67 20 04
```
