# Set Scan Configuration [sMN mCLsetscancfglist]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-scan-configuration-smn-mclsetscancfglist

Select the scan configuration (field of view, scanning frequency, and angular resolution) by its number. Scan configurations 10 to 12 use interlace mode: they achieve a higher angular resolution by combining scans that are shifted to each other. The supported scan configurations are listed in the parameter table below. Read the active scan configuration with `sRN PerformanceProfileNumber`. To set it, use [`sWN PerformanceProfileNumber`](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-performance-profile-swn-performanceprofilenumber).

In CoLa A, a number without a sign is hexadecimal: send scan configuration 10 as `+10` or `A`, not as `10`.

**Telegram structure: sMN mCLsetscancfglist**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Set scan configuration | String | 17 | | `mCLsetscancfglist` | `6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74` |
| Scan configuration | Number of the scan configuration | Enum_8 | 1 | 276°, 0.47° × 0.47°, 20 Hz:<br>276°, 0.47° × 0.94°, 20 Hz:<br>276°, 0.47° × 0.23°, 20 Hz:<br>360°, 0.47° × 0.47°, 10 Hz:<br>276°, 0.23° × 0.47°, 20 Hz, 2× interlaced:<br>276°, 0.23° × 0.23°, 20 Hz, 2× interlaced:<br>276°, 0.12° × 0.23°, 20 Hz, 4× interlaced:<br>190°, 0.47° × 0.47°, 20 Hz:<br>120°, 0.47° × 0.47°, 20 Hz: | `1<br>2<br>3<br>4<br>+10d (A)<br>+11d (B)<br>+12d (C)<br>+20d (14)<br>+21d (15)` | `01<br>02<br>03<br>04<br>0A<br>0B<br>0C<br>14<br>15` |

**Example: sMN mCLsetscancfglist 1 - Select scan configuration 1**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}mCLsetscancfglist{SPC}1<ETX>
```

```text
sMN mCLsetscancfglist 1
```

```text
02 73 4D 4E 20 6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 4D 4E 20 6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74 20 01 0E
```

```text
73 4D 4E 20 6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74 20 01
```

**Telegram structure: sAN mCLsetscancfglist**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Set scan configuration | String | 17 | | `mCLsetscancfglist` | `6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74` |
| Status code | Wrong setting | Enum_8 | 1 | Ok:<br>Error frequency:<br>Error resolution:<br>Error resolution and frequency:<br>Error scan field:<br>Error:<br>Error no license: | `0<br>1<br>2<br>3<br>4<br>5<br>6` | `00<br>01<br>02<br>03<br>04<br>05<br>06` |

**Example: sAN mCLsetscancfglist Ok**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}mCLsetscancfglist{SPC}0<ETX>
```

```text
02 73 41 4E 20 6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74 20 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 17 73 41 4E 20 6D 43 4C 73 65 74 73 63 61 6E 63 66 67 6C 69 73 74 20 00 03
```
