# GET /ScanConfig

> picoScan120 API | REST | OpenAPI › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-scanconfig

Configuration of angular resolution, scanning frequency, start and stop angle.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ScanConfig"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |
| `udiScanFreq` |

**Type:** integer · **Format:** uint32 · **Default:** 2000 · **Minimum:** 1500 · **Maximum:** 5000

 |
| `ScanRange` |
| `uiLength` |

**Type:** integer · **Format:** uint16 · **Default:** 1 · **Minimum:** 1 · **Maximum:** 1

 |
| `aRange` |

**Type:** array · **Minimum items:** 1 · **Maximum items:** 1

**Items:**
| `udiAngleRes` |

**Type:** integer · **Format:** uint32 · **Default:** 1000 · **Minimum:** 500 · **Maximum:** 10000

 |
| `diStartAngle` |

**Type:** integer · **Format:** int32 · **Default:** -1380000 · **Minimum:** -1380000 · **Maximum:** 1380000

 |
| `diStopAngle` |

**Type:** integer · **Format:** int32 · **Default:** 1380000 · **Minimum:** -1380000 · **Maximum:** 1380000

 |

 |

 |

 |
