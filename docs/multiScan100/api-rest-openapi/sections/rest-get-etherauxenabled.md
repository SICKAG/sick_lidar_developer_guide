# GET /EtherAuxEnabled

> multiScan100 API | REST | OpenAPI V2.5.0 › Legacy protocols

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-etherauxenabled

Enables/disables the legacy interface CoLa A/B. If enabled, CoLa A uses port 2111 and CoLa B uses port 2112.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherAuxEnabled"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherAuxEnabled`

**Type:** boolean · **Default:** true

 |
