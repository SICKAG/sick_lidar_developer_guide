# Set IMU Data Streaming Ethernet Settings [sWN ImuDataEthSettings]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › IMU Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#set-imu-data-streaming-ethernet-settings-swn-imudataethsettings

Ethernet settings for the IMU data streaming functionality of the device

**Telegram structure: sWN ImuDataEthSettings**

| Telegram part | Description                                         | Variable | Length | Additional details | Values CoLa A (ASCII)                                                                                        | Values CoLa B (Binary)                                                               |
| ------------- | --------------------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| Command type  | Write                                               | String   | 3      |                    | `sWN`                                                                           | `73 57 4E`                                              |
| Command       | Set IMU data streaming ethernet settings            | String   | 18     |                    | `ImuDataEthSettings`                                                            | `49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |
| Protocol      | Transport protocol for streaming IMU data           | Enum_8   | 1      | UDP:               | `+1d (01h)`                                                                     | `01`                                                    |
| IP address    | IP address of the destination for IMU data receiver | Array    | 4      |                    | `0 …+255d (00…FF)<br>0 …+255d (00..FF)<br>0 …+255d (00…FF)<br>0 …+255d (00…FF)` | `00 … FF<br>00 … FF<br>00 … FF<br>00 … FF`              |
| Port          | Port destination of the IMU data reseiver           | Uint_16  | 2      |                    | `0 .. +65535d(00 00…FF FF)`                                                     | `00 00 … FF FF`                                         |

Example: sWN ImuDataEthSettings +1 +192 +168 +0 +100 +7503

Protocol is set to UDP (1), IPAddress (192.168.0.100), Port (7503)

**Example: sWN ImuDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}ImuDataEthSettings{SPC}1{SPC}C0{SPC}A8{SPC}0{SPC}64{SPC}1D4F<ETX>
```

```text
sWN ImuDataEthSettings 1 C0 A8 0 64 1D4F
```

```text
02 73 57 4E 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 31 20 43 30 20 41 38 20 30 20 36 34 20 31 44 34 46 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 57 4E 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 1D 4F 28
```

```text
73 57 4E 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 1D 4F
```

**Telegram structure: sWA ImuDataEthSettings**

| Telegram part | Description                              | Variable | Length | Additional details | Values CoLa A (ASCII)                             | Values CoLa B (Binary)                                                               |
| ------------- | ---------------------------------------- | -------- | ------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Command type  | Answer                                   | String   | 3      |                    | `sWA`                | `73 57 41`                                              |
| Command       | Set IMU data streaming ethernet settings | String   | 18     |                    | `ImuDataEthSettings` | `49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |

**Example: sWA ImuDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}ImuDataEthSettings<ETX>
```

```text
02 73 57 41 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 57 41 20 49 6D 75 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 78
```
