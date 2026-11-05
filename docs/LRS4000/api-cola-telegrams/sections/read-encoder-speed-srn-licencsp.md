# Read Encoder Speed [sRN LICencsp]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Encoder

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-encoder-speed-srn-licencsp

Read encoder speed.

**Access:** No additional user-level requirement is specified in this telegram table.

**Request: `sRN LICencsp`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| ----------------------- | ------------- | -------------- | ------------------------- |
| Read                    | String        | 3              | CoLa A: sRN               |
| Read encoder speed      | String        | 8              | CoLa A: LICencsp          |

**Response: `sRA LICencsp`**

| Telegram part / meaning                      | Variable type | Length (bytes) | Values, ranges, and notes |
| -------------------------------------------- | ------------- | -------------- | ------------------------- |
| Answer                                       | String        | 3              | CoLa A: sRA               |
| Read encoder speed                           | String        | 8              | CoLa A: LICencsp          |
| [Speed in m/s as float according to IEEE754] | Real          | 4              | CoLa A: 0h … FFFFFFFFh    |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sRN LICencsp<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 52 4E 20 4C 49 43 65 6E 63 73 70 62
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sRA LICencsp 0<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 41 20 4C 49 43 65 6E 63 73 70 20 00 00 00 00 4D
```
