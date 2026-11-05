# Read Interlaced Mode [sRN bInterlacedMode]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-interlaced-mode-srn-binterlacedmode

Returns the interlaced mode.

**Telegram structure: sRN bInterlacedMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Interlaced Mode | String | 15 | | `bInterlacedMode` | `62 49 6E 74 65 72 6C 61 63 65 64 4D 6F 64 65` |

**Example: sRN bInterlacedMode**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}bInterlacedMode<ETX>
```

```text
<STX>sRN bInterlacedMode<ETX>
```

```text
sRN bInterlacedMode
```

```text
02 73 52 4E 20 62 49 6E 74 65 72 6C 61 63 65 64 4D 6F 64 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 4E 20 62 49 6E 74 65 72 6C 61 63 65 64 4D 6F 64 65 25
```

```text
73 52 4E 20 62 49 6E 74 65 72 6C 61 63 65 64 4D 6F 64 65
```

**Telegram structure: sRA bInterlacedMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Interlaced Mode | String | 15 | | `bInterlacedMode` | `62 49 6E 74 65 72 6C 61 63 65 64 4D 6F 64 65` |
| bInterlacedMode | If true the interlaced mode is activated | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sRA bInterlacedMode**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}bInterlacedMode{SPC}0<ETX>
```

```text
02 73 52 41 20 62 49 6E 74 65 72 6C 61 63 65 64 4D 6F 64 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 52 41 20 62 49 6E 74 65 72 6C 61 63 65 64 4D 6F 64 65 20 00 0A
```
