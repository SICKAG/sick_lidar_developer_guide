# POST /SyncMode

> LRS4000 API | REST | OpenAPI V1.10.0 › Motor synchronization

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-syncmode

synchronisation mode e.g. no synchronisation, hardware synchronisation, CAN synchronisation or CLOCK synchronisation (LRS4000 only supports Clock-Sync and wire sync).

**Editable JSON template**

```json
{
  "header": {
    "nonce": "<nonce from authentication>",
    "opaque": "<opaque from authentication>",
    "realm": "SICK Sensor",
    "response": "<response from authentication>",
    "user": "Run"
  },
  "data": {
    "SyncMode": 0
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**
| `header` |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

 |
| --- | --- |
| `data` |

`SyncMode`

**Allowed values:**

```
[
  0,
  1,
  3
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - NO_SYNC
 * 1 - SYNC_BY_WIRE
 * 3 - SYNC_BY_CLOCK

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)
