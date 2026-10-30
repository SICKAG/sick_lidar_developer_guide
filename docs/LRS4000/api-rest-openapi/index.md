# LRS4000 API | REST | OpenAPI V1.10.0

> Download the LRS4000 V1.10.0 OpenAPI description and search REST endpoints, request parameters, and response schemas.

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/

# API | REST | OpenAPI

<div class="tool-intro tool-intro--centered" markdown>

![OpenAPI](https://sickag.github.io/sick_lidar_developer_guide/assets/openapi-logo.png)

This page provides the searchable V1.10.0 REST reference and downloadable
OpenAPI description for LRS4000. For REST concepts, authentication, and request
patterns, see [REST API / OpenAPI](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/).

</div>

[LRS4000_1.10.0.yaml (Download)](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/openapi/LRS4000_1.10.0.yaml)

Always match the file to your device's actual firmware version. Function
availability can vary by variant and installed software package.

### 1 - General 

#### [POST /SetPassword](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-setpassword)

Sets the password for the CoLa A/B interface. In this example the password for userlevel service (4) is set to - test - (Integer value of the password hash - test -). For more details see https://github.com/SICKAG/sick_scan_rest_client.

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

**Type:** integer · **Format:** int8

 |
| --- | --- |
| `udiNewPassword` |

**Type:** integer · **Format:** uint32

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`bSuccess`

**Type:** boolean · **Default:** false

 |

#### [POST /getChallenge](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-getchallenge)

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

#### [POST /changePassword](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-changepassword)

Sets the password for the REST interface. For more details see https://github.com/SICKAG/sick_scan_rest_client.

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

**Type:** integer · **Format:** uint8

 |
| --- | --- |
| `userLevel` |

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-e-user-level-type)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - SUCCESS
 * 2 - NOT_ACCEPTED
 * 4 - PWD_NOT_CHANGABLE
 * 5 - TIMELOCK_ACTIVE

 |

#### [POST /WriteEeprom](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-writeeeprom)

Saves all parameters permanently.

**Editable JSON template**

```json
{
  "header": {
    "nonce": "<nonce from authentication>",
    "opaque": "<opaque from authentication>",
    "realm": "SICK Sensor",
    "response": "<response from authentication>",
    "user": "Run"
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`Success`

**Type:** boolean · **Default:** false

 |

#### [POST /SoftReset](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-softreset)

Reboots the device. All non-saved parameters are lost. This function requires the user level: Service.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

 |
| --- | --- |
| `data` |

`ProcessorNbr`

**Type:** integer · **Format:** uint16

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [POST /RebootDevice](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-rebootdevice)

Reboots the device and includes saving of all parameters. This function requires the user level: Service.

**Editable JSON template**

```json
{
  "header": {
    "nonce": "<nonce from authentication>",
    "opaque": "<opaque from authentication>",
    "realm": "SICK Sensor",
    "response": "<response from authentication>",
    "user": "Run"
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [POST /LoadFactoryDefaults](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-loadfactorydefaults)

Resets all parameters to default. This function requires the user level: Service.

**Editable JSON template**

```json
{
  "header": {
    "nonce": "<nonce from authentication>",
    "opaque": "<opaque from authentication>",
    "realm": "SICK Sensor",
    "response": "<response from authentication>",
    "user": "Run"
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [POST /LoadApplicationDefaults](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-loadapplicationdefaults)

Resets only the user parametrization of the fields, evaluation cases, and parameters under the section Application. Other parameters like interface settings, echo filter, etc. remain unchanged. This function requires the user level: Service.

**Editable JSON template**

```json
{
  "header": {
    "nonce": "<nonce from authentication>",
    "opaque": "<opaque from authentication>",
    "realm": "SICK Sensor",
    "response": "<response from authentication>",
    "user": "Run"
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

### 2 - Status 

#### [GET /DeviceStatus](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-devicestatus)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`DeviceStatus`

**Fields:** [DeviceStatus](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-devicestatus)

 |

#### [GET /SCdevicestate](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-scdevicestate)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - Busy
 * 1 - Ready
 * 2 - Error

 |

### 3 - Device 

#### [GET /DeviceIdent](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-deviceident)

Returns the device name and firmware version.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/DeviceIdent"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `Name` |

**Type:** string · **Default:** LRSNAV · **Maximum length:** 20

 |
| `Version` |

**Type:** string · **Default:** 1.10.0.0R · **Maximum length:** 32

 |

 |

#### [GET /LocationName](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-locationname)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`LocationName`

**Type:** string · **Default:** not defined · **Maximum length:** 16

 |

#### [POST /LocationName](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-locationname)

Returns/sets the device name.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

 |
| --- | --- |
| `data` |

`LocationName`

**Type:** string · **Default:** not defined · **Maximum length:** 16

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /SerialNumber](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-serialnumber)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`SerialNumber`

**Type:** string · **Default:** 12345678 · **Maximum length:** 8

 |

#### [GET /FirmwareVersion](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-firmwareversion)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`FirmwareVersion`

**Type:** string · **Default:** x.x.x.x · **Maximum length:** 32

 |

#### [POST /FindMe](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-findme)

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

**Type:** integer · **Format:** uint16

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /OrderNumber](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-ordernumber)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`OrderNumber`

**Type:** string · **Default:** 1234567 · **Maximum length:** 32

 |

#### [GET /DeviceType](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-devicetype)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`DeviceType`

**Type:** string · **Default:** LRSNAV · **Maximum length:** 18

 |

### 4 - Basic settings 

#### [GET /ScanConfig](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-scanconfig)

Configuration of angular resolution, scanning frequency, start- and stop angle.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ScanConfig"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `udiScanFreq` |

**Type:** integer · **Format:** uint32 · **Default:** 1250 · **Minimum:** 500 · **Maximum:** 2500

 |
| `ScanRange` |
| `uiLength` |

**Type:** integer · **Format:** uint16 · **Default:** 1 · **Minimum:** 1 · **Maximum:** 1

 |
| `aRange` |

**Type:** array · **Minimum items:** 1 · **Maximum items:** 1

**Items:**
| `udiAngleRes` |

**Type:** integer · **Format:** uint32 · **Default:** 1200 · **Minimum:** 200 · **Maximum:** 5000

 |
| `diStartAngle` |

**Type:** integer · **Format:** int32 · **Default:** -1800000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `diStopAngle` |

**Type:** integer · **Format:** int32 · **Default:** 1800000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |

 |

 |

 |

#### [GET /SensitivityMode](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-sensitivitymode)

The sensitivity mode can be used to adjust the detection behavior. A higher sensitivity increases the scanning range. This setting should only be used when there is no direct sunlight and only low ambient light. A higher sensitivity increases the proneness to measurement noise and data loss. Ambient light can negatively affect the signal quality and impair the measurement performance.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/SensitivityMode"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`SensitivityMode`

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - NORMAL
 * 1 - INCREASED
 * 2 - HIGHEST

 |

#### [POST /SensitivityMode](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-sensitivitymode)

The sensitivity mode can be used to adjust the detection behavior. A higher sensitivity increases the scanning range. This setting should only be used when there is no direct sunlight and only low ambient light. A higher sensitivity increases the proneness to measurement noise and data loss. Ambient light can negatively affect the signal quality and impair the measurement performance.

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
    "SensitivityMode": 0
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

`SensitivityMode`

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - NORMAL
 * 1 - INCREASED
 * 2 - HIGHEST

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [POST /SetScanConfigList](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-setscanconfiglist)

Set a new device scan resolution/frequency combination. Please note that configurations, starting with value 3x or 9x switch the device from standard to extended range mode and values starting with x, 1x, 6x, 7x switch the device from extended range to normal mode.

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
    "ScanConfigList": 1
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

**Example:**

```
{
  "ScanConfigList": 1
}
```

`ScanConfigList`

**Fields:** [PerformanceProfiles_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-performanceprofiles-t)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`eScanConfigError`

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - SCE_OK
 * 1 - SCE_ERROR_FREQ
 * 2 - SCE_ERROR_RES
 * 3 - SCE_ERROR_FREQ_RES_COMB
 * 4 - SCE_ERROR_NUM_RANGE
 * 5 - SCE_ERROR

 |

#### [GET /LEDEnable](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-ledenable)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`LEDEnable`

**Type:** boolean · **Default:** true

 |

#### [POST /LEDEnable](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-ledenable)

Returns/sets the LED mode (on/off).

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [POST /mStartMeasure](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-mstartmeasure)

Start motor, measurement and laser.

**Editable JSON template**

```json
{
  "header": {
    "nonce": "<nonce from authentication>",
    "opaque": "<opaque from authentication>",
    "realm": "SICK Sensor",
    "response": "<response from authentication>",
    "user": "Run"
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - SOPAS_ERR_NO_ERR
 * 1 - SOPAS_ERR_STATE_CHANGE_NOT_PERMITTED

 |

#### [POST /mStandby](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-mstandby)

Disable the laser.

**Editable JSON template**

```json
{
  "header": {
    "nonce": "<nonce from authentication>",
    "opaque": "<opaque from authentication>",
    "realm": "SICK Sensor",
    "response": "<response from authentication>",
    "user": "Run"
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - SOPAS_ERR_NO_ERR
 * 1 - SOPAS_ERR_STATE_CHANGE_NOT_PERMITTED

 |

### 5 - Date and system time 

#### [GET /DeviceTime](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-devicetime)

Returns the current time of the internal clock (ms). The timer is 32 bit counter with a resolution of 1 ms.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/DeviceTime"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`DeviceTime`

**Type:** integer · **Format:** uint32 · **Default:** 0

 |

#### [GET /TSCRole](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-tscrole)

Returns/sets the time synchronization role (none = 0 , NTP = 1 or PTP = 3).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/TSCRole"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`TSCRole`

**Allowed values:**

```
[
  0,
  1,
  3,
  4
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - TX_NONE
 * 1 - TX_CLIENT
 * 3 - TX_PTP_SLAVE
 * 4 - TX_PTP_MASTER

 |

#### [POST /TSCRole](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-tscrole)

Returns/sets the time synchronization role (none = 0 , NTP = 1 or PTP = 3).

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

 |
| --- | --- |
| `data` |

`TSCRole`

**Allowed values:**

```
[
  0,
  1,
  3,
  4
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - TX_NONE
 * 1 - TX_CLIENT
 * 3 - TX_PTP_SLAVE
 * 4 - TX_PTP_MASTER

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /TSCTCSrvAddr](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-tsctcsrvaddr)

Returns/sets the NTP time server's IP address.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/TSCTCSrvAddr"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8

 |

#### [POST /TSCTCSrvAddr](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-tsctcsrvaddr)

Returns/sets the NTP time server's IP address.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

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

**Type:** integer · **Format:** uint8

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /TSCTCtimezone](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-tsctctimezone)

Returns/sets the NTP time zone.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/TSCTCtimezone"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 36

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
 * 42 - AMMAN
 * 43 - ATHEN_BUKAREST
 * 44 - BEIRUT
 * 45 - DAMASCUS
 * 46 - HARARE_PRETORIA
 * 47 - HELSINKI_KIEW_RIGA
 * 48 - ISTANBUL
 * 49 - JERUSALEM
 * 50 - KAIRO
 * 51 - KALININGRAD
 * 52 - EASTERN_EUROPE
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

#### [POST /TSCTCtimezone](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-tsctctimezone)

Returns/sets the NTP time zone.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 36

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
 * 42 - AMMAN
 * 43 - ATHEN_BUKAREST
 * 44 - BEIRUT
 * 45 - DAMASCUS
 * 46 - HARARE_PRETORIA
 * 47 - HELSINKI_KIEW_RIGA
 * 48 - ISTANBUL
 * 49 - JERUSALEM
 * 50 - KAIRO
 * 51 - KALININGRAD
 * 52 - EASTERN_EUROPE
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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /TSCTCupdatetime](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-tsctcupdatetime)

Returns/sets the NTP update time.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/TSCTCupdatetime"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`TSCTCupdatetime`

**Type:** integer · **Format:** uint32 · **Default:** 600 · **Minimum:** 1 · **Maximum:** 3600

 |

#### [POST /TSCTCupdatetime](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-tsctcupdatetime)

Returns/sets the NTP update time.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

 |
| --- | --- |
| `data` |

`TSCTCupdatetime`

**Type:** integer · **Format:** uint32 · **Default:** 600 · **Minimum:** 1 · **Maximum:** 3600

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /DateTime](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-datetime)

Returns the current time of the device (years, months, days, hours, minutes, seconds, microseconds).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/DateTime"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`DateTime`

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-datetime-t)

 |

#### [POST /mSetDateTime](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-msetdatetime)

Sets the time of the device (years, months, days, hours, minutes, seconds, microseconds).

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

 |
| --- | --- |
| `data` |

`DateTime`

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-datetime-t)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - SOPAS_ERR_NO_ERR
 * 1 - SOPAS_ERR_STATE_CHANGE_NOT_PERMITTED

 |

### 6 - Filter 

#### [GET /FREchoFilter](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-frechofilter)

Returns/sets the multi-echo filter settings. Depending on the environment the sensor receives several measurement points on the same angular step (multi-echo). The filter can filter out the first echo, the last echo or all echoes.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/FREchoFilter"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 2

Mapping:
 * 0 - FIRST_ECHO
 * 1 - ALL_ECHOS
 * 2 - LAST_ECHO

 |

#### [POST /FREchoFilter](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-frechofilter)

Returns/sets the multi-echo filter settings. Depending on the environment the sensor receives several measurement points on the same angular step (multi-echo). The filter can filter out the first echo, the last echo or all echoes.

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
    "FREchoFilter": 2
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

`FREchoFilter`

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Format:** uint8 · **Default:** 2

Mapping:
 * 0 - FIRST_ECHO
 * 1 - ALL_ECHOS
 * 2 - LAST_ECHO

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /ParticleFilter](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-particlefilter)

Returns/sets the particle filter settings. Filters out disturbances in the measurement data caused by particles such as dust, snowflakes, or similar. Configure the minimal threshold of the required distance step (mm) between the echo to be filtered and the echoes of surrounding beam angles.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ParticleFilter"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `uiThreshold` |

**Type:** integer · **Format:** uint16 · **Default:** 1000 · **Minimum:** 500 · **Maximum:** 5000

 |

 |

#### [POST /ParticleFilter](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-particlefilter)

Returns/sets the particle filter settings. Filters out disturbances in the measurement data caused by particles such as dust, snowflakes, or similar. Configure the minimal threshold of the required distance step (mm) between the echo to be filtered and the echoes of surrounding beam angles.

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
    "ParticleFilter": {
      "bEnable": false,
      "uiThreshold": 1000
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

`ParticleFilter`
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `uiThreshold` |

**Type:** integer · **Format:** uint16 · **Default:** 1000 · **Minimum:** 500 · **Maximum:** 5000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /MeanFilter](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-meanfilter)

Returns/sets the mean filter settings. This filter smooths the distance value by calculating the arithmetic mean from the configured number of scans.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/MeanFilter"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `uiScanNumber` |

**Type:** integer · **Format:** uint16 · **Default:** 10 · **Minimum:** 2 · **Maximum:** 100

 |
| `eFilterMethod` |

**Allowed values:**

```
[
  0
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - ARITHMETIC

 |

 |

#### [POST /MeanFilter](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-meanfilter)

Returns/sets the mean filter settings. This filter smooths the distance value by calculating the arithmetic mean from the configured number of scans.

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
    "MeanFilter": {
      "bEnable": false,
      "uiScanNumber": 10,
      "eFilterMethod": 0
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

`MeanFilter`
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `uiScanNumber` |

**Type:** integer · **Format:** uint16 · **Default:** 10 · **Minimum:** 2 · **Maximum:** 100

 |
| `eFilterMethod` |

**Allowed values:**

```
[
  0
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - ARITHMETIC

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /LFPmedianfilter](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-lfpmedianfilter)

Returns/sets the median filter settings. This filter smooths the distance values by transmitting just the median value of the last X scans.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LFPmedianfilter"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `uiMedianWidth` |

**Type:** integer · **Format:** uint16 · **Default:** 3 · **Minimum:** 3 · **Maximum:** 3

 |

 |

#### [POST /LFPmedianfilter](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-lfpmedianfilter)

Returns/sets the median filter settings. This filter smooths the distance values by transmitting just the median value of the last X scans.

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
    "LFPmedianfilter": {
      "bEnable": false,
      "uiMedianWidth": 3
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

`LFPmedianfilter`
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `uiMedianWidth` |

**Type:** integer · **Format:** uint16 · **Default:** 3 · **Minimum:** 3 · **Maximum:** 3

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

### 7 - Contamination indication 

#### [GET /ContaminationConfig](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-contaminationconfig)

Returns/sets of the contamination indication settings such as sensitivity, response time, threshold for warning, and active sectors.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ContaminationConfig"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - CM_STRATEGY_INACTIVE
 * 1 - CM_STRATEGY_HIGH_AVAILABLE
 * 2 - CM_STRATEGY_SENSITIVE

 |
| `usiResponseTime` |

**Type:** integer · **Format:** uint16 · **Default:** 3 · **Minimum:** 0 · **Maximum:** 60

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

**Type:** integer · **Format:** uint8 · **Default:** 1

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
  255,
  128,
  1,
  2,
  3,
  4,
  5
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - CM_COVER_NONE
 * 255 - CM_COVER_CUSTOM_SECTORS
 * 128 - CM_COVER_REAR_MOUNTING_BRACKETS
 * 1 - CM_COVER_210_NO_FLAPS
 * 2 - CM_COVER_210_FLAP_LEFT
 * 3 - CM_COVER_210_FLAP_RIGTH
 * 4 - CM_COVER_210_BOTH_FLAPS
 * 5 - CM_COVER_275

 |
| `CustomSectors` |

**Type:** array · **Minimum items:** 12 · **Maximum items:** 12

**Items:**

**Type:** boolean · **Default:** false

 |
| `bEnableWarning` |

**Type:** boolean · **Default:** true

 |
| `bEnableError` |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /ContaminationConfig](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-contaminationconfig)

Returns/sets of the contamination indication settings such as sensitivity, response time, threshold for warning, and active sectors.

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
    "ContaminationConfig": {
      "eStrategy": 0,
      "usiResponseTime": 3,
      "eThreshold": 1,
      "eCover": 0,
      "CustomSectors": [
        false
      ],
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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - CM_STRATEGY_INACTIVE
 * 1 - CM_STRATEGY_HIGH_AVAILABLE
 * 2 - CM_STRATEGY_SENSITIVE

 |
| `usiResponseTime` |

**Type:** integer · **Format:** uint16 · **Default:** 3 · **Minimum:** 0 · **Maximum:** 60

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

**Type:** integer · **Format:** uint8 · **Default:** 1

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
  255,
  128,
  1,
  2,
  3,
  4,
  5
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - CM_COVER_NONE
 * 255 - CM_COVER_CUSTOM_SECTORS
 * 128 - CM_COVER_REAR_MOUNTING_BRACKETS
 * 1 - CM_COVER_210_NO_FLAPS
 * 2 - CM_COVER_210_FLAP_LEFT
 * 3 - CM_COVER_210_FLAP_RIGTH
 * 4 - CM_COVER_210_BOTH_FLAPS
 * 5 - CM_COVER_275

 |
| `CustomSectors` |

**Type:** array · **Minimum items:** 12 · **Maximum items:** 12

**Items:**

**Type:** boolean · **Default:** false

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /ContaminationData](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-contaminationdata)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ContaminationData`

**Type:** array · **Minimum items:** 12 · **Maximum items:** 12

**Items:**

**Fields:** [ContaminationData_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-contaminationdata-t)

 |

#### [GET /ContaminationActiveSectors](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-contaminationactivesectors)

Returns the active contamination sectors. Starts with right backside of the sensor when looking to the device on topside view and continues counterclockwise.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ContaminationActiveSectors"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ContaminationActiveSectors`

**Type:** array · **Minimum items:** 12 · **Maximum items:** 12

**Items:**

**Type:** boolean · **Default:** false

 |

#### [GET /ContaminationResult](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-contaminationresult)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `warningActive` |

**Type:** boolean · **Default:** false

 |
| `errorActive` |

**Type:** boolean · **Default:** false

 |

 |

### 8 - Ethernet 

#### [GET /EtherIPAddress](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-etheripaddress)

Returns/sets used static IP address.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherIPAddress"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8

 |

#### [POST /EtherIPAddress](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-etheripaddress)

Returns/sets used static IP address.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

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

**Type:** integer · **Format:** uint8

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /EtherIPGateAddress](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-etheripgateaddress)

Returns/sets default gateway address.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherIPGateAddress"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8

 |

#### [POST /EtherIPGateAddress](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-etheripgateaddress)

Returns/sets default gateway address.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

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

**Type:** integer · **Format:** uint8

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /EtherIPMask](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-etheripmask)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8

 |

#### [POST /EtherIPMask](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-etheripmask)

Returns/sets the subnet mask.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

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

**Type:** integer · **Format:** uint8

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /EtherAddressingMode](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-etheraddressingmode)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - TX_IP_STATIC
 * 1 - TX_IP_DHCP

 |

#### [POST /EtherAddressingMode](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-etheraddressingmode)

Returns/sets the mode for the IP address assignment (static or DHCP).

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - TX_IP_STATIC
 * 1 - TX_IP_DHCP

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /EtherDHCPFallback](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-etherdhcpfallback)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 1

Mapping:
 * 0 - TX_USE_STATIC_IP
 * 1 - TX_RETRY_DHCP

 |

#### [POST /EtherDHCPFallback](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-etherdhcpfallback)

Returns/sets the mode for the DHCP fallback (retry or static).

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
    "EtherDHCPFallback": 1
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

`EtherDHCPFallback`

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Format:** uint8 · **Default:** 1

Mapping:
 * 0 - TX_USE_STATIC_IP
 * 1 - TX_RETRY_DHCP

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [POST /EthernetUpdate](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-ethernetupdate)

Applies the ethernet settings. This needs to be executed to actually change the ethernet settings.

**Editable JSON template**

```json
{
  "header": {
    "nonce": "<nonce from authentication>",
    "opaque": "<opaque from authentication>",
    "realm": "SICK Sensor",
    "response": "<response from authentication>",
    "user": "Run"
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /EtherIPAddressDHCP](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-etheripaddressdhcp)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8

 |

#### [GET /EtherIPGateAddressDHCP](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-etheripgateaddressdhcp)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8

 |

#### [GET /EtherIPMaskDHCP](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-etheripmaskdhcp)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8

 |

#### [GET /EtherMACAddress](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-ethermacaddress)

Returns the MAC address of the ethernet interface.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherMACAddress"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8

 |

#### [POST /EtherColaTransmitTimeout](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-ethercolatransmittimeout)

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

### 9 - Legacy protocols 

#### [GET /EtherAuxEnabled](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-etherauxenabled)

Enables/disables the legacy interface CoLa A/B. If enabled CoLa A uses port 2111 and CoLa B uses 2112.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherAuxEnabled"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherAuxEnabled`

**Type:** boolean · **Default:** true

 |

#### [POST /EtherAuxEnabled](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-etherauxenabled)

Enables/disables the legacy interface CoLa A/B. If enabled CoLa A uses port 2111 and CoLa B uses 2112.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /EnableColaScan](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-enablecolascan)

Enables/disables the device search by SICK tools. If disabled, finding the device via device search and changing the IP address via SICK tools is not possible.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EnableColaScan"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EnableColaScan`

**Type:** boolean · **Default:** true

 |

#### [POST /EnableColaScan](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-enablecolascan)

Enables/disables the device search by SICK tools. If disabled, finding the device via device search and changing the IP address via SICK tools is not possible.

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
    "EnableColaScan": true
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

`EnableColaScan`

**Type:** boolean · **Default:** true

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

### 10 - Webserver settings 

#### [POST /SetWebserverEnabled](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-setwebserverenabled)

Sets availability of the webserver (reboot required). If disabled, the webserver-based GUI and the REST interface can not be used anymore.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

### 11 - Inputs and outputs 

#### [GET /InputState](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-inputstate)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `uiVersionNumber` |

**Type:** integer · **Format:** uint16 · **Default:** 1

 |
| `udiSystCount` |

**Type:** integer · **Format:** uint32

 |
| `aDigitalIn` |

**Type:** array · **Minimum items:** 6 · **Maximum items:** 6

**Items:**

`IOState`

**Fields:** [IOState_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-iostate-t)

 |
| `aTimeBlock` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-datetime-t)

 |

 |

#### [GET /OutputState](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-outputstate)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `uiVersionNumber` |

**Type:** integer · **Format:** uint16 · **Default:** 1

 |
| `udiSystCount` |

**Type:** integer · **Format:** uint32

 |
| `aDigitalOut` |

**Type:** array · **Minimum items:** 6 · **Maximum items:** 6

**Items:**
| `IOState` |

**Fields:** [IOState_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-iostate-t)

 |
| `udiCounter` |

**Type:** integer · **Format:** uint32

 |

 |
| `aTimeBlock` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-datetime-t)

 |
| --- | --- |

 |

#### [GET /PortState](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-portstate)

Returns the state of the ports. PortState is preferred over OutputState.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/PortState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `uiVersionNumber` |

**Type:** integer · **Format:** uint16

 |
| `udiSystCount` |

**Type:** integer · **Format:** uint32

 |
| `aInternalPorts` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 6

**Items:**

**Fields:** [PortStateAndCounter_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-portstateandcounter-t)

 |
| `aExternalPorts` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 6

**Items:**

**Fields:** [PortStateAndCounter_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-portstateandcounter-t)

 |
| `aTimeBlock` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-datetime-t)

 |

 |

#### [POST /mResetOutputCounter](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-mresetoutputcounter)

Resets the counter for the outputs.

**Editable JSON template**

```json
{
  "header": {
    "nonce": "<nonce from authentication>",
    "opaque": "<opaque from authentication>",
    "realm": "SICK Sensor",
    "response": "<response from authentication>",
    "user": "Run"
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - SOPAS_ERR_NO_ERR
 * 1 - SOPAS_ERR_STATE_CHANGE_NOT_PERMITTED

 |

#### [GET /PortConfiguration](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-portconfiguration)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`PortConfiguration`

**Type:** array · **Minimum items:** 6 · **Maximum items:** 6

**Items:**
| `PortType` |

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - INPUT
 * 1 - OUTPUT

 |
| `Name` |

**Type:** string · **Default:** IOx · **Maximum length:** 20

 |
| `InputSettings` |
| `Logic` |

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-logic-t)

 |
| `Debounce` |

**Type:** integer · **Format:** uint16 · **Default:** 10 · **Minimum:** 5 · **Maximum:** 10000

 |
| `Sensitivity` |

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - EDGE
 * 1 - LEVEL

 |
| `Reserved1` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Reserved2` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |

 |
| `OutputSettings` |
| `Logic` |

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-logic-t)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - RESTART_IMMEDATE
 * 1 - RESTART_TIME
 * 2 - RESTART_INPUT

 |
| `RestartTime` |

**Type:** integer · **Format:** uint32 · **Default:** 200 · **Minimum:** 20 · **Maximum:** 600000

 |
| `RestartInput` |

**Type:** integer · **Format:** uint16 · **Default:** 1 · **Minimum:** 1 · **Maximum:** 8

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

**Type:** integer · **Format:** uint8 · **Default:** 1

Mapping:
 * 0 - AND
 * 1 - OR
 * 2 - XOR

 |
| `Reserved3` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Reserved4` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Sources` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 20

**Items:**
| `Name` |

**Type:** string · **Default:**      · **Minimum length:** 4 · **Maximum length:** 4

 |
| `Invert` |

**Type:** boolean · **Default:** false

 |
| `Reserved5` |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |
| `Reserved6` |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |

 |

 |
| `Reserved7` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| --- | --- |
| `Reserved8` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Reserved9` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Reserved10` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |

 |

#### [POST /PortConfiguration](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-portconfiguration)

Returns/sets the port configuration of all I/Os.

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
  "data": [
    {
      "PortType": 0,
      "Name": "InOut1",
      "InputSettings": {
        "Logic": 0,
        "Debounce": 5,
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
    }
  ]
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

**Example:**

```
[
  {
    "InputSettings": {
      "Debounce": 5,
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
  }
]
```

`PortConfiguration`

**Type:** array · **Minimum items:** 6 · **Maximum items:** 6

**Items:**
| `PortType` |

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - INPUT
 * 1 - OUTPUT

 |
| `Name` |

**Type:** string · **Default:** IOx · **Maximum length:** 20

 |
| `InputSettings` |
| `Logic` |

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-logic-t)

 |
| `Debounce` |

**Type:** integer · **Format:** uint16 · **Default:** 10 · **Minimum:** 5 · **Maximum:** 10000

 |
| `Sensitivity` |

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - EDGE
 * 1 - LEVEL

 |
| `Reserved1` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Reserved2` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |

 |
| `OutputSettings` |
| `Logic` |

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-logic-t)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - RESTART_IMMEDATE
 * 1 - RESTART_TIME
 * 2 - RESTART_INPUT

 |
| `RestartTime` |

**Type:** integer · **Format:** uint32 · **Default:** 200 · **Minimum:** 20 · **Maximum:** 600000

 |
| `RestartInput` |

**Type:** integer · **Format:** uint16 · **Default:** 1 · **Minimum:** 1 · **Maximum:** 8

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

**Type:** integer · **Format:** uint8 · **Default:** 1

Mapping:
 * 0 - AND
 * 1 - OR
 * 2 - XOR

 |
| `Reserved3` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Reserved4` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Sources` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 20

**Items:**
| `Name` |

**Type:** string · **Default:**      · **Minimum length:** 4 · **Maximum length:** 4

 |
| `Invert` |

**Type:** boolean · **Default:** false

 |
| `Reserved5` |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |
| `Reserved6` |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |

 |

 |
| `Reserved7` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| --- | --- |
| `Reserved8` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Reserved9` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Reserved10` |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [POST /SetOutput](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-setoutput)

Sets the output state for an individual output. Precondition: output source set to SOPAS command.

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

**Type:** integer · **Format:** uint8

 |
| --- | --- |
| `Value` |

**Type:** integer · **Format:** uint8

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`Success`

**Type:** boolean · **Default:** false

 |

### 12 - Data output 

#### [GET /DataOutputRange](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-dataoutputrange)

Select the start and stop angle of the measurement data output for the currently active configuration. Once a valid configuration is set, the device will transmit valid distance values between the selected start and stop angle and for all other angles zero values. The amount of transmitted data will not be reduced by using this function.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/DataOutputRange"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `uiLength` |

**Type:** integer · **Format:** uint16 · **Default:** 1 · **Minimum:** 1 · **Maximum:** 1

 |
| `aRange` |

**Type:** array · **Minimum items:** 1 · **Maximum items:** 1

**Items:**
| `udiAngleRes` |

**Type:** integer · **Format:** uint32 · **Default:** 1200 · **Minimum:** 200 · **Maximum:** 4800

 |
| `diStartAngle` |

**Type:** integer · **Format:** int32 · **Default:** -1800000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `diStopAngle` |

**Type:** integer · **Format:** int32 · **Default:** 1800000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |

 |

 |

#### [POST /DataOutputRange](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-dataoutputrange)

Select the start and stop angle of the measurement data output for the currently active configuration. Once a valid configuration is set, the device will transmit valid distance values between the selected start and stop angle and for all other angles zero values. The amount of transmitted data will not be reduced by using this function.

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
    "DataOutputRange": {
      "uiLength": 1,
      "aRange": [
        {
          "udiAngleRes": 1200,
          "diStartAngle": -1800000,
          "diStopAngle": 1800000
        }
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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

 |
| --- | --- |
| `data` |

`DataOutputRange`
| `uiLength` |

**Type:** integer · **Format:** uint16 · **Default:** 1 · **Minimum:** 1 · **Maximum:** 1

 |
| `aRange` |

**Type:** array · **Minimum items:** 1 · **Maximum items:** 1

**Items:**
| `udiAngleRes` |

**Type:** integer · **Format:** uint32 · **Default:** 1200 · **Minimum:** 200 · **Maximum:** 4800

 |
| `diStartAngle` |

**Type:** integer · **Format:** int32 · **Default:** -1800000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `diStopAngle` |

**Type:** integer · **Format:** int32 · **Default:** 1800000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /ScanDataScaleFactor](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-scandatascalefactor)

Configure the scaling factor for distance measurements when LMDscandata or Compact is selected as the data output format.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ScanDataScaleFactor"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ScanDataScaleFactor`

**Type:** number · **Format:** float · **Default:** 1.0 · **Minimum:** 0.1 · **Maximum:** 16.0

 |

#### [POST /ScanDataScaleFactor](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-scandatascalefactor)

Configure the scaling factor for distance measurements when LMDscandata or Compact is selected as the data output format.

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
    "ScanDataScaleFactor": 1.0
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

`ScanDataScaleFactor`

**Type:** number · **Format:** float · **Default:** 1.0 · **Minimum:** 0.1 · **Maximum:** 16.0

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /ScanDataFormat](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-scandataformat)

Returns/sets the scan data format (e.g. Compact format) or disable scan data transmission.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ScanDataFormat"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ScanDataFormat`

**Allowed values:**

```
[
  0,
  2,
  3
]
```

**Type:** integer · **Format:** uint8 · **Default:** 3

Mapping:
 * 0 - Deactivated
 * 2 - Compact
 * 3 - LMDscandata

 |

#### [POST /ScanDataFormat](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-scandataformat)

Returns/sets the scan data format (e.g. Compact format) or disable scan data transmission.

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
    "ScanDataFormat": 3
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

`ScanDataFormat`

**Allowed values:**

```
[
  0,
  2,
  3
]
```

**Type:** integer · **Format:** uint8 · **Default:** 3

Mapping:
 * 0 - Deactivated
 * 2 - Compact
 * 3 - LMDscandata

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

### 13 - IMU data output 

#### [POST /EnableInertialMeasurementUnit](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-enableinertialmeasurementunit)

Enables/Disables IMU data streaming output on CoLa A/B protocol.

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
    "EnableInertialMeasurementUnit": false
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

`EnableInertialMeasurementUnit`

**Type:** boolean · **Default:** false

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /InertialMeasurementUnit](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-inertialmeasurementunit)

Returns the current IMU data (e.g. Acceleration, Orientation, ... ). The data is given in the following coordinate system which is based on the DIN70000 system: The x-axis lies on the 90 degree beam of the 0 degree layer. The y-axis is perpendicular to the x-axis and lies in the 0 degree layer. The y-values are rising in the counterclockwise rotation direction (right-handed system). The z-axis is perpendicular to the x-y-plane and the scanner top points to rising z-values.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/InertialMeasurementUnit"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `Acceleration` |

**Type:** array · **Minimum items:** 3 · **Maximum items:** 3

**Items:**

**Type:** number · **Format:** float · **Default:** 0.0

 |
| `AngularVelocity` |

**Type:** array · **Minimum items:** 3 · **Maximum items:** 3

**Items:**

**Type:** number · **Format:** float · **Default:** 0.0

 |
| `MagneticField` |

**Type:** array · **Minimum items:** 3 · **Maximum items:** 3

**Items:**

**Type:** number · **Format:** float · **Default:** 0.0

 |
| `Orientation` |

**Type:** array · **Minimum items:** 4 · **Maximum items:** 4

**Items:**

**Type:** number · **Format:** float · **Default:** 0.0

 |
| `TimeStamp` |

**Type:** integer · **Format:** uint32 · **Default:** 0

 |

 |

### 14 - Region of interest 

#### [GET /LFPradialDistanceRangeFilter](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-lfpradialdistancerangefilter)

Returns/sets the scanning range filter settings. Restriction of the distance measurements to a specified distance range. Measurement distances outside of the specified distance are assigned the distance and RSSI value 0.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LFPradialDistanceRangeFilter"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `ulDistMin` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** 0 · **Maximum:** 300000

 |
| `ulDistMax` |

**Type:** integer · **Format:** int32 · **Default:** 200000 · **Minimum:** 0 · **Maximum:** 300000

 |

 |

#### [POST /LFPradialDistanceRangeFilter](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-lfpradialdistancerangefilter)

Returns/sets the scanning range filter settings. Restriction of the distance measurements to a specified distance range. Measurement distances outside of the specified distance are assigned the distance and RSSI value 0.

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
    "LFPradialDistanceRangeFilter": {
      "bEnable": false,
      "ulDistMin": 0,
      "ulDistMax": 200000
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

`LFPradialDistanceRangeFilter`
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `ulDistMin` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** 0 · **Maximum:** 300000

 |
| `ulDistMax` |

**Type:** integer · **Format:** int32 · **Default:** 200000 · **Minimum:** 0 · **Maximum:** 300000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

### 15 - Field evaluation 

#### [GET /FieldEvaluationResult](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-fieldevaluationresult)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`FieldEvaluationResult`

**Fields:** [FieldEvaluationResult_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-fieldevaluationresult-t)

 |

#### [POST /ActivateEvaluationGroup](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-activateevaluationgroup)

Sets the activation condition for all existing evaluation groups, when activation is set to Telegram.

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

**Type:** integer · **Format:** uint16 · **Default:** 1 · **Minimum:** 1 · **Maximum:** 48

 |
| --- | --- |
| `Activate` |

**Type:** boolean · **Default:** false

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

#### [POST /SetFieldEvaluationContour](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-setfieldevaluationcontour)

Sets the contour of an existing field.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

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

**Type:** integer · **Format:** uint16

 |
| `Points` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 100

**Items:**
| `x` |

**Type:** integer · **Format:** int32 · **Default:** 0

 |
| `y` |

**Type:** integer · **Format:** int32 · **Default:** 0

 |

 |
| `LowerZLimit` |

**Type:** integer · **Format:** int32 · **Minimum:** -100000 · **Maximum:** 100000

 |
| --- | --- |
| `UpperZLimit` |

**Type:** integer · **Format:** int32 · **Minimum:** -100000 · **Maximum:** 100000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - SOPAS_ERR_NO_ERR
 * 1 - SOPAS_ERR_INVALID_EVALUATION_ID
 * 2 - SOPAS_ERR_INVALID_POLYGON
 * 3 - SOPAS_ERR_INVALID_ZLIM

 |

#### [POST /GetFieldEvaluationContour](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-getfieldevaluationcontour)

Returns the contour of an existing field.

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
    "EvaluationId": "<integer>"
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

`EvaluationId`

**Type:** integer · **Format:** uint16

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint16

 |
| `Points` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 100

**Items:**
| `x` |

**Type:** integer · **Format:** int32 · **Default:** 0

 |
| `y` |

**Type:** integer · **Format:** int32 · **Default:** 0

 |

 |
| `LowerZLimit` |

**Type:** integer · **Format:** int32 · **Minimum:** -100000 · **Maximum:** 100000

 |
| --- | --- |
| `UpperZLimit` |

**Type:** integer · **Format:** int32 · **Minimum:** -100000 · **Maximum:** 100000

 |

 |

#### [GET /EvaluationGroupType](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-evaluationgrouptype)

Reads the evaluation group type whether it's a field evaluation or perpendicular distance.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EvaluationGroupType"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EvaluationGroupType`

**Type:** array · **Minimum items:** 48 · **Maximum items:** 48

**Items:**

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - FIELD_EVALUATION
 * 1 - PERPENDICULAR_DISTANCE

 |

#### [POST /EvaluationGroupType](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-evaluationgrouptype)

Reads the evaluation group type whether it's a field evaluation or perpendicular distance.

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
    "EvaluationGroupType": [
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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

 |
| --- | --- |
| `data` |

`EvaluationGroupType`

**Type:** array · **Minimum items:** 48 · **Maximum items:** 48

**Items:**

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - FIELD_EVALUATION
 * 1 - PERPENDICULAR_DISTANCE

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /FieldEvaluationGroupState](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-fieldevaluationgroupstate)

Returns the activation condition for all existing evaluation groups (not configured, active, or inactive).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/FieldEvaluationGroupState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - NOT_CONFIGURED
 * 1 - ACTIVE
 * 2 - INACTIVE

 |

#### [GET /FieldEvaluationApplicationState](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-fieldevaluationapplicationstate)

Get the field evaluation application state. It returns the information whether the field evaluation application is active, configuring or deactivated. 0 - Deactivated - no evaluation is set up. 1 - Activated - at least one active evaluation (group activation has no influence on that). 2 - Configuring - new calculation of the e.g. field geometries.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/FieldEvaluationApplicationState"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - DEACTIVATED
 * 1 - ACTIVE
 * 2 - CONFIGURING
 * 3 - ERROR

 |

#### [POST /StartTeachIn](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-startteachin)

Starts the teach in process.

**Editable JSON template**

```json
{
  "header": {
    "nonce": "<nonce from authentication>",
    "opaque": "<opaque from authentication>",
    "realm": "SICK Sensor",
    "response": "<response from authentication>",
    "user": "Run"
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [POST /StopTeachIn](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-stopteachin)

Stops the teach in process.

**Editable JSON template**

```json
{
  "header": {
    "nonce": "<nonce from authentication>",
    "opaque": "<opaque from authentication>",
    "realm": "SICK Sensor",
    "response": "<response from authentication>",
    "user": "Run"
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /perpendicularDistanceResult](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-perpendiculardistanceresult)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `timestamp` |

**Type:** integer · **Format:** uint64

 |
| `evaluations` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**
| `evaluationId` |

**Type:** integer · **Format:** uint16

 |
| `minimumDistance` |

**Type:** integer · **Format:** int32

 |
| `maximumDistance` |

**Type:** integer · **Format:** int32

 |
| `minimumDistancePosition` |

**Fields:** [Point3d_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-point3d-t)

 |
| `maximumDistancePosition` |

**Fields:** [Point3d_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-point3d-t)

 |

 |

 |

### 16 - Operating data 

#### [GET /LastParaDate](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-lastparadate)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`LastParaDate`

**Type:** string · **Default:** DD.MM.YYYY · **Maximum length:** 10

 |

#### [GET /LastParaTime](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-lastparatime)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`LastParaTime`

**Type:** string · **Default:** HH:MM · **Maximum length:** 5

 |

#### [GET /PowerOnCnt](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-poweroncnt)

Returns the number of power on cycles.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/PowerOnCnt"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`PowerOnCnt`

**Type:** integer · **Format:** uint32 · **Default:** 0

 |

#### [GET /DailyOpHours](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-dailyophours)

Returns the runtime duration since the last power on (non-persistent).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/DailyOpHours"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`DailyOpHours`

**Type:** number · **Format:** float · **Default:** 0.0

 |

#### [GET /OpHours](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-ophours)

Returns the total number of operating hours during the lifetime of the device. The resolution is a 1/10 hour.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/OpHours"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`OpHours`

**Type:** integer · **Format:** uint32 · **Default:** 0

 |

#### [GET /CurrentTempDev](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-currenttempdev)

Returns the current device temperature.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/CurrentTempDev"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`CurrentTempDev`

**Type:** number · **Format:** float · **Default:** 20.0

 |

### 17 - 3D scan recording 

#### [POST /ScanMergerEnabled](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-scanmergerenabled)

Enable/ disable the Scan Merger functionality.

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
    "ScanMergerEnabled": false
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

`ScanMergerEnabled`

**Type:** boolean · **Default:** false

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [POST /ScanMergerSource](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-scanmergersource)

Select the source of the rotation that should be used to create the 3D point cloud.

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
    "ScanMergerSource": 0
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

`ScanMergerSource`

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - IMU
 * 1 - ENCODER

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [POST /ScanMergeTrigger](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-scanmergetrigger)

Select a trigger for the Scan Merger functionality.

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
    "ScanMergeTrigger": 0
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

`ScanMergeTrigger`

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - METHOD
 * 1 - DIGITAL_INPUT

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /RotationOffset](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-rotationoffset)

Read/Write the current rotation offset of the scan merge in x, y and z direction in mm.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/RotationOffset"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `x` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `y` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `z` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |

 |

#### [POST /RotationOffset](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-rotationoffset)

Read/Write the current rotation offset of the scan merge in x, y and z direction in mm.

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
    "RotationOffset": {
      "x": 0,
      "y": 0,
      "z": 0
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

`RotationOffset`
| `x` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `y` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `z` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [POST /EncoderTransformationType](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-encodertransformationtype)

Select the Encoder type that is used to create the scan merge when the Scan Merger source is set to Encoder.

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
    "EncoderTransformationType": 0
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

`EncoderTransformationType`

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - ROTATION
 * 1 - TRANSLATION

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [POST /EncoderRotation](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-encoderrotation)

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

#### [POST /EncoderTranslation](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-encodertranslation)

Set the start orientation when the encoder transformation type is set to translation.

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
    "EncoderTranslation": {
      "x": 0,
      "y": 0,
      "z": 0
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

`EncoderTranslation`
| `x` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `y` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `z` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [POST /StartScanMerge](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-startscanmerge)

Start the recording of a scan merge when the Scan Merger functionality is enabled. The recording time is limited to 15 or 30 seconds, depending on the selected scan configuration.

**Editable JSON template**

```json
{
  "header": {
    "nonce": "<nonce from authentication>",
    "opaque": "<opaque from authentication>",
    "realm": "SICK Sensor",
    "response": "<response from authentication>",
    "user": "Run"
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [POST /StopScanMerge](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-stopscanmerge)

Stop the recording of a running scan merge.

**Editable JSON template**

```json
{
  "header": {
    "nonce": "<nonce from authentication>",
    "opaque": "<opaque from authentication>",
    "realm": "SICK Sensor",
    "response": "<response from authentication>",
    "user": "Run"
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

### 18 - Motor synchronization 

#### [POST /SyncMode](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-syncmode)

synchronisation mode e.g. no synchronisation, hardware synchronisation, CAN synchronisation or CLOCK synchronisation (LRS4000 only supports Clock-Sync and wire sync).

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
    "SyncMode": 0
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

`SyncMode`

**Allowed values:**

```
[
  0,
  1,
  3
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - NO_SYNC
 * 1 - SYNC_BY_WIRE
 * 3 - SYNC_BY_CLOCK

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [POST /SyncPhase](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-syncphase)

synchronisation phase difference between master and slave.

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
    "SyncPhase": 180
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

`SyncPhase`

**Type:** integer · **Format:** int16 · **Default:** 180 · **Minimum:** -180 · **Maximum:** 180

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /MotorSyncStatus](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-motorsyncstatus)

Check if PTP master and slave are synced.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/MotorSyncStatus"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`MotorSyncStatus`

**Allowed values:**

```
[
  0,
  1,
  2
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - NO_CLOCK_AND_ROT_SYNC
 * 1 - ONLY_TIME_SYNCED
 * 2 - SYNCED

 |

### 19- Encoder 

#### [POST /EncSetting](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-encsetting)

Select the encoder type.

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
    "EncSetting": 0
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

`EncSetting`

**Allowed values:**

```
[
  0,
  1,
  2,
  3
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - TX_OFF
 * 1 - TX_INCREMENT1
 * 2 - TX_DIR_PHASE12
 * 3 - TX_DIR_LEVEL12

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [POST /EncResolution](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-encresolution)

Set the encoder resolution in mm/Inc.

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
    "EncResolution": 10
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

`EncResolution`

**Type:** number · **Format:** float · **Default:** 10 · **Minimum:** 0.001 · **Maximum:** 2000

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /ActualEncSpeed](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-actualencspeed)

Read encoder speed in m/s.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ActualEncSpeed"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`ActualEncSpeed`

**Type:** number · **Format:** float

 |

### 20-Diagnostic file 

#### [POST /DoDiagnosisDump](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-dodiagnosisdump)

Creates a diagnostic file (zip file) for further analysis.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`Successful`

**Type:** boolean · **Default:** false

 |

#### [POST /GetDiagnosisDumpInfo](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-getdiagnosisdumpinfo)

Returns additional meta-information about the diagnostic file.

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `DiagDumpExists` |

**Type:** boolean · **Default:** false

 |
| `DiagDumpTimestamp` |

**Type:** integer · **Format:** uint32

 |

 |

### 21 - Detection History 

#### [GET /EnableDetectionHistory](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-enabledetectionhistory)

Returns/sets the detection history.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EnableDetectionHistory"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EnableDetectionHistory`

**Type:** boolean · **Default:** true

 |

#### [POST /EnableDetectionHistory](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-enabledetectionhistory)

Returns/sets the detection history.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [GET /EvaluationsToLog](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-evaluationstolog)

Returns/sets the evaluations which are logged (if they are in use).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EvaluationsToLog"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |

`EvaluationsToLog`

**Type:** array · **Minimum items:** 48 · **Maximum items:** 48

**Items:**

**Type:** boolean · **Default:** true

 |

#### [POST /EvaluationsToLog](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-evaluationstolog)

Returns/sets the evaluations which are logged (if they are in use).

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

#### [POST /ResetDetectionHistory](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-post-resetdetectionhistory)

Resets the detection history logs.

**Editable JSON template**

```json
{
  "header": {
    "nonce": "<nonce from authentication>",
    "opaque": "<opaque from authentication>",
    "realm": "SICK Sensor",
    "response": "<response from authentication>",
    "user": "Run"
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

### 22 - Cybersecurity 

#### [GET /httpsStatus](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-httpsstatus)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

 |
| --- | --- |
| `data` |
| `enabled` |

**Type:** boolean · **Default:** false

 |
| `errorCode` |

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-httpserror-t)

 |

 |

#### [GET /certificateBundleInfo](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#rest-get-certificatebundleinfo)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-responseheader)

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

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-httpserror-t)

 |
| --- | --- |

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

**Type:** integer · **Format:** uint16 · **Default:** 0

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

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-e-user-level-type)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

#### DateTime_t 
| `uiYear` |

**Type:** integer · **Format:** uint16 · **Default:** 0 · **Minimum:** 0 · **Maximum:** 2105

 |
| --- | --- |
| `usiMonth` |

**Type:** integer · **Format:** uint8 · **Default:** 1 · **Minimum:** 0 · **Maximum:** 12

 |
| `usiDay` |

**Type:** integer · **Format:** uint8 · **Default:** 1 · **Minimum:** 0 · **Maximum:** 31

 |
| `usiHour` |

**Type:** integer · **Format:** uint8 · **Default:** 0 · **Minimum:** 0 · **Maximum:** 23

 |
| `usiMinute` |

**Type:** integer · **Format:** uint8 · **Default:** 0 · **Minimum:** 0 · **Maximum:** 59

 |
| `usiSec` |

**Type:** integer · **Format:** uint8 · **Default:** 0 · **Minimum:** 0 · **Maximum:** 59

 |
| `udiUSec` |

**Type:** integer · **Format:** uint32 · **Default:** 0 · **Minimum:** 0 · **Maximum:** 999999

 |

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

**Type:** integer · **Format:** uint8 · **Default:** 2

Mapping:
 * 0 - IOS_LOW
 * 1 - IOS_HIGH
 * 2 - IOS_TRISTATE

#### ContaminationData_t 

**Allowed values:**

```
[
  0,
  1,
  2,
  3
]
```

**Type:** integer · **Format:** uint8 · **Default:** 3

Mapping:
 * 0 - CLEAN
 * 1 - WARN
 * 2 - ERROR
 * 3 - NONE

#### PerformanceProfiles_t 

**Allowed values:**

```
[
  0,
  11,
  21,
  1,
  2,
  4,
  5,
  71,
  81,
  61,
  62,
  64,
  65,
  31,
  32,
  33,
  35,
  91,
  92,
  93,
  95
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - INVALID
 * 11 - SC_125HZ_0020DEG_m180_180_2Overlap
 * 21 - SC_125HZ_0020DEG_m180_180_2IL
 * 1 - SC_125HZ_0040DEG_m180_180_noIL
 * 2 - SC_125HZ_0060DEG_m180_180_noIL
 * 4 - SC_125HZ_0100DEG_m180_180_noIL
 * 5 - SC_125HZ_0120DEG_m180_180_noIL
 * 71 - SC_250HZ_0040DEG_m180_180_2Overlap
 * 81 - SC_250HZ_0040DEG_m180_180_2IL
 * 61 - SC_250HZ_0080DEG_m180_180_noIL
 * 62 - SC_250HZ_0120DEG_m180_180_noIL
 * 64 - SC_250HZ_0200DEG_m180_180_noIL
 * 65 - SC_250HZ_0240DEG_m180_180_noIL
 * 31 - SC_125HZ_0240DEG_m180_180_noIL_XR
 * 32 - SC_125HZ_0120DEG_m180_180_2Overlap_XR
 * 33 - SC_125HZ_0080DEG_m180_180_3Overlap_XR
 * 35 - SC_125HZ_0040DEG_m180_180_3Overlap_2IL_XR
 * 91 - SC_250HZ_0480DEG_m180_180_noIL_XR
 * 92 - SC_250HZ_0240DEG_m180_180_2Overlap_XR
 * 93 - SC_250HZ_0160DEG_m180_180_3Overlap_XR
 * 95 - SC_250HZ_0080DEG_m180_180_3Overlap_2IL_XR

#### Logic_t 

**Allowed values:**

```
[
  0,
  1
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - ACTIVE_HIGH
 * 1 - ACTIVE_LOW

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

**Type:** integer · **Format:** uint8 · **Default:** 2

Mapping:
 * 0 - OUTPUT_NOT_ACTIVE
 * 1 - OUTPUT_ACTIVE
 * 2 - TRISTATE
 * 3 - INPUT_ACTIVE
 * 4 - INPUT_NOT_ACTIVE

 |
| --- | --- |
| `PortCounter` |

**Type:** integer · **Format:** uint32

 |

#### Point2d_t 
| `x` |

**Type:** integer · **Format:** int32 · **Default:** 0

 |
| --- | --- |
| `y` |

**Type:** integer · **Format:** int32 · **Default:** 0

 |

#### EvaluationResult_t 
| `State` |

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - NOT_CONFIGURED
 * 1 - INACTIVE
 * 2 - FREE
 * 3 - DETECTING_INFRINGED
 * 4 - INFRINGED
 * 5 - DETECTING_FREE

 |
| --- | --- |
| `Positions` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Fields:** [Point2d_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-point2d-t)

 |

#### FieldEvaluationResult_t 
| `Version` |

**Type:** integer · **Format:** uint16 · **Default:** 1

 |
| --- | --- |
| `Timestamp` |

**Type:** integer · **Format:** uint64

 |
| `EvaluationResultList` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

**Fields:** [EvaluationResult_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/#schema-evaluationresult-t)

 |

#### Point3d_t 
| `x` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -500000 · **Maximum:** 500000

 |
| --- | --- |
| `y` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -500000 · **Maximum:** 500000

 |
| `z` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -500000 · **Maximum:** 500000

 |
