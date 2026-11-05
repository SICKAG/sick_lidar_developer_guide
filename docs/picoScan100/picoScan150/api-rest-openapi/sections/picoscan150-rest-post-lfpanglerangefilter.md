# POST /LFPangleRangeFilter

> picoScan150 API | REST | OpenAPI › Data Reduction

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-post-lfpanglerangefilter

Returns/sets the angle range filter settings. The filter restricts the output scan to a specified angle range. Filtered measurement values are set to 0. If the content of a complete data segment is set to 0, this segment is not output anymore.

This function requires at least user level: Authorized Client.

**Editable JSON template**

```json
{
  "header": {
    "nonce": "<nonce from authentication>",
    "opaque": "<opaque from authentication>",
    "realm": "SICK Sensor",
    "response": "<response from authentication>",
    "user": "Run"
  },
  "data": {
    "LFPangleRangeFilter": {
      "bEnable": false,
      "fThetaStart": -900000,
      "fThetaStop": 900000,
      "fPhiStart": -900000,
      "fPhiStop": 900000,
      "uiBeamIncrement": 1
    }
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**
| `header` |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-postbodyheader)

 |
| --- | --- |
| `data` |

`LFPangleRangeFilter`
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `fThetaStart` |

**Type:** integer · **Format:** int32 · **Default:** -900000 · **Minimum:** -1380000 · **Maximum:** 1380000

 |
| `fThetaStop` |

**Type:** integer · **Format:** int32 · **Default:** 900000 · **Minimum:** -1380000 · **Maximum:** 1380000

 |
| `fPhiStart` |

**Type:** integer · **Format:** int32 · **Default:** -900000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `fPhiStop` |

**Type:** integer · **Format:** int32 · **Default:** 900000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `uiBeamIncrement` |

**Type:** integer · **Format:** uint16 · **Default:** 1 · **Minimum:** 1 · **Maximum:** 20

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader)
