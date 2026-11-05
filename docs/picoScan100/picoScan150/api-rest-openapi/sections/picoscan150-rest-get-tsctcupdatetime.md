# GET /TSCTCupdatetime

> picoScan150 API | REST | OpenAPI › Date and System Time

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-get-tsctcupdatetime

Returns/sets the update time of the client.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/TSCTCupdatetime"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader)

 |
| --- | --- |
| `data` |

`TSCTCupdatetime`

**Type:** integer · **Format:** uint32 · **Default:** 600 · **Minimum:** 1 · **Maximum:** 3600

 |
