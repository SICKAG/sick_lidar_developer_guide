# GET /ContaminationActiveSectors

> multiScan200 API | REST | OpenAPI V1.1.0 › Contamination indication

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-contaminationactivesectors

Element i is true, if the sector result i is included in the computation of the contamination results and false otherwise.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ContaminationActiveSectors"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ContaminationActiveSectors`

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 12

**Items:**

**Type:** boolean · **Default:** false

 |
