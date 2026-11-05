# GET /EtherAuxEnabled

> picoScan150 API | REST | OpenAPI › Cybersecurity

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-get-etherauxenabled

Enables/disables the legacy interface CoLa A/B. If enabled CoLa A uses port 2111 and CoLa B uses 2112.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherAuxEnabled"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherAuxEnabled`

**Type:** boolean · **Default:** true

 |
