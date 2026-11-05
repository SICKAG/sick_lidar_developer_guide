# GET /EvaluationGroupType

> LRS4000 API | REST | OpenAPI V1.10.0 › Field evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-evaluationgrouptype

Reads the evaluation group type whether it's a field evaluation or perpendicular distance.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EvaluationGroupType"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EvaluationGroupType`

**Type:** array · **Minimum items:** 48 · **Maximum items:** 48

**Items:**

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - FIELD_EVALUATION
 * 1 - PERPENDICULAR_DISTANCE

 |
