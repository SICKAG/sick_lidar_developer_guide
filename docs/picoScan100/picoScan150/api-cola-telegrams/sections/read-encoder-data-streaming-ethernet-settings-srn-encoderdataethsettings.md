# Read Encoder Data Streaming Ethernet Settings [sRN EncoderDataEthSettings]

> picoScan150 API | CoLa Telegrams (CoLa A and CoLa B) › Encoder Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-cola-telegrams/#read-encoder-data-streaming-ethernet-settings-srn-encoderdataethsettings

Returns the destination IP address settings for encoder data streaming (UDP).

**Telegram structure: sRN EncoderDataEthSettings**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Encoder Data Streaming Ethernet Settings | String | 22 | | `EncoderDataEthSettings` | `45 6E 63 6F 64 65 72 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |

**Example: sRN EncoderDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}EncoderDataEthSettings<ETX>
```

```text
<STX>sRN EncoderDataEthSettings<ETX>
```

```text
sRN EncoderDataEthSettings
```

```text
02 73 52 4E 20 45 6E 63 6F 64 65 72 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1A 73 52 4E 20 45 6E 63 6F 64 65 72 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 57
```

```text
73 52 4E 20 45 6E 63 6F 64 65 72 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73
```

**Telegram structure: sRA EncoderDataEthSettings**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Encoder Data Streaming Ethernet Settings | String | 22 | | `EncoderDataEthSettings` | `45 6E 63 6F 64 65 72 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73` |
| Protocol | Transport protocol for streaming encoder data. | Enum_8 | 1 | UDP:<br>TCP: | `1<br>2` | `01<br>02` |
| IPAddress[] | IP address of the Encoder data receiver. (repeated 4 times) | Uint_8 | 1 | 0 ... 255 | `0 ... FF` | `00 ... FF` |
| Port | Port of the Encoder data receiver. | Uint_16 | 2 | 0 ... 65535 | `0 ... FFFF` | `00 00 ... FF FF` |

**Example: sRA EncoderDataEthSettings**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}EncoderDataEthSettings{SPC}1{SPC}C0{SPC}A8{SPC}0{SPC}64{SPC}1D50<ETX>
```

```text
02 73 52 41 20 45 6E 63 6F 64 65 72 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 31 20 43 30 20 41 38 20 30 20 36 34 20 31 44 35 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 22 73 52 41 20 45 6E 63 6F 64 65 72 44 61 74 61 45 74 68 53 65 74 74 69 6E 67 73 20 01 C0 A8 00 64 1D 50 38
```
