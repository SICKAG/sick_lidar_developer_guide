# Getting Started with SICK LiDAR Sensors

> Connect a SICK LiDAR sensor to your computer, open its web interface, and configure the network. Includes the factory default IP addresses.

Source: https://sickag.github.io/sick_lidar_developer_guide/getting-started/

# Getting Started

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

## Connect the Sensor

1. Connect the sensor directly to the computer with Ethernet. The device must be powered, and at least one LED must be green. For the connector layout and pin assignment, see the electrical connection page for [LRS4000](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/electrical-connection/), [multiScan100](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/electrical-connection/), [multiScan200](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/electrical-connection/), or [picoScan100](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/electrical-connection/).
2. Give the computer's Ethernet adapter a static address in the sensor subnet. Leave the computer's gateway empty.

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

On Windows, open **Settings → Network & internet → Ethernet → IP assignment → Edit**, select **Manual**, enable IPv4, and enter the computer's values:

![Windows Ethernet IPv4 settings for a direct sensor connection](https://sickag.github.io/sick_lidar_developer_guide/assets/picoScan100/img/windows-ip-settings.png){ width="344" }
*Example Windows configuration for a direct Ethernet connection.*

On Windows, also set the network profile of this adapter to **Private**. A Public profile blocks inbound UDP data and DDS discovery.

## Open the Web Interface

Open `http://<sensor-ip>/` in Chrome, Edge, or Firefox. With factory settings, use <http://192.168.0.1/>.

![SOPASair Home page opened at 192.168.0.1](https://sickag.github.io/sick_lidar_developer_guide/assets/getting-started/sopasair-home.png)
*SOPASair Home page opened at 192.168.0.1.*

If the page does not load, check the subnet settings above or [find the sensor on the network](https://sickag.github.io/sick_lidar_developer_guide/shared-features/device-discovery/).

<!-- SICK video: 0_tr6hup9w; source: https://support.sick.com/sick-knowledgebase/article?id=f83d6254-89ad-f011-bbd2-6045bd9b3ff2 -->
*picoScan100 example: Connect to the sensor in a web browser after configuring the computer's network adapter.*

## Log In

Reading values needs no login. Changing settings requires a login with an enabled [user level](https://sickag.github.io/sick_lidar_developer_guide/shared-features/user-levels/). On multiScan200 and picoScan100, the factory state has **Maintenance** and **Authorized Client** disabled. Log in as **Service** first, enable only the levels required by the deployment, and change the default passwords during commissioning.

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

<!-- SICK video: 0_uby5dm9p; source: https://support.sick.com/sick-knowledgebase/article?id=61764278-384c-f011-877a-7c1e5229e0a5 -->
*picoScan100 example: Change the device IP address through the web interface. For restrictions on device search, see the IP Address Assignment page.*
