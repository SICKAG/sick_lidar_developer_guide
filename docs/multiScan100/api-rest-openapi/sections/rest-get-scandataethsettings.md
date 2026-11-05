# GET /ScanDataEthSettings

> multiScan100 API | REST | OpenAPI V2.5.0 › Measurement data output

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-scandataethsettings

Returns/sets the destination IP address settings for measurement data streaming (UDP).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ScanDataEthSettings"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Default:** 1

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

**Type:** integer

 |
| `Port` |

**Type:** integer · **Default:** 2115

 |

 |
