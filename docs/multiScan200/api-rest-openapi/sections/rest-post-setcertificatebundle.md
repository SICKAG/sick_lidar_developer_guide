# POST /setCertificateBundle

> multiScan200 API | REST | OpenAPI V1.1.0 › Cybersecurity

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-post-setcertificatebundle

Uploads a certificate bundle in the PEM format via JSON.

This function requires at least user level: Service.

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
    "contentCertificateBundle": " ",
    "contentPrivateKey": " "
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**
| `header` |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-postbodyheader)

 |
| --- | --- |
| `data` |
| `contentCertificateBundle` |

**Type:** string · **Default:**   · **Maximum length:** 10000

 |
| `contentPrivateKey` |

**Type:** string · **Default:**   · **Maximum length:** 4000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `success` |

**Type:** boolean · **Default:** false

 |
| `errorCode` |

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-httpserror-t)

 |

 |
