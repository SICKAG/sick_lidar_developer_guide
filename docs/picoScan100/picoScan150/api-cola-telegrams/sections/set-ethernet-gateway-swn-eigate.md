# Set Ethernet Gateway [sWN EIgate]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-ethernet-gateway-swn-eigate

Change Ethernet gateway IP address (TCP/IP)

Save permanently to set values. Changes will be active after rebooting the device. Settings must correspond with network in which scanner is used. Else device cannot be found any more.

**Telegram structure: sWN EIgate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set gateway address | String | 6 | | `EIgate` | `45 49 67 61 74 65` |
| Gateway address | Set values | Uint_8 | 1 | First part of gateway address | `0 …+255d (00…FF)` | `00 …FF` |
| Gateway address | Set values | Uint_8 | 1 | Second part of gateway address | `0 …+255d (00…FF)` | `00 …FF` |
| Gateway address | Set values | Uint_8 | 1 | Third part of gateway address | `0 …+255d (00…FF)` | `00 …FF` |
| Gateway address | Set values | Uint_8 | 1 | Fourth part of gateway address | `0 …+255d (00…FF)` | `00 …FF` |

**Example: sWN EIgate 192.168.0.1**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EIgate{SPC}C0{SPC}A8{SPC}00{SPC}01<ETX>
```

```text
<STX>sWN EIgate C0 A8 00 01<ETX>
```

```text
sWN EIgate C0 A8 00 01
```

```text
02 73 57 4E 20 45 49 67 61 74 65 20 43 30 20 41 38 20 30 30 20 30 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 57 4E 20 45 49 67 61 74 65 20 C0 A8 00 01 18
```

```text
73 57 4E 20 45 49 67 61 74 65 20 C0 A8 00 01
```

**Telegram structure: sWA EIgate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set gateway address | String | 6 | | `EIgate` | `45 49 67 61 74 65` |

**Example: sWA EIgate**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EIgate<ETX>
```

```text
02 73 57 41 20 45 49 67 61 74 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0B 73 57 41 20 45 49 67 61 74 65 20 7E
```
