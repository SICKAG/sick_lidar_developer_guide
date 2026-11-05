# GET /EnableColaScan

> LRS4000 API | REST | OpenAPI V1.10.0 › Legacy protocols

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-enablecolascan

Enables/disables the device search by SICK tools. If disabled, finding the device via device search and changing the IP address via SICK tools is not possible.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EnableColaScan"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EnableColaScan`

**Type:** boolean · **Default:** true

 |
