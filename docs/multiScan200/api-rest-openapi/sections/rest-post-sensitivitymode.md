# POST /SensitivityMode

> multiScan200 API | REST | OpenAPI V1.1.0 › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-post-sensitivitymode

Returns/sets the sensitivity of the receiver unit.

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
    "SensitivityMode": 1
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

`SensitivityMode`

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Default:** 1

Mapping:
 * 0 - MAXIMUM_ROBUSTNESS
 * 1 - STANDARD
 * 2 - MAXIMUM_DETECTIVITY

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)
