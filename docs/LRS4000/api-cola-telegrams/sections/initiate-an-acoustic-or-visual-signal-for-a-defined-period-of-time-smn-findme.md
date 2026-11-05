# Initiate an Acoustic or Visual Signal for a Defined Period of Time [sMN FindMe]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Device

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#initiate-an-acoustic-or-visual-signal-for-a-defined-period-of-time-smn-findme

Sets the device LEDs into blinking mode for better identification.

**Telegram structure: sMN FindMe**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Method | String | 3 | | `sMN` | `73 4D 4E` |
| Command | Initiate an Acoustic or Visual Signal for a Defined Period of Time | String | 6 | | `FindMe` | `46 69 6E 64 4D 65` |
| uiDuration | Duration in seconds. | Uint_16 | 2 | 0 ... 65535 | `0 ... FFFF` | `00 00 ... FF FF` |

**Example: sMN FindMe**

**CoLa A (ASCII)**

```text
<STX>sMN{SPC}FindMe{SPC}3<ETX>
```

```text
<STX>sMN FindMe 3<ETX>
```

```text
sMN FindMe 3
```

```text
02 73 4D 4E 20 46 69 6E 64 4D 65 20 33 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0D 73 4D 4E 20 46 69 6E 64 4D 65 20 00 03 7E
```

```text
73 4D 4E 20 46 69 6E 64 4D 65 20 00 03
```

**Telegram structure: sAN FindMe**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sAN` | `73 41 4E` |
| Command | Initiate an Acoustic or Visual Signal for a Defined Period of Time | String | 6 | | `FindMe` | `46 69 6E 64 4D 65` |

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
