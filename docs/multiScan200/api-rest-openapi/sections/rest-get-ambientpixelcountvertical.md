# GET /ambientPixelCountVertical

> multiScan200 API | REST | OpenAPI V1.1.0 › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-ambientpixelcountvertical

Returns/sets the vertical ambient pixel count.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ambientPixelCountVertical"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ambientPixelCountVertical`

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Default:** 1

Mapping:
 * 0 - FULL
 * 1 - MATCHING

 |
