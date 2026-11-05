# GET /EtherIPAddress

> multiScan200 API | REST | OpenAPI V1.1.0 › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-etheripaddress

Returns/sets the used static IP address.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherIPAddress"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherIPAddress`

**Default:**

```
[
  192,
  168,
  0,
  1
]
```

**Type:** array · **Minimum items:** 4 · **Maximum items:** 4

**Items:**

**Type:** integer

 |
