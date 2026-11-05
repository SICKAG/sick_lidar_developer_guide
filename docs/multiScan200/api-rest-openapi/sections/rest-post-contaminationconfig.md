# POST /ContaminationConfig

> multiScan200 API | REST | OpenAPI V1.1.0 › Contamination indication

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-post-contaminationconfig

Returns/sets of the contamination indication settings such as sensitivity, response time, threshold for warning, and active sectors.

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
    "ContaminationConfig": {
      "eStrategy": 0,
      "usiResponseTime": 3,
      "eThreshold": 0,
      "eCover": 0,
      "CustomSectors": [],
      "bEnableWarning": true,
      "bEnableError": true
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

`ContaminationConfig`
| `eStrategy` |

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - CM_STRATEGY_INACTIVE
 * 1 - CM_STRATEGY_HIGH_AVAILABLE
 * 2 - CM_STRATEGY_SENSITIVE

 |
| `usiResponseTime` |

**Type:** integer · **Default:** 3 · **Minimum:** 3 · **Maximum:** 60

 |
| `eThreshold` |

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - CM_LOW
 * 1 - CM_MID
 * 2 - CM_HIGH

 |
| `eCover` |

**Allowed values:**

```
[
  0,
  6,
  255
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - CM_COVER_NONE
 * 6 - CM_COVER
 * 255 - CM_COVER_CUSTOM_SECTORS

 |
| `CustomSectors` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 12

**Items:**

**Type:** boolean · **Default:** true

 |
| `bEnableWarning` |

**Type:** boolean · **Default:** true

 |
| `bEnableError` |

**Type:** boolean · **Default:** true

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)
