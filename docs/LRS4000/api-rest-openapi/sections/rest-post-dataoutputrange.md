# POST /DataOutputRange

> LRS4000 API | REST | OpenAPI V1.10.0 › Data output

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-dataoutputrange

Select the start and stop angle of the measurement data output for the currently active configuration. Once a valid configuration is set, the device will transmit valid distance values between the selected start and stop angle and for all other angles zero values. The amount of transmitted data will not be reduced by using this function.

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
    "DataOutputRange": {
      "uiLength": 1,
      "aRange": [
        {
          "udiAngleRes": 1200,
          "diStartAngle": -1800000,
          "diStopAngle": 1800000
        }
      ]
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

`DataOutputRange`
| `uiLength` |

**Type:** integer · **Format:** uint16 · **Default:** 1 · **Minimum:** 1 · **Maximum:** 1

 |
| `aRange` |

**Type:** array · **Minimum items:** 1 · **Maximum items:** 1

**Items:**
| `udiAngleRes` |

**Type:** integer · **Format:** uint32 · **Default:** 1200 · **Minimum:** 200 · **Maximum:** 4800

 |
| `diStartAngle` |

**Type:** integer · **Format:** int32 · **Default:** -1800000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `diStopAngle` |

**Type:** integer · **Format:** int32 · **Default:** 1800000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)
