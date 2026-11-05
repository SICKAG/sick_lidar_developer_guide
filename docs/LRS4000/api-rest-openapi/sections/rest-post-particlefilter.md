# POST /ParticleFilter

> LRS4000 API | REST | OpenAPI V1.10.0 › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-particlefilter

Returns/sets the particle filter settings. Filters out disturbances in the measurement data caused by particles such as dust, snowflakes, or similar. Configure the minimal threshold of the required distance step (mm) between the echo to be filtered and the echoes of surrounding beam angles.

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
    "ParticleFilter": {
      "bEnable": false,
      "uiThreshold": 1000
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

`ParticleFilter`
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `uiThreshold` |

**Type:** integer · **Format:** uint16 · **Default:** 1000 · **Minimum:** 500 · **Maximum:** 5000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)
