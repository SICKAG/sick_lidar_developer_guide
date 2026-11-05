# Set Average Filter [sWN LFPmeanfilter]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#set-average-filter-swn-lfpmeanfilter

Set average filter.

**Access:** Authorized client user level is required.

**Request: `sWN LFPmeanfilter`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes             |
| ----------------------- | ------------- | -------------- | ------------------------------------- |
| Write                   | String        | 3              | CoLa A: sWN                           |
| Set average filter      | String        | 13             | CoLa A: LFPmeanfilter                 |
| Code number             | Bool_1        | 1              | Inactive:: 0<br>Active:: 1            |
| Number                  | Uint_16       | 2              | CoLa A: +2d … +100d (00 02h … 00 64h) |
| -                       | Enum_8        | 1              | Always:<br>CoLa A: 0                  |

**Response: `sWA LFPmeanfilter`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| ----------------------- | ------------- | -------------- | ------------------------- |
| Answer                  | String        | 3              | CoLa A: sWA               |
| Set average filter      | String        | 13             | CoLa A: LFPmeanfilter     |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sWN LFPmeanfilter 1 +10 0<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 57 4E 20 4C 46 50 6D 65 61 6E 66 69 6C 74 65 72 20 01 00 0A 00 3C
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sWA LFPmeanfilter<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 57 41 20 4C 46 50 6D 65 61 6E 66 69 6C 74 65 72 20 38
```
