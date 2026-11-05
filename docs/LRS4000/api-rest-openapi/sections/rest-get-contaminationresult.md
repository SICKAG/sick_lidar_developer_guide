# GET /ContaminationResult

> LRS4000 API | REST | OpenAPI V1.10.0 › Contamination indication

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-contaminationresult

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `warningActive` |

**Type:** boolean · **Default:** false

 |
| `errorActive` |

**Type:** boolean · **Default:** false

 |

 |
