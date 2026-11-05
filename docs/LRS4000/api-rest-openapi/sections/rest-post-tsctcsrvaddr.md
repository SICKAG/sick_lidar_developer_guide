# POST /TSCTCSrvAddr

> LRS4000 API | REST | OpenAPI V1.10.0 › Date and system time

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-tsctcsrvaddr

Returns/sets the NTP time server's IP address.

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
    "TSCTCSrvAddr": [
      192,
      168,
      0,
      11
    ]
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

`TSCTCSrvAddr`

**Default:**

```
[
  192,
  168,
  0,
  11
]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 4

**Items:**

**Type:** integer · **Format:** uint8

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)
