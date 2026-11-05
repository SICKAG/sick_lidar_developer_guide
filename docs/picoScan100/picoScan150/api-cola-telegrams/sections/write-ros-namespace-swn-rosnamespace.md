# Write ROS Namespace [sWN rosNamespace]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#write-ros-namespace-swn-rosnamespace

Adds a prefix to all ROS entities (topics, services, parameters).

**Telegram structure: sWN rosNamespace**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Sets the namespace of the published topics | String | 12 | | `rosNamespace` | `72 6F 73 4E 61 6D 65 73 70 61 63 65` |
| Value | Number of characters of the frame id | Uint_16 | 2 | | `0d ... +16d (0h ... 10h)` | `00 00 ... 00 10` |
| Value | Name | FlexString | 64 | | `[Namespace]` | `[Namespace]` |

**Example: sWN rosNamespace - Namespace is "rear_lidar"**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}rosNamespace{SPC}A{SPC}rear_lidar<ETX>
```

```text
<STX>sWN rosNamespace A rear_lidar<ETX>
```

```text
sWN rosNamespace A rear_lidar
```

```text
02 73 57 4E 20 72 6F 73 4E 61 6D 65 73 70 61 63 65 20 41 20 72 65 61 72 5F 6C 69 64 61 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1D 73 57 4E 20 72 6F 73 4E 61 6D 65 73 70 61 63 65 20 00 0A 72 65 61 72 5F 6C 69 64 61 72 64
```

```text
73 57 4E 20 72 6F 73 4E 61 6D 65 73 70 61 63 65 20 00 0A 72 65 61 72 5F 6C 69 64 61 72
```

**Telegram structure: sWA rosNamespace**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Sets the namespace of the published topics | String | 12 | | `rosNamespace` | `72 6F 73 4E 61 6D 65 73 70 61 63 65` |

**Example: sWA rosNamespace**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}rosNamespace<ETX>
```

```text
02 73 57 41 20 72 6F 73 4E 61 6D 65 73 70 61 63 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 57 41 20 72 6F 73 4E 61 6D 65 73 70 61 63 65 20 48
```
