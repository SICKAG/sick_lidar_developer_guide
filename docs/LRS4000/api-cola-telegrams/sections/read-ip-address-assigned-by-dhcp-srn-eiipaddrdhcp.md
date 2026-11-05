# Read IP Address Assigned by DHCP [sRN EIIpAddrDHCP]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-ip-address-assigned-by-dhcp-srn-eiipaddrdhcp

Returns the assigned DHCP IP address.

**Telegram structure: sRN EIIpAddrDHCP**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read IP Address Assigned by DHCP | String | 12 | | `EIIpAddrDHCP` | `45 49 49 70 41 64 64 72 44 48 43 50` |

**Example: sRN EIIpAddrDHCP**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIIpAddrDHCP<ETX>
```

```text
<STX>sRN EIIpAddrDHCP<ETX>
```

```text
sRN EIIpAddrDHCP
```

```text
02 73 52 4E 20 45 49 49 70 41 64 64 72 44 48 43 50 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 4E 20 45 49 49 70 41 64 64 72 44 48 43 50 56
```

```text
73 52 4E 20 45 49 49 70 41 64 64 72 44 48 43 50
```

**Telegram structure: sRA EIIpAddrDHCP**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read IP Address Assigned by DHCP | String | 12 | | `EIIpAddrDHCP` | `45 49 49 70 41 64 64 72 44 48 43 50` |
| EtherIPAddressDHCP[] | Value (repeated 4 times) | Uint_8 | 1 | 0 ... 255 | `0 ... FF` | `00 ... FF` |

**Example: sRA EIIpAddrDHCP**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIIpAddrDHCP{SPC}C0{SPC}A8{SPC}0{SPC}63<ETX>
```

```text
02 73 52 41 20 45 49 49 70 41 64 64 72 44 48 43 50 20 43 30 20 41 38 20 30 20 36 33 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 52 41 20 45 49 49 70 41 64 64 72 44 48 43 50 20 C0 A8 00 63 72
```
