# multiScan200 Electrical Connection and Pin Assignment

> Wire a multiScan270 power, Gigabit Ethernet, and digital I/O system plug to a controller using the documented M12 pin assignments.

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/electrical-connection/

# Electrical Connection {#electrical-connection}

Compatible with: multiScan200

To check whether the sensor still receives its minimum supply voltage at the end of a long cable, use the [Cable Dimensioning](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/cable-dimensioning/) calculator.

## Power / 8 IOs {#pwr-8-ios}

System plug part numbers: 2155106, 2148845

The PWR and I/O connection uses a male, 12-pin, A-coded M12 connector.

![PWR and I/O connector face with numbered pins](https://sickag.github.io/sick_lidar_developer_guide/assets/electrical-symbols/multiscan200-pwr.png)
<p class="caption connector-caption">PWR and I/O connector face with numbered pins.</p>

<p class="table-caption" markdown>**PWR / 8 IOs** connector pin assignments, signal functions, and wire colors of compatible cables with open wire ends.</p>

| Pin | Signal | Function | Wire color |
| --- | --- | --- | --- |
| 1 | `IN1/OUT1` | Configurable digital input 1 or output 1 | Brown |
| 2 | `GND` | Supply return, 0 V | Blue |
| 3 | `IN2/OUT2` | Configurable digital input 2 or output 2 | White |
| 4 | `IN7/OUT7` | Configurable digital input 7 or output 7 | Green |
| 5 | `IN8/OUT8` | Configurable digital input 8 or output 8 | Pink |
| 6 | `IN3/OUT3` | Configurable digital input 3 or output 3 | Yellow |
| 7 | `IN4/OUT4` | Configurable digital input 4 or output 4 | Black |
| 8 | `IN6/OUT6` | Configurable digital input 6 or output 6 | Gray |
| 9 | `Vs` | Supply, +9 V DC to +30 V DC | Red |
| 10 | `IN5/OUT5` | Configurable digital input 5 or output 5 | Violet |
| 11 | `GND` | Supply return, 0 V | Gray-pink |
| 12 | `Vs` | Supply, +9 V DC to +30 V DC | Red-blue |

Wire colors refer to these SICK cables with open wire ends:

- Straight, PUR: [2119019](https://www.sick.com/de/en/search?text=2119019) (5 m), [2119045](https://www.sick.com/de/en/search?text=2119045) (10 m)
- Straight, PVC: [2119051](https://www.sick.com/de/en/search?text=2119051) (10 m), [2124202](https://www.sick.com/de/en/search?text=2124202) (15 m)
- Angled, PUR: [2119046](https://www.sick.com/de/en/search?text=2119046) (5 m), [2119050](https://www.sick.com/de/en/search?text=2119050) (10 m), [2114523](https://www.sick.com/de/en/search?text=2114523) (10 m, Ø 6.9 mm)
- Angled, PVC: [2119053](https://www.sick.com/de/en/search?text=2119053) (10 m)

**Always wire both supply pins 9 and 12 and both ground pins 2 and 11.** This is
a requirement in the multiScan270 operating instructions, not an optional
parallel connection.

## Ethernet {#ethernet}

The Ethernet connection uses a female, 8-pin, X-coded M12 connector.

![Ethernet connector face with numbered pins](https://sickag.github.io/sick_lidar_developer_guide/assets/electrical-symbols/multiscan200-ethernet.png)
<p class="caption connector-caption">Ethernet connector face with numbered pins.</p>

<p class="table-caption" markdown>**Ethernet** connector pin assignments and signal functions.</p>

| Pin | Signal | Function |
| --- | --- | --- |
| 1 | `TRD0_P` | Transmit/receive pair 0 + |
| 2 | `TRD0_N` | Transmit/receive pair 0 − |
| 3 | `TRD1_P` | Transmit/receive pair 1 + |
| 4 | `TRD1_N` | Transmit/receive pair 1 − |
| 5 | `TRD3_P` | Transmit/receive pair 3 + |
| 6 | `TRD3_N` | Transmit/receive pair 3 − |
| 7 | `TRD2_N` | Transmit/receive pair 2 − |
| 8 | `TRD2_P` | Transmit/receive pair 2 + |

The X-coded Gigabit Ethernet interface requires all four data pairs. A
four-wire D-coded connection is unsuitable.
