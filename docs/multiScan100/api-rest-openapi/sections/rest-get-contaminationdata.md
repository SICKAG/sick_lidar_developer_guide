# GET /ContaminationData

> multiScan100 API | REST | OpenAPI V2.5.0 › Contamination indication

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-contaminationdata

Returns the contamination state of all contamination sectors.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ContaminationData"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ContaminationData`

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 12

**Items:**

**Allowed values:**

```
[
  0,
  1,
  2,
  3
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - CM_DATA_NONE
 * 1 - CM_DATA_CLEAN
 * 2 - CM_DATA_WARN
 * 3 - CM_DATA_ERROR

 |
