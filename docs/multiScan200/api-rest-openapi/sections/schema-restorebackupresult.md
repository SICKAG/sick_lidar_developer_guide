# RestoreBackupResult

> multiScan200 API | REST | OpenAPI V1.1.0 › Shared request and response fields

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-restorebackupresult

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
  50
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - Ok
 * 1 - ChecksumError
 * 2 - ParseError
 * 3 - DeviceIdentificationError
 * 4 - UpdateRepositoryError
 * 5 - UpdateSourceError
 * 6 - DecryptionError
 * 7 - DecryptionHeaderError
 * 8 - DecryptionLengthError
 * 9 - IoError
 * 10 - VersionConversionError
 * 50 - ComponentRegistryError
