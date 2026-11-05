# Read compactTelegramType1Content [sRN compactTelegramType1Content]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#read-compacttelegramtype1content-srn-compacttelegramtype1content

Returns the content of the Compact format telegram type 1 (e.g. whether to include the RSSI values).

**Telegram structure: sRN compactTelegramType1Content**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read request | String | 3 | | `sRN` | `73 52 4E` |
| Variable name | compactTelegramType1Content | String | 27 | | `compactTelegramType1Content` | `63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74` |

**Example: sRN compactTelegramType1Content**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}compactTelegramType1Content<ETX>
```

```text
<STX>sRN compactTelegramType1Content<ETX>
```

```text
sRN compactTelegramType1Content
```

```text
02 73 52 4E 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1F 73 52 4E 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74 49
```

```text
73 52 4E 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74
```

**Telegram structure: sRA compactTelegramType1Content**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read answer | String | 3 | | `sRA` | `73 52 41` |
| Variable name | compactTelegramType1Content | String | 27 | | `compactTelegramType1Content` | `63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74` |
| includeRssi | If true, RSSIs are serialized | Bool_1 | 1 | Disabled:<br>Enabled: | `0<br>1` | `00<br>01` |
| includeProperties | If true, properties are serialized | Bool_1 | 1 | Disabled:<br>Enabled: | `0<br>1` | `00<br>01` |

**Example: sRA compactTelegramType1Content**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}compactTelegramType1Content{SPC}1{SPC}1<ETX>
```

```text
02 73 52 41 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74 20 31 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 22 73 52 41 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74 20 01 01 66
```
