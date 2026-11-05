# Set Performance Profile [sWN PerformanceProfileNumber]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-performance-profile-swn-performanceprofilenumber

Define which Dynamic Sensing Profile shall be used, .

**Telegram structure: sWN PerformanceProfileNumber**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set Dynamic Sensing Profile | String | 24 | | `PerformanceProfileNumber` | `50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72` |
| Performance Profile | Selection of Dynamic Sensing Profile | Enum_8 | 1 | Profile 1:<br>Profile 2:<br>Profile 3:<br>Profile 4:<br>Profile 5:<br>Profile 6:<br>Profile 7:<br>Profile 8:<br>Profile 9:<br>Profile 10:<br>Profile 11: | `1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11` | `01<br>02<br>03<br>04<br>05<br>06<br>07<br>08<br>09<br>0A<br>0B` |

**Example: sWN PerformanceProfileNumber**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}PerformanceProfileNumber{SPC}2<ETX>
```

```text
<STX>sWN PerformanceProfileNumber 2<ETX>
```

```text
sWN PerformanceProfileNumber 2
```

```text
02 73 57 4E 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72 20 32 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 57 4E 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72 20 02 58
```

```text
73 57 4E 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72 20 02
```

**Telegram structure: sWA PerformanceProfileNumber**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set Performance Profile | String | 24 | | `PerformanceProfileNumber` | `50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72` |

**Example: sWA PerformanceProfileNumber**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}PerformanceProfileNumber<ETX>
```

```text
02 73 57 41 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1D 73 57 41 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72 20 55
```
