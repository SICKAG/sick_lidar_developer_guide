# POST /SetOutput

> multiScan100 API | REST | OpenAPI V2.5.0 › Inputs and outputs

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-setoutput

Sets the state of an individual output. The output source must first be set to "SOPAS command".

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

**Type:** integer

 |
| --- | --- |
| `Value` |

**Type:** integer

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`Success`

**Type:** boolean · **Default:** false

 |
