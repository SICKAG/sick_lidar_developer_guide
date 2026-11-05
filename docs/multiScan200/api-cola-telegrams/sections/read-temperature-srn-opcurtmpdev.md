# Read Temperature [sRN OPcurtmpdev]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Operating Data

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-temperature-srn-opcurtmpdev

Read the internal temperature of the device. It does not indicate the ambient temperature.

**Telegram structure: sRN OPcurtmpdev**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read temperature of the device | String | 11 | | `OPcurtmpdev` | `4F 50 63 75 72 74 6D 70 64 65 76` |

**Example: sRN OPcurtmpdev**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}OPcurtmpdev<ETX>
```

```text
sRN OPcurtmpdev
```

```text
02 73 52 4E 20 4F 50 63 75 72 74 6D 70 64 65 76 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 4F 50 63 75 72 74 6D 70 64 65 76 2A
```

```text
73 52 4E 20 4F 50 63 75 72 74 6D 70 64 65 76
```

**Telegram structure: sRA OPcurtmpdev**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read temperature of the device | String | 11 | | `OPcurtmpdev` | `4F 50 63 75 72 74 6D 70 64 65 76` |
| Temperature data | [°C] | Float_32 | 4 | (-50°C … +100°C) | `C2480000h …42C80000h` | `C2 48 00 00 … 42 C8 00 00` |

**Example: sRA OPcurtmpdev**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}OPcurtmpdev{SPC}4265970A<ETX>
```

```text
02 73 52 41 20 4F 50 63 75 72 74 6D 70 64 65 76 20 34 32 36 35 39 37 30 41 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 4F 50 63 75 72 74 6D 70 64 65 76 20 42 65 97 0A BF
```
