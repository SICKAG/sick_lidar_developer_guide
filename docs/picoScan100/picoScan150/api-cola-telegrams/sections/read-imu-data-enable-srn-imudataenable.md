# Read IMU Data Enable [sRN ImuDataEnable]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › IMU Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-imu-data-enable-srn-imudataenable

Returns whether IMU data streaming is enabled.

**Telegram structure: sRN ImuDataEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read IMU Data Enable | String | 13 | | `ImuDataEnable` | `49 6D 75 44 61 74 61 45 6E 61 62 6C 65` |

**Example: sRN ImuDataEnable**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}ImuDataEnable<ETX>
```

```text
<STX>sRN ImuDataEnable<ETX>
```

```text
sRN ImuDataEnable
```

```text
02 73 52 4E 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 11 73 52 4E 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 0F
```

```text
73 52 4E 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65
```

**Telegram structure: sRA ImuDataEnable**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read IMU Data Enable | String | 13 | | `ImuDataEnable` | `49 6D 75 44 61 74 61 45 6E 61 62 6C 65` |
| ImuDataEnable | Enables or disables streaming IMU data. | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |

**Example: sRA ImuDataEnable**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}ImuDataEnable{SPC}0<ETX>
```

```text
02 73 52 41 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 49 6D 75 44 61 74 61 45 6E 61 62 6C 65 20 00 20
```
