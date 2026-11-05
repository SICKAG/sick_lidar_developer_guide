# GET /DailyOpHours

> multiScan100 API | REST | OpenAPI V2.5.0 › Operating data

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-dailyophours

Returns the runtime duration since the last power-on (non-persistent).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/DailyOpHours"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`DailyOpHours`

**Type:** number · **Default:** 0.0

 |
