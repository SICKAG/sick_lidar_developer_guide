# Set Scan Merger [sWN ScanMergerEnabled]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#set-scan-merger-swn-scanmergerenabled

Set Scan Merger.

**Access:** Authorized client user level is required.

**Request: `sWN ScanMergerEnabled`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| ----------------------- | ------------- | -------------- | ------------------------- |
| Write                   | String        | 3              | CoLa A: sWN               |
| Set Scan Merger         | String        | 17             | CoLa A: ScanMergerEnabled |
| Enable/ Disable         | Bool_1        | 1              | Disable:: 0<br>Enable:: 1 |

**Response: `sWA ScanMergerEnabled`**

| Telegram part / meaning | Variable type | Length (bytes) | Values, ranges, and notes |
| ----------------------- | ------------- | -------------- | ------------------------- |
| Answer                  | String        | 3              | CoLa A: sWA               |
| Set Scan Merger         | String        | 17             | CoLa A: ScanMergerEnabled |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sWN ScanMergerEnabled 1<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 57 4E 20 53 63 61 6E 4D 65 72 67 65 72 45 6E 61 62 6C 65 64 20 01 3B
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sWA ScanMergerEnabled<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 57 41 20 53 63 61 6E 4D 65 72 67 65 72 45 6E 61 62 6C 65 64 20 35
```
