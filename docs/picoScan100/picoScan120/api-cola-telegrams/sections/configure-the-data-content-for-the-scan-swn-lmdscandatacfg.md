# Configure the Data Content for the Scan [sWN LMDscandatacfg]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#configure-the-data-content-for-the-scan-swn-lmdscandatacfg

Configuration of the channels (e.g. distance) and information that will be send by the device as measurement data (output data format).

**Telegram structure: sWN LMDscandatacfg**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Configure scandata | String | 14 | | `LMDscandatacfg` | `4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67` |
| Reserved | - | Uint_8 | 2 | Always: | `0 0` | `00 00` |
| RSSI | Enable or disable the output of RSSI values | Uint_8 | 1 | RSSI disabled:<br>RSSI enabled: | `0<br>1` | `00<br>01` |
| Reserved | - | Enum_8 | 1 | Always: | `0` | `00` |
| Reserved | - | Enum_8 | 1 | Always: | `0` | `00` |
| Encoder | Encoder data | Uint_8 | 2 | No encoder:<br>Channel 1: | `0 0<br>1 0` | `00 00<br>01 00` |
| Reserved | - | Bool_1 | 1 | Always: | `0` | `00` |
| Device name | Sends the device name | Bool_1 | 1 | No:<br>Yes: | `0<br>1` | `00<br>01` |
| Reserved | - | Bool_1 | 1 | Always: | `0` | `00` |
| Time | Sends time stamp information | Bool_1 | 1 | No:<br>Yes: | `0<br>1` | `00<br>01` |
| Reserved | - | Uint_16 | 2 | Always: | `+1d (1h)` | `00 01` |

Example: RSSI enabled

**Example: sWN LMDscandatacfg**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}LMDscandatacfg{SPC}0{SPC}0{SPC}1{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}0{SPC}+1<ETX>
```

```text
<STX>sWN LMDscandatacfg 0 0 1 0 0 0 0 0 0 0 0 +1<ETX>
```

```text
sWN LMDscandatacfg 0 0 1 0 0 0 0 0 0 0 0 +1
```

```text
02 73 57 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 20 30 20 30 20 31 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 30 20 2B 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 20 73 57 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 20 00 00 01 00 00 00 00 00 00 00 00 00 01 42
```

```text
73 57 4E 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 20 00 00 01 00 00 00 00 00 00 00 00 00 01
```

**Telegram structure: sWA LMDscandatacfg**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Configure scandata | String | 14 | | `LMDscandatacfg` | `4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67` |

**Example: sWA LMDscandatacfg**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}LMDscandatacfg<ETX>
```

```text
02 73 57 41 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 41 20 4C 4D 44 73 63 61 6E 64 61 74 61 63 66 67 20 4D
```
