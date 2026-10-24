# Record and Decode LiDAR Traffic with Wireshark (pcap)

> Capture SICK LiDAR Ethernet traffic as .pcap or .pcapng with Wireshark and decode Compact data with the SICK Lua dissector.

Source: https://sickag.github.io/sick_lidar_developer_guide/recording/wireshark-pcap/

# Wireshark | pcap

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

<div class="tool-intro" markdown>

![Wireshark](https://sickag.github.io/sick_lidar_developer_guide/assets/recording/wireshark-logo.svg)
Packet captures record the raw Ethernet communication between the sensor and a host computer. Use Wireshark, tcpdump, or tshark to capture packets. A capture retains complete raw sensor data for protocol-level diagnostics. It is useful for customer support, network troubleshooting, and protocol decoder development. Captures are saved as `.pcap` or `.pcapng` files.

</div>

For Compact format captures, use the [Wireshark Compact dissector](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/#wireshark-dissector) to decode the packets. The Lua plug-in is available at [COMPACT_Dissector.lua](https://sickag.github.io/sick_lidar_developer_guide/assets/data-streaming/COMPACT_Dissector.lua).

![Wireshark Compact packet dissection](https://sickag.github.io/sick_lidar_developer_guide/assets/recording/wireshark-compact-dissector.png)
*Wireshark displaying decoded Compact measurement data with the SICK dissector.*

<!-- SICK video: 0_2r7xtjuw; source: https://support.sick.com/sick-knowledgebase/article?id=9338f032-bd4e-f011-877b-000d3a2a3508 -->
*picoScan100 example: Use the Wireshark dissector to decode Compact packets into readable fields when checking a capture before debugging your own decoder.*
