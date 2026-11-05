# GET /ScanDataPreformatting

> multiScan100 API | REST | OpenAPI V2.5.0 › Measurement data output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-scandatapreformatting

Returns/sets the azimuth reordering mode for the layers. In Raw mode, no reordering is performed. In Rectified mode, the layers are reordered so that their azimuth angle ranges match as closely as possible.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ScanDataPreformatting"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ScanDataPreformatting`

**Allowed values:**

```
[
  1,
  2
]
```

**Type:** integer · **Default:** 1

Mapping:
 * 1 - Raw
 * 2 - Rectified

 |
