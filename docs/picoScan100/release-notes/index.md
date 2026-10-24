# picoScan100 Firmware Release Notes

> picoScan100 firmware release history from V1.0.2 to V2.3.3: new features, fixes, new CoLa telegrams and REST endpoints, and update instructions.

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/release-notes/

# Release Notes

This page records picoScan100 firmware changes, fixes, and compatibility notes across releases. Use it to assess update impact and find the release information relevant to your installed firmware.

## General Information

V1.x.x/V2.x.x is standard firmware for all picoScan100 variants. Downgrades are not possible. A firmware update typically does not affect active parameter settings or purchased features / licenses for picoScan100 variants. Restart the device after activating or deactivating licenses.

## Update Instructions

**Recommended update path to V2.3.3.**

<p class="table-caption" markdown>**Update Instructions:** current firmware, target firmware, recommended update tool / procedure, and firmware update file.</p>

| Current firmware | Target firmware | Recommended update tool / procedure | Firmware update file            |
| ---------------- | --------------- | ----------------------------------- | ------------------------------- |
| V2.3.1           | V2.3.3          | SOPASair, web browser, or REST API  | `picoScan100_V2.3.3.spk.signed` |
| V2.2.1           | V2.3.3          | SOPASair, web browser, or REST API  | `picoScan100_V2.3.3.spk.signed` |
| V2.1.0           | V2.3.3          | SOPASair, web browser, or REST API  | `picoScan100_V2.3.3.spk`        |
| V2.0.0           | V2.3.3          | SOPAS ET                            | `picoScan100_V2.3.3.spk`        |
| V1.x.x           | V2.3.3          | SOPAS ET                            | `picoScan100_V2.3.3.spk`        |

After selecting a `.spk.signed` file, the upload process may take several seconds. Once the upload is complete, the **Install now** button becomes active and allows the update to begin. After a successful update, the device indicates completion by showing a green LED again. If the dialog becomes unresponsive, refresh the browser.

**Firmware update via SOPASair.**

Recommended for firmware versions `>= V2.1.0`. SOPASair offers the possibility of a firmware update via web browser.

**Headless firmware update via HTTP / REST.**

Possible with firmware versions `>= V1.4.0`.

The firmware update takes place in two steps:

1. Transfer the firmware file (`.spk`) to the device via HTTP:

    ```http
    PUT <ip>/api/update
    ```

2. Trigger the actual update via HTTP:

    ```http
    POST <ip>/api/RunFirmwareUpdate
    ```

The current update status can be monitored via:

```http
GET <ip>/api/UpdateState
```

See [Firmware Update](https://sickag.github.io/sick_lidar_developer_guide/shared-features/firmware-update/#headless-via-the-rest-api) for the complete sequence with authentication. The OpenAPI description is available in the product download section.

**Firmware update via SOPAS ET.**

Recommended for firmware versions `<= V2.0.0`.

1. Save and unpack the files on your local hard disk. Use full admin rights on your PC.
2. Make sure the picoScan100 is connected via Ethernet to your PC and booted up.
3. Keep the power supply stable during the update process.
4. Use SOPAS ET or AppManager for firmware updates. The following steps refer to SOPAS ET.
5. Search for the connected picoScan100 and drag and drop the device into the SOPAS project.
6. Recommendation: save your parameter file (`.sopas`) before starting the update.
7. Open the settings and choose **Download firmware**.
8. Select the firmware package (`.spk`) and start the update process.
9. Log in to the picoScan100 with user level **Service**.
10. The update procedure may take up to 2 minutes.
11. Wait until the reboot is completed and the device LED turns green.
12. Check the SOPAS window for the correct firmware version.
13. Depending on the firmware update, the SOPAS ET device driver may need to be reinstalled by pressing **install device driver**.
14. Before using the picoScan100 for operation, ensure the device works as expected and all parameters are set as intended.
15. In case of uncertainty, set factory defaults in the device with user level **Service**, then load your parameter file (`.sopas`) onto the device.
16. Done.

## Firmware V2.3.3

**Compatible with:** picoScan120 and picoScan150; **Release date:** cw 31/2026; **Effective from:** S/N 2632xxxx

> Important note: Devices with serial numbers `>= 2632xxxx` can only be operated with firmware version V2.3.3 or later. Earlier firmware versions are not supported.

**Improvements and fixes.**

- Motor control has been improved for picoScan150 and picoScan120.

**Known issues.**

- Contamination indication segments show **clean** if the measurement is stopped or the device is in stand-by mode. After a device reboot, the contamination indication output may initialize with an incorrect logical state when assigned to a digital output with inversion enabled. The output status is corrected once a new contamination event is detected.
- A file error can occur during system diagnosis under high load. This happens when the system diagnosis is called on a device where Particle filter, Moving average filter, and Streaming are active. Deactivate those filters before executing the system diagnosis.
- In very rare cases, device availability after startup is slightly delayed. In this case, the device is fully operational within 20 seconds.
- When changing input and output settings or importing configuration files, an occasional parameterization message can appear in the diagnostics overview: **Too many functions are active at the same time. Deactivate functions that are not required.** This message can be safely ignored because the error becomes inactive immediately.
- Native ROS 2 provides the ROS standard message type `MultiEchoLaserScan`. For this message type, scan profiles 1, 2, 4, and 11 are recommended.

## Firmware V2.3.1

**Compatible with:** picoScan120 and picoScan150; **Release date:** cw 22/2026; **Effective from:** S/N 2625xxxx

**New features.**

**Data output format LMDscandata configurable.**

The graphical user interface allows users to configure the content of the LMDscandata output format, for example disabling RSSI values to reduce network bandwidth.

**Data output format Compact configurable.**

The graphical user interface allows users to configure the content of the Compact output format, for example disabling RSSI values to reduce network bandwidth.

**3D point cloud capture and data export.**

For demonstration purposes, it is possible to swivel or move the scanner in a linear direction to capture a 3D point cloud of the surrounding environment using the encoder input or the integrated IMU of the picoScan150. The captured 3D point cloud is visualized in the Scan View GUI and can be exported as a `.pcd` file.

**Support for PoE system plug.**

This firmware version is required to operate the picoScan150 in combination with the newly developed PoE system plug variant.

**Support for new frontend.**

With this firmware version, picoScan150 and picoScan120 are prepared for compatibility with a new laser frontend as hardware change. The hardware change is planned for implementation in production at a later point in time. Firmware V2.3.1 or later is required to operate devices with the new hardware. Earlier firmware versions are not compatible with the new hardware.

**WebSocket events.**

Added WebSocket-based event subscription support, enabling real-time push notifications over a persistent `/apievents` connection. A single WebSocket link handles multiple event registrations, e.g. contamination, device status, field evaluation, temperature and other events.

**UDP multicast for IMU and encoder data.**

Added support for UDP multicast for both IMU and encoder data streams. The UDP destination address can now be configured as a multicast address.

**CoLa A/B port configurable.**

The CoLa A and CoLa B communication ports, default 2111 and 2112, can now be configured individually. This is useful for compatibility with other SICK LiDAR devices that support the LMDscandata output format.

**Support of Virtual Sensor Lab.**

The [Virtual Sensor Lab](https://devices.cloud.sick.com/) enables users to explore the graphical user interface without requiring a physical device. It also allows the creation of offline configuration files (`.json`) which can be exported and later imported into another device. Configuration files from physical devices can be loaded and viewed in the Virtual Sensor Lab. The web-based tool can set the system plug type, 5-pin or 12-pin. Import and export of `.sopas` files is not supported.

**Cybersecurity improvements.**

System plug variants can clone network parameters, and this firmware allows network parameter cloning to be disabled. The GUI Cyber Security page displays the encoder setup and can enable or disable encoder data streaming. Internal device dependencies were updated to address security vulnerabilities and align with cyber secure software development.

**Improvements and fixes.**

- The **Optimized for Robustness** sensitivity mode improves measurements on retroreflectors. It suppresses and filters blooming effects associated with these targets, making the measurement results more stable and robust.
- Reflector tagging is corrected for the 20 m to 30 m distance range. Previously, tags were inconsistent and some measurement points on retroreflectors were not marked as reflector returns. These points are now tagged reliably within the affected range.
- Environment teach-in results survive a device reboot and are included when a parameter file is downloaded from the device. This allows the recorded environment to be reused and simplifies configuration.
- Encoder processing no longer produces implausible values from incorrectly interpolated encoder data. The interpolation error that occurred in some cases has been corrected.
- The sectors selected for contamination indication are now retained reliably after a reboot. Previously, some sector selections were not saved correctly.
- The Native ROS 2 descriptions for **child frame** and **parent frame** are corrected; they were previously interchanged.
- Native ROS 2 now operates reliably with DHCP IP address servers.

**API changes and publications.**

For a complete reference, consult the OpenAPI description in the product
download section on [sick.com](https://www.sick.com/).

Session-token-based authentication now secures parameter-file upload, download, and import. A short-lived `X-Session-Token`, obtained at service level, creates, downloads, re-uploads, and restores a JSON parameter file.
New full-screen URLs are `http://<ip>/#/?fullscreen=` and `http://<ip>/#/?fullscreen_mode=`.
`http://<ip>/#/?scanview_fullscreen=` has been disabled.

The OpenAPI files are available for [picoScan120](https://www.sick.com/de/en/downloads/media/swp684461) and [picoScan150](https://www.sick.com/de/en/downloads/media/swp678507).

**Introduced telegrams / REST endpoints.**

<p class="table-caption" markdown>**Firmware V2.3.1:** description, CoLa A/B, and REST.</p>

| Description                                                                         | CoLa A/B                                    | REST                                              |
| ----------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------------- |
| Returns the type of the sending unit                                                | `sRN laserType`                             | `GET /api/laserType`                              |
| Returns the type of the receiving unit                                              | `sRN sipmType`                              | `GET /api/sipmType`                               |
| Returns/sets whether blocked sectors are treated as blocked or contaminated sectors | `sRN/sWN treatBlockedSectorsAsErrorSectors` | `GET/POST /api/treatBlockedSectorsAsErrorSectors` |
| Enables/disables system plug cloning                                                | `sRN/sWN enableCloningPlug`                 | `GET/POST /api/enableCloningPlug`                 |
| Returns/sets Compact telegram type 1 content                                        | `sRN/sWN compactTelegramType1Content`       | `GET/POST /api/compactTelegramType1Content`       |
| Returns/sets LMDscandata configuration                                              | `sRN/sWN LMDscandatacfg`                    | `GET/POST /api/ScanDataConfig`                    |
| Returns/sets LMDscandata CoLa ASCII TCP port settings                               | `sRN/sWN EIAuxPort`                         | `GET/POST /api/EtherAuxIPPort`                    |
| Returns/sets LMDscandata CoLa Binary TCP port settings                              | `sRN/sWN EIHstPort`                         | `GET/POST /api/EtherHostIPPort`                   |
| Returns/sets session timeout for LMDscandata output                                 | `sRN/sWN EtherSessionTimeout`               | `GET/POST /api/EtherSessionTimeout`               |
| Returns/sets ROS domain ID                                                          | `sRN/sWN rosDomainId`                       | `GET/POST /api/rosDomainId`                       |
| Enables/disables 3D scan recorder                                                   | `sRN/sWN ScanMergerEnabled`                 | `GET/POST /api/ScanMergerEnabled`                 |
| Returns/sets data source for scan merging                                           | `sRN/sWN ScanMergerSource`                  | `GET/POST /api/ScanMergerSource`                  |
| Returns/sets encoder transformation type                                            | `sRN/sWN EncoderTransformationType`         | `GET/POST /api/EncoderTransformationType`         |
| Returns/sets encoder rotation center in mm                                          | `sRN/sWN EncoderRotation`                   | `GET/POST /api/EncoderRotation`                   |
| Returns/sets encoder translation in mm                                              | `sRN/sWN EncoderTranslation`                | `GET/POST /api/EncoderTranslation`                |
| Returns/sets rotation center offset                                                 | `sRN/sWN RotationOffset`                    | `GET/POST /api/RotationOffset`                    |
| Returns/sets scan merge trigger                                                     | `sRN/sWN ScanMergeTrigger`                  | `GET/POST /api/ScanMergeTrigger`                  |
| Starts 3D scan recording                                                            | `sMN StartScanMerge`                        | `POST /api/StartScanMerge`                        |
| Stops 3D scan recording                                                             | `sMN StopScanMerge`                         | `POST /api/StopScanMerge`                         |
| Deletes currently displayed point clouds                                            | `sMN ResetScanMergeView`                    | `POST /api/ResetScanMergeView`                    |
| Returns saving status for merged scans                                              | `sRN MergeSaving`                           | `GET /api/MergeSaving`                            |

As soon as a scan merge is completed, the point cloud is available for download at `http://<ip>/cloud.pcd`.

**Known issues.**

- Contamination indication segments show **clean** when measurement is stopped or the device is in stand-by mode.
- A file error can occur during system diagnosis under high load when Particle filter, Moving average filter, and Streaming are active; deactivate those filters before running the diagnosis.
- Device availability may very rarely be delayed but becomes fully operational within 20 seconds.
- The occasional parameterization message **Too many functions are active at the same time. Deactivate functions that are not required.** can be ignored when it becomes inactive immediately.
- Native ROS 2 provides `MultiEchoLaserScan`, for which scan profiles 1, 2, 4, and 11 are recommended.

## Firmware V2.2.1

**Compatible with:** picoScan120 and picoScan150; **Release date:** cw 11/2026; **Effective from:** S/N 2612xxxx for picoScan150 and S/N 2613xxxx for picoScan120

**Improvements and fixes.**

This release includes minor GUI improvements and bug fixes.

**Known issues.**

- Contamination indication segments show **clean** when measurement is stopped or the device is in stand-by mode.
- A file error can occur during system diagnosis under high load when Particle filter, Moving average filter, and Streaming are active; deactivate those filters before running the diagnosis.
- Device availability may very rarely be delayed but becomes fully operational within 20 seconds.
- The occasional parameterization message **Too many functions are active at the same time. Deactivate functions that are not required.** can be ignored when it becomes inactive immediately.
- Native ROS 2 does not provide measurement data after DHCP fallback, so ensure that the DHCP server is available after boot.
- The Native ROS 2 GUI parameter descriptions for **child frame** and **parent frame** are interchanged.

## Firmware V2.2.0

**Compatible with:** picoScan120 and picoScan150; **Release date:** cw 03/2026; **Effective from:** not released for production

**New features.**

**Encoder input support.**

The device has a digital encoder input for recording incremental encoder signals. Configuration can be done via the user interface or telegram using the communication interface. The encoder input supports single-channel encoders (A) and dual-channel encoders (A/B) for direction determination. Recorded pulses are provided with a high-resolution timestamp using NTP / PTP and output either as a separate UDP stream or as part of LMDscandata. External reference signals can also be fed in, for example encoder Z signal or limit switch signals.

**Download and import of parameter files via SOPASair.**

The parameter set can be manually saved as a project file (`*.json`) on the computer via **Download / Import configuration file**. This is the generally recommended procedure. The project file can be transferred to another product and optionally password-protected. SOPAS ET is obsolete for transferring project files.

**Temperature alarm via digital output.**

The device can set a temperature alarm via digital output. The internal temperature is continuously monitored. If the set temperature is exceeded, a digital output is switched. Threshold settings can be applied via the communication interface.

**Checksum for device validation.**

The sensor can compute a checksum to verify critical device information, including device type, system plug, parameter setting, point of time of last save, calibration data, operating system and active licenses.

**Full screen mode button.**

The three-dot menu includes a full screen mode. When activated, it hides the main menu control bar. Press ESC to exit full screen.

**Improvements and fixes.**

- The GUI now offers **Native ROS 2** as a selectable data format. Communication uses DDS (Data Distribution Service) to transmit measurement data directly in ROS 2-compatible formats, without additional drivers and with minimal delay.
- Motor-controller settings have been optimized for device startup.
- The angle range filter can again be disabled for LMDscandata output. Previously, disabling the filter did not work.

**Cybersecurity improvements.**

**Signed firmware update support.**

This firmware forms the basis for signed firmware updates. Future firmware packages in `.spk.signed` format will be validated by the sensor before installation to help ensure that only authentic and tamper-proof software is installed.

**Behavioral changes.**

- The GUI provides an undo function for the last parameter change and includes minor visual improvements.
- Opening the device window in SOPAS ET now displays a generic start page with a link to the browser.
- The contamination-indication setting **Evaluation for blocked sectors** lets users choose whether blocked sectors are evaluated as heavy contamination. A sector can be blocked when the device is installed close to a wall or an object covers the optical hood. The setting is also available via CoLa A/B and REST.
- An IMU plausibility check detects missing or frozen data and creates an error-log entry when the data is implausible.
- **Reset and maintain communication interfaces** now preserves HTTPS certificates because they are part of the communication interface.

**API changes and publications.**

The OpenAPI files are available for [picoScan120](https://www.sick.com/de/en/downloads/media/swp684461) and [picoScan150](https://www.sick.com/de/en/downloads/media/swp678507).

<p class="table-caption" markdown>**Firmware V2.2.0:** description, CoLa A/B, and REST.</p>

| Description                                       | CoLa A/B                                | REST                                          |
| ------------------------------------------------- | --------------------------------------- | --------------------------------------------- |
| Create configuration file on device               | -                                       | `POST /api/CreateParameterBackup`             |
| Download/import configuration file from/to device | -                                       | `POST /api/parameterbackup`                   |
| Restore configuration file on device              | -                                       | `POST /api/RestoreParameterBackup`            |
| Returns checksum over software and configurations | `sRN LFTchecksum`                       | `GET /api/LFTchecksum`                        |
| Returns/sets temperature alarm thresholds         | `sRN/sWN temperatureAlarmConfiguration` | `GET/POST /api/temperatureAlarmConfiguration` |
| Returns current temperature alarm status          | `sRN temperatureAlarmStatus`            | `GET /api/temperatureAlarmStatus`             |
| Returns/sets ROS frame ID                         | `sRN/sWN rosFrameId`                    | `GET/POST /api/rosFrameId`                    |
| Returns/sets ROS parent frame ID                  | `sRN/sWN rosParentFrameId`              | `GET/POST /api/rosParentFrameId`              |
| Returns/sets ROS namespace                        | `sRN/sWN rosNamespace`                  | `GET/POST /api/rosNamespace`                  |
| Returns/sets mounting position in 1/10000 deg     | `sRN/sWN SensorPosition`                | `GET/POST /api/SensorPosition`                |
| Returns/sets encoder mode                         | `sRN/sWN LICencset`                     | `GET/POST /api/EncSetting`                    |
| Returns/sets encoder resolution                   | `sRN/sWN LICencres`                     | `GET/POST /api/EncResolution`                 |
| Enables/disables 1st reference signal             | `sRN/sWN LICpos1enable`                 | `GET/POST /api/ActualEncPosition1Enable`      |
| Enables/disables 2nd reference signal             | `sRN/sWN LICpos2enable`                 | `GET/POST /api/ActualEncPosition2Enable`      |
| Resets encoder tick value                         | `sMN LIDrstencoderinc`                  | `POST /api/mResetEncoderIncrement`            |
| Returns/sets encoder UDP destination settings     | `sRN/sWN EncoderDataEthSettings`        | `GET/POST /api/EncoderDataEthSettings`        |
| Enables/disables encoder data streaming           | `sRN/sWN EncoderDataEnable`             | `GET/POST /api/EncoderDataEnable`             |
| Returns evaluation group type                     | `sRN EvaluationGroupType`               | `GET /api/EvaluationGroupType`                |

**Known issues.**

- Contamination indication segments show **clean** when measurement is stopped or the device is in stand-by mode.
- A file error can occur during system diagnosis under high load with Particle filter, Moving average filter, and Streaming active.
- Device availability may very rarely be delayed but becomes fully operational within 20 seconds.
- The occasional parameterization message can be safely ignored when it becomes inactive immediately.
- Native ROS 2 does not provide measurement data after DHCP fallback, so the DHCP server must be available after boot.
- The Native ROS 2 GUI parameter descriptions for **child frame** and **parent frame** are interchanged.

## Firmware V2.1.0

**Compatible with:** picoScan120 and picoScan150; **Release date:** cw 16/2025; **Effective from:** S/N 2517xxxx for picoScan120 and picoScan150

**New features.**

**Perpendicular distance evaluation.**

Perpendicular Distance evaluation is part of the 2D Object Detection Advanced license package. It allows fields to be drawn and evaluates the minimum and maximum perpendicular distance between objects entering the field and a reference line.

A new device can be configured through the sales configurator with the 2D Object Detection Advanced package. On an existing device, activate license `1146093 PICOSCAN PERPENDICULAR DISTANCE` through License Manager.

**Reflector detection improvements.**

The reflector-detection algorithm has been improved, particularly for false positives in ambient light. Devices with serial numbers `> 2422xxxx`, which were more sensitive to false-positive reflector detection, benefit from this improvement. LMDscandata provides reflector information using RSSI value 254, and a reflector-detection filter handles double echoes from reflector targets. On picoScan120, the **optimized for reflector** mode improves measurement performance on reflector targets but can overlook very small, transparent, or mirroring objects.

**HTTPS.**

picoScan100 supports HTTPS, enabling secure and encrypted communication.

**Firmware update via SOPASair.**

SOPASair now offers firmware update capability. SOPAS ET is no longer needed for a firmware update for supported versions.

**Full screen scan view URL.**

For full-screen visualization of measurement data or 2D Object Detection:

```text
<IP>/#/?scanview_fullscreen=
```

Example:

```text
http://192.168.0.1/#/?scanview_fullscreen=
```

**Measurement data recording.**

Measurement and IMU data can be recorded and played back when used with additional recorder software.

Use the [Recorder software](https://www.sick.com/de/en/downloads/media/swp681956).

**Improvements and fixes.**

- The 2D Object Detection history table has improved visualization. Configuration no longer becomes inconsistent when evaluations are deleted, renamed, or recreated with the same names.
- The GUI measurement tool can now measure the distance to the device center.
- SOPASair scan view provides separate show/hide controls for reflector and non-reflector scan points.
- The contamination-indication GUI element has been reworked to improve usability and fix bugs.
- LMDscandata now includes I/O states for better compatibility with products such as TiM and LMS1.
- The diagnostics overview identifies message categories with icons for Info, Warning, Error, and Fatal Error. It also displays message numbers and indicates whether a warning is active or inactive.
- Output counters no longer increment when an output is HIGH and a configuration change leaves its actual state unchanged. Resetting a counter now displays `-`, meaning zero, rather than incorrectly setting the value to `2`.
- `.sopas` files can now be imported regardless of the earlier firmware version for which they were created. A warning is displayed if information in the file does not match the target device's setup.
- Error handling has been optimized so that the message **Too many functions are active at the same time** appears less often during operation.
- The low-device-temperature warning is intended for temperatures of -5 °C or below, when motor startup may be delayed. The issue that occasionally caused this warning at higher temperatures has been fixed.
- The CoLa A/B user levels **Maintenance** and **Authorized Client** are disabled by default, matching the HTTP/REST interface behavior. They can be enabled in the GUI after logging in as **Service**. Updating from firmware earlier than V2.1.0 preserves previously enabled user levels; a factory reset restores the defaults, with **Maintenance** and **Authorized Client** disabled and **Service** enabled.
- Enabling the LMDscandata scan-range filter no longer causes the first output beam to have an incorrect distance value of `0`.
- The Teach-In setting **Start/Stop by Input Signal** is now saved permanently. Previously, rebooting or cycling power reset it to its default value.

**Behavioral changes.**

- Activating more than 20 fields exceeds the supported maximum and stops 2D Object Detection. From V2.1.0, the device status also changes to **device not ready**.
- During the **waiting for restart** output state, LED 1 is continuously yellow and LED 2 flashes green. This indicates that a restart is pending after a configured time or digital input.
- Devices shipped with firmware V2.1.0 use **Static IP** instead of **Repeat DHCP** as the DHCP fallback default. This change does not apply to devices updated in the field from V1.5.0 or lower.

**API changes and publications.**

The OpenAPI files are available for [picoScan120](https://www.sick.com/de/en/downloads/media/swp684461) and [picoScan150](https://www.sick.com/de/en/downloads/media/swp678507).

Selected changes include `perpendicularDistanceResult`, which returns the perpendicular-distance feature's minimum distance, maximum distance, and timestamp, and `EtherCoLaScanMode`, which replaces `EnableColaScan` with the Enabled, Time-Limited, Restricted, and Disabled modes. Send `EthernetUpdate` after updating IP configuration to trigger reconfiguration. `changePassword` sets the REST interface password, `SetPassword` sets the CoLa A/B interface password, `EnableUserLevel` activates or deactivates the REST user level, and `EnableLegacyUserLevel` activates or deactivates the CoLa A/B user level. `EnableDetectionHistory` returns or sets detection history, `EvaluationsToLog` returns or sets the evaluations that are logged, and `ResetDetectionHistory` resets detection-history logs. `httpsStatus` returns HTTPS interface status, `certificateBundleInfo` returns information about the uploaded certificate bundle, `setCertificateBundleInfo` uploads a certificate bundle in PEM format through JSON, and `removeCertificateBundleInfo` removes the uploaded certificate bundle.

**Known issues.**

- Contamination indication segments show **clean** when measurement is stopped or the device is in stand-by mode.
- A file error can occur during system diagnosis under high load, and an error-log message can occur during a factory reset; both can be ignored as applicable.
- Device availability may very rarely be delayed but becomes fully operational within 20 seconds.
- There is a minimal chance of a fatal error after a firmware update; if it occurs, repeat the update. The update was successful if the device operates stably with a green LED for more than 10 minutes.
- The angle range filter cannot be disabled for LMDscandata; use start angle `-138°` and stop angle `138°`, or perform a factory reset, to output the full field of view.
- In SOPAS ET, 2D object-detection parameters can influence one another, so SOPASair is strongly recommended for parameterization.
- An invalid measurement point can appear at 0° in GUI Application > Data output, but this does not affect Compact or LMDscandata output.
- Some SOPASair notifications during and after a factory reset, firmware update, or reboot can be ignored.

## Firmware V2.0.0

**Compatible with:** picoScan120 only; **Release date:** cw 45/2024; **Effective from:** S/N 2442xxxx

**Features.**

This is the initial firmware for picoScan120 and provides headless firmware updates through REST.

Firmware update via REST uses:

```http
PUT <ip>/api/update
POST <ip>/api/RunFirmwareUpdate
GET <ip>/api/UpdateState
```

**Known issues.**

- A file error can occur during system diagnosis under high load.
- CoLa A/B remains active after `EtherAuxEnabled` is set to false, so a power cycle is required.
- The output counter does not show the correct number and must not be used to count **Device Not Ready** signals.
- Queue overflows can occur when Ethernet settings change but do not affect picoScan120 use.
- SOPAS ET can show several error messages and is not recommended; use SOPASair instead.
- The angle range filter cannot be disabled for LMDscandata; use start angle `-138°` and stop angle `138°`, or perform a factory reset.

## Firmware V1.5.0

**Compatible with:** picoScan150 only; **Release date:** cw 45/2024; **Effective from:** S/N 2445xxxx

**New features.**

**2D Object Detection Advanced feature update.**

License activation is required.

New 2D Object Detection features include background teach-in, which teaches the current environment to monitor the free field of view, and Contour as reference, which monitors the presence of a reference contour. Configure a new device through the sales configurator with the 2D Object Detection Advanced package, or activate license `1146090 PICOSCAN TEACH-IN` through License Manager on an existing device.

**Improvements and fixes.**

- The field-evaluation live view now visualizes events.
- Statistics and event tables refresh automatically, and detection history is enabled by default.
- Handling of configuration changes and the statistics overview have been improved.
- Motor-frequency tolerance has been optimized to increase sensor availability.
- Output configuration now allows more than 20 evaluations to be assigned to a single output.
- Scan segments are now visible in the GUI.

**API changes and publications.**

The OpenAPI files are available for [picoScan120](https://www.sick.com/de/en/downloads/media/swp684461) and [picoScan150](https://www.sick.com/de/en/downloads/media/swp678507).

The new telegrams are REST `POST <ip>/api/GetFieldEvaluationContour`, CoLa `sMN GetFieldEvaluationContour`, REST `POST <ip>/api/changePassword`, and REST `POST <ip>/api/SetPassword`.

**Known issues.**

- Detection history can become inconsistent when evaluations are deleted, renamed, or recreated with the same names.
- The **Start/Stop by Input Signal** Teach-In setting is not permanently saved.
- Contamination indication segments show **clean** when measurement is stopped or the device is in stand-by mode.
- The sector dropdown has no effect when Accessories is set to **None** or **Weather protection hood**.
- A file error can occur during system diagnosis under high load.
- The LMDscandata angle range filter can output a first beam with distance `0` and cannot be disabled.
- A factory reset can create an error-log entry that can be ignored.

## Firmware V1.4.1

**Compatible with:** picoScan150 only; **Release date:** cw 34/2024; **Effective from:** S/N 2435xxxx

**Improvements and fixes.**

- Minor adaptations maintain compatibility with browsers based on Chromium version 128 or higher.

**Known issues.**

- For object detection, changing field-evaluation output properties assigns the selected output correctly, but deleting the field does not reset the previous output.
- The detection-history refresh button works only once, and the current configuration can become inconsistent when evaluations are deleted, renamed, or recreated with the same names.
- The online help for **ignore missing echo** incorrectly describes behavior when the function is deactivated.
- Contamination indication segments show **clean** when measurement is stopped or the device is in stand-by mode.
- The sector dropdown has no effect when Accessories is **None** or **Weather protection hood**.
- A file error can occur during system diagnosis under high load.
- The LMDscandata angle range filter can output a first beam with distance `0` and cannot be disabled.
- A factory reset can trigger **IMU Queue Overflow**, which can be ignored.

## Firmware V1.4.0

**Compatible with:** picoScan150 only; **Release date:** cw 31/2024; **Effective from:** S/N 2432xxxx

**New features.**

**Firmware update via HTTP / REST.**

A firmware update can be performed without graphical user interface via REST/HTTP.

```http
PUT <ip>/api/update
POST <ip>/api/RunFirmwareUpdate
GET <ip>/api/UpdateState
```

**Improvements and fixes.**

- The 2D Object Detection function works again on devices where it was inactive with firmware V1.3.0.
- The GUI no longer shows the PTP feature on devices whose feature scope does not include it.

**API changes and publications.**

The OpenAPI files are available for [picoScan120](https://www.sick.com/de/en/downloads/media/swp684461) and [picoScan150](https://www.sick.com/de/en/downloads/media/swp678507).

The 2D Object Detection application state information `/FieldEvaluationApplicationState` is removed from the API. This information can still be monitored via `/DeviceStatus`.

**Known issues.**

- The main known issues are the same as in V1.4.1:
  - Object-detection output-reset behavior
  - Detection-history refresh and consistency
  - Incorrect online help for **ignore missing echo**
  - Contamination-indication segment state in stopped / stand-by mode
  - Sector dropdown with no effect for **None** or **Weather protection hood**
  - Possible file error during system diagnosis under high load
  - LMDscandata angle-range filter's first-beam value and inability to be disabled
  - Ignorable error-log entry during a factory reset

## Firmware V1.3.0

**Compatible with:** picoScan150 only; **Release date:** cw 18/2024; **Effective from:** S/N 2418xxxx

**New features.**

**2D Object Detection.**

The new **Field Evaluation** application allows definition of up to 48 individual fields / evaluations.

Fields can be merged into groups, which can be activated by telegram or input signal. Telegrams and output signals can monitor field and application status. Maximum blanking size and detection time are individually configurable. Distance-dependent mode combines measuring points inside a field according to distance, while manipulation prevention triggers object detection if monitoring from the device to the field boundary is insufficient. **Ignore missing echo** treats a missing echo as a measuring point in the field. In Blanking mode, field evaluation reacts to all measurement points; in Reflector mode, it reacts only to points marked as reflectors. Detection history can store up to 200 entries, deleting the oldest entry when a new detection occurs.

**Contamination indication.**

The contamination indication evaluates 7 sectors regarding contamination levels. Results can be monitored in the GUI, via digital outputs or via telegram. Response time can be adjusted.

**New scan configuration.**

New scan configuration with 15 Hz scanning frequency and 1° angular resolution, profile number 11. This configuration can be used to retrofit, for example, TiM351 or TiM551.

**Improvements and fixes.**

- The 40 Hz / 0.125° scan configuration, profile 10, now provides all available echoes. Previously, it supported only one echo.
- The start and stop timestamps of each scan segment in Compact and MSGPACK output now match system time.
- The IMU streaming issue that occasionally paused data output for approximately 1 second has been fixed.
- The scan-range filter now limits LMDscandata output to the selected range instead of transmitting zero values outside it.
- LMDscandata now includes device-status and scanning-frequency information.
- The interval filter's default and minimum values have changed from 1 to 2.
- The `mResetCounter` telegram no longer resets an I/O port to its default state.
- GUI notifications have been added to improve the user experience.
- LED indication for the **RecoverableError** device state has been corrected.

**Known issues.**

- Object-detection output-reset behavior, detection-history refresh and consistency, and incorrect online help for **ignore missing echo**.
- Contamination indication segments show **clean** when measurement is stopped or in stand-by mode.
- The sector dropdown has no effect for **None** or **Weather protection hood**.
- A file error can occur during system diagnosis under high load.
- The LMDscandata angle range filter can output a first beam with distance `0` and cannot be disabled.
- An error-log entry during a factory reset can be ignored.

## Firmware V1.2.0

**Compatible with:** picoScan150 only; **Release date:** cw 09/2024; **Effective from:** S/N 2410xxxx

**New features.**

**Precision Time Protocol support.**

PTP is a synchronization mechanism for precise coordination of data acquisition across multiple LiDAR units or other clients in a network. By synchronizing internal clocks, PTP enables accurate timestamping of measurements, supporting spatial mapping and object detection. It minimizes latency and supports reliable data fusion in applications such as autonomous vehicles or industrial automation.

**Native ROS 2.**

Native ROS 2 is a digital add-on with license. The device offers native ROS 2 support using DDS to enable real-time communication and optimize interoperability with ROS 2 standards. To enable it:

Install the corresponding license through License Manager, disable MSGPACK, Compact, or LMDscandata data output, and enable Native ROS 2 with telegram `RosConnectEnable`.

**License Manager support.**

License Manager is integrated and available via:

```text
http://192.168.0.1/#/license
```

**Improvements and fixes.**

- Boot time has been optimized. The device is typically ready after 9.5 seconds, with the green LED on and data output available.
- All digital outputs now show the same electrical levels during device startup.
- Reflector detection has been improved for edge hits involving a second target. Retroreflectors can produce a measurement point at twice the actual distance; previously, this could cause the first target to be incorrectly classified as a reflector.
- The maximum input debounce time has increased to 1000 ms.
- The Compact-format scaling factor is now set correctly in the rare range-extension conditions that previously caused incorrect distance data.
- IMU data now uses the system timestamp and updates when system time is set by the user, an NTP server, or PTP.
- The picoScan sensor model in scan view has been updated.
- GUI refresh time after a reboot has been reduced to 10 seconds.
- The login dropdown now shows only enabled user levels, and the displayed angular resolution is no longer rounded.
- Visual and wording issues have been corrected, including the incorrect appearance of the distance-measuring tool.
- The redundant `SaveParameters` method has been removed. Use `mEEwriteall` to save parameters permanently.

**Known issues.**

- A file error can occur during system diagnosis under high load.
- In rare cases, IMU data streaming can pause for about 1 second before continuing with the latest data.
- A factory reset can trigger **IMU Queue Overflow**, which can be ignored.

## Firmware V1.1.0

**Compatible with:** picoScan150 only; **Release date:** cw 50/2023; **Effective from:** S/N 2350xxxx

**New features.**

**IMU support.**

IMU data is enabled with this release and available in Compact format. IMU type: [BOSCH BHI160B](https://www.bosch-sensortec.com/products/smart-sensor-systems/bhi160b/).

**Cloning of communication parameters.**

Every system plug has cloning memory on board. Communication parameters such as IP address, subnet mask and gateway are stored automatically to the system plug when parameters are saved permanently. Parameters are loaded on boot up. This enables faster device exchange if the system plug remains in the application.

**Improvements and fixes.**

- Reflector detection at close range has improved. Typical detection ranges are `0.3 m <= x <= 25 m` for Core, `0.3 m <= x <= 60 m` for Prime, and `0.3 m <= x <= 120 m` for Pro.
- False-positive reflector flags no longer occur at target edges on devices calibrated in the production line. This improvement applies only to those calibrated devices.
- Measurement-core lockups in complex scenarios have been fixed. Previously, scenarios with many dynamic targets could occasionally cause a temporary device error.
- The angular error that depended on the selected dynamic sensing profile has been improved. This change applies only to devices calibrated in the production line.
- Boot-up time has been optimized to typically 11 seconds.
- Scan segments are no longer occasionally transmitted with a delay of one segment.
- The device now sends a response before executing a reboot or factory-defaults command. Previously, it rebooted immediately without answering the command.
- Ethernet-configuration input validation now prevents invalid configurations from being set.
- The static DHCP fallback IP address now works as expected.
- General GUI improvements include a better user experience in Microsoft Edge and Firefox.

**Known issues.**

- Incorrect distance data is possible in range-extension mode when using picoScan150 Pro-1 with Compact output, active range extension, scan profile 1, 2, 4, 5, or 7, and a highly reflective target at a distance greater than 65 m.
- In SOPASair, a browser tab can consume memory over time and produce an Out of memory error; restart the browser to recover.
- A file error can occur during system diagnosis under high load.
- In rare cases, IMU data streaming can time out for about 1 second.
- The IMU data-stream timestamp begins at boot and does not update with user-set time or an NTP server.

## Firmware V1.0.2

**Compatible with:** picoScan150 only; **Release date:** cw 36/2023; **Effective from:** S/N 2336xxxx

**Features.**

This is the initial firmware for picoScan150.

**Known issues.**

- In SOPASair, a browser tab can consume memory over time and produce an Out of memory error; restart the browser to recover.
- A file error can occur during system diagnosis under high load.
- In rare cases, IMU data streaming can time out for about 1 second.
- The IMU data-stream timestamp begins at boot and does not update with user-set time or an NTP server.
