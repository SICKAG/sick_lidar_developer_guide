# GET /particleFilter

> multiScan200 API | REST | OpenAPI V1.1.0 › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-particlefilter

Returns/sets the particle filter settings. Filters out disturbances in the measurement data caused by particles such as dust, snow, or similar.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/particleFilter"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `enable` |

**Type:** boolean · **Default:** false

 |
| `minNumberOfNeighbors` |

**Type:** integer · **Default:** 1 · **Maximum:** 8

 |
| `distanceThreshold` |

**Type:** integer · **Default:** 500 · **Minimum:** 20 · **Maximum:** 2000

 |

 |
