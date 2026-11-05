# GET /OutputState

> picoScan120 API | REST | OpenAPI › Inputs And Outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-outputstate

Returns the state of all outputs.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/OutputState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |
| `uiVersionNumber` |

**Type:** integer · **Format:** uint16 · **Default:** 1

 |
| `udiSystCount` |

**Type:** integer · **Format:** uint32

 |
| `aDigitalOut` |

**Type:** array · **Minimum items:** 8 · **Maximum items:** 8

**Items:**
| `IOState` |

**Fields:** [IOState_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-iostate-t)

 |
| `udiCounter` |

**Type:** integer · **Format:** uint32

 |

 |
| `aTimeBlock` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-datetime-t)

 |
| --- | --- |

 |
