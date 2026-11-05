# POST /LFPradialDistanceRangeFilter

> multiScan100 API | REST | OpenAPI V2.5.0 › Region of interest

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-lfpradialdistancerangefilter

Returns/sets the scanning range filter settings. The filter restricts distance measurements to a specified range. Measurements outside the specified range are assigned a distance and RSSI value of 0.

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
    "LFPradialDistanceRangeFilter": {
      "bEnable": false,
      "ulDistMin": 0,
      "ulDistMax": 20000
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

`LFPradialDistanceRangeFilter`
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `ulDistMin` |

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 200000

 |
| `ulDistMax` |

**Type:** integer · **Default:** 20000 · **Minimum:** 0 · **Maximum:** 200000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)
