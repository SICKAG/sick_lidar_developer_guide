# POST /AutoStartMeasure

> multiScan100 API | REST | OpenAPI V2.5.0 › Basic settings

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-autostartmeasure

Returns/sets the mode for automatic start of measurement after boot-up.

**JSON example**

```json
{
  "data": {
    "AutoStartMeasure": true
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`data`

`AutoStartMeasure`

**Type:** boolean · **Default:** true

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)
