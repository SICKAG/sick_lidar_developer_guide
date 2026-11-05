# Activate Median Filter [sWN LFPmedianfilter]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#activate-median-filter-swn-lfpmedianfilter

Activate Median filter.

**Access:** Authorized client user level is required.

**Request: `sWN LFPmedianfilter`**

| Telegram part / meaning                                     | Variable type | Length (bytes) | Values, ranges, and notes |
| ----------------------------------------------------------- | ------------- | -------------- | ------------------------- |
| Write                                                       | String        | 3              | CoLa A: sWN               |
| Sector function                                             | String        | 15             | CoLa A: LFPmedianfilter   |
| Enable or disable Median filter                             | Bool_1        | 1              | Disable:: 0<br>Enable:: 1 |
| Number of considered measurement points and number of scans | Uint_16       | 2              | Always:<br>CoLa A: 3      |

**Response: `sWA LFPmedianfilter`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| ----------------------- | ------------- | -------------- | ------------------------- |
| Answer                  | String        | 3              | CoLa A: sWA               |
| Sector function         | String        | 15             | CoLa A: LFPmedianfilter   |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sWN LFPmedianfilter 1 3<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 57 4E 20 4C 46 50 6D 65 64 69 61 6E 66 69 6C 74 65 72 20 01 00 03 38
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sWA LFPmedianfilter<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 57 41 20 4C 46 50 6D 65 64 69 61 6E 66 69 6C 74 65 72 20 35
```
