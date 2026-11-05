# GET /ScanDataEnable

> picoScan120 API | REST | OpenAPI › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-scandataenable

Enables/disables the measurement data streaming. The measurement data itself is sent via a UDP-based SICK-specific format. A Python example can be found at https://github.com/SICKAG/ScanSegmentAPI.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ScanDataEnable"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`ScanDataEnable`

**Type:** boolean · **Default:** false

 |
