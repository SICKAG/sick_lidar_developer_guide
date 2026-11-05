# GET /EncResolution

> picoScan150 API | REST | OpenAPI › Encoder Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-get-encresolution

Enables/disables the use of the 2nd reference signal (Port4).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EncResolution"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader)

 |
| --- | --- |
| `data` |

`EncResolution`

**Type:** number · **Format:** float · **Default:** 1.0 · **Minimum:** 0.001 · **Maximum:** 2000.0

 |
