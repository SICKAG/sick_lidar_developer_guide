# GET /OutputState

> multiScan100 API | REST | OpenAPI V2.5.0 › Inputs and outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-outputstate

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `uiVersionNumber` |

**Type:** integer · **Default:** 1

 |
| `udiSystCount` |

**Type:** integer

 |
| `aDigitalOut` |

**Type:** array · **Minimum items:** 8 · **Maximum items:** 8

**Items:**
| `IOState` |

**Fields:** [IOState_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-iostate-t)

 |
| `udiCounter` |

**Type:** integer

 |

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
| --- | --- |

 |
