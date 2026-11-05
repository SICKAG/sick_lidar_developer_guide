# POST /setCertificateBundle

> picoScan120 API | REST | OpenAPI › Cybersecurity

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-setcertificatebundle

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
    "user": "Run"
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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |
| `success` |

**Type:** boolean · **Default:** false

 |
| `errorCode` |

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-httpserror-t)

 |

 |
