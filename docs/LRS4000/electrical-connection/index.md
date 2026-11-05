# LRS4000 Electrical Connection and Pin Assignment

> Wire the LRS4000 power, Ethernet, encoder, and digital I/O connectors to a controller using the documented M12 pin assignments.

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/electrical-connection/

# Electrical Connection {#electrical-connection}

Compatible with: LRS4000

The LRS4000 has separate M12 connectors for power, Ethernet, and digital
I/O/encoder signals. The tables below reproduce the assignments from LRS4000
operating instructions 8026337/1VNC, pages 34–35.

To check whether the sensor still receives its minimum supply voltage at the end of a long cable, use the [Cable Dimensioning](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/cable-dimensioning/) calculator.

## Power {#pwr}

This connection uses a male, 5-pin, A-coded M12 connector.

![PWR connector face with numbered pins](https://sickag.github.io/sick_lidar_developer_guide/assets/electrical-symbols/lrs4000-pwr.png)
<p class="caption connector-caption">PWR connector face with numbered pins.</p>

<p class="table-caption" markdown>**PWR** connector pin assignments, signal functions, and wire colors of compatible cables with open wire ends.</p>

| Pin | Signal | Function | Wire color |
| --- | --- | --- | --- |
| 1 | `Vs` | Supply, +10 V DC to +30 V DC | Brown |
| 2 | — | Reserved; do not connect | White |
| 3 | `GND` | Supply return, 0 V | Blue |
| 4 | `IN8/OUT8` | Configurable digital input 8 or output 8 | Black |
| 5 | — | Reserved; do not connect | Gray |

Wire colors refer to these SICK cables with open wire ends: [2093088](https://www.sick.com/de/en/search?text=2093088) (5 m), [2093090](https://www.sick.com/de/en/search?text=2093090) (10 m), [2093091](https://www.sick.com/de/en/search?text=2093091) (20 m).

## Ethernet {#ethernet}

This connection uses a female, 4-pin, D-coded M12 connector.

![Ethernet connector face with numbered pins](https://sickag.github.io/sick_lidar_developer_guide/assets/electrical-symbols/lrs4000-ethernet.png)
<p class="caption connector-caption">Ethernet connector face with numbered pins.</p>

<p class="table-caption" markdown>**Ethernet** connector pin assignments and signal functions.</p>

| Pin | Signal | Function |
| --- | --- | --- |
| 1 | `TX+` | Transmit + |
| 2 | `RX+` | Receive + |
| 3 | `TX-` | Transmit − |
| 4 | `RX-` | Receive − |

## IOs and Encoder {#ios-and-encoder}

This connection uses a female, 8-pin, A-coded M12 connector.

![I/O and encoder connector face with numbered pins](https://sickag.github.io/sick_lidar_developer_guide/assets/electrical-symbols/lrs4000-io.png)
<p class="caption connector-caption">I/O and encoder connector face with numbered pins.</p>

<p class="table-caption" markdown>**IOs and Encoder** connector pin assignments, signal functions, and wire colors of compatible cables with open wire ends.</p>

| Pin | Signal | Function | Wire color |
| --- | --- | --- | --- |
| 1 | `IN1` | Encoder input 1 | White |
| 2 | `IN2` | Encoder input 2 | Brown |
| 3 | `IN3/OUT3` | Configurable digital input 3 or output 3 | Green |
| 4 | `IN4/OUT4` | Configurable digital input 4 or output 4 | Yellow |
| 5 | `IN5/OUT5` | Configurable digital input 5 or output 5 | Gray |
| 6 | `IN6/OUT6` | Configurable digital input 6 or output 6 | Pink |
| 7 | `GND INx/OUTx` | Common reference for all digital I/O | Blue |
| 8 | `IN7/OUT7` | Configurable digital input 7 or output 7 | Red |

Wire colors refer to these SICK cables with open wire ends: [6054491](https://www.sick.com/de/en/search?text=6054491) (5 m), [6054490](https://www.sick.com/de/en/search?text=6054490) (10 m), [6050689](https://www.sick.com/de/en/search?text=6050689) (20 m).
