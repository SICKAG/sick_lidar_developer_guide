# PUT /parameterbackup

> multiScan100 API | REST | OpenAPI V2.5.0 › Backup/Restore

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-put-parameterbackup

Downloads the parameter backup file (.json) from the device or uploads it to the device.

See [Configuration Backup and Restore](https://sickag.github.io/sick_lidar_developer_guide/configuration/configuration-backup-and-restore/) for the parameter backup workflow.

This operation uploads a file or uses a non-JSON body. Use the request media type and upload fields below.

**Request body**

**Media type: `multipart/form-data`**

`datei`

**Type:** string · **Format:** binary

Json-Datei

**Responses**

**Status `200`**
