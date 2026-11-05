# Read Ethernet Gateway IP Address Assigned by DHCP [sRN EIgateDHCP]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-ethernet-gateway-ip-address-assigned-by-dhcp-srn-eigatedhcp

Returns the assigned DHCP default gateway address.

**Telegram structure: sRN EIgateDHCP**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Ethernet Gateway IP Address Assigned by DHCP | String | 10 | | `EIgateDHCP` | `45 49 67 61 74 65 44 48 43 50` |

**Example: sRN EIgateDHCP**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIgateDHCP<ETX>
```

```text
<STX>sRN EIgateDHCP<ETX>
```

```text
sRN EIgateDHCP
```

```text
02 73 52 4E 20 45 49 67 61 74 65 44 48 43 50 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 52 4E 20 45 49 67 61 74 65 44 48 43 50 4B
```

```text
73 52 4E 20 45 49 67 61 74 65 44 48 43 50
```

**Telegram structure: sRA EIgateDHCP**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Ethernet Gateway IP Address Assigned by DHCP | String | 10 | | `EIgateDHCP` | `45 49 67 61 74 65 44 48 43 50` |
| EtherIPGateAddressDHCP[] | Value (repeated 4 times) | Uint_8 | 1 | 0 ... 255 | `0 ... FF` | `00 ... FF` |

**Example: sRA EIgateDHCP**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIgateDHCP{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 45 49 67 61 74 65 44 48 43 50 20 30 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 45 49 67 61 74 65 44 48 43 50 20 00 00 00 00 64
```
