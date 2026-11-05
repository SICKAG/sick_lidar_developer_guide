# GET /angleRangeFocusFilter

> multiScan200 API | REST | OpenAPI V1.1.0 › Data Reduction

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-get-anglerangefocusfilter

Returns/sets the angle range focus filter settings.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/angleRangeFocusFilter"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `enable` |

**Type:** boolean · **Default:** false

 |
| `thetaStart` |

**Type:** integer · **Default:** -900000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `thetaStop` |

**Type:** integer · **Default:** 900000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `phiStart` |

**Type:** integer · **Default:** -250000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `phiStop` |

**Type:** integer · **Default:** 250000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `thetaIndexIncrement` |

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 50

 |
| `phiIndexIncrement` |

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 50

 |
| `focusRegion` |
| `enable` |

**Type:** boolean · **Default:** false

 |
| `direction` |

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - HORIZONTAL
 * 1 - VERTICAL

 |
| `thetaStart` |

**Type:** integer · **Default:** -450000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `thetaStop` |

**Type:** integer · **Default:** 450000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `phiStart` |

**Type:** integer · **Default:** -100000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `phiStop` |

**Type:** integer · **Default:** 100000 · **Minimum:** -900000 · **Maximum:** 900000

 |

 |

 |
