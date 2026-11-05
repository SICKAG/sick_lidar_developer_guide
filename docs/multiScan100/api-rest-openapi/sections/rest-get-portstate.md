# GET /PortState

> multiScan100 API | REST | OpenAPI V2.5.0 › Inputs and outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-portstate

Returns the state of the ports. "PortState" is preferred over "OutputState".

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/PortState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `uiVersionNumber` |

**Type:** integer

 |
| `udiSystCount` |

**Type:** integer

 |
| `aInternalPorts` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 8

**Items:**

**Fields:** [PortStateAndCounter_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-portstateandcounter-t)

 |
| `aExternalPorts` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 8

**Items:**

**Fields:** [PortStateAndCounter_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-portstateandcounter-t)

 |
| `aTimeBlock` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-datetime-t)

 |

 |
