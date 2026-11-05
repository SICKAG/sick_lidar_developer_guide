# Configure the ROS Domain ID for Native ROS 2 [sWN rosDomainId]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#configure-the-ros-domain-id-for-native-ros-2-swn-rosdomainid

Configure the ROS domain ID for Native ROS 2.

**Telegram structure: sWN rosDomainId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | rosDomainId | String | 11 | | `rosDomainId` | `72 6F 73 44 6F 6D 61 69 6E 49 64` |
| Value | ROS domain ID | UInt_8 | 1 | | `0` | `00` |

**Example: sWN rosDomainId**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}rosDomainId{SPC}0<ETX>
```

```text
<STX>sWN rosDomainId 0<ETX>
```

```text
sWN rosDomainId 0
```

```text
02 73 57 4E 20 72 6F 73 44 6F 6D 61 69 6E 49 64 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 57 4E 20 72 6F 73 44 6F 6D 61 69 6E 49 64 20 00 09
```

```text
73 57 4E 20 72 6F 73 44 6F 6D 61 69 6E 49 64 20 00
```

**Telegram structure: sWA rosDomainId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 11 | | `rosDomainId` | `72 6F 73 44 6F 6D 61 69 6E 49 64` |

**Example: sWA rosDomainId**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}rosDomainId<ETX>
```

```text
02 73 57 41 20 72 6F 73 44 6F 6D 61 69 6E 49 64 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 10 73 57 41 20 72 6F 73 44 6F 6D 61 69 6E 49 64 20 06
```
