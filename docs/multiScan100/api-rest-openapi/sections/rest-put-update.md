# PUT /update

> multiScan100 API | REST | OpenAPI V2.5.0 › Firmware update

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-put-update

Uploads a firmware file (.spk) to the device. The maximum file size is 100 MB.

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
