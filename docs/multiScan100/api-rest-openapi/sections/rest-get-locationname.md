# GET /LocationName

> multiScan100 API | REST | OpenAPI V2.5.0 › Device

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-locationname

Returns/sets the device name.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LocationName"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

**Example:**

```
{
  "LocationName": "TestDevice"
}
```

`LocationName`

**Type:** string · **Default:** not defined · **Maximum length:** 32

 |
