# Enable High Precision Mode [sWN enableHighPrecisionMode]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#enable-high-precision-mode-swn-enablehighprecisionmode

Enable or disable the high precision mode (the multiScan200 mean filter). See [Filter Details](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/#moving-average-filter).

Required user level: Authorized client.

**Telegram structure: sWN enableHighPrecisionMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | Enable high-precision mode | String | 23 | | `enableHighPrecisionMode` | `65 6E 61 62 6C 65 48 69 67 68 50 72 65 63 69 73 69 6F 6E 4D 6F 64 65` |
| Value | Enable high-precision mode | Bool_1 | 1 | Disable:<br>Enable: | `0<br>1` | `00<br>01` |

**Example: sWN enableHighPrecisionMode - Disable**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}enableHighPrecisionMode{SPC}0<ETX>
```

```text
sWN enableHighPrecisionMode 0
```

```text
02 73 57 4E 20 65 6E 61 62 6C 65 48 69 67 68 50 72 65 63 69 73 69 6F 6E 4D 6F 64 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1D 73 57 4E 20 65 6E 61 62 6C 65 48 69 67 68 50 72 65 63 69 73 69 6F 6E 4D 6F 64 65 20 00 30
```

```text
73 57 4E 20 65 6E 61 62 6C 65 48 69 67 68 50 72 65 63 69 73 69 6F 6E 4D 6F 64 65 20 00
```

**Telegram structure: sWA enableHighPrecisionMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 23 | | `enableHighPrecisionMode` | `65 6E 61 62 6C 65 48 69 67 68 50 72 65 63 69 73 69 6F 6E 4D 6F 64 65` |

**Example: sWA enableHighPrecisionMode**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}enableHighPrecisionMode<ETX>
```

```text
02 73 57 41 20 65 6E 61 62 6C 65 48 69 67 68 50 72 65 63 69 73 69 6F 6E 4D 6F 64 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 57 41 20 65 6E 61 62 6C 65 48 69 67 68 50 72 65 63 69 73 69 6F 6E 4D 6F 64 65 20 3F
```
