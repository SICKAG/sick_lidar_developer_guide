# GET /DeviceType

> multiScan200 API | REST | OpenAPI V1.1.0 › Device Information

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-devicetype

Returns the device type.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/DeviceType"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`DeviceType`

**Type:** string · **Default:** multiScan2xx · **Maximum length:** 18

 |
