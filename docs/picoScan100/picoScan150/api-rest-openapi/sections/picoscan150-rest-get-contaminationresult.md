# GET /ContaminationResult

> picoScan150 API | REST | OpenAPI › Contamination Indication

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-get-contaminationresult

Returns the contamination indication state of the device.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ContaminationResult"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader)

 |
| --- | --- |
| `data` |
| `bWarningActive` |

**Type:** boolean · **Default:** false

 |
| `bErrorActive` |

**Type:** boolean · **Default:** false

 |

 |
