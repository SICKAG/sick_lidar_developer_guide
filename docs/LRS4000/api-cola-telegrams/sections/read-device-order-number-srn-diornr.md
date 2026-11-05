# Read Device Order Number [sRN DIornr]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Device

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-device-order-number-srn-diornr

Read device order number.

**Access:** No additional user-level requirement is specified in this telegram table.

**Request: `sRN DIornr`**

| Telegram part / meaning  | Variable type | Length (bytes) | Values, ranges, and notes |
| ------------------------ | ------------- | -------------- | ------------------------- |
| Read                     | String        | 3              | CoLa A: sRN               |
| Read device order number | String        | 6              | CoLa A: DIornr            |

**Response: `sRA DIornr`**

| Telegram part / meaning                            | Variable type | Length (bytes) | Values, ranges, and notes           |
| -------------------------------------------------- | ------------- | -------------- | ----------------------------------- |
| Answer                                             | String        | 3              | CoLa A: sRA                         |
| Read device order number                           | String        | 6              | CoLa A: DIornr                      |
| Number of characters of the following order number | Uint_16       | 2              | Fix:<br>CoLa A: 7h<br>CoLa B: 00 07 |
| Order number in 7 digits                           | String        | 7              | CoLa A: 0000000 … 9999999           |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sRN DIornr<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0A 73 52 4E 20 44 49 6F 72 6E 72 43
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sRA DIornr 7 1098855<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 41 20 44 49 6F 72 6E 72 20 00 07 31 30 39 38 38 35 35 53
```
