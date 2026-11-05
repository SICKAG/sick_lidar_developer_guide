# Read ROS Namespace [sRN rosNamespace]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-ros-namespace-srn-rosnamespace

Returns the namespace of the published topics.

**Telegram structure: sRN rosNamespace**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Reads the namespace of the published topics | String | 12 | | `rosNamespace` | `72 6F 73 4E 61 6D 65 73 70 61 63 65` |

**Example: sRN rosNamespace**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}rosNamespace<ETX>
```

```text
<STX>sRN rosNamespace<ETX>
```

```text
sRN rosNamespace
```

```text
02 73 52 4E 20 72 6F 73 4E 61 6D 65 73 70 61 63 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 52 4E 20 72 6F 73 4E 61 6D 65 73 70 61 63 65 62
```

```text
73 52 4E 20 72 6F 73 4E 61 6D 65 73 70 61 63 65
```

**Telegram structure: sRA rosNamespace**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Reads the namespace of the published topics | String | 12 | | `rosNamespace` | `72 6F 73 4E 61 6D 65 73 70 61 63 65` |
| Value | Number of characters of the frame id | Uint_16 | 2 | | `0d ... +16d (0h ... 10h)` | `00 00 ... 00 10` |
| Value | Name | FlexString | 64 | | `[Namespace]` | `[Namespace]` |

**Example: sRA rosNamespace - Namespace is "rear_lidar"**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}rosNamespace{SPC}A{SPC}rear_lidar<ETX>
```

```text
02 73 52 41 20 72 6F 73 4E 61 6D 65 73 70 61 63 65 20 41 20 72 65 61 72 5F 6C 69 64 61 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1D 73 52 41 20 72 6F 73 4E 61 6D 65 73 70 61 63 65 20 00 0A 72 65 61 72 5F 6C 69 64 61 72 6E
```
