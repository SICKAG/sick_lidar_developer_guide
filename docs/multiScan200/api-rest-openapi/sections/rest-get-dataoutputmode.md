# GET /dataOutputMode

> multiScan200 API | REST | OpenAPI V1.1.0 › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-dataoutputmode

Returns/sets the data output mode (e.g. Compact format) or disables scan data transmission.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/dataOutputMode"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`dataOutputMode`

**Allowed values:**

```
[
  0,
  1,
  3
]
```

**Type:** integer · **Default:** 1

Mapping:
 * 0 - DISABLED
 * 1 - TCP_COMPACT
 * 3 - NATIVE_ROS_2

 |
