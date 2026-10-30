# LRS4000 Web GUI (SOPASair): Screens and Settings

> Walk through the LRS4000 SOPASair web interface for status, configuration, data output, applications, cybersecurity, and diagnostics.

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/graphical-user-interface/

# SOPASair Walkthrough

SOPASair is the built-in web interface of the LRS4000. It runs directly on
the sensor, so no software installation is needed. Open `http://<sensor-ip>/`
in a browser on the same network as the sensor. The factory default address
is `192.168.0.1`.

You can view status and settings without logging in. To change settings,
log in with the **Authorized Client** user level using the user icon in the
top bar.

![SOPASair Home dashboard showing LRS4581R status, live measurement data, I/O states, and detection history](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/sopasair-home-overview.png)
*The SOPASair Home dashboard: device status, live scan view, input and output states, and detection history at a glance.*

## Home

The Home page summarizes the sensor's state.

**Status** shows separate indicators for the device, connection,
measurement, field evaluation, and data output. Because each state is
reported independently, measurement can be running while external data
output is switched off.

![LRS4581R device and application status](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/sopasair-status.png)
*Device and application status indicators.*

**Device information** lists the model, part number, serial number, firmware
version, system time, and the time of the last save. Click **Find device**
to make the sensor LEDs blink, so you can identify the unit on site.

![LRS4581R device information](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/sopasair-device-information.png)
*Device identity and installed firmware version.*

## Configuration

The Configuration menu contains the measurement, filter, network, and I/O
settings. For the matching REST parameters and value ranges, see the
[LRS4000 OpenAPI reference](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/).

### Basic Settings

**Configuration > Basic settings** defines how the sensor scans. Select a
scan configuration to set the scan rate and angular resolution. The page
also shows the angular range, interlaced mode, and maximum scanning range,
and lets you adjust sensitivity, the status LED, and the measurement state.

![LRS4581R basic settings](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/sopasair-basic-settings.png)
*Scan configuration and measurement settings. The values shown are an example configuration.*

**Date and system time** shows the device clock and its synchronization
source. **Apply computer time** sets the sensor clock to your computer's
time. For network-based time sources, see
[Time synchronization](https://sickag.github.io/sick_lidar_developer_guide/shared-features/time-synchronization/).

![LRS4581R date and system time](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/sopasair-date-time.png)
*Device clock and time synchronization settings.*

**Motor synchronization** aligns the rotation of several scanners to avoid
mutual interference. Select the synchronization source here when you
integrate multiple sensors. See [Motor synchronization](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/motor-synchronization/)
for setup details.

![LRS4581R motor synchronization](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/sopasair-motor-synchronization.png)
*Motor synchronization source.*

### Filter

**Configuration > Filter** combines the echo, particle, median, and mean
filters. The echo filter selects all, first, or last echoes. Expand each
of the other filters to set its threshold, width, or averaging parameters.
See [Filter details](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/filter-details/) for how each filter
affects the measurement data.

![LRS4581R filter settings](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/sopasair-filters.png)
*Echo, particle, median, and mean filters.*

### Contamination Indication

**Configuration > Contamination indication** monitors the front window for
dirt. The sector diagram shows the contamination state per sector, using
the color legend below it. You can configure whether a warning or error is
output, the sensitivity, the monitored sectors, and the response delay. See
[Contamination indication](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/contamination-indication/) for
the application background.

![LRS4581R contamination indication](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/sopasair-contamination.png)
*Contamination status per sector and evaluation settings.*

### Connection Options

**Configuration > Connection options** contains the Ethernet settings:
addressing mode, IP address, subnet mask, default gateway, MAC address, and
link speed.

When you click **Apply**, the new network settings take effect immediately.
The browser loses its connection if the sensor moves to an address that your
computer cannot reach, so note the new address before applying the change.

![LRS4581R Ethernet settings](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/sopasair-ethernet.png)
*Ethernet addressing and link settings.*

### Inputs and Outputs

**Configuration > Inputs and outputs** assigns each port as an input or an
output. For outputs, select the signal sources, inversion, logic, and
restart behavior. The connector diagram next to each port shows the
corresponding pin, and the status indicators show the current physical
state. Enable **Use encoder** if an external encoder is connected.

![LRS4581R input and output assignments](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/sopasair-inputs-outputs.png)
*Port assignments with connector pin diagrams.*

## Application

The Application menu contains measurement-data output and the on-device
applications: field evaluation, 3D scan recording, and perpendicular
distance measurement.

### Data Output

**Application > Data output** selects the output format: Compact,
LMDscandata, or Deactivated. The page lists the protocols and ports on which
the data is available. See [Data streaming](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/) for
the transport options and parser requirements.

![LRS4581R measurement-data output](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/sopasair-data-output.png)
*Output format, protocols, and ports.*

**Output data format** selects the optional content of each telegram:
device name, time stamp, encoder values, and RSSI. It also sets the output
interval and the distance scaling factor.

![LRS4581R output data format](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/sopasair-output-format.png)
*Optional telegram content, output interval, and scaling factor.*

**Output range** limits the output to a start and stop angle.

![LRS4581R output angular range](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/sopasair-output-range.png)
*Start and stop angle of the output range.*

**Range filter** removes measurement points outside a distance window.

![LRS4581R distance filter](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/sopasair-range-filter.png)
*Distance filter.*

### Field Evaluation

**Application > Field evaluation** monitors fields for objects and switches
outputs when a field is infringed. Each group combines fields, evaluations,
and outputs, and has its own activation source. **Resource requirements**
shows how much of the sensor's evaluation capacity is in use, and
**Detection list** shows recent detections.

![LRS4581R field evaluation groups](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/sopasair-field-evaluation.png)
*An evaluation group with its field, evaluation, and output.*

**Teach-in** creates a field automatically from the current environment.
Set the distances in front of and behind the detected contour and the
minimum teach-in time, then start teach-in from the button or a digital
input.

![LRS4581R teach-in controls](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/sopasair-teach-in.png)
*Teach-in parameters and start control.*

See [Field evaluation](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/field-evaluation/) for a complete
commissioning procedure.

### 3D Scan Recording

**Application > 3D scan recording** combines 2D scans with the sensor's
rotation to build a 3D point cloud. The rotation comes from the internal
IMU or an external encoder. Start the recording with the button or an
input signal, and download the resulting point cloud when it is complete.

![LRS4581R 3D scan recording settings](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/sopasair-scan-recording.png)
*3D scan recording with the internal IMU as rotation source.*

See [3D Scan Recording](https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/3d-scan-recording/) for the REST workflow.

### Perpendicular Distance Measurement

**Application > Perpendicular distance measurement** reports the shortest
and furthest measuring points within a field, relative to a reference
plane. Use **Add group** to define a new measurement, and
**Result list for distance measurement** to view the results.

![LRS4581R perpendicular-distance application](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/sopasair-perpendicular-distance.png)
*A perpendicular-distance measurement group.*

## Diagnostics

### Overview

**Diagnostics > Overview** combines status, device identity, operating
information, the current device status, and the message log. Expand
**Operating information** to see the number of power-on cycles, the
operating hours, and the time of the last parameterization.

![LRS4581R operating information](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/sopasair-operating-information.png)
*Power-on count, operating hours, and last parameterization.*

The message table lists current and past events with their status number
and description. If you need support, use **Create diagnostic file** to
collect the device state in one file and send it to SICK. See
[Contact](https://sickag.github.io/sick_lidar_developer_guide/contact/).

### Cybersecurity

**Diagnostics > Cybersecurity** shows the HTTPS certificate with its
fingerprint, serial number, issuer, and expiry date. Use
**Create certificate** to generate a new certificate. The **Hash calculator**
helps you verify file checksums. See
[HTTPS and certificates](https://sickag.github.io/sick_lidar_developer_guide/configuration/https-and-certificates/) for the
complete certificate setup. For the variant-qualified service ports, see the
[LRS4000 network-services matrix](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/cybersecurity/#lrs4000-lrs4581).

![LRS4581R cybersecurity certificate status](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/sopasair-certificates.png)
*HTTPS certificate overview.*

### Data Recorder

**Diagnostics > Data recorder** explains how to install the SICK data
recorder on your computer and connect it to the sensor. Use the recorder
to capture measurement data for later analysis or support cases.

![LRS4581R recorder instructions](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/sopasair-recorder.png)
*Installation and connection steps for the data recorder.*

### Detection History

**Diagnostics > Detection history** records field-evaluation detections.
Select the evaluations to include, then start the history. The
**Statistics** section counts the detections per evaluation, and the
**Detection list** shows each event with its time stamp. Use
**Reset detection history** to clear the counters.

![LRS4581R detection history](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/img/sopasair-detection-statistics.png)
*Detection counts per evaluation.*
