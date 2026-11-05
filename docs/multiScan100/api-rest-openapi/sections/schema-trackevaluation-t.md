# TrackEvaluation_t

> multiScan100 API | REST | OpenAPI V2.5.0 › Shared request and response fields

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-trackevaluation-t

| `Version` |

**Type:** integer · **Default:** 1

 |
| --- | --- |
| `EvaluationParamsCommon` |

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**
| `MaximumHiddenTime` |

**Type:** integer · **Default:** 500 · **Minimum:** 0 · **Maximum:** 1000

 |
| `MinimumObjectAge` |

**Type:** integer · **Default:** 0 · **Minimum:** 0

 |
| `TimeForInfringedState` |

**Type:** integer · **Default:** 500 · **Minimum:** 1

 |
| `MinimumObjectWidth` |

**Type:** integer · **Default:** 200 · **Minimum:** 0 · **Maximum:** 200000

 |
| `MinimumObjectHeight` |

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 200000

 |
| `EnableMaximumSizeFilter` |

**Type:** boolean · **Default:** false

 |
| `MaximumObjectWidth` |

**Type:** integer · **Default:** 2000 · **Minimum:** 0 · **Maximum:** 200000

 |
| `MaximumObjectHeight` |

**Type:** integer · **Default:** 2000 · **Minimum:** 0 · **Maximum:** 200000

 |
| `MotionState` |

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Default:** 1

Mapping:
 * 0 - ALL
 * 1 - MOVING
 * 2 - STATIONARY

 |
| `EnableSpeedFilter` |

**Type:** boolean · **Default:** true

 |
| `MinimumObjectVelocity` |

**Type:** integer · **Default:** 300 · **Minimum:** 0 · **Maximum:** 65000

 |
| `MaximumObjectVelocity` |

**Type:** integer · **Default:** 15000 · **Minimum:** 0 · **Maximum:** 65000

 |
| `EnableDirectionFilter` |

**Type:** boolean · **Default:** false

 |
| `ObjectDirection` |

**Type:** integer · **Default:** 180 · **Minimum:** -180 · **Maximum:** 180

 |
| `ObjectDirectionUncertainty` |

**Type:** integer · **Default:** 90 · **Minimum:** 0 · **Maximum:** 180

 |
| `Reserved1` |

**Type:** integer · **Default:** 0

 |
| `Reserved2` |

**Type:** integer · **Default:** 0

 |
| `Reserved3` |

**Type:** integer · **Default:** 0

 |
| `Reserved4` |

**Type:** integer · **Default:** 0

 |
| `Reserved5` |

**Type:** integer · **Default:** 0

 |
| `Reserved6` |

**Type:** integer · **Default:** 0

 |

 |
| `ReservedParams1` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

`ReservedDummy`

**Type:** integer · **Default:** 0

 |
| --- | --- |
| `ReservedParams2` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

`ReservedDummy`

**Type:** integer · **Default:** 0

 |
