# Set the Content of the Compact Format Telegram Type 1 [sWN compactTelegramType1Content]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-the-content-of-the-compact-format-telegram-type-1-swn-compacttelegramtype1content

Sets the content of the Compact format telegram type 1 (e.g. whether to include the RSSI values).

**Telegram structure: sWN compactTelegramType1Content**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | compactTelegramType1Content | String | 27 | | `compactTelegramType1Content` | `63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74` |
| includeRssi | If true, RSSIs are serialized | Bool_1 | 1 | Disable:<br>Enable: | `0<br>1` | `00<br>01` |
| includeProperties | If true, properties are serialized | Bool_1 | 1 | Disable:<br>Enable: | `0<br>1` | `00<br>01` |

**Example: sWN compactTelegramType1Content**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}compactTelegramType1Content{SPC}1{SPC}1<ETX>
```

```text
<STX>sWN compactTelegramType1Content 1 1<ETX>
```

```text
sWN compactTelegramType1Content 1 1
```

```text
02 73 57 4E 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74 20 31 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 22 73 57 4E 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74 20 01 01 6C
```

```text
73 57 4E 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74 20 01 01
```

**Telegram structure: sWA compactTelegramType1Content**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 27 | | `compactTelegramType1Content` | `63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74` |

**Example: sWA compactTelegramType1Content**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}compactTelegramType1Content<ETX>
```

```text
02 73 57 41 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 57 41 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 31 43 6F 6E 74 65 6E 74 20 63
```
