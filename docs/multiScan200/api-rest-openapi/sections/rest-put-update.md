# PUT /update

> multiScan200 API | REST | OpenAPI V1.1.0 › General

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-put-update

Transfers a firmware file (.spk.signed) from the file location to the device. The maximum possible file size is 100 MB.

See [Firmware Update](https://sickag.github.io/sick_lidar_developer_guide/shared-features/firmware-update/) for the firmware update workflow.

This operation uploads a file or uses a non-JSON body. Use the request media type and upload fields below.

**Request body**

**Media type: `application/octet-stream`**

`data`
| `Type` |

**Type:** string

 |
| --- | --- |
| `Binary` |

**Type:** string

 |

**Responses**

**Status `200`**
