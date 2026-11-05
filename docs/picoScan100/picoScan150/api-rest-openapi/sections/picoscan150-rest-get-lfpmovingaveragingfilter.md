# GET /LFPmovingAveragingFilter

> picoScan150 API | REST | OpenAPI › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-get-lfpmovingaveragingfilter

Returns/sets the mean filter settings. This filter smooths the distance value by calculating the arithmetic mean from the configured number of scans (2..4 scans). Points with zero distance are treated as missing values and are not taken into account for averaging. If all distances considered for averaging have the value 0, the result will be 0 as well.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LFPmovingAveragingFilter"
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
| `uiAveragingDepth` |

**Type:** integer · **Format:** uint16 · **Default:** 3 · **Minimum:** 2 · **Maximum:** 4

 |

 |
