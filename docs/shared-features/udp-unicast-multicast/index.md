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

| Transport | Communication | Connection | Delivery guarantee | Overhead |
| --- | --- | --- | --- | --- |
| UDP unicast | One-to-one | Connectionless | None | Low |
| UDP multicast | One-to-many | Connectionless | None | Low; efficient for multiple receivers |
| TCP | One-to-one | Connection-oriented | Reliable, ordered, error-checked | Higher |

## UDP/IP Unicast (Single Cast)

- **Definition:** One-to-one communication. Data is sent from one sender to
  one receiver.
- **Use case:** Direct communication between two devices, such as a client and
  a server.
- **Reliability:** UDP is connectionless and does not guarantee delivery,
  order, or error checking.
- **Performance:** Faster and more efficient for simple, low-latency
  communication because it has less overhead than TCP.
- **Configuration** (data output settings):
  - **Format:** Compact
  - **Measurement data output IP address:** IP address of the data receiver

## UDP/IP Multicast

- **Definition:** One-to-many communication. Data is sent from one sender to
  multiple receivers in a group.
- **Use case:** Applications with several receivers where the same data must
  be delivered to all of them simultaneously.
- **Reliability:** Like unicast, UDP multicast is connectionless and does not
  guarantee delivery, order, or error checking.
- **Performance:** Distributes data to multiple receivers without sending
  multiple copies, which reduces network load.
- **Configuration** (data output settings):
  - **Format:** Compact
  - **Measurement data output IP address:** a multicast address in the range
      `224.0.0.0` to `239.255.255.255`

Every receiver joins the multicast group and listens on the configured UDP
port. Make sure that switches and routers forward multicast traffic, and use
IGMP snooping when several receivers are connected.

<!-- SICK video: 0_xlon5ihx; source: https://support.sick.com/sick-knowledgebase/article?id=e8e2216f-be4e-f011-877b-000d3a2a3508 -->
*picoScan100 example: Receive Compact measurement data over UDP multicast after selecting a multicast destination and preparing the receiving hosts.*

## TCP/IP

- **Definition:** TCP is a connection-oriented protocol that ensures reliable,
  ordered, and error-checked delivery of data between two devices.
- **Use case:** Applications where data integrity and order are crucial, such
  as configuration and reliable data communication.
- **Reliability:** TCP guarantees delivery, order, and error checking, which
  makes it more reliable than UDP.
- **Performance:** Connection management and error checking add overhead,
  which can result in higher latency than UDP.
- **Configuration:**
  - picoScan100: **Format** [LMDscandata](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/lmdscandata-format/)
  - multiScan200: data output mode **TCP Compact**
      ([`sWN dataOutputMode`](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/cola-telegram-listing/#set-data-output-mode-swn-dataoutputmode))
  - LRS4000: [LMDscandata](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/lmdscandata-format/), or Compact over TCP on port `2115`

For ports, defaults, and REST/CoLa settings per device, see
[Compact Format: Transport](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/#transport) and
the REST API references for
[LRS4000](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/),
[multiScan100](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/),
[multiScan200](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/rest-api-openapi/), and
[picoScan100](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/).
For more details, see the operating instructions of the device.
