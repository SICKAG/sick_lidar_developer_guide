# Write ROS Frame ID [sWN rosFrameId]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#write-ros-frame-id-swn-rosframeid

Set the frame ID of the published Native ROS 2 topics.

Required user level: Authorized client.

**Telegram structure: sWN rosFrameId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | ROS reference frame to use for data output | String | 10 | | `rosFrameId` | `72 6F 73 46 72 61 6D 65 49 64` |
| Frame ID length | Number of characters of frame id | Uint_16 | 2 | 0 … 64 | `B` | `00 0B` |
| Frame ID | Frame ID of the published topics | String | Length | Maximum 64 characters | `front_lidar` | `66 72 6F 6E 74 5F 6C 69 64 61 72` |

**Example: sWN rosFrameId - Frame ID is "front_lidar"**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}rosFrameId{SPC}B{SPC}front_lidar<ETX>
```

```text
sWN rosFrameId B front_lidar
```

```text
02 73 57 4E 20 72 6F 73 46 72 61 6D 65 49 64 20 42 20 66 72 6F 6E 74 5F 6C 69 64 61 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 57 4E 20 72 6F 73 46 72 61 6D 65 49 64 20 00 0B 66 72 6F 6E 74 5F 6C 69 64 61 72 33
```

```text
73 57 4E 20 72 6F 73 46 72 61 6D 65 49 64 20 00 0B 66 72 6F 6E 74 5F 6C 69 64 61 72
```

**Telegram structure: sWA rosFrameId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | ROS reference frame to use for data output | String | 10 | | `rosFrameId` | `72 6F 73 46 72 61 6D 65 49 64` |

**Example: sWA rosFrameId**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}rosFrameId<ETX>
```

```text
02 73 57 41 20 72 6F 73 46 72 61 6D 65 49 64 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 57 41 20 72 6F 73 46 72 61 6D 65 49 64 20 7B
```
