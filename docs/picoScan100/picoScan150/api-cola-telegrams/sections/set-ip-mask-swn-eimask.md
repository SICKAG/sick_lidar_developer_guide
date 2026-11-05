# Set IP Mask [sWN EImask]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-ip-mask-swn-eimask

Define the subnet mask of the device.

Save permanently to set values. Changes will be active after rebooting the device. Settings must correspond with network in which scanner is used. Else device cannot be found any more.

**Telegram structure: sWN EImask**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set IP mask | String | 6 | | `EImask` | `45 49 6D 61 73 6B` |
| IP mask | Set values | Uint_8 | 1 | First part of IP mask | `0 …+255d (00…FF)` | `00 …FF` |
| IP mask | Set values | Uint_8 | 1 | Second part of IP mask | `0 …+255d (00…FF)` | `00 …FF` |
| IP mask | Set values | Uint_8 | 1 | Third part of IP mask | `0 …+255d (00…FF)` | `00 …FF` |
| IP mask | Set values | Uint_8 | 1 | Fourth part of IP mask | `0 …+255d (00…FF)` | `00 …FF` |

**Example: sWN EImask 255.255.254.0**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EImask{SPC}FF{SPC}FF{SPC}FE{SPC}00<ETX>
```

```text
<STX>sWN EImask FF FF FE 00<ETX>
```

```text
sWN EImask FF FF FE 00
```

```text
02 73 57 4E 20 45 49 6D 61 73 6B 20 46 46 20 46 46 20 46 45 20 30 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 57 4E 20 45 49 6D 61 73 6B 20 FF FF FE 00 8C
```

```text
73 57 4E 20 45 49 6D 61 73 6B 20 FF FF FE 00
```

**Telegram structure: sWA EImask**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set IP mask | String | 6 | | `EImask` | `45 49 6D 61 73 6B` |

**Example: sWA EImask**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EImask<ETX>
```

```text
02 73 57 41 20 45 49 6D 61 73 6B 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0B 73 57 41 20 45 49 6D 61 73 6B 20 7D
```
