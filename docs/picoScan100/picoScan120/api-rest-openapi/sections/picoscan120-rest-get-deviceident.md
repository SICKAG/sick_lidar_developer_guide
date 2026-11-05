# GET /DeviceIdent

> picoScan120 API | REST | OpenAPI › Device Information

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-deviceident

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |
| `Name` |

**Type:** string · **Default:** picoScan120 · **Maximum length:** 11

 |
| `Version` |

**Type:** string · **Default:** 2.3.3.0R · **Maximum length:** 8

 |

 |
