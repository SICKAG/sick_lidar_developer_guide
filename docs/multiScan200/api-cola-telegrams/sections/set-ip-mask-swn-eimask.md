# Set IP Mask [sWN EImask]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-ip-mask-swn-eimask

Set the subnet mask. Save the parameters permanently; the change takes effect after a reboot. The setting must match the network, otherwise the device cannot be reached.

Required user level: Authorized client.

**Telegram structure: sWN EImask**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set IP mask | String | 6 | | `EImask` | `45 49 6D 61 73 6B` |
| IP mask | Set values | Uint_8 | 1 | First part of IP mask | `0 …+255d (00…FF)` | `00 …FF` |
| IP mask | Set values | Uint_8 | 1 | Second part of IP mask | `0 …+255d (00…FF)` | `00 …FF` |
| IP mask | Set values | Uint_8 | 1 | Third part of IP mask | `0 …+255d (00…FF)` | `00 …FF` |
| IP mask | Set values | Uint_8 | 1 | Fourth part of IP mask | `0 …+255d (00…FF)` | `00 …FF` |

**Example: sWN EImask**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EImask{SPC}FF{SPC}FF{SPC}FF{SPC}0<ETX>
```

```text
sWN EImask FF FF FF 0
```

```text
02 73 57 4E 20 45 49 6D 61 73 6B 20 46 46 20 46 46 20 46 46 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 57 4E 20 45 49 6D 61 73 6B 20 FF FF FF 00 8D
```

```text
73 57 4E 20 45 49 6D 61 73 6B 20 FF FF FF 00
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
