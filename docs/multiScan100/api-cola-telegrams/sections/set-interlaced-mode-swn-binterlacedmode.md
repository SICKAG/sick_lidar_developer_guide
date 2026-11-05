# Set Interlaced Mode [sWN bInterlacedMode]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#set-interlaced-mode-swn-binterlacedmode

Sets the interlaced mode. This telegram requires at least user level: Authorized Client.

**Telegram structure: sWN bInterlacedMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set Interlaced Mode | String | 15 | | `bInterlacedMode` | `62 49 6E 74 65 72 6C 61 63 65 64 4D 6F 64 65` |
| bInterlacedMode | If true the interlaced mode is activated | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sWN bInterlacedMode**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}bInterlacedMode{SPC}0<ETX>
```

```text
<STX>sWN bInterlacedMode 0<ETX>
```

```text
sWN bInterlacedMode 0
```

```text
02 73 57 4E 20 62 49 6E 74 65 72 6C 61 63 65 64 4D 6F 64 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 57 4E 20 62 49 6E 74 65 72 6C 61 63 65 64 4D 6F 64 65 20 00 00
```

```text
73 57 4E 20 62 49 6E 74 65 72 6C 61 63 65 64 4D 6F 64 65 20 00
```

**Telegram structure: sWA bInterlacedMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set Interlaced Mode | String | 15 | | `bInterlacedMode` | `62 49 6E 74 65 72 6C 61 63 65 64 4D 6F 64 65` |

**Example: sWA bInterlacedMode**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}bInterlacedMode<ETX>
```

```text
02 73 57 41 20 62 49 6E 74 65 72 6C 61 63 65 64 4D 6F 64 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 57 41 20 62 49 6E 74 65 72 6C 61 63 65 64 4D 6F 64 65 20 0F
```
