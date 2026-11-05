# Set Scan Data Format [sWN ScanDataFormat]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#set-scan-data-format-swn-scandataformat

Set the data serialization format

**Telegram structure: sWN ScanDataFormat**

| Telegram part | Description               | Variable | Length | Additional details                                                                                                                 | Values CoLa A (ASCII)                                                       | Values CoLa B (Binary)                                                   |
| ------------- | ------------------------- | -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Write                     | String   | 3      |                                                                                                                                    | `sWN`                                          | `73 57 4E`                                  |
| Command       | Data serialization format | String   | 14     |                                                                                                                                    | `ScanDataFormat`                               | `53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74` |
| Variable Data | Data                      | Enum_8   | 1      | MSGPACK:<br>Compact (recommended):<br>LMDscandata (not supported on multiScan100):<br>Native ROS2 (not supported on multiScan100): | `+1d (1h)<br>+2d (2h)<br>+3d (3h)<br>+4d (4h)` | `01<br>02<br>03<br>04`                      |

Example: sWN ScanDataFormat

Scan data format set to Compact format

**Example: sWN ScanDataFormat**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ScanDataFormat{SPC}2<ETX>
```

```text
sWN ScanDataFormat 2
```

```text
02 73 57 4E 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 20 32 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 14 73 57 4E 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 20 02 44
```

```text
73 57 4E 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 20 02
```

**Telegram structure: sWA ScanDataFormat**

| Telegram part | Description               | Variable | Length | Additional details | Values CoLa A (ASCII)                         | Values CoLa B (Binary)                                                   |
| ------------- | ------------------------- | -------- | ------ | ------------------ | --------------------------------------------- | ------------------------------------------------------------------------ |
| Command type  | Answer                    | String   | 3      |                    | `sWA`            | `73 57 41`                                  |
| Command       | Data serialization format | String   | 14     |                    | `ScanDataFormat` | `53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74` |

**Example: sWA ScanDataFormat**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}ScanDataFormat<ETX>
```

```text
02 73 57 41 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 41 20 53 63 61 6E 44 61 74 61 46 6F 72 6D 61 74 20 49
```
