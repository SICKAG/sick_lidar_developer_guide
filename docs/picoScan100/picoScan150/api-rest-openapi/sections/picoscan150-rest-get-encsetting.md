# GET /EncSetting

> picoScan150 API | REST | OpenAPI › Encoder Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-get-encsetting

Returns/sets the encoder mode (e.g. phase mode).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EncSetting"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader)

 |
| --- | --- |
| `data` |

`EncSetting`

**Allowed values:**

```
[
  0,
  1,
  2,
  3,
  4
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - TX_OFF
 * 1 - TX_INCREMENT1
 * 2 - TX_DIR_PHASE12
 * 3 - TX_DIR_LEVEL12
 * 4 - TX_FIX_VELOCITY

 |
