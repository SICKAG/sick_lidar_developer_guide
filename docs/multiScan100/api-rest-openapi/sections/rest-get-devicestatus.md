# GET /DeviceStatus

> multiScan100 API | REST | OpenAPI V2.5.0 › Status

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-devicestatus

Returns the device state (9 possible states).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/DeviceStatus"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`DeviceStatus`

**Fields:** [DeviceStatus](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-devicestatus)

 |
