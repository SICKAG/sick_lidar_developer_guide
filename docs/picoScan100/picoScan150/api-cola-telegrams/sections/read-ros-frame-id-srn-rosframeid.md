# Read ROS Frame ID [sRN rosFrameId]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-ros-frame-id-srn-rosframeid

Returns the frame ID of the published topics.

**Telegram structure: sRN rosFrameId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | ROS reference frame to use for data output | String | 10 | | `rosFrameId` | `72 6F 73 46 72 61 6D 65 49 64` |

**Example: sRN rosFrameId**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}rosFrameId<ETX>
```

```text
<STX>sRN rosFrameId<ETX>
```

```text
sRN rosFrameId
```

```text
02 73 52 4E 20 72 6F 73 46 72 61 6D 65 49 64 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 52 4E 20 72 6F 73 46 72 61 6D 65 49 64 51
```

```text
73 52 4E 20 72 6F 73 46 72 61 6D 65 49 64
```

**Telegram structure: sRA rosFrameId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | ROS reference frame to use for data output | String | 10 | | `rosFrameId` | `73 57 4E 20 72 6F 73 46 72 61 6D 65 49 64` |
| Value | Number of characters of the frame id | Uint_16 | 1 | | `0d ... +16d (0h ... 10h` | `00 00 ... 00 10` |
| Value | Configured Frame ID of the device | FlexString | 64 | | `[Frame ID]` | `[Frame ID]` |

**Example: sRA rosFrameId - Frame ID is "picoScan_"**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}rosFrameId{SPC}9{SPC}picoScan_<ETX>
```

```text
02 73 52 41 20 72 6F 73 46 72 61 6D 65 49 64 20 39 20 70 69 63 6F 53 63 61 6E 5F 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1A 73 52 41 20 72 6F 73 46 72 61 6D 65 49 64 20 00 09 70 69 63 6F 53 63 61 6E 5F 02
```
