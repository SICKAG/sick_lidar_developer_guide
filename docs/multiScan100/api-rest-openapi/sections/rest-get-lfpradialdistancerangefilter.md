# GET /LFPradialDistanceRangeFilter

> multiScan100 API | REST | OpenAPI V2.5.0 › Region of interest

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-lfpradialdistancerangefilter

Returns/sets the scanning range filter settings. The filter restricts distance measurements to a specified range. Measurements outside the specified range are assigned a distance and RSSI value of 0.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LFPradialDistanceRangeFilter"
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
| `ulDistMin` |

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 200000

 |
| `ulDistMax` |

**Type:** integer · **Default:** 20000 · **Minimum:** 0 · **Maximum:** 200000

 |

 |
