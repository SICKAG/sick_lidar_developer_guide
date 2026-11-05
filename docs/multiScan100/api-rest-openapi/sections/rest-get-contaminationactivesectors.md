# GET /ContaminationActiveSectors

> multiScan100 API | REST | OpenAPI V2.5.0 › Contamination indication

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-contaminationactivesectors

Returns which sectors are included in the contamination result calculation. Each element is true if the corresponding sector is included and false otherwise.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ContaminationActiveSectors"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

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
