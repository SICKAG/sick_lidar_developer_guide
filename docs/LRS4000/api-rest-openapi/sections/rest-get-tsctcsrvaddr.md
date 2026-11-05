# GET /TSCTCSrvAddr

> LRS4000 API | REST | OpenAPI V1.10.0 › Date and system time

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-tsctcsrvaddr

Returns/sets the NTP time server's IP address.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/TSCTCSrvAddr"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`TSCTCSrvAddr`

**Default:**

```
[
  192,
  168,
  0,
  11
]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 4

**Items:**

**Type:** integer · **Format:** uint8

 |
