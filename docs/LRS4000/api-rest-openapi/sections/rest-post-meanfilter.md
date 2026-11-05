# POST /MeanFilter

> LRS4000 API | REST | OpenAPI V1.10.0 › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-meanfilter

Returns/sets the mean filter settings. This filter smooths the distance value by calculating the arithmetic mean from the configured number of scans.

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
    "MeanFilter": {
      "bEnable": false,
      "uiScanNumber": 10,
      "eFilterMethod": 0
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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

 |
| --- | --- |
| `data` |

`MeanFilter`
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `uiScanNumber` |

**Type:** integer · **Format:** uint16 · **Default:** 10 · **Minimum:** 2 · **Maximum:** 100

 |
| `eFilterMethod` |

**Allowed values:**

```
[
  0
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - ARITHMETIC

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)
