# multiScan100 Web Interface (SOPASair)

> Navigate the multiScan100 SOPASair web interface to configure scan output, filters, field evaluation, and device settings.

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/graphical-user-interface/

# SOPASair Walkthrough

SOPASair is the built-in web interface of the multiScan100 for
parameterization, service, and diagnostics. It runs directly on the sensor,
so no software installation is needed. Connect the sensor to the same
network as your computer and open `http://<sensor-ip>/` in a browser. The
factory default address is `192.168.0.1`.

You can view status and settings without logging in. To change settings,
log in with the **Authorized Client** user level using the user icon in the
top bar.

![SOPASair Home dashboard showing multiScan165 status, 3D live view with field evaluation, I/O states, and detection history](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/sopasair-home-overview.png)
*The SOPASair Home dashboard: device status, 3D live view with field evaluation, input and output states, and detection history at a glance.*

## Home

The Home page summarizes the sensor's state. It is a good place to start
before you change any settings.

**Status** shows separate indicators for the device, connection,
measurement, field evaluation, and data output. Because each state is
reported independently, the sensor can be measuring while no data is sent
to an external receiver.

![multiScan165 device and application status](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/sopasair-status.png)
*Device and application status indicators.*

**Device information** lists the model, part number, serial number, firmware
version, system time, and the time of the last save. Check the firmware
version before you use a firmware-specific API example. Click
**Find device** to make the sensor LEDs blink, so you can identify the unit
on site.

![multiScan165 device information](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/sopasair-device-information.png)
*Device identity and installed firmware version.*

## Configuration

The Configuration menu contains the measurement, filter, mounting, network,
and I/O settings. For the matching REST parameters, value ranges, and
variant-specific limits, see the
[multiScan100 OpenAPI reference](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/).

### Basic Settings

**Configuration > Basic settings** contains interlaced mode, the status LED,
and the measurement state.

![multiScan165 basic settings](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/sopasair-basic-settings.png)
*Interlaced mode, LED, and measurement settings.*

**Date and system time** shows the device clock and its synchronization
source. **Apply computer time** sets the sensor clock to your computer's
time. For network-based time sources, see
[Time synchronization](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/).

![multiScan165 date and system time](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/sopasair-date-time.png)
*Device clock and time synchronization settings.*

### Filter

**Configuration > Filter** combines the fog, echo, particle, and
moving-average filters. The echo filter selects all, first, or last echoes,
and the moving-average filter sets the averaging depth. See
[Filter details](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) to choose the right
filters for your application.

![multiScan165 filter settings](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/sopasair-filters.png)
*Fog, echo, particle, and moving-average filters.*

### Mounting

**Configuration > Mounting** describes how the sensor is installed. Select a
preset mounting position or enter the orientation angles and position
offsets. **Adjust fields to mounting position** moves existing fields to
match the new mounting, and **Accept IMU data** takes the orientation from
the internal IMU.

![multiScan165 mounting position](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/sopasair-mounting.png)
*Mounting position, orientation, and offsets.*

The **Inertial measuring unit (IMU)** panel shows the current orientation
and acceleration. Because the IMU is not calibrated, use its values as a
starting point for the mounting orientation, not as a precise measurement.

![multiScan165 live IMU readings](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/sopasair-imu.png)
*IMU orientation and acceleration.*

### Contamination Indication

**Configuration > Contamination indication** monitors the front window for
dirt. The sector diagram shows the contamination state per sector, using
the color legend below it. You can configure whether a warning or error is
output, the sensitivity, the monitored sectors, the handling of blocked
sectors, and the response delay. See
[Contamination indication](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/contamination-indication/) for
the application background.

![multiScan165 contamination indication](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/sopasair-contamination.png)
*Contamination status per sector and evaluation settings.*

### Connection Options

**Configuration > Connection options** contains the Ethernet settings:
addressing mode, IP address, subnet mask, default gateway, MAC address, and
link speed.

When you click **Apply**, the new network settings take effect immediately.
The browser loses its connection if the sensor moves to an address that your
computer cannot reach, so note the new address before applying the change.

![multiScan165 Ethernet settings](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/sopasair-ethernet.png)
*Ethernet addressing and link settings.*

### Inputs and Outputs

**Configuration > Inputs and outputs** assigns each port a name and a
direction. For outputs, select the signal source, inversion, logic, and
restart behavior. The connector diagram next to each port shows the
corresponding pin. The status panels below show the current input and
output states, and **Reset counters** clears the output switching counters.

![multiScan165 input and output assignments](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/sopasair-inputs-outputs.png)
*Port assignments with connector pin diagrams.*

## Application

The Application menu contains measurement-data output and field
evaluation. Some variants offer additional functions. For example, the
multiScan165S with Safe 3D Object Detection adds a ground filter and
perpendicular distance measurement as non-safety-related functions.

### Data Output

**Application > Data output** selects the measurement-data format, MSGPACK
or Compact, and the UDP destination address and port. Start or stop the
data stream from the same panel. See
[Data streaming](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/) to choose a receiver and
parser.

![multiScan165 measurement-data output](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/sopasair-data-output.png)
*Output format, UDP destination, and stream control.*

IMU data is streamed separately, with its own destination address, port,
and start/stop control.

![multiScan165 IMU output](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/sopasair-imu-output.png)
*IMU data output.*

**Data reduction** limits the output by scan layer, angular range, and
output interval. **Range filter** removes points outside a cuboid area or a
distance window. If layers or points are missing from the received data,
check these settings together with the output format.

![multiScan165 data reduction](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/sopasair-data-reduction.png)
*Scan-layer, angular-range, and interval reduction.*

![multiScan165 range filters](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/sopasair-range-filter.png)
*Cuboid-area and distance filters.*

### Field Evaluation

**Application > Field evaluation** monitors fields for objects and switches
outputs when a field is infringed. Each group combines fields, evaluations,
and outputs, and has its own activation source. **Resource requirements**
shows how much of the sensor's evaluation capacity is in use, and
**Detection list** shows recent detections.

![multiScan165 field evaluation groups](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/sopasair-field-evaluation.png)
*Evaluation groups with their activation sources.*

See [Field evaluation](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/) for a complete
commissioning procedure and API support.

### Perpendicular Distance Measurement

Where supported by the device variant and software package, perpendicular
distance measurement evaluates points within a field relative to a reference
line. The results include minimum and maximum perpendicular distances and
the positions of the corresponding measuring points.

See [Perpendicular Distance Measurement](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/perpendicular-distance-measurement/)
for configuration steps and result interfaces.

### Object Evaluation

Object Evaluation provides object properties such as size, speed, and
direction for decisions based on object criteria rather than only field
infringements. It is available from multiScan100 firmware 2.5.0; check the
device variant and installed software package for support.

See [Object Evaluation](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/object-evaluation/)
for an introduction and application example.

## Diagnostics

### Overview

**Diagnostics > Overview** combines status, device information, operating
information, the current device status, and the message log. Expand
**Operating information** to see the number of power-on cycles, the
operating hours, and the time of the last parameterization.

![multiScan165 operating information](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/sopasair-operating-information.png)
*Power-on count, operating hours, and last parameterization.*

The message table lists current and past events with their status, number,
time, description, and counter. **Current device status** shows only the
messages that are still active. If you need support, use
**Create diagnostic file** to collect the device state in one file and send
it to SICK. See [Contact](https://sickag.github.io/sick_lidar_developer_guide/contact/).

### Cybersecurity

**Diagnostics > Cybersecurity** shows the HTTPS certificates and the
**Services and protocols** table. The table lists each service with its
purpose and port, so you can enable only the services your integration
needs. See [HTTPS and certificates](https://sickag.github.io/sick_lidar_developer_guide/configuration/https-and-certificates/)
for the complete certificate setup.

![multiScan165 services and protocols](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/sopasair-services-protocols.png)
*Services and protocols with their ports.*

The service list is specific to the device and firmware shown. For the
multiScan165 port reference and the separately configurable measurement-data
ports, see the [Cybersecurity network-services matrix](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/cybersecurity/#multiscan100-multiscan165).

### Data Recorder

**Diagnostics > Data recorder** explains how to install the SICK data
recorder on your computer and connect it to the sensor. Use the recorder
to capture measurement data for later analysis or support cases.

![multiScan165 recorder instructions](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/sopasair-recorder.png)
*Installation and connection steps for the data recorder.*

### Detection History

**Diagnostics > Detection history** records field-evaluation detections.
Select the evaluations to include, then start the history. The
**Statistics** section counts the detections per evaluation, and the
**Detection list** shows each event with its time stamp. Use
**Reset detection history** to clear the counters.

![multiScan165 detection history](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/img/sopasair-detection-statistics.png)
*Detection counts per evaluation.*
