# GET /EtherIPGateAddressDHCP

> multiScan200 API | REST | OpenAPI V1.1.0 › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-etheripgateaddressdhcp

Returns the assigned DHCP default gateway address.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherIPGateAddressDHCP"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherIPGateAddressDHCP`

**Default:**

```
[
  0,
  0,
  0,
  0
]
```

**Type:** array · **Minimum items:** 4 · **Maximum items:** 4

**Items:**

**Type:** integer

 |
