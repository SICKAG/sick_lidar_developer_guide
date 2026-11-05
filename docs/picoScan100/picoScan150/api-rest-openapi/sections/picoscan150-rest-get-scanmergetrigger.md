# GET /ScanMergeTrigger

> picoScan150 API | REST | OpenAPI › 3D scan recording

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-get-scanmergetrigger

Returns/sets how the scan merge is triggered (e.g. via method call).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ScanMergeTrigger"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader)

 |
| --- | --- |
| `data` |

`ScanMergeTrigger`

**Allowed values:**

```
[
  0
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - METHOD

 |
