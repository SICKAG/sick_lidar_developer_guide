# GET /bloomingFilter

> multiScan200 API | REST | OpenAPI V1.1.0 › Filter

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-bloomingfilter

Returns/sets the blooming filter.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/bloomingFilter"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `strength` |

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Default:** 1

Mapping:
 * 0 - LOW
 * 1 - MEDIUM
 * 2 - STRONG

 |
| `enable` |

**Type:** boolean · **Default:** false

 |

 |
