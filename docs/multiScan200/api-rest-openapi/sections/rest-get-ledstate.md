# GET /LEDState

> multiScan200 API | REST | OpenAPI V1.1.0 › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-ledstate

Returns the LED status.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LEDState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`LEDState`

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 8

**Items:**

**Fields:** [LedStateType](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-ledstatetype)

 |
