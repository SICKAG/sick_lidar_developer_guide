# POST /GetFieldEvaluationConfiguration

> multiScan200 API | REST | OpenAPI V1.1.0 › Field evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-post-getfieldevaluationconfiguration

Returns the configuration of an existing field.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-postbodyheader)

 |
| --- | --- |
| `data` |

`EvaluationId`

**Type:** integer

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`Configuration`

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**
| `EvaluationId` |

**Type:** integer

 |
| `Name` |

**Type:** string · **Default:**   · **Maximum length:** 20

 |
| `Configuration` |

**Fields:** [Evaluation_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-evaluation-t)

 |

 |
