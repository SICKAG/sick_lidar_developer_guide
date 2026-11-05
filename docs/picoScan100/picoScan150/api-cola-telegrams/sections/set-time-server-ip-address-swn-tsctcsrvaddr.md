# Set Time Server IP Address [sWN TSCTCSrvAddr]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Date and System Time

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-time-server-ip-address-swn-tsctcsrvaddr

Define the IP address from which the device will receive the time synchronization.

**Telegram structure: sWN TSCTCSrvAddr**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set time server IP address | String | 12 | | `TSCTCSrvAddr` | `54 53 43 54 43 53 72 76 41 64 64 72` |
| IP address data | Set values | Uint_8 | 1 | First part of IP address | `0 …+255d (00…FF)` | `00 … FF` |
| IP address data | Set values | Uint_8 | 1 | Second part of IP address | `0 …+255d (00…FF)` | `00 … FF` |
| IP address data | Set values | Uint_8 | 1 | Third part of IP address | `0 …+255d (00…FF)` | `00 … FF` |
| IP address data | Set values | Uint_8 | 1 | Fourth part of IP address | `0 …+255d (00…FF)` | `00 … FF` |

**Example: sWN TSCTCSrvAddr 192.168.0.11**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}TSCTCSrvAddr{SPC}C0{SPC}A8{SPC}00{SPC}0B<ETX>
```

```text
<STX>sWN TSCTCSrvAddr C0 A8 00 0B<ETX>
```

```text
sWN TSCTCSrvAddr C0 A8 00 0B
```

```text
02 73 57 4E 20 54 53 43 54 43 53 72 76 41 64 64 72 20 43 30 20 41 38 20 30 30 20 30 42 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 57 4E 20 54 53 43 54 43 53 72 76 41 64 64 72 20 C0 A8 00 0B 3E
```

```text
73 57 4E 20 54 53 43 54 43 53 72 76 41 64 64 72 20 C0 A8 00 0B
```

**Telegram structure: sWA TSCTCSrvAddr**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set time server IP address | String | 12 | | `TSCTCSrvAddr` | `54 53 43 54 43 53 72 76 41 64 64 72` |

**Example: sWA TSCTCSrvAddr**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}TSCTCSrvAddr<ETX>
```

```text
02 73 57 41 20 54 53 43 54 43 53 72 76 41 64 64 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 57 41 20 54 53 43 54 43 53 72 76 41 64 64 72 20 52
```
