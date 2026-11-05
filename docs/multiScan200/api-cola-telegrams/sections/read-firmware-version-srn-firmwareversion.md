# Read Firmware Version [sRN FirmwareVersion]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Device Information

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-firmware-version-srn-firmwareversion

Read the version of the application software.

**Telegram structure: sRN FirmwareVersion**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read version of the application software | String | 15 | | `FirmwareVersion` | `46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E` |

**Example: sRN FirmwareVersion**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}FirmwareVersion<ETX>
```

```text
sRN FirmwareVersion
```

```text
02 73 52 4E 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 4E 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E 24
```

```text
73 52 4E 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E
```

**Telegram structure: sRA FirmwareVersion**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read version of the application software | String | 15 | | `FirmwareVersion` | `46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E` |
| Version length | Number of characters of version | Uint_16 | 2 | 0 … 40 | `5` | `00 05` |
| Version | Version of the application software | String | Length | Maximum 40 characters | `1.1.0` | `31 2E 31 2E 30` |

**Example: sRA FirmwareVersion**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}FirmwareVersion{SPC}5{SPC}1.1.0<ETX>
```

```text
02 73 52 41 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E 20 35 20 31 2E 31 2E 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1B 73 52 41 20 46 69 72 6D 77 61 72 65 56 65 72 73 69 6F 6E 20 00 05 31 2E 31 2E 30 3E
```
