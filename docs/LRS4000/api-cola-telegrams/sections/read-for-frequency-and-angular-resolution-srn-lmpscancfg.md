# Read for Frequency and Angular Resolution [sRN LMPscancfg]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-for-frequency-and-angular-resolution-srn-lmpscancfg

Read the scanning frequency, angular resolution and aperture angle of the device. Values show the information of the values before any filters are applied. Therefore aperture angle is always showing the maximum, scanning frequency and angular resolution may also be static depending on device family.

**Telegram structure: sRN LMPscancfg**

| Telegram part | Description                                   | Variable | Length | Additional details | Values CoLa A (ASCII)                     | Values CoLa B (Binary)                                       |
| ------------- | --------------------------------------------- | -------- | ------ | ------------------ | ----------------------------------------- | ------------------------------------------------------------ |
| Command type  | Read                                          | String   | 3      |                    | `sRN`        | `73 52 4E`                      |
| Command       | Info of scan frequency and angular resolution | String   | 10     |                    | `LMPscancfg` | `4C 4D 50 73 63 61 6E 63 66 67` |

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

| Telegram part      | Description                                   | Variable | Length | Additional details                                                                   | Values CoLa A (ASCII)                                    | Values CoLa B (Binary)                                                                |
| ------------------ | --------------------------------------------- | -------- | ------ | ------------------------------------------------------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Command type       | Answer                                        | String   | 3      |                                                                                      | `sRA`                       | `73 52 41`                                               |
| Command            | Info of scan frequency and angular resolution | String   | 10     |                                                                                      | `LMPscancfg`                | `4C 4D 50 73 63 61 6E 63 66 67`                          |
| Scan frequency     | [1/100 Hz]                                    | Uint_32  | 4      | 12.5 Hz:<br>25 Hz:                                                                   | `4E2h<br>9C4h`              | `00 00 04 E2<br>00 00 09 C4`                             |
| Reserved           | -                                             | Int_16   | 2      | Always:                                                                              | `1`                         | `00 01`                                                  |
| Angular resolution | [1/10000°]                                    | Uint_32  | 4      | 12.5 Hz: 0.02°, 0.04°, 0.06°, 0.1°, 0.12°<br>25 Hz: 0.04°, 0.08°, 0.12°, 0.2°, 0.24° | `C8h … 4B0h<br>190h … 960h` | `00 00 00 C8 … 00 00 04 B0<br>00 00 01 90 … 00 00 09 60` |
| Start angle        | [1/10000°]                                    | Int_32   | 4      | -180° ... +180°                                                                      | `FFE488C0h … 1B7740h`       | `FF E4 88 C0 … 00 1B 77 40`                              |
| Stop angle         | [1/10000°]                                    | Int_32   | 4      | -180° ... +180°                                                                      | `FFE488C0h … 1B7740h`       | `FF E4 88 C0 … 00 1B 77 40`                              |

**Example: sRA LMPscancfg - 25 Hz scan frequency, 0.24° angular resolution, -180° start angle, +180° stop angle**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LMPscancfg{SPC}9C4{SPC}1{SPC}960{SPC}FFE488C0{SPC}1B7740<ETX>
```

```text
02 73 52 41 20 4C 4D 50 73 63 61 6E 63 66 67 20 39 43 34 20 31 20 39 36 30 20 46 46 45 34 38 38 43 30 20 31 42 37 37 34 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 21 73 52 41 20 4C 4D 50 73 63 61 6E 63 66 67 20 00 00 09 C4 00 01 00 00 09 60 FF E4 88 C0 00 1B 77 40 96
```
