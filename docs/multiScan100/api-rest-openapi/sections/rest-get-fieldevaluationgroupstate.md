# GET /FieldEvaluationGroupState

> multiScan100 API | REST | OpenAPI V2.5.0 › Field evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-fieldevaluationgroupstate

Returns the activation condition for all existing field evaluation groups (not configured, active, or inactive).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/FieldEvaluationGroupState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`FieldEvaluationGroupState`

**Type:** array · **Minimum items:** 48 · **Maximum items:** 48

**Items:**

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
 * 0 - NOT_CONFIGURED
 * 1 - ACTIVE
 * 2 - INACTIVE

 |
