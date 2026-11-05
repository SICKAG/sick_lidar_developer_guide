# Read Scan Data Preformatting [sRN ScanDataPreformatting]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-scan-data-preformatting-srn-scandatapreformatting

Returns the azimuth reordering mode for the layers. In Raw mode, no reordering is performed. In Rectified mode, the layers are reordered so that their azimuth angle ranges match as closely as possible.

**Telegram structure: sRN ScanDataPreformatting**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Scan Data Preformatting | String | 21 | | `ScanDataPreformatting` | `53 63 61 6E 44 61 74 61 50 72 65 66 6F 72 6D 61 74 74 69 6E 67` |

**Example: sRN ScanDataPreformatting**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ScanDataPreformatting<ETX>
```

```text
<STX>sRN ScanDataPreformatting<ETX>
```

```text
sRN ScanDataPreformatting
```

```text
02 73 52 4E 20 53 63 61 6E 44 61 74 61 50 72 65 66 6F 72 6D 61 74 74 69 6E 67 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 52 4E 20 53 63 61 6E 44 61 74 61 50 72 65 66 6F 72 6D 61 74 74 69 6E 67 10
```

```text
73 52 4E 20 53 63 61 6E 44 61 74 61 50 72 65 66 6F 72 6D 61 74 74 69 6E 67
```

**Telegram structure: sRA ScanDataPreformatting**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Scan Data Preformatting | String | 21 | | `ScanDataPreformatting` | `53 63 61 6E 44 61 74 61 50 72 65 66 6F 72 6D 61 74 74 69 6E 67` |
| ScanDataPreformatting | Reordering of the different layers in azimuth. In "Raw" mode no reordering is performed, in "Rectified" mode the layers are reordered such that the azimuth angle range of the different layers match as good as possible. This increases the latency by at least one segment. | Enum_8 | 1 | Raw:<br>Rectified: | `1<br>2` | `01<br>02` |

**Example: sRA ScanDataPreformatting**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ScanDataPreformatting{SPC}1<ETX>
```

```text
02 73 52 41 20 53 63 61 6E 44 61 74 61 50 72 65 66 6F 72 6D 61 74 74 69 6E 67 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 52 41 20 53 63 61 6E 44 61 74 61 50 72 65 66 6F 72 6D 61 74 74 69 6E 67 20 01 3E
```
