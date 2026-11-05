# POST /SetFieldEvaluationConfiguration

> multiScan100 API | REST | OpenAPI V2.5.0 › Field evaluation

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-setfieldevaluationconfiguration

Sets the configuration of a field evaluation.

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
      "Source": 0,
      "Name": " ",
      "ID": 1,
      "EvaluationParamsMaskBased": [
        {
          "InfringementThresholdFactor": 80
        }
      ],
      "EvaluationParamsSegmentationBased": [
        {
          "SampleParam1": "<integer>"
        }
      ],
      "EvaluationParamsCommon": [
        {
          "MinimumObjectSizeHorizontal": 200,
          "MinimumObjectSizeVertical": 200,
          "OcclusionHandling": false,
          "TreatMissingDataAsInfringed": false,
          "TimeForInfringedState": 50,
          "TimeForFreeState": 50,
          "Reserved3": "<integer>",
          "Reserved4": "<integer>"
        }
      ],
      "EvaluationParamsExitSize": [
        {
          "disableExitSize": false,
          "exitSizeVertical": 70,
          "exitSizeHorizontal": 100
        }
      ],
      "VolumeList": []
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

**Fields:** [Evaluation_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-evaluation-t)

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
