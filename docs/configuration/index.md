# LiDAR Configuration Interfaces: REST, CoLa, Backup, HTTPS

> Choose how to configure SICK LiDAR sensors using REST, CoLa, backups, HTTPS, or interactive API clients.

Source: https://sickag.github.io/sick_lidar_developer_guide/configuration/

# Choose a Configuration Option

Start with the REST interface: it covers reading and writing parameters for
applications and scripts. The other options cover legacy integrations,
configuration files, security, and interactive testing.

* [REST Interface](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/): use the HTTP/JSON API to read and write parameters or call device methods from applications and scripts. Writes require challenge-response authentication.
* [CoLa Interface](https://sickag.github.io/sick_lidar_developer_guide/configuration/cola-interface/): send SICK commands and telegrams, especially for PLCs, legacy integrations, or systems already using CoLa.
* [Backup & Restore](https://sickag.github.io/sick_lidar_developer_guide/configuration/configuration-backup-and-restore/): save, recover, or deploy a complete configuration file; restore only to a matching device type.
* [HTTPS & Certificates](https://sickag.github.io/sick_lidar_developer_guide/configuration/https-and-certificates/): protect REST traffic with TLS and let clients verify the sensor using a trusted certificate.
* [Third-Party Tools](https://sickag.github.io/sick_lidar_developer_guide/configuration/third-party-tools/): import OpenAPI into Insomnia or Postman to explore endpoints and test requests interactively.

Insomnia and Postman are clients of the REST interface, not separate device protocols.
