# POST /EtherDHCPFallback

> multiScan100 API | REST | OpenAPI V2.5.0 › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-etherdhcpfallback

Returns/sets the mode for the DHCP fallback (retry or static).

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
    "EtherDHCPFallback": 0
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

`EtherDHCPFallback`

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - TX_USE_STATIC_IP
 * 1 - TX_RETRY_DHCP

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)
