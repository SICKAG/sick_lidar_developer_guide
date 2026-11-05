# Set the Session Timeout for TCP/IP Communication [sWN EtherSessionTimeout]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-the-session-timeout-for-tcpip-communication-swn-ethersessiontimeout

Set the session timeout for TCP/IP communication (e.g. LMDscandata communication). Be careful with low values as they might cause unexpected disconnections. Write access requires user level: Service.

**Telegram structure: sWN EtherSessionTimeout**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | EtherSessionTimeout | String | 19 | | `EtherSessionTimeout` | `45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74` |
| Value | Session timeout in ms | UInt_32 | 4 | | `+15000` | `00 00 3A 98` |

**Example: sWN EtherSessionTimeout**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EtherSessionTimeout{SPC}+15000<ETX>
```

```text
<STX>sWN EtherSessionTimeout +15000<ETX>
```

```text
sWN EtherSessionTimeout +15000
```

```text
02 73 57 4E 20 45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74 20 2B 31 35 30 30 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 57 4E 20 45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74 20 00 00 3A 98 83
```

```text
73 57 4E 20 45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74 20 00 00 3A 98
```

**Telegram structure: sWA EtherSessionTimeout**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 19 | | `EtherSessionTimeout` | `45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74` |

**Example: sWA EtherSessionTimeout**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EtherSessionTimeout<ETX>
```

```text
02 73 57 41 20 45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 57 41 20 45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74 20 2E
```
