# EvaluationResult_t

> picoScan150 API | REST | OpenAPI › Shared request and response fields

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-evaluationresult-t

| `State` |

**Allowed values:**

```
[
  0,
  1,
  2,
  3,
  4,
  5
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - NOT_CONFIGURED
 * 1 - INACTIVE
 * 2 - FREE
 * 3 - DETECTING_INFRINGED
 * 4 - INFRINGED
 * 5 - DETECTING_FREE

 |
| --- | --- |
| `Positions` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Fields:** [Point2d_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-point2d-t)

 |
