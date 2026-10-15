# Contamination Indication

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
[LRS4000 REST API](../LRS4000/rest-api-openapi.md),
[multiScan100 REST API](../multiScan100/rest-api-openapi.md),
[multiScan200 REST API](../multiScan200/rest-api-openapi.md), and
[picoScan100 REST API](../picoScan100/rest-api-openapi.md) references.

Writes require the Authorized Client user level and challenge-response
authentication. Persist configuration changes with `WriteEeprom`; otherwise,
they may be lost after a power cycle.

picoScan100 CoLa clients can read configuration and sector data and subscribe
to event-driven contamination updates. See the
[picoScan100 CoLa Telegram Listing](../picoScan100/cola-telegram-listing.md).
For the interface walkthrough, see
[Contamination Indication in SOPASair](../picoScan100/graphical-user-interface.md#contamination-indication).
