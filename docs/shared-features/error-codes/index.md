# Error Codes for SICK LiDAR Sensors

> General list of SICK customer error IDs with their meaning and the recommended action for SICK LiDAR sensors.

Source: https://sickag.github.io/sick_lidar_developer_guide/shared-features/error-codes/

# Error Codes

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

The device reports problems with a customer error ID. The web interface shows the ID together with a short description and a recommended action. The following list is the general SICK error code list. Not every code applies to every device.

<p class="table-caption" markdown>**Error Codes:** error ID, description, and action.</p>

| Error ID | Description and action |
| --- | --- |
| 110 | The device is defective. Return the device after consulting your SICK contact. |
| 120 | Switch off the device and restart it after 20 seconds. If the error occurs repeatedly, contact your SICK contact. |
| 130 | The firmware update failed. Install the firmware again after 2 minutes. If that does not work, install the last working firmware. |
| 140 | The system plug is defective. Replace the system plug. |
| 205 | The firmware update failed. The device uses the last active firmware. Restart the firmware update after 2 minutes. |
| 210 | The device is not ready for operation. Wait, and restart the device if the error persists. |
| 211 | Object evaluation is not active in interlaced mode. Deactivate interlaced mode to use object evaluation. |
| 215 | Measurement data is missing. |
| 220 | The device temperature is not OK. Check the ambient operating temperature. If necessary, use a heater or ensure sufficient cooling. |
| 223 | The device temperature is too low. Check the ambient operating temperature. If necessary, use a heater. |
| 225 | The device temperature is too high. Check the ambient operating temperature. If necessary, ensure sufficient cooling. |
| 227 | The motor speed is not OK. Check the device for external mechanical influences. |
| 228 | Shock or vibration exceeds the specification. |
| 229 | Dazzling detected. |
| 230 | The device is contaminated and not ready for operation. Clean the optics cover. |
| 235 | The device is not ready for operation. Wait. If the error persists, contact your SICK contact. |
| 237 | The device is not ready for operation. A parameterization problem was detected. Restart the device. If that does not help, contact your SICK contact. |
| 239 | Internal communication error detected. Switch off the device and restart it after 20 seconds. |
| 240 | The device and the system plug are not connected correctly. Check the connection and clean it if necessary. If the error occurs repeatedly, contact your SICK contact. |
| 241 | New system plug detected. The available inputs and outputs may have changed. Check the input and output configuration and all functions that use inputs and outputs. |
| 250 | The inertial measurement unit (IMU) is faulty. Restart the device. If that does not help, return the device after consulting your SICK contact. |
| 505 | Fallback mode is active. Disconnect the device from the power supply for about 20 seconds and restart it. |
| 510 | The device is temporarily not receiving measurement data. |
| 511 | The rotation speed deviates from the target value but is within the tolerated range: (f ≥ 15 Hz and f < 19 Hz) or (f > 21 Hz and f ≤ 25 Hz). Measurement data is still output. |
| 512 | The environment is too bright. The camera cannot capture the scene reliably. Adjust the lighting conditions. |
| 513 | The environment is too dark. The camera cannot capture the scene reliably. Increase the lighting. |
| 520 | The heater cannot be switched on. Check the power supply and the cable length and cross-section. |
| 523 | The temperature is close to the lower temperature limit. |
| 525 | The temperature is close to the upper temperature limit. |
| 530 | The device is contaminated and has limited functionality. Clean the optics cover. |
| 540 | Check the communication connection and settings. |
| 541 | Communication with the external CAN module is not possible. Check the wiring and the system parameterization. |
| 543 | A data packet could not be sent because a previous packet was not transmitted completely. Possible causes are a slow network connection or delayed data processing on the receiver side. Receive the data in a separate thread and use sufficiently large buffers. |
| 545 | Communication with the external time server (PTP, NTP) is not possible. Check the network settings. |
| 547 | The synchronization signal is missing. Check the wiring and the settings of the sync primary. |
| 550 | No connection to the internal additional sensors. Wait, and restart the device if necessary. |
| 551 | Measurement data of the inertial measurement unit (IMU) is missing. |
| 560 | I/O problem detected. Check the wiring and the configuration of the inputs and outputs. |
| 562 | The system plug memory could not be read. The system plug is defective or contains no data. Save the parameter set permanently on the system plug. If the error persists, check how the system plug is mounted on the device and replace the system plug if necessary. |
| 563 | The system plug memory could not be written. Check how the system plug is mounted on the device. |
| 564 | The input voltage is too high. Check whether the device is damaged. |
| 565 | The input voltage is too low. Inputs and outputs no longer work. |
| 570 | Parameterization problem detected. Check the configured parameters. |
| 580 | The HTTPS settings are faulty. Check the certificate on the Cybersecurity page. |
| 581 | Error while processing the certificate. Restart the device. If that does not help, return the device after consulting your SICK contact. |
| 610 | Too many fields are active at the same time. Reduce the number of simultaneously active fields or adjust the field size. |
| 709 | System plug without Gigabit Ethernet detected. This can cause loss of measurement data. Use a Gigabit Ethernet system plug. |
| 710 | Customer-specific setting. |
| 715 | The laser is switched off automatically by a customer-specific setting. |
| 720 | The device parameters differ from those on the cloning plug. The parameters from the cloning plug are applied. |
| 810 | Service mode. |
| 905 | The application is not loaded or not activated. Check the firmware. |
| 907 | The operation could not be completed because licenses are missing. Activate the required licenses and repeat the operation. |
| 910 | Too many functions are active at the same time. Deactivate functions that are not needed. |
| 911 | Object tracking is overloaded, for example because the device is moving. Switch off the object tracking function. |
| 916 | The output data is invalid. Restart the device. |
| 917 | Application error: Check your own programmed application or reinstall the SensorApp of the device. See the product documentation for details. |
| 918 | Application error: See Diagnostics in the user interface of the application or the product documentation. |
| 920 | No CAN data or invalid CAN data received. Restart the device. |
| 921 | The CAN interface configuration is invalid or causes conflicts on the CAN bus. Check the configured parameters on the Inputs and Outputs page. |
| 935 | One of the inputs used is not available or is used more than once. Check the functions that use ports as inputs. |
| 940 | The device is not ready for operation. Restart the device. If the error still occurs, reset the device to factory settings or change the parameterization. |
| 990 | Application error: The parameters are invalid. Check the configured parameters. If necessary, reset to factory settings. |
| 992 | The configuration was not applied because of an internal error. The device uses the last saved configuration. Configure the device again. If that does not work, restart the device. |
