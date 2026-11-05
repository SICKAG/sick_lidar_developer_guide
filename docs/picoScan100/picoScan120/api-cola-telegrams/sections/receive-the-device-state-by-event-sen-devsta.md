# Receive the Device State by Event [sEN DevSta]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Status

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#receive-the-device-state-by-event-sen-devsta

This telegram reads the device state.

**Telegram structure: sEN DevSta**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Read the current device state | String | 13 | | `DevSta` | `44 65 76 53 74 61` |
| Data | Start/ Stop | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN DevSta**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}DevSta{SPC}1<ETX>
```

```text
<STX>sEN DevSta 1<ETX>
```

```text
sEN DevSta 1
```

```text
02 73 45 4E 20 44 65 76 53 74 61 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 45 4E 20 44 65 76 53 74 61 20 01 68
```

```text
73 45 4E 20 44 65 76 53 74 61 20 01
```

**Telegram structure: sSN DevSta**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sSN` | `73 53 4E` |
| Command | Read the current device state | String | 13 | | `DevSta` | `44 65 76 53 74 61` |
| Status code | Code number | Enum_8 | 1 | Reserved:<br>Startup:<br>Service mode:<br>Normal operation:<br>Suspended operation:<br>Service recommended:<br>Service required:<br>Recoverable error:<br>Fatal error: | `0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8` | `00<br>01<br>02<br>03<br>04<br>05<br>06<br>07<br>08` |

**Example: sSN DevSta**

**CoLa A (ASCII)**

```text
<STX>sSN{SPC}DevSta{SPC}3<ETX>
```

```text
02 73 53 4E 20 44 65 76 53 74 61 20 33 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 53 4E 20 44 65 76 53 74 61 20 03 7C
```
