# PortStateAndCounter_t

> picoScan150 API | REST | OpenAPI › Shared request and response fields

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-portstateandcounter-t

| `ePortState` |

**Allowed values:**

```
[
  0,
  1,
  2,
  3,
  4
]
```

**Type:** integer · **Format:** uint8 · **Default:** 2

Mapping:
 * 0 - OUTPUT_NOT_ACTIVE
 * 1 - OUTPUT_ACTIVE
 * 2 - TRISTATE
 * 3 - INPUT_ACTIVE
 * 4 - INPUT_NOT_ACTIVE

 |
| --- | --- |
| `PortCounter` |

**Type:** integer · **Format:** uint32

 |
