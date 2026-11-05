# Read ROS Parent Frame ID [sRN rosParentFrameId]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#read-ros-parent-frame-id-srn-rosparentframeid

Returns the parent frame ID of the published topics.

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
<STX>sRN rosParentFrameId<ETX>
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
| Value | Number of characters of the parent frame id | Uint_16 | 2 | | `0d ... +16d (0h ... 10h` | `00 00 ... 00 10` |
| Value | Configured parent frame ID | FlexString | 64 | | `[Parent frame ID]` | `[Parent frame ID]` |

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
