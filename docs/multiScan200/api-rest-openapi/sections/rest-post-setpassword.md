# POST /SetPassword

> multiScan200 API | REST | OpenAPI V1.1.0 › General

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-post-setpassword

Sets the password for the CoLa A/B interface only. For more details see https://github.com/SICKAG/sick_scan_rest_client.

**JSON example**

```json
{
  "data": {
    "siUserLevel": 4,
    "udiNewPassword": 3410122659
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`data`

**Example:**

```
{
  "siUserLevel": 4,
  "udiNewPassword": 3410122659
}
```
| `siUserLevel` |

**Type:** integer

 |
| --- | --- |
| `udiNewPassword` |

**Type:** integer

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`bSuccess`

**Type:** boolean · **Default:** false

 |
