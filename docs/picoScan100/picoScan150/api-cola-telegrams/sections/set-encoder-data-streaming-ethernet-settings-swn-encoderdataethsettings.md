# Set Encoder Data Streaming Ethernet Settings [sWN EncoderDataEthSettings]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Encoder Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#set-encoder-data-streaming-ethernet-settings-swn-encoderdataethsettings

Ethernet settings for the encoder data streaming functionality of the device

**Telegram structure: sWN EncoderDataEthSettings**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Set Encoder data streaming ethernet settings | String | 22 | | `EncoderDataEthSettings` | `45 6E 63 6F 64 65 72 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |
| Protocol | Transport protocol for streaming IMU data | Enum_8 | 1 | UDP: | `+1d (01h)` | `01` |
| IP address | IP address of the destination for IMU data receiver | Array | 4 | | `0 …+255d (00…FF)<br>0 …+255d (00..FF)<br>0 …+255d (00…FF)<br>0 …+255d (00…FF)` | `00 … FF<br>00 … FF<br>00 … FF<br>00 … FF` |
| Port | Port destination of the Encoder data reseiver | Uint_16 | 2 | | `0 .. +65535d(00 00…FF FF)` | `00 00 … FF FF` |

Example: sWN EncoderDataEthSettings +1 +192 +168 +0 +100 +7503

Protocol is set to UDP (1), IPAddress (192.168.0.100), Port (7503)

**Example: sWN EncoderDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}EncoderDataEthSettings{SPC}+1{SPC}+192{SPC}+168{SPC}+0{SPC}+100{SPC}+7503<ETX>
```

```text
<STX>sWN EncoderDataEthSettings +1 +192 +168 +0 +100 +7503<ETX>
```

```text
sWN EncoderDataEthSettings +1 +192 +168 +0 +100 +7503
```

```text
02 73 57 4E 20 45 6E 63 6F 64 65 72 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 31 20 43 30 20 41 38 20 30 20 36 34 20 31 44 34 46 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 22 73 57 4E 20 45 6E 63 6F 64 65 72 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 1D 4F 2D
```

```text
73 57 4E 20 45 6E 63 6F 64 65 72 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 1D 4F
```

**Telegram structure: sWA EncoderDataEthSettings**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set Encoder data streaming ethernet settings | String | 22 | | `EncoderDataEthSettings` | `45 6E 63 6F 64 65 72 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |

**Example: sWA EncoderDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}EncoderDataEthSettings<ETX>
```

```text
02 73 57 41 20 45 6E 63 6F 64 65 72 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 57 41 20 45 6E 63 6F 64 65 72 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 7D
```
