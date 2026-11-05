# GET /FREchoFilter

> multiScan100 API | REST | OpenAPI V2.5.0 › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-frechofilter

Returns/sets the multi-echo filter settings. Depending on the environment, the sensor receives several measurement points on the same angular step (multi-echo). The filter can filter out the first echo, the last echo, or all echoes.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/FREchoFilter"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`FREchoFilter`

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Default:** 1

Mapping:
 * 0 - FIRST_ECHO
 * 1 - ALL_ECHOS
 * 2 - LAST_ECHO

 |
