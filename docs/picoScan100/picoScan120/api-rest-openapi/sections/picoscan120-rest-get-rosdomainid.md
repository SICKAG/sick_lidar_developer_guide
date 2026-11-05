# GET /rosDomainId

> picoScan120 API | REST | OpenAPI › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-rosdomainid

Returns/sets the ROS domain ID used for the ROS 2 communication.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/rosDomainId"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`rosDomainId`

**Type:** integer · **Format:** uint8 · **Default:** 0 · **Maximum:** 232

 |
