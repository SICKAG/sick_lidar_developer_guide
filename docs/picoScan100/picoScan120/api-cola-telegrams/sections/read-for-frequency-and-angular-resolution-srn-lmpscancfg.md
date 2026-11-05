# Read for Frequency and Angular Resolution [sRN LMPscancfg]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#read-for-frequency-and-angular-resolution-srn-lmpscancfg

Read the scanning frequency, angular resolution and aperture angle of the device. Values show the information of the values before any filters are applied. Therefore aperture angle is always showing the maximum, scanning frequency and angular resolution may also be static depending on device family.

**Telegram structure: sRN LMPscancfg**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Info of scan frequency and angular resolution | String | 10 | | `LMPscancfg` | `4C 4D 50 73 63 61 6E 63 66 67` |

**Example: sRN LMPscancfg**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LMPscancfg<ETX>
```

```text
<STX>sRN LMPscancfg<ETX>
```

```text
sRN LMPscancfg
```

```text
02 73 52 4E 20 4C 4D 50 73 63 61 6E 63 66 67 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0E 73 52 4E 20 4C 4D 50 73 63 61 6E 63 66 67 63
```

```text
73 52 4E 20 4C 4D 50 73 63 61 6E 63 66 67
```

**Telegram structure: sRA LMPscancfg**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Info of scan frequency and angular resolution | String | 10 | | `LMPscancfg` | `4C 4D 50 73 63 61 6E 63 66 67` |
| Scan frequency | [1/100 Hz] | Uint_32 | 4 | 15 Hz ... 50 Hz:<br>(depends on Dynamic Sensing Profile ) | `5DCh ... 1388h` | `05 DC ... 13 88` |
| Reserved | - | Int_16 | 2 | Always: | `1` | `00 01` |
| Angular resolution | [1/10000°] | Uint_32 | 4 | 0.1° ... 1°:<br>(depends on Dynamic Sensing Profile ) | `3E8h … 2710h` | `03 E8 ... 27 10` |
| Start angle | [1/10000°] | Int_32 | 4 | -48° ... 228° | `FFF8AD00h … 22CA40h` | `FF F8 AD 00h … 00 22 CA 40h` |
| Stop angle | [1/10000°] | Int_32 | 4 | -48° ... 228° | `FFF8AD00h … 22CA40h` | `FF F8 AD 00h … 00 22 CA 40h` |

**Example: sRA LMPscancfg - 30 Hz scan frequency, 0.1° angular resolution, -138° start angle, +138° stop angle**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LMPscancfg{SPC}BB8{SPC}1{SPC}3E8{SPC}FFEAF160{SPC}150EA0<ETX>
```

```text
02 73 52 41 20 4C 4D 50 73 63 61 6E 63 66 67 20 42 42 38 20 31 20 33 45 38 20 46 46 45 41 46 31 36 30 20 31 35 30 45 41 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 21 73 52 41 20 4C 4D 50 73 63 61 6E 63 66 67 20 00 00 0B B8 00 01 00 00 03 E8 FF EA F1 60 00 15 0E A0 2A
```
