# GET /LastParaTime

> LRS4000 API | REST | OpenAPI V1.10.0 › Operating data

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-lastparatime

Returns the last time (e.g. 13:24) when a permanent parameter save was executed.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LastParaTime"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`LastParaTime`

**Type:** string · **Default:** HH:MM · **Maximum length:** 5

 |
