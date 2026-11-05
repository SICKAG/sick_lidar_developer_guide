# Initiate an Acoustic or Visual Signal for a Defined Period of Time [sMN FindMe]

> picoScan120 API | CoLa Telegrams (CoLa A and CoLa B) › Device Information

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-cola-telegrams/#initiate-an-acoustic-or-visual-signal-for-a-defined-period-of-time-smn-findme

This command can be used to make the device easier to find.

**Telegram structure: sMN FindMe**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Initiate an acoustic or visual signal | String | 11 | | `FindMe` | `46 69 6E 64 4D 65` |
| Period of time | Duration in seconds | Uint_16 | 2 | | `0d … 65535d (0h .. FF FF)` | `00 ... FF FF` |

**Example: sMN FindMe**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}FindMe{SPC}1<ETX>
```

```text
<STX>sMN FindMe 1<ETX>
```

```text
sMN FindMe 1
```

```text
02 73 4D 4E 20 46 69 6E 64 4D 65 20 31 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 4D 4E 20 46 69 6E 64 4D 65 20 00 01 7C
```

```text
73 4D 4E 20 46 69 6E 64 4D 65 20 00 01
```

**Telegram structure: sAN FindMe**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Initiate an acoustic or visual signal | String | 11 | | `FindMe` | `46 69 6E 64 4D 65` |

**Example: sAN FindMe**

**CoLa A (ASCII)**

```text
<STX>sAN{SPC}FindMe<ETX>
```

```text
02 73 41 4E 20 46 69 6E 64 4D 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0B 73 41 4E 20 46 69 6E 64 4D 65 20 71
```
