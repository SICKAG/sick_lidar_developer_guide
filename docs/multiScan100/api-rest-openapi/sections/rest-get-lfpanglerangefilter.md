# GET /LFPangleRangeFilter

> multiScan100 API | REST | OpenAPI V2.5.0 › Data reduction

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-lfpanglerangefilter

Returns/sets the angle range filter settings. The filter restricts the output scan to a specified angle range. Filtered measurement values are set to 0. If an entire data segment is set to 0, it is no longer output.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LFPangleRangeFilter"
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
| `fThetaStart` |

**Type:** integer · **Default:** -900000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `fThetaStop` |

**Type:** integer · **Default:** 900000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `fPhiStart` |

**Type:** integer · **Default:** -900000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `fPhiStop` |

**Type:** integer · **Default:** 900000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `uiBeamIncrement` |

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 20

 |

 |
