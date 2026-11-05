# GET /ScanConfig

> multiScan200 API | REST | OpenAPI V1.1.0 › Basic Settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-scanconfig

Returns the configuration of angular resolution, scanning frequency and start angle.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ScanConfig"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `udiScanFreq` |

**Type:** integer · **Default:** 2000 · **Minimum:** 100 · **Maximum:** 2000

 |
| `ScanRange` |
| `uiLength` |

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 1

 |
| `aThetaAngleRange` |

**Type:** array · **Minimum items:** 1 · **Maximum items:** 1

**Items:**
| `udiThetaAngleRes` |

**Type:** integer · **Default:** 4700 · **Minimum:** 100 · **Maximum:** 100000

 |
| `diThetaStartAngle` |

**Type:** integer · **Default:** -1380000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `diThetaStopAngle` |

**Type:** integer · **Default:** 1380000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |

 |
| `aPhiAngleRange` |

**Type:** array · **Minimum items:** 1 · **Maximum items:** 1

**Items:**
| `udiPhiAngleRes` |

**Type:** integer · **Default:** 4700 · **Minimum:** 100 · **Maximum:** 100000

 |
| `diPhiStartAngle` |

**Type:** integer · **Default:** -225000 · **Minimum:** -450000 · **Maximum:** 450000

 |
| `diPhiStopAngle` |

**Type:** integer · **Default:** 225000 · **Minimum:** -450000 · **Maximum:** 450000

 |

 |

 |

 |
