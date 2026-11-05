# POST /dataOutputMode

> multiScan200 API | REST | OpenAPI V1.1.0 › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-post-dataoutputmode

Returns/sets the data output mode (e.g. Compact format) or disables scan data transmission.

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
    "dataOutputMode": 1
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

`dataOutputMode`

**Allowed values:**

```
[
  0,
  1,
  3
]
```

**Type:** integer · **Default:** 1

Mapping:
 * 0 - DISABLED
 * 1 - TCP_COMPACT
 * 3 - NATIVE_ROS_2

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)
