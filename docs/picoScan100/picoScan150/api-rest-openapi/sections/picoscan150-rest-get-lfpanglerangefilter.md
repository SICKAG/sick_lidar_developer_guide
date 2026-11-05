# GET /LFPangleRangeFilter

> picoScan150 API | REST | OpenAPI › Data Reduction

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-get-lfpanglerangefilter

Returns/sets the angle range filter settings. The filter restricts the output scan to a specified angle range. Filtered measurement values are set to 0. If the content of a complete data segment is set to 0, this segment is not output anymore.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LFPangleRangeFilter"
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
| `fThetaStart` |

**Type:** integer · **Format:** int32 · **Default:** -900000 · **Minimum:** -1380000 · **Maximum:** 1380000

 |
| `fThetaStop` |

**Type:** integer · **Format:** int32 · **Default:** 900000 · **Minimum:** -1380000 · **Maximum:** 1380000

 |
| `fPhiStart` |

**Type:** integer · **Format:** int32 · **Default:** -900000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `fPhiStop` |

**Type:** integer · **Format:** int32 · **Default:** 900000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `uiBeamIncrement` |

**Type:** integer · **Format:** uint16 · **Default:** 1 · **Minimum:** 1 · **Maximum:** 20

 |

 |
