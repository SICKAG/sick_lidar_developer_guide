# GET /EtherMACAddress

> multiScan200 API | REST | OpenAPI V1.1.0 › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-ethermacaddress

Returns the MAC address of the Ethernet interface.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherMACAddress"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherMACAddress`

**Default:**

```
[
  0,
  6,
  119,
  0,
  0,
  0
]
```

**Type:** array · **Minimum items:** 6 · **Maximum items:** 6

**Items:**

**Type:** integer

 |
