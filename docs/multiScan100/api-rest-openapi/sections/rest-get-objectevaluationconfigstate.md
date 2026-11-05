# GET /ObjectEvaluationConfigState

> multiScan100 API | REST | OpenAPI V2.5.0 › Object evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-objectevaluationconfigstate

Returns the performance state of an object evaluation configuration.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ObjectEvaluationConfigState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `ActiveBeamsLimit` |

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - OK
 * 1 - WARNING
 * 2 - EXCEEDED

 |
| `ActiveEvaluationsLimit` |

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - OK
 * 1 - WARNING
 * 2 - EXCEEDED

 |
| `NumberOfIntersectingBeams` |

**Default:**

```
[
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

**Type:** integer · **Default:** 0 · **Minimum:** 0

 |
| `InputIsOutputErrorList` |

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

**Type:** integer

 |

 |
