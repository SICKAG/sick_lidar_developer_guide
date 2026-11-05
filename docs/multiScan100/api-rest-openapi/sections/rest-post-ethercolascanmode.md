# POST /EtherCoLaScanMode

> multiScan100 API | REST | OpenAPI V2.5.0 › Legacy protocols

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-ethercolascanmode

Configures the device search by SICK tools. If disabled, finding the device via device search and changing the IP address via SICK tools is not possible.

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
    "EtherCoLaScanMode": 3
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**
| `header` |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-postbodyheader)

 |
| --- | --- |
| `data` |

`EtherCoLaScanMode`

**Allowed values:**

```
[
  0,
  1,
  2,
  3
]
```

**Type:** integer · **Default:** 3

Mapping:
 * 0 - ENABLED
 * 1 - IP_CONFIG_DISABLED
 * 2 - DISABLED
 * 3 - IP_CONFIG_TIME_LIMIT

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)
