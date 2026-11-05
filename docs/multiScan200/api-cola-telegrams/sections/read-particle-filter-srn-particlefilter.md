# Read Particle Filter [sRN particleFilter]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#read-particle-filter-srn-particlefilter

Returns the particle filter settings. Filters out disturbances in the measurement data caused by particles such as dust, snow, or similar.

**Telegram structure: sRN particleFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Read | String | 3 | | `sRN` | `73 52 4E` |
| Command | Read Particle Filter | String | 14 | | `particleFilter` | `70 61 72 74 69 63 6C 65 46 69 6C 74 65 72` |

**Example: sRN particleFilter**

**CoLa A (ASCII)**

```text
<STX>sRN{SPC}particleFilter<ETX>
```

```text
<STX>sRN particleFilter<ETX>
```

```text
sRN particleFilter
```

```text
02 73 52 4E 20 70 61 72 74 69 63 6C 65 46 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 12 73 52 4E 20 70 61 72 74 69 63 6C 65 46 69 6C 74 65 72 7B
```

```text
73 52 4E 20 70 61 72 74 69 63 6C 65 46 69 6C 74 65 72
```

**Telegram structure: sRA particleFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Answer | String | 3 | | `sRA` | `73 52 41` |
| Command | Read Particle Filter | String | 14 | | `particleFilter` | `70 61 72 74 69 63 6C 65 46 69 6C 74 65 72` |
| enable | If true a detected particle is filtered out (aka distance set to zero) and subsequent echoes are moved up. Otherwise, the point is flagged in the properties channel. | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| minNumberOfNeighbors | If a measurement has less points in its 8-connected neighborhood over all echoes within the distance threshold, this measurement is considered as particle. | Uint_16 | 2 | 0 ... 8 | `0 ... 8` | `00 00 ... 00 08` |
| distanceThreshold | Distance threshold value. For a given measurement all points in the 8-connected neighborhood over all three echoes are with a distance less than the distanceThreshold are counted. If the result is below the minNumberOfNeighbors, this measurement is considered as particle | Uint_16 | 2 | 20 ... 2000 | `14 ... 7D0` | `00 14 ... 07 D0` |

**Example: sRA particleFilter**

**CoLa A (ASCII)**

```text
<STX>sRA{SPC}particleFilter{SPC}1{SPC}1{SPC}1F4<ETX>
```

```text
02 73 52 41 20 70 61 72 74 69 63 6C 65 46 69 6C 74 65 72 20 31 20 31 20 31 46 34 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 52 41 20 70 61 72 74 69 63 6C 65 46 69 6C 74 65 72 20 01 00 01 01 F4 A1
```
