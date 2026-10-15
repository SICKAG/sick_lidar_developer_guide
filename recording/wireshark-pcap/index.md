# Wireshark | pcap

Packet captures record the raw Ethernet communication between the sensor and a host computer. Use Wireshark, tcpdump, or tshark to capture packets. A capture retains complete raw sensor data for protocol-level diagnostics. It is useful for customer support, network troubleshooting, and protocol decoder development. Captures are saved as `.pcap` or `.pcapng` files.

For Compact format captures, use the [Wireshark Compact dissector](../data-streaming/compact-format.md#wireshark-dissector) to decode the packets. The Lua plug-in is available at [COMPACT_Dissector.lua](../assets/data-streaming/COMPACT_Dissector.lua).

![Wireshark Compact packet dissection](../assets/recording/wireshark-compact-dissector.png)
*Wireshark displaying decoded Compact measurement data with the SICK dissector.*
