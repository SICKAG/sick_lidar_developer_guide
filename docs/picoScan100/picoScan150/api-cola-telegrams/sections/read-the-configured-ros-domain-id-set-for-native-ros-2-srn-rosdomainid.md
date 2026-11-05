# Read the Configured ROS Domain ID Set for Native ROS 2 [sRN rosDomainId]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-the-configured-ros-domain-id-set-for-native-ros-2-srn-rosdomainid

Returns the configured ROS domain ID set for Native ROS 2.

**Telegram structure: sRN rosDomainId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read request | String | 3 | | `sRN` | `73 52 4E` |
| Variable name | rosDomainId | String | 11 | | `rosDomainId` | `72 6F 73 44 6F 6D 61 69 6E 49 64` |

**Example: sRN rosDomainId**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}rosDomainId<ETX>
```

```text
<STX>sRN rosDomainId<ETX>
```

```text
sRN rosDomainId
```

```text
02 73 52 4E 20 72 6F 73 44 6F 6D 61 69 6E 49 64 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 72 6F 73 44 6F 6D 61 69 6E 49 64 2C
```

```text
73 52 4E 20 72 6F 73 44 6F 6D 61 69 6E 49 64
```

**Telegram structure: sRA rosDomainId**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read answer | String | 3 | | `sRA` | `73 52 41` |
| Variable name | rosDomainId | String | 11 | | `rosDomainId` | `72 6F 73 44 6F 6D 61 69 6E 49 64` |
| Value | ROS domain ID | UInt_8 | 1 | | `0` | `00` |

**Example: sRA rosDomainId**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}rosDomainId{SPC}0<ETX>
```

```text
02 73 52 41 20 72 6F 73 44 6F 6D 61 69 6E 49 64 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 41 20 72 6F 73 44 6F 6D 61 69 6E 49 64 20 00 03
```
