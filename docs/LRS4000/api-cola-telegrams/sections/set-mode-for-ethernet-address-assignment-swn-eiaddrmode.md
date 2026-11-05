# Set Mode for Ethernet Address Assignment [sWN EIAddrMode]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#set-mode-for-ethernet-address-assignment-swn-eiaddrmode

Sets the mode for the IP address assignment (static or DHCP). This telegram requires at least user level: Authorized Client.

**Telegram structure: sWN EIAddrMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set Mode for Ethernet Address Assignment | String | 10 | | `EIAddrMode` | `45 49 41 64 64 72 4D 6F 64 65` |
| EtherAddressingMode | Which mode to use for Ethernet address assignment | Enum_8 | 1 | TX_IP_STATIC:<br>TX_IP_DHCP: | `0<br>1` | `00<br>01` |

**Example: sWN EIAddrMode**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EIAddrMode{SPC}0<ETX>
```

```text
<STX>sWN EIAddrMode 0<ETX>
```

```text
sWN EIAddrMode 0
```

```text
02 73 57 4E 20 45 49 41 64 64 72 4D 6F 64 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 57 4E 20 45 49 41 64 64 72 4D 6F 64 65 20 00 76
```

```text
73 57 4E 20 45 49 41 64 64 72 4D 6F 64 65 20 00
```

**Telegram structure: sWA EIAddrMode**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set Mode for Ethernet Address Assignment | String | 10 | | `EIAddrMode` | `45 49 41 64 64 72 4D 6F 64 65` |

**Example: sWA EIAddrMode**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EIAddrMode<ETX>
```

```text
02 73 57 41 20 45 49 41 64 64 72 4D 6F 64 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 57 41 20 45 49 41 64 64 72 4D 6F 64 65 20 79
```
