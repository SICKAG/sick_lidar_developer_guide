# Read the Session Timeout for TCP/IP Communication [sRN EtherSessionTimeout]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-the-session-timeout-for-tcpip-communication-srn-ethersessiontimeout

Returns the session timeout for TCP/IP communication (e.g. LMDscandata communication). Be careful with low values as they might cause unexpected disconnections.

**Telegram structure: sRN EtherSessionTimeout**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read request | String | 3 | | `sRN` | `73 52 4E` |
| Variable name | EtherSessionTimeout | String | 19 | | `EtherSessionTimeout` | `45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74` |

**Example: sRN EtherSessionTimeout**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EtherSessionTimeout<ETX>
```

```text
<STX>sRN EtherSessionTimeout<ETX>
```

```text
sRN EtherSessionTimeout
```

```text
02 73 52 4E 20 45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 4E 20 45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74 04
```

```text
73 52 4E 20 45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74
```

**Telegram structure: sRA EtherSessionTimeout**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read answer | String | 3 | | `sRA` | `73 52 41` |
| Variable name | EtherSessionTimeout | String | 19 | | `EtherSessionTimeout` | `45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74` |
| Value | Session timeout in ms | UInt_32 | 4 | | `+15000` | `00 00 3A 98` |

**Example: sRA EtherSessionTimeout**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EtherSessionTimeout{SPC}3A98<ETX>
```

```text
02 73 52 41 20 45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74 20 33 41 39 38 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 52 41 20 45 74 68 65 72 53 65 73 73 69 6F 6E 54 69 6D 65 6F 75 74 20 00 00 3A 98 89
```
