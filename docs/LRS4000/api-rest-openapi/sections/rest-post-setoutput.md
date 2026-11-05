# POST /SetOutput

> LRS4000 API | REST | OpenAPI V1.10.0 › Inputs and outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-setoutput

Sets the output state for an individual output. Precondition: output source set to SOPAS command.

**Editable JSON template**

```json
{
  "data": {
    "Output": "<integer>",
    "Value": "<integer>"
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`data`
| `Output` |

**Type:** integer · **Format:** uint8

 |
| --- | --- |
| `Value` |

**Type:** integer · **Format:** uint8

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`Success`

**Type:** boolean · **Default:** false

 |
