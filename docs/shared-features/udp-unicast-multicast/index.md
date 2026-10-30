# UDP Unicast, UDP Multicast, and TCP

> Compare UDP unicast, UDP multicast, and TCP for measurement data output and configure the sensor for each transport.

Source: https://sickag.github.io/sick_lidar_developer_guide/shared-features/udp-unicast-multicast/

# UDP Unicast / Multicast

Compatible with: multiScan100 picoScan100

Measurement data can be sent over UDP unicast, UDP multicast, or TCP. UDP
output is available on multiScan100 and picoScan100. multiScan200 and LRS4000
send Compact data over TCP.

## Summary

<p class="table-caption" markdown>**Transport comparison:** transport, communication, connection, delivery, and overhead.</p>

| Transport     | Communication | Connection          | Delivery guarantee               | Overhead                              | Best for                       |
| ------------- | ------------- | ------------------- | -------------------------------- | ------------------------------------- | ------------------------------ |
| UDP unicast   | One-to-one    | Connectionless      | None                             | Low                                   | Low-latency data to one host   |
| UDP multicast | One-to-many   | Connectionless      | None                             | Low; efficient for multiple receivers | The same data to several hosts |
| TCP           | One-to-one    | Connection-oriented | Reliable, ordered, error-checked | Higher                                | Data integrity; PLCs           |

For the formats and ports per device, see [Compact Format: Transport](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/#transport).

## UDP/IP Unicast (Single Cast)

In the data output settings, select **Compact** as the **Format** and set
**Measurement data output IP address** to the receiver's IP address.

## UDP/IP Multicast

In the data output settings, select **Compact** as the **Format** and set
**Measurement data output IP address** to a multicast address in the range
`224.0.0.0` to `239.255.255.255`. The sensor sends each packet once for the
whole group, reducing network load.

Every receiver joins the multicast group and listens on the configured UDP
port. Make sure that switches and routers forward multicast traffic, and use
IGMP snooping when several receivers are connected.

*picoScan100 example: Receive Compact measurement data over UDP multicast after selecting a multicast destination and preparing the receiving hosts.*

## TCP/IP

Use TCP when data integrity and order take priority over latency. The TCP
formats and ports per device are listed in
[Compact Format: Transport](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/#transport);
on the picoScan100, TCP output uses [LMDscandata](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/lmdscandata-format/).
