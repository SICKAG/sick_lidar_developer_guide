# GET /LFPradialDistanceRangeFilter

> picoScan150 API | REST | OpenAPI › Range Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-get-lfpradialdistancerangefilter

Returns/sets the scanning range filter settings. Restriction of the distance measurements to a specified distance range. Measurement distances outside of the specified range are assigned the distance and RSSI value 0.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LFPradialDistanceRangeFilter"
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
| `ulDistMin` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** 0 · **Maximum:** 200000

 |
| `ulDistMax` |

**Type:** integer · **Format:** int32 · **Default:** 200000 · **Minimum:** 0 · **Maximum:** 200000

 |

 |
