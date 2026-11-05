# POST /EtherColaTransmitTimeout

> LRS4000 API | REST | OpenAPI V1.10.0 › Ethernet

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-ethercolatransmittimeout

This parameter should only be changed in case the sensor is connected to a network where reconnections may be required caused by e.g. loose contact of the Ethernet cable. This command changes the Acknowledge timeout for TCP based CoLa protocols. Reducing the Acknowledge timeout allows a faster restart of data transmission after unwanted disconnects. In large networks with high amount of data traffic, a reduced Acknowledge timeout may lead to a port close, initiated by the sensor.

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
    "EtherColaTransmitTimeout": 15000
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

`EtherColaTransmitTimeout`

**Type:** integer · **Format:** uint16 · **Default:** 15000 · **Minimum:** 250 · **Maximum:** 15000

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)
