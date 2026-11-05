# ResponseHeader

> picoScan150 API | REST | OpenAPI › Shared request and response fields

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader

| `status` |

**Allowed values:**

```
[
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11
]
```

**Type:** integer · **Format:** uint16 · **Default:** 0

Mapping:
 * 0 - Ok
 * 1 - Parsing Failed
 * 2 - Invalid Data
 * 3 - Internal Server Error
 * 4 - Access Denied
 * 5 - Not Found
 * 6 - Out Of Range
 * 7 - Out Of Bounds
 * 8 - Read Only
 * 9 - Illegal Value
 * 10 - Invalid Challenge
 * 11 - Out Of Connections

 |
| --- | --- |
| `message` |

**Type:** string · **Default:** Ok

 |
