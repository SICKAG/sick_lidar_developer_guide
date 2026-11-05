# Set Particle Filter [sWN particleFilter]

> multiScan200 API | CoLa Telegrams (CoLa A and CoLa B) › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-particle-filter-swn-particlefilter

Configure the particle filter. A point is a particle if fewer than the minimum number of neighbors in its 8-connected neighborhood, over all echoes, are within the distance threshold. See [Filter Details](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/#particle-filter).

Required user level: Authorized client.

**Telegram structure: sWN particleFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write request | String | 3 | | `sWN` | `73 57 4E` |
| Variable name | Particle filter | String | 14 | | `particleFilter` | `70 61 72 74 69 63 6C 65 46 69 6C 74 65 72` |
| enable | If true a detected particle is filtered out (aka distance set to zero) and subsequent echoes are moved up. Otherwise, the point is flagged in the properties channel. | Bool_1 | 1 | False:<br>True: | `0<br>1` | `00<br>01` |
| minNumberOfNeighbors | If a measurement has less points in its 8-connected neighborhood over all echoes within the distance threshold, this measurement is considered as particle. | Uint_16 | 2 | Max: 8 | `+1` | `00 01` |
| distanceThreshold | Distance threshold value. For a given measurement all points in the 8-connected neighborhood over all three echoes are with a distance less than the distanceThreshold are counted. If the result is below the minNumberOfNeighbors, this measurement is considered as particle | Uint_16 | 2 | Max: 2000 | `+500` | `01 F4` |

**Example: sWN particleFilter - Disable the particle filter**

**CoLa A (ASCII)**

```text
<STX>sWN{SPC}particleFilter{SPC}0{SPC}+1{SPC}+500<ETX>
```

```text
sWN particleFilter 0 +1 +500
```

```text
02 73 57 4E 20 70 61 72 74 69 63 6C 65 46 69 6C 74 65 72 20 30 20 2B 31 20 2B 35 30 30 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 18 73 57 4E 20 70 61 72 74 69 63 6C 65 46 69 6C 74 65 72 20 00 00 01 01 F4 AA
```

```text
73 57 4E 20 70 61 72 74 69 63 6C 65 46 69 6C 74 65 72 20 00 00 01 01 F4
```

**Telegram structure: sWA particleFilter**

| Telegram part | Description | Variable | Length | Additional details | Values CoLa A (ASCII) | Values CoLa B (Binary) |
| --- | --- | --- | --- | --- | --- | --- |
| Command type | Write answer | String | 3 | | `sWA` | `73 57 41` |
| Variable name | Echo of variable name | String | 14 | | `particleFilter` | `70 61 72 74 69 63 6C 65 46 69 6C 74 65 72` |

**Example: sWA particleFilter**

**CoLa A (ASCII)**

```text
<STX>sWA{SPC}particleFilter<ETX>
```

```text
02 73 57 41 20 70 61 72 74 69 63 6C 65 46 69 6C 74 65 72 03
```

**CoLa B (binary)**

```text
02 02 02 02 00 00 00 13 73 57 41 20 70 61 72 74 69 63 6C 65 46 69 6C 74 65 72 20 51
```
