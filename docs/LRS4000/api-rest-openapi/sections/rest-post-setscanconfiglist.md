# POST /SetScanConfigList

> LRS4000 API | REST | OpenAPI V1.10.0 › Basic settings

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-setscanconfiglist

Set a new device scan resolution/frequency combination. Please note that configurations, starting with value 3x or 9x switch the device from standard to extended range mode and values starting with x, 1x, 6x, 7x switch the device from extended range to normal mode.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

 |
| --- | --- |
| `data` |

**Example:**

```
{
  "ScanConfigList": 1
}
```

`ScanConfigList`

**Fields:** [PerformanceProfiles_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-performanceprofiles-t)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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
  5
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - SCE_OK
 * 1 - SCE_ERROR_FREQ
 * 2 - SCE_ERROR_RES
 * 3 - SCE_ERROR_FREQ_RES_COMB
 * 4 - SCE_ERROR_NUM_RANGE
 * 5 - SCE_ERROR

 |
