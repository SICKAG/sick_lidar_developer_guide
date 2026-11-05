# GET /temperatureAlarmConfiguration

> multiScan100 API | REST | OpenAPI V2.5.0 › Status

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-temperaturealarmconfiguration

Returns/sets the thresholds for the device temperature alarm status.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/temperatureAlarmConfiguration"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `upperThreshold` |

**Type:** integer · **Default:** 55

 |
| `lowerThreshold` |

**Type:** integer · **Default:** 50

 |

 |
