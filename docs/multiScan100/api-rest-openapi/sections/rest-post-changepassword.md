# POST /changePassword

> multiScan100 API | REST | OpenAPI V2.5.0 › General

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-changepassword

Sets the password for the REST interface. For more details, see https://github.com/SICKAG/sick_scan_rest_client.

**JSON example**

```json
{
  "data": {
    "encryptedMessage": [],
    "userLevel": "Run"
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`data`
| `encryptedMessage` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 96

**Items:**

**Type:** integer

 |
| --- | --- |
| `userLevel` |

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-e-user-level-type)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`result`

**Allowed values:**

```
[
  0,
  2,
  4,
  5
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - SUCCESS
 * 2 - NOT_ACCEPTED
 * 4 - PWD_NOT_CHANGABLE
 * 5 - TIMELOCK_ACTIVE

 |
