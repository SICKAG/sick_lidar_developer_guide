# Read Vertical Ambient Pixel Count [sRN ambientPixelCountVertical]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-vertical-ambient-pixel-count-srn-ambientpixelcountvertical

Returns the vertical ambient pixel count.

**Telegram structure: sRN ambientPixelCountVertical**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Vertical Ambient Pixel Count | String | 25 | | `ambientPixelCountVertical` | `61 6D 62 69 65 6E 74 50 69 78 65 6C 43 6F 75 6E 74 56 65 72 74 69 63 61 6C` |

**Example: sRN ambientPixelCountVertical**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ambientPixelCountVertical<ETX>
```

```text
<STX>sRN ambientPixelCountVertical<ETX>
```

```text
sRN ambientPixelCountVertical
```

```text
02 73 52 4E 20 61 6D 62 69 65 6E 74 50 69 78 65 6C 43 6F 75 6E 74 56 65 72 74 69 63 61 6C 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1D 73 52 4E 20 61 6D 62 69 65 6E 74 50 69 78 65 6C 43 6F 75 6E 74 56 65 72 74 69 63 61 6C 0E
```

```text
73 52 4E 20 61 6D 62 69 65 6E 74 50 69 78 65 6C 43 6F 75 6E 74 56 65 72 74 69 63 61 6C
```

**Telegram structure: sRA ambientPixelCountVertical**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Vertical Ambient Pixel Count | String | 25 | | `ambientPixelCountVertical` | `61 6D 62 69 65 6E 74 50 69 78 65 6C 43 6F 75 6E 74 56 65 72 74 69 63 61 6C` |
| ambientPixelCountVertical | Vertical resolution of the ambient light image. FULL: Maximal number of vertical pixels. MATCHING: numberOfPixel = numberOfScanLayers | Enum_8 | 1 | FULL:<br>MATCHING: | `0<br>1` | `00<br>01` |

**Example: sRA ambientPixelCountVertical**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ambientPixelCountVertical{SPC}1<ETX>
```

```text
02 73 52 41 20 61 6D 62 69 65 6E 74 50 69 78 65 6C 43 6F 75 6E 74 56 65 72 74 69 63 61 6C 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 52 41 20 61 6D 62 69 65 6E 74 50 69 78 65 6C 43 6F 75 6E 74 56 65 72 74 69 63 61 6C 20 01 20
```
