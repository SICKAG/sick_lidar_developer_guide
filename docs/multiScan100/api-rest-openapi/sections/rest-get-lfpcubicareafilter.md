# GET /LFPcubicareafilter

> multiScan100 API | REST | OpenAPI V2.5.0 › Region of interest

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-lfpcubicareafilter

Returns/sets the cuboid area filter settings. The cuboid area filter limits the measurement data box defined by its extension along the x- and y-axes.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LFPcubicareafilter"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `lXMin` |

**Type:** integer · **Default:** -20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lXMax` |

**Type:** integer · **Default:** 20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lYMin` |

**Type:** integer · **Default:** -20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lYMax` |

**Type:** integer · **Default:** 20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lZMin` |

**Type:** integer · **Default:** -20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lZMax` |

**Type:** integer · **Default:** 20000 · **Minimum:** -200000 · **Maximum:** 200000

 |

 |
