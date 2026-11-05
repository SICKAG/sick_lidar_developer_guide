# GET /LFPintervalFilter

> picoScan150 API | REST | OpenAPI › Data Reduction

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-get-lfpintervalfilter

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader)

 |
| --- | --- |
| `data` |
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `uiReductionFactor` |

**Type:** integer · **Format:** int32 · **Default:** 2 · **Minimum:** 2 · **Maximum:** 50

 |

 |
