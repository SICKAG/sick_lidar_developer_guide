# GET /EvaluationGroupType

> picoScan150 API | REST | OpenAPI › Field Evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-get-evaluationgrouptype

Returns the evaluation group type, whether it is a field evaluation or a perpendicular distance field.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EvaluationGroupType"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader)

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
