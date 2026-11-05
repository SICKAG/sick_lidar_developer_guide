# GET /FieldEvaluationResult

> LRS4000 API | REST | OpenAPI V1.10.0 › Field evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-fieldevaluationresult

Returns the state of all possible fields.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/FieldEvaluationResult"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`FieldEvaluationResult`

**Fields:** [FieldEvaluationResult_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-fieldevaluationresult-t)

 |
