# GET /LFPradialDistanceRangeFilter

> LRS4000 API | REST | OpenAPI V1.10.0 › Region of interest

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-lfpradialdistancerangefilter

Returns/sets the scanning range filter settings. Restriction of the distance measurements to a specified distance range. Measurement distances outside of the specified distance are assigned the distance and RSSI value 0.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LFPradialDistanceRangeFilter"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `ulDistMin` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** 0 · **Maximum:** 300000

 |
| `ulDistMax` |

**Type:** integer · **Format:** int32 · **Default:** 200000 · **Minimum:** 0 · **Maximum:** 300000

 |

 |
