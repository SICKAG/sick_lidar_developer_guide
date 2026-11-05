# GET /OpHours

> multiScan100 API | REST | OpenAPI V2.5.0 › Operating data

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-ophours

Returns the total number of operating hours during the lifetime of the device. The resolution is one-tenth of an hour.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/OpHours"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`OpHours`

**Type:** integer · **Default:** 0

 |
