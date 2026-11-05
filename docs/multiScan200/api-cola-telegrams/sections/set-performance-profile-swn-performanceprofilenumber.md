# Set Performance Profile [sWN PerformanceProfileNumber]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-performance-profile-swn-performanceprofilenumber

Select the scan configuration (performance profile) by its number. The supported scan configurations are listed in the parameter table below. Read the active scan configuration with `sRN PerformanceProfileNumber`. In CoLa A, a number without a sign is hexadecimal: send scan configuration 11 as `+11` or `B`.

Required user level: Authorized client.

**Telegram structure: sWN PerformanceProfileNumber**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write | String | 3 | | `sWN` | `73 57 4E` |
| Command | Write the number of the performance profile | String | 24 | | `PerformanceProfileNumber` | `50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72` |
| Scan configuration | Number of the scan configuration | Enum_8 | 1 | 276°, 0.47° × 0.47°, 20 Hz:<br>276°, 0.47° × 0.94°, 20 Hz:<br>276°, 0.47° × 0.23°, 20 Hz:<br>360°, 0.47° × 0.47°, 10 Hz:<br>276°, 0.23° × 0.47°, 20 Hz, 2× interlaced:<br>276°, 0.23° × 0.23°, 20 Hz, 2× interlaced:<br>276°, 0.12° × 0.23°, 20 Hz, 4× interlaced:<br>190°, 0.47° × 0.47°, 20 Hz:<br>120°, 0.47° × 0.47°, 20 Hz: | `1<br>2<br>3<br>4<br>+10d (A)<br>+11d (B)<br>+12d (C)<br>+20d (14)<br>+21d (15)` | `01<br>02<br>03<br>04<br>0A<br>0B<br>0C<br>14<br>15` |

**Example: sWN PerformanceProfileNumber - Scan configuration 11**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}PerformanceProfileNumber{SPC}+11<ETX>
```

```text
sWN PerformanceProfileNumber +11
```

```text
02 73 57 4E 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72 20 2B 31 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 57 4E 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72 20 0B 51
```

```text
73 57 4E 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72 20 0B
```

**Telegram structure: sWA PerformanceProfileNumber**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sWA` | `73 57 41` |
| Command | Set Performance Profile | String | 24 | | `PerformanceProfileNumber` | `50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72` |

**Example: sWA PerformanceProfileNumber**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}PerformanceProfileNumber<ETX>
```

```text
02 73 57 41 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1D 73 57 41 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72 20 55
```
