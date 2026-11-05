# GET /SensorPosition

> picoScan150 API | REST | OpenAPI › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-get-sensorposition

Returns/sets the mounting position in 1/10000 deg. This only affects the PointCloud2 format output by native ROS2.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/SensorPosition"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader)

 |
| --- | --- |
| `data` |
| `x` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `y` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `z` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `yaw` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |
| `pitch` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |
| `roll` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |

 |
