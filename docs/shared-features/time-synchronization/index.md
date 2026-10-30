# Time Synchronization with NTP and PTP on SICK LiDAR Sensors

> Synchronize SICK LiDAR clocks with NTP or IEEE 1588 PTPv2: offline NTP server setup, REST parameters, and PTP grandmaster settings.

Source: https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/

# Time Synchronization

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

Synchronize sensor clocks with NTP or PTP to align measurements from multiple
sensors and correlate scans with logs and external system events.

## NTP Time Synchronization

NTP uses a network time server; the sensor acts as a client.

*picoScan100 example: Locate and configure the device-time settings before following the NTP setup below. Menu labels may differ with firmware.*

### Offline NTP Server for picoScan100

The following describes configuring an Ubuntu host as a local NTP server and a picoScan100
as its client. This is useful when there is no Internet connection: the
controller and sensor use a shared local time source.

Requirements:

- An Ubuntu host connected to the sensor network. Ubuntu 24.04 no longer ships
  the `ntp` package; use `chrony` or `ntpsec`.
- A picoScan100 with current firmware.
- Access to the sensor web interface.

Both examples serve the host's local clock to the sensor subnet. Replace
`192.168.0.0/24` with your sensor subnet.

=== "chrony"

    ```bash
    sudo apt update
    sudo apt install chrony
    ```

    Add these lines to `/etc/chrony/chrony.conf`:

    ```ini
    # Serve the local system clock when no upstream server is reachable
    local stratum 10
    # Allow queries from the sensor subnet
    allow 192.168.0.0/24
    ```

    ```bash
    sudo systemctl restart chrony
    ```

=== "ntpsec"

    ```bash
    sudo apt update
    sudo apt install ntpsec
    ```

    Add these lines to `/etc/ntpsec/ntp.conf`:

    ```ini
    # Serve the local system clock when no upstream server is reachable
    tos orphan 10
    # Allow queries from the sensor subnet
    restrict 192.168.0.0 mask 255.255.255.0 nomodify notrap
    ```

    ```bash
    sudo systemctl restart ntpsec
    ```

On the picoScan100, open the sensor web interface (for example,
`http://192.168.0.1/`) and navigate to **Configuration → Basic Settings →
Time Synchronization (NTP)**. Choose the time zone and update rate, enter the
Ubuntu server's IP address (for example, `192.168.0.11`), and save. Initial
synchronization depends on the selected update rate; check its status in the
sensor web interface.

![Date and system time configuration tile](https://sickag.github.io/sick_lidar_developer_guide/assets/picoScan100/img/sopasair-configuration-date-and-system-time-tile.png)
*Date and system time tile in SOPASair.*

### Verify and Troubleshoot NTP

Check the server service and its clock, query it locally, inspect NTP traffic,
and allow UDP port 123 through UFW if that firewall is enabled:

=== "chrony"

    ```bash
    systemctl status chrony
    chronyc tracking
    sudo chronyc clients
    ```

=== "ntpsec"

    ```bash
    systemctl status ntpsec
    ntpq -p
    ```

For both servers, watch the NTP traffic and open UDP port 123 in UFW if needed:

```bash
sudo tcpdump -i any udp port 123 -v
sudo ufw allow 123/udp
```

The sensor cannot act as an NTP server.

### Configure NTP Through REST or CoLa

Through REST, set `TSCRole` to `1` for NTP client mode and `TSCTCSrvAddr` to
the server address. `TSCRole` accepts `0` (no time synchronization), `1` (NTP
client), and `3` (PTP slave); other values are rejected with
`header.status` 9 (Illegal Value). `LSPdatetime` reads the current sensor time
and `LSPsetdatetime` sets it manually.

Ensure that the sensor can reach the selected NTP server through the
configured network and firewall. For device-specific parameters and telegrams,
see the [LRS4000 REST](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/) /
[CoLa](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-cola-telegrams/),
[multiScan100 REST](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/) /
[CoLa](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-cola-telegrams/),
[multiScan200 REST](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/) /
[CoLa](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-cola-telegrams/), and
[picoScan100 REST](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-rest-openapi/) /
[CoLa](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-cola-telegrams/) references.

## PTP Time Synchronization

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

For high-precision synchronization on a local network, use the Precision Time
Protocol (PTP) with the sensor and grandmaster settings below.

![Date and system time settings with PTP selected](https://sickag.github.io/sick_lidar_developer_guide/assets/shared-features/ptp-date-and-system-time.png)
*Date and system time settings with PTP selected.*

### Sensor Settings

The sensor uses the following fixed IEEE 1588 PTPv2 settings, which cannot be
changed:

<p class="table-caption" markdown>**Sensor Settings:** parameter, fixed value, and description.</p>

| Parameter | Value | Description |
| --- | --- | --- |
| PTP profile | IEEE 1588 PTPv2 E2E | End-to-End delay mechanism |
| Step mode | Auto-detected | Software PTP: one-step; hardware PTP: two-step |
| Clock mode | Ordinary clock | Receives time synchronization from a master clock |
| `clockClass` | `255` | Slave-only operation |

### Master Configuration

Configure the PTP grandmaster with settings compatible with the sensor:

<p class="table-caption" markdown>**Master Configuration:** parameter, required value, and description.</p>

| Parameter | Required value | Description |
| --- | --- | --- |
| PTP profile | IEEE 1588 PTPv2 E2E | End-to-End delay mechanism |
| Transport protocol | UDPv4 | UDP over IPv4 |
| `logAnnounceInterval` | `1` (2 seconds) | Interval between announce messages |
| `logSyncInterval` | `0` (1 second) | Interval between synchronization messages |
| `announceReceiptTimeout` | `3` | Timeout after three missing announce intervals |
| `logMinDelayReqInterval` | `0` (1 second) | Minimum interval between Delay_Req messages |
| Domain number | `0` | Must match the LiDAR's domain |

Enable PTP in the sensor time-synchronization settings, or set `TSCRole` to `3` through the REST API, then connect it to this compatible PTP grandmaster. All participating devices must use the same domain, and network infrastructure must forward PTP traffic correctly.

With native ROS 2 on multiScan200 and picoScan100, the device publishes its
hardware PTP timestamp in each message header. See [Native ROS 2](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/ros-integration/#native-ros-2)
for the available topics.

*picoScan100 example: Enable PTP on the sensor after configuring a compatible grandmaster as described above. Menu labels may differ with firmware.*
