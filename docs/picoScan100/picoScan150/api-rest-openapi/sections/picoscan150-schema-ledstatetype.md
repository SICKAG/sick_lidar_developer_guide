# LedStateType

> picoScan150 API | REST | OpenAPI › Shared request and response fields

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-ledstatetype

| `Color` |

**Allowed values:**

```
[
  0,
  1,
  2,
  3
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - GREEN
 * 1 - YELLOW
 * 2 - RED
 * 3 - WHITE

 |
| --- | --- |
| `Function` |

**Allowed values:**

```
[
  0,
  1,
  2,
  3,
  4,
  5,
  6
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - ON
 * 1 - OFF
 * 2 - BLINKING
 * 3 - BLINKING_FAST
 * 4 - BLINKING_DELAYED
 * 5 - BLINKING_COLOR
 * 6 - BLINKING_YELLOW_RED

 |
| `Id` |

**Type:** string · **Default:**   · **Maximum length:** 8

 |
