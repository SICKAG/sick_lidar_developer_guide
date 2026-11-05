# POST /SetObjectEvaluationConfiguration

> multiScan100 API | REST | OpenAPI V2.5.0 › Object evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-setobjectevaluationconfiguration

Sets the configuration of an object detection evaluation.

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
    "EvaluationId": "<integer>",
    "Name": " ",
    "Configuration": {
      "Version": 1,
      "EvaluationParamsCommon": [
        {
          "MaximumHiddenTime": 500,
          "MinimumObjectAge": 0,
          "TimeForInfringedState": 500,
          "MinimumObjectWidth": 200,
          "MinimumObjectHeight": 0,
          "EnableMaximumSizeFilter": false,
          "MaximumObjectWidth": 2000,
          "MaximumObjectHeight": 2000,
          "MotionState": 1,
          "EnableSpeedFilter": true,
          "MinimumObjectVelocity": 300,
          "MaximumObjectVelocity": 15000,
          "EnableDirectionFilter": false,
          "ObjectDirection": 180,
          "ObjectDirectionUncertainty": 90,
          "Reserved1": 0,
          "Reserved2": 0,
          "Reserved3": 0,
          "Reserved4": 0,
          "Reserved5": 0,
          "Reserved6": 0
        }
      ],
      "ReservedParams1": [],
      "ReservedParams2": []
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
| `EvaluationId` |

**Type:** integer

 |
| `Name` |

**Type:** string · **Default:**   · **Maximum length:** 20

 |
| `Configuration` |

**Fields:** [TrackEvaluation_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-trackevaluation-t)

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ErrorCode`

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
 * 0 - SOPAS_ERR_NO_ERR
 * 1 - SOPAS_ERR_INVALID_EVALUATION_ID
 * 2 - SOPAS_ERR_INVALID_CONFIGURATION

 |
