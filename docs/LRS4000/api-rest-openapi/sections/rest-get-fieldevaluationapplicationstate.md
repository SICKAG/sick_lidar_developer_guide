# GET /FieldEvaluationApplicationState

> LRS4000 API | REST | OpenAPI V1.10.0 › Field evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-fieldevaluationapplicationstate

Get the field evaluation application state. It returns the information whether the field evaluation application is active, configuring or deactivated. 0 - Deactivated - no evaluation is set up. 1 - Activated - at least one active evaluation (group activation has no influence on that). 2 - Configuring - new calculation of the e.g. field geometries.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/FieldEvaluationApplicationState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - DEACTIVATED
 * 1 - ACTIVE
 * 2 - CONFIGURING
 * 3 - ERROR

 |
