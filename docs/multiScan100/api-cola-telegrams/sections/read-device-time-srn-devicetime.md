# Read Device Time [sRN DeviceTime]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Date and System Time

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-device-time-srn-devicetime

Read sensor system time in milliseconds. Firmware 2.4.4.0R returns an 8-byte value. Values are time-dependent.

**Telegram structure: sRN DeviceTime**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII)                     | Values CoLa B (Binary)                                       |
| ------------- | ----------- | -------- | ------ | ------------------ | ----------------------------------------- | ------------------------------------------------------------ |
| Command type  | Read        | String   | 3      |                    | `sRN`        | `73 52 4E`                      |
| Command       | DeviceTime  | String   | 10     |                    | `DeviceTime` | `44 65 76 69 63 65 54 69 6D 65` |

**Example: sRN DeviceTime**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}DeviceTime<ETX>
```

```text
<STX>sRN DeviceTime<ETX>
```

```text
sRN DeviceTime
```

```text
02 73 52 4E 20 44 65 76 69 63 65 54 69 6D 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 52 4E 20 44 65 76 69 63 65 54 69 6D 65 42
```

```text
73 52 4E 20 44 65 76 69 63 65 54 69 6D 65
```

**Telegram structure: sRA DeviceTime**

| Telegram part | Description                        | Variable | Length | Additional details | Values CoLa A (ASCII)                                 | Values CoLa B (Binary)                                                             |
| ------------- | ---------------------------------- | -------- | ------ | ------------------ | ----------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Command type  | Answer                             | String   | 3      |                    | `sRA`                    | `73 52 41`                                            |
| Command       | DeviceTime                         | String   | 10     |                    | `DeviceTime`             | `44 65 76 69 63 65 54 69 6D 65`                       |
| Device time   | Sensor system time in milliseconds | Uint_64  | 8      | Firmware 2.4.4.0R  | `0 ... FFFFFFFFFFFFFFFF` | `00 00 00 00 00 00 00 00 ... FF FF FF FF FF FF FF FF` |

**Example: sRA DeviceTime**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}DeviceTime{SPC}77F7B<ETX>
```

```text
02 73 52 41 20 44 65 76 69 63 65 54 69 6D 65 20 37 37 46 37 42 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 52 41 20 44 65 76 69 63 65 54 69 6D 65 20 00 00 00 00 00 07 7F 7B 6E
```
