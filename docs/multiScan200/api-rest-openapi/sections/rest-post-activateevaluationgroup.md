# POST /ActivateEvaluationGroup

> multiScan200 API | REST | OpenAPI V1.1.0 › Field evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-post-activateevaluationgroup

Sets the activation condition for all existing evaluation groups (not configured, active, or inactive).

**JSON example**

```json
{
  "data": {
    "List": [
      {
        "GroupId": 1,
        "Activate": true
      },
      {
        "GroupId": 2,
        "Activate": false
      },
      {
        "GroupId": 3,
        "Activate": true
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

`data`

**Example:**

```
{
  "List": [
    {
      "Activate": true,
      "GroupId": 1
    },
    {
      "Activate": false,
      "GroupId": 2
    },
    {
      "Activate": true,
      "GroupId": 3
    }
  ]
}
```

`List`

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**
| `GroupId` |

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 48

 |
| --- | --- |
| `Activate` |

**Type:** boolean · **Default:** false

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

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
