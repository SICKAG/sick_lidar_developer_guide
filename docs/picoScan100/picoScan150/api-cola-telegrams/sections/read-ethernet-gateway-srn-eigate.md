# Read Ethernet Gateway [sRN EIgate]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-ethernet-gateway-srn-eigate

Read for the Ethernet gateway (TCP/IP)

**Telegram structure: sRN EIgate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read gateway address | String | 6 | | `EIgate` | `45 49 67 61 74 65` |

**Example: sRN EIgate**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIgate<ETX>
```

```text
<STX>sRN EIgate<ETX>
```

```text
sRN EIgate
```

```text
02 73 52 4E 20 45 49 67 61 74 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0A 73 52 4E 20 45 49 67 61 74 65 54
```

```text
73 52 4E 20 45 49 67 61 74 65
```

**Telegram structure: sRA EIgate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read gateway address | String | 6 | | `EIgate` | `45 49 67 61 74 65` |
| Gateway address | Default: 0.0.0.0 | Uint_8 | 1 | First part of gateway address | `0 …+255d (00…FF)` | `00 … FF` |
| Gateway address | Default: 0.0.0.0 | Uint_8 | 1 | Second part of gateway address | `0 …+255d (00…FF)` | `00 … FF` |
| Gateway address | Default: 0.0.0.0 | Uint_8 | 1 | Third part of gateway address | `0 …+255d (00…FF)` | `00 … FF` |
| Gateway address | Default: 0.0.0.0 | Uint_8 | 1 | Fourth part of gateway address | `0 …+255d (00…FF)` | `00 … FF` |

**Example: sRA EIgate 192.168.0.1**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIgate{SPC}C0{SPC}A8{SPC}00{SPC}01<ETX>
```

```text
02 73 52 41 20 45 49 67 61 74 65 20 43 30 20 41 38 20 30 30 20 30 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 41 20 45 49 67 61 74 65 20 C0 A8 00 01 12
```
