# Read Fallback for DHCP [sRN EIDHCPFallback]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-fallback-for-dhcp-srn-eidhcpfallback

Returns the mode for the DHCP fallback (retry or static).

**Telegram structure: sRN EIDHCPFallback**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Fallback for DHCP | String | 14 | | `EIDHCPFallback` | `45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B` |

**Example: sRN EIDHCPFallback**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EIDHCPFallback<ETX>
```

```text
<STX>sRN EIDHCPFallback<ETX>
```

```text
sRN EIDHCPFallback
```

```text
02 73 52 4E 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 70
```

```text
73 52 4E 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B
```

**Telegram structure: sRA EIDHCPFallback**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Fallback for DHCP | String | 14 | | `EIDHCPFallback` | `45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B` |
| EtherDHCPFallback | Fallback if DHCP not successful | Enum_8 | 1 | TX_USE_STATIC_IP:<br>TX_RETRY_DHCP: | `0<br>1` | `00<br>01` |

**Example: sRA EIDHCPFallback**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EIDHCPFallback{SPC}0<ETX>
```

```text
02 73 52 41 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 45 49 44 48 43 50 46 61 6C 6C 62 61 63 6B 20 00 5F
```
