# Read Scan Merger Saving Status [sRN MergeSaving]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-scan-merger-saving-status-srn-mergesaving

Returns the status for saving the merged scans. As soon as a scan merge is completed, the point cloud is available for download on port 80 (`http://<device IP>/cloud.pcd`), for example `curl http://192.168.0.1/cloud.pcd -o cloud.pcd`. Only the most recently created point cloud is available for download. The point cloud is ready for download when MergeSaving changes from 1 (Saving in progress) to 0 (Saving not active).

**Telegram structure: sRN MergeSaving**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Scan Merger Saving Status | String | 11 | | `MergeSaving` | `4D 65 72 67 65 53 61 76 69 6E 67` |

**Example: sRN MergeSaving**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}MergeSaving<ETX>
```

```text
<STX>sRN MergeSaving<ETX>
```

```text
sRN MergeSaving
```

```text
02 73 52 4E 20 4D 65 72 67 65 53 61 76 69 6E 67 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 4D 65 72 67 65 53 61 76 69 6E 67 33
```

```text
73 52 4E 20 4D 65 72 67 65 53 61 76 69 6E 67
```

**Telegram structure: sRA MergeSaving**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Scan Merger Saving Status | String | 11 | | `MergeSaving` | `4D 65 72 67 65 53 61 76 69 6E 67` |
| MergeSaving | MergeSaving | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sRA MergeSaving**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}MergeSaving{SPC}0<ETX>
```

```text
02 73 52 41 20 4D 65 72 67 65 53 61 76 69 6E 67 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 41 20 4D 65 72 67 65 53 61 76 69 6E 67 20 00 1C
```
