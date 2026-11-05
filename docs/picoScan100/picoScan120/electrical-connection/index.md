# picoScan120 Electrical Connection and Pin Assignment

> Connect picoScan120 power, the Device Not Ready output, and Ethernet using the documented M12 pin assignments.

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/electrical-connection/

# Electrical Connection {#electrical-connection}

Compatible with: picoScan100

To check whether the sensor still receives its minimum supply voltage at the end of a long cable, use the [Cable Dimensioning](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/cable-dimensioning/) calculator.

## Power / Device Not Ready {#pwr}

The power cable uses a male, 5-pin, A-coded M12 connector.

![5-pin PWR connector face with numbered pins](https://sickag.github.io/sick_lidar_developer_guide/assets/electrical-symbols/picoscan100-pwr-5.png)
<p class="caption connector-caption">5-pin PWR connector face with numbered pins.</p>

<p class="table-caption" markdown>**PWR** connector pin assignments, signal functions, and wire colors of compatible cables with open wire ends.</p>

| Pin | Signal | Function | Wire color |
| --- | --- | --- | --- |
| 1 | `Vs` | Supply, +9 V DC to +30 V DC | Brown |
| 2 | `Device Not Ready` | Digital output Device Not Ready | White |
| 3 | `GND` | Supply return, 0 V | Blue |
| 4 | — | Reserved; do not connect | Black |
| 5 | — | Reserved; do not connect | Gray |

Wire colors refer to these SICK cables with open wire ends:

- Straight, PUR, unshielded: [2145539](https://www.sick.com/de/en/search?text=2145539) (0.6 m), [2104366](https://www.sick.com/de/en/search?text=2104366) (1 m), [2095617](https://www.sick.com/de/en/search?text=2095617) (2 m), [2095618](https://www.sick.com/de/en/search?text=2095618) (5 m), [2095619](https://www.sick.com/de/en/search?text=2095619) (10 m), [2095620](https://www.sick.com/de/en/search?text=2095620) (15 m), [2095614](https://www.sick.com/de/en/search?text=2095614) (20 m)
- Straight, PUR, shielded: [2145581](https://www.sick.com/de/en/search?text=2145581) (0.6 m), [2145582](https://www.sick.com/de/en/search?text=2145582) (1 m), [2145583](https://www.sick.com/de/en/search?text=2145583) (2 m), [2095733](https://www.sick.com/de/en/search?text=2095733) (5 m), [2095734](https://www.sick.com/de/en/search?text=2095734) (10 m), [2095738](https://www.sick.com/de/en/search?text=2095738) (20 m)
- Straight, PVC, unshielded: [2145570](https://www.sick.com/de/en/search?text=2145570) (0.6 m), [2096239](https://www.sick.com/de/en/search?text=2096239) (2 m), [2145572](https://www.sick.com/de/en/search?text=2145572) (3 m), [2096240](https://www.sick.com/de/en/search?text=2096240) (5 m), [2096241](https://www.sick.com/de/en/search?text=2096241) (10 m), [2096242](https://www.sick.com/de/en/search?text=2096242) (15 m)
- Angled, PUR, unshielded: [2145540](https://www.sick.com/de/en/search?text=2145540) (0.6 m), [2145541](https://www.sick.com/de/en/search?text=2145541) (1 m), [2141178](https://www.sick.com/de/en/search?text=2141178) (1 m, 150 mm stripped), [2095772](https://www.sick.com/de/en/search?text=2095772) (2 m), [2145543](https://www.sick.com/de/en/search?text=2145543) (3 m), [2095773](https://www.sick.com/de/en/search?text=2095773) (5 m), [2095774](https://www.sick.com/de/en/search?text=2095774) (10 m), [2141059](https://www.sick.com/de/en/search?text=2141059) (15 m), [2141061](https://www.sick.com/de/en/search?text=2141061) (20 m)
- Angled, PVC, unshielded: [2145573](https://www.sick.com/de/en/search?text=2145573) (0.6 m), [2145574](https://www.sick.com/de/en/search?text=2145574) (1 m), [2096215](https://www.sick.com/de/en/search?text=2096215) (2 m), [2145575](https://www.sick.com/de/en/search?text=2145575) (3 m), [2096216](https://www.sick.com/de/en/search?text=2096216) (5 m), [2096217](https://www.sick.com/de/en/search?text=2096217) (10 m)

## Ethernet {#ethernet}

The Ethernet cable uses a female, 4-pin, D-coded M12 connector.

![Ethernet connector face with numbered pins](https://sickag.github.io/sick_lidar_developer_guide/assets/electrical-symbols/picoscan100-ethernet.png)
<p class="caption connector-caption">Ethernet connector face with numbered pins.</p>

<p class="table-caption" markdown>**Ethernet** connector pin assignments and signal functions.</p>

| Pin | Signal | Function |
| --- | --- | --- |
| 1 | `TX+` | Transmit + |
| 2 | `RX+` | Receive + |
| 3 | `TX-` | Transmit − |
| 4 | `RX-` | Receive − |
