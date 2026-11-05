# Read Compact Telegram Type 6 Content [sRN compactTelegramType6Content]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-compact-telegram-type-6-content-srn-compacttelegramtype6content

Returns the optional channels in the scan data compact telegram type 6 (multiScan270-specific compact format).

**Telegram structure: sRN compactTelegramType6Content**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Compact Telegram Type 6 Content | String | 27 | | `compactTelegramType6Content` | `63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 36 43 6F 6E 74 65 6E 74` |

**Example: sRN compactTelegramType6Content**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}compactTelegramType6Content<ETX>
```

```text
<STX>sRN compactTelegramType6Content<ETX>
```

```text
sRN compactTelegramType6Content
```

```text
02 73 52 4E 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 36 43 6F 6E 74 65 6E 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 52 4E 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 36 43 6F 6E 74 65 6E 74 4E
```

```text
73 52 4E 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 36 43 6F 6E 74 65 6E 74
```

**Telegram structure: sRA compactTelegramType6Content**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Compact Telegram Type 6 Content | String | 27 | | `compactTelegramType6Content` | `63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 36 43 6F 6E 74 65 6E 74` |
| includeRssi | If true, RSSIs are serialized | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| includeProperties | If true, properties are serialized | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| includeAmbientLight | If true, ambient light is serialized | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| reserved | reserved | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sRA compactTelegramType6Content**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}compactTelegramType6Content{SPC}1{SPC}1{SPC}1{SPC}0<ETX>
```

```text
02 73 52 41 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 36 43 6F 6E 74 65 6E 74 20 31 20 31 20 31 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 24 73 52 41 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 36 43 6F 6E 74 65 6E 74 20 01 01 01 00 60
```
