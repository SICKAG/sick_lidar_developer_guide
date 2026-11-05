# GET /compactTelegramType1Content

> picoScan120 API | REST | OpenAPI › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-compacttelegramtype1content

Returns/sets the content of the Compact telegram type 1 (e.g. whether to include the RSSI values).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/compactTelegramType1Content"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |
| `includeRssi` |

**Type:** boolean · **Default:** true

 |
| `includeProperties` |

**Type:** boolean · **Default:** true

 |

 |
