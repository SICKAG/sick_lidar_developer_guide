# GET /RotationOffset

> picoScan150 API | REST | OpenAPI › 3D scan recording

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-get-rotationoffset

Returns/sets the rotation center offset (x, y, z in mm) relative to the scanner.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/RotationOffset"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader)

 |
| --- | --- |
| `data` |
| `x` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `y` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `z` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |

 |
