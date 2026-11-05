# GET /ScanDataFormat

> LRS4000 API | REST | OpenAPI V1.10.0 › Data output

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-scandataformat

Returns/sets the scan data format (e.g. Compact format) or disable scan data transmission.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ScanDataFormat"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ScanDataFormat`

**Allowed values:**

```
[
  0,
  2,
  3
]
```

**Type:** integer · **Format:** uint8 · **Default:** 3

Mapping:
 * 0 - Deactivated
 * 2 - Compact
 * 3 - LMDscandata

 |
