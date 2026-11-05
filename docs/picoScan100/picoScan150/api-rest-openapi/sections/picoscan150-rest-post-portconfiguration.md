# POST /PortConfiguration

> picoScan150 API | REST | OpenAPI › Inputs and Outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-rest-post-portconfiguration

Returns/sets the port configuration of all I/Os.

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
    "PortConfiguration": [
      {
        "PortType": 0,
        "Name": "IOx",
        "InputSettings": {
          "Logic": 0,
          "Debounce": 10,
          "Sensitivity": 0,
          "Reserved1": 0,
          "Reserved2": 0
        },
        "OutputSettings": {
          "Logic": 0,
          "OutputMode": 0,
          "RestartType": 0,
          "RestartTime": 200,
          "RestartInput": 1,
          "Combination": 1,
          "Reserved3": 0,
          "Reserved4": 0,
          "Sources": []
        },
        "EncoderPortType": 0,
        "Reserved8": 0,
        "Reserved9": 0,
        "Reserved10": 0
      }
    ]
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

`PortConfiguration`

**Type:** array · **Minimum items:** 8 · **Maximum items:** 8

**Items:**
| `PortType` |

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - INPUT
 * 1 - OUTPUT
 * 2 - ENCODER

 |
| `Name` |

**Type:** string · **Default:** IOx · **Maximum length:** 20

 |
| `InputSettings` |
| `Logic` |

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-logic-t)

 |
| `Debounce` |

**Type:** integer · **Format:** uint16 · **Default:** 10 · **Minimum:** 1 · **Maximum:** 1000

 |
| `Sensitivity` |

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - EDGE
 * 1 - LEVEL

 |
| `Reserved1` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Reserved2` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |

 |
| `OutputSettings` |
| `Logic` |

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-logic-t)

 |
| `OutputMode` |

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - PNP
 * 1 - NPN
 * 2 - PUSH_PULL

 |
| `RestartType` |

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - RESTART_IMMEDATE
 * 1 - RESTART_TIME
 * 2 - RESTART_INPUT

 |
| `RestartTime` |

**Type:** integer · **Format:** uint32 · **Default:** 200 · **Minimum:** 20 · **Maximum:** 600000

 |
| `RestartInput` |

**Type:** integer · **Format:** uint16 · **Default:** 1 · **Minimum:** 1 · **Maximum:** 8

 |
| `Combination` |

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Format:** uint8 · **Default:** 1

Mapping:
 * 0 - AND
 * 1 - OR
 * 2 - XOR

 |
| `Reserved3` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Reserved4` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Sources` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 128

**Items:**
| `Name` |

**Type:** string · **Default:**      · **Minimum length:** 4 · **Maximum length:** 4

 |
| `Invert` |

**Type:** boolean · **Default:** false

 |
| `Reserved5` |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |
| `Reserved6` |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |

 |

 |
| `EncoderPortType` |

**Allowed values:**

```
[
  0,
  1,
  2,
  3,
  4
]
```

**Type:** integer · **Format:** uint16 · **Default:** 0

Mapping:
 * 0 - NONE
 * 1 - ENCODER_A
 * 2 - ENCODER_B
 * 3 - AUX1
 * 4 - AUX2

 |
| --- | --- |
| `Reserved8` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Reserved9` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Reserved10` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/#picoscan150-schema-responseheader)
