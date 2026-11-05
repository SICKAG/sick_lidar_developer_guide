# GET /ScanDataEnable

> multiScan100 API | REST | OpenAPI V2.5.0 › Measurement data output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-scandataenable

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ScanDataEnable`

**Type:** boolean · **Default:** false

 |
