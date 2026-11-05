# POST /SetPassword

> LRS4000 API | REST | OpenAPI V1.10.0 › General

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-setpassword

Sets the password for the CoLa A/B interface. In this example the password for userlevel service (4) is set to - test - (Integer value of the password hash - test -). For more details see https://github.com/SICKAG/sick_scan_rest_client.

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

**Type:** integer · **Format:** int8

 |
| --- | --- |
| `udiNewPassword` |

**Type:** integer · **Format:** uint32

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`bSuccess`

**Type:** boolean · **Default:** false

 |
