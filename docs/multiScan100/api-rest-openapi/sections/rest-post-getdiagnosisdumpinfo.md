# POST /GetDiagnosisDumpInfo

> multiScan100 API | REST | OpenAPI V2.5.0 › Diagnostic file

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-getdiagnosisdumpinfo

Returns additional metadata about the diagnostic file.

Build the JSON body from the request schema below.

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

**Type:** object · **Nullable:** true

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

**Example:**

```
{
  "DiagDumpExists": true,
  "DiagDumpTimestamp": 247
}
```
| `DiagDumpExists` |

**Type:** boolean · **Default:** false

 |
| `DiagDumpTimestamp` |

**Type:** integer

 |

 |
