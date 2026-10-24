# Record LiDAR Scenarios with the SOPASair Data Recorder

> Record LRS4000, multiScan100, or picoScan100 measurement scenarios to .sc files with the SOPASair Data recorder.

Source: https://sickag.github.io/sick_lidar_developer_guide/recording/sopasair/

# SOPASair Recorder | .sc

Compatible with: LRS4000 multiScan100 picoScan100

The **SOPASair Data recorder** captures real LiDAR measurement data to a
recording file (`.sc`) for later analysis and replay. A repeatable scene helps
investigate unexpected detections or missed objects, compare application
behavior after changes, and share the same measurement scenario with
development or support teams.

## Open the Data Recorder

In the sensor's SOPASair web interface, open **Diagnostics → Data recorder**.
The page provides an installation file for a separate recorder application:

1. Download the data recorder installation file from SOPASair.
2. Unzip the downloaded ZIP file and run the EXE.
3. In the Connection Wizard, connect the recorder to the device. The
   recorder interface opens in a new window.
4. Use the recorder application to capture the measurement scenario and save
   the `.sc` recording for later use.

![SOPASair Diagnostics Data recorder page](https://sickag.github.io/sick_lidar_developer_guide/assets/picoScan100/img/sopasair-diagnosis-recording.png)
*The picoScan100 SOPASair Data recorder page links to the separate recorder application.*

<!-- SICK video: 0_nttrra9q; source: https://support.sick.com/sick-knowledgebase/article?id=af56c94b-4650-f011-877b-000d3a2a3508 -->
<p class="caption">picoScan100 example: Record and replay a measurement scenario as an `.sc` file with SOPASair. Menu labels and recorder availability may differ by software version.</p>

## When to Use It

- Capture a real scene during operation to investigate an intermittent issue.
- Replay a captured measurement scenario to compare processing results across
  application changes, rather than returning to the installation site.
- Share a recording with colleagues or SICK support for reproducible analysis.

Recordings capture a particular measurement scenario, not an entire device
configuration or raw Ethernet traffic. Save the relevant configuration and
firmware details separately when comparing behavior after changes. For a
complete device configuration, use [Backup & Restore](https://sickag.github.io/sick_lidar_developer_guide/configuration/configuration-backup-and-restore/);
for raw network traffic, use [Wireshark | pcap](https://sickag.github.io/sick_lidar_developer_guide/recording/wireshark-pcap/).

This is the **SOPASair** Data recorder workflow, not the separate legacy
[SOPAS ET](https://sickag.github.io/sick_lidar_developer_guide/visualization/sopas-et/) Excel/CSV recording workflow. The
availability of the recorder and replay functions may depend on device and
software version; the illustrated entry point is from picoScan100. LRS4000 and
multiScan100 also provide the SOPASair **Diagnostics → Data recorder** entry.
