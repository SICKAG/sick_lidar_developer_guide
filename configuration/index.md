# Choose a Configuration Option

Choose an option based on whether you need to integrate with the sensor
programmatically, manage configuration files, secure the connection, or test
REST requests interactively.

<p class="table-caption" markdown>**Choose a Configuration Option:** option, what it is for, advantages, trade-offs, and best fit.</p>

| Option | What it is for | Advantages | Trade-offs | Best fit |
| --- | --- | --- | --- | --- |
| [REST Interface](./rest-interface.md) | HTTP/JSON API for reading and writing parameters and calling device methods. | Provides structured requests and responses; documented through OpenAPI; works with scripts and generated clients. | Writes require challenge-response authentication and changes generally need explicit persistence; clients must handle device responses and rate limits. | Application integration, automation, and structured configuration management. |
| [CoLa Interface](./cola-interface.md) | SICK command interface for communicating with and configuring the sensor. | Useful for existing CoLa-based integrations and command-level access to device functions. | Requires handling CoLa commands and telegram formats; less convenient than REST for JSON-based application workflows. | PLCs, legacy integrations, or systems already using CoLa. |
| [Backup & Restore](./configuration-backup-and-restore.md) | Save or restore a complete device configuration as a file, through the GUI or REST API. | Supports rollback and deployment of a validated configuration to matching sensors; file encryption is available. | Restore is a whole-configuration operation; transfer authentication and status polling differ by family, and backups should only be restored to matching device types. | Snapshots, recovery, and replicating settings across identical devices. |
| [HTTPS & Certificates](./https-and-certificates.md) | Enable TLS for the device REST interface by installing a valid certificate bundle. | Encrypts API traffic and lets clients verify the sensor's identity when the certificate chain is trusted. | Requires creating, installing, and maintaining a certificate and private key; mutual TLS is not supported. | Protecting REST communication on networks where traffic confidentiality and server verification are required. |
| [Third-Party Tools](./third-party-tools.md) | Insomnia and Postman REST clients for importing the OpenAPI description and trying endpoints interactively. | Prepare requests from OpenAPI; Insomnia's SICK plug-in and Postman's pre-request script can calculate challenge-response authentication for writes. | Requires desktop-client setup and careful credential handling; Postman's documented setup is for evaluation and must be reviewed before production. | Exploring the API, manually testing requests, demonstrations, and prototyping REST automation. |

The REST interface is the underlying API used by these clients; they help
explore and test it but are not separate device protocols.
Use Backup & Restore for whole-device configuration snapshots, HTTPS to
protect REST traffic, and CoLa when an existing integration depends on it.
