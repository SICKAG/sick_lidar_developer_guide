# DeviceStatus

> picoScan150 API | REST | OpenAPI › Shared request and response fields

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-devicestatus

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
  8
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - DS_UnknownState
 * 1 - DS_Startup
 * 2 - DS_ServiceMode
 * 3 - DS_NormalOperation
 * 4 - DS_SuspendedOperation
 * 5 - DS_ServiceRecommended
 * 6 - DS_ServiceRequired
 * 7 - DS_RecoverableError
 * 8 - DS_FatalError
