# GET /groundFilterEnable

> multiScan100 API | REST | OpenAPI V2.5.0 › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-groundfilterenable

Returns/sets whether the ground filter is enabled.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/groundFilterEnable"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`groundFilterEnable`

**Type:** boolean · **Default:** false

 |
