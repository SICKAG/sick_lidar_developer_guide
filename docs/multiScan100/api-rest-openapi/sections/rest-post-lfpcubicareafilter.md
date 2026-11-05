# POST /LFPcubicareafilter

> multiScan100 API | REST | OpenAPI V2.5.0 › Region of interest

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-lfpcubicareafilter

Returns/sets the cuboid area filter settings. The cuboid area filter limits the measurement data box defined by its extension along the x- and y-axes.

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
    "LFPcubicareafilter": {
      "bEnable": false,
      "lXMin": -20000,
      "lXMax": 20000,
      "lYMin": -20000,
      "lYMax": 20000,
      "lZMin": -20000,
      "lZMax": 20000
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

`LFPcubicareafilter`
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `lXMin` |

**Type:** integer · **Default:** -20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lXMax` |

**Type:** integer · **Default:** 20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lYMin` |

**Type:** integer · **Default:** -20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lYMax` |

**Type:** integer · **Default:** 20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lZMin` |

**Type:** integer · **Default:** -20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lZMax` |

**Type:** integer · **Default:** 20000 · **Minimum:** -200000 · **Maximum:** 200000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)
