# Write ROS Parent Frame ID [sWN rosParentFrameId]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#write-ros-parent-frame-id-swn-rosparentframeid

Set the parent frame ID of the published Native ROS 2 topics.

Required user level: Authorized client.

**Telegram structure: sWN rosParentFrameId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set parent frame ID of the published topics | String | 16 | | `rosParentFrameId` | `72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64` |
| Parent frame ID length | Number of characters of parent frame id | Uint_16 | 2 | 0 … 64 | `5` | `00 05` |
| Parent frame ID | Parent frame ID of the published topics | String | Length | Maximum 64 characters | `world` | `77 6F 72 6C 64` |

**Example: sWN rosParentFrameId**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}rosParentFrameId{SPC}5{SPC}world<ETX>
```

```text
sWN rosParentFrameId 5 world
```

```text
02 73 57 4E 20 72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64 20 35 20 77 6F 72 6C 64 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 57 4E 20 72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64 20 00 05 77 6F 72 6C 64 2F
```

```text
73 57 4E 20 72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64 20 00 05 77 6F 72 6C 64
```

**Telegram structure: sWA rosParentFrameId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set parent frame ID of the published topics | String | 16 | | `rosParentFrameId` | `72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64` |

**Example: sWA rosParentFrameId**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}rosParentFrameId<ETX>
```

```text
02 73 57 41 20 72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 15 73 57 41 20 72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64 20 47
```
