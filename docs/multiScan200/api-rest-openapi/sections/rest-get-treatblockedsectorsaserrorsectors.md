# GET /treatBlockedSectorsAsErrorSectors

> multiScan200 API | REST | OpenAPI V1.1.0 › Contamination indication

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-treatblockedsectorsaserrorsectors

Returns/sets the state if blocked sectors are treated as blocked or contaminated sectors.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/treatBlockedSectorsAsErrorSectors"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`treatBlockedSectorsAsErrorSectors`

**Type:** boolean · **Default:** false

 |
