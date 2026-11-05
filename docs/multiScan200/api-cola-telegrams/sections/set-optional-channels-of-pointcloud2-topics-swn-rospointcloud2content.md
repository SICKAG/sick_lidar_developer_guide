# Set Optional Channels of PointCloud2 Topics [sWN rosPointCloud2Content]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-optional-channels-of-pointcloud2-topics-swn-rospointcloud2content

Select the optional channels of the Native ROS 2 PointCloud2 topics (`rt/cloud`).

Required user level: Authorized client.

**Telegram structure: sWN rosPointCloud2Content**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | Set the optional channels of PointCloud2 topics (rt/cloud) | String | 21 | | `rosPointCloud2Content` | `72 6F 73 50 6F 69 6E 74 43 6C 6F 75 64 32 43 6F 6E 74 65 6E 74` |
| includeRssi | If true the RSSI data is included in the rt/cloud topics | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| includeProperties | If true the properties data is included in the rt/cloud topics | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| includeTimeOffset | If true the time offset data is included in the rt/cloud topics | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| includeRing | If true the ring (layer index) data is included in the rt/cloud topics | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sWN rosPointCloud2Content - No optional channels**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}rosPointCloud2Content{SPC}0{SPC}0{SPC}0{SPC}0<ETX>
```

```text
sWN rosPointCloud2Content 0 0 0 0
```

```text
02 73 57 4E 20 72 6F 73 50 6F 69 6E 74 43 6C 6F 75 64 32 43 6F 6E 74 65 6E 74 20 30 20 30 20 30 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 57 4E 20 72 6F 73 50 6F 69 6E 74 43 6C 6F 75 64 32 43 6F 6E 74 65 6E 74 20 00 00 00 00 62
```

```text
73 57 4E 20 72 6F 73 50 6F 69 6E 74 43 6C 6F 75 64 32 43 6F 6E 74 65 6E 74 20 00 00 00 00
```

**Telegram structure: sWA rosPointCloud2Content**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 21 | | `rosPointCloud2Content` | `72 6F 73 50 6F 69 6E 74 43 6C 6F 75 64 32 43 6F 6E 74 65 6E 74` |

**Example: sWA rosPointCloud2Content**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}rosPointCloud2Content<ETX>
```

```text
02 73 57 41 20 72 6F 73 50 6F 69 6E 74 43 6C 6F 75 64 32 43 6F 6E 74 65 6E 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1A 73 57 41 20 72 6F 73 50 6F 69 6E 74 43 6C 6F 75 64 32 43 6F 6E 74 65 6E 74 20 6D
```
