# Diagnostic File for SICK LiDAR Sensors

> Create a diagnostic file on a SICK LiDAR sensor in SOPASair and send it to your local SICK contact for analysis.

Source: https://sickag.github.io/sick_lidar_developer_guide/troubleshooting/diagnostics/

# Diagnostics

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

If you cannot solve a problem with the [Troubleshooting](https://sickag.github.io/sick_lidar_developer_guide/troubleshooting/) tables or the
[Error Codes](https://sickag.github.io/sick_lidar_developer_guide/troubleshooting/error-codes/), create a diagnostic file on the device. The file
collects diagnostic data of the device in one ZIP archive. SICK uses it to
analyze the problem.

## SOPASair Diagnostics

Open the web interface of the device and go to **Diagnostics → Overview**. The
page shows the current device status, the message log, and the
**Diagnostic file** tile.

![SOPASair Diagnostics overview with the Diagnostic file tile](https://sickag.github.io/sick_lidar_developer_guide/assets/picoScan100/img/sopasair-diagnosis-overview.png)
*SOPASair **Diagnostics → Overview** on a picoScan100: status, messages, and the **Diagnostic file** tile with **Create file** and **Download**.*

## Create and Send a Diagnostic File

1. Reproduce the problem, or create the file soon after it occurs.
2. Log in with the Service [user level](https://sickag.github.io/sick_lidar_developer_guide/shared-features/user-levels/) or
   higher.
3. In the **Diagnostic file** tile, click **Create file**. A new file
   overwrites the previous one, and the previous file can no longer be
   downloaded.
4. Click **Download** and save the ZIP file on your computer.
5. Send the file to SICK through your local SICK contact for analysis. Add a
   short description of the problem, the part number, the serial number, and
   the firmware version. See [Contact](https://sickag.github.io/sick_lidar_developer_guide/contact/) for the contact options.

You can also create the file over the REST API with `DoDiagnosisDump`. See the
REST API | OpenAPI page of your device for the available diagnostic endpoints.

The diagnostic file may contain information about your installation. Do not
post it in public forums.

## More Information

The operating instructions of your device describe the diagnostic functions,
the status LEDs, and the messages in more detail. Download them from the
*Downloads* tab of the product page on [sick.com](https://www.sick.com/), or
open the downloads section of your device guide:
[LRS4000](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/#downloads),
[multiScan100](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/#downloads),
[multiScan200](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/#downloads), or
[picoScan100](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/#downloads).
