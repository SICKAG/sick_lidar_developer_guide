# GET /DeviceIdent

> multiScan200 API | REST | OpenAPI V1.1.0 › Device Information

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-deviceident

Returns the device name and the firmware version.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/DeviceIdent"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `Name` |

**Type:** string · **Default:** multiScan200 · **Maximum length:** 12

 |
| `Version` |

**Type:** string · **Default:** 1.1.0.0R · **Maximum length:** 8

 |

 |
