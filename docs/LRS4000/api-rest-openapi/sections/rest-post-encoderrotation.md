# POST /EncoderRotation

> LRS4000 API | REST | OpenAPI V1.10.0 › 3D scan recording

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-encoderrotation

Set the start orientation when the encoder transformation type is set to rotation.

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
    "EncoderRotation": {
      "yaw": 0,
      "pitch": 0,
      "roll": 0
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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

 |
| --- | --- |
| `data` |

`EncoderRotation`
| `yaw` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |
| `pitch` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |
| `roll` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)
