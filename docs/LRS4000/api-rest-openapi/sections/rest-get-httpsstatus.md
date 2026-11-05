# GET /httpsStatus

> LRS4000 API | REST | OpenAPI V1.10.0 › Cybersecurity

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-httpsstatus

Returns the status of the HTTPS interface.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/httpsStatus"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `enabled` |

**Type:** boolean · **Default:** false

 |
| `errorCode` |

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-httpserror-t)

 |

 |
