# GET /ImuDataEthSettings

> picoScan150 API | REST | OpenAPI › IMU Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-get-imudataethsettings

Returns/sets the destination IP address settings for IMU data streaming (UDP).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ImuDataEthSettings"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader)

 |
| --- | --- |
| `data` |
| `Protocol` |

**Allowed values:**

```
[
  1,
  2
]
```

**Type:** integer · **Format:** uint8 · **Default:** 1

Mapping:
 * 1 - UDP
 * 2 - TCP

 |
| `IPAddress` |

**Default:**

```
[
  192,
  168,
  0,
  100
]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 4

**Items:**

**Type:** integer · **Format:** uint8

 |
| `Port` |

**Type:** integer · **Format:** uint16 · **Default:** 7503

 |

 |
