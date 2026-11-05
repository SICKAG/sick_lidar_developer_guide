# POST /LFPmedianfilter

> LRS4000 API | REST | OpenAPI V1.10.0 › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-lfpmedianfilter

Returns/sets the median filter settings. This filter smooths the distance values by transmitting just the median value of the last X scans.

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
    "LFPmedianfilter": {
      "bEnable": false,
      "uiMedianWidth": 3
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

`LFPmedianfilter`
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `uiMedianWidth` |

**Type:** integer · **Format:** uint16 · **Default:** 3 · **Minimum:** 3 · **Maximum:** 3

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)
