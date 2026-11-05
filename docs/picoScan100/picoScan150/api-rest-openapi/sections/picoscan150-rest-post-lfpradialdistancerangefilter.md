# POST /LFPradialDistanceRangeFilter

> picoScan150 API | REST | OpenAPI › Range Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-post-lfpradialdistancerangefilter

Returns/sets the scanning range filter settings. Restriction of the distance measurements to a specified distance range. Measurement distances outside of the specified range are assigned the distance and RSSI value 0.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-postbodyheader)

 |
| --- | --- |
| `data` |

`LFPradialDistanceRangeFilter`
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `ulDistMin` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** 0 · **Maximum:** 200000

 |
| `ulDistMax` |

**Type:** integer · **Format:** int32 · **Default:** 200000 · **Minimum:** 0 · **Maximum:** 200000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader)
