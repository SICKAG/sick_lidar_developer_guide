# Asset Administration Shell (AAS) for SICK LiDAR Sensors

> Overview of the SICK Asset Administration Shell for LiDAR product part numbers and the product data it provides.

Source: https://sickag.github.io/sick_lidar_developer_guide/shared-features/asset-administration-shell/

# Asset Administration Shell

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

The Asset Administration Shell (AAS) is the standardized digital twin of Industry 4.0. SICK publishes an AAS for each product part number at [aas.sick.com](https://aas.sick.com). Access requires a SICK ID login. The AAS describes the product type in a machine-readable format, which makes it useful for engineering tools and asset management systems.

## What to Expect

- **Nameplate:** manufacturer, product designation, order code, and markings such as CE and UKCA
- **Technical data:** product classification (ECLASS, ETIM) and key technical properties
- **Documents:** data sheet, operating instructions, dimensional drawing, and certificates
- **CAD data:** 3D models such as STEP files and the EPLAN macro
- **Contact information:** SICK sales and service contacts

The AAS describes the part number, not an individual device. Serial number, firmware version, configuration, status, and measurement data come from the device itself through the [REST API](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/), the [CoLa interface](https://sickag.github.io/sick_lidar_developer_guide/configuration/cola-interface/), and the data streams.

## Link a Device to Its AAS

Each device is identified by its product ID
[`pid.sick.com/{P/N}/{S/N}`](https://pid.sick.com/), made of the part number
and the serial number from the type label. Both values can also be read from
the device over the REST API. The part number connects the device to its AAS.
