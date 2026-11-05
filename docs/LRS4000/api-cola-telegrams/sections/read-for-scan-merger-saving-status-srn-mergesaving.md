# Read for Scan Merger Saving Status [sRN MergeSaving]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-for-scan-merger-saving-status-srn-mergesaving

Read for Scan Merger saving status.

**Access:** Authorized client user level is required.

**Request: `sRN MergeSaving`**

| Telegram part / meaning            | Variable type | Length (bytes) | Values, ranges, and notes |
| ---------------------------------- | ------------- | -------------- | ------------------------- |
| Read                               | String        | 3              | CoLa A: sRN               |
| Read for Scan Merger saving status | String        | 11             | CoLa A: MergeSaving       |

**Response: `sRA MergeSaving`**

| Telegram part / meaning            | Variable type | Length (bytes) | Values, ranges, and notes                      |
| ---------------------------------- | ------------- | -------------- | ---------------------------------------------- |
| Answer                             | String        | 3              | CoLa A: sRA                                    |
| Read for Scan Merger saving status | String        | 11             | CoLa A: MergeSaving                            |
| Saving status                      | Bool_1        | 1              | Saving not active:: 0<br>Saving in process:: 1 |

**Request example**

**CoLa A (ASCII)**

```text
<STX>sRN MergeSaving<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 4D 65 72 67 65 53 61 76 69 6E 67 33
```

**Response example**

**CoLa A (ASCII)**

```text
<STX>sRA MergeSaving 0<ETX>
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 41 20 4D 65 72 67 65 53 61 76 69 6E 67 20 00 1C
```
