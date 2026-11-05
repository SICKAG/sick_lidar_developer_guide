# GET /ContaminationConfig

> LRS4000 API | REST | OpenAPI V1.10.0 › Contamination indication

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-contaminationconfig

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - CM_STRATEGY_INACTIVE
 * 1 - CM_STRATEGY_HIGH_AVAILABLE
 * 2 - CM_STRATEGY_SENSITIVE

 |
| `usiResponseTime` |

**Type:** integer · **Format:** uint16 · **Default:** 3 · **Minimum:** 0 · **Maximum:** 60

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

**Type:** integer · **Format:** uint8 · **Default:** 1

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
  255,
  128,
  1,
  2,
  3,
  4,
  5
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - CM_COVER_NONE
 * 255 - CM_COVER_CUSTOM_SECTORS
 * 128 - CM_COVER_REAR_MOUNTING_BRACKETS
 * 1 - CM_COVER_210_NO_FLAPS
 * 2 - CM_COVER_210_FLAP_LEFT
 * 3 - CM_COVER_210_FLAP_RIGTH
 * 4 - CM_COVER_210_BOTH_FLAPS
 * 5 - CM_COVER_275

 |
| `CustomSectors` |

**Type:** array · **Minimum items:** 12 · **Maximum items:** 12

**Items:**

**Type:** boolean · **Default:** false

 |
| `bEnableWarning` |

**Type:** boolean · **Default:** true

 |
| `bEnableError` |

**Type:** boolean · **Default:** true

 |

 |
