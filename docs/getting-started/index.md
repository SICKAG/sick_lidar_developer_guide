# Getting Started with SICK LiDAR Sensors

> Connect a SICK LiDAR sensor, open its web interface at the default IP 192.168.0.1, and check the first measurement data in Wireshark.

Source: https://sickag.github.io/sick_lidar_developer_guide/getting-started/

# Getting Started

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

Use this page once for every new sensor. It takes you from a powered sensor to
the web interface and to the first measurement data on your computer.

## Connect the Sensor

Connect the sensor to the computer with Ethernet, either with a cable between them or through a network switch. The device must be powered, and at least one LED must be green. For the connector layout and pin assignment, see the electrical connection page for [LRS4000](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/electrical-connection/), [multiScan100](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/electrical-connection/), [multiScan200](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/electrical-connection/), or [picoScan100](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/electrical-connection/).

Give the computer's Ethernet adapter a static address in the sensor subnet. No gateway is needed to communicate within this subnet.

<div class="centered-table" markdown>

<p class="table-caption" markdown>**Connect the Sensor:** device, IP address, and subnet mask.</p>

| Device   | IP address      | Subnet mask     |
| -------- | --------------- | --------------- |
| Sensor   | `192.168.0.1`   | `255.255.255.0` |
| Computer | `192.168.0.100` | `255.255.255.0` |

</div>

The factory sensor address is `192.168.0.1` for LRS4000, multiScan100,
multiScan200, and picoScan100. Check the device label or the saved project
documentation if the sensor does not respond at that address.

=== "Windows"

    Open **Settings → Network & internet → Ethernet → IP assignment → Edit**, select **Manual**, enable IPv4, and enter the computer's values:

    ![Windows Ethernet IPv4 settings for a sensor connection](https://sickag.github.io/sick_lidar_developer_guide/assets/picoScan100/img/windows-ip-settings.png){ width="344" }
    *Example Windows configuration for an Ethernet connection to the sensor.*

    Set the network profile of this adapter to **Private**. A Public profile blocks inbound UDP data, device discovery replies, and DDS discovery. In PowerShell, replace `18` with the interface index that `Get-NetConnectionProfile` reports for the sensor adapter:

    ```powershell
    Get-NetConnectionProfile
    Set-NetConnectionProfile -InterfaceIndex 18 -NetworkCategory Private
    ```

=== "Linux"

    Add the computer's address to the adapter connected to the sensor. Replace `eth0` with your interface name from `ip link`. The address is lost on reboot; use `nmcli` for a permanent setting.

    ```bash
    sudo ip addr add 192.168.0.100/24 dev eth0
    ```

## Open the Web Interface

Open `http://<sensor-ip>/` in Chrome, Edge, or Firefox. With factory settings, use <http://192.168.0.1/>.

![SOPASair Home page opened at 192.168.0.1](https://sickag.github.io/sick_lidar_developer_guide/assets/getting-started/sopasair-home.png)
*SOPASair Home page opened at 192.168.0.1.*

If the page does not load, check the subnet settings above or [find the sensor on the network](https://sickag.github.io/sick_lidar_developer_guide/shared-features/device-discovery/).

*picoScan100 example: Connect to the sensor in a web browser after configuring the computer's network adapter.*

## Log In

Reading values needs no login. Changing settings requires a login with an enabled [user level](https://sickag.github.io/sick_lidar_developer_guide/shared-features/user-levels/). On all devices, only **Service** is enabled by default. In SOPASair, open the login dialog, select **Service**, and enter its password. Then enable only the levels required by the deployment. The default passwords are documented in the operating instructions of your device. Do not pass them on, and change them during commissioning.

*SOPASair login: select a user level and enter its password to access configuration settings.*

## Change the IP Address

To use the sensor in your own network, give it an address in that network:

1. In the web interface, log in and open **Configuration → Connection options**.
2. Set **Addressing mode** to **Static**, or to **DHCP** if a DHCP server assigns the address.
3. Enter the **IP address**, **Subnet mask**, and **Default gateway**. The IP address must be unique in the network.
4. Click **Apply**. The browser loses the connection to the sensor.
5. If the new address is in another subnet, change the computer's Ethernet adapter accordingly. Then open the web interface at the new address and click **Save permanently**.

![Ethernet settings in the web interface](https://sickag.github.io/sick_lidar_developer_guide/assets/picoScan100/img/sopasair-configuration-ethernet-tile.png){ width="300" }
*Ethernet settings under **Configuration → Connection options**.*

*picoScan100 example: Change the device IP address through the web interface. For restrictions on device search, see the IP Address Assignment page.*

## Receive and Explore Measurement Data 

Use Compact for a first measurement-data check on all four devices:

1. In SOPASair, log in, open **Application > Data output**, and set the output
   for your device:

    === "LRS4000"

        Select **Compact** as the output format.

    === "multiScan100 / picoScan100"

        Select **Compact**, set the UDP destination to your computer's IP
        address (for example, `192.168.0.100`) and port `2115`, then enable
        **Start/stop data output**.

        ![SOPASair measurement data output set to Compact over UDP, port 2115, destination 192.168.0.100, with data output, RSSI, and properties enabled](https://sickag.github.io/sick_lidar_developer_guide/assets/getting-started/compact-udp-output.png){ width="340" }
        *picoScan100 example: Compact UDP output to the development computer.*

    === "multiScan200"

        Enable **TCP Compact** measurement-data output.

    Apply the settings and use **Save permanently** to retain them after a restart.

2. Install [Wireshark](https://www.wireshark.org/download.html) with the
   [Compact dissector](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/#install-the-dissector),
   then capture on the Ethernet interface connected to the sensor.
3. LRS4000 and multiScan200 send Compact over TCP. Connect a TCP client to the
   sensor's IP address on port `2115` and keep the connection open.
   Wireshark captures traffic but does not open the connection itself.
4. Enter `compact` in Wireshark's display-filter bar. Select a `COMPACT` packet
   and expand its decoded fields to inspect distances and scan metadata.
   If none appear, clear the filter and check the output settings and connection.

![Wireshark with the compact display filter and an expanded Compact measurement-data packet showing scan metadata](https://sickag.github.io/sick_lidar_developer_guide/assets/getting-started/wireshark-compact-measurement-data.png)
*picoScan150 example: Compact packets and decoded scan metadata in Wireshark.*

Next: [REST Interface](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/) ·
[Compact Format](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/) ·
[ROS Integration](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/ros-integration/)
