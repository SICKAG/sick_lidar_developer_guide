# POST /GetFieldEvaluationContour

> multiScan100 API | REST | OpenAPI V2.5.0 › Field evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-getfieldevaluationcontour

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
    "user": "AuthorizedClient"
  },
  "data": {
    "EvaluationId": 1
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

**Example:**

```
{
  "EvaluationId": 1
}
```

`EvaluationId`

**Type:** integer

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Default:** 0

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
