# LiDAR Contamination Indication: Monitor the Optics Cover

> Monitor dirt on the optics cover of LRS4000, multiScan100, multiScan200, and picoScan100 sensors by sector, and read or configure contamination results via REST.

Source: https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/contamination-indication/

# Contamination Indication

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

Contamination indication monitors the sensor's optics cover for dirt that
could reduce measurement quality. It evaluates contamination by sector so
maintenance can target the affected area and be scheduled before the optics
become too dirty. picoScan100 evaluates seven sectors; its SOPASair sector
display shows where contamination is accumulating, with overall states of
**Clean**, **Minor**, **Heavy**, and **Blocked**.

Configure the sensitivity, response time, warning threshold, and active
sectors for the installation. The device can expose the result through its
GUI and REST API; depending on configuration, it can also be monitored
through CoLa or mapped to digital outputs. The warning and error behavior,
and whether blocked sectors count as errors, are configurable. Use the
indication as a maintenance signal and inspect and clean the optics according
to the product documentation.

All contamination settings and results are available through the REST API.
The endpoints are listed under **Contamination Indication** in the
[LRS4000 REST API](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/),
[multiScan100 REST API](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/),
[multiScan200 REST API](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/rest-api-openapi/), and
[picoScan100 REST API](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/) references.

Writes require the Authorized Client user level and challenge-response
authentication. Persist configuration changes with `WriteEeprom`; otherwise,
they may be lost after a power cycle.

picoScan100 CoLa clients can read configuration and sector data and subscribe
to event-driven contamination updates. See the
[picoScan100 CoLa Telegram Listing](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/cola-telegram-listing/).
For the interface walkthrough, see
[Contamination Indication in SOPASair](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/graphical-user-interface/#contamination-indication).

<!-- SICK video: 0_bliwkvf8; source: https://support.sick.com/sick-knowledgebase/article?id=b48faf8c-3b4c-f011-877a-000d3a206a36 -->
*picoScan100 example: Compare optics-cover contamination states with the sector indications described above.*
