# Set Scan Merger Trigger [sWN ScanMergeTrigger]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#set-scan-merger-trigger-swn-scanmergetrigger

Set Scan Merger trigger.

**Access:** Authorized client user level is required.

**Request: `sWN ScanMergeTrigger`**

| Telegram part / meaning        | Variable type | Length (bytes) | Values, ranges, and notes        |
| ------------------------------ | ------------- | -------------- | -------------------------------- |
| Write                          | String        | 3              | CoLa A: sWN                      |
| Select Trigger for Scan Merger | String        | 16             | CoLa A: ScanMergeTrigger         |
| Trigger source                 | Enum_8        | 1              | Command:: 0<br>Digital input:: 1 |

**Response: `sWA ScanMergeTrigger`**

| Telegram part / meaning        | Variable type | Length (bytes) | Values, ranges, and notes |
| ------------------------------ | ------------- | -------------- | ------------------------- |
| Answer                         | String        | 3              | CoLa A: sWA               |
| Select Trigger for Scan Merger | String        | 16             | CoLa A: ScanMergeTrigger  |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sWN ScanMergeTrigger 1<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 16 73 57 4E 20 53 63 61 6E 4D 65 72 67 65 54 72 69 67 67 65 72 20 01 54
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sWA ScanMergeTrigger<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 57 41 20 53 63 61 6E 4D 65 72 67 65 54 72 69 67 67 65 72 20 5A
```
