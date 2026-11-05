# Read ROS Namespace [sRN rosNamespace]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-ros-namespace-srn-rosnamespace

Read the namespace that is prepended to all Native ROS 2 topics.

Required user level: Authorized client.

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
| Namespace length | Number of characters of namespace | Uint_16 | 2 | 0 … 64 | `A` | `00 0A` |
| Namespace | Namespace prepended to all topics; empty for no namespace | String | Length | Maximum 64 characters | `rear_lidar` | `72 65 61 72 5F 6C 69 64 61 72` |

**Example: sRA rosNamespace**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}rosNamespace{SPC}0<ETX>
```

```text
02 73 52 41 20 72 6F 73 4E 61 6D 65 73 70 61 63 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 72 6F 73 4E 61 6D 65 73 70 61 63 65 20 00 00 4D
```
