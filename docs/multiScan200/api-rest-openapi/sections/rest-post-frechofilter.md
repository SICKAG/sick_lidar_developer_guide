# POST /FREchoFilter

> multiScan200 API | REST | OpenAPI V1.1.0 › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-post-frechofilter

Returns/sets the multi-echo filter settings. Depending on the environment the sensor receives several measurement points on the same angular step (multi-echo).

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
    "FREchoFilter": 2
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

`FREchoFilter`

**Allowed values:**

```
[
  0,
  1,
  2,
  3,
  4
]
```

**Type:** integer · **Default:** 2

Mapping:
 * 0 - FIRST_ECHO
 * 1 - ALL_ECHOS
 * 2 - LAST_ECHO
 * 3 - STRONGEST_ECHO
 * 4 - ALL_ECHOS_STRONGEST_FIRST

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)
