# GET /EtherSessionTimeout

> picoScan150 API | REST | OpenAPI › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-get-ethersessiontimeout

Returns/sets the session timeout for the LMDscandata output. Be careful with low values as they might cause unexpected disconnections.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherSessionTimeout"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherSessionTimeout`

**Type:** integer · **Format:** uint32 · **Default:** 15000

 |
