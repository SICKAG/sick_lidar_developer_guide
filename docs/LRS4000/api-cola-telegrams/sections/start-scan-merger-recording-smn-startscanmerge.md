# Start Scan Merger Recording [sMN StartScanMerge]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#start-scan-merger-recording-smn-startscanmerge

Start Scan Merger recording.

**Access:** Authorized client user level is required.

**Request: `sMN StartScanMerge`**

| Telegram part / meaning     | Variable type | Length (bytes) | Values, ranges, and notes |
| --------------------------- | ------------- | -------------- | ------------------------- |
| Method                      | String        | 3              | CoLa A: sMN               |
| Start Scan Merger recording | String        | 14             | CoLa A: StartScanMerge    |

**Response: `sAN StartScanMerge`**

| Telegram part / meaning     | Variable type | Length (bytes) | Values, ranges, and notes |
| --------------------------- | ------------- | -------------- | ------------------------- |
| Answer                      | String        | 3              | CoLa A: sAN               |
| Start Scan Merger recording | String        | 14             | CoLa A: StartScanMerge    |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sMN StartScanMerge<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 4D 4E 20 53 74 61 72 74 53 63 61 6E 4D 65 72 67 65 77
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sAN StartScanMerge<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 41 4E 20 53 74 61 72 74 53 63 61 6E 4D 65 72 67 65 20 5B
```
