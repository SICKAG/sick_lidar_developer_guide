# Cybersecurity

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
device to its [Asset Administration Shell](../shared-features/asset-administration-shell.md),
which holds the data sheet, operating instructions, certificates, and CAD data
of the product type.

The examples and recommended settings on this page are general guidance, not
customer-specific solutions or a replacement for specialist technical advice.
Use the product-specific hardening guide and product documentation for the
device and firmware in your installation.

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
[Backup & restore](../configuration/configuration-backup-and-restore.md)
workflow supports multiScan100, multiScan200, and picoScan100. A passphrase can
encrypt the backup. File-transfer authentication differs by firmware; follow
the instructions for the matching OpenAPI file.

### Data Integrity

Verify downloaded `.spk` and `.sdd` files with the instructions at
[sick.com/verify-downloads](https://www.sick.com/verify-downloads). The
[`LFTchecksum` workflow](../shared-features/checksums.md) is available on
multiScan200 and picoScan100.

### Brute-Force Protection

After five consecutive unsuccessful login attempts, the picoScan100 enters a
30-second time lock. Do not assume the same threshold or lockout duration on
other families; check their product-specific hardening guide.

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
[Link A Device To Its AAS](../shared-features/asset-administration-shell.md#link-a-device-to-its-aas)
to connect this ID with the product type data.

For telegram-based access, refer to the [CoLa / LMDscandata](../data-streaming/lmdscandata-format.md)
documentation and the [Compact format](../data-streaming/compact-format.md).

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
the [User levels](../shared-features/user-levels.md) guide for the current
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

The following network-service defaults are for multiScan200 and picoScan100
only:

<p class="table-caption" markdown>**Configure Network Settings:** service, port, multiScan200, and picoScan100.</p>

| Service | Port | multiScan200 | picoScan100 |
| --- | --- | --- | --- |
| HTTP (web server, REST) | TCP `80` | Enabled | Enabled |
| CoLa A / CoLa B | TCP `2111` / `2112` | Disabled | Enabled |
| CoLa2 | TCP `2122` | Disabled | Always enabled |
| Device search | UDP `30718` | Enabled | Time-limited |

</div>

LRS4000 and multiScan100 also provide a **Diagnostics > Cybersecurity** view
with service and protocol information. Check that view on the target device;
do not infer their defaults from the table above. The
[LRS4000](../LRS4000/graphical-user-interface.md#cybersecurity) and
[multiScan100](../multiScan100/graphical-user-interface.md#cybersecurity)
walkthroughs show where to inspect these settings.

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
ET. For LRS4000 and multiScan100, inspect the cybersecurity service list and
the product-specific hardening guide before disabling web access.

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
[time-synchronization guide](../shared-features/time-synchronization.md) for
supported methods and current state.

##### User Levels

<div class="device-scope" data-device-scope="multiScan200 picoScan100" markdown="1">

On multiScan200 and picoScan100, only **Service** is enabled in the documented
factory state; it cannot be deactivated. Factory user-level states can differ
on LRS4000 and multiScan100. Check the
[User Levels](../shared-features/user-levels.md) guide and the product-specific
hardening guide before enabling or disabling a level.

</div>

#### Use Encrypted Communication

Use HTTPS to encrypt web-interface and REST communication. Measurement data
sent over UDP or TCP is not encrypted by HTTPS. Follow the
[HTTPS & certificates](../configuration/https-and-certificates.md) guide to upload a valid
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
[Data Streaming overview](../data-streaming/index.md) to choose a format
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

Consult the [Compact format guide](../data-streaming/compact-format.md) for the
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

#### LMDscandata Format (LRS4000, multiScan100, and picoScan100)

<div class="device-scope" data-device-scope="LRS4000 multiScan100 picoScan100" markdown="1">

LMDscandata is available on LRS4000, multiScan100, and picoScan100. The
following field details describe the documented picoScan100 structure; check
the product-specific telegram listing for another family:

</div>

<div class="device-scope" data-device-scope="picoScan100" markdown="1">

<p class="table-caption" markdown>**LMDscandata Format (LRS4000, multiScan100, and picoScan100):** field and purpose.</p>

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
[Compact format guide](../data-streaming/compact-format.md#type-2-imu) for
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
