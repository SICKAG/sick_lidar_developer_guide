# LiDAR Data Streaming: Compact, MSGPACK, LMDscandata

> Choose a SICK LiDAR data format or event interface for measurement streams, notifications, and on-sensor filtering.

Source: https://sickag.github.io/sick_lidar_developer_guide/data-streaming/

# Choose a Data Streaming Option

* [Compact Format](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/): start here for new integrations needing low-bandwidth, low-latency binary scan, IMU, and encoder data; the parser must know the layout.
* [MSGPACK Format](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/msgpack-format/): self-describing scan data parsed with standard libraries; useful for quick Python prototypes.
* [LMDscandata Format](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/lmdscandata-format/): CoLa scan telegrams for PLCs and existing CoLa integrations; less suited to high data rates.
* [WebSocket Events](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/websocket-events/): low-latency JSON notifications for changing device values, state, and results—not scan data.
* [Filter Details](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/): configure on-sensor filters to reduce bandwidth or suppress unwanted points; some filters affect output rate or represent filtered points as zero.

Format availability, transport, and filters depend on the device family,
variant, and firmware. Filters apply to the supported measurement formats.
Use the [Bandwidth Calculator](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/#bandwidth-calculator) to
estimate Compact scan frame sizes, segment counts, and traffic for your output
and filter settings.

<p class="table-caption" markdown>**Choose a Data Streaming Option:** device family, Compact, MSGPACK, LMDscandata, and WebSocket events.</p>

| Device family | Compact | MSGPACK | LMDscandata | WebSocket events |
| --- | --- | --- | --- | --- |
| LRS4000 | Yes | No | Yes | No |
| multiScan100 | Yes | Yes | No | No |
| multiScan200 | Yes | No | No | Yes |
| picoScan100 | Yes | Yes | Yes | Yes |

<figure class="setup-diagram" aria-label="Interfaces between a customer application and a SICK LiDAR sensor">
  <div class="setup-diagram__app">Customer Application</div>
  <div class="setup-diagram__box setup-diagram__box--rest">REST</div>
  <div class="setup-diagram__box setup-diagram__box--websocket">WebSocket</div>
  <div class="setup-diagram__box setup-diagram__box--compact">Compact</div>
  <div class="setup-diagram__label">Configuration</div>
  <div class="setup-diagram__label">Notifications</div>
  <div class="setup-diagram__label">Data</div>
  <figcaption class="setup-diagram__description">A typical application combines REST for configuration, WebSocket for change notifications where supported, and Compact for measurement data.</figcaption>
</figure>

See [REST Interface](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/) for configuration requests.
