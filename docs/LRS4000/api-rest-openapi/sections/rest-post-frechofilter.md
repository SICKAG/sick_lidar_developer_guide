# POST /FREchoFilter

> LRS4000 API | REST | OpenAPI V1.10.0 › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-frechofilter

Returns/sets the multi-echo filter settings. Depending on the environment the sensor receives several measurement points on the same angular step (multi-echo). The filter can filter out the first echo, the last echo or all echoes.

**Editable JSON template**

```json
{
  "header": {
    "nonce": "<nonce from authentication>",
    "opaque": "<opaque from authentication>",
    "realm": "SICK Sensor",
    "response": "<response from authentication>",
    "user": "Run"
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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

 |
| --- | --- |
| `data` |

`FREchoFilter`

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Format:** uint8 · **Default:** 2

Mapping:
 * 0 - FIRST_ECHO
 * 1 - ALL_ECHOS
 * 2 - LAST_ECHO

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)
