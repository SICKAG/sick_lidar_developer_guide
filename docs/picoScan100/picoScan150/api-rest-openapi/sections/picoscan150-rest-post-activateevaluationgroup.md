# POST /ActivateEvaluationGroup

> picoScan150 API | REST | OpenAPI › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-post-activateevaluationgroup

Sets the activation condition for all existing evaluation groups (not configured, active, or inactive).

**JSON example**

```json
{
  "data": {
    "List": []
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`data`

`List`

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**
| `GroupId` |

**Type:** integer · **Format:** uint16 · **Default:** 1 · **Minimum:** 1 · **Maximum:** 48

 |
| --- | --- |
| `Activate` |

**Type:** boolean · **Default:** false

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader)

 |
| --- | --- |
| `data` |

`Success`

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

**Type:** boolean · **Default:** false

 |
