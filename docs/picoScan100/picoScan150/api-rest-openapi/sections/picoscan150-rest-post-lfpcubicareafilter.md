# POST /LFPcubicareafilter

> picoScan150 API | REST | OpenAPI › Range Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-post-lfpcubicareafilter

Returns/sets the cuboid area filter settings. The cuboid area filter limits the measurement data to a box defined by its extension in the x- and y-axis.

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
    "LFPcubicareafilter": {
      "bEnable": false,
      "lXMin": 0,
      "lXMax": 5000,
      "lYMin": -5000,
      "lYMax": 5000,
      "lZMin": -5,
      "lZMax": 5
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

`LFPcubicareafilter`
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `lXMin` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lXMax` |

**Type:** integer · **Format:** int32 · **Default:** 5000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lYMin` |

**Type:** integer · **Format:** int32 · **Default:** -5000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lYMax` |

**Type:** integer · **Format:** int32 · **Default:** 5000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lZMin` |

**Type:** integer · **Format:** int32 · **Default:** -5 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lZMax` |

**Type:** integer · **Format:** int32 · **Default:** 5 · **Minimum:** -200000 · **Maximum:** 200000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader)
