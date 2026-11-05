# GET /EtherDHCPFallback

> picoScan120 API | REST | OpenAPI › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-etherdhcpfallback

Returns/sets the mode for the DHCP fallback (retry or static).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherDHCPFallback"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherDHCPFallback`

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - TX_USE_STATIC_IP
 * 1 - TX_RETRY_DHCP

 |
