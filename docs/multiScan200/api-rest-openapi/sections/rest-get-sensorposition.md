# GET /SensorPosition

> multiScan200 API | REST | OpenAPI V1.1.0 › Mounting Position

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-sensorposition

Returns/sets the mounting position.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/SensorPosition"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `x` |

**Type:** integer · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `y` |

**Type:** integer · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `z` |

**Type:** integer · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `yaw` |

**Type:** integer · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |
| `pitch` |

**Type:** integer · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |
| `roll` |

**Type:** integer · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |

 |
