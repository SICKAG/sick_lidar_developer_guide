# GET /rosPointCloud2Content

> multiScan200 API | REST | OpenAPI V1.1.0 › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-rospointcloud2content

Returns/sets the content of the published PointCloud2 topics.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/rosPointCloud2Content"
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

**Type:** boolean · **Default:** false

 |
| `includeProperties` |

**Type:** boolean · **Default:** false

 |
| `includeTimeOffset` |

**Type:** boolean · **Default:** false

 |
| `includeRing` |

**Type:** boolean · **Default:** false

 |

 |
