# GET /SensitivityMode

> LRS4000 API | REST | OpenAPI V1.10.0 › Basic settings

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-sensitivitymode

The sensitivity mode can be used to adjust the detection behavior. A higher sensitivity increases the scanning range. This setting should only be used when there is no direct sunlight and only low ambient light. A higher sensitivity increases the proneness to measurement noise and data loss. Ambient light can negatively affect the signal quality and impair the measurement performance.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/SensitivityMode"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`SensitivityMode`

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - NORMAL
 * 1 - INCREASED
 * 2 - HIGHEST

 |
