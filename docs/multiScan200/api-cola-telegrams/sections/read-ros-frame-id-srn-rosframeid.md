# Read ROS Frame ID [sRN rosFrameId]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-ros-frame-id-srn-rosframeid

Read the frame ID of the published Native ROS 2 topics.

Required user level: Authorized client.

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
| Command | ROS reference frame to use for data output | String | 14 | | `sWN rosFrameId` | `73 57 4E 20 72 6F 73 46 72 61 6D 65 49 64` |
| Frame ID length | Number of characters of frame id | Uint_16 | 2 | 0 … 64 | `B` | `00 0B` |
| Frame ID | Frame ID of the published topics | String | Length | Maximum 64 characters | `front_lidar` | `66 72 6F 6E 74 5F 6C 69 64 61 72` |

**Example: sRA rosFrameId**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}rosFrameId{SPC}15{SPC}multiScan2xx_26110162<ETX>
```

```text
02 73 52 41 20 72 6F 73 46 72 61 6D 65 49 64 20 31 35 20 6D 75 6C 74 69 53 63 61 6E 32 78 78 5F 32 36 31 31 30 31 36 32 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 26 73 52 41 20 72 6F 73 46 72 61 6D 65 49 64 20 00 15 6D 75 6C 74 69 53 63 61 6E 32 78 78 5F 32 36 31 31 30 31 36 32 51
```
