# POST /PortConfiguration

> LRS4000 API | REST | OpenAPI V1.10.0 › Inputs and outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-portconfiguration

Returns/sets the port configuration of all I/Os.

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
  "data": [
    {
      "PortType": 0,
      "Name": "InOut1",
      "InputSettings": {
        "Logic": 0,
        "Debounce": 5,
        "Sensitivity": 1,
        "Reserved1": 0,
        "Reserved2": 0
      },
      "OutputSettings": {
        "Logic": 1,
        "OutputMode": 0,
        "RestartType": 0,
        "RestartTime": 200,
        "RestartInput": 1,
        "Combination": 1,
        "Reserved3": 0,
        "Reserved4": 0,
        "Sources": []
      },
      "Reserved7": 0,
      "Reserved8": 0,
      "Reserved9": 0,
      "Reserved10": 0
    },
    {
      "PortType": 1,
      "Name": "InOut2",
      "InputSettings": {
        "Logic": 0,
        "Debounce": 10,
        "Sensitivity": 1,
        "Reserved1": 0,
        "Reserved2": 0
      },
      "OutputSettings": {
        "Logic": 1,
        "OutputMode": 2,
        "RestartType": 0,
        "RestartTime": 200,
        "RestartInput": 1,
        "Combination": 1,
        "Reserved3": 0,
        "Reserved4": 0,
        "Sources": [
          {
            "Name": "DRDY",
            "Invert": false,
            "Reserved5": 0,
            "Reserved6": 0
          }
        ]
      },
      "Reserved7": 0,
      "Reserved8": 0,
      "Reserved9": 0,
      "Reserved10": 0
    },
    {
      "PortType": 1,
      "Name": "InOut3",
      "InputSettings": {
        "Logic": 0,
        "Debounce": 10,
        "Sensitivity": 1,
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
        "Sources": [
          {
            "Name": "FE01",
            "Invert": false,
            "Reserved5": 0,
            "Reserved6": 0
          }
        ]
      },
      "Reserved7": 0,
      "Reserved8": 0,
      "Reserved9": 0,
      "Reserved10": 0
    },
    {
      "PortType": 0,
      "Name": "InOut4",
      "InputSettings": {
        "Logic": 0,
        "Debounce": 10,
        "Sensitivity": 1,
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
      "Reserved7": 0,
      "Reserved8": 0,
      "Reserved9": 0,
      "Reserved10": 0
    },
    {
      "PortType": 0,
      "Name": "InOut5",
      "InputSettings": {
        "Logic": 0,
        "Debounce": 10,
        "Sensitivity": 1,
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
      "Reserved7": 0,
      "Reserved8": 0,
      "Reserved9": 0,
      "Reserved10": 0
    },
    {
      "PortType": 0,
      "Name": "InOut6",
      "InputSettings": {
        "Logic": 0,
        "Debounce": 10,
        "Sensitivity": 1,
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
      "Reserved7": 0,
      "Reserved8": 0,
      "Reserved9": 0,
      "Reserved10": 0
    }
  ]
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**
| `header` |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

 |
| --- | --- |
| `data` |

**Example:**

```
[
  {
    "InputSettings": {
      "Debounce": 5,
      "Logic": 0,
      "Reserved1": 0,
      "Reserved2": 0,
      "Sensitivity": 1
    },
    "Name": "InOut1",
    "OutputSettings": {
      "Combination": 1,
      "Logic": 1,
      "OutputMode": 0,
      "Reserved3": 0,
      "Reserved4": 0,
      "RestartInput": 1,
      "RestartTime": 200,
      "RestartType": 0,
      "Sources": []
    },
    "PortType": 0,
    "Reserved10": 0,
    "Reserved7": 0,
    "Reserved8": 0,
    "Reserved9": 0
  },
  {
    "InputSettings": {
      "Debounce": 10,
      "Logic": 0,
      "Reserved1": 0,
      "Reserved2": 0,
      "Sensitivity": 1
    },
    "Name": "InOut2",
    "OutputSettings": {
      "Combination": 1,
      "Logic": 1,
      "OutputMode": 2,
      "Reserved3": 0,
      "Reserved4": 0,
      "RestartInput": 1,
      "RestartTime": 200,
      "RestartType": 0,
      "Sources": [
        {
          "Invert": false,
          "Name": "DRDY",
          "Reserved5": 0,
          "Reserved6": 0
        }
      ]
    },
    "PortType": 1,
    "Reserved10": 0,
    "Reserved7": 0,
    "Reserved8": 0,
    "Reserved9": 0
  },
  {
    "InputSettings": {
      "Debounce": 10,
      "Logic": 0,
      "Reserved1": 0,
      "Reserved2": 0,
      "Sensitivity": 1
    },
    "Name": "InOut3",
    "OutputSettings": {
      "Combination": 1,
      "Logic": 0,
      "OutputMode": 0,
      "Reserved3": 0,
      "Reserved4": 0,
      "RestartInput": 1,
      "RestartTime": 200,
      "RestartType": 0,
      "Sources": [
        {
          "Invert": false,
          "Name": "FE01",
          "Reserved5": 0,
          "Reserved6": 0
        }
      ]
    },
    "PortType": 1,
    "Reserved10": 0,
    "Reserved7": 0,
    "Reserved8": 0,
    "Reserved9": 0
  },
  {
    "InputSettings": {
      "Debounce": 10,
      "Logic": 0,
      "Reserved1": 0,
      "Reserved2": 0,
      "Sensitivity": 1
    },
    "Name": "InOut4",
    "OutputSettings": {
      "Combination": 1,
      "Logic": 0,
      "OutputMode": 0,
      "Reserved3": 0,
      "Reserved4": 0,
      "RestartInput": 1,
      "RestartTime": 200,
      "RestartType": 0,
      "Sources": []
    },
    "PortType": 0,
    "Reserved10": 0,
    "Reserved7": 0,
    "Reserved8": 0,
    "Reserved9": 0
  },
  {
    "InputSettings": {
      "Debounce": 10,
      "Logic": 0,
      "Reserved1": 0,
      "Reserved2": 0,
      "Sensitivity": 1
    },
    "Name": "InOut5",
    "OutputSettings": {
      "Combination": 1,
      "Logic": 0,
      "OutputMode": 0,
      "Reserved3": 0,
      "Reserved4": 0,
      "RestartInput": 1,
      "RestartTime": 200,
      "RestartType": 0,
      "Sources": []
    },
    "PortType": 0,
    "Reserved10": 0,
    "Reserved7": 0,
    "Reserved8": 0,
    "Reserved9": 0
  },
  {
    "InputSettings": {
      "Debounce": 10,
      "Logic": 0,
      "Reserved1": 0,
      "Reserved2": 0,
      "Sensitivity": 1
    },
    "Name": "InOut6",
    "OutputSettings": {
      "Combination": 1,
      "Logic": 0,
      "OutputMode": 0,
      "Reserved3": 0,
      "Reserved4": 0,
      "RestartInput": 1,
      "RestartTime": 200,
      "RestartType": 0,
      "Sources": []
    },
    "PortType": 0,
    "Reserved10": 0,
    "Reserved7": 0,
    "Reserved8": 0,
    "Reserved9": 0
  }
]
```

`PortConfiguration`

**Type:** array · **Minimum items:** 6 · **Maximum items:** 6

**Items:**
| `PortType` |

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - INPUT
 * 1 - OUTPUT

 |
| `Name` |

**Type:** string · **Default:** IOx · **Maximum length:** 20

 |
| `InputSettings` |
| `Logic` |

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-logic-t)

 |
| `Debounce` |

**Type:** integer · **Format:** uint16 · **Default:** 10 · **Minimum:** 5 · **Maximum:** 10000

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

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-logic-t)

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

**Type:** array · **Minimum items:** 0 · **Maximum items:** 20

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
| `Reserved7` |

**Type:** integer · **Format:** uint16 · **Default:** 0

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)
