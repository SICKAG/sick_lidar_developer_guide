# Read Temperature [sRN OPcurtmpdev]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Operating Data

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-temperature-srn-opcurtmpdev

Read temperature.

**Access:** No additional user-level requirement is specified in this telegram table.

**Request: `sRN OPcurtmpdev`**

| Telegram part / meaning        | Variable type | Length (bytes) | Values, ranges, and notes |
| ------------------------------ | ------------- | -------------- | ------------------------- |
| Read                           | String        | 3              | CoLa A: sRN               |
| Read temperature of the device | String        | 11             | CoLa A: OPcurtmpdev       |

**Response: `sRA OPcurtmpdev`**

| Telegram part / meaning        | Variable type                      | Length (bytes) | Values, ranges, and notes                         |
| ------------------------------ | ---------------------------------- | -------------- | ------------------------------------------------- |
| Answer                         | String                             | 3              | CoLa A: sRA                                       |
| Read temperature of the device | String                             | 11             | CoLa A: OPcurtmpdev                               |
| [°C]                           | Real as float according to IEEE754 | 4              | (-50°C … +100°C)<br>CoLa A: C2480000h … 42C80000h |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sRN OPcurtmpdev<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 4F 50 63 75 72 74 6D 70 64 65 76 2A
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sRA OPcurtmpdev 420C0000<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 4F 50 63 75 72 74 6D 70 64 65 76 20 42 0C 00 00 4B
```
