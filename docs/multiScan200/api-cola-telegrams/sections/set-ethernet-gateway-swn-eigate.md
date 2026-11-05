# Set Ethernet Gateway [sWN EIgate]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-ethernet-gateway-swn-eigate

Set the Ethernet gateway. Save the parameters permanently; the change takes effect after a reboot. The setting must match the network, otherwise the device cannot be reached.

Required user level: Authorized client.

**Telegram structure: sWN EIgate**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set gateway address | String | 6 | | `EIgate` | `45 49 67 61 74 65` |
| Gateway address | Set values | Uint_8 | 1 | First part of gateway address | `0 …+255d (00…FF)` | `00 …FF` |
| Gateway address | Set values | Uint_8 | 1 | Second part of gateway address | `0 …+255d (00…FF)` | `00 …FF` |
| Gateway address | Set values | Uint_8 | 1 | Third part of gateway address | `0 …+255d (00…FF)` | `00 …FF` |
| Gateway address | Set values | Uint_8 | 1 | Fourth part of gateway address | `0 …+255d (00…FF)` | `00 …FF` |

**Example: sWN EIgate**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EIgate{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
sWN EIgate 0 0 0 0
```

```text
02 73 57 4E 20 45 49 67 61 74 65 20 30 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 57 4E 20 45 49 67 61 74 65 20 00 00 00 00 71
```

```text
73 57 4E 20 45 49 67 61 74 65 20 00 00 00 00
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
