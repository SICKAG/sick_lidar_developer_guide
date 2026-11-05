# Set Device Time in UTC [sMN setDateTimeUTC]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Date and System Time

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-device-time-in-utc-smn-setdatetimeutc

Set the device time in UTC. This works only if neither NTP nor PTP is active.

Required user level: Authorized client.

**Telegram structure: sMN setDateTimeUTC**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method invocation | String | 3 | | `sMN` | `73 4D 4E` |
| Method name | Sets datetime of device in UTC. Does only work if NTP-Client and PTP is not active | String | 14 | | `setDateTimeUTC` | `73 65 74 44 61 74 65 54 69 6D 65 55 54 43` |
| uiYear | UTC year. Range: 0 ... 2105d | Uint_16 | 2 | | `0` | `00 00` |
| usiMonth | UTC month | Uint_8 | 1 | | `1` | `01` |
| usiDay | UTC day | Uint_8 | 1 | | `1` | `01` |
| usiHour | UTC hour | Uint_8 | 1 | | `0` | `00` |
| usiMinute | UTC minute | Uint_8 | 1 | | `0` | `00` |
| usiSec | UTC second | Uint_8 | 1 | | `0` | `00` |
| udiUSec | UTC microseconds; range | Uint_32 | 4 | | `0` | `00 00 00 00` |

**Example: sMN setDateTimeUTC**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}setDateTimeUTC{SPC}+2026{SPC}+10{SPC}+1{SPC}+16{SPC}+52{SPC}+1{SPC}0<ETX>
```

```text
sMN setDateTimeUTC +2026 +10 +1 +16 +52 +1 0
```

```text
02 73 4D 4E 20 73 65 74 44 61 74 65 54 69 6D 65 55 54 43 20 2B 32 30 32 36 20 2B 31 30 20 2B 31 20 2B 31 36 20 2B 35 32 20 2B 31 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 4D 4E 20 73 65 74 44 61 74 65 54 69 6D 65 55 54 43 20 07 EA 0A 01 10 34 01 00 00 00 00 92
```

```text
73 4D 4E 20 73 65 74 44 61 74 65 54 69 6D 65 55 54 43 20 07 EA 0A 01 10 34 01 00 00 00 00
```

**Telegram structure: sAN setDateTimeUTC**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method answer | String | 3 | | `sAN` | `73 41 4E` |
| Method name | Echo of method name | String | 14 | | `setDateTimeUTC` | `73 65 74 44 61 74 65 54 69 6D 65 55 54 43` |
| ErrorCode | Result of setting the UTC time | Enum_8 | 1 | Successful:<br>No permission: | `0<br>1` | `00<br>01` |

**Example: sAN setDateTimeUTC**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}setDateTimeUTC{SPC}0<ETX>
```

```text
02 73 41 4E 20 73 65 74 44 61 74 65 54 69 6D 65 55 54 43 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 41 4E 20 73 65 74 44 61 74 65 54 69 6D 65 55 54 43 20 00 5D
```
