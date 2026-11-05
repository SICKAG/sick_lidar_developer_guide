# Read IP Mask [sRN EImask]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#read-ip-mask-srn-eimask

Read the subnet mask of the device.

**Telegram structure: sRN EImask**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read IP mask | String | 6 | | `EImask` | `45 49 6D 61 73 6B` |

**Example: sRN EImask**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EImask<ETX>
```

```text
<STX>sRN EImask<ETX>
```

```text
sRN EImask
```

```text
02 73 52 4E 20 45 49 6D 61 73 6B 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0A 73 52 4E 20 45 49 6D 61 73 6B 57
```

```text
73 52 4E 20 45 49 6D 61 73 6B
```

**Telegram structure: sRA EImask**

| Telegram part | Description | Variable | Length | Sensor | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read IP mask | String | 6 | | `EImask` | `45 49 6D 61 73 6B` |
| IP mask | Default: 255.255.255.0 | Uint_8 | 1 | First part of IP mask | `0 …+255d (00…FF)` | `00 … FF` |
| IP mask | Default: 255.255.255.0 | Uint_8 | 1 | Second part of IP mask | `0 …+255d (00…FF)` | `00 … FF` |
| IP mask | Default: 255.255.255.0 | Uint_8 | 1 | Third part of IP mask | `0 …+255d (00…FF)` | `00 … FF` |
| IP mask | Default: 255.255.255.0 | Uint_8 | 1 | Fourth part of IP mask | `0 …+255d (00…FF)` | `00 … FF` |

**Example: sRA EImask 255.255.254.0**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EImask{SPC}FF{SPC}FF{SPC}FE{SPC}00<ETX>
```

```text
02 73 52 41 20 45 49 6D 61 73 6B 20 46 46 20 46 46 20 46 45 20 30 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 41 20 45 49 6D 61 73 6B 20 FF FF FE 00 86
```
