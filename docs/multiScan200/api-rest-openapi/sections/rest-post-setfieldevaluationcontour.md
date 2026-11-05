# POST /SetFieldEvaluationContour

> multiScan200 API | REST | OpenAPI V1.1.0 › Field evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-post-setfieldevaluationcontour

Sets the contour of an existing field.

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
    "EvaluationId": 1,
    "LowerZLimit": 0,
    "UpperZLimit": 0,
    "Points": [
      {
        "x": 0,
        "y": -1000
      },
      {
        "x": 1000,
        "y": -1000
      },
      {
        "x": 1000,
        "y": 1000
      },
      {
        "x": 0,
        "y": 1000
      }
    ]
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

**Example:**

```
{
  "EvaluationId": 1,
  "LowerZLimit": 0,
  "Points": [
    {
      "x": 0,
      "y": -1000
    },
    {
      "x": 1000,
      "y": -1000
    },
    {
      "x": 1000,
      "y": 1000
    },
    {
      "x": 0,
      "y": 1000
    }
  ],
  "UpperZLimit": 0
}
```
| `EvaluationId` |

**Type:** integer

 |
| `Points` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 100

**Items:**
| `x` |

**Type:** integer · **Default:** 0

 |
| `y` |

**Type:** integer

 |

 |
| `LowerZLimit` |

**Type:** integer · **Minimum:** -100000 · **Maximum:** 100000

 |
| --- | --- |
| `UpperZLimit` |

**Type:** integer · **Minimum:** -100000 · **Maximum:** 100000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ErrorCode`

**Allowed values:**

```
[
  0,
  1,
  2,
  3
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - SOPAS_ERR_NO_ERR
 * 1 - SOPAS_ERR_INVALID_EVALUATION_ID
 * 2 - SOPAS_ERR_INVALID_POLYGON
 * 3 - SOPAS_ERR_INVALID_ZLIM

 |
