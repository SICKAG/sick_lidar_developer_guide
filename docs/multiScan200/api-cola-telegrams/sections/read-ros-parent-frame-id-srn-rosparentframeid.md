# Read ROS Parent Frame ID [sRN rosParentFrameId]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-ros-parent-frame-id-srn-rosparentframeid

Read the parent frame ID of the published Native ROS 2 topics.

Required user level: Authorized client.

**Telegram structure: sRN rosParentFrameId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read parent frame ID of the published topics | String | 16 | | `rosParentFrameId` | `72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64` |

**Example: sRN rosParentFrameId**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}rosParentFrameId<ETX>
```

```text
sRN rosParentFrameId
```

```text
02 73 52 4E 20 72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 52 4E 20 72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64 6D
```

```text
73 52 4E 20 72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64
```

**Telegram structure: sRA rosParentFrameId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read parent frame ID of the published topics | String | 16 | | `rosParentFrameId` | `72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64` |
| Parent frame ID length | Number of characters of parent frame id | Uint_16 | 2 | 0 … 64 | `5` | `00 05` |
| Parent frame ID | Parent frame ID of the published topics | String | Length | Maximum 64 characters | `world` | `77 6F 72 6C 64` |

**Example: sRA rosParentFrameId**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}rosParentFrameId{SPC}5{SPC}world<ETX>
```

```text
02 73 52 41 20 72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64 20 35 20 77 6F 72 6C 64 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 52 41 20 72 6F 73 50 61 72 65 6E 74 46 72 61 6D 65 49 64 20 00 05 77 6F 72 6C 64 25
```
