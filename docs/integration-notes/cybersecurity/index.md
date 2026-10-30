# Cybersecurity for SICK LiDAR Sensors

> Cybersecurity recommendations for LRS4000, multiScan100, multiScan200, and picoScan100 sensors: network access, passwords, HTTPS, and data integrity.

Source: https://sickag.github.io/sick_lidar_developer_guide/integration-notes/cybersecurity/

# Cybersecurity

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

Download the product-specific Cybersecurity Hardening Guide from **Downloads**
on the individual product page at [sick.com](https://www.sick.com/):
[LRS4000](https://www.sick.com/de/en/search?text=LRS4000),
[multiScan100](https://www.sick.com/de/en/search?text=multiScan100),
[multiScan200](https://www.sick.com/de/en/search?text=multiScan200), or
[picoScan100](https://www.sick.com/de/en/search?text=picoScan100).

Cybersecurity covers the entire product life cycle. Increasing digitalization and
network complexity in production plants increases the risk of cyberattacks from
inside or outside the production network. A comprehensive cybersecurity strategy
is therefore essential.

The asset owner is responsible for installing and maintaining security measures.
Securing SICK devices in a network requires the active participation of the
asset owner.

The recommendations below apply to the LRS4000, multiScan100, multiScan200,
and picoScan100. Menus, default states, available services, and authentication
requirements vary by family, variant, and firmware. Sections with device-specific
values name the products they cover. Confirm settings in the product-specific
hardening guide and the device interface before applying them.

This page covers:

- Communication security and access management
- Application and field-evaluation aspects
- User levels
- Device interfaces
- Ethernet-related settings

## Further Cybersecurity Information

For a cybersecurity overview, see [SICK PSIRT](https://www.sick.com/psirt).
Current security advisories are listed on the
[SICK PSIRT Security Advisories](https://www.sick.com/de/de/product-security-incident-response-team-psirt/security-advisories/s/psirt-advisories)
page. Report security issues to the SICK
Product Security Incident Response Team (SICK PSIRT). Read SICK's Information
Handling Policies before sending security details.

Product-specific settings and telegram details are available from the device
documentation. The product page is available through the SICK Product ID:
[`pid.sick.com/{P/N}/{S/N}`](https://pid.sick.com/), where `{P/N}` is the part
number and `{S/N}` is the serial number shown on the type label. The same part
number links the
device to its [Asset Administration Shell](https://sickag.github.io/sick_lidar_developer_guide/shared-features/asset-administration-shell/),
which holds the data sheet, operating instructions, certificates, and CAD data
of the product type.

The examples and recommended settings on this page are general guidance, not
customer-specific solutions or a replacement for specialist technical advice.

## General Recommendations

### Intended Use

These are non-contact LiDAR sensors for indoor or outdoor, mobile or stationary
use in stand-alone operation. LRS4000 and picoScan100 are 2D LiDAR families;
multiScan100 and multiScan200 are multi-layer 3D LiDAR families. Depending on
the device, configuration, and application software, typical applications
include:

- Continuous output of measurement data
- Monitoring freely defined fields, with object detection signaled through
  digital outputs or telegrams
- Stationary field protection, area monitoring, and access control
- Navigation and anti-collision for mobile platforms
- Profile detection, collision protection, object protection, and access
  monitoring
- 3D mapping, environment perception, and volume monitoring (multiScan200)

Use the device only in industrial environments (EN 61000-6-4). Incorrect use,
improper modification, or tampering invalidates any warranty and may result in
damage for which SICK AG accepts no responsibility.

### Environmental Influences

For outdoor variants, fog, steam, dust, rain, and snow can affect the detection
range. The effect can only be quantified through a verification test at the
intended site.

### Restrict Physical Access

Operate the device in a protected area where only instructed and approved
personnel have access.

### Limit Exposure to Public Networks

Do not use the devices in public networks. Use an isolated
network wherever possible to reduce exposure and risk.

### Establish an Update Strategy

Keep the device firmware up to date:

1. Search for the product at [sick.com](https://www.sick.com).
2. Check **Downloads** for the latest firmware version and release notes.
3. Check for updates regularly and apply them as they become available.
4. Test updates in the specific installation before deploying them at larger
   scale.

Perform firmware updates only in a trusted environment. Release notes contain
information about included security patches.

### Configuration Backup and Restore

Keep a protected backup of a known-working configuration so that the device
can be returned to a secure state. The
[Backup & restore](https://sickag.github.io/sick_lidar_developer_guide/configuration/configuration-backup-and-restore/)
workflow supports multiScan100, multiScan200, and picoScan100. A passphrase can
encrypt the backup. File-transfer authentication differs by firmware; follow
the instructions for the matching OpenAPI file.

### Data Integrity

Verify downloaded `.spk` and `.sdd` files with the instructions at
[sick.com/verify-downloads](https://www.sick.com/verify-downloads). The
[`LFTchecksum` workflow](https://sickag.github.io/sick_lidar_developer_guide/shared-features/checksums/) is available on
multiScan200 and picoScan100.

### Brute-Force Protection

After five consecutive unsuccessful login attempts, the picoScan100 enters a
30-second time lock. Other families can use a different threshold or lockout
duration.

### Periodic Security Tests

Regularly verify that the security system works as intended and document the
results.

### Device Identification

Verify that the correct device type and system plug are connected. The product
ID uniquely identifies the device and consists of its part number and serial
number. Find the product ID on the device and system-plug labels, or read it
through the user interface.

The device information also shows the currently installed firmware version,
which follows semantic versioning. The device part number can also be read
through the API:

```http
GET http://192.168.0.1/api/OrderNumber
```

Read the serial number with `GET http://192.168.0.1/api/SerialNumber`. Together
they form the product ID
[`pid.sick.com/{P/N}/{S/N}`](https://pid.sick.com/). See
[Link A Device To Its AAS](https://sickag.github.io/sick_lidar_developer_guide/shared-features/asset-administration-shell/#link-a-device-to-its-aas)
to connect this ID with the product type data.

For telegram-based access, refer to the [CoLa / LMDscandata](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/lmdscandata-format/)
documentation and the [Compact format](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/).

### Use the Device-Not-Ready Status

The Device-Not-Ready status signals that the device is not operating correctly.
Monitor it through communication or a digital output. A change to this state
while device parameters are being changed can be used as a manipulation
warning.

## Protection Levels

Each protection level assumes that the recommendations from the previous level
are followed.

<p class="table-caption" markdown>**Protection Levels:** protection level, intended use, and procedures.</p>

| Protection level | Use for | Procedures |
| --- | --- | --- |
| No protection | Demonstrations or test scenarios | Set factory defaults |
| Basic protection | Recommended minimum for daily operation in an uncritical environment | Check firmware and release notes; change all passwords; configure network settings; disconnect unused interfaces; close unused ports and services |
| Advanced protection | Exposed or critical systems with advanced security requirements | Apply basic protection and limit network access by IP range |

### No Protection

In this state there are no access restrictions: passwords remain at their
defaults and interfaces are active. Do not use this state for daily operation.
Use it only for demonstrations or tests, or when physical access is restricted
and the device is isolated from the network or protected by a firewall.

#### Set Factory Defaults

To start from a known state:

1. Log in to the device with user level **Service**.
2. Verify the user level.
3. Set the device to factory defaults.

The device resets default passwords and reboots with the standard IP address
`192.168.0.1`. If a different IP address was previously used, either open the
default address in a web browser or search for and reconnect to the device in
SOPAS ET.

### Basic Protection

Basic protection is the minimum recommended level for daily operation in an
uncritical environment.

#### Check Firmware and Release Notes

Critical vulnerabilities can be discovered during the device life cycle.
Updating firmware is therefore an important cybersecurity measure. Before
commissioning, install the latest firmware and review its release notes for
security patches. Update only in a trusted environment.

#### Change Passwords

Enable only the user levels required by the deployment and assign each a unique,
secret password. Factory user-level states vary by family and firmware. Follow
the [User levels](https://sickag.github.io/sick_lidar_developer_guide/shared-features/user-levels/) guide for the current
activation and password workflow.

Use passwords containing uppercase letters, lowercase letters, special
characters, and numbers. Change passwords over a confidential connection,
preferably a point-to-point connection during initial commissioning.

#### Reset the Service Password (picoScan100)

<div class="device-scope" data-device-scope="picoScan100" markdown="1">

On picoScan100, only the Service password can be reset to its default through
the password-reset process:

1. Select **Password forgotten**.
2. Send the generated email to the responsible SICK sales company or service
   partner listed at [sick.com/worldwide](https://www.sick.com/worldwide).
3. Paste the received code and select **Reset**.

Selecting **Cancel** aborts the process. Request a new reset code from the
manufacturer if necessary.

To regain access to another user level, first reset the Service password, back
up the configuration, and then reset the device to factory defaults.

</div>

#### Configure Network Settings

The documented factory network defaults for the device families covered here
are:

<p class="table-caption" markdown>**Configure Network Settings:** setting and default.</p>

| Setting | Default |
| --- | --- |
| IP address | `192.168.0.1` |
| Subnet mask | `255.255.255.0` |
| Default gateway | `0.0.0.0` |

<div class="device-scope" data-device-scope="multiScan200 picoScan100" markdown="1">

The following factory defaults are documented for the **multiScan270**
(Operating Instructions 8031195/0000, issue 2026-09-30) and **picoScan150**
(Hardening Guide 8029481/1S7Z, 2025-04). They do not describe all service
ports or data-output settings. Confirm the defaults for other variants and
firmware versions on the device.

<p class="table-caption" markdown>**Factory network-service defaults:** service and port, multiScan270 state, and picoScan150 state.</p>

| Service | Port | multiScan270 | picoScan150 |
| --- | --- | --- | --- |
| HTTP (web server, REST) | TCP `80` | Enabled | Enabled |
| CoLa A / CoLa B | TCP `2111` / `2112` | Disabled | Enabled |
| CoLa2 | TCP `2122` | Disabled | Always enabled |
| Device search | UDP `30718` | Enabled | Time-limited |

</div>

Ports and service availability vary by device and firmware. The entries below
identify the exact device variant documented; they are not family-wide
defaults. Check the target device's **Diagnostics > Cybersecurity** view before
configuring firewall rules. Measurement-data output ports can also be
configured separately from the device's management services.

<div class="device-scope" data-device-scope="LRS4000" markdown="1">

#### LRS4000 (LRS4581)

The LRS4581 SOPASair data-output view lists the CoLa transports and their
ports below. Its Operating Instructions (8026337/1VNC, 2026-04-30) specify
CoLa A/B and REST communication and state that HTTP is active by default;
the device UI shows which services are currently enabled.

<p class="table-caption" markdown>**LRS4581 network services and data output:** service or output, transport and port, and purpose.</p>

| Service or output | Transport and port | Purpose |
| --- | --- | --- |
| HTTP/REST | TCP `80` | Web interface and configuration API |
| HTTPS | TCP `443` | Encrypted web interface and REST API |
| CoLa A | TCP `2111` | Configuration and status telegrams |
| CoLa B | TCP `2112` | Configuration and status telegrams |
| CoLa B measurement data | UDP `2213` | Measurement-data output |
| CoLa 2 | TCP `2122` | SOPAS communication |
| Compact measurement data | TCP `2115` | Measurement-data output |
| NTP | UDP `123` | Time synchronization |
| PTP | UDP `319` / `320` | Time synchronization |

The SOPASair walkthrough shows the [data-output ports](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/graphical-user-interface/#data-output)
and [Cybersecurity view](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/graphical-user-interface/#cybersecurity).
These ports are those shown for the LRS4581; verify the actual device and
firmware before applying them to another LRS4000 variant.

</div>

<div class="device-scope" data-device-scope="multiScan100" markdown="1">

#### multiScan100 (multiScan165)

The ports below are shown in the multiScan165 SOPASair
**Diagnostics > Cybersecurity** service list. The walkthrough capture shows
the selected state at capture time, not factory defaults. Check the live
service list on multiScan136 and multiScan166 rather than assuming their
availability or activation state matches this example.

<p class="table-caption" markdown>**multiScan165 network services:** service, transport and port, and purpose.</p>

| Service | Transport and port | Purpose |
| --- | --- | --- |
| Web server (HTTP) | TCP `80` | Browser interface and REST API |
| HTTPS | TCP `443` | Encrypted browser interface and REST API |
| CoLa A / CoLa B | TCP `2111` / `2112` | Legacy configuration and status telegrams |
| CoLa 2 | TCP `2122` | SOPAS ET and firmware-update communication |
| Device search | UDP `30718` | SOPAS ET discovery and Ethernet parameter changes |
| SSH server | TCP `22` | Developer access to the operating system |
| Developer firmware | TCP `80` / `443` | Developer firmware installation; enable only when needed |
| Scan and IMU data output | UDP, destination port configured in SOPASair | Measurement and secondary-sensor data |
| NTP | UDP `123` | Time synchronization |
| PTP | UDP `319` / `320` | Time synchronization |

See the multiScan100 [SOPASair Cybersecurity walkthrough](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/graphical-user-interface/#cybersecurity)
and [Data Output walkthrough](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/graphical-user-interface/#data-output)
for the service list and configurable output ports.

</div>

<div class="device-scope" data-device-scope="multiScan200" markdown="1">

#### multiScan270 Network Services and Ports

The following matrix applies specifically to the **multiScan270**, as
documented in Operating Instructions 8031195/0000, issue 2026-09-30. Ports,
service availability, and factory states can differ on other multiScan200
variants or firmware versions. Verify the settings on the target device before
configuring network or firewall rules.

<p class="table-caption" markdown>**multiScan270 Network Services and Ports:** service, purpose and direction, interface, transport and device port, peer port, and factory state.</p>

| Service or protocol | Purpose and direction | Interface | Transport and device port | Peer port | Factory state |
| --- | --- | --- | --- | --- | --- |
| HTTP/REST | Configuration and measurement data; bidirectional | ETH1 | TCP `80` | Random | Enabled |
| HTTPS | Configuration and measurement data; bidirectional | ETH1 | TCP `443` | Random | Enabled |
| SOPAS (CoLa 2) | Configuration and measurement data; bidirectional | ETH1 | TCP `2122` | Random | Disabled |
| SOPAS (CoLa A/B) | Configuration and measurement data; bidirectional | ETH1, ETH2 | TCP `2111` / `2112` | Random | Disabled |
| NTP | Time synchronization; bidirectional | ETH1 | UDP `123` | Random | Inactive |
| PTP | Time synchronization; bidirectional | ETH1 | UDP `319` / `320` | Random | Inactive |
| UDP device search | Device discovery; bidirectional | ETH1 | UDP `30718` | Random | Enabled |
| Compact scan data | Measurement data; outgoing | ETH1 | TCP `2115` / `2116` | — | Disabled |
| ROS 2 | Measurement data; bidirectional | ETH1 | UDP `7400`–`65399` | Random | Disabled |
| Compact IMU data | IMU measurement data; outgoing | ETH1 | TCP `2117` | — | Disabled |

</div>

<div class="device-scope" data-device-scope="picoScan100" markdown="1">

#### picoScan100 (picoScan150)

The ports below are shown in the picoScan150 SOPASair
**Diagnostics > Cybersecurity** service list. The visible on/off state is the
state in the walkthrough capture, not a guarantee of the current device state.
The default states documented for HTTP, CoLa1, CoLa2, and device search are
listed in the factory-default table above; verify those settings on the
installed firmware.

<p class="table-caption" markdown>**picoScan150 network services:** service, transport and port, and purpose.</p>

| Service | Transport and port | Purpose |
| --- | --- | --- |
| Web server (HTTP) | TCP `80` | Browser interface and REST API |
| HTTPS | TCP `443` | Encrypted browser interface and REST API |
| CoLa A / CoLa B | TCP `2111` / `2112` | Legacy configuration and status telegrams |
| CoLa 2 | TCP `2122` | SOPAS communication |
| Device search | UDP `30718` | SOPAS ET discovery and Ethernet parameter changes |
| Compact / MSGPACK scan output | UDP, destination port configurable; Compact factory destination port `2115` | Measurement-data output |
| LMDscandata output | TCP `2111` / `2112` (CoLa A/B) | Scan telegrams |
| IMU and encoder output | UDP, destination port configured in SOPASair | Secondary-sensor data |
| Native ROS 2 | DDS over UDP; port range depends on middleware and domain ID | ROS 2 data output |
| NTP | UDP `123` | Time synchronization |
| PTP | UDP `319` / `320` | Time synchronization |

See the picoScan100 [SOPASair Cybersecurity walkthrough](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/graphical-user-interface/#cybersecurity)
and [Data Output walkthrough](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/graphical-user-interface/#data-output)
for the service list and configurable output ports. The picoScan150 Operating
Instructions do not give a fixed Native ROS 2 port range; use the configured
Cyclone DDS domain and host network settings rather than assuming the
multiScan270 range.

</div>

#### Disconnect Unused Interfaces

If a communication interface is not used by the application, disconnect its
communication cable. For example, an application using only digital I/O does
not need a permanently connected communication interface used only for
parameterization.

#### Close Unused Ports and Services

Disable every protocol that is not required for operation. This reduces the
device's attack surface.

##### Legacy Protocols (CoLa)

CoLa1 (CoLa ASCII/Binary) is a legacy interface for configuration and status
requests. Disable it when the application does not need it. On multiScan200
and picoScan100, manage this service under **Diagnostics > Cybersecurity**;
CoLa1 is disabled by default on multiScan200 and enabled by default on
picoScan100. On LRS4000 and multiScan100, inspect the service state and
available controls on the device before changing it.

##### SOPAS ET Device Search

Limit device visibility through broadcast scanning. On picoScan100, the device
search setting offers four modes:

<div class="device-scope" data-device-scope="picoScan100" markdown="1">

<p class="table-caption" markdown>**SOPAS ET Device Search:** mode and behavior.</p>

| Mode | Behavior |
| --- | --- |
| Enabled | The device can be discovered and its IP address can be changed without authentication. |
| Time-Limited | The device can be discovered and its IP address can be changed without authentication for 60 seconds after boot. |
| Restricted | The device can be discovered, but its IP address cannot be edited without authentication. |
| Disabled | The device cannot be discovered. **Recommended where applicable.** |

Device search uses UDP port `30718`. It is **Time-Limited** by default on the
picoScan100.

</div>

<div class="device-scope" data-device-scope="multiScan200" markdown="1">

On the multiScan200, device search is enabled by default; disable it in
**Diagnostics > Cybersecurity** when it is not required.

</div>

On LRS4000 and multiScan100, check the device's cybersecurity service list for
the device-search service and its current state. The picoScan100 modes and
default values above do not necessarily apply to those families.

##### Web Server

<div class="device-scope" data-device-scope="multiScan200 picoScan100" markdown="1">

On multiScan200 and picoScan100, the web server uses TCP port `80` and is
enabled by default. It provides browser-based visualization and
parameterization; when disabled, the sensor remains reachable through SOPAS
ET. For LRS4000 and multiScan100, inspect the cybersecurity service list
before disabling web access.

</div>

##### CoLa2

<div class="device-scope" data-device-scope="multiScan200 picoScan100" markdown="1">

CoLa2 uses TCP port `2122`. On picoScan100 it cannot be disabled. On
multiScan200 it is disabled by default; enable it in
**Diagnostics > Cybersecurity** only when required. Check the product-specific
service list for CoLa2 availability on other families.

</div>

##### Measurement Data Output

Enable measurement data output only when required:

1. Log in as **Authorized client**.
2. Open **Application > Data output > Measurement data output**.
3. Enable UDP streaming.

Enabling measurement data output opens a device-side UDP port. Disabling it
closes that port again.

##### IMU Data Output

Where supported by the device variant and licenses, configure IMU output under
**Application > Data output > IMU data output** as **Authorized client**.
Enable UDP streaming only when required. It opens a device-side UDP port;
disabling the stream closes the port.

##### Digital I/O

Configure digital signals for device-specific application signals, such as
DeviceNotReady or field evaluations, under **Configuration > Inputs and
outputs**. Log in as **Authorized client**.

##### Date and System Time

Configure synchronized time under **Basic settings > Date and system time**
as **Authorized client**, where this setting is available. NTP uses network
time-server traffic. All four families support PTP over UDP ports `319` and
`320`. Check the device's service list and
[time-synchronization guide](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/) for
supported methods and current state.

##### User Levels

<div class="device-scope" data-device-scope="LRS4000 multiScan100 multiScan200 picoScan100" markdown="1">

On all devices, only **Service** is enabled in the factory state; it cannot
be deactivated. See [User Levels](https://sickag.github.io/sick_lidar_developer_guide/shared-features/user-levels/).

</div>

#### Use Encrypted Communication

Use HTTPS to encrypt web-interface and REST communication. Measurement data
sent over UDP or TCP is not encrypted by HTTPS. Follow the
[HTTPS & certificates](https://sickag.github.io/sick_lidar_developer_guide/configuration/https-and-certificates/) guide to upload a valid
certificate bundle and verify the enabled state.

### Advanced Protection

Advanced settings are applied in addition to the basic settings.

#### Limit Network Access by IP Range

Change the default IP address to a non-default value and limit the subnet mask
to the smallest subnet that meets the application's needs. Subnetting reduces
broadcast traffic and makes it easier to isolate network problems.

Configure this under **Configuration > Connection options > Ethernet** as
**Service**.

## Application-Related Recommendations

### Primary Sensor Data

The supported data formats vary by family. Use the
[Data Streaming overview](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/) to choose a format
available on the device and review its security implications. Measurement
data sent over UDP or TCP is not encrypted by HTTPS. The notes below on
telegram fields are limited to the named formats and families.

#### Compact Format (Recommended)

Compact packets contain user data and a CRC32 checksum. Telegram headers and
fields differ by format and family.

<div class="device-scope" data-device-scope="LRS4000 multiScan100 picoScan100" markdown="1">

Type 1 scan telegrams are used by LRS4000, multiScan100, and picoScan100.

</div>

<div class="device-scope" data-device-scope="multiScan200" markdown="1">

multiScan200 uses type 6 scan telegrams.

</div>

Consult the [Compact format guide](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/) for the
device-specific fields used to check data identity, ordering, timing, and
integrity.

#### MSGPACK Format (multiScan100 and picoScan100)

<div class="device-scope" data-device-scope="multiScan100 picoScan100" markdown="1">

MSGPACK is available on multiScan100 and picoScan100. The following packet
fields and segment details describe the documented picoScan100 structure;
check the matching product documentation before relying on them for another
family.

</div>

<div class="device-scope" data-device-scope="picoScan100" markdown="1">

<p class="table-caption" markdown>**MSGPACK Format (multiScan100 and picoScan100):** field and purpose.</p>

| Field | Purpose |
| --- | --- |
| Telegram counter | Counts measurement-data telegrams since power-up, starting at `1`; detects lost data. |
| Transmit timestamp | Sensor system time in microseconds since 1970-01-01 00:00 UTC; detects delays. Synchronize the sensor with a time server where required. |
| Segment counter | Identifies segments. A 276° frame is split into 10 segments of 30° or 5 segments of 60°, depending on the scanning frequency. |
| Frame number | Counts frames since device startup; detects lost data. |
| Sender ID | Contains the device serial number; identifies the sending sensor. |
| CRC32 checksum | Follows the user data and is calculated over the MSGPACK buffer only, without the STX bytes and the size field. |

</div>

#### LMDscandata Format (LRS4000 and picoScan100)

<div class="device-scope" data-device-scope="LRS4000 picoScan100" markdown="1">

LMDscandata is available on LRS4000 and picoScan100. The
following field details describe the documented picoScan100 structure; check
the product-specific telegram listing for another family:

</div>

<div class="device-scope" data-device-scope="picoScan100" markdown="1">

<p class="table-caption" markdown>**LMDscandata Format (LRS4000 and picoScan100):** field and purpose.</p>

| Field | Purpose |
| --- | --- |
| Serial number | Identifies the sending device. |
| Telegram counter | Counts telegrams created since power-up, starting at `1`; detects lost data. |
| Version number | Identifies the serialization version and helps trace structure changes. |
| Scan counter | Counts scans actually created by the device. |
| Time since startup | Counts microseconds since power-up, starting at `0`. |
| Device time | Sensor system time since 1970-01-01 00:00 UTC in microseconds; detects delays. |
| XOR checksum | Verifies transfer integrity. CoLa B only: one byte, the XOR of all data bytes. |

</div>

### Secondary Sensor Data

multiScan100 and picoScan100 use Compact type `2` for IMU data.
multiScan200 uses type `7`, with its standard header. The LRS4000 provides
IMU data through CoLa events or the REST API instead of Compact. Use the
[Compact format guide](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/compact-format/#type-2-imu) for
device-specific IMU fields:

- Telegram version: the described telegram structure uses version `1`.
- IMU sensor timestamp: sensor system time in µs since 1970-01-01 00:00 UTC;
  detects delays in the data stream.
- CRC32 checksum: CRC32 of all words except the checksum.

### Device State

Monitor device state to detect changes in parameterization:

- CoLa `sRN SCdevicestate` transmits the general device state.
- REST `GET /api/DeviceStatus` reads the device status.

### Recommended Security Measures

#### Last Modified Information

Protect and monitor the information about when device parameters were changed
and stored. Find it under **Diagnosis > Overview > Operating information**.

#### Messages

Regularly review the diagnostic overview under **Diagnosis > Overview >
Messages**. If the sensor is not working as intended, use the troubleshooting
information to correct the problem or determine how to proceed.

#### Diagnostic File

The device provides a diagnostic file for in-depth analysis. Only SICK can read
this file. Use NTP synchronization so that device information can be assigned
correctly:

1. Log in as **Service**.
2. Open **Basic settings > Date and system time** and configure NTP or PTP.
3. Open **Diagnostics > Overview > Diagnostic file**.
4. Select **Create file**, then download the file.

#### Changing Parameters

Prevent unauthorized operators from changing parameters because parameter
changes can alter application results. Limit access to device parameters to the
minimum number of people required by the need-to-know principle.
