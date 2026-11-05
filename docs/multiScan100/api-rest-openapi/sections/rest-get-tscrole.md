# GET /TSCRole

> multiScan100 API | REST | OpenAPI V2.5.0 › Date and system time

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-tscrole

Returns/sets the time synchronization role (none, NTP, or PTP).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/TSCRole"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`TSCRole`

**Allowed values:**

```
[
  0,
  1,
  3
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - TX_NONE
 * 1 - TX_CLIENT
 * 3 - TX_PTP_SLAVE

 |
