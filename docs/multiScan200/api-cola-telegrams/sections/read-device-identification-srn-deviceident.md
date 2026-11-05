# Read Device Identification [sRN DeviceIdent]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Device Information

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-device-identification-srn-deviceident

Read the device family and the firmware version.

**Telegram structure: sRN DeviceIdent**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read firmware version | String | 11 | | `DeviceIdent` | `44 65 76 69 63 65 49 64 65 6E 74` |

**Example: sRN DeviceIdent**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}DeviceIdent<ETX>
```

```text
sRN DeviceIdent
```

```text
02 73 52 4E 20 44 65 76 69 63 65 49 64 65 6E 74 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 44 65 76 69 63 65 49 64 65 6E 74 25
```

```text
73 52 4E 20 44 65 76 69 63 65 49 64 65 6E 74
```

**Telegram structure: sRA DeviceIdent**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | | String | 11 | | `DeviceIdent` | `44 65 76 69 63 65 49 64 65 6E 74` |
| Device name length | Number of characters of device name | Uint_16 | 2 | 0 … 34 | `C` | `00 0C` |
| Device name | Device family | String | Length | Maximum 34 characters | `multiScan200` | `6D 75 6C 74 69 53 63 61 6E 32 30 30` |
| Firmware version length | Number of characters of firmware version | Uint_16 | 2 | 0 … 34 | `8` | `00 08` |
| Firmware version | Firmware version | String | Length | Maximum 34 characters | `1.1.0.0R` | `31 2E 31 2E 30 2E 30 52` |

**Example: sRA DeviceIdent**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}DeviceIdent{SPC}C{SPC}multiScan200{SPC}8{SPC}1.1.0.0R<ETX>
```

```text
02 73 52 41 20 44 65 76 69 63 65 49 64 65 6E 74 20 43 20 6D 75 6C 74 69 53 63 61 6E 32 30 30 20 38 20 31 2E 31 2E 30 2E 30 52 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 28 73 52 41 20 44 65 76 69 63 65 49 64 65 6E 74 20 00 0C 6D 75 6C 74 69 53 63 61 6E 32 30 30 00 08 31 2E 31 2E 30 2E 30 52 16
```
