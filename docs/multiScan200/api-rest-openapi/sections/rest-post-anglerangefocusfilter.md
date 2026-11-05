# POST /angleRangeFocusFilter

> multiScan200 API | REST | OpenAPI V1.1.0 › Data Reduction

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-post-anglerangefocusfilter

Returns/sets the angle range focus filter settings.

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
    "angleRangeFocusFilter": {
      "enable": false,
      "thetaStart": -900000,
      "thetaStop": 900000,
      "phiStart": -250000,
      "phiStop": 250000,
      "thetaIndexIncrement": 1,
      "phiIndexIncrement": 1,
      "focusRegion": {
        "enable": false,
        "direction": 0,
        "thetaStart": -450000,
        "thetaStop": 450000,
        "phiStart": -100000,
        "phiStop": 100000
      }
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

`angleRangeFocusFilter`
| `enable` |

**Type:** boolean · **Default:** false

 |
| `thetaStart` |

**Type:** integer · **Default:** -900000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `thetaStop` |

**Type:** integer · **Default:** 900000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `phiStart` |

**Type:** integer · **Default:** -250000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `phiStop` |

**Type:** integer · **Default:** 250000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `thetaIndexIncrement` |

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 50

 |
| `phiIndexIncrement` |

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 50

 |
| `focusRegion` |
| `enable` |

**Type:** boolean · **Default:** false

 |
| `direction` |

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - HORIZONTAL
 * 1 - VERTICAL

 |
| `thetaStart` |

**Type:** integer · **Default:** -450000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `thetaStop` |

**Type:** integer · **Default:** 450000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `phiStart` |

**Type:** integer · **Default:** -100000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `phiStop` |

**Type:** integer · **Default:** 100000 · **Minimum:** -900000 · **Maximum:** 900000

 |

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)
