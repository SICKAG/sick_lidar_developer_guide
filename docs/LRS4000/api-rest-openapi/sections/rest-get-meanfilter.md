# GET /MeanFilter

> LRS4000 API | REST | OpenAPI V1.10.0 › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-meanfilter

Returns/sets the mean filter settings. This filter smooths the distance value by calculating the arithmetic mean from the configured number of scans.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/MeanFilter"
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
| `uiScanNumber` |

**Type:** integer · **Format:** uint16 · **Default:** 10 · **Minimum:** 2 · **Maximum:** 100

 |
| `eFilterMethod` |

**Allowed values:**

```
[
  0
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - ARITHMETIC

 |

 |
