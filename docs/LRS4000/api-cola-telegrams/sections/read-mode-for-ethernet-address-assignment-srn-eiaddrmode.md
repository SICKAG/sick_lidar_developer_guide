# Read Mode for Ethernet Address Assignment [sRN EIAddrMode]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-mode-for-ethernet-address-assignment-srn-eiaddrmode

Returns the mode for the IP address assignment (static or DHCP).

**Telegram structure: sRN EIAddrMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Mode for Ethernet Address Assignment | String | 10 | | `EIAddrMode` | `45 49 41 64 64 72 4D 6F 64 65` |

**Example: sRN EIAddrMode**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIAddrMode<ETX>
```

```text
<STX>sRN EIAddrMode<ETX>
```

```text
sRN EIAddrMode
```

```text
02 73 52 4E 20 45 49 41 64 64 72 4D 6F 64 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 52 4E 20 45 49 41 64 64 72 4D 6F 64 65 53
```

```text
73 52 4E 20 45 49 41 64 64 72 4D 6F 64 65
```

**Telegram structure: sRA EIAddrMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Mode for Ethernet Address Assignment | String | 10 | | `EIAddrMode` | `45 49 41 64 64 72 4D 6F 64 65` |
| EtherAddressingMode | Which mode to use for Ethernet address assignment | Enum_8 | 1 | TX_IP_STATIC:<br>TX_IP_DHCP: | `0<br>1` | `00<br>01` |

**Example: sRA EIAddrMode**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIAddrMode{SPC}0<ETX>
```

```text
02 73 52 41 20 45 49 41 64 64 72 4D 6F 64 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 41 20 45 49 41 64 64 72 4D 6F 64 65 20 00 7C
```
