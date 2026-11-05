# Read Performance Profile [sRN PerformanceProfileNumber]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-performance-profile-srn-performanceprofilenumber

Returns the scan configuration profile (scanning frequency and angular resolution).

**Telegram structure: sRN PerformanceProfileNumber**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Performance Profile | String | 24 | | `PerformanceProfileNumber` | `50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72` |

**Example: sRN PerformanceProfileNumber**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}PerformanceProfileNumber<ETX>
```

```text
<STX>sRN PerformanceProfileNumber<ETX>
```

```text
sRN PerformanceProfileNumber
```

```text
02 73 52 4E 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1C 73 52 4E 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72 7F
```

```text
73 52 4E 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72
```

**Telegram structure: sRA PerformanceProfileNumber**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Performance Profile | String | 24 | | `PerformanceProfileNumber` | `50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72` |
| PerformanceProfileNumber | Read and write the number of the performance profile | Enum_8 | 1 | SC_047h_047v_276_20Hz_1x:<br>SC_047h_094v_276_20Hz_1x:<br>SC_047h_023v_276_20Hz_1x:<br>SC_047h_047v_360_10Hz_1x:<br>SC_023h_047v_276_20Hz_2x:<br>SC_023h_023v_276_20Hz_2x:<br>SC_012h_023v_276_20Hz_4x:<br>SC_047h_047v_190_20Hz_1x:<br>SC_047h_047v_120_20Hz_1x: | `1<br>2<br>3<br>4<br>A<br>B<br>C<br>14<br>15` | `01<br>02<br>03<br>04<br>0A<br>0B<br>0C<br>14<br>15` |

**Example: sRA PerformanceProfileNumber**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}PerformanceProfileNumber{SPC}C<ETX>
```

```text
02 73 52 41 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72 20 43 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 1E 73 52 41 20 50 65 72 66 6F 72 6D 61 6E 63 65 50 72 6F 66 69 6C 65 4E 75 6D 62 65 72 20 0C 5C
```
