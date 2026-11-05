# multiScan100 Electrical Connection and Pin Assignment

> Wire a multiScan100 power, Ethernet, and digital I/O system plug to a controller using the documented M12 pin assignments.

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/electrical-connection/

# Electrical Connection {#electrical-connection}

Compatible with: multiScan100

To check whether the sensor still receives its minimum supply voltage at the end of a long cable, use the [Cable Dimensioning](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/cable-dimensioning/) calculator.

## Power / 3 IOs {#pwr-3-ios}

System plug part number: 2116047

![System plug 2116047 with Ethernet and 5-pin power connectors](https://sickag.github.io/sick_lidar_developer_guide/assets/electrical/system-plug-2116047.png){ width="320" }
*System plug 2116047 for power and three configurable digital I/Os.*

This system plug uses a male, 5-pin, A-coded M12 connector.

![5-pin PWR connector face with numbered pins](https://sickag.github.io/sick_lidar_developer_guide/assets/electrical-symbols/multiscan100-pwr-5.png)
<p class="caption connector-caption">5-pin PWR connector face with numbered pins.</p>

<p class="table-caption" markdown>**PWR / 3 IOs** connector pin assignments, signal functions, and wire colors of compatible cables with open wire ends.</p>

| Pin | Signal | Function | Wire color |
| --- | --- | --- | --- |
| 1 | `Vs` | Supply, +9 V DC to +30 V DC | Brown |
| 2 | `IN2/OUT2` | Configurable digital input 2 or output 2 | White |
| 3 | `GND` | Supply return, 0 V | Blue |
| 4 | `IN1/OUT1` | Configurable digital input 1 or output 1 | Black |
| 5 | `IN3/OUT3` | Configurable digital input 3 or output 3 | Gray |

Wire colors refer to these SICK cables with open wire ends:

- Straight, PUR, unshielded: [2145539](https://www.sick.com/de/en/search?text=2145539) (0.6 m), [2104366](https://www.sick.com/de/en/search?text=2104366) (1 m), [2095617](https://www.sick.com/de/en/search?text=2095617) (2 m), [2095618](https://www.sick.com/de/en/search?text=2095618) (5 m), [2095619](https://www.sick.com/de/en/search?text=2095619) (10 m), [2095620](https://www.sick.com/de/en/search?text=2095620) (15 m), [2095614](https://www.sick.com/de/en/search?text=2095614) (20 m)
- Straight, PUR, shielded: [2145581](https://www.sick.com/de/en/search?text=2145581) (0.6 m), [2145582](https://www.sick.com/de/en/search?text=2145582) (1 m), [2145583](https://www.sick.com/de/en/search?text=2145583) (2 m), [2095733](https://www.sick.com/de/en/search?text=2095733) (5 m), [2095734](https://www.sick.com/de/en/search?text=2095734) (10 m), [2095738](https://www.sick.com/de/en/search?text=2095738) (20 m)
- Straight, PVC, unshielded: [2145570](https://www.sick.com/de/en/search?text=2145570) (0.6 m), [2096239](https://www.sick.com/de/en/search?text=2096239) (2 m), [2145572](https://www.sick.com/de/en/search?text=2145572) (3 m), [2096240](https://www.sick.com/de/en/search?text=2096240) (5 m), [2096241](https://www.sick.com/de/en/search?text=2096241) (10 m), [2096242](https://www.sick.com/de/en/search?text=2096242) (15 m)
- Angled, PUR, unshielded: [2145540](https://www.sick.com/de/en/search?text=2145540) (0.6 m), [2145541](https://www.sick.com/de/en/search?text=2145541) (1 m), [2141178](https://www.sick.com/de/en/search?text=2141178) (1 m, 150 mm stripped), [2095772](https://www.sick.com/de/en/search?text=2095772) (2 m), [2145543](https://www.sick.com/de/en/search?text=2145543) (3 m), [2095773](https://www.sick.com/de/en/search?text=2095773) (5 m), [2095774](https://www.sick.com/de/en/search?text=2095774) (10 m), [2141059](https://www.sick.com/de/en/search?text=2141059) (15 m), [2141061](https://www.sick.com/de/en/search?text=2141061) (20 m)
- Angled, PVC, unshielded: [2145573](https://www.sick.com/de/en/search?text=2145573) (0.6 m), [2145574](https://www.sick.com/de/en/search?text=2145574) (1 m), [2096215](https://www.sick.com/de/en/search?text=2096215) (2 m), [2145575](https://www.sick.com/de/en/search?text=2145575) (3 m), [2096216](https://www.sick.com/de/en/search?text=2096216) (5 m), [2096217](https://www.sick.com/de/en/search?text=2096217) (10 m)

## Power / 8 IOs {#pwr-8-ios}

System plug part number: 2130754

![System plug 2130754 with Ethernet and 12-pin power and I/O connectors](https://sickag.github.io/sick_lidar_developer_guide/assets/electrical/system-plug-12-pin.png){ width="320" }
*System plug 2130754 with a 12-pin power and I/O connector.*

This system plug uses a male, 12-pin, A-coded M12 connector.

![12-pin PWR and I/O connector face with numbered pins](https://sickag.github.io/sick_lidar_developer_guide/assets/electrical-symbols/multiscan100-pwr-12.png)
<p class="caption connector-caption">12-pin PWR and I/O connector face with numbered pins.</p>

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
| 11 | — | Reserved; do not connect | Gray-pink |
| 12 | — | Reserved; do not connect | Red-blue |

Wire colors refer to these SICK cables with open wire ends:

- Straight, PUR: [2119019](https://www.sick.com/de/en/search?text=2119019) (5 m), [2119045](https://www.sick.com/de/en/search?text=2119045) (10 m)
- Straight, PVC: [2119051](https://www.sick.com/de/en/search?text=2119051) (10 m), [2124202](https://www.sick.com/de/en/search?text=2124202) (15 m)
- Angled, PUR: [2119046](https://www.sick.com/de/en/search?text=2119046) (5 m), [2119050](https://www.sick.com/de/en/search?text=2119050) (10 m), [2114523](https://www.sick.com/de/en/search?text=2114523) (10 m, Ø 6.9 mm)
- Angled, PVC: [2119053](https://www.sick.com/de/en/search?text=2119053) (10 m)

## Ethernet {#ethernet}

The Ethernet connection uses a female, 4-pin, D-coded M12 connector.

![Ethernet connector face with numbered pins](https://sickag.github.io/sick_lidar_developer_guide/assets/electrical-symbols/multiscan100-ethernet.png)
<p class="caption connector-caption">Ethernet connector face with numbered pins.</p>

<p class="table-caption" markdown>**Ethernet** connector pin assignments and signal functions.</p>

| Pin | Signal | Function |
| --- | --- | --- |
| 1 | `TX+` | Transmit + |
| 2 | `RX+` | Receive + |
| 3 | `TX-` | Transmit − |
| 4 | `RX-` | Receive − |
