# Set Update Time [sWN TSCTCupdatetime]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Date and System Time

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#set-update-time-swn-tsctcupdatetime

Define the time period after which the sensor will attempt to get the current system time for the TSC server.

**Telegram structure: sWN TSCTCupdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set update time of synchronization | String | 15 | | `TSCTCupdatetime` | `54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65` |
| Update time of synchronization | Set values in seconds | Uint_32 | 4 | | `+1d … +3600d(01h … 0E10h)` | `00 00 00 00 … 00 00 0E 10` |

**Example: sWN TSCTCupdatetime 600 s**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}TSCTCupdatetime{SPC}+600<ETX>
```

```text
<STX>sWN TSCTCupdatetime +600<ETX>
```

```text
sWN TSCTCupdatetime +600
```

```text
02 73 57 4E 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 20 2B 36 30 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 57 4E 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 20 00 00 02 58 67
```

```text
73 57 4E 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 20 00 00 02 58
```

**Telegram structure: sWA TSCTCupdatetime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set update time of synchronization | String | 15 | | `TSCTCupdatetime` | `54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65` |

**Example: sWA TSCTCupdatetime**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}TSCTCupdatetime<ETX>
```

```text
02 73 57 41 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 57 41 20 54 53 43 54 43 75 70 64 61 74 65 74 69 6D 65 20 32
```
