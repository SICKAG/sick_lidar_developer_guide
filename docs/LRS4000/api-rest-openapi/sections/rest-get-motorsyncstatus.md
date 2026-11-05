# GET /MotorSyncStatus

> LRS4000 API | REST | OpenAPI V1.10.0 › Motor synchronization

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-motorsyncstatus

Check if PTP master and slave are synced.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/MotorSyncStatus"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`MotorSyncStatus`

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - NO_CLOCK_AND_ROT_SYNC
 * 1 - ONLY_TIME_SYNCED
 * 2 - SYNCED

 |
