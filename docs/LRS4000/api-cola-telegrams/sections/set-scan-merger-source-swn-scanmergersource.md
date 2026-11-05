# Set Scan Merger Source [sWN ScanMergerSource]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#set-scan-merger-source-swn-scanmergersource

Set Scan Merger source.

**Access:** No additional user-level requirement is specified in this telegram table.

**Request: `sWN ScanMergerSource`**

| Telegram part / meaning    | Variable type | Length (bytes) | Values, ranges, and notes |
| -------------------------- | ------------- | -------------- | ------------------------- |
| Write                      | String        | 3              | CoLa A: sWN               |
| Set Source for Scan Merger | String        | 16             | CoLa A: ScanMergerSource  |
| Source                     | Enum_8        | 1              | IMU:: 0<br>Encoder:: 1    |

**Response: `sWA ScanMergerSource`**

| Telegram part / meaning    | Variable type | Length (bytes) | Values, ranges, and notes |
| -------------------------- | ------------- | -------------- | ------------------------- |
| Answer                     | String        | 3              | CoLa A: sWA               |
| Set Source for Scan Merger | String        | 16             | CoLa A: ScanMergerSource  |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sWN ScanMergerSource 1<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 57 4E 20 53 63 61 6E 4D 65 72 67 65 72 53 6F 75 72 63 65 20 01 43
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sWA ScanMergerSource<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 57 41 20 53 63 61 6E 4D 65 72 67 65 72 53 6F 75 72 63 65 20 4D
```
