# Read the Data Content for the Scan [sRN LMDscandatacfg]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#read-the-data-content-for-the-scan-srn-lmdscandatacfg

Returns the configuration of LMDscandata such as the content of the scan data (e.g. whether to include the RSSI values).

**Telegram structure: sRN LMDscandatacfg**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read the Data Content for the Scan | String | 14 | | `LMDscandatacfg` | `4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67` |

**Example: sRN LMDscandatacfg**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LMDscandatacfg<ETX>
```

```text
<STX>sRN LMDscandatacfg<ETX>
```

```text
sRN LMDscandatacfg
```

```text
02 73 52 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 67
```

```text
73 52 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67
```

**Telegram structure: sRA LMDscandatacfg**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read the Data Content for the Scan | String | 14 | | `LMDscandatacfg` | `4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67` |
| Reserved | Always 0 | Uint_8 | 1 | 0 ... 255 | `0 ... FF` | `00 ... FF` |
| Reserved | Always 0 | Uint_8 | 1 | 0 ... 255 | `0 ... FF` | `00 ... FF` |
| RSSI | Output of RSSI values | Uint_8 | 1 | Disabled:<br>Enabled: | `0<br>1` | `00<br>01` |
| Reserved | Always 0 | Enum_8 | 1 | 0 ... 255 | `0 ... FF` | `00 ... FF` |
| Reserved | Always 0 | Enum_8 | 1 | 0 ... 255 | `0 ... FF` | `00 ... FF` |
| Encoder | Encoder data | Uint_8 | 1 | No encoder:<br>Channel 1: | `0<br>1` | `00<br>01` |
| Reserved | Always 0 | Uint_8 | 1 | 0 ... 255 | `0 ... FF` | `00 ... FF` |
| Reserved | Always 0 | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| Device name | Sends the device name | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| Reserved | Always 0 | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| Time | Sends time stamp information | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| Reserved | Always 1 | Uint_16 | 2 | 0 ... 65535 | `0 ... FFFF` | `00 00 ... FF FF` |

**Example: sRA LMDscandatacfg**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LMDscandatacfg{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}1<ETX>
```

```text
02 73 52 41 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 20 30 20 30 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 52 41 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 20 00 00 01 00 00 00 00 00 00 00 00 00 01 48
```
