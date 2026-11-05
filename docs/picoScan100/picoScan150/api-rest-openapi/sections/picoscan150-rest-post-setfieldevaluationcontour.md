# POST /SetFieldEvaluationContour

> picoScan150 API | REST | OpenAPI › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-post-setfieldevaluationcontour

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
    "user": "Run"
  },
  "data": {
    "EvaluationId": "<integer>",
    "Points": [],
    "LowerZLimit": "<integer>",
    "UpperZLimit": "<integer>"
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
| `EvaluationId` |

**Type:** integer · **Format:** uint16

 |
| `Points` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 100

**Items:**
| `x` |

**Type:** integer · **Format:** int32 · **Default:** 0

 |
| `y` |

**Type:** integer · **Format:** int32 · **Default:** 0

 |

 |
| `LowerZLimit` |

**Type:** integer · **Format:** int32 · **Minimum:** -100000 · **Maximum:** 100000

 |
| --- | --- |
| `UpperZLimit` |

**Type:** integer · **Format:** int32 · **Minimum:** -100000 · **Maximum:** 100000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - SOPAS_ERR_NO_ERR
 * 1 - SOPAS_ERR_INVALID_EVALUATION_ID
 * 2 - SOPAS_ERR_INVALID_POLYGON
 * 3 - SOPAS_ERR_INVALID_ZLIM

 |
