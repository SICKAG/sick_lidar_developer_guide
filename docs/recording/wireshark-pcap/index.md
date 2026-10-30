# Record and Decode LiDAR Traffic with Wireshark (pcap)

> Capture SICK LiDAR Ethernet traffic as .pcap or .pcapng with Wireshark and decode Compact data with the SICK Lua dissector.

Source: https://sickag.github.io/sick_lidar_developer_guide/recording/wireshark-pcap/

# Wireshark | pcap

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

<div class="tool-intro" markdown>

![Wireshark](https://sickag.github.io/sick_lidar_developer_guide/assets/recording/wireshark-logo.svg)
Packet captures record the raw Ethernet communication between the sensor and a host computer, for protocol-level diagnostics, network troubleshooting, decoder development, and SICK support. Capture with Wireshark, tcpdump, or tshark and save as `.pcap` or `.pcapng`.

</div>

To decode Compact captures, install the [Wireshark Compact dissector](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/#wireshark-dissector).

![Wireshark Compact packet dissection](https://sickag.github.io/sick_lidar_developer_guide/assets/recording/wireshark-compact-dissector.png)
*Wireshark displaying decoded Compact measurement data with the SICK dissector.*

*picoScan100 example: Use the Wireshark dissector to decode Compact packets into readable fields when checking a capture before debugging your own decoder.*
