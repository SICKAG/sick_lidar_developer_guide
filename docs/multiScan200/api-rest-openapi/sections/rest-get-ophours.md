# GET /OpHours

> multiScan200 API | REST | OpenAPI V1.1.0 › Operating Data

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-ophours

Returns the total number of operating hours during the lifetime of the device. The resolution is 1/10 hour.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/OpHours"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`OpHours`

**Type:** integer · **Default:** 0

 |
