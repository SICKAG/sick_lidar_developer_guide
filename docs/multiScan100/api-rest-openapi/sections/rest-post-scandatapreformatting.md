# POST /ScanDataPreformatting

> multiScan100 API | REST | OpenAPI V2.5.0 › Measurement data output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-scandatapreformatting

Returns/sets the azimuth reordering mode for the layers. In Raw mode, no reordering is performed. In Rectified mode, the layers are reordered so that their azimuth angle ranges match as closely as possible.

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
    "ScanDataPreformatting": 1
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**
| `header` |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-postbodyheader)

 |
| --- | --- |
| `data` |

`ScanDataPreformatting`

**Allowed values:**

```
[
  1,
  2
]
```

**Type:** integer · **Default:** 1

Mapping:
 * 1 - Raw
 * 2 - Rectified

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)
