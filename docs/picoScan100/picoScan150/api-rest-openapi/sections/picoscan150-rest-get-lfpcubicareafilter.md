# GET /LFPcubicareafilter

> picoScan150 API | REST | OpenAPI › Range Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-get-lfpcubicareafilter

Returns/sets the cuboid area filter settings. The cuboid area filter limits the measurement data to a box defined by its extension in the x- and y-axis.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LFPcubicareafilter"
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
| `lXMin` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lXMax` |

**Type:** integer · **Format:** int32 · **Default:** 5000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lYMin` |

**Type:** integer · **Format:** int32 · **Default:** -5000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lYMax` |

**Type:** integer · **Format:** int32 · **Default:** 5000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lZMin` |

**Type:** integer · **Format:** int32 · **Default:** -5 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lZMax` |

**Type:** integer · **Format:** int32 · **Default:** 5 · **Minimum:** -200000 · **Maximum:** 200000

 |

 |
