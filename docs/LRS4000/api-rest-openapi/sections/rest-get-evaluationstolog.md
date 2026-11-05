# GET /EvaluationsToLog

> LRS4000 API | REST | OpenAPI V1.10.0 › Detection History

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-evaluationstolog

Returns/sets the evaluations which are logged (if they are in use).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EvaluationsToLog"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EvaluationsToLog`

**Type:** array · **Minimum items:** 48 · **Maximum items:** 48

**Items:**

**Type:** boolean · **Default:** true

 |
