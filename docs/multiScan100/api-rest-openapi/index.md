# multiScan100 API | REST | OpenAPI V2.5.0

> Download the multiScan100 V2.5.0 OpenAPI description and search REST endpoints, request parameters, and response schemas.

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/

# API | REST | OpenAPI

<div class="tool-intro tool-intro--centered" markdown>

![OpenAPI](https://sickag.github.io/sick_lidar_developer_guide/assets/openapi-logo.png)

This page provides the searchable V2.5.0 REST reference and downloadable
OpenAPI description for the multiScan100 family. For REST concepts,
authentication, and request patterns, see
[REST API / OpenAPI](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/).

</div>

[multiScan100_2.5.0.yaml (Download)](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/openapi/multiScan100_2.5.0.yaml)

Always match the file to your device's actual firmware version. Function
availability can vary by variant and installed software package. The
`ScanDataFormat` enum also lists `3` LMDscandata and `4` NativeROS2; the
multiScan100 does not support these formats. Use `1` MSGPACK or `2` Compact.

### 1 - General 

#### [POST /checkCredentials](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-checkcredentials)

Indicates whether authentication succeeded. For more details, see https://github.com/SICKAG/sick_scan_rest_client.

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

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [POST /SetPassword](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-setpassword)

Sets the password for the CoLa A/B interface only. In this example, the password for user level: Service (4) is set to - test - (integer value of the password hash - test -). For more details, see https://github.com/SICKAG/sick_scan_rest_client.

**JSON example**

```json
{
  "data": {
    "siUserLevel": 4,
    "udiNewPassword": 3410122659
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
  "siUserLevel": 4,
  "udiNewPassword": 3410122659
}
```
| `siUserLevel` |

**Type:** integer

 |
| --- | --- |
| `udiNewPassword` |

**Type:** integer

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`bSuccess`

**Type:** boolean · **Default:** false

 |

#### [POST /getChallenge](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-getchallenge)

Returns a challenge for the challenge-response authentication method. For more details, see https://github.com/SICKAG/sick_scan_rest_client

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

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-e-user-level-type)

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

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

#### [POST /changePassword](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-changepassword)

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

#### [POST /EnableUserLevel](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-enableuserlevel)

Activates/deactivates a specific user level for the REST interface.

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
    "userLevel": "<integer>",
    "isEnabled": false
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
| `userLevel` |

**Type:** integer

 |
| `isEnabled` |

**Type:** boolean · **Default:** false

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

`result`

**Allowed values:**

```
[
  0,
  2
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - SUCCESS
 * 2 - NOT_ACCEPTED

 |

#### [POST /WriteEeprom](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-writeeeprom)

Saves all parameters permanently.

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
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`Success`

**Type:** boolean · **Default:** false

 |

#### [POST /SoftReset](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-softreset)

Reboots the device. All unsaved parameters are lost. This function requires the user level: Service.

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
    "ProcessorNbr": "<integer>"
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

`ProcessorNbr`

**Type:** integer

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [POST /RebootDevice](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-rebootdevice)

Reboots the device. All parameters are saved. This function requires the user level: Service.

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
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [POST /LoadFactoryDefaults](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-loadfactorydefaults)

Resets all parameters to default. This function requires the user level: Service.

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
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [POST /LoadApplicationDefaults](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-loadapplicationdefaults)

Resets only the user parameterization of the fields, evaluation cases, and parameters under the section "Application". Other parameters like interface settings, echo filter, etc. remain unchanged. This function requires the user level: Service.

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
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [POST /EnableLegacyUserLevel](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-enablelegacyuserlevel)

Activates/deactivates a specific user level for the CoLa A/B interface.

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
    "userLevel": "<integer>",
    "isEnabled": false
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
| `userLevel` |

**Type:** integer · **Minimum:** 0 · **Maximum:** 7

 |
| `isEnabled` |

**Type:** boolean · **Default:** false

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

`result`

**Type:** boolean · **Default:** false

 |

### 2 - Status 

#### [GET /DeviceStatus](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-devicestatus)

Returns the device state (9 possible states).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/DeviceStatus"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`DeviceStatus`

**Fields:** [DeviceStatus](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-devicestatus)

 |

#### [GET /SCdevicestate](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-scdevicestate)

Returns the device state (busy, ready, or error).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/SCdevicestate"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`SCdevicestate`

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
 * 0 - Busy
 * 1 - Ready
 * 2 - Error

 |

#### [GET /temperatureAlarmConfiguration](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-temperaturealarmconfiguration)

Returns/sets the thresholds for the device temperature alarm status.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/temperatureAlarmConfiguration"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `upperThreshold` |

**Type:** integer · **Default:** 55

 |
| `lowerThreshold` |

**Type:** integer · **Default:** 50

 |

 |

#### [POST /temperatureAlarmConfiguration](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-temperaturealarmconfiguration)

Returns/sets the thresholds for the device temperature alarm status.

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
    "temperatureAlarmConfiguration": {
      "upperThreshold": 55,
      "lowerThreshold": 50
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

`temperatureAlarmConfiguration`
| `upperThreshold` |

**Type:** integer · **Default:** 55

 |
| `lowerThreshold` |

**Type:** integer · **Default:** 50

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /temperatureAlarmStatus](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-temperaturealarmstatus)

Returns the current device temperature alarm status. If true, the configured temperature alarm is active.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/temperatureAlarmStatus"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`temperatureAlarmStatus`

**Type:** boolean · **Default:** false

 |

### 3 - Device 

#### [GET /DeviceIdent](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-deviceident)

Returns the device name and the firmware version.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/DeviceIdent"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `Name` |

**Type:** string · **Default:** multiScan · **Maximum length:** 9

 |
| `Version` |

**Type:** string · **Default:** 2.5.0.0R · **Maximum length:** 8

 |

 |

#### [GET /LocationName](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-locationname)

Returns/sets the device name.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LocationName"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

**Example:**

```
{
  "LocationName": "TestDevice"
}
```

`LocationName`

**Type:** string · **Default:** not defined · **Maximum length:** 32

 |

#### [POST /LocationName](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-locationname)

Returns/sets the device name.

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
    "LocationName": "not defined"
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

`LocationName`

**Type:** string · **Default:** not defined · **Maximum length:** 32

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /SerialNumber](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-serialnumber)

Returns the serial number.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/SerialNumber"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`SerialNumber`

**Type:** string · **Default:** 123456789 · **Maximum length:** 9

 |

#### [GET /FirmwareVersion](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-firmwareversion)

Returns the current firmware version.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/FirmwareVersion"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`FirmwareVersion`

**Type:** string · **Default:** XXXXXXXXXX · **Maximum length:** 40

 |

#### [GET /OrderNumber](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-ordernumber)

Returns the order number (SICK part number).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/OrderNumber"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`OrderNumber`

**Type:** string · **Default:** 1234567 · **Maximum length:** 32

 |

#### [GET /DeviceType](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-devicetype)

Returns the device type.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/DeviceType"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`DeviceType`

**Type:** string · **Default:** multiScan1xxx · **Maximum length:** 18

 |

#### [POST /FindMe](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-findme)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

### 4 - Basic settings 

#### [GET /LEDState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-ledstate)

Returns the LED status.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LEDState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`LEDState`

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 8

**Items:**

**Fields:** [LedStateType](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-ledstatetype)

 |

#### [GET /LEDEnable](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-ledenable)

Returns/sets the LED mode (on/off).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LEDEnable"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`LEDEnable`

**Type:** boolean · **Default:** true

 |

#### [POST /LEDEnable](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-ledenable)

Returns/sets the LED mode (on/off).

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
    "LEDEnable": true
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

`LEDEnable`

**Type:** boolean · **Default:** true

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [POST /mStartMeasure](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-mstartmeasure)

Starts the motor and measurement.

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
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-postbodyheader)

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
  1
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - SOPAS_ERR_NO_ERR
 * 1 - SOPAS_ERR_STATE_CHANGE_NOT_PERMITTED

 |

#### [POST /mStopMeasure](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-mstopmeasure)

Stops the motor and measurement.

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
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-postbodyheader)

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
  1
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - SOPAS_ERR_NO_ERR
 * 1 - SOPAS_ERR_STATE_CHANGE_NOT_PERMITTED

 |

#### [GET /AutoStartMeasure](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-autostartmeasure)

Returns/sets the mode for automatic start of measurement after boot-up.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/AutoStartMeasure"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`AutoStartMeasure`

**Type:** boolean · **Default:** true

 |

#### [POST /AutoStartMeasure](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-autostartmeasure)

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

#### [GET /bInterlacedMode](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-binterlacedmode)

Returns/sets the interlaced mode.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/bInterlacedMode"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`bInterlacedMode`

**Type:** boolean · **Default:** false

 |

#### [POST /bInterlacedMode](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-binterlacedmode)

Returns/sets the interlaced mode.

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
    "bInterlacedMode": false
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

`bInterlacedMode`

**Type:** boolean · **Default:** false

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

### 5 - Date and system time 

#### [GET /TSCRole](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-tscrole)

Returns/sets the time synchronization role (none, NTP, or PTP).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/TSCRole"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`TSCRole`

**Allowed values:**

```
[
  0,
  1,
  3
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - TX_NONE
 * 1 - TX_CLIENT
 * 3 - TX_PTP_SLAVE

 |

#### [POST /TSCRole](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-tscrole)

Returns/sets the time synchronization role (none, NTP, or PTP).

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
    "TSCRole": 0
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

`TSCRole`

**Allowed values:**

```
[
  0,
  1,
  3
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - TX_NONE
 * 1 - TX_CLIENT
 * 3 - TX_PTP_SLAVE

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /TSCTCSrvAddr](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-tsctcsrvaddr)

Returns/sets the IP address of the time server.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/TSCTCSrvAddr"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`TSCTCSrvAddr`

**Default:**

```
[
  192,
  168,
  0,
  11
]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 4

**Items:**

**Type:** integer

 |

#### [POST /TSCTCSrvAddr](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-tsctcsrvaddr)

Returns/sets the IP address of the time server.

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
    "TSCTCSrvAddr": [
      192,
      168,
      0,
      11
    ]
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

`TSCTCSrvAddr`

**Default:**

```
[
  192,
  168,
  0,
  11
]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 4

**Items:**

**Type:** integer

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /TSCTCtimezone](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-tsctctimezone)

Returns/sets the time zone of the client.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/TSCTCtimezone"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`TSCTCtimezone`

**Allowed values:**

```
[
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
  91,
  92,
  93,
  94,
  95,
  96,
  97,
  98,
  99,
  100,
  101,
  102,
  103,
  104
]
```

**Type:** integer · **Default:** 36

Mapping:
 * 0 - DATE_LINE_STANDARD
 * 1 - COORD_WORLD_TIME_11
 * 2 - HAWAII
 * 3 - ALASKA
 * 4 - CALIFORNIA
 * 5 - USA_CANADA
 * 6 - ARIZONA
 * 7 - LA_PAZ
 * 8 - MOUNTAIN_TIME_USA
 * 9 - CENTRAL_TIME_USA
 * 10 - MEXICO_CITY
 * 11 - MIDDLE_AMERICA
 * 12 - SASKATCHEWAN
 * 13 - BOGOTA_LIMA
 * 14 - EASTERN_TIME_USA
 * 15 - INDIANA
 * 16 - CARACAS
 * 17 - ASUNCION
 * 18 - ATLANTIC_KANADA
 * 19 - CUIABA
 * 20 - LAPAZ_SANJUAN
 * 21 - SANTIAGO
 * 22 - NEUFUNDLAND
 * 23 - BRASILIA
 * 24 - BUENOS_AIRES
 * 25 - CAYENNE_FORTALEZA
 * 26 - GROENLAND
 * 27 - MONTEVIDEO
 * 28 - SALVADOR
 * 29 - COORD_WORLD_TIME_02
 * 30 - AZOREN
 * 31 - KAP_VERDE
 * 32 - CASABLANCA
 * 33 - DUBLIN_LISSABON_LONDON
 * 34 - COORD_WORLD_TIME
 * 35 - MONROVIA_REYKJAVIK
 * 36 - AMSTERDAM_BERLIN_ROM
 * 37 - BELGRAD_BUDAPEST_PRAG
 * 38 - BRUESSEL_MADRID_PARIS
 * 39 - SARAJEVO_WARSCHAU
 * 40 - WEST_CENTRAL_AFRICA
 * 41 - WINDHUK
 * 42 - JOHANNESBURG
 * 43 - AMMAN
 * 44 - ATHEN_BUKAREST
 * 45 - BEIRUT
 * 46 - DAMASCUS
 * 47 - HARARE_PRETORIA
 * 48 - HELSINKI_KIEW_RIGA
 * 49 - ISTANBUL
 * 50 - JERUSALEM
 * 51 - KAIRO
 * 52 - KALININGRAD
 * 53 - TRIPOLIS
 * 54 - BAGDAD
 * 55 - KUWAIT_RIAD
 * 56 - MINSK
 * 57 - MOSKAU_PETERSBURG
 * 58 - NAIROBI
 * 59 - TEHERAN
 * 60 - ABU_DHABI
 * 61 - BAKU
 * 62 - ERIWAN
 * 63 - ISCHEWSK_SAMARA
 * 64 - PORT_LOUIS
 * 65 - TIFLIS
 * 66 - KABUL
 * 67 - ASCHGABET_TASCHKENT
 * 68 - ISLAMABAD_KARATSCHI
 * 69 - JEKATERINBURG
 * 70 - MUMBAI_NEUDELHI
 * 71 - SRI_JAYAWARDENEPURA
 * 72 - KATMANDU
 * 73 - ASTANA
 * 74 - DAKKA
 * 75 - NOWOSIBIRSK
 * 76 - YANGON
 * 77 - BANGKOK_HANOI_JAKARTA
 * 78 - KRASNOJARSK
 * 79 - IRKUTSK
 * 80 - KUALA_LUMPUR_SINGAPUR
 * 81 - PEKING_HONGKONG
 * 82 - PERTH
 * 83 - TAIPEH
 * 84 - ULAN_BATOR
 * 85 - JAKUTSK
 * 86 - OSAKA_TOKIO
 * 87 - SEOUL
 * 88 - ADELAIDE
 * 89 - DARWIN
 * 90 - BRISBANE
 * 91 - CANBERRA_SYDNEY
 * 92 - GUAM_PORT_MORESBY
 * 93 - HOBART
 * 94 - MAGADAN
 * 95 - WLADIWOSTOK
 * 96 - SALOMONEN_KALEDONIEN
 * 97 - TSCHOKURDACH
 * 98 - ANADYR
 * 99 - AUCKLAND_WELLINGTON
 * 100 - FIDSCHI
 * 101 - COORD_WORLD_TIME_12
 * 102 - NAKUALOFA
 * 103 - SAMOA
 * 104 - KIRITIMATI

 |

#### [POST /TSCTCtimezone](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-tsctctimezone)

Returns/sets the time zone of the client.

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
    "TSCTCtimezone": 36
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

`TSCTCtimezone`

**Allowed values:**

```
[
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
  91,
  92,
  93,
  94,
  95,
  96,
  97,
  98,
  99,
  100,
  101,
  102,
  103,
  104
]
```

**Type:** integer · **Default:** 36

Mapping:
 * 0 - DATE_LINE_STANDARD
 * 1 - COORD_WORLD_TIME_11
 * 2 - HAWAII
 * 3 - ALASKA
 * 4 - CALIFORNIA
 * 5 - USA_CANADA
 * 6 - ARIZONA
 * 7 - LA_PAZ
 * 8 - MOUNTAIN_TIME_USA
 * 9 - CENTRAL_TIME_USA
 * 10 - MEXICO_CITY
 * 11 - MIDDLE_AMERICA
 * 12 - SASKATCHEWAN
 * 13 - BOGOTA_LIMA
 * 14 - EASTERN_TIME_USA
 * 15 - INDIANA
 * 16 - CARACAS
 * 17 - ASUNCION
 * 18 - ATLANTIC_KANADA
 * 19 - CUIABA
 * 20 - LAPAZ_SANJUAN
 * 21 - SANTIAGO
 * 22 - NEUFUNDLAND
 * 23 - BRASILIA
 * 24 - BUENOS_AIRES
 * 25 - CAYENNE_FORTALEZA
 * 26 - GROENLAND
 * 27 - MONTEVIDEO
 * 28 - SALVADOR
 * 29 - COORD_WORLD_TIME_02
 * 30 - AZOREN
 * 31 - KAP_VERDE
 * 32 - CASABLANCA
 * 33 - DUBLIN_LISSABON_LONDON
 * 34 - COORD_WORLD_TIME
 * 35 - MONROVIA_REYKJAVIK
 * 36 - AMSTERDAM_BERLIN_ROM
 * 37 - BELGRAD_BUDAPEST_PRAG
 * 38 - BRUESSEL_MADRID_PARIS
 * 39 - SARAJEVO_WARSCHAU
 * 40 - WEST_CENTRAL_AFRICA
 * 41 - WINDHUK
 * 42 - JOHANNESBURG
 * 43 - AMMAN
 * 44 - ATHEN_BUKAREST
 * 45 - BEIRUT
 * 46 - DAMASCUS
 * 47 - HARARE_PRETORIA
 * 48 - HELSINKI_KIEW_RIGA
 * 49 - ISTANBUL
 * 50 - JERUSALEM
 * 51 - KAIRO
 * 52 - KALININGRAD
 * 53 - TRIPOLIS
 * 54 - BAGDAD
 * 55 - KUWAIT_RIAD
 * 56 - MINSK
 * 57 - MOSKAU_PETERSBURG
 * 58 - NAIROBI
 * 59 - TEHERAN
 * 60 - ABU_DHABI
 * 61 - BAKU
 * 62 - ERIWAN
 * 63 - ISCHEWSK_SAMARA
 * 64 - PORT_LOUIS
 * 65 - TIFLIS
 * 66 - KABUL
 * 67 - ASCHGABET_TASCHKENT
 * 68 - ISLAMABAD_KARATSCHI
 * 69 - JEKATERINBURG
 * 70 - MUMBAI_NEUDELHI
 * 71 - SRI_JAYAWARDENEPURA
 * 72 - KATMANDU
 * 73 - ASTANA
 * 74 - DAKKA
 * 75 - NOWOSIBIRSK
 * 76 - YANGON
 * 77 - BANGKOK_HANOI_JAKARTA
 * 78 - KRASNOJARSK
 * 79 - IRKUTSK
 * 80 - KUALA_LUMPUR_SINGAPUR
 * 81 - PEKING_HONGKONG
 * 82 - PERTH
 * 83 - TAIPEH
 * 84 - ULAN_BATOR
 * 85 - JAKUTSK
 * 86 - OSAKA_TOKIO
 * 87 - SEOUL
 * 88 - ADELAIDE
 * 89 - DARWIN
 * 90 - BRISBANE
 * 91 - CANBERRA_SYDNEY
 * 92 - GUAM_PORT_MORESBY
 * 93 - HOBART
 * 94 - MAGADAN
 * 95 - WLADIWOSTOK
 * 96 - SALOMONEN_KALEDONIEN
 * 97 - TSCHOKURDACH
 * 98 - ANADYR
 * 99 - AUCKLAND_WELLINGTON
 * 100 - FIDSCHI
 * 101 - COORD_WORLD_TIME_12
 * 102 - NAKUALOFA
 * 103 - SAMOA
 * 104 - KIRITIMATI

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /TSCTCupdatetime](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-tsctcupdatetime)

Returns/sets the update time of the client.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/TSCTCupdatetime"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`TSCTCupdatetime`

**Type:** integer · **Default:** 600 · **Minimum:** 1 · **Maximum:** 3600

 |

#### [POST /TSCTCupdatetime](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-tsctcupdatetime)

Returns/sets the update time of the client.

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
    "TSCTCupdatetime": 600
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

`TSCTCupdatetime`

**Type:** integer · **Default:** 600 · **Minimum:** 1 · **Maximum:** 3600

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /LSPdatetime](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-lspdatetime)

Returns the current time of the device (years, months, days, hours, minutes, seconds, microseconds).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LSPdatetime"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`LSPdatetime`

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-datetime-t)

 |

#### [POST /LSPsetdatetime](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-lspsetdatetime)

Sets the time of the device (years, months, days, hours, minutes, seconds, microseconds).

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
    "DateTime": {
      "uiYear": 0,
      "usiMonth": 1,
      "usiDay": 1,
      "usiHour": 0,
      "usiMinute": 0,
      "usiSec": 0,
      "udiUSec": 0
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

`DateTime`

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-datetime-t)

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
  1
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - SOPAS_ERR_NO_ERR
 * 1 - SOPAS_ERR_STATE_CHANGE_NOT_PERMITTED

 |

### 6 - Filter 

#### [GET /groundFilterEnable](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-groundfilterenable)

Returns/sets whether the ground filter is enabled.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/groundFilterEnable"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`groundFilterEnable`

**Type:** boolean · **Default:** false

 |

#### [POST /groundFilterEnable](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-groundfilterenable)

Returns/sets whether the ground filter is enabled.

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
    "groundFilterEnable": false
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

`groundFilterEnable`

**Type:** boolean · **Default:** false

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /groundFilterThresholds](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-groundfilterthresholds)

Returns/sets the ground filter thresholds.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/groundFilterThresholds"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `minimumDistance` |

**Type:** integer · **Default:** -100 · **Minimum:** -10000 · **Maximum:** 0

 |
| `maximumDistance` |

**Type:** integer · **Default:** 100 · **Minimum:** 0 · **Maximum:** 10000

 |

 |

#### [POST /groundFilterThresholds](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-groundfilterthresholds)

Returns/sets the ground filter thresholds.

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
    "groundFilterThresholds": {
      "minimumDistance": -100,
      "maximumDistance": 100
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

`groundFilterThresholds`
| `minimumDistance` |

**Type:** integer · **Default:** -100 · **Minimum:** -10000 · **Maximum:** 0

 |
| `maximumDistance` |

**Type:** integer · **Default:** 100 · **Minimum:** 0 · **Maximum:** 10000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /groundFilterType](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-groundfiltertype)

Returns the ground filter type. Currently, the ground filter only works on plain measurement data (P3D algorithm). The option IMU is currently not available.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/groundFilterType"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`groundFilterType`

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - P3D
 * 1 - IMU

 |

#### [GET /MCSenseLevel](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-mcsenselevel)

Returns/sets the fog filter settings.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/MCSenseLevel"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`MCSenseLevel`

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 1

 |

#### [POST /MCSenseLevel](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-mcsenselevel)

Returns/sets the fog filter settings.

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
    "MCSenseLevel": 0
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

`MCSenseLevel`

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 1

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /LFPparticle](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-lfpparticle)

Returns/sets the particle filter settings. Filters out disturbances in the measurement data caused by particles such as dust, snowflakes, or similar. Configure the minimum threshold of the required distance step (mm) between the echo to be filtered and the echoes of surrounding beam angles.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LFPparticle"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `uiThreshold` |

**Type:** integer · **Default:** 500 · **Minimum:** 20 · **Maximum:** 5000

 |

 |

#### [POST /LFPparticle](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-lfpparticle)

Returns/sets the particle filter settings. Filters out disturbances in the measurement data caused by particles such as dust, snowflakes, or similar. Configure the minimum threshold of the required distance step (mm) between the echo to be filtered and the echoes of surrounding beam angles.

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
    "LFPparticle": {
      "bEnable": false,
      "uiThreshold": 500
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

`LFPparticle`
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `uiThreshold` |

**Type:** integer · **Default:** 500 · **Minimum:** 20 · **Maximum:** 5000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /LFPmovingAveragingFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-lfpmovingaveragingfilter)

Returns/sets the mean filter settings. This filter smooths the distance value by calculating the arithmetic mean from the configured number of scans (2 to 4 scans). Points with zero distance are treated as missing values and are not taken into account for averaging. If all distances considered for averaging have the value 0, the result will be 0 as well.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LFPmovingAveragingFilter"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `uiAveragingDepth` |

**Type:** integer · **Default:** 3 · **Minimum:** 2 · **Maximum:** 4

 |

 |

#### [POST /LFPmovingAveragingFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-lfpmovingaveragingfilter)

Returns/sets the mean filter settings. This filter smooths the distance value by calculating the arithmetic mean from the configured number of scans (2 to 4 scans). Points with zero distance are treated as missing values and are not taken into account for averaging. If all distances considered for averaging have the value 0, the result will be 0 as well.

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
    "LFPmovingAveragingFilter": {
      "bEnable": false,
      "uiAveragingDepth": 3
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

`LFPmovingAveragingFilter`
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `uiAveragingDepth` |

**Type:** integer · **Default:** 3 · **Minimum:** 2 · **Maximum:** 4

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /FREchoFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-frechofilter)

Returns/sets the multi-echo filter settings. Depending on the environment, the sensor receives several measurement points on the same angular step (multi-echo). The filter can filter out the first echo, the last echo, or all echoes.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/FREchoFilter"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`FREchoFilter`

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Default:** 1

Mapping:
 * 0 - FIRST_ECHO
 * 1 - ALL_ECHOS
 * 2 - LAST_ECHO

 |

#### [POST /FREchoFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-frechofilter)

Returns/sets the multi-echo filter settings. Depending on the environment, the sensor receives several measurement points on the same angular step (multi-echo). The filter can filter out the first echo, the last echo, or all echoes.

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
    "FREchoFilter": 1
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

`FREchoFilter`

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Default:** 1

Mapping:
 * 0 - FIRST_ECHO
 * 1 - ALL_ECHOS
 * 2 - LAST_ECHO

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

### 7 - Mounting position 

#### [POST /CopySensorOrientationFromImu](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-copysensororientationfromimu)

Copies the roll and pitch angles from the IMU data to the sensor orientation.

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
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /SensorPosition](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-sensorposition)

Returns/sets the mounting position in increments of 1/10,000 degree.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/SensorPosition"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `x` |

**Type:** integer · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `y` |

**Type:** integer · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `z` |

**Type:** integer · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `yaw` |

**Type:** integer · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |
| `pitch` |

**Type:** integer · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |
| `roll` |

**Type:** integer · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |

 |

#### [POST /SensorPosition](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-sensorposition)

Returns/sets the mounting position in increments of 1/10,000 degree.

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
    "SensorPosition": {
      "x": 0,
      "y": 0,
      "z": 0,
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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-postbodyheader)

 |
| --- | --- |
| `data` |

`SensorPosition`
| `x` |

**Type:** integer · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `y` |

**Type:** integer · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `z` |

**Type:** integer · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `yaw` |

**Type:** integer · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |
| `pitch` |

**Type:** integer · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |
| `roll` |

**Type:** integer · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

### 8 - Contamination indication 

#### [GET /ContaminationConfig](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-contaminationconfig)

Returns/sets the contamination indication settings such as sensitivity, response time, threshold for warning, and active sectors.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ContaminationConfig"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `eStrategy` |

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
 * 0 - CM_STRATEGY_INACTIVE
 * 1 - CM_STRATEGY_HIGH_AVAILABLE
 * 2 - CM_STRATEGY_SENSITIVE

 |
| `usiResponseTime` |

**Type:** integer · **Default:** 3 · **Minimum:** 3 · **Maximum:** 60

 |
| `eThreshold` |

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
 * 0 - CM_LOW
 * 1 - CM_MID
 * 2 - CM_HIGH

 |
| `eCover` |

**Allowed values:**

```
[
  0,
  6,
  255
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - CM_COVER_NONE
 * 6 - CM_COVER
 * 255 - CM_COVER_CUSTOM_SECTORS

 |
| `CustomSectors` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 12

**Items:**

**Type:** boolean · **Default:** true

 |
| `bEnableWarning` |

**Type:** boolean · **Default:** true

 |
| `bEnableError` |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /ContaminationConfig](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-contaminationconfig)

Returns/sets the contamination indication settings such as sensitivity, response time, threshold for warning, and active sectors.

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
    "ContaminationConfig": {
      "eStrategy": 0,
      "usiResponseTime": 3,
      "eThreshold": 0,
      "eCover": 0,
      "CustomSectors": [],
      "bEnableWarning": true,
      "bEnableError": true
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

`ContaminationConfig`
| `eStrategy` |

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
 * 0 - CM_STRATEGY_INACTIVE
 * 1 - CM_STRATEGY_HIGH_AVAILABLE
 * 2 - CM_STRATEGY_SENSITIVE

 |
| `usiResponseTime` |

**Type:** integer · **Default:** 3 · **Minimum:** 3 · **Maximum:** 60

 |
| `eThreshold` |

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
 * 0 - CM_LOW
 * 1 - CM_MID
 * 2 - CM_HIGH

 |
| `eCover` |

**Allowed values:**

```
[
  0,
  6,
  255
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - CM_COVER_NONE
 * 6 - CM_COVER
 * 255 - CM_COVER_CUSTOM_SECTORS

 |
| `CustomSectors` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 12

**Items:**

**Type:** boolean · **Default:** true

 |
| `bEnableWarning` |

**Type:** boolean · **Default:** true

 |
| `bEnableError` |

**Type:** boolean · **Default:** true

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /ContaminationActiveSectors](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-contaminationactivesectors)

Returns which sectors are included in the contamination result calculation. Each element is true if the corresponding sector is included and false otherwise.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ContaminationActiveSectors"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ContaminationActiveSectors`

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 12

**Items:**

**Type:** boolean · **Default:** false

 |

#### [GET /ContaminationData](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-contaminationdata)

Returns the contamination state of all contamination sectors.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ContaminationData"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ContaminationData`

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 12

**Items:**

**Allowed values:**

```
[
  0,
  1,
  2,
  3
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - CM_DATA_NONE
 * 1 - CM_DATA_CLEAN
 * 2 - CM_DATA_WARN
 * 3 - CM_DATA_ERROR

 |

#### [GET /ContaminationResult](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-contaminationresult)

Returns the contamination indication state of the device.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ContaminationResult"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `bWarningActive` |

**Type:** boolean · **Default:** false

 |
| `bErrorActive` |

**Type:** boolean · **Default:** false

 |

 |

### 9 - Ethernet 

#### [GET /EtherIPAddress](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-etheripaddress)

Returns/sets the static IP address in use.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherIPAddress"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherIPAddress`

**Default:**

```
[
  192,
  168,
  0,
  1
]
```

**Type:** array · **Minimum items:** 4 · **Maximum items:** 4

**Items:**

**Type:** integer

 |

#### [POST /EtherIPAddress](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-etheripaddress)

Returns/sets the static IP address in use.

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
    "EtherIPAddress": [
      192,
      168,
      0,
      1
    ]
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

`EtherIPAddress`

**Default:**

```
[
  192,
  168,
  0,
  1
]
```

**Type:** array · **Minimum items:** 4 · **Maximum items:** 4

**Items:**

**Type:** integer

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /EtherIPGateAddress](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-etheripgateaddress)

Returns/sets the default gateway address.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherIPGateAddress"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherIPGateAddress`

**Default:**

```
[
  0,
  0,
  0,
  0
]
```

**Type:** array · **Minimum items:** 4 · **Maximum items:** 4

**Items:**

**Type:** integer

 |

#### [POST /EtherIPGateAddress](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-etheripgateaddress)

Returns/sets the default gateway address.

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
    "EtherIPGateAddress": [
      0,
      0,
      0,
      0
    ]
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

`EtherIPGateAddress`

**Default:**

```
[
  0,
  0,
  0,
  0
]
```

**Type:** array · **Minimum items:** 4 · **Maximum items:** 4

**Items:**

**Type:** integer

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /EtherIPMask](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-etheripmask)

Returns/sets the subnet mask.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherIPMask"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherIPMask`

**Default:**

```
[
  255,
  255,
  255,
  0
]
```

**Type:** array · **Minimum items:** 4 · **Maximum items:** 4

**Items:**

**Type:** integer

 |

#### [POST /EtherIPMask](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-etheripmask)

Returns/sets the subnet mask.

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
    "EtherIPMask": [
      255,
      255,
      255,
      0
    ]
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

`EtherIPMask`

**Default:**

```
[
  255,
  255,
  255,
  0
]
```

**Type:** array · **Minimum items:** 4 · **Maximum items:** 4

**Items:**

**Type:** integer

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /EtherAddressingMode](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-etheraddressingmode)

Returns/sets the mode for the IP address assignment (static or DHCP).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherAddressingMode"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherAddressingMode`

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - TX_IP_STATIC
 * 1 - TX_IP_DHCP

 |

#### [POST /EtherAddressingMode](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-etheraddressingmode)

Returns/sets the mode for the IP address assignment (static or DHCP).

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
    "EtherAddressingMode": 0
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

`EtherAddressingMode`

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - TX_IP_STATIC
 * 1 - TX_IP_DHCP

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /EtherDHCPFallback](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-etherdhcpfallback)

Returns/sets the mode for the DHCP fallback (retry or static).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherDHCPFallback"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherDHCPFallback`

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - TX_USE_STATIC_IP
 * 1 - TX_RETRY_DHCP

 |

#### [POST /EtherDHCPFallback](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-etherdhcpfallback)

Returns/sets the mode for the DHCP fallback (retry or static).

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
    "EtherDHCPFallback": 0
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

`EtherDHCPFallback`

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - TX_USE_STATIC_IP
 * 1 - TX_RETRY_DHCP

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [POST /EthernetUpdate](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-ethernetupdate)

Applies the ethernet settings. This needs to be executed to actually change the ethernet settings.

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
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /EtherIPAddressDHCP](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-etheripaddressdhcp)

Returns the assigned DHCP IP address.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherIPAddressDHCP"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherIPAddressDHCP`

**Default:**

```
[
  192,
  168,
  0,
  1
]
```

**Type:** array · **Minimum items:** 4 · **Maximum items:** 4

**Items:**

**Type:** integer

 |

#### [GET /EtherIPGateAddressDHCP](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-etheripgateaddressdhcp)

Returns the assigned DHCP default gateway address.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherIPGateAddressDHCP"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherIPGateAddressDHCP`

**Default:**

```
[
  0,
  0,
  0,
  0
]
```

**Type:** array · **Minimum items:** 4 · **Maximum items:** 4

**Items:**

**Type:** integer

 |

#### [GET /EtherIPMaskDHCP](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-etheripmaskdhcp)

Returns the assigned DHCP subnet mask.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherIPMaskDHCP"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherIPMaskDHCP`

**Default:**

```
[
  255,
  255,
  255,
  0
]
```

**Type:** array · **Minimum items:** 4 · **Maximum items:** 4

**Items:**

**Type:** integer

 |

#### [GET /EtherMACAddress](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-ethermacaddress)

Returns the MAC address of the Ethernet interface.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherMACAddress"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherMACAddress`

**Default:**

```
[
  0,
  6,
  119,
  0,
  0,
  0
]
```

**Type:** array · **Minimum items:** 6 · **Maximum items:** 6

**Items:**

**Type:** integer

 |

### 10 - Legacy protocols 

#### [GET /EtherAuxEnabled](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-etherauxenabled)

Enables/disables the legacy interface CoLa A/B. If enabled, CoLa A uses port 2111 and CoLa B uses port 2112.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherAuxEnabled"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherAuxEnabled`

**Type:** boolean · **Default:** true

 |

#### [POST /EtherAuxEnabled](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-etherauxenabled)

Enables/disables the legacy interface CoLa A/B. If enabled, CoLa A uses port 2111 and CoLa B uses port 2112.

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
    "EtherAuxEnabled": true
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

`EtherAuxEnabled`

**Type:** boolean · **Default:** true

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /EtherCoLaScanMode](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-ethercolascanmode)

Configures the device search by SICK tools. If disabled, finding the device via device search and changing the IP address via SICK tools is not possible.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherCoLaScanMode"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherCoLaScanMode`

**Allowed values:**

```
[
  0,
  1,
  2,
  3
]
```

**Type:** integer · **Default:** 3

Mapping:
 * 0 - ENABLED
 * 1 - IP_CONFIG_DISABLED
 * 2 - DISABLED
 * 3 - IP_CONFIG_TIME_LIMIT

 |

#### [POST /EtherCoLaScanMode](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-ethercolascanmode)

Configures the device search by SICK tools. If disabled, finding the device via device search and changing the IP address via SICK tools is not possible.

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
    "EtherCoLaScanMode": 3
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

`EtherCoLaScanMode`

**Allowed values:**

```
[
  0,
  1,
  2,
  3
]
```

**Type:** integer · **Default:** 3

Mapping:
 * 0 - ENABLED
 * 1 - IP_CONFIG_DISABLED
 * 2 - DISABLED
 * 3 - IP_CONFIG_TIME_LIMIT

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

### 11 - Webserver settings 

#### [POST /SetWebserverEnabled](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-setwebserverenabled)

Sets the availability of the web server (reboot required). If disabled, the web-based GUI and the REST interface can no longer be used.

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
    "Enable": true
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

`Enable`

**Type:** boolean · **Default:** true

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [POST /GetWebserverEnabled](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-getwebserverenabled)

Returns the availability of the web server.

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`IsEnabled`

**Type:** boolean · **Default:** true

 |

### 12 - Inputs and outputs 

#### [GET /PortConfiguration](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-portconfiguration)

Returns/sets the port configuration of all I/Os.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/PortConfiguration"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`PortConfiguration`

**Type:** array · **Minimum items:** 8 · **Maximum items:** 8

**Items:**
| `PortType` |

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
 * 0 - INPUT
 * 1 - OUTPUT
 * 2 - ENCODER

 |
| `Name` |

**Type:** string · **Default:** IOx · **Maximum length:** 20

 |
| `InputSettings` |
| `Logic` |

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-logic-t)

 |
| `Debounce` |

**Type:** integer · **Default:** 10 · **Minimum:** 1 · **Maximum:** 1000

 |
| `Sensitivity` |

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - EDGE
 * 1 - LEVEL

 |
| `Reserved1` |

**Type:** integer · **Default:** 0

 |
| `Reserved2` |

**Type:** integer · **Default:** 0

 |

 |
| `OutputSettings` |
| `Logic` |

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-logic-t)

 |
| `OutputMode` |

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
 * 0 - PNP
 * 1 - NPN
 * 2 - PUSH_PULL

 |
| `RestartType` |

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
 * 0 - RESTART_IMMEDATE
 * 1 - RESTART_TIME
 * 2 - RESTART_INPUT

 |
| `RestartTime` |

**Type:** integer · **Default:** 200 · **Minimum:** 20 · **Maximum:** 600000

 |
| `RestartInput` |

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 8

 |
| `Combination` |

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Default:** 1

Mapping:
 * 0 - AND
 * 1 - OR
 * 2 - XOR

 |
| `Reserved3` |

**Type:** integer · **Default:** 0

 |
| `Reserved4` |

**Type:** integer · **Default:** 0

 |
| `Sources` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 128

**Items:**
| `Name` |

**Type:** string · **Default:**      · **Minimum length:** 4 · **Maximum length:** 4

 |
| `Invert` |

**Type:** boolean · **Default:** false

 |
| `Reserved5` |

**Type:** integer · **Default:** 0

 |
| `Reserved6` |

**Type:** integer · **Default:** 0

 |

 |

 |
| `EncoderPortType` |

**Allowed values:**

```
[
  0,
  1,
  2,
  3,
  4
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - NONE
 * 1 - ENCODER_A
 * 2 - ENCODER_B
 * 3 - AUX1
 * 4 - AUX2

 |
| --- | --- |
| `Reserved8` |

**Type:** integer · **Default:** 0

 |
| `Reserved9` |

**Type:** integer · **Default:** 0

 |
| `Reserved10` |

**Type:** integer · **Default:** 0

 |

 |

#### [POST /PortConfiguration](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-portconfiguration)

Returns/sets the port configuration of all I/Os.

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
    "PortConfiguration": [
      {
        "PortType": 0,
        "Name": "InOut1",
        "InputSettings": {
          "Logic": 0,
          "Debounce": 1,
          "Sensitivity": 1,
          "Reserved1": 0,
          "Reserved2": 0
        },
        "OutputSettings": {
          "Logic": 1,
          "OutputMode": 0,
          "RestartType": 0,
          "RestartTime": 200,
          "RestartInput": 1,
          "Combination": 1,
          "Reserved3": 0,
          "Reserved4": 0,
          "Sources": []
        },
        "Reserved7": 0,
        "Reserved8": 0,
        "Reserved9": 0,
        "Reserved10": 0
      },
      {
        "PortType": 1,
        "Name": "InOut2",
        "InputSettings": {
          "Logic": 0,
          "Debounce": 10,
          "Sensitivity": 1,
          "Reserved1": 0,
          "Reserved2": 0
        },
        "OutputSettings": {
          "Logic": 1,
          "OutputMode": 2,
          "RestartType": 0,
          "RestartTime": 200,
          "RestartInput": 1,
          "Combination": 1,
          "Reserved3": 0,
          "Reserved4": 0,
          "Sources": [
            {
              "Name": "DRDY",
              "Invert": false,
              "Reserved5": 0,
              "Reserved6": 0
            }
          ]
        },
        "Reserved7": 0,
        "Reserved8": 0,
        "Reserved9": 0,
        "Reserved10": 0
      },
      {
        "PortType": 1,
        "Name": "InOut3",
        "InputSettings": {
          "Logic": 0,
          "Debounce": 10,
          "Sensitivity": 1,
          "Reserved1": 0,
          "Reserved2": 0
        },
        "OutputSettings": {
          "Logic": 0,
          "OutputMode": 0,
          "RestartType": 0,
          "RestartTime": 200,
          "RestartInput": 1,
          "Combination": 1,
          "Reserved3": 0,
          "Reserved4": 0,
          "Sources": [
            {
              "Name": "FE01",
              "Invert": false,
              "Reserved5": 0,
              "Reserved6": 0
            }
          ]
        },
        "Reserved7": 0,
        "Reserved8": 0,
        "Reserved9": 0,
        "Reserved10": 0
      },
      {
        "PortType": 0,
        "Name": "InOut4",
        "InputSettings": {
          "Logic": 0,
          "Debounce": 10,
          "Sensitivity": 1,
          "Reserved1": 0,
          "Reserved2": 0
        },
        "OutputSettings": {
          "Logic": 0,
          "OutputMode": 0,
          "RestartType": 0,
          "RestartTime": 200,
          "RestartInput": 1,
          "Combination": 1,
          "Reserved3": 0,
          "Reserved4": 0,
          "Sources": []
        },
        "Reserved7": 0,
        "Reserved8": 0,
        "Reserved9": 0,
        "Reserved10": 0
      },
      {
        "PortType": 0,
        "Name": "InOut5",
        "InputSettings": {
          "Logic": 0,
          "Debounce": 10,
          "Sensitivity": 1,
          "Reserved1": 0,
          "Reserved2": 0
        },
        "OutputSettings": {
          "Logic": 0,
          "OutputMode": 0,
          "RestartType": 0,
          "RestartTime": 200,
          "RestartInput": 1,
          "Combination": 1,
          "Reserved3": 0,
          "Reserved4": 0,
          "Sources": []
        },
        "Reserved7": 0,
        "Reserved8": 0,
        "Reserved9": 0,
        "Reserved10": 0
      },
      {
        "PortType": 0,
        "Name": "InOut6",
        "InputSettings": {
          "Logic": 0,
          "Debounce": 10,
          "Sensitivity": 1,
          "Reserved1": 0,
          "Reserved2": 0
        },
        "OutputSettings": {
          "Logic": 0,
          "OutputMode": 0,
          "RestartType": 0,
          "RestartTime": 200,
          "RestartInput": 1,
          "Combination": 1,
          "Reserved3": 0,
          "Reserved4": 0,
          "Sources": []
        },
        "Reserved7": 0,
        "Reserved8": 0,
        "Reserved9": 0,
        "Reserved10": 0
      },
      {
        "PortType": 1,
        "Name": "InOut7",
        "InputSettings": {
          "Logic": 0,
          "Debounce": 10,
          "Sensitivity": 1,
          "Reserved1": 0,
          "Reserved2": 0
        },
        "OutputSettings": {
          "Logic": 1,
          "OutputMode": 0,
          "RestartType": 0,
          "RestartTime": 200,
          "RestartInput": 1,
          "Combination": 1,
          "Reserved3": 0,
          "Reserved4": 0,
          "Sources": [
            {
              "Name": "DRDY",
              "Invert": false,
              "Reserved5": 0,
              "Reserved6": 0
            }
          ]
        },
        "Reserved7": 0,
        "Reserved8": 0,
        "Reserved9": 0,
        "Reserved10": 0
      },
      {
        "PortType": 1,
        "Name": "InOut8",
        "InputSettings": {
          "Logic": 0,
          "Debounce": 10,
          "Sensitivity": 1,
          "Reserved1": 0,
          "Reserved2": 0
        },
        "OutputSettings": {
          "Logic": 1,
          "OutputMode": 0,
          "RestartType": 0,
          "RestartTime": 200,
          "RestartInput": 1,
          "Combination": 1,
          "Reserved3": 0,
          "Reserved4": 0,
          "Sources": [
            {
              "Name": "DRDY",
              "Invert": false,
              "Reserved5": 0,
              "Reserved6": 0
            }
          ]
        },
        "Reserved7": 0,
        "Reserved8": 0,
        "Reserved9": 0,
        "Reserved10": 0
      }
    ]
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

**Example:**

```
{
  "PortConfiguration": [
    {
      "InputSettings": {
        "Debounce": 1,
        "Logic": 0,
        "Reserved1": 0,
        "Reserved2": 0,
        "Sensitivity": 1
      },
      "Name": "InOut1",
      "OutputSettings": {
        "Combination": 1,
        "Logic": 1,
        "OutputMode": 0,
        "Reserved3": 0,
        "Reserved4": 0,
        "RestartInput": 1,
        "RestartTime": 200,
        "RestartType": 0,
        "Sources": []
      },
      "PortType": 0,
      "Reserved10": 0,
      "Reserved7": 0,
      "Reserved8": 0,
      "Reserved9": 0
    },
    {
      "InputSettings": {
        "Debounce": 10,
        "Logic": 0,
        "Reserved1": 0,
        "Reserved2": 0,
        "Sensitivity": 1
      },
      "Name": "InOut2",
      "OutputSettings": {
        "Combination": 1,
        "Logic": 1,
        "OutputMode": 2,
        "Reserved3": 0,
        "Reserved4": 0,
        "RestartInput": 1,
        "RestartTime": 200,
        "RestartType": 0,
        "Sources": [
          {
            "Invert": false,
            "Name": "DRDY",
            "Reserved5": 0,
            "Reserved6": 0
          }
        ]
      },
      "PortType": 1,
      "Reserved10": 0,
      "Reserved7": 0,
      "Reserved8": 0,
      "Reserved9": 0
    },
    {
      "InputSettings": {
        "Debounce": 10,
        "Logic": 0,
        "Reserved1": 0,
        "Reserved2": 0,
        "Sensitivity": 1
      },
      "Name": "InOut3",
      "OutputSettings": {
        "Combination": 1,
        "Logic": 0,
        "OutputMode": 0,
        "Reserved3": 0,
        "Reserved4": 0,
        "RestartInput": 1,
        "RestartTime": 200,
        "RestartType": 0,
        "Sources": [
          {
            "Invert": false,
            "Name": "FE01",
            "Reserved5": 0,
            "Reserved6": 0
          }
        ]
      },
      "PortType": 1,
      "Reserved10": 0,
      "Reserved7": 0,
      "Reserved8": 0,
      "Reserved9": 0
    },
    {
      "InputSettings": {
        "Debounce": 10,
        "Logic": 0,
        "Reserved1": 0,
        "Reserved2": 0,
        "Sensitivity": 1
      },
      "Name": "InOut4",
      "OutputSettings": {
        "Combination": 1,
        "Logic": 0,
        "OutputMode": 0,
        "Reserved3": 0,
        "Reserved4": 0,
        "RestartInput": 1,
        "RestartTime": 200,
        "RestartType": 0,
        "Sources": []
      },
      "PortType": 0,
      "Reserved10": 0,
      "Reserved7": 0,
      "Reserved8": 0,
      "Reserved9": 0
    },
    {
      "InputSettings": {
        "Debounce": 10,
        "Logic": 0,
        "Reserved1": 0,
        "Reserved2": 0,
        "Sensitivity": 1
      },
      "Name": "InOut5",
      "OutputSettings": {
        "Combination": 1,
        "Logic": 0,
        "OutputMode": 0,
        "Reserved3": 0,
        "Reserved4": 0,
        "RestartInput": 1,
        "RestartTime": 200,
        "RestartType": 0,
        "Sources": []
      },
      "PortType": 0,
      "Reserved10": 0,
      "Reserved7": 0,
      "Reserved8": 0,
      "Reserved9": 0
    },
    {
      "InputSettings": {
        "Debounce": 10,
        "Logic": 0,
        "Reserved1": 0,
        "Reserved2": 0,
        "Sensitivity": 1
      },
      "Name": "InOut6",
      "OutputSettings": {
        "Combination": 1,
        "Logic": 0,
        "OutputMode": 0,
        "Reserved3": 0,
        "Reserved4": 0,
        "RestartInput": 1,
        "RestartTime": 200,
        "RestartType": 0,
        "Sources": []
      },
      "PortType": 0,
      "Reserved10": 0,
      "Reserved7": 0,
      "Reserved8": 0,
      "Reserved9": 0
    },
    {
      "InputSettings": {
        "Debounce": 10,
        "Logic": 0,
        "Reserved1": 0,
        "Reserved2": 0,
        "Sensitivity": 1
      },
      "Name": "InOut7",
      "OutputSettings": {
        "Combination": 1,
        "Logic": 1,
        "OutputMode": 0,
        "Reserved3": 0,
        "Reserved4": 0,
        "RestartInput": 1,
        "RestartTime": 200,
        "RestartType": 0,
        "Sources": [
          {
            "Invert": false,
            "Name": "DRDY",
            "Reserved5": 0,
            "Reserved6": 0
          }
        ]
      },
      "PortType": 1,
      "Reserved10": 0,
      "Reserved7": 0,
      "Reserved8": 0,
      "Reserved9": 0
    },
    {
      "InputSettings": {
        "Debounce": 10,
        "Logic": 0,
        "Reserved1": 0,
        "Reserved2": 0,
        "Sensitivity": 1
      },
      "Name": "InOut8",
      "OutputSettings": {
        "Combination": 1,
        "Logic": 1,
        "OutputMode": 0,
        "Reserved3": 0,
        "Reserved4": 0,
        "RestartInput": 1,
        "RestartTime": 200,
        "RestartType": 0,
        "Sources": [
          {
            "Invert": false,
            "Name": "DRDY",
            "Reserved5": 0,
            "Reserved6": 0
          }
        ]
      },
      "PortType": 1,
      "Reserved10": 0,
      "Reserved7": 0,
      "Reserved8": 0,
      "Reserved9": 0
    }
  ]
}
```

`PortConfiguration`

**Type:** array · **Minimum items:** 8 · **Maximum items:** 8

**Items:**
| `PortType` |

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
 * 0 - INPUT
 * 1 - OUTPUT
 * 2 - ENCODER

 |
| `Name` |

**Type:** string · **Default:** IOx · **Maximum length:** 20

 |
| `InputSettings` |
| `Logic` |

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-logic-t)

 |
| `Debounce` |

**Type:** integer · **Default:** 10 · **Minimum:** 1 · **Maximum:** 1000

 |
| `Sensitivity` |

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - EDGE
 * 1 - LEVEL

 |
| `Reserved1` |

**Type:** integer · **Default:** 0

 |
| `Reserved2` |

**Type:** integer · **Default:** 0

 |

 |
| `OutputSettings` |
| `Logic` |

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-logic-t)

 |
| `OutputMode` |

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
 * 0 - PNP
 * 1 - NPN
 * 2 - PUSH_PULL

 |
| `RestartType` |

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
 * 0 - RESTART_IMMEDATE
 * 1 - RESTART_TIME
 * 2 - RESTART_INPUT

 |
| `RestartTime` |

**Type:** integer · **Default:** 200 · **Minimum:** 20 · **Maximum:** 600000

 |
| `RestartInput` |

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 8

 |
| `Combination` |

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Default:** 1

Mapping:
 * 0 - AND
 * 1 - OR
 * 2 - XOR

 |
| `Reserved3` |

**Type:** integer · **Default:** 0

 |
| `Reserved4` |

**Type:** integer · **Default:** 0

 |
| `Sources` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 128

**Items:**
| `Name` |

**Type:** string · **Default:**      · **Minimum length:** 4 · **Maximum length:** 4

 |
| `Invert` |

**Type:** boolean · **Default:** false

 |
| `Reserved5` |

**Type:** integer · **Default:** 0

 |
| `Reserved6` |

**Type:** integer · **Default:** 0

 |

 |

 |
| `EncoderPortType` |

**Allowed values:**

```
[
  0,
  1,
  2,
  3,
  4
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - NONE
 * 1 - ENCODER_A
 * 2 - ENCODER_B
 * 3 - AUX1
 * 4 - AUX2

 |
| --- | --- |
| `Reserved8` |

**Type:** integer · **Default:** 0

 |
| `Reserved9` |

**Type:** integer · **Default:** 0

 |
| `Reserved10` |

**Type:** integer · **Default:** 0

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [POST /SetOutput](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-setoutput)

Sets the state of an individual output. The output source must first be set to "SOPAS command".

**Editable JSON template**

```json
{
  "data": {
    "Output": "<integer>",
    "Value": "<integer>"
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`data`
| `Output` |

**Type:** integer

 |
| --- | --- |
| `Value` |

**Type:** integer

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`Success`

**Type:** boolean · **Default:** false

 |

#### [GET /InputState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-inputstate)

Returns the state of all inputs.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/InputState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `uiVersionNumber` |

**Type:** integer · **Default:** 1

 |
| `udiSystCount` |

**Type:** integer

 |
| `aDigitalIn` |

**Type:** array · **Minimum items:** 8 · **Maximum items:** 8

**Items:**

`IOState`

**Fields:** [IOState_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-iostate-t)

 |
| `aTimeBlock` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-datetime-t)

 |

 |

#### [GET /OutputState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-outputstate)

Returns the state of all outputs.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/OutputState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `uiVersionNumber` |

**Type:** integer · **Default:** 1

 |
| `udiSystCount` |

**Type:** integer

 |
| `aDigitalOut` |

**Type:** array · **Minimum items:** 8 · **Maximum items:** 8

**Items:**
| `IOState` |

**Fields:** [IOState_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-iostate-t)

 |
| `udiCounter` |

**Type:** integer

 |

 |
| `aTimeBlock` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-datetime-t)

 |
| --- | --- |

 |

#### [GET /PortState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-portstate)

Returns the state of the ports. "PortState" is preferred over "OutputState".

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/PortState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `uiVersionNumber` |

**Type:** integer

 |
| `udiSystCount` |

**Type:** integer

 |
| `aInternalPorts` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 8

**Items:**

**Fields:** [PortStateAndCounter_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-portstateandcounter-t)

 |
| `aExternalPorts` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 8

**Items:**

**Fields:** [PortStateAndCounter_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-portstateandcounter-t)

 |
| `aTimeBlock` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-datetime-t)

 |

 |

#### [POST /mResetOutputCounter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-mresetoutputcounter)

Resets the counter for the outputs.

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
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-postbodyheader)

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
  1
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - SOPAS_ERR_NO_ERR
 * 1 - SOPAS_ERR_STATE_CHANGE_NOT_PERMITTED

 |

### 13 - Measurement data output 

#### [GET /ScanDataEthSettings](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-scandataethsettings)

Returns/sets the destination IP address settings for measurement data streaming (UDP).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ScanDataEthSettings"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `Protocol` |

**Allowed values:**

```
[
  1,
  2
]
```

**Type:** integer · **Default:** 1

Mapping:
 * 1 - UDP
 * 2 - TCP

 |
| `IPAddress` |

**Default:**

```
[
  192,
  168,
  0,
  100
]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 4

**Items:**

**Type:** integer

 |
| `Port` |

**Type:** integer · **Default:** 2115

 |

 |

#### [POST /ScanDataEthSettings](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-scandataethsettings)

Returns/sets the destination IP address settings for measurement data streaming (UDP).

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
    "ScanDataEthSettings": {
      "Protocol": 1,
      "IPAddress": [
        192,
        168,
        0,
        100
      ],
      "Port": 2115
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

`ScanDataEthSettings`
| `Protocol` |

**Allowed values:**

```
[
  1,
  2
]
```

**Type:** integer · **Default:** 1

Mapping:
 * 1 - UDP
 * 2 - TCP

 |
| `IPAddress` |

**Default:**

```
[
  192,
  168,
  0,
  100
]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 4

**Items:**

**Type:** integer

 |
| `Port` |

**Type:** integer · **Default:** 2115

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /ScanDataEnable](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-scandataenable)

Enables/disables the measurement data streaming. The measurement data itself is sent via a UDP-based SICK-specific format. A Python example can be found at https://github.com/SICKAG/ScanSegmentAPI.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ScanDataEnable"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ScanDataEnable`

**Type:** boolean · **Default:** false

 |

#### [POST /ScanDataEnable](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-scandataenable)

Enables/disables the measurement data streaming. The measurement data itself is sent via a UDP-based SICK-specific format. A Python example can be found at https://github.com/SICKAG/ScanSegmentAPI.

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
    "ScanDataEnable": false
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

`ScanDataEnable`

**Type:** boolean · **Default:** false

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /ScanDataFormat](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-scandataformat)

Although this endpoint lists `4` (`NativeROS2`), multiScan100 does not support native ROS 2 output. To use ROS 2, run [sick_scan_xd](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/ros-integration/#sick_scan_xd) on the host.

Returns/sets the scan data format (e.g. Compact format).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ScanDataFormat"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ScanDataFormat`

**Allowed values:**

```
[
  1,
  2,
  3,
  4
]
```

**Type:** integer · **Default:** 2

Mapping:
 * 1 - MSGPACK
 * 2 - Compact
 * 3 - LMDscandata
 * 4 - NativeROS2

 |

#### [POST /ScanDataFormat](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-scandataformat)

Returns/sets the scan data format (e.g. Compact format).

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
    "ScanDataFormat": 2
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

`ScanDataFormat`

**Allowed values:**

```
[
  1,
  2,
  3,
  4
]
```

**Type:** integer · **Default:** 2

Mapping:
 * 1 - MSGPACK
 * 2 - Compact
 * 3 - LMDscandata
 * 4 - NativeROS2

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /ScanDataPreformatting](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-scandatapreformatting)

Returns/sets the azimuth reordering mode for the layers. In Raw mode, no reordering is performed. In Rectified mode, the layers are reordered so that their azimuth angle ranges match as closely as possible.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ScanDataPreformatting"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ScanDataPreformatting`

**Allowed values:**

```
[
  1,
  2
]
```

**Type:** integer · **Default:** 1

Mapping:
 * 1 - Raw
 * 2 - Rectified

 |

#### [POST /ScanDataPreformatting](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-scandatapreformatting)

Returns/sets the azimuth reordering mode for the layers. In Raw mode, no reordering is performed. In Rectified mode, the layers are reordered so that their azimuth angle ranges match as closely as possible.

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
    "ScanDataPreformatting": 1
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

`ScanDataPreformatting`

**Allowed values:**

```
[
  1,
  2
]
```

**Type:** integer · **Default:** 1

Mapping:
 * 1 - Raw
 * 2 - Rectified

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

### 14 - IMU data output 

#### [GET /ImuDataEthSettings](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-imudataethsettings)

Returns/sets the destination IP address settings for IMU data streaming (UDP).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ImuDataEthSettings"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `Protocol` |

**Allowed values:**

```
[
  1,
  2
]
```

**Type:** integer · **Default:** 1

Mapping:
 * 1 - UDP
 * 2 - TCP

 |
| `IPAddress` |

**Default:**

```
[
  192,
  168,
  0,
  100
]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 4

**Items:**

**Type:** integer

 |
| `Port` |

**Type:** integer · **Default:** 7503

 |

 |

#### [POST /ImuDataEthSettings](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-imudataethsettings)

Returns/sets the destination IP address settings for IMU data streaming (UDP).

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
    "ImuDataEthSettings": {
      "Protocol": 1,
      "IPAddress": [
        192,
        168,
        0,
        100
      ],
      "Port": 7503
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

`ImuDataEthSettings`
| `Protocol` |

**Allowed values:**

```
[
  1,
  2
]
```

**Type:** integer · **Default:** 1

Mapping:
 * 1 - UDP
 * 2 - TCP

 |
| `IPAddress` |

**Default:**

```
[
  192,
  168,
  0,
  100
]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 4

**Items:**

**Type:** integer

 |
| `Port` |

**Type:** integer · **Default:** 7503

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /ImuDataEnable](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-imudataenable)

Enables/disables IMU data streaming.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ImuDataEnable"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ImuDataEnable`

**Type:** boolean · **Default:** false

 |

#### [POST /ImuDataEnable](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-imudataenable)

Enables/disables IMU data streaming.

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
    "ImuDataEnable": false
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

`ImuDataEnable`

**Type:** boolean · **Default:** false

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /InertialMeasurementUnit](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-inertialmeasurementunit)

Returns the current IMU data (e.g. acceleration and orientation). The data uses a coordinate system based on DIN 70000. The x-axis lies on the 90-degree beam of the 0-degree layer. The y-axis is perpendicular to the x-axis and lies in the 0-degree layer. The y-values increase in the counterclockwise rotation direction (right-handed system). The z-axis is perpendicular to the x-y plane, with positive values pointing toward the top of the scanner.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/InertialMeasurementUnit"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `Acceleration` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 3

**Items:**

**Type:** number · **Default:** 0.0

 |
| `AngularVelocity` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 3

**Items:**

**Type:** number · **Default:** 0.0

 |
| `Orientation` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 4

**Items:**

**Type:** number · **Default:** 0.0

 |
| `TimeStamp` |

**Type:** integer

 |

 |

### 15 - Data reduction 

#### [GET /LFPangleRangeFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-lfpanglerangefilter)

Returns/sets the angle range filter settings. The filter restricts the output scan to a specified angle range. Filtered measurement values are set to 0. If an entire data segment is set to 0, it is no longer output.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LFPangleRangeFilter"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `fThetaStart` |

**Type:** integer · **Default:** -900000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `fThetaStop` |

**Type:** integer · **Default:** 900000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `fPhiStart` |

**Type:** integer · **Default:** -900000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `fPhiStop` |

**Type:** integer · **Default:** 900000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `uiBeamIncrement` |

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 20

 |

 |

#### [POST /LFPangleRangeFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-lfpanglerangefilter)

Returns/sets the angle range filter settings. The filter restricts the output scan to a specified angle range. Filtered measurement values are set to 0. If an entire data segment is set to 0, it is no longer output.

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
    "LFPangleRangeFilter": {
      "bEnable": false,
      "fThetaStart": -900000,
      "fThetaStop": 900000,
      "fPhiStart": -900000,
      "fPhiStop": 900000,
      "uiBeamIncrement": 1
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

`LFPangleRangeFilter`
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `fThetaStart` |

**Type:** integer · **Default:** -900000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `fThetaStop` |

**Type:** integer · **Default:** 900000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `fPhiStart` |

**Type:** integer · **Default:** -900000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `fPhiStop` |

**Type:** integer · **Default:** 900000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `uiBeamIncrement` |

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 20

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /LFPintervalFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-lfpintervalfilter)

Returns/sets the interval filter settings. The filter reduces the scan output rate by a given factor.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LFPintervalFilter"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `uiReductionFactor` |

**Type:** integer · **Default:** 2 · **Minimum:** 2 · **Maximum:** 50

 |

 |

#### [POST /LFPintervalFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-lfpintervalfilter)

Returns/sets the interval filter settings. The filter reduces the scan output rate by a given factor.

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
    "LFPintervalFilter": {
      "bEnable": false,
      "uiReductionFactor": 2
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

`LFPintervalFilter`
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `uiReductionFactor` |

**Type:** integer · **Default:** 2 · **Minimum:** 2 · **Maximum:** 50

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /LFPlayerFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-lfplayerfilter)

Returns/sets the layer filter settings. The filter removes selected complete layers from the output data.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LFPlayerFilter"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `aLayers` |

**Default:**

```
[
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true
]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 16

**Items:**

**Type:** boolean · **Default:** false

 |

 |

#### [POST /LFPlayerFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-lfplayerfilter)

Returns/sets the layer filter settings. The filter removes selected complete layers from the output data.

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
    "LFPlayerFilter": {
      "bEnable": false,
      "aLayers": [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
      ]
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

`LFPlayerFilter`
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `aLayers` |

**Default:**

```
[
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true
]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 16

**Items:**

**Type:** boolean · **Default:** false

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

### 16 - Region of interest 

#### [GET /LFPradialDistanceRangeFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-lfpradialdistancerangefilter)

Returns/sets the scanning range filter settings. The filter restricts distance measurements to a specified range. Measurements outside the specified range are assigned a distance and RSSI value of 0.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LFPradialDistanceRangeFilter"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `ulDistMin` |

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 200000

 |
| `ulDistMax` |

**Type:** integer · **Default:** 20000 · **Minimum:** 0 · **Maximum:** 200000

 |

 |

#### [POST /LFPradialDistanceRangeFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-lfpradialdistancerangefilter)

Returns/sets the scanning range filter settings. The filter restricts distance measurements to a specified range. Measurements outside the specified range are assigned a distance and RSSI value of 0.

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
    "LFPradialDistanceRangeFilter": {
      "bEnable": false,
      "ulDistMin": 0,
      "ulDistMax": 20000
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

`LFPradialDistanceRangeFilter`
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `ulDistMin` |

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 200000

 |
| `ulDistMax` |

**Type:** integer · **Default:** 20000 · **Minimum:** 0 · **Maximum:** 200000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /LFPcubicareafilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-lfpcubicareafilter)

Returns/sets the cuboid area filter settings. The cuboid area filter limits the measurement data box defined by its extension along the x- and y-axes.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LFPcubicareafilter"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `lXMin` |

**Type:** integer · **Default:** -20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lXMax` |

**Type:** integer · **Default:** 20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lYMin` |

**Type:** integer · **Default:** -20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lYMax` |

**Type:** integer · **Default:** 20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lZMin` |

**Type:** integer · **Default:** -20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lZMax` |

**Type:** integer · **Default:** 20000 · **Minimum:** -200000 · **Maximum:** 200000

 |

 |

#### [POST /LFPcubicareafilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-lfpcubicareafilter)

Returns/sets the cuboid area filter settings. The cuboid area filter limits the measurement data box defined by its extension along the x- and y-axes.

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
    "LFPcubicareafilter": {
      "bEnable": false,
      "lXMin": -20000,
      "lXMax": 20000,
      "lYMin": -20000,
      "lYMax": 20000,
      "lZMin": -20000,
      "lZMax": 20000
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

`LFPcubicareafilter`
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `lXMin` |

**Type:** integer · **Default:** -20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lXMax` |

**Type:** integer · **Default:** 20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lYMin` |

**Type:** integer · **Default:** -20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lYMax` |

**Type:** integer · **Default:** 20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lZMin` |

**Type:** integer · **Default:** -20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lZMax` |

**Type:** integer · **Default:** 20000 · **Minimum:** -200000 · **Maximum:** 200000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

### 17 - Field evaluation 

#### [GET /FieldEvaluationResult](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-fieldevaluationresult)

Returns the state of all possible fields.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/FieldEvaluationResult"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`FieldEvaluationResult`

**Fields:** [FieldEvaluationResult_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-fieldevaluationresult-t)

 |

#### [POST /ActivateEvaluationGroup](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-activateevaluationgroup)

Sets the activation condition for all existing field evaluation groups (not configured, active, or inactive).

**JSON example**

```json
{
  "data": {
    "List": [
      {
        "GroupId": 1,
        "Activate": true
      },
      {
        "GroupId": 2,
        "Activate": false
      },
      {
        "GroupId": 3,
        "Activate": true
      }
    ]
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
  "List": [
    {
      "Activate": true,
      "GroupId": 1
    },
    {
      "Activate": false,
      "GroupId": 2
    },
    {
      "Activate": true,
      "GroupId": 3
    }
  ]
}
```

`List`

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**
| `GroupId` |

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 48

 |
| --- | --- |
| `Activate` |

**Type:** boolean · **Default:** false

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`Success`

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

**Type:** boolean · **Default:** false

 |

#### [POST /SetFieldEvaluationContour](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-setfieldevaluationcontour)

Sets the contour of an existing field.

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
    "EvaluationId": 1,
    "LowerZLimit": 0,
    "UpperZLimit": 0,
    "Points": [
      {
        "x": 0,
        "y": -1000
      },
      {
        "x": 1000,
        "y": -1000
      },
      {
        "x": 1000,
        "y": 1000
      },
      {
        "x": 0,
        "y": 1000
      }
    ]
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

**Example:**

```
{
  "EvaluationId": 1,
  "LowerZLimit": 0,
  "Points": [
    {
      "x": 0,
      "y": -1000
    },
    {
      "x": 1000,
      "y": -1000
    },
    {
      "x": 1000,
      "y": 1000
    },
    {
      "x": 0,
      "y": 1000
    }
  ],
  "UpperZLimit": 0
}
```
| `EvaluationId` |

**Type:** integer

 |
| `Points` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 100

**Items:**
| `x` |

**Type:** integer · **Default:** 0

 |
| `y` |

**Type:** integer

 |

 |
| `LowerZLimit` |

**Type:** integer · **Minimum:** -100000 · **Maximum:** 100000

 |
| --- | --- |
| `UpperZLimit` |

**Type:** integer · **Minimum:** -100000 · **Maximum:** 100000

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
  2,
  3
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - SOPAS_ERR_NO_ERR
 * 1 - SOPAS_ERR_INVALID_EVALUATION_ID
 * 2 - SOPAS_ERR_INVALID_POLYGON
 * 3 - SOPAS_ERR_INVALID_ZLIM

 |

#### [POST /GetFieldEvaluationContour](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-getfieldevaluationcontour)

Returns the contour of an existing field.

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
    "EvaluationId": 1
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

**Example:**

```
{
  "EvaluationId": 1
}
```

`EvaluationId`

**Type:** integer

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`Contour`

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**
| `EvaluationId` |

**Type:** integer

 |
| `Points` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 100

**Items:**
| `x` |

**Type:** integer · **Default:** 0

 |
| `y` |

**Type:** integer · **Default:** 0

 |

 |
| `LowerZLimit` |

**Type:** integer · **Minimum:** -100000 · **Maximum:** 100000

 |
| --- | --- |
| `UpperZLimit` |

**Type:** integer · **Minimum:** -100000 · **Maximum:** 100000

 |

 |

#### [POST /SetFieldEvaluationConfiguration](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-setfieldevaluationconfiguration)

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

#### [POST /GetFieldEvaluationConfiguration](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-getfieldevaluationconfiguration)

Gets the configuration of a field evaluation.

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
    "EvaluationId": 1
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

**Example:**

```
{
  "EvaluationId": 1
}
```

`EvaluationId`

**Type:** integer

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`Configuration`

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**
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

#### [GET /EvaluationConfigState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-evaluationconfigstate)

Returns the performance state of an evaluation configuration.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EvaluationConfigState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `ActiveBeamsLimit` |

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
 * 0 - OK
 * 1 - WARNING
 * 2 - EXCEEDED

 |
| `ActiveEvaluationsLimit` |

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
 * 0 - OK
 * 1 - WARNING
 * 2 - EXCEEDED

 |
| `NumberOfIntersectingBeams` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

**Type:** integer

 |
| `InputIsOutputErrorList` |

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

**Type:** integer

 |

 |

#### [GET /FieldEvaluationGroupState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-fieldevaluationgroupstate)

Returns the activation condition for all existing field evaluation groups (not configured, active, or inactive).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/FieldEvaluationGroupState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`FieldEvaluationGroupState`

**Type:** array · **Minimum items:** 48 · **Maximum items:** 48

**Items:**

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
 * 0 - NOT_CONFIGURED
 * 1 - ACTIVE
 * 2 - INACTIVE

 |

#### [GET /FieldEvaluationApplicationState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-fieldevaluationapplicationstate)

Returns the state (DEACTIVATED, ACTIVE, CONFIGURING, ERROR) of the field evaluation.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/FieldEvaluationApplicationState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`FieldEvaluationApplicationState`

**Allowed values:**

```
[
  0,
  1,
  2,
  3
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - DEACTIVATED
 * 1 - ACTIVE
 * 2 - CONFIGURING
 * 3 - ERROR

 |

### 18 - Object evaluation 

#### [GET /ObjectEvaluationApplicationState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-objectevaluationapplicationstate)

Returns the application state (DEACTIVATED, ACTIVE, CONFIGURING, ERROR).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ObjectEvaluationApplicationState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ObjectEvaluationApplicationState`

**Allowed values:**

```
[
  0,
  1,
  2,
  3
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - DEACTIVATED
 * 1 - ACTIVE
 * 2 - CONFIGURING
 * 3 - ERROR

 |

#### [GET /ObjectEvaluationResult](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-objectevaluationresult)

Returns the results of all configured object evaluations.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ObjectEvaluationResult"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ObjectEvaluationResult`

**Fields:** [ObjectEvaluationResult_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-objectevaluationresult-t)

 |

#### [GET /ObjectEvaluationConfigState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-objectevaluationconfigstate)

Returns the performance state of an object evaluation configuration.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ObjectEvaluationConfigState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `ActiveBeamsLimit` |

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
 * 0 - OK
 * 1 - WARNING
 * 2 - EXCEEDED

 |
| `ActiveEvaluationsLimit` |

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
 * 0 - OK
 * 1 - WARNING
 * 2 - EXCEEDED

 |
| `NumberOfIntersectingBeams` |

**Default:**

```
[
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

**Type:** integer · **Default:** 0 · **Minimum:** 0

 |
| `InputIsOutputErrorList` |

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

**Type:** integer

 |

 |

#### [GET /ObjectEvaluationGroupState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-objectevaluationgroupstate)

Returns the activation condition for all existing object evaluation groups (not configured, active, or inactive).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ObjectEvaluationGroupState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ObjectEvaluationGroupState`

**Type:** array · **Minimum items:** 48 · **Maximum items:** 48

**Items:**

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
 * 0 - NOT_CONFIGURED
 * 1 - ACTIVE
 * 2 - INACTIVE

 |

#### [POST /ActivateObjectEvaluationGroup](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-activateobjectevaluationgroup)

Activates/deactivates an object evaluation group.

**JSON example**

```json
{
  "data": {
    "List": []
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`data`

`List`

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**
| `GroupId` |

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 48

 |
| --- | --- |
| `Activate` |

**Type:** boolean · **Default:** false

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`Success`

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

**Type:** boolean · **Default:** false

 |

#### [POST /SetObjectEvaluationContour](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-setobjectevaluationcontour)

Sets the region of interest of an object detection evaluation.

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
    "Points": [],
    "LowerZLimit": "<integer>",
    "UpperZLimit": "<integer>"
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
| `Points` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 100

**Items:**
| `x` |

**Type:** integer · **Default:** 0

 |
| `y` |

**Type:** integer

 |

 |
| `LowerZLimit` |

**Type:** integer · **Minimum:** -100000 · **Maximum:** 100000

 |
| --- | --- |
| `UpperZLimit` |

**Type:** integer · **Minimum:** -100000 · **Maximum:** 100000

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
  2,
  3
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - SOPAS_ERR_NO_ERR
 * 1 - SOPAS_ERR_INVALID_EVALUATION_ID
 * 2 - SOPAS_ERR_INVALID_POLYGON
 * 3 - SOPAS_ERR_INVALID_ZLIM

 |

#### [POST /GetObjectEvaluationContour](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-getobjectevaluationcontour)

Gets the region of interest of an object detection evaluation.

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
    "EvaluationId": 1
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

**Example:**

```
{
  "EvaluationId": 1
}
```

`EvaluationId`

**Type:** integer

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`Contour`

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**
| `EvaluationId` |

**Type:** integer

 |
| `Points` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 100

**Items:**
| `x` |

**Type:** integer · **Default:** 0

 |
| `y` |

**Type:** integer · **Default:** 0

 |

 |
| `LowerZLimit` |

**Type:** integer · **Minimum:** -100000 · **Maximum:** 100000

 |
| --- | --- |
| `UpperZLimit` |

**Type:** integer · **Minimum:** -100000 · **Maximum:** 100000

 |

 |

#### [POST /SetObjectEvaluationConfiguration](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-setobjectevaluationconfiguration)

Sets the configuration of an object detection evaluation.

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
      "EvaluationParamsCommon": [
        {
          "MaximumHiddenTime": 500,
          "MinimumObjectAge": 0,
          "TimeForInfringedState": 500,
          "MinimumObjectWidth": 200,
          "MinimumObjectHeight": 0,
          "EnableMaximumSizeFilter": false,
          "MaximumObjectWidth": 2000,
          "MaximumObjectHeight": 2000,
          "MotionState": 1,
          "EnableSpeedFilter": true,
          "MinimumObjectVelocity": 300,
          "MaximumObjectVelocity": 15000,
          "EnableDirectionFilter": false,
          "ObjectDirection": 180,
          "ObjectDirectionUncertainty": 90,
          "Reserved1": 0,
          "Reserved2": 0,
          "Reserved3": 0,
          "Reserved4": 0,
          "Reserved5": 0,
          "Reserved6": 0
        }
      ],
      "ReservedParams1": [],
      "ReservedParams2": []
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

**Fields:** [TrackEvaluation_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-trackevaluation-t)

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

#### [POST /GetObjectEvaluationConfiguration](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-getobjectevaluationconfiguration)

Gets the configuration of an object detection evaluation.

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
    "EvaluationId": 1
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

**Example:**

```
{
  "EvaluationId": 1
}
```

`EvaluationId`

**Type:** integer

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`Configuration`

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**
| `EvaluationId` |

**Type:** integer

 |
| `Name` |

**Type:** string · **Default:**   · **Maximum length:** 20

 |
| `Configuration` |

**Fields:** [TrackEvaluation_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-trackevaluation-t)

 |

 |

### 19 - Perpendicular distance 

#### [GET /perpendicularDistanceResult](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-perpendiculardistanceresult)

Returns the perpendicular distance within a field.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/perpendicularDistanceResult"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `timestamp` |

**Type:** integer

 |
| `evaluations` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**
| `evaluationId` |

**Type:** integer

 |
| `minimumDistance` |

**Type:** integer

 |
| `maximumDistance` |

**Type:** integer

 |
| `minimumDistancePosition` |

**Fields:** [Point3d_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-point3d-t)

 |
| `maximumDistancePosition` |

**Fields:** [Point3d_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-point3d-t)

 |

 |

 |

### 20 - Operating data 

#### [GET /LastParaDate](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-lastparadate)

Returns the last date (e.g. 12.11.2024) when a permanent parameter save was executed.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LastParaDate"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`LastParaDate`

**Type:** string · **Default:** DD.MM.YYYY · **Maximum length:** 10

 |

#### [GET /LastParaTime](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-lastparatime)

Returns the last time (e.g. 13:24) when a permanent parameter save was executed.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LastParaTime"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`LastParaTime`

**Type:** string · **Default:** HH:MM · **Maximum length:** 5

 |

#### [GET /PowerOnCnt](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-poweroncnt)

Returns the number of power-on cycles.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/PowerOnCnt"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`PowerOnCnt`

**Type:** integer · **Default:** 0

 |

#### [GET /DailyOpHours](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-dailyophours)

Returns the runtime duration since the last power-on (non-persistent).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/DailyOpHours"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`DailyOpHours`

**Type:** number · **Default:** 0.0

 |

#### [GET /OpHours](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-ophours)

Returns the total number of operating hours during the lifetime of the device. The resolution is one-tenth of an hour.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/OpHours"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`OpHours`

**Type:** integer · **Default:** 0

 |

#### [GET /CurrentTempDev](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-currenttempdev)

Returns the current device temperature in Celsius.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/CurrentTempDev"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`CurrentTempDev`

**Type:** number · **Default:** 20.0

 |

### 21 - Diagnostic file 

#### [GET /crown/file](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-crown-file)

Downloads the diagnostic file (zip file) if one exists.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/crown/file?filePath=diagnosisDump.zip"
```

**Parameters**

**`filePath`**

**Location:** query

**Required:** true

path

**Type:** string · **Example:** diagnosisDump.zip

**Responses**

**Status `200`**

**Media type: `application/zip`**

**Type:** string · **Format:** binary

**Status `400`**

bad operation

**Status `404`**

file not found

**Status `500`**

Server not found

#### [POST /DoDiagnosisDump](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-dodiagnosisdump)

Creates a diagnostic file (zip file) for further analysis.

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
    "DoRunlevelLoop": true,
    "Output": "file"
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

**Example:**

```
{
  "DoRunlevelLoop": true,
  "Output": "file"
}
```
| `DoRunlevelLoop` |

**Type:** boolean · **Default:** false

 |
| `Output` |

**Type:** string · **Default:**   · **Maximum length:** 64

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

`Successful`

**Type:** boolean · **Default:** false

 |

#### [POST /GetDiagnosisDumpInfo](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-getdiagnosisdumpinfo)

Returns additional metadata about the diagnostic file.

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

**Example:**

```
{
  "DiagDumpExists": true,
  "DiagDumpTimestamp": 247
}
```
| `DiagDumpExists` |

**Type:** boolean · **Default:** false

 |
| `DiagDumpTimestamp` |

**Type:** integer

 |

 |

### 22 - Detection history 

#### [GET /EnableDetectionHistory](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-enabledetectionhistory)

Enables/disables detection history.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EnableDetectionHistory"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EnableDetectionHistory`

**Type:** boolean · **Default:** true

 |

#### [POST /EnableDetectionHistory](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-enabledetectionhistory)

Enables/disables detection history.

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
    "EnableDetectionHistory": true
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

`EnableDetectionHistory`

**Type:** boolean · **Default:** true

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /EvaluationsToLog](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-evaluationstolog)

Returns/sets which evaluations are logged when they are in use.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EvaluationsToLog"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EvaluationsToLog`

**Type:** array · **Minimum items:** 48 · **Maximum items:** 48

**Items:**

**Type:** boolean · **Default:** true

 |

#### [POST /EvaluationsToLog](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-evaluationstolog)

Returns/sets which evaluations are logged when they are in use.

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
    "EvaluationsToLog": [
      true
    ]
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

`EvaluationsToLog`

**Type:** array · **Minimum items:** 48 · **Maximum items:** 48

**Items:**

**Type:** boolean · **Default:** true

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [POST /ResetDetectionHistory](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-resetdetectionhistory)

Resets the detection history logs.

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
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

### 23 - Firmware update 

#### [PUT /update](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-put-update)

Uploads a firmware file (.spk) to the device. The maximum file size is 100 MB.

See [Firmware Update](https://sickag.github.io/sick_lidar_developer_guide/shared-features/firmware-update/) for the firmware update workflow.

This operation uploads a file or uses a non-JSON body. Use the request media type and upload fields below.

**Request body**

**Media type: `application/octet-stream`**

`data`
| `Type` |

**Type:** string

 |
| --- | --- |
| `Binary` |

**Type:** string

 |

**Responses**

**Status `200`**

#### [POST /RunFirmwareUpdate](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-runfirmwareupdate)

Starts the firmware update process. This function requires the user level: Service.

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
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

#### [GET /UpdateState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-updatestate)

Returns the state of the update process.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/UpdateState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`UpdateState`

**Allowed values:**

```
[
  0,
  1,
  2,
  3
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - Initial
 * 1 - Started
 * 2 - Finished
 * 3 - Error

 |

### 24 - Cybersecurity 

#### [GET /httpsStatus](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-httpsstatus)

Returns the status of the HTTPS interface.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/httpsStatus"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `enabled` |

**Type:** boolean · **Default:** false

 |
| `errorCode` |

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-httpserror-t)

 |

 |

#### [GET /certificateBundleInfo](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-certificatebundleinfo)

Returns information about the uploaded certificate bundle.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/certificateBundleInfo"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `uuidBundle` |

**Type:** string · **Default:**   · **Maximum length:** 100

 |
| `certificates` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 4

**Items:**
| `names` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 20

**Items:**

`entry`

**Type:** string · **Default:**   · **Maximum length:** 1000

 |
| `issuer` |

**Type:** string · **Default:**   · **Maximum length:** 1000

 |
| `subject` |

**Type:** string · **Default:**   · **Maximum length:** 1000

 |
| `serialNumber` |

**Type:** string · **Default:**   · **Maximum length:** 119

 |
| `fingerprint` |

**Type:** string · **Default:**   · **Maximum length:** 119

 |
| `validNotBefore` |

**Type:** string · **Default:**                          · **Minimum length:** 24 · **Maximum length:** 24

 |
| `validNotAfter` |

**Type:** string · **Default:**                          · **Minimum length:** 24 · **Maximum length:** 24

 |

 |
| `errorCode` |

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-httpserror-t)

 |
| --- | --- |

 |

#### [POST /removeCertificateBundle](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-removecertificatebundle)

Removes the uploaded certificate bundle.

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
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `success` |

**Type:** boolean · **Default:** false

 |
| `errorCode` |

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-httpserror-t)

 |

 |

#### [POST /setCertificateBundle](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-setcertificatebundle)

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `success` |

**Type:** boolean · **Default:** false

 |
| `errorCode` |

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-httpserror-t)

 |

 |

### 25 - Backup/Restore 

#### [GET /parameterbackup](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-get-parameterbackup)

Downloads the parameter backup file (.json) from the device or uploads it to the device.

See [Configuration Backup and Restore](https://sickag.github.io/sick_lidar_developer_guide/configuration/configuration-backup-and-restore/) for the parameter backup workflow.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/parameterbackup"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `version` |

**Type:** string

 |
| --- | --- |
| `device identification` |

**Type:** string

 |
| `checksum` |

**Type:** string

 |
| `parameters` |

**Type:** array

**Items:**
| `userlevel` |

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-e-user-level-type)

 |
| `parameters` |

**Type:** array

**Items:**
| `name` |

**Type:** string

 |
| `id` |

**Type:** string

 |
| `value` |

**oneOf**

**Type:** integer

**Type:** boolean

**Type:** string

**Type:** object

**Type:** number

 |

 |

 |

#### [PUT /parameterbackup](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-put-parameterbackup)

Downloads the parameter backup file (.json) from the device or uploads it to the device.

See [Configuration Backup and Restore](https://sickag.github.io/sick_lidar_developer_guide/configuration/configuration-backup-and-restore/) for the parameter backup workflow.

This operation uploads a file or uses a non-JSON body. Use the request media type and upload fields below.

**Request body**

**Media type: `multipart/form-data`**

`datei`

**Type:** string · **Format:** binary

Json-Datei

**Responses**

**Status `200`**

#### [POST /CreateParameterBackup](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-createparameterbackup)

Creates a parameter backup file.

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
    "Passphrase": " "
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

`Passphrase`

**Type:** string · **Default:**   · **Maximum length:** 256

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`Result`

**Type:** boolean · **Default:** false

 |

#### [POST /RestoreParameterBackup](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#rest-post-restoreparameterbackup)

Restores the device parameters from the uploaded backup file.

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
    "Passphrase": " "
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

`Passphrase`

**Type:** string · **Default:**   · **Maximum length:** 256

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `RestoreResult` |

**Fields:** [RestoreBackupResult](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-restorebackupresult)

 |
| `ParametersFailedToRestore` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 100

**Items:**

**Type:** string · **Default:**   · **Maximum length:** 256

 |

 |

### Shared request and response fields 

#### ResponseHeader 
| `status` |

**Allowed values:**

```
[
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - Ok
 * 1 - Parsing Failed
 * 2 - Invalid Data
 * 3 - Internal Server Error
 * 4 - Access Denied
 * 5 - Not Found
 * 6 - Out Of Range
 * 7 - Out Of Bounds
 * 8 - Read Only
 * 9 - Illegal Value
 * 10 - Invalid Challenge
 * 11 - Out Of Connections

 |
| --- | --- |
| `message` |

**Type:** string · **Default:** Ok

 |

#### PostBodyHeader 
| `nonce` |

**Type:** string · **Default:**

 |
| --- | --- |
| `opaque` |

**Type:** string · **Default:**

 |
| `realm` |

**Type:** string · **Default:** SICK Sensor

 |
| `response` |

**Type:** string · **Default:**

 |
| `user` |

**Type:** string · **Default:** AuthorizedClient

 |

#### E_USER_LEVEL_TYPE 

**Allowed values:**

```
[
  "Run",
  "Operator",
  "Maintenance",
  "AuthorizedClient",
  "Service"
]
```

**Type:** string · **Default:** Run

#### RestoreBackupResult 

**Allowed values:**

```
[
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  50
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - Ok
 * 1 - ChecksumError
 * 2 - ParseError
 * 3 - DeviceIdentificationError
 * 4 - UpdateRepositoryError
 * 5 - UpdateSourceError
 * 6 - DecryptionError
 * 7 - DecryptionHeaderError
 * 8 - DecryptionLengthError
 * 9 - IoError
 * 10 - VersionConversionError
 * 50 - ComponentRegistryError

#### DeviceStatus 

**Allowed values:**

```
[
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - DS_UnknownState
 * 1 - DS_Startup
 * 2 - DS_ServiceMode
 * 3 - DS_NormalOperation
 * 4 - DS_SuspendedOperation
 * 5 - DS_ServiceRecommended
 * 6 - DS_ServiceRequired
 * 7 - DS_RecoverableError
 * 8 - DS_FatalError

#### httpsError_t 

`error`

**Type:** string · **Default:**   · **Maximum length:** 100

#### Logic_t 

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - ACTIVE_HIGH
 * 1 - ACTIVE_LOW

#### IOState_t 

`eIOState`

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Default:** 2

Mapping:
 * 0 - IOS_LOW
 * 1 - IOS_HIGH
 * 2 - IOS_TRISTATE

#### PortStateAndCounter_t 
| `ePortState` |

**Allowed values:**

```
[
  0,
  1,
  2,
  3,
  4
]
```

**Type:** integer · **Default:** 2

Mapping:
 * 0 - OUTPUT_NOT_ACTIVE
 * 1 - OUTPUT_ACTIVE
 * 2 - TRISTATE
 * 3 - INPUT_ACTIVE
 * 4 - INPUT_NOT_ACTIVE

 |
| --- | --- |
| `PortCounter` |

**Type:** integer

 |

#### DateTime_t 
| `uiYear` |

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 2105

 |
| --- | --- |
| `usiMonth` |

**Type:** integer · **Default:** 1 · **Minimum:** 0 · **Maximum:** 12

 |
| `usiDay` |

**Type:** integer · **Default:** 1 · **Minimum:** 0 · **Maximum:** 31

 |
| `usiHour` |

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 23

 |
| `usiMinute` |

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 59

 |
| `usiSec` |

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 59

 |
| `udiUSec` |

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 999999

 |

#### LedStateType 
| `Color` |

**Allowed values:**

```
[
  0,
  1,
  2,
  3
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - GREEN
 * 1 - YELLOW
 * 2 - RED
 * 3 - WHITE

 |
| --- | --- |
| `Function` |

**Allowed values:**

```
[
  0,
  1,
  2,
  3,
  4,
  5,
  6
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - ON
 * 1 - OFF
 * 2 - BLINKING
 * 3 - BLINKING_FAST
 * 4 - BLINKING_DELAYED
 * 5 - BLINKING_COLOR
 * 6 - BLINKING_YELLOW_RED

 |
| `Id` |

**Type:** string · **Default:**   · **Maximum length:** 8

 |

#### Point3d_t 
| `x` |

**Type:** integer · **Default:** 0 · **Minimum:** -500000 · **Maximum:** 500000

 |
| --- | --- |
| `y` |

**Type:** integer · **Default:** 0 · **Minimum:** -500000 · **Maximum:** 500000

 |
| `z` |

**Type:** integer · **Default:** 0 · **Minimum:** -500000 · **Maximum:** 500000

 |

#### Evaluation_t 
| `Version` |

**Type:** integer · **Default:** 1

 |
| --- | --- |
| `Source` |

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
 * 0 - STANDARD
 * 1 - HIGHRES_6
 * 2 - HIGHRES_14

 |
| `Name` |

**Type:** string · **Default:**   · **Maximum length:** 20

 |
| `ID` |

**Type:** integer · **Default:** 1

 |
| `EvaluationParamsMaskBased` |

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

`InfringementThresholdFactor`

**Type:** integer · **Default:** 80 · **Minimum:** 1 · **Maximum:** 100

 |
| `EvaluationParamsSegmentationBased` |

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

`SampleParam1`

**Type:** integer

 |
| `EvaluationParamsCommon` |

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**
| `MinimumObjectSizeHorizontal` |

**Type:** integer · **Default:** 200 · **Minimum:** 0 · **Maximum:** 5000

 |
| `MinimumObjectSizeVertical` |

**Type:** integer · **Default:** 200 · **Minimum:** 0 · **Maximum:** 5000

 |
| `OcclusionHandling` |

**Type:** boolean · **Default:** false

 |
| `TreatMissingDataAsInfringed` |

**Type:** boolean · **Default:** false

 |
| `TimeForInfringedState` |

**Type:** integer · **Default:** 50 · **Minimum:** 1 · **Maximum:** 10000

 |
| `TimeForFreeState` |

**Type:** integer · **Default:** 50 · **Minimum:** 1 · **Maximum:** 10000

 |
| `Reserved3` |

**Type:** integer

 |
| `Reserved4` |

**Type:** integer

 |

 |
| `EvaluationParamsExitSize` |

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**
| `disableExitSize` |

**Type:** boolean · **Default:** false

 |
| `exitSizeVertical` |

**Type:** integer · **Default:** 70 · **Minimum:** 0 · **Maximum:** 100

 |
| `exitSizeHorizontal` |

**Type:** integer · **Default:** 100 · **Minimum:** 0 · **Maximum:** 100

 |

 |
| `VolumeList` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 48

 |
| --- | --- |

#### EvaluationResult_t 

`State`

**Allowed values:**

```
[
  0,
  1,
  2,
  3,
  4,
  5
]
```

**Type:** integer · **Default:** 0

Mapping:
 * 0 - NOT_CONFIGURED
 * 1 - INACTIVE
 * 2 - FREE
 * 3 - DETECTING_INFRINGED
 * 4 - INFRINGED
 * 5 - DETECTING_FREE

#### FieldEvaluationResult_t 
| `Version` |

**Type:** integer · **Default:** 1

 |
| --- | --- |
| `Timestamp` |

**Type:** integer

 |
| `EvaluationResultList` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

**Fields:** [EvaluationResult_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-evaluationresult-t)

 |

#### TrackEvaluation_t 
| `Version` |

**Type:** integer · **Default:** 1

 |
| --- | --- |
| `EvaluationParamsCommon` |

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**
| `MaximumHiddenTime` |

**Type:** integer · **Default:** 500 · **Minimum:** 0 · **Maximum:** 1000

 |
| `MinimumObjectAge` |

**Type:** integer · **Default:** 0 · **Minimum:** 0

 |
| `TimeForInfringedState` |

**Type:** integer · **Default:** 500 · **Minimum:** 1

 |
| `MinimumObjectWidth` |

**Type:** integer · **Default:** 200 · **Minimum:** 0 · **Maximum:** 200000

 |
| `MinimumObjectHeight` |

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 200000

 |
| `EnableMaximumSizeFilter` |

**Type:** boolean · **Default:** false

 |
| `MaximumObjectWidth` |

**Type:** integer · **Default:** 2000 · **Minimum:** 0 · **Maximum:** 200000

 |
| `MaximumObjectHeight` |

**Type:** integer · **Default:** 2000 · **Minimum:** 0 · **Maximum:** 200000

 |
| `MotionState` |

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Default:** 1

Mapping:
 * 0 - ALL
 * 1 - MOVING
 * 2 - STATIONARY

 |
| `EnableSpeedFilter` |

**Type:** boolean · **Default:** true

 |
| `MinimumObjectVelocity` |

**Type:** integer · **Default:** 300 · **Minimum:** 0 · **Maximum:** 65000

 |
| `MaximumObjectVelocity` |

**Type:** integer · **Default:** 15000 · **Minimum:** 0 · **Maximum:** 65000

 |
| `EnableDirectionFilter` |

**Type:** boolean · **Default:** false

 |
| `ObjectDirection` |

**Type:** integer · **Default:** 180 · **Minimum:** -180 · **Maximum:** 180

 |
| `ObjectDirectionUncertainty` |

**Type:** integer · **Default:** 90 · **Minimum:** 0 · **Maximum:** 180

 |
| `Reserved1` |

**Type:** integer · **Default:** 0

 |
| `Reserved2` |

**Type:** integer · **Default:** 0

 |
| `Reserved3` |

**Type:** integer · **Default:** 0

 |
| `Reserved4` |

**Type:** integer · **Default:** 0

 |
| `Reserved5` |

**Type:** integer · **Default:** 0

 |
| `Reserved6` |

**Type:** integer · **Default:** 0

 |

 |
| `ReservedParams1` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

`ReservedDummy`

**Type:** integer · **Default:** 0

 |
| --- | --- |
| `ReservedParams2` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

`ReservedDummy`

**Type:** integer · **Default:** 0

 |

#### ObjectEvaluationResult_t 
| `Version` |

**Type:** integer · **Default:** 1

 |
| --- | --- |
| `Timestamp` |

**Type:** integer

 |
| `EvaluationResultList` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

**Fields:** [EvaluationResult_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/#schema-evaluationresult-t)

 |
