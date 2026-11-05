# GET /EtherMACAddress

> picoScan120 API | REST | OpenAPI › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-ethermacaddress

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

**Type:** integer · **Format:** uint8

 |
