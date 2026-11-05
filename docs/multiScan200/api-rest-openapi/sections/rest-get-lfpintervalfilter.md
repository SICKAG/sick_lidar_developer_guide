# GET /LFPintervalFilter

> multiScan200 API | REST | OpenAPI V1.1.0 › Data Reduction

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-lfpintervalfilter

Returns/sets the interval filter settings. The filter reduces the scan output rate by a given factor.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LFPintervalFilter"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `uiReductionFactor` |

**Type:** integer · **Default:** 2 · **Minimum:** 2 · **Maximum:** 50

 |

 |
