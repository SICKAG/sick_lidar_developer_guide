# Set Blooming Filter [sWN bloomingFilter]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-blooming-filter-swn-bloomingfilter

Configure the blooming filter. See [Filter Details](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/#blooming-filter).

Required user level: Authorized client.

**Telegram structure: sWN bloomingFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | Blooming Filter | String | 14 | | `bloomingFilter` | `62 6C 6F 6F 6D 69 6E 67 46 69 6C 74 65 72` |
| strength | | Enum_8 | 1 | Low:<br>Medium:<br>Strong: | `0<br>1<br>2` | `00<br>01<br>02` |
| enable | Enable/ disable Blooming Filter | Bool_1 | 1 | Disable:<br>Enable: | `0<br>1` | `00<br>01` |

**Example: sWN bloomingFilter - Medium strength, disabled**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}bloomingFilter{SPC}1{SPC}0<ETX>
```

```text
sWN bloomingFilter 1 0
```

```text
02 73 57 4E 20 62 6C 6F 6F 6D 69 6E 67 46 69 6C 74 65 72 20 31 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 57 4E 20 62 6C 6F 6F 6D 69 6E 67 46 69 6C 74 65 72 20 01 00 48
```

```text
73 57 4E 20 62 6C 6F 6F 6D 69 6E 67 46 69 6C 74 65 72 20 01 00
```

**Telegram structure: sWA bloomingFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 14 | | `bloomingFilter` | `62 6C 6F 6F 6D 69 6E 67 46 69 6C 74 65 72` |

**Example: sWA bloomingFilter**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}bloomingFilter<ETX>
```

```text
02 73 57 41 20 62 6C 6F 6F 6D 69 6E 67 46 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 41 20 62 6C 6F 6F 6D 69 6E 67 46 69 6C 74 65 72 20 46
```
