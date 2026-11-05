# GET /EtherIPAddressDHCP

> LRS4000 API | REST | OpenAPI V1.10.0 › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-etheripaddressdhcp

Returns the assigned DHCP IP address.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherIPAddressDHCP"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherIPAddressDHCP`

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

**Type:** integer · **Format:** uint8

 |
