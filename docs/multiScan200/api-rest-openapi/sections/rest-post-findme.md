# POST /FindMe

> multiScan200 API | REST | OpenAPI V1.1.0 › Device Information

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#rest-post-findme

Sets the device LEDs into blinking mode for better identification.

**JSON example**

```json
{
  "data": {
    "uiDuration": 100
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`data`

**Example:**

```
{
  "uiDuration": 100
}
```

`uiDuration`

**Type:** integer · **Minimum:** 1

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/#schema-responseheader)
