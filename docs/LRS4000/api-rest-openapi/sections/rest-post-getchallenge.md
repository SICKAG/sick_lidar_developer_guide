# POST /getChallenge

> LRS4000 API | REST | OpenAPI V1.10.0 › General

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-getchallenge

Returns a challenge for the challenge and response authentication method. For more details see https://github.com/SICKAG/sick_scan_rest_client

**JSON example**

```json
{
  "data": {
    "user": "Run"
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`data`

`user`

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-e-user-level-type)

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `challenge` |
| `realm` |

**Type:** string · **Default:**

 |
| `nonce` |

**Type:** string · **Default:**

 |
| `opaque` |

**Type:** string · **Default:**

 |
| `salt` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 16

**Items:**

**Type:** integer

 |

 |
