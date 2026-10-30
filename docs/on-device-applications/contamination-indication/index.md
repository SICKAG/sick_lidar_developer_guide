# LiDAR Contamination Indication: Monitor the Optics Cover

> Monitor dirt on the optics cover of LRS4000, multiScan100, multiScan200, and picoScan100 sensors by sector, and read or configure contamination results via REST.

Source: https://sickag.github.io/sick_lidar_developer_guide/on-device-applications/contamination-indication/

# Contamination Indication

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

Contamination indication monitors the sensor's optics cover for dirt that
could reduce measurement quality. It evaluates contamination per sector of the
optics cover, so maintenance can target the affected area before the optics
become too dirty. The number of sectors depends on the device. The SOPASair
sector display shows where contamination is accumulating, with overall states
such as **Clean**, **Minor**, **Heavy**, and **Blocked**.

![SOPASair contamination indication tile with status, sector display, and configuration settings](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan200/img/sopasair-configuration-contamination-indication-tile.png)
*Contamination indication tile in SOPASair, captured live from a multiScan270: overall status, sector display, and configuration.*

Configure the sensitivity, response time, warning threshold, and active
sectors for the installation. The device can expose the result through its
GUI and REST API; depending on configuration, it can also be monitored
through CoLa or mapped to digital outputs. The warning and error behavior,
and whether blocked sectors count as errors, are configurable. Use the
indication as a maintenance signal and inspect and clean the optics according
to the product documentation.

All contamination settings and results are available through the REST API.
The endpoints are listed under **Contamination Indication** in the
[LRS4000 REST API](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/),
[multiScan100 REST API](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/),
[multiScan200 REST API](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/), and
[picoScan100 REST API](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-rest-openapi/) references.

Writes require the Authorized Client user level and challenge-response
authentication. Persist configuration changes with `WriteEeprom`; otherwise,
they may be lost after a power cycle.

picoScan100 CoLa clients can read configuration and sector data and subscribe
to event-driven contamination updates. See the
[picoScan100 CoLa Telegram Listing](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-cola-telegrams/).
For the interface walkthrough, see
[Contamination Indication in SOPASair](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/graphical-user-interface/#contamination-indication).

*picoScan100 example: Compare optics-cover contamination states with the sector indications described above.*
