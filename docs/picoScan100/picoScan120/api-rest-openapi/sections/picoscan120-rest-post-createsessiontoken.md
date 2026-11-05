# POST /CreateSessionToken

> picoScan120 API | REST | OpenAPI › General

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-createsessiontoken

A short-lived session token to pass to a HTTP request header.

Build the JSON body from the request schema below.

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

**Type:** object · **Nullable:** true

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |
| `token` |

**Fields:** [SessionToken](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-sessiontoken)

 |
| `timeToLive` |

**Type:** integer · **Format:** uint16

 |

 |
