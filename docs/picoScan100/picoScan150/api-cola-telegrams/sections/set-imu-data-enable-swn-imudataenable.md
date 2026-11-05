# Set IMU Data Enable [sWN ImuDataEnable]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › IMU Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-imu-data-enable-swn-imudataenable

Enables/ Disables streaming IMU data output.

**Telegram structure: sWN ImuDataEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set streaming IMU data output. | String | 13 | | `ImuDataEnable` | `49 6D 75 44 61 74 61 45 6E 61 62 6C 65` |
| IMU data stream | Enable/ disable | Bool | 1 | Disable:<br>Enable: | `0d (00h)<br>+1d (01h)` | `00 ... 01` |

**Example: sWN ImuDataEnable 0 - Disable the streaming IMU data output**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ImuDataEnable{SPC}0<ETX>
```

```text
<STX>sWN ImuDataEnable 0<ETX>
```

```text
sWN ImuDataEnable 0
```

```text
02 73 57 4E 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 4E 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 20 00 2A
```

```text
73 57 4E 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 20 00
```

**Telegram structure: sWA ImuDataEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set streaming IMU data output. | String | 13 | | `ImuDataEnable` | `49 6D 75 44 61 74 61 45 6E 61 62 6C 65` |

**Example: sWA ImuDataEnable**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}ImuDataEnable<ETX>
```

```text
02 73 57 41 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 57 41 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 20 25
```
