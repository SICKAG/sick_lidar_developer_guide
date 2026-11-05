# GET /InputState

> LRS4000 API | REST | OpenAPI V1.10.0 › Inputs and outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-inputstate

Returns the state of all inputs.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/InputState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `uiVersionNumber` |

**Type:** integer · **Format:** uint16 · **Default:** 1

 |
| `udiSystCount` |

**Type:** integer · **Format:** uint32

 |
| `aDigitalIn` |

**Type:** array · **Minimum items:** 6 · **Maximum items:** 6

**Items:**

`IOState`

**Fields:** [IOState_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-iostate-t)

 |
| `aTimeBlock` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-datetime-t)

 |

 |
