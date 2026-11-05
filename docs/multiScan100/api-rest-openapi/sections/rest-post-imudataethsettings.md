# POST /ImuDataEthSettings

> multiScan100 API | REST | OpenAPI V2.5.0 › IMU data output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-imudataethsettings

Returns/sets the destination IP address settings for IMU data streaming (UDP).

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
    "ImuDataEthSettings": {
      "Protocol": 1,
      "IPAddress": [
        192,
        168,
        0,
        100
      ],
      "Port": 7503
    }
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

`ImuDataEthSettings`
| `Protocol` |

**Allowed values:**

```
[
  1,
  2
]
```

**Type:** integer · **Default:** 1

Mapping:
 * 1 - UDP
 * 2 - TCP

 |
| `IPAddress` |

**Default:**

```
[
  192,
  168,
  0,
  100
]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 4

**Items:**

**Type:** integer

 |
| `Port` |

**Type:** integer · **Default:** 7503

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)
