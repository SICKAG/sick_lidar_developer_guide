# POST /setDateTimeUTC

> multiScan200 API | REST | OpenAPI V1.1.0 › Date and System Time

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-post-setdatetimeutc

Preferred method to sets the current time of device in UTC (years, months, days, hours, minutes, seconds, microseconds). Does only work if NTP-Client and PTP is not active.

This function requires at least user level: Authorized Client.

**Editable JSON template**

```json
{
  "header": {
    "nonce": "<nonce from authentication>",
    "opaque": "<opaque from authentication>",
    "realm": "SICK Sensor",
    "response": "<response from authentication>",
    "user": "AuthorizedClient"
  },
  "data": {
    "DateTime": {
      "uiYear": 0,
      "usiMonth": 1,
      "usiDay": 1,
      "usiHour": 0,
      "usiMinute": 0,
      "usiSec": 0,
      "udiUSec": 0
    }
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**
| `header` |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-postbodyheader)

 |
| --- | --- |
| `data` |

`DateTime`

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-datetime-t)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ErrorCode`

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - SOPAS_ERR_NO_ERR
 * 1 - SOPAS_ERR_STATE_CHANGE_NOT_PERMITTED

 |
