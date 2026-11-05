# Read Time Synchronization [sRN TSCRole]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Date and System Time

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-time-synchronization-srn-tscrole

Returns the time synchronization role (0 = none, 1 = NTP, 3 = PTP).

**Telegram structure: sRN TSCRole**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Time Synchronization | String | 7 | | `TSCRole` | `54 53 43 52 6F 6C 65` |

**Example: sRN TSCRole**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}TSCRole<ETX>
```

```text
<STX>sRN TSCRole<ETX>
```

```text
sRN TSCRole
```

```text
02 73 52 4E 20 54 53 43 52 6F 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0B 73 52 4E 20 54 53 43 52 6F 6C 65 3F
```

```text
73 52 4E 20 54 53 43 52 6F 6C 65
```

**Telegram structure: sRA TSCRole**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Time Synchronization | String | 7 | | `TSCRole` | `54 53 43 52 6F 6C 65` |
| TSCRole | Select the role (none or client) | Enum_8 | 1 | TX_NONE:<br>TX_CLIENT:<br>TX_PTP_SLAVE:<br>TX_PTP_MASTER: | `0<br>1<br>3<br>4` | `00<br>01<br>03<br>04` |

**Example: sRA TSCRole**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}TSCRole{SPC}0<ETX>
```

```text
02 73 52 41 20 54 53 43 52 6F 6C 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 52 41 20 54 53 43 52 6F 6C 65 20 00 10
```
