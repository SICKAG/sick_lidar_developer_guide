# GET /perpendicularDistanceResult

> multiScan100 API | REST | OpenAPI V2.5.0 › Perpendicular distance

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-perpendiculardistanceresult

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `timestamp` |

**Type:** integer

 |
| `evaluations` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**
| `evaluationId` |

**Type:** integer

 |
| `minimumDistance` |

**Type:** integer

 |
| `maximumDistance` |

**Type:** integer

 |
| `minimumDistancePosition` |

**Fields:** [Point3d_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-point3d-t)

 |
| `maximumDistancePosition` |

**Fields:** [Point3d_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-point3d-t)

 |

 |

 |
