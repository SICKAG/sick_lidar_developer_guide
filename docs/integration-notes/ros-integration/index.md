# SICK LiDAR ROS 2 Integration: Native ROS 2 and sick_scan_xd

> Get SICK LiDAR data into ROS 2 with native ROS 2 on selected families or the sick_scan_xd host driver, with setup, topics, limitations, and CPU notes.

Source: https://sickag.github.io/sick_lidar_developer_guide/integration-notes/ros-integration/

# ROS Integration

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

<div class="tool-intro" markdown>

![ROS 2](https://sickag.github.io/sick_lidar_developer_guide/assets/integration-notes/ros2-logo.png)
There are two ways to get LiDAR data into ROS 2: the sensor publishes ROS 2
messages itself (native ROS 2), or a driver on the host receives sensor data
and publishes the messages (`sick_scan_xd`). Both deliver standard ROS 2
messages to your nodes. The difference is which product families they cover
and where decoding and publishing run.

</div>

<div class="center-table-headers" markdown="1">

<p class="table-caption" markdown>**ROS Integration:** integration path and compatible devices.</p>

| Integration path | Compatible with |
| --- | --- |
| Native ROS 2 | multiScan200, picoScan100 |
| `sick_scan_xd` | LRS4000, multiScan100, picoScan100 |

</div>

The LRS4000 and multiScan100 do not support native ROS 2. Use `sick_scan_xd`
for these families.

<div class="ros-diagram">
  <figure class="ros-diagram__panel">
    <figcaption>ROS 2 with sick_scan_xd</figcaption>
    <svg viewBox="0 0 400 250" role="img" aria-labelledby="ros-diagram-xd-title">
      <title id="ros-diagram-xd-title">The sensor sends data to the sick_scan_xd driver on the host, which publishes to customer ROS nodes 1 to N over DDS.</title>
      <rect class="rd-sensor" x="10" y="55" width="120" height="140" rx="10"/>
      <text class="rd-sensor-label" x="70" y="85">LiDAR sensor</text>
      <rect class="rd-app" x="20" y="112" width="100" height="36" rx="4"/>
      <text class="rd-app-label" x="70" y="135">Streaming App</text>
      <rect class="rd-ros" x="165" y="10" width="225" height="230" rx="10"/>
      <text class="rd-ros-label" x="277" y="42">ROS 2</text>
      <line class="rd-compact" x1="120" y1="130" x2="178" y2="130"/>
      <line class="rd-dds" x1="270" y1="130" x2="300" y2="82"/>
      <line class="rd-dds" x1="270" y1="130" x2="300" y2="130"/>
      <line class="rd-dds" x1="270" y1="130" x2="300" y2="178"/>
      <rect class="rd-driver" x="178" y="108" width="92" height="44" rx="4"/>
      <text class="rd-driver-label" x="224" y="127">sick_scan_xd</text>
      <text class="rd-driver-sub" x="224" y="143">host driver</text>
      <rect class="rd-node" x="300" y="60" width="80" height="44" rx="4"/>
      <text class="rd-node-label" x="340" y="78">Customer</text>
      <text class="rd-node-label" x="340" y="94">ROS Node 1</text>
      <rect class="rd-node" x="300" y="108" width="80" height="44" rx="4"/>
      <text class="rd-node-label" x="340" y="126">Customer</text>
      <text class="rd-node-label" x="340" y="142">ROS Node 2</text>
      <rect class="rd-node" x="300" y="156" width="80" height="44" rx="4"/>
      <text class="rd-node-label" x="340" y="174">Customer</text>
      <text class="rd-node-label" x="340" y="190">ROS Node N</text>
    </svg>
  </figure>
  <figure class="ros-diagram__panel">
    <figcaption>Native ROS 2</figcaption>
    <svg viewBox="0 0 400 250" role="img" aria-labelledby="ros-diagram-native-title">
      <title id="ros-diagram-native-title">The native ROS 2 publisher on the sensor sends data over DDS directly to customer ROS nodes 1 to N, without a driver. Uses CycloneDDS as the ROS middleware.</title>
      <rect class="rd-sensor" x="10" y="55" width="120" height="140" rx="10"/>
      <text class="rd-sensor-label" x="70" y="85">LiDAR sensor</text>
      <rect class="rd-app" x="20" y="104" width="100" height="36" rx="4"/>
      <text class="rd-app-label" x="70" y="127">Streaming App</text>
      <rect class="rd-ros" x="165" y="10" width="225" height="230" rx="10"/>
      <text class="rd-ros-label" x="277" y="42">ROS 2</text>
      <line class="rd-dds" x1="116" y1="160" x2="245" y2="130"/>
      <line class="rd-dds" x1="245" y1="130" x2="300" y2="82"/>
      <line class="rd-dds" x1="245" y1="130" x2="300" y2="130"/>
      <line class="rd-dds" x1="245" y1="130" x2="300" y2="178"/>
      <rect class="rd-driver" x="26" y="146" width="90" height="28" rx="4"/>
      <text class="rd-driver-label" x="71" y="165">Native ROS 2*</text>
      <rect class="rd-node" x="300" y="60" width="80" height="44" rx="4"/>
      <text class="rd-node-label" x="340" y="78">Customer</text>
      <text class="rd-node-label" x="340" y="94">ROS Node 1</text>
      <rect class="rd-node" x="300" y="108" width="80" height="44" rx="4"/>
      <text class="rd-node-label" x="340" y="126">Customer</text>
      <text class="rd-node-label" x="340" y="142">ROS Node 2</text>
      <rect class="rd-node" x="300" y="156" width="80" height="44" rx="4"/>
      <text class="rd-node-label" x="340" y="174">Customer</text>
      <text class="rd-node-label" x="340" y="190">ROS Node N</text>
    </svg>
  </figure>
  <div class="ros-diagram__legend">
    <span><svg viewBox="0 0 48 8" aria-hidden="true"><line class="rd-compact" x1="0" y1="4" x2="48" y2="4"/></svg>Protocol: driver-supported sensor data</span>
    <span><svg viewBox="0 0 48 8" aria-hidden="true"><line class="rd-dds" x1="0" y1="4" x2="48" y2="4"/></svg>Protocol: DDS (Data Distribution Service) via UDP/IP</span>
    <span>* Native ROS 2 uses CycloneDDS as its ROS middleware (RMW).</span>
  </div>
</div>

<p class="table-caption" markdown>**ROS Integration:** option, what it is, advantages, trade-offs, and best fit.</p>

| Option | What it is | Advantages | Trade-offs | Best fit |
| --- | --- | --- | --- | --- |
| [Native ROS 2](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/ros-integration/#native-ros-2) | The sensor firmware assembles the scan segments and publishes ROS 2 messages over DDS. | No driver on the host; lower host CPU load; hardware timestamps; any number of subscribers and other DDS clients can receive the data directly. | Cyclone DDS is the specified middleware; uses more network bandwidth than Compact; no IMU or diagnostics topics; configuration stays outside ROS 2; the picoScan150 needs a license. | ROS 2 systems where host CPU matters, for example navigation or SLAM on embedded computers. |
| [sick_scan_xd](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/ros-integration/#sick_scan_xd) | A ROS 2 driver on the host receives data through the driver-supported sensor protocol, assembles the scans, and publishes the messages. | Publishes `PointCloud2`, `LaserScan`, and IMU messages where supported; decoding is under host-side control; supports recording to rosbag files. | Decoding and publishing use host CPU; the driver must be installed and maintained on the host. | Applications that need IMU topics, LRS4000 or multiScan100 integration, or host-side control over decoding. |

## Native ROS 2

Compatible with: multiScan200 picoScan100

The product supports native ROS 2 communication via the DDS (Data Distribution Service) protocol. This enables efficient real-time transmission of measured data without additional drivers and with minimum delay time. The data is output directly in ROS 2-compatible formats.

- Filter settings in the product have a direct effect on the published data.
- Subscribed topics are published even if no measurement points are available. It is therefore recommended that you only subscribe to required topics.
- If the static IP address is changed, a restart of the device is required to output the topics correctly.

### Quick Start

1. Verify the ROS 2 with middleware Cyclone DDS is installed. Install the Eclipse Cyclone DDS middleware using the [Cyclone DDS installation instructions](https://docs.ros.org/en/kilted/Installation/DDS-Implementations/Working-with-Eclipse-CycloneDDS.html).
2. Enable **Native ROS 2 (DDS)** in the device web interface, open **Application → Data output** and set **Measurement data output format** to **Native ROS 2 (DDS)**.
3. Create a Cyclone DDS configuration file and set `NetworkInterfaceAddress` to the IP address of the host interface connected to the sensor, here `192.168.0.100`. See the [Cyclone DDS configuration reference](https://cyclonedds.io/docs/cyclonedds/latest/config/index.html) for additional options.

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <CycloneDDS
      xmlns="https://cdds.io/config"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="https://cdds.io/config https://raw.githubusercontent.com/eclipse-cyclonedds/cyclonedds/master/etc/cyclonedds.xsd">
      <Domain>
        <General>
          <NetworkInterfaceAddress>192.168.0.100</NetworkInterfaceAddress>
        </General>
      </Domain>
    </CycloneDDS>
    ```

4. Start `rviz2` and add one of the published topics.

The picoScan150 requires firmware V2.2.1 or later and an activated native ROS 2 license (`PICOSCAN RosConnect`). picoScan150 PRO versions (part numbers 1134610 and 1142273) are delivered with this license pre-installed. If the license is missing, contact SICK. See [LiDAR License Activation](https://sickag.github.io/sick_lidar_developer_guide/shared-features/license-activation/) for the official activation instructions.

The picoScan120 requires firmware V2.2.1 or later. The latest firmware and update instructions for both devices are available from the [SICK firmware download](https://www.sick.com/de/en/downloads/media/swp680096).

![picoScan150 native ROS 2 license](https://support.sick.com/api/data/v9.2/msdyn_knowledgearticleimages(e84df29d-3542-f111-88b4-00224880a9a4)/msdyn_blobfile/$value?w=1800px)
*picoScan150 native ROS 2 license.*

On Windows, DDS discovery requires the sensor adapter to use the Private network profile; see [Getting Started](https://sickag.github.io/sick_lidar_developer_guide/getting-started/#connect-the-sensor).

The ROS 2 domain ID on the host (`ROS_DOMAIN_ID`) must match the device. The default is `0`; it can be changed with `rosDomainId` (0-232) or in SOPASair (multiScan200; picoScan100 from firmware V2.3.1). DDS/RTPS discovery must be able to reach the sensor interface. Native ROS 2 publishes data only; configure the sensor through the REST API, CoLa, or the web interface.

### Visualize the Point Cloud

Start `rviz2` with the configuration file from Quick Start step 3:

=== "Linux"

    Source ROS 2, select Cyclone DDS, set the configuration file, and start `rviz2`:

    ```bash
    . /opt/ros/<distro>/setup.bash  # for example kilted
    export RMW_IMPLEMENTATION=rmw_cyclonedds_cpp
    export CYCLONEDDS_URI="file://$HOME/CycloneDDS/my-config.xml"
    rviz2
    ```

    In `rviz2`, add `/cloud/all_points` or a scan topic. Set **Fixed Frame** to `world`, or to the frame configured on the device.

=== "Windows"

    In a Windows command prompt, source ROS 2, select Cyclone DDS, set the configuration file, and start `rviz2`:

    ```bat
    call C:\dev\ros2_<distro>\local_setup.bat
    set RMW_IMPLEMENTATION=rmw_cyclonedds_cpp
    set CYCLONEDDS_URI=file://%USERPROFILE%/cyclonedds.xml
    rviz2
    ```

    In `rviz2`, add `/cloud/all_points` or a scan topic. Set **Fixed Frame** to `world`, or to the frame configured on the device.

### Limitations and Trade-Offs

Native ROS 2 is a sensor-to-host data publisher, not a complete ROS 2 control
interface:

- **No ROS diagnostics topic:** Device health and diagnosis are not exposed as
  a diagnostics topic in the ROS 2 graph. Use the device web interface for
  diagnosis and troubleshooting. See the [SOPASair overview](https://sickag.github.io/sick_lidar_developer_guide/visualization/sopasair/).
- **Configuration stays outside ROS 2:** The interface does not expose sensor
  parameters, services, or actions. Configure scan profiles, field of view,
  filters, and other device settings through the web interface, REST API, or
  CoLa; they cannot be set as ROS parameters or from a ROS 2 launch file.
- **Use CycloneDDS:** Native ROS 2 is specified for CycloneDDS as the ROS
  middleware (RMW) on the host. Other RMW implementations and custom DDS
  environments are not validated. If you use one,
  test discovery and communication with your device firmware and ROS
  distribution.
- **Account for network load:** Native ROS 2 uses more network
  bandwidth than Compact over UDP. The device publishes its available ROS
  topics concurrently, and topics can continue to be published when a scan
  contains no measurement points. Subscribe only to topics the application
  needs, monitor network utilization at the selected scan configuration, and
  consider Compact if bandwidth is constrained.
- **Publisher changes follow firmware releases:** The DDS publisher runs in
  the sensor firmware, rather than a host-side driver. Publisher fixes and
  feature changes therefore depend on a firmware release.

### Published Topics

The native publisher exposes these topics simultaneously. All messages carry the hardware PTP timestamp in `header.stamp`. The `rt` prefix is the DDS-level name: in ROS 2 tools, `rt<namespace>/cloud/all_points` appears as `<namespace>/cloud/all_points`, for example `/cloud/all_points`.

The multiScan200 and picoScan100 publish the same PointCloud2 and LaserScan topics. The multiScan200 also publishes the `ambient_light` and `imu` topics, and a PointCloud2 topic per segment and echo.

**PointCloud2 topics**

<p class="table-caption" markdown>**Published Topics:** PointCloud2 topic, contents ¹⁾, output frequency, and description.</p>

| PointCloud2 topic | Contents ¹⁾ | Output frequency | Description |
| --- | --- | --- | --- |
| `rt<namespace>/cloud/all_points` | x,y,z,i,p | Scan rate | Valid scan points of all segments and all echoes |
| `rt<namespace>/cloud/all_points_echo0` | x,y,z,i,p | Scan rate | Valid scan points of echo 0 |
| `rt<namespace>/cloud/all_points_echo1` | x,y,z,i,p | Scan rate | Valid scan points of echo 1 (only available if multi-echo is configured) |
| `rt<namespace>/cloud/all_points_echo2` | x,y,z,i,p | Scan rate | Valid scan points of echo 2 (only available if multi-echo is configured) |
| `rt<namespace>/cloud/reflector_points` | x,y,z,i,p | Scan rate | Valid scan points that were recognized as reflectors |
| `rt<namespace>/cloud/segment[s]` | x,y,z,i,p | Segment frequency | Valid scan points of a selected segment s (only available for segments that are available after application of the angle range filter) |
| `rt<namespace>/cloud/segment[s]_echo[e]` | x,y,z,i,p | Segment frequency | multiScan200 only: valid scan points of echo e in segment s (only available for segments that are available after application of the angle range filter and depending on the configuration of the echo filter) |

¹⁾ intensity (i): RSSI with value range: 0.0 ... 1.0; properties (p): Bit mask 0b00000001 indicates whether this measurement point was recognized as a reflection. On the multiScan200, `sWN rosPointCloud2Content` selects the optional channels RSSI, properties, time offset, and ring (layer index); see the [multiScan200 CoLa Telegram Listing](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#set-optional-channels-of-pointcloud2-topics-swn-rospointcloud2content).

**Additional topics (multiScan200)**

<p class="table-caption" markdown>**Published Topics:** topic and content.</p>

| Topic | Content |
| --- | --- |
| `ambient_light` | Passive ambient light image, synchronized with the point cloud |
| `imu` | IMU data: acceleration, angular velocity, and orientation |

**LaserScan / MultiEchoLaserScan topics**

<p class="table-caption" markdown>**Published Topics:** LaserScan / MultiEchoLaserScan topic, data format, contents ¹⁾, output frequency, and description.</p>

| LaserScan / MultiEchoLaserScan topic | Data format | Contents ¹⁾ | Output frequency | Description |
| --- | --- | --- | --- | --- |
| `rt<namespace>/scan/all_points` | MultiEchoLaserScan | x,y,z,i | Scan rate | Valid scan points of all segments and all echoes |
| `rt<namespace>/scan/all_points_echo0` | LaserScan | x,y,z,i | Scan rate | Valid scan points of echo 0 |
| `rt<namespace>/scan/all_points_echo1` | LaserScan | x,y,z,i | Scan rate | Valid scan points of echo 1 (only available if multi-echo is configured) |
| `rt<namespace>/scan/all_points_echo2` | LaserScan | x,y,z,i | Scan rate | Valid scan points of echo 2 (only available if multi-echo is configured) |
| `rt<namespace>/scan/segment[s]` | MultiEchoLaserScan | x,y,z,i | Segment frequency | Only for available segment s (only available for segments that are available after application of the angle range filter) |
| `rt<namespace>/scan/segment[s]_echo[e]` | LaserScan | x,y,z,i | Segment frequency | Only for available segments and echo e (only available for segments that are available after application of the angle range filter and depending on the configuration of the echo filter) |

¹⁾ intensity (i): Value range 0.0-1.0 for natural targets, 1.05 for detected reflector

### Frame and Position Parameters

Set the frames and the mounting position on the device; Native ROS 2 has no ROS parameters. Use the CoLa telegrams below, the REST endpoint of the same name, or the web interface.

<div class="center-table-headers" markdown="1">

<p class="table-caption" markdown>**Frame and Position Parameters:** parameter, CoLa telegram, and effect.</p>

| Parameter | CoLa telegram | Effect |
| --- | --- | --- |
| Frame ID | `sWN rosFrameId` | `header.frame_id` of the published messages |
| Parent frame ID | `sWN rosParentFrameId` | Parent frame of the sensor transform, for example `world` |
| Namespace | `sWN rosNamespace` | Prepended to all topic names; empty for no namespace |
| Sensor position | `sWN SensorPosition` | Mounting position (x, y, z in mm) and orientation (yaw, pitch, roll in 1/10000°), published as a transform on `/tf` |
| Domain ID | `sWN rosDomainId` | ROS 2 domain ID (0-232); must match `ROS_DOMAIN_ID` on the host |

</div>

For the telegram structures and examples, see the CoLa Telegram Listings of the [multiScan200](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/#measurement-output-telegram) and the [picoScan100](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-cola-telegrams/). After changing the static IP address, restart the device so that the topics are published correctly.

### DDS Capabilities

Native ROS 2 uses Cyclone DDS and is tested with the
`rmw_cyclonedds_cpp` ROS middleware (RMW) implementation. Other RMW
implementations can cause incompatibilities, even when they also use DDS.
Use Cyclone DDS for the tested setup; validate interoperability before
using a different middleware.

Because the device runs a DDS participant in its firmware, it joins the ROS 2 network as a first-class peer:

- **Interoperability:** Compatible ROS 2 nodes, MathWorks ROS Toolbox, and custom DDS clients can subscribe directly, subject to middleware compatibility.
- **Multiple subscribers:** The sensor publishes once per scan; adding subscribers does not add another device-side publishing step.
- **Per-subscriber QoS:** Subscribers can negotiate policies independently, such as `BEST_EFFORT` for control and `RELIABLE` for recording.
- **Automatic discovery:** RTPS discovery finds subscribers without a broker or static IP table.
- **Hardware timestamps:** `header.stamp` is set at the hardware scan trigger. With PTP synchronization, it aligns with other sensors.

### Video Tutorials

*How to use native ROS 2 (DDS) on Linux.*
*How to use native ROS 2 (DDS) on Windows.*

## sick_scan_xd

Compatible with: LRS4000 multiScan100 picoScan100

The `sick_scan_xd` driver runs as a ROS 1 or ROS 2 node on the host. It
receives sensor data, assembles complete scans, and publishes ROS messages.
Choose this approach when you need host-side decoding control, IMU data on
ROS topics where supported, or integration with a device that has no native
publisher. It also supports recording and playback with rosbag `.db3` files.
To install it, follow
[Building the driver: ROS 2 on Linux](https://github.com/SICKAG/sick_scan_xd/blob/develop/README.md#ros-2-on-linux)
or [ROS 2 on Windows](https://github.com/SICKAG/sick_scan_xd/blob/develop/README.md#ros-2-on-windows-jazzy-kilted--lyrical)
in the README. Then start the launch file for your device as described in
[Running the driver](https://github.com/SICKAG/sick_scan_xd/blob/develop/README.md#running-the-driver).

## CPU Load Comparison

Measurements across 11 picoScan150 profiles used 15-50 Hz scan rates, 0.05-1.0° angular resolutions, 100 scans per method, and IEEE 1588 PTP synchronization. Single-echo `sensor_msgs/LaserScan` data was used for a direct comparison.

<p class="table-caption" markdown>**CPU Load Comparison:** parameter and value.</p>

| Parameter | Value |
| --- | --- |
| Host | Raspberry Pi 4, ARM Cortex-A72, 4 cores, Ubuntu 22.04 |
| Network | Direct Gigabit Ethernet |
| Latency definition | `Δt = treceive_on_host − header.stamp` |

Average system CPU load was **8.5%** for native ROS 2 and **21.5%** for `sick_scan_xd`, expressed as the percentage of one Raspberry Pi 4 CPU core.
