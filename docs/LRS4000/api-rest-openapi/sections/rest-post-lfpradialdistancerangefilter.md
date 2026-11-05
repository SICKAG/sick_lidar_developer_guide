# POST /LFPradialDistanceRangeFilter

> LRS4000 API | REST | OpenAPI V1.10.0 › Region of interest

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-lfpradialdistancerangefilter

Returns/sets the scanning range filter settings. Restriction of the distance measurements to a specified distance range. Measurement distances outside of the specified distance are assigned the distance and RSSI value 0.

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
    "LFPradialDistanceRangeFilter": {
      "bEnable": false,
      "ulDistMin": 0,
      "ulDistMax": 200000
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

`LFPradialDistanceRangeFilter`
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `ulDistMin` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** 0 · **Maximum:** 300000

 |
| `ulDistMax` |

**Type:** integer · **Format:** int32 · **Default:** 200000 · **Minimum:** 0 · **Maximum:** 300000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)
