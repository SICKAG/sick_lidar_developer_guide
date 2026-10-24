# multiScan100 REST API V2.5.0 Reference (OpenAPI)

> Download the multiScan100 V2.5.0 OpenAPI description and search REST endpoints, request parameters, and response schemas.

Source: https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/

# multiScan100 REST API | OpenAPI V2.5.0

<div class="tool-intro tool-intro--centered" markdown>

![OpenAPI](https://sickag.github.io/sick_lidar_developer_guide/assets/openapi-logo.png)

This page provides the searchable V2.5.0 REST reference and downloadable
OpenAPI description for the multiScan100 family. For REST concepts,
authentication, and request patterns, see
[REST API / OpenAPI](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/).

</div>

## OpenAPI File

- [multiScan100 V2.5.0 - OpenAPI (YAML)](https://sickag.github.io/sick_lidar_developer_guide/assets/multiScan100/openapi/multiScan100_V2.5.0_OpenApi.yaml)

Always match the file to your device's actual firmware version. Function
availability can vary by variant and installed software package.

The `ScanDataFormat` endpoint lists the value `4` (`NativeROS2`). The
multiScan100 does not support native ROS 2. To use the multiScan100 with
ROS 2, run the [sick_scan_xd](https://sickag.github.io/sick_lidar_developer_guide/integration-notes/ros-integration/#sick_scan_xd)
driver on the host.

## Endpoint Reference

### 1 - General 

#### [POST /checkCredentials](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-checkcredentials)

Indicates whether authentication succeeded. For more details, see https://github.com/SICKAG/sick_scan_rest_client.

**Request body**

**Required:** true

**Media type: `application/json`**

**Type:** object · **Nullable:** true

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [POST /SetPassword](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-setpassword)

Sets the password for the CoLa A/B interface only. In this example, the password for user level: Service (4) is set to - test - (integer value of the password hash - test -). For more details, see https://github.com/SICKAG/sick_scan_rest_client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `data` | No |

**Example:**

```json
{
  "siUserLevel": 4,
  "udiNewPassword": 3410122659
}
```

Fields
| Field | Required | Details |
| `siUserLevel` | No |

**Type:** integer

 |
| `udiNewPassword` | No |

**Type:** integer

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bSuccess` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /getChallenge](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-getchallenge)

Returns a challenge for the challenge-response authentication method. For more details, see https://github.com/SICKAG/sick_scan_rest_client

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `data` | No |

Fields
| Field | Required | Details |
| `user` | No |

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-e-user-level-type)

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `challenge` | No |

Fields
| Field | Required | Details |
| `realm` | No |

**Type:** string · **Default:**

 |
| `nonce` | No |

**Type:** string · **Default:**

 |
| `opaque` | No |

**Type:** string · **Default:**

 |
| `salt` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 16

**Items:**

**Type:** integer

 |

 |

#### [POST /changePassword](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-changepassword)

Sets the password for the REST interface. For more details, see https://github.com/SICKAG/sick_scan_rest_client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `data` | No |

Fields
| Field | Required | Details |
| `encryptedMessage` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 96

**Items:**

**Type:** integer

 |
| `userLevel` | No |

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-e-user-level-type)

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `result` | No |

**Allowed values:**

```json
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

 |

#### [POST /EnableUserLevel](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-enableuserlevel)

Activates/deactivates a specific user level for the REST interface.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `userLevel` | No |

**Type:** integer

 |
| `isEnabled` | No |

**Type:** boolean · **Default:** false

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `result` | No |

**Allowed values:**

```json
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

 |

#### [POST /WriteEeprom](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-writeeeprom)

Saves all parameters permanently.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Success` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /SoftReset](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-softreset)

Reboots the device. All unsaved parameters are lost. This function requires the user level: Service.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ProcessorNbr` | No |

**Type:** integer

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [POST /RebootDevice](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-rebootdevice)

Reboots the device. All parameters are saved. This function requires the user level: Service.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [POST /LoadFactoryDefaults](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-loadfactorydefaults)

Resets all parameters to default. This function requires the user level: Service.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [POST /LoadApplicationDefaults](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-loadapplicationdefaults)

Resets only the user parameterization of the fields, evaluation cases, and parameters under the section "Application". Other parameters like interface settings, echo filter, etc. remain unchanged. This function requires the user level: Service.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [POST /EnableLegacyUserLevel](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-enablelegacyuserlevel)

Activates/deactivates a specific user level for the CoLa A/B interface.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `userLevel` | No |

**Type:** integer · **Minimum:** 0 · **Maximum:** 7

 |
| `isEnabled` | No |

**Type:** boolean · **Default:** false

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `result` | No |

**Type:** boolean · **Default:** false

 |

 |

### 2 - Status 

#### [GET /DeviceStatus](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-devicestatus)

Returns the device state (9 possible states).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `DeviceStatus` | No |

**Fields:** [DeviceStatus](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-devicestatus)

 |

 |

#### [GET /SCdevicestate](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-scdevicestate)

Returns the device state (busy, ready, or error).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `SCdevicestate` | No |

**Allowed values:**

```json
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

 |

#### [GET /temperatureAlarmConfiguration](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-temperaturealarmconfiguration)

Returns/sets the thresholds for the device temperature alarm status.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `upperThreshold` | No |

**Type:** integer · **Default:** 55

 |
| `lowerThreshold` | No |

**Type:** integer · **Default:** 50

 |

 |

#### [POST /temperatureAlarmConfiguration](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-temperaturealarmconfiguration)

Returns/sets the thresholds for the device temperature alarm status.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `temperatureAlarmConfiguration` | No |

Fields
| Field | Required | Details |
| `upperThreshold` | No |

**Type:** integer · **Default:** 55

 |
| `lowerThreshold` | No |

**Type:** integer · **Default:** 50

 |

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /temperatureAlarmStatus](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-temperaturealarmstatus)

Returns the current device temperature alarm status. If true, the configured temperature alarm is active.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `temperatureAlarmStatus` | No |

**Type:** boolean · **Default:** false

 |

 |

### 3 - Device 

#### [GET /DeviceIdent](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-deviceident)

Returns the device name and the firmware version.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Name` | No |

**Type:** string · **Default:** multiScan · **Maximum length:** 9

 |
| `Version` | No |

**Type:** string · **Default:** 2.5.0.0R · **Maximum length:** 8

 |

 |

#### [GET /LocationName](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-locationname)

Returns/sets the device name.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

**Example:**

```json
{
  "LocationName": "TestDevice"
}
```

Fields
| Field | Required | Details |
| `LocationName` | No |

**Type:** string · **Default:** not defined · **Maximum length:** 32

 |

 |

#### [POST /LocationName](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-locationname)

Returns/sets the device name.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LocationName` | No |

**Type:** string · **Default:** not defined · **Maximum length:** 32

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /SerialNumber](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-serialnumber)

Returns the serial number.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `SerialNumber` | No |

**Type:** string · **Default:** 123456789 · **Maximum length:** 9

 |

 |

#### [GET /FirmwareVersion](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-firmwareversion)

Returns the current firmware version.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `FirmwareVersion` | No |

**Type:** string · **Default:** XXXXXXXXXX · **Maximum length:** 40

 |

 |

#### [GET /OrderNumber](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-ordernumber)

Returns the order number (SICK part number).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `OrderNumber` | No |

**Type:** string · **Default:** 1234567 · **Maximum length:** 32

 |

 |

#### [GET /DeviceType](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-devicetype)

Returns the device type.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `DeviceType` | No |

**Type:** string · **Default:** multiScan1xxx · **Maximum length:** 18

 |

 |

#### [POST /FindMe](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-findme)

Sets the device LEDs into blinking mode for better identification.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `data` | No |

**Example:**

```json
{
  "uiDuration": 100
}
```

Fields
| Field | Required | Details |
| `uiDuration` | No |

**Type:** integer · **Minimum:** 1

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

### 4 - Basic settings 

#### [GET /LEDState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-ledstate)

Returns the LED status.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LEDState` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 8

**Items:**

**Fields:** [LedStateType](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-ledstatetype)

 |

 |

#### [GET /LEDEnable](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-ledenable)

Returns/sets the LED mode (on/off).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LEDEnable` | No |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /LEDEnable](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-ledenable)

Returns/sets the LED mode (on/off).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LEDEnable` | No |

**Type:** boolean · **Default:** true

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [POST /mStartMeasure](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-mstartmeasure)

Starts the motor and measurement.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ErrorCode` | No |

**Allowed values:**

```json
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

 |

#### [POST /mStopMeasure](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-mstopmeasure)

Stops the motor and measurement.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ErrorCode` | No |

**Allowed values:**

```json
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

 |

#### [GET /AutoStartMeasure](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-autostartmeasure)

Returns/sets the mode for automatic start of measurement after boot-up.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `AutoStartMeasure` | No |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /AutoStartMeasure](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-autostartmeasure)

Returns/sets the mode for automatic start of measurement after boot-up.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `data` | No |

Fields
| Field | Required | Details |
| `AutoStartMeasure` | No |

**Type:** boolean · **Default:** true

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /bInterlacedMode](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-binterlacedmode)

Returns/sets the interlaced mode.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bInterlacedMode` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /bInterlacedMode](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-binterlacedmode)

Returns/sets the interlaced mode.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bInterlacedMode` | No |

**Type:** boolean · **Default:** false

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

### 5 - Date and system time 

#### [GET /TSCRole](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-tscrole)

Returns/sets the time synchronization role (none, NTP, or PTP).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `TSCRole` | No |

**Allowed values:**

```json
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

 |

#### [POST /TSCRole](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-tscrole)

Returns/sets the time synchronization role (none, NTP, or PTP).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `TSCRole` | No |

**Allowed values:**

```json
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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /TSCTCSrvAddr](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-tsctcsrvaddr)

Returns/sets the IP address of the time server.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `TSCTCSrvAddr` | No |

**Default:**

```json
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

 |

#### [POST /TSCTCSrvAddr](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-tsctcsrvaddr)

Returns/sets the IP address of the time server.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `TSCTCSrvAddr` | No |

**Default:**

```json
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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /TSCTCtimezone](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-tsctctimezone)

Returns/sets the time zone of the client.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `TSCTCtimezone` | No |

**Allowed values:**

```json
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

 |

#### [POST /TSCTCtimezone](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-tsctctimezone)

Returns/sets the time zone of the client.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `TSCTCtimezone` | No |

**Allowed values:**

```json
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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /TSCTCupdatetime](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-tsctcupdatetime)

Returns/sets the update time of the client.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `TSCTCupdatetime` | No |

**Type:** integer · **Default:** 600 · **Minimum:** 1 · **Maximum:** 3600

 |

 |

#### [POST /TSCTCupdatetime](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-tsctcupdatetime)

Returns/sets the update time of the client.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `TSCTCupdatetime` | No |

**Type:** integer · **Default:** 600 · **Minimum:** 1 · **Maximum:** 3600

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /LSPdatetime](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-lspdatetime)

Returns the current time of the device (years, months, days, hours, minutes, seconds, microseconds).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LSPdatetime` | No |

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-datetime-t)

 |

 |

#### [POST /LSPsetdatetime](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-lspsetdatetime)

Sets the time of the device (years, months, days, hours, minutes, seconds, microseconds).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `DateTime` | No |

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-datetime-t)

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ErrorCode` | No |

**Allowed values:**

```json
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

 |

### 6 - Filter 

#### [GET /groundFilterEnable](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-groundfilterenable)

Returns/sets whether the ground filter is enabled.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `groundFilterEnable` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /groundFilterEnable](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-groundfilterenable)

Returns/sets whether the ground filter is enabled.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `groundFilterEnable` | No |

**Type:** boolean · **Default:** false

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /groundFilterThresholds](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-groundfilterthresholds)

Returns/sets the ground filter thresholds.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `minimumDistance` | No |

**Type:** integer · **Default:** -100 · **Minimum:** -10000 · **Maximum:** 0

 |
| `maximumDistance` | No |

**Type:** integer · **Default:** 100 · **Minimum:** 0 · **Maximum:** 10000

 |

 |

#### [POST /groundFilterThresholds](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-groundfilterthresholds)

Returns/sets the ground filter thresholds.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `groundFilterThresholds` | No |

Fields
| Field | Required | Details |
| `minimumDistance` | No |

**Type:** integer · **Default:** -100 · **Minimum:** -10000 · **Maximum:** 0

 |
| `maximumDistance` | No |

**Type:** integer · **Default:** 100 · **Minimum:** 0 · **Maximum:** 10000

 |

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /groundFilterType](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-groundfiltertype)

Returns the ground filter type. Currently, the ground filter only works on plain measurement data (P3D algorithm). The option IMU is currently not available.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `groundFilterType` | No |

**Allowed values:**

```json
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

 |

#### [GET /MCSenseLevel](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-mcsenselevel)

Returns/sets the fog filter settings.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `MCSenseLevel` | No |

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 1

 |

 |

#### [POST /MCSenseLevel](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-mcsenselevel)

Returns/sets the fog filter settings.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `MCSenseLevel` | No |

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 1

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /LFPparticle](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-lfpparticle)

Returns/sets the particle filter settings. Filters out disturbances in the measurement data caused by particles such as dust, snowflakes, or similar. Configure the minimum threshold of the required distance step (mm) between the echo to be filtered and the echoes of surrounding beam angles.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `uiThreshold` | No |

**Type:** integer · **Default:** 500 · **Minimum:** 20 · **Maximum:** 5000

 |

 |

#### [POST /LFPparticle](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-lfpparticle)

Returns/sets the particle filter settings. Filters out disturbances in the measurement data caused by particles such as dust, snowflakes, or similar. Configure the minimum threshold of the required distance step (mm) between the echo to be filtered and the echoes of surrounding beam angles.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LFPparticle` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `uiThreshold` | No |

**Type:** integer · **Default:** 500 · **Minimum:** 20 · **Maximum:** 5000

 |

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /LFPmovingAveragingFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-lfpmovingaveragingfilter)

Returns/sets the mean filter settings. This filter smooths the distance value by calculating the arithmetic mean from the configured number of scans (2 to 4 scans). Points with zero distance are treated as missing values and are not taken into account for averaging. If all distances considered for averaging have the value 0, the result will be 0 as well.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `uiAveragingDepth` | No |

**Type:** integer · **Default:** 3 · **Minimum:** 2 · **Maximum:** 4

 |

 |

#### [POST /LFPmovingAveragingFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-lfpmovingaveragingfilter)

Returns/sets the mean filter settings. This filter smooths the distance value by calculating the arithmetic mean from the configured number of scans (2 to 4 scans). Points with zero distance are treated as missing values and are not taken into account for averaging. If all distances considered for averaging have the value 0, the result will be 0 as well.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LFPmovingAveragingFilter` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `uiAveragingDepth` | No |

**Type:** integer · **Default:** 3 · **Minimum:** 2 · **Maximum:** 4

 |

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /FREchoFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-frechofilter)

Returns/sets the multi-echo filter settings. Depending on the environment, the sensor receives several measurement points on the same angular step (multi-echo). The filter can filter out the first echo, the last echo, or all echoes.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `FREchoFilter` | No |

**Allowed values:**

```json
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

 |

#### [POST /FREchoFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-frechofilter)

Returns/sets the multi-echo filter settings. Depending on the environment, the sensor receives several measurement points on the same angular step (multi-echo). The filter can filter out the first echo, the last echo, or all echoes.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `FREchoFilter` | No |

**Allowed values:**

```json
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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

### 7 - Mounting position 

#### [POST /CopySensorOrientationFromImu](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-copysensororientationfromimu)

Copies the roll and pitch angles from the IMU data to the sensor orientation.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /SensorPosition](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-sensorposition)

Returns/sets the mounting position in increments of 1/10,000 degree.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `x` | No |

**Type:** integer · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `y` | No |

**Type:** integer · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `z` | No |

**Type:** integer · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `yaw` | No |

**Type:** integer · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |
| `pitch` | No |

**Type:** integer · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |
| `roll` | No |

**Type:** integer · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |

 |

#### [POST /SensorPosition](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-sensorposition)

Returns/sets the mounting position in increments of 1/10,000 degree.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `SensorPosition` | No |

Fields
| Field | Required | Details |
| `x` | No |

**Type:** integer · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `y` | No |

**Type:** integer · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `z` | No |

**Type:** integer · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `yaw` | No |

**Type:** integer · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |
| `pitch` | No |

**Type:** integer · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |
| `roll` | No |

**Type:** integer · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

### 8 - Contamination indication 

#### [GET /ContaminationConfig](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-contaminationconfig)

Returns/sets the contamination indication settings such as sensitivity, response time, threshold for warning, and active sectors.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `eStrategy` | No |

**Allowed values:**

```json
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
| `usiResponseTime` | No |

**Type:** integer · **Default:** 3 · **Minimum:** 3 · **Maximum:** 60

 |
| `eThreshold` | No |

**Allowed values:**

```json
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
| `eCover` | No |

**Allowed values:**

```json
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
| `CustomSectors` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 12

**Items:**

**Type:** boolean · **Default:** true

 |
| `bEnableWarning` | No |

**Type:** boolean · **Default:** true

 |
| `bEnableError` | No |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /ContaminationConfig](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-contaminationconfig)

Returns/sets the contamination indication settings such as sensitivity, response time, threshold for warning, and active sectors.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ContaminationConfig` | No |

Fields
| Field | Required | Details |
| `eStrategy` | No |

**Allowed values:**

```json
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
| `usiResponseTime` | No |

**Type:** integer · **Default:** 3 · **Minimum:** 3 · **Maximum:** 60

 |
| `eThreshold` | No |

**Allowed values:**

```json
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
| `eCover` | No |

**Allowed values:**

```json
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
| `CustomSectors` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 12

**Items:**

**Type:** boolean · **Default:** true

 |
| `bEnableWarning` | No |

**Type:** boolean · **Default:** true

 |
| `bEnableError` | No |

**Type:** boolean · **Default:** true

 |

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /ContaminationActiveSectors](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-contaminationactivesectors)

Returns which sectors are included in the contamination result calculation. Each element is true if the corresponding sector is included and false otherwise.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ContaminationActiveSectors` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 12

**Items:**

**Type:** boolean · **Default:** false

 |

 |

#### [GET /ContaminationData](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-contaminationdata)

Returns the contamination state of all contamination sectors.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ContaminationData` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 12

**Items:**

**Allowed values:**

```json
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

 |

#### [GET /ContaminationResult](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-contaminationresult)

Returns the contamination indication state of the device.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bWarningActive` | No |

**Type:** boolean · **Default:** false

 |
| `bErrorActive` | No |

**Type:** boolean · **Default:** false

 |

 |

### 9 - Ethernet 

#### [GET /EtherIPAddress](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-etheripaddress)

Returns/sets the static IP address in use.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherIPAddress` | No |

**Default:**

```json
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

 |

#### [POST /EtherIPAddress](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-etheripaddress)

Returns/sets the static IP address in use.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherIPAddress` | No |

**Default:**

```json
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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /EtherIPGateAddress](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-etheripgateaddress)

Returns/sets the default gateway address.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherIPGateAddress` | No |

**Default:**

```json
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

 |

#### [POST /EtherIPGateAddress](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-etheripgateaddress)

Returns/sets the default gateway address.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherIPGateAddress` | No |

**Default:**

```json
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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /EtherIPMask](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-etheripmask)

Returns/sets the subnet mask.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherIPMask` | No |

**Default:**

```json
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

 |

#### [POST /EtherIPMask](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-etheripmask)

Returns/sets the subnet mask.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherIPMask` | No |

**Default:**

```json
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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /EtherAddressingMode](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-etheraddressingmode)

Returns/sets the mode for the IP address assignment (static or DHCP).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherAddressingMode` | No |

**Allowed values:**

```json
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

 |

#### [POST /EtherAddressingMode](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-etheraddressingmode)

Returns/sets the mode for the IP address assignment (static or DHCP).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherAddressingMode` | No |

**Allowed values:**

```json
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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /EtherDHCPFallback](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-etherdhcpfallback)

Returns/sets the mode for the DHCP fallback (retry or static).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherDHCPFallback` | No |

**Allowed values:**

```json
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

 |

#### [POST /EtherDHCPFallback](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-etherdhcpfallback)

Returns/sets the mode for the DHCP fallback (retry or static).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherDHCPFallback` | No |

**Allowed values:**

```json
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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [POST /EthernetUpdate](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-ethernetupdate)

Applies the ethernet settings. This needs to be executed to actually change the ethernet settings.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /EtherIPAddressDHCP](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-etheripaddressdhcp)

Returns the assigned DHCP IP address.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherIPAddressDHCP` | No |

**Default:**

```json
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

 |

#### [GET /EtherIPGateAddressDHCP](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-etheripgateaddressdhcp)

Returns the assigned DHCP default gateway address.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherIPGateAddressDHCP` | No |

**Default:**

```json
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

 |

#### [GET /EtherIPMaskDHCP](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-etheripmaskdhcp)

Returns the assigned DHCP subnet mask.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherIPMaskDHCP` | No |

**Default:**

```json
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

 |

#### [GET /EtherMACAddress](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-ethermacaddress)

Returns the MAC address of the Ethernet interface.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherMACAddress` | No |

**Default:**

```json
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

 |

### 10 - Legacy protocols 

#### [GET /EtherAuxEnabled](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-etherauxenabled)

Enables/disables the legacy interface CoLa A/B. If enabled, CoLa A uses port 2111 and CoLa B uses port 2112.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherAuxEnabled` | No |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /EtherAuxEnabled](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-etherauxenabled)

Enables/disables the legacy interface CoLa A/B. If enabled, CoLa A uses port 2111 and CoLa B uses port 2112.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherAuxEnabled` | No |

**Type:** boolean · **Default:** true

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /EtherCoLaScanMode](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-ethercolascanmode)

Configures the device search by SICK tools. If disabled, finding the device via device search and changing the IP address via SICK tools is not possible.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherCoLaScanMode` | No |

**Allowed values:**

```json
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

 |

#### [POST /EtherCoLaScanMode](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-ethercolascanmode)

Configures the device search by SICK tools. If disabled, finding the device via device search and changing the IP address via SICK tools is not possible.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherCoLaScanMode` | No |

**Allowed values:**

```json
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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

### 11 - Webserver settings 

#### [POST /SetWebserverEnabled](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-setwebserverenabled)

Sets the availability of the web server (reboot required). If disabled, the web-based GUI and the REST interface can no longer be used.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Enable` | No |

**Type:** boolean · **Default:** true

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [POST /GetWebserverEnabled](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-getwebserverenabled)

Returns the availability of the web server.

**Request body**

**Required:** true

**Media type: `application/json`**

**Type:** object · **Nullable:** true

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `IsEnabled` | No |

**Type:** boolean · **Default:** true

 |

 |

### 12 - Inputs and outputs 

#### [GET /PortConfiguration](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-portconfiguration)

Returns/sets the port configuration of all I/Os.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `PortConfiguration` | No |

**Type:** array · **Minimum items:** 8 · **Maximum items:** 8

**Items:**

Fields
| Field | Required | Details |
| `PortType` | No |

**Allowed values:**

```json
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
| `Name` | No |

**Type:** string · **Default:** IOx · **Maximum length:** 20

 |
| `InputSettings` | No |

Fields
| Field | Required | Details |
| `Logic` | No |

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-logic-t)

 |
| `Debounce` | No |

**Type:** integer · **Default:** 10 · **Minimum:** 1 · **Maximum:** 1000

 |
| `Sensitivity` | No |

**Allowed values:**

```json
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
| `Reserved1` | No |

**Type:** integer · **Default:** 0

 |
| `Reserved2` | No |

**Type:** integer · **Default:** 0

 |

 |
| `OutputSettings` | No |

Fields
| Field | Required | Details |
| `Logic` | No |

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-logic-t)

 |
| `OutputMode` | No |

**Allowed values:**

```json
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
| `RestartType` | No |

**Allowed values:**

```json
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
| `RestartTime` | No |

**Type:** integer · **Default:** 200 · **Minimum:** 20 · **Maximum:** 600000

 |
| `RestartInput` | No |

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 8

 |
| `Combination` | No |

**Allowed values:**

```json
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
| `Reserved3` | No |

**Type:** integer · **Default:** 0

 |
| `Reserved4` | No |

**Type:** integer · **Default:** 0

 |
| `Sources` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 128

**Items:**

Fields
| Field | Required | Details |
| `Name` | No |

**Type:** string · **Default:**      · **Minimum length:** 4 · **Maximum length:** 4

 |
| `Invert` | No |

**Type:** boolean · **Default:** false

 |
| `Reserved5` | No |

**Type:** integer · **Default:** 0

 |
| `Reserved6` | No |

**Type:** integer · **Default:** 0

 |

 |

 |
| `EncoderPortType` | No |

**Allowed values:**

```json
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
| --- | --- | --- |
| `Reserved8` | No |

**Type:** integer · **Default:** 0

 |
| `Reserved9` | No |

**Type:** integer · **Default:** 0

 |
| `Reserved10` | No |

**Type:** integer · **Default:** 0

 |

 |

 |

#### [POST /PortConfiguration](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-portconfiguration)

Returns/sets the port configuration of all I/Os.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

**Example:**

```json
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

Fields
| Field | Required | Details |
| `PortConfiguration` | No |

**Type:** array · **Minimum items:** 8 · **Maximum items:** 8

**Items:**

Fields
| Field | Required | Details |
| `PortType` | No |

**Allowed values:**

```json
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
| `Name` | No |

**Type:** string · **Default:** IOx · **Maximum length:** 20

 |
| `InputSettings` | No |

Fields
| Field | Required | Details |
| `Logic` | No |

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-logic-t)

 |
| `Debounce` | No |

**Type:** integer · **Default:** 10 · **Minimum:** 1 · **Maximum:** 1000

 |
| `Sensitivity` | No |

**Allowed values:**

```json
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
| `Reserved1` | No |

**Type:** integer · **Default:** 0

 |
| `Reserved2` | No |

**Type:** integer · **Default:** 0

 |

 |
| `OutputSettings` | No |

Fields
| Field | Required | Details |
| `Logic` | No |

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-logic-t)

 |
| `OutputMode` | No |

**Allowed values:**

```json
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
| `RestartType` | No |

**Allowed values:**

```json
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
| `RestartTime` | No |

**Type:** integer · **Default:** 200 · **Minimum:** 20 · **Maximum:** 600000

 |
| `RestartInput` | No |

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 8

 |
| `Combination` | No |

**Allowed values:**

```json
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
| `Reserved3` | No |

**Type:** integer · **Default:** 0

 |
| `Reserved4` | No |

**Type:** integer · **Default:** 0

 |
| `Sources` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 128

**Items:**

Fields
| Field | Required | Details |
| `Name` | No |

**Type:** string · **Default:**      · **Minimum length:** 4 · **Maximum length:** 4

 |
| `Invert` | No |

**Type:** boolean · **Default:** false

 |
| `Reserved5` | No |

**Type:** integer · **Default:** 0

 |
| `Reserved6` | No |

**Type:** integer · **Default:** 0

 |

 |

 |
| `EncoderPortType` | No |

**Allowed values:**

```json
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
| --- | --- | --- |
| `Reserved8` | No |

**Type:** integer · **Default:** 0

 |
| `Reserved9` | No |

**Type:** integer · **Default:** 0

 |
| `Reserved10` | No |

**Type:** integer · **Default:** 0

 |

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [POST /SetOutput](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-setoutput)

Sets the state of an individual output. The output source must first be set to "SOPAS command".

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `data` | No |

Fields
| Field | Required | Details |
| `Output` | No |

**Type:** integer

 |
| `Value` | No |

**Type:** integer

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Success` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [GET /InputState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-inputstate)

Returns the state of all inputs.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `uiVersionNumber` | No |

**Type:** integer · **Default:** 1

 |
| `udiSystCount` | No |

**Type:** integer

 |
| `aDigitalIn` | No |

**Type:** array · **Minimum items:** 8 · **Maximum items:** 8

**Items:**

Fields
| Field | Required | Details |
| `IOState` | No |

**Fields:** [IOState_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-iostate-t)

 |

 |
| `aTimeBlock` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-datetime-t)

 |
| --- | --- | --- |

 |

#### [GET /OutputState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-outputstate)

Returns the state of all outputs.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `uiVersionNumber` | No |

**Type:** integer · **Default:** 1

 |
| `udiSystCount` | No |

**Type:** integer

 |
| `aDigitalOut` | No |

**Type:** array · **Minimum items:** 8 · **Maximum items:** 8

**Items:**

Fields
| Field | Required | Details |
| `IOState` | No |

**Fields:** [IOState_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-iostate-t)

 |
| `udiCounter` | No |

**Type:** integer

 |

 |
| `aTimeBlock` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-datetime-t)

 |
| --- | --- | --- |

 |

#### [GET /PortState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-portstate)

Returns the state of the ports. "PortState" is preferred over "OutputState".

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `uiVersionNumber` | No |

**Type:** integer

 |
| `udiSystCount` | No |

**Type:** integer

 |
| `aInternalPorts` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 8

**Items:**

**Fields:** [PortStateAndCounter_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-portstateandcounter-t)

 |
| `aExternalPorts` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 8

**Items:**

**Fields:** [PortStateAndCounter_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-portstateandcounter-t)

 |
| `aTimeBlock` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-datetime-t)

 |

 |

#### [POST /mResetOutputCounter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-mresetoutputcounter)

Resets the counter for the outputs.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ErrorCode` | No |

**Allowed values:**

```json
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

 |

### 13 - Measurement data output 

#### [GET /ScanDataEthSettings](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-scandataethsettings)

Returns/sets the destination IP address settings for measurement data streaming (UDP).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Protocol` | No |

**Allowed values:**

```json
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
| `IPAddress` | No |

**Default:**

```json
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
| `Port` | No |

**Type:** integer · **Default:** 2115

 |

 |

#### [POST /ScanDataEthSettings](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-scandataethsettings)

Returns/sets the destination IP address settings for measurement data streaming (UDP).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ScanDataEthSettings` | No |

Fields
| Field | Required | Details |
| `Protocol` | No |

**Allowed values:**

```json
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
| `IPAddress` | No |

**Default:**

```json
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
| `Port` | No |

**Type:** integer · **Default:** 2115

 |

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /ScanDataEnable](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-scandataenable)

Enables/disables the measurement data streaming. The measurement data itself is sent via a UDP-based SICK-specific format. A Python example can be found at https://github.com/SICKAG/ScanSegmentAPI.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ScanDataEnable` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /ScanDataEnable](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-scandataenable)

Enables/disables the measurement data streaming. The measurement data itself is sent via a UDP-based SICK-specific format. A Python example can be found at https://github.com/SICKAG/ScanSegmentAPI.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ScanDataEnable` | No |

**Type:** boolean · **Default:** false

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /ScanDataFormat](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-scandataformat)

Returns/sets the scan data format (e.g. Compact format).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ScanDataFormat` | No |

**Allowed values:**

```json
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

 |

#### [POST /ScanDataFormat](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-scandataformat)

Returns/sets the scan data format (e.g. Compact format).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ScanDataFormat` | No |

**Allowed values:**

```json
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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /ScanDataPreformatting](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-scandatapreformatting)

Returns/sets the azimuth reordering mode for the layers. In Raw mode, no reordering is performed. In Rectified mode, the layers are reordered so that their azimuth angle ranges match as closely as possible.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ScanDataPreformatting` | No |

**Allowed values:**

```json
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

 |

#### [POST /ScanDataPreformatting](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-scandatapreformatting)

Returns/sets the azimuth reordering mode for the layers. In Raw mode, no reordering is performed. In Rectified mode, the layers are reordered so that their azimuth angle ranges match as closely as possible.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ScanDataPreformatting` | No |

**Allowed values:**

```json
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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

### 14 - IMU data output 

#### [GET /ImuDataEthSettings](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-imudataethsettings)

Returns/sets the destination IP address settings for IMU data streaming (UDP).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Protocol` | No |

**Allowed values:**

```json
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
| `IPAddress` | No |

**Default:**

```json
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
| `Port` | No |

**Type:** integer · **Default:** 7503

 |

 |

#### [POST /ImuDataEthSettings](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-imudataethsettings)

Returns/sets the destination IP address settings for IMU data streaming (UDP).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ImuDataEthSettings` | No |

Fields
| Field | Required | Details |
| `Protocol` | No |

**Allowed values:**

```json
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
| `IPAddress` | No |

**Default:**

```json
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
| `Port` | No |

**Type:** integer · **Default:** 7503

 |

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /ImuDataEnable](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-imudataenable)

Enables/disables IMU data streaming.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ImuDataEnable` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /ImuDataEnable](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-imudataenable)

Enables/disables IMU data streaming.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ImuDataEnable` | No |

**Type:** boolean · **Default:** false

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /InertialMeasurementUnit](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-inertialmeasurementunit)

Returns the current IMU data (e.g. acceleration and orientation). The data uses a coordinate system based on DIN 70000. The x-axis lies on the 90-degree beam of the 0-degree layer. The y-axis is perpendicular to the x-axis and lies in the 0-degree layer. The y-values increase in the counterclockwise rotation direction (right-handed system). The z-axis is perpendicular to the x-y plane, with positive values pointing toward the top of the scanner.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Acceleration` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 3

**Items:**

**Type:** number · **Default:** 0.0

 |
| `AngularVelocity` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 3

**Items:**

**Type:** number · **Default:** 0.0

 |
| `Orientation` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 4

**Items:**

**Type:** number · **Default:** 0.0

 |
| `TimeStamp` | No |

**Type:** integer

 |

 |

### 15 - Data reduction 

#### [GET /LFPangleRangeFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-lfpanglerangefilter)

Returns/sets the angle range filter settings. The filter restricts the output scan to a specified angle range. Filtered measurement values are set to 0. If an entire data segment is set to 0, it is no longer output.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `fThetaStart` | No |

**Type:** integer · **Default:** -900000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `fThetaStop` | No |

**Type:** integer · **Default:** 900000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `fPhiStart` | No |

**Type:** integer · **Default:** -900000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `fPhiStop` | No |

**Type:** integer · **Default:** 900000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `uiBeamIncrement` | No |

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 20

 |

 |

#### [POST /LFPangleRangeFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-lfpanglerangefilter)

Returns/sets the angle range filter settings. The filter restricts the output scan to a specified angle range. Filtered measurement values are set to 0. If an entire data segment is set to 0, it is no longer output.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LFPangleRangeFilter` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `fThetaStart` | No |

**Type:** integer · **Default:** -900000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `fThetaStop` | No |

**Type:** integer · **Default:** 900000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `fPhiStart` | No |

**Type:** integer · **Default:** -900000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `fPhiStop` | No |

**Type:** integer · **Default:** 900000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `uiBeamIncrement` | No |

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 20

 |

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /LFPintervalFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-lfpintervalfilter)

Returns/sets the interval filter settings. The filter reduces the scan output rate by a given factor.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `uiReductionFactor` | No |

**Type:** integer · **Default:** 2 · **Minimum:** 2 · **Maximum:** 50

 |

 |

#### [POST /LFPintervalFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-lfpintervalfilter)

Returns/sets the interval filter settings. The filter reduces the scan output rate by a given factor.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LFPintervalFilter` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `uiReductionFactor` | No |

**Type:** integer · **Default:** 2 · **Minimum:** 2 · **Maximum:** 50

 |

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /LFPlayerFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-lfplayerfilter)

Returns/sets the layer filter settings. The filter removes selected complete layers from the output data.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `aLayers` | No |

**Default:**

```json
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

#### [POST /LFPlayerFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-lfplayerfilter)

Returns/sets the layer filter settings. The filter removes selected complete layers from the output data.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LFPlayerFilter` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `aLayers` | No |

**Default:**

```json
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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

### 16 - Region of interest 

#### [GET /LFPradialDistanceRangeFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-lfpradialdistancerangefilter)

Returns/sets the scanning range filter settings. The filter restricts distance measurements to a specified range. Measurements outside the specified range are assigned a distance and RSSI value of 0.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `ulDistMin` | No |

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 200000

 |
| `ulDistMax` | No |

**Type:** integer · **Default:** 20000 · **Minimum:** 0 · **Maximum:** 200000

 |

 |

#### [POST /LFPradialDistanceRangeFilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-lfpradialdistancerangefilter)

Returns/sets the scanning range filter settings. The filter restricts distance measurements to a specified range. Measurements outside the specified range are assigned a distance and RSSI value of 0.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LFPradialDistanceRangeFilter` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `ulDistMin` | No |

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 200000

 |
| `ulDistMax` | No |

**Type:** integer · **Default:** 20000 · **Minimum:** 0 · **Maximum:** 200000

 |

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /LFPcubicareafilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-lfpcubicareafilter)

Returns/sets the cuboid area filter settings. The cuboid area filter limits the measurement data box defined by its extension along the x- and y-axes.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `lXMin` | No |

**Type:** integer · **Default:** -20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lXMax` | No |

**Type:** integer · **Default:** 20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lYMin` | No |

**Type:** integer · **Default:** -20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lYMax` | No |

**Type:** integer · **Default:** 20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lZMin` | No |

**Type:** integer · **Default:** -20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lZMax` | No |

**Type:** integer · **Default:** 20000 · **Minimum:** -200000 · **Maximum:** 200000

 |

 |

#### [POST /LFPcubicareafilter](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-lfpcubicareafilter)

Returns/sets the cuboid area filter settings. The cuboid area filter limits the measurement data box defined by its extension along the x- and y-axes.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LFPcubicareafilter` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `lXMin` | No |

**Type:** integer · **Default:** -20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lXMax` | No |

**Type:** integer · **Default:** 20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lYMin` | No |

**Type:** integer · **Default:** -20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lYMax` | No |

**Type:** integer · **Default:** 20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lZMin` | No |

**Type:** integer · **Default:** -20000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lZMax` | No |

**Type:** integer · **Default:** 20000 · **Minimum:** -200000 · **Maximum:** 200000

 |

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

### 17 - Field evaluation 

#### [GET /FieldEvaluationResult](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-fieldevaluationresult)

Returns the state of all possible fields.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `FieldEvaluationResult` | No |

**Fields:** [FieldEvaluationResult_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-fieldevaluationresult-t)

 |

 |

#### [POST /ActivateEvaluationGroup](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-activateevaluationgroup)

Sets the activation condition for all existing field evaluation groups (not configured, active, or inactive).

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `data` | No |

**Example:**

```json
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

Fields
| Field | Required | Details |
| `List` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

Fields
| Field | Required | Details |
| `GroupId` | No |

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 48

 |
| `Activate` | No |

**Type:** boolean · **Default:** false

 |

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Success` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

**Type:** boolean · **Default:** false

 |

 |

#### [POST /SetFieldEvaluationContour](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-setfieldevaluationcontour)

Sets the contour of an existing field.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

**Example:**

```json
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

Fields
| Field | Required | Details |
| `EvaluationId` | No |

**Type:** integer

 |
| `Points` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 100

**Items:**

Fields
| Field | Required | Details |
| `x` | No |

**Type:** integer · **Default:** 0

 |
| `y` | No |

**Type:** integer

 |

 |
| `LowerZLimit` | No |

**Type:** integer · **Minimum:** -100000 · **Maximum:** 100000

 |
| --- | --- | --- |
| `UpperZLimit` | No |

**Type:** integer · **Minimum:** -100000 · **Maximum:** 100000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ErrorCode` | No |

**Allowed values:**

```json
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

 |

#### [POST /GetFieldEvaluationContour](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-getfieldevaluationcontour)

Returns the contour of an existing field.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

**Example:**

```json
{
  "EvaluationId": 1
}
```

Fields
| Field | Required | Details |
| `EvaluationId` | No |

**Type:** integer

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Contour` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

Fields
| Field | Required | Details |
| `EvaluationId` | No |

**Type:** integer

 |
| `Points` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 100

**Items:**

Fields
| Field | Required | Details |
| `x` | No |

**Type:** integer · **Default:** 0

 |
| `y` | No |

**Type:** integer · **Default:** 0

 |

 |
| `LowerZLimit` | No |

**Type:** integer · **Minimum:** -100000 · **Maximum:** 100000

 |
| --- | --- | --- |
| `UpperZLimit` | No |

**Type:** integer · **Minimum:** -100000 · **Maximum:** 100000

 |

 |

 |

#### [POST /SetFieldEvaluationConfiguration](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-setfieldevaluationconfiguration)

Sets the configuration of a field evaluation.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EvaluationId` | No |

**Type:** integer

 |
| `Name` | No |

**Type:** string · **Default:**   · **Maximum length:** 20

 |
| `Configuration` | No |

**Fields:** [Evaluation_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-evaluation-t)

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ErrorCode` | No |

**Allowed values:**

```json
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

 |

#### [POST /GetFieldEvaluationConfiguration](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-getfieldevaluationconfiguration)

Gets the configuration of a field evaluation.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

**Example:**

```json
{
  "EvaluationId": 1
}
```

Fields
| Field | Required | Details |
| `EvaluationId` | No |

**Type:** integer

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Configuration` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

Fields
| Field | Required | Details |
| `EvaluationId` | No |

**Type:** integer

 |
| `Name` | No |

**Type:** string · **Default:**   · **Maximum length:** 20

 |
| `Configuration` | No |

**Fields:** [Evaluation_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-evaluation-t)

 |

 |

 |

#### [GET /EvaluationConfigState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-evaluationconfigstate)

Returns the performance state of an evaluation configuration.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ActiveBeamsLimit` | No |

**Allowed values:**

```json
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
| `ActiveEvaluationsLimit` | No |

**Allowed values:**

```json
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
| `NumberOfIntersectingBeams` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

**Type:** integer

 |
| `InputIsOutputErrorList` | No |

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

**Type:** integer

 |

 |

#### [GET /FieldEvaluationGroupState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-fieldevaluationgroupstate)

Returns the activation condition for all existing field evaluation groups (not configured, active, or inactive).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `FieldEvaluationGroupState` | No |

**Type:** array · **Minimum items:** 48 · **Maximum items:** 48

**Items:**

**Allowed values:**

```json
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

 |

#### [GET /FieldEvaluationApplicationState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-fieldevaluationapplicationstate)

Returns the state (DEACTIVATED, ACTIVE, CONFIGURING, ERROR) of the field evaluation.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `FieldEvaluationApplicationState` | No |

**Allowed values:**

```json
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

 |

### 18 - Object evaluation 

#### [GET /ObjectEvaluationApplicationState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-objectevaluationapplicationstate)

Returns the application state (DEACTIVATED, ACTIVE, CONFIGURING, ERROR).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ObjectEvaluationApplicationState` | No |

**Allowed values:**

```json
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

 |

#### [GET /ObjectEvaluationResult](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-objectevaluationresult)

Returns the results of all configured object evaluations.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ObjectEvaluationResult` | No |

**Fields:** [ObjectEvaluationResult_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-objectevaluationresult-t)

 |

 |

#### [GET /ObjectEvaluationConfigState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-objectevaluationconfigstate)

Returns the performance state of an object evaluation configuration.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ActiveBeamsLimit` | No |

**Allowed values:**

```json
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
| `ActiveEvaluationsLimit` | No |

**Allowed values:**

```json
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
| `NumberOfIntersectingBeams` | No |

**Default:**

```json
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
| `InputIsOutputErrorList` | No |

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

**Type:** integer

 |

 |

#### [GET /ObjectEvaluationGroupState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-objectevaluationgroupstate)

Returns the activation condition for all existing object evaluation groups (not configured, active, or inactive).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ObjectEvaluationGroupState` | No |

**Type:** array · **Minimum items:** 48 · **Maximum items:** 48

**Items:**

**Allowed values:**

```json
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

 |

#### [POST /ActivateObjectEvaluationGroup](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-activateobjectevaluationgroup)

Activates/deactivates an object evaluation group.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `data` | No |

Fields
| Field | Required | Details |
| `List` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

Fields
| Field | Required | Details |
| `GroupId` | No |

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 48

 |
| `Activate` | No |

**Type:** boolean · **Default:** false

 |

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Success` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

**Type:** boolean · **Default:** false

 |

 |

#### [POST /SetObjectEvaluationContour](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-setobjectevaluationcontour)

Sets the region of interest of an object detection evaluation.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EvaluationId` | No |

**Type:** integer

 |
| `Points` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 100

**Items:**

Fields
| Field | Required | Details |
| `x` | No |

**Type:** integer · **Default:** 0

 |
| `y` | No |

**Type:** integer

 |

 |
| `LowerZLimit` | No |

**Type:** integer · **Minimum:** -100000 · **Maximum:** 100000

 |
| --- | --- | --- |
| `UpperZLimit` | No |

**Type:** integer · **Minimum:** -100000 · **Maximum:** 100000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ErrorCode` | No |

**Allowed values:**

```json
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

 |

#### [POST /GetObjectEvaluationContour](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-getobjectevaluationcontour)

Gets the region of interest of an object detection evaluation.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

**Example:**

```json
{
  "EvaluationId": 1
}
```

Fields
| Field | Required | Details |
| `EvaluationId` | No |

**Type:** integer

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Contour` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

Fields
| Field | Required | Details |
| `EvaluationId` | No |

**Type:** integer

 |
| `Points` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 100

**Items:**

Fields
| Field | Required | Details |
| `x` | No |

**Type:** integer · **Default:** 0

 |
| `y` | No |

**Type:** integer · **Default:** 0

 |

 |
| `LowerZLimit` | No |

**Type:** integer · **Minimum:** -100000 · **Maximum:** 100000

 |
| --- | --- | --- |
| `UpperZLimit` | No |

**Type:** integer · **Minimum:** -100000 · **Maximum:** 100000

 |

 |

 |

#### [POST /SetObjectEvaluationConfiguration](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-setobjectevaluationconfiguration)

Sets the configuration of an object detection evaluation.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EvaluationId` | No |

**Type:** integer

 |
| `Name` | No |

**Type:** string · **Default:**   · **Maximum length:** 20

 |
| `Configuration` | No |

**Fields:** [TrackEvaluation_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-trackevaluation-t)

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ErrorCode` | No |

**Allowed values:**

```json
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

 |

#### [POST /GetObjectEvaluationConfiguration](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-getobjectevaluationconfiguration)

Gets the configuration of an object detection evaluation.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

**Example:**

```json
{
  "EvaluationId": 1
}
```

Fields
| Field | Required | Details |
| `EvaluationId` | No |

**Type:** integer

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Configuration` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

Fields
| Field | Required | Details |
| `EvaluationId` | No |

**Type:** integer

 |
| `Name` | No |

**Type:** string · **Default:**   · **Maximum length:** 20

 |
| `Configuration` | No |

**Fields:** [TrackEvaluation_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-trackevaluation-t)

 |

 |

 |

### 19 - Perpendicular distance 

#### [GET /perpendicularDistanceResult](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-perpendiculardistanceresult)

Returns the perpendicular distance within a field.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `timestamp` | No |

**Type:** integer

 |
| `evaluations` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

Fields
| Field | Required | Details |
| `evaluationId` | No |

**Type:** integer

 |
| `minimumDistance` | No |

**Type:** integer

 |
| `maximumDistance` | No |

**Type:** integer

 |
| `minimumDistancePosition` | No |

**Fields:** [Point3d_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-point3d-t)

 |
| `maximumDistancePosition` | No |

**Fields:** [Point3d_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-point3d-t)

 |

 |

 |

### 20 - Operating data 

#### [GET /LastParaDate](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-lastparadate)

Returns the last date (e.g. 12.11.2024) when a permanent parameter save was executed.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LastParaDate` | No |

**Type:** string · **Default:** DD.MM.YYYY · **Maximum length:** 10

 |

 |

#### [GET /LastParaTime](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-lastparatime)

Returns the last time (e.g. 13:24) when a permanent parameter save was executed.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LastParaTime` | No |

**Type:** string · **Default:** HH:MM · **Maximum length:** 5

 |

 |

#### [GET /PowerOnCnt](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-poweroncnt)

Returns the number of power-on cycles.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `PowerOnCnt` | No |

**Type:** integer · **Default:** 0

 |

 |

#### [GET /DailyOpHours](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-dailyophours)

Returns the runtime duration since the last power-on (non-persistent).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `DailyOpHours` | No |

**Type:** number · **Default:** 0.0

 |

 |

#### [GET /OpHours](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-ophours)

Returns the total number of operating hours during the lifetime of the device. The resolution is one-tenth of an hour.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `OpHours` | No |

**Type:** integer · **Default:** 0

 |

 |

#### [GET /CurrentTempDev](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-currenttempdev)

Returns the current device temperature in Celsius.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `CurrentTempDev` | No |

**Type:** number · **Default:** 20.0

 |

 |

### 21 - Diagnostic file 

#### [GET /crown/file](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-crown-file)

Downloads the diagnostic file (zip file) if one exists.

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

#### [POST /DoDiagnosisDump](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-dodiagnosisdump)

Creates a diagnostic file (zip file) for further analysis.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

**Example:**

```json
{
  "DoRunlevelLoop": true,
  "Output": "file"
}
```

Fields
| Field | Required | Details |
| `DoRunlevelLoop` | No |

**Type:** boolean · **Default:** false

 |
| `Output` | No |

**Type:** string · **Default:**   · **Maximum length:** 64

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Successfull` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /GetDiagnosisDumpInfo](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-getdiagnosisdumpinfo)

Returns additional metadata about the diagnostic file.

**Request body**

**Required:** true

**Media type: `application/json`**

**Type:** object · **Nullable:** true

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

**Example:**

```json
{
  "DiagDumpExists": true,
  "DiagDumpTimestamp": 247
}
```

Fields
| Field | Required | Details |
| `DiagDumpExists` | No |

**Type:** boolean · **Default:** false

 |
| `DiagDumpTimestamp` | No |

**Type:** integer

 |

 |

### 22 - Detection history 

#### [GET /EnableDetectionHistory](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-enabledetectionhistory)

Enables/disables detection history.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EnableDetectionHistory` | No |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /EnableDetectionHistory](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-enabledetectionhistory)

Enables/disables detection history.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EnableDetectionHistory` | No |

**Type:** boolean · **Default:** true

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /EvaluationsToLog](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-evaluationstolog)

Returns/sets which evaluations are logged when they are in use.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EvaluationsToLog` | No |

**Type:** array · **Minimum items:** 48 · **Maximum items:** 48

**Items:**

**Type:** boolean · **Default:** true

 |

 |

#### [POST /EvaluationsToLog](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-evaluationstolog)

Returns/sets which evaluations are logged when they are in use.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EvaluationsToLog` | No |

**Type:** array · **Minimum items:** 48 · **Maximum items:** 48

**Items:**

**Type:** boolean · **Default:** true

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [POST /ResetDetectionHistory](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-resetdetectionhistory)

Resets the detection history logs.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

### 23 - Firmware update 

#### [PUT /update](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-put-update)

Uploads a firmware file (.spk) to the device. The maximum file size is 100 MB.

**Request body**

**Media type: `application/octet-stream`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `data` | No |

Fields
| Field | Required | Details |
| `Type` | No |

**Type:** string

 |
| `Binary` | No |

**Type:** string

 |

 |

**Responses**

**Status `200`**

#### [POST /RunFirmwareUpdate](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-runfirmwareupdate)

Starts the firmware update process. This function requires the user level: Service.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |

#### [GET /UpdateState](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-updatestate)

Returns the state of the update process.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `UpdateState` | No |

**Allowed values:**

```json
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

 |

### 24 - Cybersecurity 

#### [GET /httpsStatus](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-httpsstatus)

Returns the status of the HTTPS interface.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `enabled` | No |

**Type:** boolean · **Default:** false

 |
| `errorCode` | No |

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-httpserror-t)

 |

 |

#### [GET /certificateBundleInfo](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-certificatebundleinfo)

Returns information about the uploaded certificate bundle.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `uuidBundle` | No |

**Type:** string · **Default:**   · **Maximum length:** 100

 |
| `certificates` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 4

**Items:**

Fields
| Field | Required | Details |
| `names` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 20

**Items:**

Fields
| Field | Required | Details |
| `entry` | No |

**Type:** string · **Default:**   · **Maximum length:** 1000

 |

 |
| `issuer` | No |

**Type:** string · **Default:**   · **Maximum length:** 1000

 |
| --- | --- | --- |
| `subject` | No |

**Type:** string · **Default:**   · **Maximum length:** 1000

 |
| `serialNumber` | No |

**Type:** string · **Default:**   · **Maximum length:** 119

 |
| `fingerprint` | No |

**Type:** string · **Default:**   · **Maximum length:** 119

 |
| `validNotBefore` | No |

**Type:** string · **Default:**                          · **Minimum length:** 24 · **Maximum length:** 24

 |
| `validNotAfter` | No |

**Type:** string · **Default:**                          · **Minimum length:** 24 · **Maximum length:** 24

 |

 |
| `errorCode` | No |

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-httpserror-t)

 |
| --- | --- | --- |

 |

#### [POST /removeCertificateBundle](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-removecertificatebundle)

Removes the uploaded certificate bundle.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `success` | No |

**Type:** boolean · **Default:** false

 |
| `errorCode` | No |

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-httpserror-t)

 |

 |

#### [POST /setCertificateBundle](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-setcertificatebundle)

Uploads a certificate bundle in the PEM format via JSON.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `contentCertificateBundle` | No |

**Type:** string · **Default:**   · **Maximum length:** 10000

 |
| `contentPrivateKey` | No |

**Type:** string · **Default:**   · **Maximum length:** 4000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `success` | No |

**Type:** boolean · **Default:** false

 |
| `errorCode` | No |

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-httpserror-t)

 |

 |

### 25 - Backup/Restore 

#### [GET /parameterbackup](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-get-parameterbackup)

Downloads the parameter backup file (.json) from the device or uploads it to the device.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `version` | No |

**Type:** string

 |
| `device identification` | No |

**Type:** string

 |
| `checksum` | No |

**Type:** string

 |
| `parameters` | No |

**Type:** array

**Items:**

Fields
| Field | Required | Details |
| `userlevel` | No |

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-e-user-level-type)

 |
| `parameters` | No |

**Type:** array

**Items:**

Fields
| Field | Required | Details |
| `name` | No |

**Type:** string

 |
| `id` | No |

**Type:** string

 |
| `value` | No |

**oneOf**

**Type:** integer

**Type:** boolean

**Type:** string

**Type:** object

**Type:** number

 |

 |

 |

#### [PUT /parameterbackup](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-put-parameterbackup)

Downloads the parameter backup file (.json) from the device or uploads it to the device.

**Request body**

**Media type: `multipart/form-data`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `datei` | No |

**Type:** string · **Format:** binary

Json-Datei

 |

**Responses**

**Status `200`**

#### [POST /CreateParameterBackup](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-createparameterbackup)

Creates a parameter backup file.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Passphrase` | No |

**Type:** string · **Default:**   · **Maximum length:** 256

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Result` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /RestoreParameterBackup](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#rest-post-restoreparameterbackup)

Restores the device parameters from the uploaded backup file.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Passphrase` | No |

**Type:** string · **Default:**   · **Maximum length:** 256

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `RestoreResult` | No |

**Fields:** [RestoreBackupResult](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-restorebackupresult)

 |
| `ParametersFailedToRestore` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 100

**Items:**

**Type:** string · **Default:**   · **Maximum length:** 256

 |

 |

### Shared request and response fields 

#### ResponseHeader 

Fields
| Field | Required | Details |
| --- | --- | --- |
| `status` | No |

**Allowed values:**

```json
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
| `message` | No |

**Type:** string · **Default:** Ok

 |

#### PostBodyHeader 

Fields
| Field | Required | Details |
| --- | --- | --- |
| `nonce` | No |

**Type:** string · **Default:**

 |
| `opaque` | No |

**Type:** string · **Default:**

 |
| `realm` | No |

**Type:** string · **Default:** SICK Sensor

 |
| `response` | No |

**Type:** string · **Default:**

 |
| `user` | No |

**Type:** string · **Default:** AuthorizedClient

 |

#### E_USER_LEVEL_TYPE 

**Allowed values:**

```json
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

```json
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

```json
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

Fields
| Field | Required | Details |
| --- | --- | --- |
| `error` | No |

**Type:** string · **Default:**   · **Maximum length:** 100

 |

#### Logic_t 

**Allowed values:**

```json
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

Fields
| Field | Required | Details |
| --- | --- | --- |
| `eIOState` | No |

**Allowed values:**

```json
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

 |

#### PortStateAndCounter_t 

Fields
| Field | Required | Details |
| --- | --- | --- |
| `ePortState` | No |

**Allowed values:**

```json
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
| `PortCounter` | No |

**Type:** integer

 |

#### DateTime_t 

Fields
| Field | Required | Details |
| --- | --- | --- |
| `uiYear` | No |

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 2105

 |
| `usiMonth` | No |

**Type:** integer · **Default:** 1 · **Minimum:** 0 · **Maximum:** 12

 |
| `usiDay` | No |

**Type:** integer · **Default:** 1 · **Minimum:** 0 · **Maximum:** 31

 |
| `usiHour` | No |

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 23

 |
| `usiMinute` | No |

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 59

 |
| `usiSec` | No |

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 59

 |
| `udiUSec` | No |

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 999999

 |

#### LedStateType 

Fields
| Field | Required | Details |
| --- | --- | --- |
| `Color` | No |

**Allowed values:**

```json
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
| `Function` | No |

**Allowed values:**

```json
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
| `Id` | No |

**Type:** string · **Default:**   · **Maximum length:** 8

 |

#### Point3d_t 

Fields
| Field | Required | Details |
| --- | --- | --- |
| `x` | No |

**Type:** integer · **Default:** 0 · **Minimum:** -500000 · **Maximum:** 500000

 |
| `y` | No |

**Type:** integer · **Default:** 0 · **Minimum:** -500000 · **Maximum:** 500000

 |
| `z` | No |

**Type:** integer · **Default:** 0 · **Minimum:** -500000 · **Maximum:** 500000

 |

#### Evaluation_t 

Fields
| Field | Required | Details |
| --- | --- | --- |
| `Version` | No |

**Type:** integer · **Default:** 1

 |
| `Source` | No |

**Allowed values:**

```json
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
| `Name` | No |

**Type:** string · **Default:**   · **Maximum length:** 20

 |
| `ID` | No |

**Type:** integer · **Default:** 1

 |
| `EvaluationParamsMaskBased` | No |

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

Fields
| Field | Required | Details |
| `InfringementThresholdFactor` | No |

**Type:** integer · **Default:** 80 · **Minimum:** 1 · **Maximum:** 100

 |

 |
| `EvaluationParamsSegmentationBased` | No |

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

Fields
| Field | Required | Details |
| `SampleParam1` | No |

**Type:** integer

 |

 |
| `EvaluationParamsCommon` | No |

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

Fields
| Field | Required | Details |
| `MinimumObjectSizeHorizontal` | No |

**Type:** integer · **Default:** 200 · **Minimum:** 0 · **Maximum:** 5000

 |
| `MinimumObjectSizeVertical` | No |

**Type:** integer · **Default:** 200 · **Minimum:** 0 · **Maximum:** 5000

 |
| `OcclusionHandling` | No |

**Type:** boolean · **Default:** false

 |
| `TreatMissingDataAsInfringed` | No |

**Type:** boolean · **Default:** false

 |
| `TimeForInfringedState` | No |

**Type:** integer · **Default:** 50 · **Minimum:** 1 · **Maximum:** 10000

 |
| `TimeForFreeState` | No |

**Type:** integer · **Default:** 50 · **Minimum:** 1 · **Maximum:** 10000

 |
| `Reserved3` | No |

**Type:** integer

 |
| `Reserved4` | No |

**Type:** integer

 |

 |
| `EvaluationParamsExitSize` | No |

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

Fields
| Field | Required | Details |
| `disableExitSize` | No |

**Type:** boolean · **Default:** false

 |
| `exitSizeVertical` | No |

**Type:** integer · **Default:** 70 · **Minimum:** 0 · **Maximum:** 100

 |
| `exitSizeHorizontal` | No |

**Type:** integer · **Default:** 100 · **Minimum:** 0 · **Maximum:** 100

 |

 |
| `VolumeList` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Type:** integer · **Default:** 1 · **Minimum:** 1 · **Maximum:** 48

 |
| --- | --- | --- |

#### EvaluationResult_t 

Fields
| Field | Required | Details |
| --- | --- | --- |
| `State` | No |

**Allowed values:**

```json
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

 |

#### FieldEvaluationResult_t 

Fields
| Field | Required | Details |
| --- | --- | --- |
| `Version` | No |

**Type:** integer · **Default:** 1

 |
| `Timestamp` | No |

**Type:** integer

 |
| `EvaluationResultList` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

**Fields:** [EvaluationResult_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-evaluationresult-t)

 |

#### TrackEvaluation_t 

Fields
| Field | Required | Details |
| --- | --- | --- |
| `Version` | No |

**Type:** integer · **Default:** 1

 |
| `EvaluationParamsCommon` | No |

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

Fields
| Field | Required | Details |
| `MaximumHiddenTime` | No |

**Type:** integer · **Default:** 500 · **Minimum:** 0 · **Maximum:** 1000

 |
| `MinimumObjectAge` | No |

**Type:** integer · **Default:** 0 · **Minimum:** 0

 |
| `TimeForInfringedState` | No |

**Type:** integer · **Default:** 500 · **Minimum:** 1

 |
| `MinimumObjectWidth` | No |

**Type:** integer · **Default:** 200 · **Minimum:** 0 · **Maximum:** 200000

 |
| `MinimumObjectHeight` | No |

**Type:** integer · **Default:** 0 · **Minimum:** 0 · **Maximum:** 200000

 |
| `EnableMaximumSizeFilter` | No |

**Type:** boolean · **Default:** false

 |
| `MaximumObjectWidth` | No |

**Type:** integer · **Default:** 2000 · **Minimum:** 0 · **Maximum:** 200000

 |
| `MaximumObjectHeight` | No |

**Type:** integer · **Default:** 2000 · **Minimum:** 0 · **Maximum:** 200000

 |
| `MotionState` | No |

**Allowed values:**

```json
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
| `EnableSpeedFilter` | No |

**Type:** boolean · **Default:** true

 |
| `MinimumObjectVelocity` | No |

**Type:** integer · **Default:** 300 · **Minimum:** 0 · **Maximum:** 65000

 |
| `MaximumObjectVelocity` | No |

**Type:** integer · **Default:** 15000 · **Minimum:** 0 · **Maximum:** 65000

 |
| `EnableDirectionFilter` | No |

**Type:** boolean · **Default:** false

 |
| `ObjectDirection` | No |

**Type:** integer · **Default:** 180 · **Minimum:** -180 · **Maximum:** 180

 |
| `ObjectDirectionUncertainty` | No |

**Type:** integer · **Default:** 90 · **Minimum:** 0 · **Maximum:** 180

 |
| `Reserved1` | No |

**Type:** integer · **Default:** 0

 |
| `Reserved2` | No |

**Type:** integer · **Default:** 0

 |
| `Reserved3` | No |

**Type:** integer · **Default:** 0

 |
| `Reserved4` | No |

**Type:** integer · **Default:** 0

 |
| `Reserved5` | No |

**Type:** integer · **Default:** 0

 |
| `Reserved6` | No |

**Type:** integer · **Default:** 0

 |

 |
| `ReservedParams1` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

Fields
| Field | Required | Details |
| `ReservedDummy` | No |

**Type:** integer · **Default:** 0

 |

 |
| `ReservedParams2` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

Fields
| Field | Required | Details |
| `ReservedDummy` | No |

**Type:** integer · **Default:** 0

 |

 |

#### ObjectEvaluationResult_t 

Fields
| Field | Required | Details |
| --- | --- | --- |
| `Version` | No |

**Type:** integer · **Default:** 1

 |
| `Timestamp` | No |

**Type:** integer

 |
| `EvaluationResultList` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

**Fields:** [EvaluationResult_t](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/rest-api-openapi/#schema-evaluationresult-t)

 |
