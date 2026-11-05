# GET /LFPlayerFilter

> multiScan100 API | REST | OpenAPI V2.5.0 › Data reduction

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-lfplayerfilter

Returns/sets the layer filter settings. The filter removes selected complete layers from the output data.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LFPlayerFilter"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `aLayers` |

**Default:**

```
[
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true
]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 16

**Items:**

**Type:** boolean · **Default:** false

 |

 |
