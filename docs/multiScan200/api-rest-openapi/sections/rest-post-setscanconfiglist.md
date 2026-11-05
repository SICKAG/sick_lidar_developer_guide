# POST /SetScanConfigList

> multiScan200 API | REST | OpenAPI V1.1.0 › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-post-setscanconfiglist

Sets the scan configuration profile (field of view, scanning frequency and angular resolution).

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
    "ScanConfigList": 1
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

`ScanConfigList`

**Fields:** [PerformanceProfiles_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-performanceprofiles-t)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`eScanConfigError`

**Allowed values:**

```
[
  0,
  1,
  2,
  3,
  4,
  5,
  6
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - SCE_OK
 * 1 - SCE_ERROR_FREQ
 * 2 - SCE_ERROR_RES
 * 3 - SCE_ERROR_FREQ_RES_COMB
 * 4 - SCE_ERROR_NUM_RANGE
 * 5 - SCE_ERROR
 * 6 - SCE_ERROR_NO_LICENSE

 |
