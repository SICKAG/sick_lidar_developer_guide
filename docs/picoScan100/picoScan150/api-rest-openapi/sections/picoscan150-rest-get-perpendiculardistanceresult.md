# GET /perpendicularDistanceResult

> picoScan150 API | REST | OpenAPI › Perpendicular Distance

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-get-perpendiculardistanceresult

Returns the perpendicular distance within a field.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/perpendicularDistanceResult"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader)

 |
| --- | --- |
| `data` |
| `timestamp` |

**Type:** integer · **Format:** uint64

 |
| `evaluations` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**
| `evaluationId` |

**Type:** integer · **Format:** uint16

 |
| `minimumDistance` |

**Type:** integer · **Format:** int32

 |
| `maximumDistance` |

**Type:** integer · **Format:** int32

 |
| `minimumDistancePosition` |

**Fields:** [Point3d_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-point3d-t)

 |
| `maximumDistancePosition` |

**Fields:** [Point3d_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-point3d-t)

 |

 |

 |
