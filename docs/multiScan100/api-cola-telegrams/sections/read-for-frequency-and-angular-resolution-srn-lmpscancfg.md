# Read for Frequency and Angular Resolution [sRN LMPscancfg]

> multiScan100 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/#read-for-frequency-and-angular-resolution-srn-lmpscancfg

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

| Telegram part      | Description                                   | Variable | Length | Additional details                                   | Values CoLa A (ASCII)                                | Values CoLa B (Binary)                                                   |
| ------------------ | --------------------------------------------- | -------- | ------ | ---------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------ |
| Command type       | Answer                                        | String   | 3      |                                                      | `sRA`                   | `73 52 41`                                  |
| Command            | Info of scan frequency and angular resolution | String   | 10     |                                                      | `LMPscancfg`            | `4C 4D 50 73 63 61 6E 63 66 67`             |
| Scan frequency     | [1/100 Hz]                                    | Uint_32  | 4      | 20 Hz:                                               | `7D0h`                  | `00 00 07 D0`                               |
| Reserved           | -                                             | Int_16   | 2      | Always:                                              | `1`                     | `00 01`                                     |
| Angular resolution | [1/10000°]                                    | Uint_32  | 4      | 0.5°:<br>0.25° (interlaced):<br>0.125° (interlaced): | `1388h<br>9C4h<br>4E2h` | `00 00 13 88<br>00 00 09 C4<br>00 00 04 E2` |
| Start angle        | [1/10000°]                                    | Int_32   | 4      | Variant-dependent; example: -180 to +180 degrees     | `FFE488C0 ... 1B7740`   | `FF E4 88 C0 ... 00 1B 77 40`               |
| Stop angle         | [1/10000°]                                    | Int_32   | 4      | Variant-dependent; example: -180 to +180 degrees     | `FFE488C0 ... 1B7740`   | `FF E4 88 C0 ... 00 1B 77 40`               |

**Example: sRA LMPscancfg**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LMPscancfg{SPC}7D0{SPC}1{SPC}1388{SPC}FFE488C0{SPC}1B7740<ETX>
```

```text
02 73 52 41 20 4C 4D 50 73 63 61 6E 63 66 67 20 37 44 30 20 31 20 31 33 38 38 20 46 46 45 34 38 38 43 30 20 31 42 37 37 34 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 21 73 52 41 20 4C 4D 50 73 63 61 6E 63 66 67 20 00 00 07 D0 00 01 00 00 13 88 FF E4 88 C0 00 1B 77 40 7E
```
