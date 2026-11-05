# GET /compactTelegramType6Content

> multiScan200 API | REST | OpenAPI V1.1.0 › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-compacttelegramtype6content

Return/sets the optional channels in the scan data compact telegram type 6 (muls270 specific compact format.).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/compactTelegramType6Content"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `includeRssi` |

**Type:** boolean · **Default:** true

 |
| `includeProperties` |

**Type:** boolean · **Default:** false

 |
| `includeAmbientLight` |

**Type:** boolean · **Default:** true

 |
| `reserved` |

**Type:** boolean · **Default:** false

 |

 |
