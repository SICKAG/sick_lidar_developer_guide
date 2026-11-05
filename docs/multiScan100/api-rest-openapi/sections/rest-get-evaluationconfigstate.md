# GET /EvaluationConfigState

> multiScan100 API | REST | OpenAPI V2.5.0 › Field evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-evaluationconfigstate

Returns the performance state of an evaluation configuration.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EvaluationConfigState"
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
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

**Type:** integer

 |
| `InputIsOutputErrorList` |

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

**Type:** integer

 |

 |
