# Read Particle Filter [sRN LFPparticle]

> LRS4000 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/#read-particle-filter-srn-lfpparticle

Returns the particle filter settings. Filters out disturbances in the measurement data caused by particles such as dust, snowflakes, or similar. Configure the minimal threshold of the required distance step (mm) between the echo to be filtered and the echoes of surrounding beam angles.

**Telegram structure: sRN LFPparticle**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Particle Filter | String | 11 | | `LFPparticle` | `4C 46 50 70 61 72 74 69 63 6C 65` |

**Example: sRN LFPparticle**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}LFPparticle<ETX>
```

```text
<STX>sRN LFPparticle<ETX>
```

```text
sRN LFPparticle
```

```text
02 73 52 4E 20 4C 46 50 70 61 72 74 69 63 6C 65 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 0F 73 52 4E 20 4C 46 50 70 61 72 74 69 63 6C 65 01
```

```text
73 52 4E 20 4C 46 50 70 61 72 74 69 63 6C 65
```

**Telegram structure: sRA LFPparticle**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Particle Filter | String | 11 | | `LFPparticle` | `4C 46 50 70 61 72 74 69 63 6C 65` |
| bEnable | Particle filter is enabled | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| uiThreshold | threshold value to decide which scan point should be replaced | Uint_16 | 2 | 500 ... 5000 mm | `1F4 ... 1388` | `01 F4 ... 13 88` |

**Example: sRA LFPparticle**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}LFPparticle{SPC}0{SPC}3E8<ETX>
```

```text
02 73 52 41 20 4C 46 50 70 61 72 74 69 63 6C 65 20 30 20 33 45 38 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 52 41 20 4C 46 50 70 61 72 74 69 63 6C 65 20 00 03 E8 C5
```
