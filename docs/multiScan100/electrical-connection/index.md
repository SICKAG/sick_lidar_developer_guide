# multiScan100 Electrical Connection and Pin Assignment

> Wire a multiScan100 power, Ethernet, and digital I/O system plug to a controller using the documented M12 pin assignments.

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/electrical-connection/

# Electrical Connection

Compatible with: multiScan100

To check whether the sensor still receives its minimum supply voltage at the end of a long cable, use the [Cable Dimensioning](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/cable-dimensioning/) calculator.

## Power / 3 IOs 

System plug part number: 2116047

![System plug 2116047 with Ethernet and 5-pin power connectors](https://sickag.github.io/sick_lidar_developer_guide/assets/electrical/system-plug-2116047.png){ width="320" }
*System plug 2116047 for power and three configurable digital I/Os.*

This system plug uses a male, 5-pin, A-coded M12 connector.

![5-pin PWR connector face with numbered pins](https://sickag.github.io/sick_lidar_developer_guide/assets/electrical-symbols/multiscan100-pwr-5.png)
<p class="caption connector-caption">5-pin PWR connector face with numbered pins.</p>

<p class="table-caption" markdown>**PWR / 3 IOs** connector pin assignments and signal functions.</p>

| Pin | Signal | Function |
| --- | --- | --- |
| 1 | `Vs` | Supply, +9 V DC to +30 V DC |
| 2 | `IN2/OUT2` | Configurable digital input 2 or output 2 |
| 3 | `GND` | Supply return, 0 V |
| 4 | `IN1/OUT1` | Configurable digital input 1 or output 1 |
| 5 | `IN3/OUT3` | Configurable digital input 3 or output 3 |

## Power / 8 IOs 

System plug part number: 2130754

![System plug 2130754 with Ethernet and 12-pin power and I/O connectors](https://sickag.github.io/sick_lidar_developer_guide/assets/electrical/system-plug-12-pin.png){ width="320" }
*System plug 2130754 with a 12-pin power and I/O connector.*

This system plug uses a male, 12-pin, A-coded M12 connector.

![12-pin PWR and I/O connector face with numbered pins](https://sickag.github.io/sick_lidar_developer_guide/assets/electrical-symbols/multiscan100-pwr-12.png)
<p class="caption connector-caption">12-pin PWR and I/O connector face with numbered pins.</p>

<p class="table-caption" markdown>**PWR / 8 IOs** connector pin assignments and signal functions.</p>

| Pin | Signal | Function |
| --- | --- | --- |
| 1 | `IN1/OUT1` | Configurable digital input 1 or output 1 |
| 2 | `GND` | Supply return, 0 V |
| 3 | `IN2/OUT2` | Configurable digital input 2 or output 2 |
| 4 | `IN7/OUT7` | Configurable digital input 7 or output 7 |
| 5 | `IN8/OUT8` | Configurable digital input 8 or output 8 |
| 6 | `IN3/OUT3` | Configurable digital input 3 or output 3 |
| 7 | `IN4/OUT4` | Configurable digital input 4 or output 4 |
| 8 | `IN6/OUT6` | Configurable digital input 6 or output 6 |
| 9 | `Vs` | Supply, +9 V DC to +30 V DC |
| 10 | `IN5/OUT5` | Configurable digital input 5 or output 5 |
| 11 | — | Reserved; do not connect |
| 12 | — | Reserved; do not connect |

## Ethernet

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
