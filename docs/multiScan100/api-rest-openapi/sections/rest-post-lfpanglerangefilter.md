# POST /LFPangleRangeFilter

> multiScan100 API | REST | OpenAPI V2.5.0 › Data reduction

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-lfpanglerangefilter

Returns/sets the angle range filter settings. The filter restricts the output scan to a specified angle range. Filtered measurement values are set to 0. If an entire data segment is set to 0, it is no longer output.

This function requires at least user level: Authorized Client.

**Editable JSON template**

```json
{
  "header": {
    "nonce": "<nonce from authentication>",
    "opaque": "<opaque from authentication>",
    "realm": "SICK Sensor",
    "response": "<response from authentication>",
    "user": "AuthorizedClient"
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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-postbodyheader)

 |
| --- | --- |
| `data` |

`LFPangleRangeFilter`
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `fThetaStart` |

**Type:** integer · **Default:** -900000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `fThetaStop` |

**Type:** integer · **Default:** 900000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `fPhiStart` |

**Type:** integer · **Default:** -900000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `fPhiStop` |

**Type:** integer · **Default:** 900000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `uiBeamIncrement` |

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 20

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)
