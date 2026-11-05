# Read Echo Filter [sRN FREchoFilter]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-echo-filter-srn-frechofilter

Returns the multi-echo filter settings. Depending on the environment the sensor receives several measurement points on the same angular step (multi-echo). The filter can filter out the first echo, the last echo or all echoes.

**Telegram structure: sRN FREchoFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Echo Filter | String | 12 | | `FREchoFilter` | `46 52 45 63 68 6F 46 69 6C 74 65 72` |

**Example: sRN FREchoFilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}FREchoFilter<ETX>
```

```text
<STX>sRN FREchoFilter<ETX>
```

```text
sRN FREchoFilter
```

```text
02 73 52 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72 5A
```

```text
73 52 4E 20 46 52 45 63 68 6F 46 69 6C 74 65 72
```

**Telegram structure: sRA FREchoFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Echo Filter | String | 12 | | `FREchoFilter` | `46 52 45 63 68 6F 46 69 6C 74 65 72` |
| FREchoFilter | general filter for choices first echo / all echos or last echo | Enum_8 | 1 | FIRST_ECHO:<br>ALL_ECHOS:<br>LAST_ECHO: | `0<br>1<br>2` | `00<br>01<br>02` |

**Example: sRA FREchoFilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}FREchoFilter{SPC}1<ETX>
```

```text
02 73 52 41 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 41 20 46 52 45 63 68 6F 46 69 6C 74 65 72 20 01 74
```
