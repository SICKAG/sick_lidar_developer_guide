# Evaluation_t

> multiScan100 API | REST | OpenAPI V2.5.0 › Shared request and response fields

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-evaluation-t

| `Version` |

**Type:** integer · **Default:** 1

 |
| --- | --- |
| `Source` |

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
 * 0 - STANDARD
 * 1 - HIGHRES_6
 * 2 - HIGHRES_14

 |
| `Name` |

**Type:** string · **Default:**   · **Maximum length:** 20

 |
| `ID` |

**Type:** integer · **Default:** 1

 |
| `EvaluationParamsMaskBased` |

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

`InfringementThresholdFactor`

**Type:** integer · **Default:** 80 · **Minimum:** 1 · **Maximum:** 100

 |
| `EvaluationParamsSegmentationBased` |

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

`SampleParam1`

**Type:** integer

 |
| `EvaluationParamsCommon` |

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**
| `MinimumObjectSizeHorizontal` |

**Type:** integer · **Default:** 200 · **Minimum:** 0 · **Maximum:** 5000

 |
| `MinimumObjectSizeVertical` |

**Type:** integer · **Default:** 200 · **Minimum:** 0 · **Maximum:** 5000

 |
| `OcclusionHandling` |

**Type:** boolean · **Default:** false

 |
| `TreatMissingDataAsInfringed` |

**Type:** boolean · **Default:** false

 |
| `TimeForInfringedState` |

**Type:** integer · **Default:** 50 · **Minimum:** 1 · **Maximum:** 10000

 |
| `TimeForFreeState` |

**Type:** integer · **Default:** 50 · **Minimum:** 1 · **Maximum:** 10000

 |
| `Reserved3` |

**Type:** integer

 |
| `Reserved4` |

**Type:** integer

 |

 |
| `EvaluationParamsExitSize` |

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**
| `disableExitSize` |

**Type:** boolean · **Default:** false

 |
| `exitSizeVertical` |

**Type:** integer · **Default:** 70 · **Minimum:** 0 · **Maximum:** 100

 |
| `exitSizeHorizontal` |

**Type:** integer · **Default:** 100 · **Minimum:** 0 · **Maximum:** 100

 |

 |
| `VolumeList` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 48

 |
| --- | --- |
