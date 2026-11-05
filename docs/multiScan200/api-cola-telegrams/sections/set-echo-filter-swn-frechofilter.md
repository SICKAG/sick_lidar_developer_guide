# Set Echo Filter [sWN FREchoFilter]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-echo-filter-swn-frechofilter

Select which echoes are output when one beam returns several distance values.

Required user level: Authorized client.

**Telegram structure: sWN FREchoFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set echo filter | String | 12 | | `FREchoFilter` | `46 52 45 63 68 6F 46 69 6C 74 65 72` |
| Status code | Code number | Enum_8 | 1 | First echo:<br>All echos:<br>Last echo: | `0<br>1<br>2` | `00<br>01<br>02` |

**Example: sWN FREchoFilter - All echoes**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}FREchoFilter{SPC}1<ETX>
```

```text
sWN FREchoFilter 1
```

```text
02 73 57 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 57 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 01 7E
```

```text
73 57 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 01
```

**Telegram structure: sWA FREchoFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set echo filter | String | 12 | | `FREchoFilter` | `46 52 45 63 68 6F 46 69 6C 74 65 72` |

**Example: sWA FREchoFilter**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}FREchoFilter<ETX>
```

```text
02 73 57 41 20 46 52 45 63 68 6F 46 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 57 41 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 70
```
