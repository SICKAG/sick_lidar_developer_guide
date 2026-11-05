# Set Compact Telegram Type 6 Content [sWN compactTelegramType6Content]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-compact-telegram-type-6-content-swn-compacttelegramtype6content

Define which data channels are serialized in Compact telegram type 6. See [Compact Format](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/#type-6-scan-data-multiscan200).

Required user level: Authorized client.

**Telegram structure: sWN compactTelegramType6Content**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | Defines which data channels are serialized in the compact output of the telegram type 6 (multiScan270 specific compact format). | String | 27 | | `compactTelegramType6Content` | `63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 36 43 6F 6E 74 65 6E 74` |
| includeRssi | If true, RSSIs are serialized | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| includeProperties | If true, properties are serialized | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| includeAmbientLight | If true, ambient light is serialized | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| reserved | | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sWN compactTelegramType6Content**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}compactTelegramType6Content{SPC}1{SPC}0{SPC}1{SPC}0<ETX>
```

```text
sWN compactTelegramType6Content 1 0 1 0
```

```text
02 73 57 4E 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 36 43 6F 6E 74 65 6E 74 20 31 20 30 20 31 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 24 73 57 4E 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 36 43 6F 6E 74 65 6E 74 20 01 00 01 00 6B
```

```text
73 57 4E 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 36 43 6F 6E 74 65 6E 74 20 01 00 01 00
```

**Telegram structure: sWA compactTelegramType6Content**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 27 | | `compactTelegramType6Content` | `63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 36 43 6F 6E 74 65 6E 74` |

**Example: sWA compactTelegramType6Content**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}compactTelegramType6Content<ETX>
```

```text
02 73 57 41 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 36 43 6F 6E 74 65 6E 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 57 41 20 63 6F 6D 70 61 63 74 54 65 6C 65 67 72 61 6D 54 79 70 65 36 43 6F 6E 74 65 6E 74 20 64
```
