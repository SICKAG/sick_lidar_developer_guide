# POST /compactTelegramType6Content

> multiScan200 API | REST | OpenAPI V1.1.0 › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-post-compacttelegramtype6content

Return/sets the optional channels in the scan data compact telegram type 6 (muls270 specific compact format.).

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
    "compactTelegramType6Content": {
      "includeRssi": true,
      "includeProperties": false,
      "includeAmbientLight": true,
      "reserved": false
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

`compactTelegramType6Content`
| `includeRssi` |

**Type:** boolean · **Default:** true

 |
| `includeProperties` |

**Type:** boolean · **Default:** false

 |
| `includeAmbientLight` |

**Type:** boolean · **Default:** true

 |
| `reserved` |

**Type:** boolean · **Default:** false

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)
