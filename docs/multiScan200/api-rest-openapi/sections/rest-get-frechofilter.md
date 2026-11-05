# GET /FREchoFilter

> multiScan200 API | REST | OpenAPI V1.1.0 › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-frechofilter

Returns/sets the multi-echo filter settings. Depending on the environment the sensor receives several measurement points on the same angular step (multi-echo).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/FREchoFilter"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`FREchoFilter`

**Allowed values:**

```
[
  0,
  1,
  2,
  3,
  4
]
```

**Type:** integer · **Default:** 2

Mapping:
 * 0 - FIRST_ECHO
 * 1 - ALL_ECHOS
 * 2 - LAST_ECHO
 * 3 - STRONGEST_ECHO
 * 4 - ALL_ECHOS_STRONGEST_FIRST

 |
