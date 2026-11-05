# GET /groundFilterThresholds

> multiScan100 API | REST | OpenAPI V2.5.0 › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-groundfilterthresholds

Returns/sets the ground filter thresholds.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/groundFilterThresholds"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `minimumDistance` |

**Type:** integer · **Default:** -100 · **Minimum:** -10000 · **Maximum:** 0

 |
| `maximumDistance` |

**Type:** integer · **Default:** 100 · **Minimum:** 0 · **Maximum:** 10000

 |

 |
