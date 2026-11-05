# GET /EtherCoLaScanMode

> picoScan120 API | REST | OpenAPI › Cybersecurity

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-ethercolascanmode

Configures the device search by SICK tools. If disabled, finding the device via device search and changing the IP address via SICK tools is not possible.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherCoLaScanMode"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherCoLaScanMode`

**Allowed values:**

```
[
  0,
  1,
  2,
  3
]
```

**Type:** integer · **Format:** uint8 · **Default:** 3

Mapping:
 * 0 - ENABLED
 * 1 - IP_CONFIG_DISABLED
 * 2 - DISABLED
 * 3 - IP_CONFIG_TIME_LIMIT

 |
