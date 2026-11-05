# GET /FieldEvaluationApplicationState

> multiScan200 API | REST | OpenAPI V1.1.0 › Field evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-fieldevaluationapplicationstate

Returns the state (DEACTIVATED, ACTIVE, CONFIGURING, ERROR) of the field evaluation.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/FieldEvaluationApplicationState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`FieldEvaluationApplicationState`

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
 * 0 - DEACTIVATED
 * 1 - ACTIVE
 * 2 - CONFIGURING
 * 3 - ERROR

 |
