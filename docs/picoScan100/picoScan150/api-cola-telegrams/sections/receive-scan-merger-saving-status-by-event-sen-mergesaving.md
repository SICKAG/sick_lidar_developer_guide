# Receive Scan Merger Saving Status by Event [sEN MergeSaving]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › 3D Scan Recording

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#receive-scan-merger-saving-status-by-event-sen-mergesaving

Returns the status for saving the merged scans. As soon as a scan merge is completed, the point cloud is available for download on port 80 (`http://<device IP>/cloud.pcd`), for example `curl http://192.168.0.1/cloud.pcd -o cloud.pcd`. Only the most recently created point cloud is available for download. The point cloud is ready for download when MergeSaving changes from 1 (Saving in progress) to 0 (Saving not active). After registration, the device sends the current value as an `sSN` telegram whenever it changes. Send the telegram with the value 0 to stop the event.

**Telegram structure: sEN MergeSaving**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Event | String | 3 | | `sEN` | `73 45 4E` |
| Command | Receive Scan Merger Saving Status by Event | String | 11 | | `MergeSaving` | `4D 65 72 67 65 53 61 76 69 6E 67` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEN MergeSaving**

**CoLa A (ASCII)**

```text
<STX>sEN{SPC}MergeSaving{SPC}1<ETX>
```

```text
<STX>sEN MergeSaving 1<ETX>
```

```text
sEN MergeSaving 1
```

```text
02 73 45 4E 20 4D 65 72 67 65 53 61 76 69 6E 67 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 45 4E 20 4D 65 72 67 65 53 61 76 69 6E 67 20 01 05
```

```text
73 45 4E 20 4D 65 72 67 65 53 61 76 69 6E 67 20 01
```

**Telegram structure: sEA MergeSaving**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sEA` | `73 45 41` |
| Command | Receive Scan Merger Saving Status by Event | String | 11 | | `MergeSaving` | `4D 65 72 67 65 53 61 76 69 6E 67` |
| Event | Stop/ start event | Bool_1 | 1 | Stop:<br>Start: | `0<br>1` | `00<br>01` |

**Example: sEA MergeSaving**

**CoLa A (ASCII)**

```text
<STX>sEA{SPC}MergeSaving{SPC}1<ETX>
```

```text
02 73 45 41 20 4D 65 72 67 65 53 61 76 69 6E 67 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 45 41 20 4D 65 72 67 65 53 61 76 69 6E 67 20 01 0A
```
