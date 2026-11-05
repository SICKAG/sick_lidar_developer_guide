# GET /DeviceTime

> LRS4000 API | REST | OpenAPI V1.10.0 › Date and system time

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-devicetime

Returns the current time of the internal clock (ms). The timer is 32 bit counter with a resolution of 1 ms.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/DeviceTime"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`DeviceTime`

**Type:** integer · **Format:** uint32 · **Default:** 0

 |
