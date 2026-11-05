# GET /InertialMeasurementUnit

> picoScan150 API | REST | OpenAPI › IMU Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-get-inertialmeasurementunit

Returns the current IMU data (e.g. Acceleration, Orientation, ... ). The data is given in the following coordinate system which is based on the DIN70000 system. The x-axis lies on the 90-degree-beam of the 0-degree-layer. The y-axis is perpendicular to the x-axis and lies in the 0-degree-layer. The y-values are rising in the counterclockwise rotation direction (right-handed system). The z-axis is perpendicular to the x-y-plane and the scanner top points to rising z-values.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/InertialMeasurementUnit"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader)

 |
| --- | --- |
| `data` |
| `Acceleration` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 3

**Items:**

**Type:** number · **Format:** float · **Default:** 0.0

 |
| `AngularVelocity` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 3

**Items:**

**Type:** number · **Format:** float · **Default:** 0.0

 |
| `Orientation` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 4

**Items:**

**Type:** number · **Format:** float · **Default:** 0.0

 |
| `TimeStamp` |

**Type:** integer · **Format:** uint64

 |

 |
