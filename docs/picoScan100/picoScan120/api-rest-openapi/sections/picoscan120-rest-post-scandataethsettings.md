# POST /ScanDataEthSettings

> picoScan120 API | REST | OpenAPI › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-scandataethsettings

Returns/sets the destination IP address settings for measurement data streaming (UDP).

This function requires at least user level: Authorized Client.

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
    "ScanDataEthSettings": {
      "Protocol": 1,
      "IPAddress": [
        192,
        168,
        0,
        100
      ],
      "Port": 2115
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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

 |
| --- | --- |
| `data` |

`ScanDataEthSettings`
| `Protocol` |

**Allowed values:**

```
[
  1,
  2
]
```

**Type:** integer · **Format:** uint8 · **Default:** 1

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

**Type:** integer · **Format:** uint8

 |
| `Port` |

**Type:** integer · **Format:** uint16 · **Default:** 2115

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)
