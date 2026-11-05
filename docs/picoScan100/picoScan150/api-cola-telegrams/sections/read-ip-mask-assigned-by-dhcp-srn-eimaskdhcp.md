# Read IP Mask Assigned by DHCP [sRN EImaskDHCP]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-ip-mask-assigned-by-dhcp-srn-eimaskdhcp

DHCP needs to be set as mode for ethernet assignment.

Read for the IP mask which was assigned by DHCP.

**Telegram structure: sRN EImaskDHCP**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read IP mask assigned by DHCP | String | 10 | | `EImaskDHCP` | `45 49 6D 61 73 6B 44 48 43 50` |

**Example: sRN EImaskDHCP**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EImaskDHCP<ETX>
```

```text
<STX>sRN EImaskDHCP<ETX>
```

```text
sRN EImaskDHCP
```

```text
02 73 52 4E 20 45 49 6D 61 73 6B 44 48 43 50 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 52 4E 20 45 49 6D 61 73 6B 44 48 43 50 48
```

```text
73 52 4E 20 45 49 6D 61 73 6B 44 48 43 50
```

**Telegram structure: sRA EImaskDHCP**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read IP mask assigned by DHCP | String | 10 | | `EImaskDHCP` | `45 49 6D 61 73 6B 44 48 43 50` |
| IP mask | Default: 255.255.255.0 | Uint_8 | 1 | First part of IP mask | `0 …+255d (00…FF)` | `00 … FF` |
| IP mask | Default: 255.255.255.0 | Uint_8 | 1 | Second part of IP mask | `0 …+255d (00…FF)` | `00 … FF` |
| IP mask | Default: 255.255.255.0 | Uint_8 | 1 | Third part of IP mask | `0 …+255d (00…FF)` | `00 … FF` |
| IP mask | Default: 255.255.255.0 | Uint_8 | 1 | Fourth part of IP mask | `0 …+255d (00…FF)` | `00 … FF` |

**Example: sRA EImaskDHCP 255.255.255.0**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EImaskDHCP{SPC}FF{SPC}FF{SPC}FF{SPC}0<ETX>
```

```text
02 73 52 41 20 45 49 6D 61 73 6B 44 48 43 50 20 46 46 20 46 46 20 46 46 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 45 49 6D 61 73 6B 44 48 43 50 20 FF FF FF 00 98
```
