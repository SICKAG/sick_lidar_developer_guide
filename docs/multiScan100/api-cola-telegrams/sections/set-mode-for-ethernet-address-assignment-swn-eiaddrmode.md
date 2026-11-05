# Set Mode for Ethernet Address Assignment [sWN EIAddrMode]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#set-mode-for-ethernet-address-assignment-swn-eiaddrmode

This Command determines the mode for the ethernet address assignment.

**Telegram structure: sWN EIAddrMode**

| Telegram part               | Description                              | Variable | Length | Additional details | Values CoLa A (ASCII)                     | Values CoLa B (Binary)                                       |
| --------------------------- | ---------------------------------------- | -------- | ------ | ------------------ | ----------------------------------------- | ------------------------------------------------------------ |
| Command type                | Write                                    | String   | 3      |                    | `sWN`        | `73 57 4E`                      |
| Command                     | Set mode for ethernet address assignment | String   | 10     |                    | `EIAddrMode` | `45 49 41 64 64 72 4D 6F 64 65` |
| Ethernet address assignment | Static IP address / DHCP                 | Enum_8   | 1      | Static:<br>DHCP:   | `0<br>1`     | `00<br>01`                      |

**Example: sWN EIAddrMode**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EIAddrMode{SPC}0<ETX>
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

| Telegram part | Description                              | Variable | Length | Additional details | Values CoLa A (ASCII)                     | Values CoLa B (Binary)                                       |
| ------------- | ---------------------------------------- | -------- | ------ | ------------------ | ----------------------------------------- | ------------------------------------------------------------ |
| Command type  | Answer                                   | String   | 3      |                    | `sWA`        | `73 57 41`                      |
| Command       | Set mode for ethernet address assignment | String   | 10     |                    | `EIAddrMode` | `45 49 41 64 64 72 4D 6F 64 65` |

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
