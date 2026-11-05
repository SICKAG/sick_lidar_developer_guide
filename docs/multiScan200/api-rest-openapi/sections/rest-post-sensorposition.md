# POST /SensorPosition

> multiScan200 API | REST | OpenAPI V1.1.0 › Mounting Position

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-post-sensorposition

Returns/sets the mounting position.

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
    "SensorPosition": {
      "x": 0,
      "y": 0,
      "z": 0,
      "yaw": 0,
      "pitch": 0,
      "roll": 0
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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-postbodyheader)

 |
| --- | --- |
| `data` |

`SensorPosition`
| `x` |

**Type:** integer · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `y` |

**Type:** integer · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `z` |

**Type:** integer · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `yaw` |

**Type:** integer · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |
| `pitch` |

**Type:** integer · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |
| `roll` |

**Type:** integer · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)
