# POST /ScanDataConfig

> picoScan120 API | REST | OpenAPI › Measurement Data Output

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-scandataconfig

Returns/sets the configuration of LMDscandata such as the content of the scan data (e.g., whether to include the RSSI values).

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
    "ScanDataConfig": {
      "reserved": "<integer>",
      "RemDataConfig": {
        "bEnable": true,
        "reserved1": 0,
        "reserved2": 0
      },
      "EnableEncoderBlock": false,
      "reserved1": false,
      "bEnableDeviceName": false,
      "reserved2": false,
      "bEnableTimeBlock": false,
      "reserved3": 1
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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

 |
| --- | --- |
| `data` |

`ScanDataConfig`
| `reserved` |

**Type:** integer · **Format:** uint16

 |
| `RemDataConfig` |
| `bEnable` |

**Type:** boolean · **Default:** true

 |
| `reserved1` |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |
| `reserved2` |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |

 |
| `EnableEncoderBlock` |

**Type:** boolean · **Default:** false

 |
| --- | --- |
| `reserved1` |

**Type:** boolean · **Default:** false

 |
| `bEnableDeviceName` |

**Type:** boolean · **Default:** false

 |
| `reserved2` |

**Type:** boolean · **Default:** false

 |
| `bEnableTimeBlock` |

**Type:** boolean · **Default:** false

 |
| `reserved3` |

**Type:** integer · **Format:** uint16 · **Default:** 1

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)
