# LRS4000 Firmware Release Notes

> LRS4000 firmware history, update guidance, feature changes, fixes, and known issues from versions 1.10.0 to 1.4.0.

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/release-notes/

# Release Notes

This page summarizes LRS4000 firmware changes, fixes, compatibility notes,
and known issues. The releases apply to the LRS4581R. Check the device serial
number and firmware version before applying release-specific information.

## General Information

The extended-range capability is available for eligible devices. Firmware from
version 1.7.0 supports that mode only on devices produced from November 2024
with serial number `SN2442xxxx` or higher. Earlier devices may be updated, but
do not gain the extended-range feature.

## Update Instructions

Use SOPAS ET or Sentio Creator for firmware updates. Downgrading firmware is not
recommended.

For the steps, see [Firmware Update](https://sickag.github.io/sick_lidar_developer_guide/shared-features/firmware-update/#sopas-et).

## Firmware V1.10.0

**Compatible with:** LRS4581R

**New features:** Redesigned web interface, cybersecurity page, HTTPS for web services, distance-data recording, and Perpendicular Distance.

**Improvements:** SOPAS ET web-server access and encoder settings presentation.

**New features.**

- The web interface was redesigned, and a cybersecurity page was added to
  show open ports and user levels and manage related settings.
- Web-server and REST configuration can use HTTPS.
- Distance-data recording is available through the SICK data recorder;
  download the software from the device web interface.
- Perpendicular Distance functionality was added.

**Improvements.**

- SOPAS ET can enable a disabled web server and now links to the device web
  interface instead of emulating it.
- Encoder settings are shown under inputs and outputs; encoder functionality
  is unchanged.

**Bug fixes.**

- Invalid device IP address ranges are now rejected by the sensor, preventing
  the fatal device error that could occur with an invalid address.
- Several minor field-evaluation bugs have been fixed.
- DHCP fallback behavior has been corrected to use static IP.

**Incompatibilities.**

- `sWN EtherCoLaAEventsEnable` is no longer available. CoLa A event output is
  generally allowed, but do not use it for LMDscandata because data may be
  lost.
- `sWN ScanDataEnable` has no effect. Use the data-output format setting to
  disable output.

**Known issues.**

Device temperature is displayed as 20 °C in the web interface and by
`sRN OPcurtmpdev`. This display and telegram behavior are planned for removal
in a later firmware version.

## Firmware V1.9.1

**Compatible with:** LRS4581R; **Release date:** 2026-04

**Improvements:** Softer motor startup after power-on.

**Bug fixes.**

- Activating field-evaluation groups through inputs 1 to 3 no longer causes
  device errors. The incorrect offset between physical inputs and the input
  selections in the group tab has also been corrected.
- The device no longer enters an overload error after startup when multiple
  configured groups would overload it if all were active simultaneously.

**Known issues.**

After reboot, an IP address in the `169.254.x.x` range may cause a fatal
device error. Return the device to `192.168.0.1` and install current firmware
through SOPAS ET as a recovery procedure.

## Firmware V1.9.0

**Compatible with:** LRS4581R

**New feature:** Adds Sensitivity Mode.

**Sensitivity Mode.**

The mode can extend range and improve detection of highly reflective targets.
Observe the operating conditions in the table below. Using a mode outside its
stated ambient-light conditions may reduce detection probability and increase
noise.

<p class="table-caption" markdown>**Firmware V1.9.0:** maximum range in standard and extended-range mode (10% remission) and maximum ambient light per sensitivity mode.</p>

| Sensitivity mode | Maximum range, standard mode (10% remission) | Maximum range, extended-range mode (10% remission) | Maximum ambient light |
| --- | ---: | ---: | ---: |
| Normal | 55 m | 100 m | 80 klux |
| Sensitive | 65 m | 115 m | 30 klux |
| Very Sensitive | 70 m | 120 m | 10 klux |

**Incompatibilities.**

The device temperature sensor was removed. `OPcurtmpdev` no longer works.

## Firmware V1.8.1

**Compatible with:** LRS4581R

**Improvement:** Adds an adjustable TCP transmit timeout for CoLa connections.

`EtherColaTransmitTimeout` adjusts the transmit timeout for TCP connections
on ports 2111 and 2112. The default remains 15 seconds; the setting can be
changed from 250 milliseconds to 15 seconds to speed reconnection after an
unexpected disconnect.

**Bug fixes.**

The release fixes CoLa A/B commands being ignored after reconnecting over an
unstable network on TCP ports 2111 and 2112.

**Known issues.**

The GUI depicts the input/output connector as male A-coded, although the
connector should be female A-coded.

## Firmware V1.8.0

**Compatible with:** LRS4581R

**New features:** Field-evaluation detection history and teach-in, additional GUI languages, and a cybersecurity tab with a hash calculator.

**Improvements:** Compact timestamps, date/time interface, and maximum region-of-interest range.

**New features.**

- The home page shows field-infringement detection history, with links to
  related field-evaluation pages.
- Teach-in can capture a static background manually or through an input.
  The taught background can be used for blanking and contour evaluation.
- A detection-list shortcut was added to field evaluation.
- Chinese, Japanese, and French were added as GUI languages.
- The cybersecurity tab groups security functions. Its hash calculator is
  required for changing passwords through CoLa A/B or logging in through a
  SICK software driver.

**Improvements and bug fixes.**

- The field-evaluation setting previously labeled **Do not regard an echo as
  object detected** is now labeled **Ignore missing echo**.
- Detection history has a revised graphical layout.
- Start and stop timestamps in Compact output are now transmitted as Linux
  system time.
- The date and system-time GUI has been updated.
- The maximum region-of-interest scanning range has increased from 200 m to
  300 m to cover all possible LRS4000 distance values.
- Loading application defaults now resets the LED enablement state correctly.
- SOPAS ET device import has been corrected so that all parameters are
  included in parameter export.

**Known issues.**

The input/output connector is depicted as male A-coded in the GUI, but should
be female A-coded.

## Firmware V1.7.0

**Compatible with:** LRS4581R; extended-range feature only on eligible production units

**New features:** Extended-range mode, field evaluation, online help, user-level management, and distance measurement between two points.

**New features.**

- Extended-range mode increases measurement distance up to 300 m. It is
  selected through the scan configuration, which also changes the scale
  factor. Eligibility is limited to devices produced from November 2024 with
  serial number `SN2442xxxx` or higher.
- Field evaluation supports up to 16 user-defined fields, subject to field
  shape and concurrent application load.
- Online help provides topic descriptions and guided tours.
- Other web-interface user levels can be enabled after logging in at Service
  level; CoLa A/B user levels are unaffected.
- The scan view can measure the distance between two points.

**Improvements and bug fixes.**

- The distance filter has been renamed **Scanning range filter**, and its
  graphical presentation has been updated. The scan view now shows the
  ignored scan area in gray.
- The separate start and stop buttons for 3D scan recording have been
  combined into one button that changes function. Recording can therefore
  be started and stopped without moving the mouse.
- The 3D scan view has an updated appearance and additional options.
- The diagnostics overview provides additional message filters, including
  filtering by occurrence time and showing only active messages.
- A fatal device error has been fixed for configurations combining an
  angular area below 360° (12.5 Hz / 0.02° or 25 Hz / 0.04°) with the echo
  filter set to **First echo** or **Last echo**.
- The scan-data viewer has been adapted for compatibility with updated
  Chromium browsers.

**Incompatibilities.**

The default echo-filter value changed from `FIRST_ECHO` to `LAST_ECHO`.

**Known issues.**

During 3D scan recording, an overtime measurement stop may leave the button
showing **Stop**. Pressing it a second time restores the **Start** state.

## Firmware V1.6.0

**Compatible with:** LRS4581R

**New features:** Scan merge, Compact streaming over TCP, motor synchronization, and system diagnosis.

**New features.**

- Scan merge creates a 3D point cloud using position and orientation from the
  internal IMU or an external encoder. A rotation offset can compensate for
  rotation around a pivot; the recording can be started in the GUI or by a
  digital input. The resulting point cloud can be downloaded through the
  browser.
- Compact streaming was added over TCP port 2115. UDP is not supported for
  this format on this device, and only one streaming format can be enabled at
  a time.
- Motor synchronization can use PTP clock synchronization or a wired index
  signal. Synchronization is disabled by default; the receiver phase can set
  the rotation offset.
- System diagnosis can create a reduced diagnosis after an error or an
  extended file at Service level.

**Improvements.**

Robustness was improved for applications that move or swivel the device.

**Known issues.**

Certain combinations of partial scan configurations and first- or last-echo
filtering could cause a fatal device error. This was fixed in V1.7.0. A
Chrome scan-view issue was also fixed in V1.7.0.

## Firmware V1.5.0

**Compatible with:** LRS4581R

**New features:** Particle Filter, Distance Filter, updated scan-data viewer, and a prompt to change default passwords.

**New features.**

- Particle Filter removes isolated small-object or noise echoes, such as
  rain or dust, based on distance steps from neighboring beam angles.
- Distance Filter limits scans to a configured range; out-of-range echoes
  receive distance and RSSI values of zero.
- The scan viewer adds 3D and split views.
- The interface prompts users to change passwords that are still at their
  defaults.

**Incompatibilities.**

Customer passwords from firmware earlier than 1.5.0 are reset to defaults
because of updated password handling. The Glare Detection Filter was removed
and replaced by Particle Filter.

**Known issues.**

The fatal-error scan configuration and Chrome scan-view issues from V1.6.0
also apply to this release; both are fixed in V1.7.0.

## Firmware V1.4.0

**Compatible with:** LRS4581R

**New features:** Contamination Indication, PTP, IMU secondary data, and controls for the web server and CoLaScan/AutoIP.

**New features.**

- Contamination Indication monitors 12 sectors around 360 degrees. Thresholds,
  response time, and weather-protection cover can be configured. Monitoring
  is available by GUI and telegram; evaluation is inactive by default.
- PTP synchronization can be enabled through the web interface or the
  `TSCRole` CoLa parameter.
- IMU secondary data can be read or sent as events.
- The web server can be disabled from connection settings. `EnableColaScan`
  can disable CoLaScan/AutoIP and prevent opening port 30178.

**Improvements.**

- Loading factory defaults now requires the Service user level.
- The 2D scan-view update interval now adapts to the rotation and filter
  settings. Previously, visualization could become slow, particularly with
  the median filter enabled.
- The connection-options page now groups settings into separate panels for
  legacy CoLa A/B, CoLa 2, and the web-server port. Each panel also includes
  security settings for disabling the related ports.
- The unused Expert Mode has been removed.

**Bug fixes and incompatibilities.**

- The default CoLa dialect for the UDP port has changed from CoLa A to CoLa B.
- All application parameters are now accessible to SOPAS ET for export and
  import through `.sopas` files. Previously, some application parameters
  could not be stored in parameter exports.
- CoLa A event output is disabled by default from V1.4.0. At the highest
  performance settings with all features enabled, loss-free CoLa ASCII
  output cannot be guaranteed; compatibility handling can also affect other
  CoLa1 ports. Port 2111 still supports polling device parameters, while
  event streaming uses ports 2112 (CoLa B) and 2122 (CoLa 2).
- For compatibility, `EtherCoLaAEventsEnable` can enable CoLa A events.
  Changing it requires explicitly saving parameters permanently and cycling
  power. Data loss depends on resolution and device configuration, and
  enabling this setting can also affect other CoLa ports.

**Known issues.**

Firmware V1.4.0 has a known fatal-error issue for certain partial scan
configurations with first- or last-echo filtering. Firmware V1.7.0 fixes this
issue.

For feature availability and parameter details, use the documentation for the
device and firmware version.
