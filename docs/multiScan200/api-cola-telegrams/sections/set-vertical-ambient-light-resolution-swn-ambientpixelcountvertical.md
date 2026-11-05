# Set Vertical Ambient Light Resolution [sWN ambientPixelCountVertical]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-vertical-ambient-light-resolution-swn-ambientpixelcountvertical

Set the vertical resolution of the ambient light image: **Full** (all ambient light rows) or **Matching** (one ambient light pixel per beam, matching the point cloud).

Required user level: Authorized client.

**Telegram structure: sWN ambientPixelCountVertical**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | Vertical resolution of the ambient light image. | String | 25 | | `ambientPixelCountVertical` | `61 6D 62 69 65 6E 74 50 69 78 65 6C 43 6F 75 6E 74 56 65 72 74 69 63 61 6C` |
| Value | Vertical resolution of the ambient light image. | Enum_8 | 1 | Full:<br>Matching: | `0<br>1` | `00<br>01` |

**Example: sWN ambientPixelCountVertical**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ambientPixelCountVertical{SPC}1<ETX>
```

```text
sWN ambientPixelCountVertical 1
```

```text
02 73 57 4E 20 61 6D 62 69 65 6E 74 50 69 78 65 6C 43 6F 75 6E 74 56 65 72 74 69 63 61 6C 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 57 4E 20 61 6D 62 69 65 6E 74 50 69 78 65 6C 43 6F 75 6E 74 56 65 72 74 69 63 61 6C 20 01 2A
```

```text
73 57 4E 20 61 6D 62 69 65 6E 74 50 69 78 65 6C 43 6F 75 6E 74 56 65 72 74 69 63 61 6C 20 01
```

**Telegram structure: sWA ambientPixelCountVertical**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 25 | | `ambientPixelCountVertical` | `61 6D 62 69 65 6E 74 50 69 78 65 6C 43 6F 75 6E 74 56 65 72 74 69 63 61 6C` |

**Example: sWA ambientPixelCountVertical**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}ambientPixelCountVertical<ETX>
```

```text
02 73 57 41 20 61 6D 62 69 65 6E 74 50 69 78 65 6C 43 6F 75 6E 74 56 65 72 74 69 63 61 6C 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 57 41 20 61 6D 62 69 65 6E 74 50 69 78 65 6C 43 6F 75 6E 74 56 65 72 74 69 63 61 6C 20 24
```
