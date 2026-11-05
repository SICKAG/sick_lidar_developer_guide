# POST /TSCRole

> multiScan100 API | REST | OpenAPI V2.5.0 › Date and system time

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-tscrole

Returns/sets the time synchronization role (none, NTP, or PTP).

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
    "TSCRole": 0
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

`TSCRole`

**Allowed values:**

```
[
  0,
  1,
  3
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - TX_NONE
 * 1 - TX_CLIENT
 * 3 - TX_PTP_SLAVE

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)
