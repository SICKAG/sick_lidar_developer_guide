# Choose a Data Streaming Option

Choose an option based on whether you need measurement data at a high rate,
easy parsing, reliable delivery to a PLC, or notifications when device values
change.

<p class="table-caption" markdown>**Choose a Data Streaming Option:** option, what it is for, advantages, trade-offs, and best fit.</p>

| Option | What it is for | Advantages | Trade-offs | Best fit |
| --- | --- | --- | --- | --- |
| [Compact Format](./compact-format.md) | SICK binary format for scan, IMU, and encoder data over the transport documented for each device. | Lowest bandwidth; very efficient to parse; each segment can be processed on its own for low latency; Kaitai Struct definitions and a Wireshark dissector are available. | Not self-describing, so the parser must know the layout; UDP packets can be lost or reordered. | High-rate, low-latency integrations in C, C++, or other compiled languages. |
| [MSGPACK Format](./msgpack-format.md) | Self-describing MessagePack encoding of scan data over UDP. | Any standard MessagePack library can parse it; the Python ScanSegmentAPI is a reference implementation. | Uses more bandwidth than Compact; UDP packets can be lost or reordered; documented for multiScan100 and picoScan100. | Scripting and prototyping, especially in Python. |
| [LMDscandata Format](./lmdscandata-format.md) | CoLa scan data telegram; connection and transport depend on the device. | Fits existing CoLa and PLC integrations; telegram content is configurable where supported. | Uses a different angle reference than Compact and MSGPACK; less suited to high data rates. | PLCs and integrations that already use CoLa. |
| [WebSocket Events](./websocket-events.md) | Persistent WebSocket connection that pushes JSON messages when a device value changes. | No polling; low-latency notifications; the payload matches the REST endpoint of the same name. | Carries state and results, not scan data; the client must negotiate `permessage-deflate`. | Monitoring field evaluation results, I/O, temperature alarms, and firmware update progress. |
| [Filter Details](./filter-details.md) | On-sensor filters that change the measurement data before it is sent. | Reduce bandwidth and remove unwanted points such as fog, dust, rain, or snow. | Some filters delay the output or lower the output rate; filtered points may be set to 0 instead of removed. | Tuning the data stream for any of the measurement data formats. |

Compact, MSGPACK, and LMDscandata carry measurement data. WebSocket events
complement measurement data with change notifications. Format availability and
transport vary by product family, variant, and firmware.

<p class="table-caption" markdown>**Choose a Data Streaming Option:** device family, Compact, MSGPACK, LMDscandata, and WebSocket events.</p>

| Device family | Compact | MSGPACK | LMDscandata | WebSocket events |
| --- | --- | --- | --- | --- |
| LRS4000 | Yes | No | Yes | No |
| multiScan100 | Yes | Yes | Yes | No |
| multiScan200 | Yes | No | No | No |
| picoScan100 | Yes | Yes | Yes | Yes |

The filters apply to the measurement formats supported by the device. Some
filters are variant-specific.

If you are unsure, start with [Compact](./compact-format.md) for a new
integration, [MSGPACK](./msgpack-format.md) for quick Python prototypes on
supported devices, or [LMDscandata](./lmdscandata-format.md) when a PLC or
existing CoLa integration consumes the data.

## Typical Setup

A typical application uses three interfaces side by side where they are
supported: the
[REST API](../configuration/rest-interface.md) to configure the sensor,
[WebSocket events](./websocket-events.md) to get notified when device values
change, and the [Compact format](./compact-format.md) to receive the
measurement data.

<div class="setup-diagram" role="img" aria-label="Customer application on top of three interfaces: REST for configuration, WebSocket for notifications, and Compact for data">
  <div class="setup-diagram__app">Customer Application</div>
  <div class="setup-diagram__box setup-diagram__box--rest">REST</div>
  <div class="setup-diagram__box setup-diagram__box--websocket">WebSocket</div>
  <div class="setup-diagram__box setup-diagram__box--compact">Compact</div>
  <div class="setup-diagram__label">Configuration</div>
  <div class="setup-diagram__label">Notifications</div>
  <div class="setup-diagram__label">Data</div>
</div>
