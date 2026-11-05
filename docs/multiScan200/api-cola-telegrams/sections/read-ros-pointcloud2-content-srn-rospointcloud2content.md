# Read ROS PointCloud2 Content [sRN rosPointCloud2Content]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-ros-pointcloud2-content-srn-rospointcloud2content

Returns the content of the published PointCloud2 topics.

**Telegram structure: sRN rosPointCloud2Content**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read ROS PointCloud2 Content | String | 21 | | `rosPointCloud2Content` | `72 6F 73 50 6F 69 6E 74 43 6C 6F 75 64 32 43 6F 6E 74 65 6E 74` |

**Example: sRN rosPointCloud2Content**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}rosPointCloud2Content<ETX>
```

```text
<STX>sRN rosPointCloud2Content<ETX>
```

```text
sRN rosPointCloud2Content
```

```text
02 73 52 4E 20 72 6F 73 50 6F 69 6E 74 43 6C 6F 75 64 32 43 6F 6E 74 65 6E 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 19 73 52 4E 20 72 6F 73 50 6F 69 6E 74 43 6C 6F 75 64 32 43 6F 6E 74 65 6E 74 47
```

```text
73 52 4E 20 72 6F 73 50 6F 69 6E 74 43 6C 6F 75 64 32 43 6F 6E 74 65 6E 74
```

**Telegram structure: sRA rosPointCloud2Content**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read ROS PointCloud2 Content | String | 21 | | `rosPointCloud2Content` | `72 6F 73 50 6F 69 6E 74 43 6C 6F 75 64 32 43 6F 6E 74 65 6E 74` |
| includeRssi | If true the RSSI data is included in the rt/cloud topics | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| includeProperties | If true the properties data is included in the rt/cloud topics | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| includeTimeOffset | If true the time offset data is included in the rt/cloud topics | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| includeRing | If true the ring (layer index) data is included in the rt/cloud topics | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sRA rosPointCloud2Content**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}rosPointCloud2Content{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
02 73 52 41 20 72 6F 73 50 6F 69 6E 74 43 6C 6F 75 64 32 43 6F 6E 74 65 6E 74 20 30 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 52 41 20 72 6F 73 50 6F 69 6E 74 43 6C 6F 75 64 32 43 6F 6E 74 65 6E 74 20 00 00 00 00 68
```
