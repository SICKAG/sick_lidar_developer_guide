# Set Increment Source [sWN LICsrc]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Encoder

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#set-increment-source-swn-licsrc

Set increment source.

**Access:** Authorized client user level is required.

**Request: `sWN LICsrc`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| ----------------------- | ------------- | -------------- | ------------------------- |
| Write                   | String        | 3              | CoLa A: sWN               |
| Set increment source    | String        | 6              | CoLa A: LICsrc            |
| Parameter               | Enum_8        | 1              | Encoder:<br>CoLa A: 1     |

**Response: `sWA LICsrc`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| ----------------------- | ------------- | -------------- | ------------------------- |
| Answer                  | String        | 3              | CoLa A: sWA               |
| Set increment source    | String        | 6              | CoLa A: LICsrc            |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sWN LICsrc 1<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0C 73 57 4E 20 4C 49 43 73 72 63 20 01 4F
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sWA LICsrc<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0B 73 57 41 20 4C 49 43 73 72 63 20 41
```
