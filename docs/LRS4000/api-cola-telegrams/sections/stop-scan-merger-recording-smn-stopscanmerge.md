# Stop Scan Merger Recording [sMN StopScanMerge]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#stop-scan-merger-recording-smn-stopscanmerge

Stop Scan Merger recording.

**Access:** Authorized client user level is required.

**Request: `sMN StopScanMerge`**

| Telegram part / meaning    | Variable type | Length (bytes) | Values, ranges, and notes |
| -------------------------- | ------------- | -------------- | ------------------------- |
| Method                     | String        | 3              | CoLa A: sMN               |
| Stop Scan Merger recording | String        | 13             | CoLa A: StopScanMerge     |

**Response: `sAN StopScanMerge`**

| Telegram part / meaning    | Variable type | Length (bytes) | Values, ranges, and notes |
| -------------------------- | ------------- | -------------- | ------------------------- |
| Answer                     | String        | 3              | CoLa A: sAN               |
| Stop Scan Merger recording | String        | 13             | CoLa A: StopScanMerge     |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sMN StopScanMerge<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 4D 4E 20 53 74 6F 70 53 63 61 6E 4D 65 72 67 65 0F
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sAN StopScanMerge<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 41 4E 20 53 74 6F 70 53 63 61 6E 4D 65 72 67 65 20 23
```
