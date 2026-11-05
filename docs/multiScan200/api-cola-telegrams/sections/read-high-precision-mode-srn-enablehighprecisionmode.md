# Read High Precision Mode [sRN enableHighPrecisionMode]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-high-precision-mode-srn-enablehighprecisionmode

Returns the high precision mode (temporal moving averaging).

**Telegram structure: sRN enableHighPrecisionMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read High Precision Mode | String | 23 | | `enableHighPrecisionMode` | `65 6E 61 62 6C 65 48 69 67 68 50 72 65 63 69 73 69 6F 6E 4D 6F 64 65` |

**Example: sRN enableHighPrecisionMode**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}enableHighPrecisionMode<ETX>
```

```text
<STX>sRN enableHighPrecisionMode<ETX>
```

```text
sRN enableHighPrecisionMode
```

```text
02 73 52 4E 20 65 6E 61 62 6C 65 48 69 67 68 50 72 65 63 69 73 69 6F 6E 4D 6F 64 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 52 4E 20 65 6E 61 62 6C 65 48 69 67 68 50 72 65 63 69 73 69 6F 6E 4D 6F 64 65 15
```

```text
73 52 4E 20 65 6E 61 62 6C 65 48 69 67 68 50 72 65 63 69 73 69 6F 6E 4D 6F 64 65
```

**Telegram structure: sRA enableHighPrecisionMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read High Precision Mode | String | 23 | | `enableHighPrecisionMode` | `65 6E 61 62 6C 65 48 69 67 68 50 72 65 63 69 73 69 6F 6E 4D 6F 64 65` |
| enableHighPrecisionMode | Enable high-precision mode | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sRA enableHighPrecisionMode**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}enableHighPrecisionMode{SPC}0<ETX>
```

```text
02 73 52 41 20 65 6E 61 62 6C 65 48 69 67 68 50 72 65 63 69 73 69 6F 6E 4D 6F 64 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1D 73 52 41 20 65 6E 61 62 6C 65 48 69 67 68 50 72 65 63 69 73 69 6F 6E 4D 6F 64 65 20 00 3A
```
