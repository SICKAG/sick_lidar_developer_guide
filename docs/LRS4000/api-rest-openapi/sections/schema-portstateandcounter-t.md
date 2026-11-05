# PortStateAndCounter_t

> LRS4000 API | REST | OpenAPI V1.10.0 › Shared request and response fields

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-portstateandcounter-t

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
