# POST /horizontalFieldOfViewCenterAngle

> multiScan200 API | REST | OpenAPI V1.1.0 › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-post-horizontalfieldofviewcenterangle

Returns/sets the horizontal field of view center angle.

This function requires at least user level: Authorized Client.

**Editable JSON template**

```json
{
  "header": {
    "nonce": "<nonce from authentication>",
    "opaque": "<opaque from authentication>",
    "realm": "SICK Sensor",
    "response": "<response from authentication>",
    "user": "AuthorizedClient"
  },
  "data": {
    "horizontalFieldOfViewCenterAngle": 0
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**
| `header` |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-postbodyheader)

 |
| --- | --- |
| `data` |

`horizontalFieldOfViewCenterAngle`

**Type:** integer · **Default:** 0 · **Minimum:** -1800000 · **Maximum:** 1800000

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)
