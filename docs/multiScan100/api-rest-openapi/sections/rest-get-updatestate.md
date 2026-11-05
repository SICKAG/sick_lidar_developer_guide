# GET /UpdateState

> multiScan100 API | REST | OpenAPI V2.5.0 › Firmware update

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-updatestate

Returns the state of the update process.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/UpdateState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`UpdateState`

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
 * 0 - Initial
 * 1 - Started
 * 2 - Finished
 * 3 - Error

 |
