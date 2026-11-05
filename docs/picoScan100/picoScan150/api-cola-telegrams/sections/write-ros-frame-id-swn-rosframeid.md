# Write ROS Frame ID [sWN rosFrameId]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#write-ros-frame-id-swn-rosframeid

Set the frame ID of the published topics.

**Telegram structure: sWN rosFrameId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | ROS reference frame to use for data output | String | 10 | | `rosFrameId` | `72 6F 73 46 72 61 6D 65 49 64` |
| Value | Number of characters of the frame id | Uint_16 | 1 | | `0d ... +16d (0h ... 10h` | `00 00 ... 00 10` |
| Value | Configured Frame ID of the device | FlexString | 64 | | `[Frame ID]` | `[Frame ID]` |

**Example: sWN rosFrameId**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}rosFrameId{SPC}4{SPC}test<ETX>
```

```text
<STX>sWN rosFrameId 4 test<ETX>
```

```text
sWN rosFrameId 4 test
```

```text
02 73 57 4E 20 72 6F 73 46 72 61 6D 65 49 64 20 34 20 74 65 73 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 57 4E 20 72 6F 73 46 72 61 6D 65 49 64 20 00 04 74 65 73 74 66
```

```text
73 57 4E 20 72 6F 73 46 72 61 6D 65 49 64 20 00 04 74 65 73 74
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
