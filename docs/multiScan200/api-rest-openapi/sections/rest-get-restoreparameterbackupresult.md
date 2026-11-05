# GET /RestoreParameterBackupResult

> multiScan200 API | REST | OpenAPI V1.1.0 › General

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-restoreparameterbackupresult

Returns the current status of the parameter restoration process.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/RestoreParameterBackupResult"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `Status` |

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - Pending
 * 1 - Finished

 |
| `RestoreResult` |

**Fields:** [RestoreBackupResult](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-restorebackupresult)

 |
| `ParametersFailedToRestore` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 100

**Items:**

**Type:** string · **Default:**   · **Maximum length:** 256

 |

 |
