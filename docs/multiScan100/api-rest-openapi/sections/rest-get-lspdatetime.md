# GET /LSPdatetime

> multiScan100 API | REST | OpenAPI V2.5.0 › Date and system time

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-lspdatetime

Returns the current time of the device (years, months, days, hours, minutes, seconds, microseconds).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LSPdatetime"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`LSPdatetime`

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-datetime-t)

 |
