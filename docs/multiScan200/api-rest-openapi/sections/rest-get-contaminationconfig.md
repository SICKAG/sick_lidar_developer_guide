# GET /ContaminationConfig

> multiScan200 API | REST | OpenAPI V1.1.0 › Contamination indication

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-contaminationconfig

Returns/sets of the contamination indication settings such as sensitivity, response time, threshold for warning, and active sectors.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ContaminationConfig"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `eStrategy` |

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - CM_STRATEGY_INACTIVE
 * 1 - CM_STRATEGY_HIGH_AVAILABLE
 * 2 - CM_STRATEGY_SENSITIVE

 |
| `usiResponseTime` |

**Type:** integer · **Default:** 3 · **Minimum:** 3 · **Maximum:** 60

 |
| `eThreshold` |

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - CM_LOW
 * 1 - CM_MID
 * 2 - CM_HIGH

 |
| `eCover` |

**Allowed values:**

```
[
  0,
  6,
  255
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - CM_COVER_NONE
 * 6 - CM_COVER
 * 255 - CM_COVER_CUSTOM_SECTORS

 |
| `CustomSectors` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 12

**Items:**

**Type:** boolean · **Default:** true

 |
| `bEnableWarning` |

**Type:** boolean · **Default:** true

 |
| `bEnableError` |

**Type:** boolean · **Default:** true

 |

 |
