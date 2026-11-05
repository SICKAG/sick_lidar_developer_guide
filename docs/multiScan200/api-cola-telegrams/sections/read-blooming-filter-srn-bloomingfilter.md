# Read Blooming Filter [sRN bloomingFilter]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-blooming-filter-srn-bloomingfilter

Returns the blooming filter.

**Telegram structure: sRN bloomingFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Blooming Filter | String | 14 | | `bloomingFilter` | `62 6C 6F 6F 6D 69 6E 67 46 69 6C 74 65 72` |

**Example: sRN bloomingFilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}bloomingFilter<ETX>
```

```text
<STX>sRN bloomingFilter<ETX>
```

```text
sRN bloomingFilter
```

```text
02 73 52 4E 20 62 6C 6F 6F 6D 69 6E 67 46 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 62 6C 6F 6F 6D 69 6E 67 46 69 6C 74 65 72 6C
```

```text
73 52 4E 20 62 6C 6F 6F 6D 69 6E 67 46 69 6C 74 65 72
```

**Telegram structure: sRA bloomingFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Blooming Filter | String | 14 | | `bloomingFilter` | `62 6C 6F 6F 6D 69 6E 67 46 69 6C 74 65 72` |
| strength | strength | Enum_8 | 1 | LOW:<br>MEDIUM:<br>STRONG: | `0<br>1<br>2` | `00<br>01<br>02` |
| enable | If true a detected blooming point is invalidated (aka distance set to zero) and subsequent echoes are moved up. Otherwise, the point is flagged in the properties channel | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sRA bloomingFilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}bloomingFilter{SPC}1{SPC}0<ETX>
```

```text
02 73 52 41 20 62 6C 6F 6F 6D 69 6E 67 46 69 6C 74 65 72 20 31 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 52 41 20 62 6C 6F 6F 6D 69 6E 67 46 69 6C 74 65 72 20 01 00 42
```
