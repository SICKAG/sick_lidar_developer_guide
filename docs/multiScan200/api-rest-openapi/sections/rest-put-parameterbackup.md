# PUT /parameterbackup

> multiScan200 API | REST | OpenAPI V1.1.0 › General

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-put-parameterbackup

Reads/transfers the backup file (.json) from/to the device.

See [Configuration Backup and Restore](https://sickag.github.io/sick_lidar_developer_guide/configuration/configuration-backup-and-restore/) for the parameter backup workflow.

This operation uploads a file or uses a non-JSON body. Use the request media type and upload fields below.

**Request body**

**Media type: `multipart/form-data`**

`datei`

**Type:** string · **Format:** binary

Json-Datei

**Responses**

**Status `200`**
