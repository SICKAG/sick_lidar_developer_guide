# GET /MCSenseLevel

> multiScan100 API | REST | OpenAPI V2.5.0 › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-mcsenselevel

Returns/sets the fog filter settings.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/MCSenseLevel"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`MCSenseLevel`

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 1

 |
