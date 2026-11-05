# POST /DoDiagnosisDump

> multiScan200 API | REST | OpenAPI V1.1.0 › Diagnostics

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-post-dodiagnosisdump

Creates a diagnostic file (zip file) for further analysis.

This function requires at least user level: Service.

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
    "DoRunlevelLoop": true,
    "Output": "file"
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

**Example:**

```
{
  "DoRunlevelLoop": true,
  "Output": "file"
}
```
| `DoRunlevelLoop` |

**Type:** boolean · **Default:** false

 |
| `Output` |

**Type:** string · **Default:**   · **Maximum length:** 64

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`Successful`

**Type:** boolean · **Default:** false

 |
