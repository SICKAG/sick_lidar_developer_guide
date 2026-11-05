# Read Device Time [sRN DeviceTime]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Date and System Time

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-device-time-srn-devicetime

Read device time.

**Access:** No additional user-level requirement is specified in this telegram table.

**Request: `sRN DeviceTime`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| ----------------------- | ------------- | -------------- | ------------------------- |
| Read                    | String        | 3              | CoLa A: sRN               |
| Parameter               | String        | 10             | CoLa A: DeviceTime        |

**Response: `sRA DeviceTime`**

| Telegram part / meaning                                                                                                                        | Variable type | Length (bytes) | Values, ranges, and notes        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------------- | -------------------------------- |
| Answer                                                                                                                                         | String        | 3              | CoLa A: sRA                      |
| Parameter                                                                                                                                      | String        | 10             | CoLa A: DeviceTime               |
| The sensor system time in milliseconds since January 1, 1970, 00:00 (UTC). If a time server is being used, the configured system time is used. | Uint_32       | 4              | CoLa A: 0d … +9999d (0h … 270Fh) |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sRN DeviceTime<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 52 4E 20 44 65 76 69 63 65 54 69 6D 65 42
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sRA DeviceTime 0<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 44 65 76 69 63 65 54 69 6D 65 20 00 00 00 00 6D
```
