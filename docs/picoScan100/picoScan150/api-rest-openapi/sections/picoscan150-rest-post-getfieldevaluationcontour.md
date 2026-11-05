# POST /GetFieldEvaluationContour

> picoScan150 API | REST | OpenAPI › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-post-getfieldevaluationcontour

Returns the contour of an existing field.

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
    "EvaluationId": "<integer>"
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

`EvaluationId`

**Type:** integer · **Format:** uint16

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader)

 |
| --- | --- |
| `data` |

`Contour`

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**
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
