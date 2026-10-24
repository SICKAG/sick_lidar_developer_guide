# LRS4000 REST API V1.10.0 Reference (OpenAPI)

> Download the LRS4000 V1.10.0 OpenAPI description and search REST endpoints, request parameters, and response schemas.

Source: https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/

# LRS4000 REST API | OpenAPI V1.10.0

<div class="tool-intro tool-intro--centered" markdown>

![OpenAPI](https://sickag.github.io/sick_lidar_developer_guide/assets/openapi-logo.png)

This page provides the searchable V1.10.0 REST reference and downloadable
OpenAPI description for LRS4000. For REST concepts, authentication, and request
patterns, see [REST API / OpenAPI](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/).

</div>

## OpenAPI File

- [LRS4000 V1.10.0 - OpenAPI (YAML)](https://sickag.github.io/sick_lidar_developer_guide/assets/LRS4000/openapi/LRS4000_V1.10.0_OpenAPI.yaml)

Always match the file to your device's actual firmware version. Function
availability can vary by variant and installed software package.

## Endpoint Reference

### 1 - General 

#### [POST /SetPassword](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-setpassword)

Sets the password for the CoLa A/B interface. In this example the password for userlevel service (4) is set to - test - (Integer value of the password hash - test -). For more details see https://github.com/SICKAG/sick_scan_rest_client.

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

**Type:** integer · **Format:** int8

 |
| `udiNewPassword` | No |

**Type:** integer · **Format:** uint32

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bSuccess` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /getChallenge](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-getchallenge)

Returns a challenge for the challenge and response authentication method. For more details see https://github.com/SICKAG/sick_scan_rest_client

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

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-e-user-level-type)

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

#### [POST /changePassword](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-changepassword)

Sets the password for the REST interface. For more details see https://github.com/SICKAG/sick_scan_rest_client.

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

**Type:** integer · **Format:** uint8

 |
| `userLevel` | No |

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-e-user-level-type)

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - SUCCESS
 * 2 - NOT_ACCEPTED
 * 4 - PWD_NOT_CHANGABLE
 * 5 - TIMELOCK_ACTIVE

 |

 |

#### [POST /WriteEeprom](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-writeeeprom)

Saves all parameters permanently.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Success` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /SoftReset](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-softreset)

Reboots the device. All non-saved parameters are lost. This function requires the user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ProcessorNbr` | No |

**Type:** integer · **Format:** uint16

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [POST /RebootDevice](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-rebootdevice)

Reboots the device and includes saving of all parameters. This function requires the user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [POST /LoadFactoryDefaults](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-loadfactorydefaults)

Resets all parameters to default. This function requires the user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [POST /LoadApplicationDefaults](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-loadapplicationdefaults)

Resets only the user parametrization of the fields, evaluation cases, and parameters under the section Application. Other parameters like interface settings, echo filter, etc. remain unchanged. This function requires the user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

### 2 - Status 

#### [GET /DeviceStatus](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-devicestatus)

Returns the device state (9 possible states).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `DeviceStatus` | No |

**Fields:** [DeviceStatus](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-devicestatus)

 |

 |

#### [GET /SCdevicestate](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-scdevicestate)

Returns the device state (busy, ready, or ready).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - Busy
 * 1 - Ready
 * 2 - Error

 |

 |

### 3 - Device 

#### [GET /DeviceIdent](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-deviceident)

Returns the device name and firmware version.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Name` | No |

**Type:** string · **Default:** LRSNAV · **Maximum length:** 20

 |
| `Version` | No |

**Type:** string · **Default:** 1.10.0.0R · **Maximum length:** 32

 |

 |

#### [GET /LocationName](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-locationname)

Returns/sets the device name.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LocationName` | No |

**Type:** string · **Default:** not defined · **Maximum length:** 16

 |

 |

#### [POST /LocationName](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-locationname)

Returns/sets the device name.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LocationName` | No |

**Type:** string · **Default:** not defined · **Maximum length:** 16

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /SerialNumber](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-serialnumber)

Returns the serial number.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `SerialNumber` | No |

**Type:** string · **Default:** 12345678 · **Maximum length:** 8

 |

 |

#### [GET /FirmwareVersion](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-firmwareversion)

Returns the current firmware version.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `FirmwareVersion` | No |

**Type:** string · **Default:** x.x.x.x · **Maximum length:** 32

 |

 |

#### [POST /FindMe](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-findme)

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

**Type:** integer · **Format:** uint16

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /OrderNumber](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-ordernumber)

Returns the order number (SICK part number).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `OrderNumber` | No |

**Type:** string · **Default:** 1234567 · **Maximum length:** 32

 |

 |

#### [GET /DeviceType](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-devicetype)

Returns the device type.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `DeviceType` | No |

**Type:** string · **Default:** LRSNAV · **Maximum length:** 18

 |

 |

### 4 - Basic settings 

#### [GET /ScanConfig](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-scanconfig)

Configuration of angular resolution, scanning frequency, start- and stop angle.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `udiScanFreq` | No |

**Type:** integer · **Format:** uint32 · **Default:** 1250 · **Minimum:** 500 · **Maximum:** 2500

 |
| `ScanRange` | No |

Fields
| Field | Required | Details |
| `uiLength` | No |

**Type:** integer · **Format:** uint16 · **Default:** 1 · **Minimum:** 1 · **Maximum:** 1

 |
| `aRange` | No |

**Type:** array · **Minimum items:** 1 · **Maximum items:** 1

**Items:**

Fields
| Field | Required | Details |
| `udiAngleRes` | No |

**Type:** integer · **Format:** uint32 · **Default:** 1200 · **Minimum:** 200 · **Maximum:** 5000

 |
| `diStartAngle` | No |

**Type:** integer · **Format:** int32 · **Default:** -1800000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `diStopAngle` | No |

**Type:** integer · **Format:** int32 · **Default:** 1800000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |

 |

 |

 |

#### [GET /SensitivityMode](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-sensitivitymode)

The sensitivity mode can be used to adjust the detection behavior. A higher sensitivity increases the scanning range. This setting should only be used when there is no direct sunlight and only low ambient light. A higher sensitivity increases the proneness to measurement noise and data loss. Ambient light can negatively affect the signal quality and impair the measurement performance.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `SensitivityMode` | No |

**Allowed values:**

```json
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

 |

#### [POST /SensitivityMode](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-sensitivitymode)

The sensitivity mode can be used to adjust the detection behavior. A higher sensitivity increases the scanning range. This setting should only be used when there is no direct sunlight and only low ambient light. A higher sensitivity increases the proneness to measurement noise and data loss. Ambient light can negatively affect the signal quality and impair the measurement performance.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `SensitivityMode` | No |

**Allowed values:**

```json
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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [POST /SetScanConfigList](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-setscanconfiglist)

Set a new device scan resolution/frequency combination. Please note that configurations, starting with value 3x or 9x switch the device from standard to extended range mode and values starting with x, 1x, 6x, 7x switch the device from extended range to normal mode.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

**Example:**

```json
{
  "ScanConfigList": 1
}
```

Fields
| Field | Required | Details |
| `ScanConfigList` | No |

**Fields:** [PerformanceProfiles_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-performanceprofiles-t)

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `eScanConfigError` | No |

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - SCE_OK
 * 1 - SCE_ERROR_FREQ
 * 2 - SCE_ERROR_RES
 * 3 - SCE_ERROR_FREQ_RES_COMB
 * 4 - SCE_ERROR_NUM_RANGE
 * 5 - SCE_ERROR

 |

 |

#### [GET /LEDEnable](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-ledenable)

Returns/sets the LED mode (on/off).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LEDEnable` | No |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /LEDEnable](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-ledenable)

Returns/sets the LED mode (on/off).

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [POST /mStartMeasure](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-mstartmeasure)

Start motor, measurement and laser.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - SOPAS_ERR_NO_ERR
 * 1 - SOPAS_ERR_STATE_CHANGE_NOT_PERMITTED

 |

 |

#### [POST /mStandby](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-mstandby)

Disable the laser.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - SOPAS_ERR_NO_ERR
 * 1 - SOPAS_ERR_STATE_CHANGE_NOT_PERMITTED

 |

 |

### 5 - Date and system time 

#### [GET /DeviceTime](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-devicetime)

Returns the current time of the internal clock (ms). The timer is 32 bit counter with a resolution of 1 ms.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `DeviceTime` | No |

**Type:** integer · **Format:** uint32 · **Default:** 0

 |

 |

#### [GET /TSCRole](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-tscrole)

Returns/sets the time synchronization role (none = 0 , NTP = 1 or PTP = 3).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

 |

#### [POST /TSCRole](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-tscrole)

Returns/sets the time synchronization role (none = 0 , NTP = 1 or PTP = 3).

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /TSCTCSrvAddr](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-tsctcsrvaddr)

Returns/sets the NTP time server's IP address.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8

 |

 |

#### [POST /TSCTCSrvAddr](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-tsctcsrvaddr)

Returns/sets the NTP time server's IP address.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

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

**Type:** integer · **Format:** uint8

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /TSCTCtimezone](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-tsctctimezone)

Returns/sets the NTP time zone.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

 |

#### [POST /TSCTCtimezone](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-tsctctimezone)

Returns/sets the NTP time zone.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /TSCTCupdatetime](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-tsctcupdatetime)

Returns/sets the NTP update time.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `TSCTCupdatetime` | No |

**Type:** integer · **Format:** uint32 · **Default:** 600 · **Minimum:** 1 · **Maximum:** 3600

 |

 |

#### [POST /TSCTCupdatetime](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-tsctcupdatetime)

Returns/sets the NTP update time.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `TSCTCupdatetime` | No |

**Type:** integer · **Format:** uint32 · **Default:** 600 · **Minimum:** 1 · **Maximum:** 3600

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /DateTime](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-datetime)

Returns the current time of the device (years, months, days, hours, minutes, seconds, microseconds).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `DateTime` | No |

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-datetime-t)

 |

 |

#### [POST /mSetDateTime](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-msetdatetime)

Sets the time of the device (years, months, days, hours, minutes, seconds, microseconds).

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `DateTime` | No |

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-datetime-t)

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - SOPAS_ERR_NO_ERR
 * 1 - SOPAS_ERR_STATE_CHANGE_NOT_PERMITTED

 |

 |

### 6 - Filter 

#### [GET /FREchoFilter](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-frechofilter)

Returns/sets the multi-echo filter settings. Depending on the environment the sensor receives several measurement points on the same angular step (multi-echo). The filter can filter out the first echo, the last echo or all echoes.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 2

Mapping:
 * 0 - FIRST_ECHO
 * 1 - ALL_ECHOS
 * 2 - LAST_ECHO

 |

 |

#### [POST /FREchoFilter](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-frechofilter)

Returns/sets the multi-echo filter settings. Depending on the environment the sensor receives several measurement points on the same angular step (multi-echo). The filter can filter out the first echo, the last echo or all echoes.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 2

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /ParticleFilter](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-particlefilter)

Returns/sets the particle filter settings. Filters out disturbances in the measurement data caused by particles such as dust, snowflakes, or similar. Configure the minimal threshold of the required distance step (mm) between the echo to be filtered and the echoes of surrounding beam angles.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `uiThreshold` | No |

**Type:** integer · **Format:** uint16 · **Default:** 1000 · **Minimum:** 500 · **Maximum:** 5000

 |

 |

#### [POST /ParticleFilter](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-particlefilter)

Returns/sets the particle filter settings. Filters out disturbances in the measurement data caused by particles such as dust, snowflakes, or similar. Configure the minimal threshold of the required distance step (mm) between the echo to be filtered and the echoes of surrounding beam angles.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ParticleFilter` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `uiThreshold` | No |

**Type:** integer · **Format:** uint16 · **Default:** 1000 · **Minimum:** 500 · **Maximum:** 5000

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /MeanFilter](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-meanfilter)

Returns/sets the mean filter settings. This filter smooths the distance value by calculating the arithmetic mean from the configured number of scans.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `uiScanNumber` | No |

**Type:** integer · **Format:** uint16 · **Default:** 10 · **Minimum:** 2 · **Maximum:** 100

 |
| `eFilterMethod` | No |

**Allowed values:**

```json
[
  0
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - ARITHMETIC

 |

 |

#### [POST /MeanFilter](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-meanfilter)

Returns/sets the mean filter settings. This filter smooths the distance value by calculating the arithmetic mean from the configured number of scans.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `MeanFilter` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `uiScanNumber` | No |

**Type:** integer · **Format:** uint16 · **Default:** 10 · **Minimum:** 2 · **Maximum:** 100

 |
| `eFilterMethod` | No |

**Allowed values:**

```json
[
  0
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - ARITHMETIC

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /LFPmedianfilter](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-lfpmedianfilter)

Returns/sets the median filter settings. This filter smooths the distance values by transmitting just the median value of the last X scans.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `uiMedianWidth` | No |

**Type:** integer · **Format:** uint16 · **Default:** 3 · **Minimum:** 3 · **Maximum:** 3

 |

 |

#### [POST /LFPmedianfilter](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-lfpmedianfilter)

Returns/sets the median filter settings. This filter smooths the distance values by transmitting just the median value of the last X scans.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LFPmedianfilter` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `uiMedianWidth` | No |

**Type:** integer · **Format:** uint16 · **Default:** 3 · **Minimum:** 3 · **Maximum:** 3

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

### 7 - Contamination indication 

#### [GET /ContaminationConfig](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-contaminationconfig)

Returns/sets of the contamination indication settings such as sensitivity, response time, threshold for warning, and active sectors.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - CM_STRATEGY_INACTIVE
 * 1 - CM_STRATEGY_HIGH_AVAILABLE
 * 2 - CM_STRATEGY_SENSITIVE

 |
| `usiResponseTime` | No |

**Type:** integer · **Format:** uint16 · **Default:** 3 · **Minimum:** 0 · **Maximum:** 60

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

**Type:** integer · **Format:** uint8 · **Default:** 1

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
| `CustomSectors` | No |

**Type:** array · **Minimum items:** 12 · **Maximum items:** 12

**Items:**

**Type:** boolean · **Default:** false

 |
| `bEnableWarning` | No |

**Type:** boolean · **Default:** true

 |
| `bEnableError` | No |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /ContaminationConfig](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-contaminationconfig)

Returns/sets of the contamination indication settings such as sensitivity, response time, threshold for warning, and active sectors.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - CM_STRATEGY_INACTIVE
 * 1 - CM_STRATEGY_HIGH_AVAILABLE
 * 2 - CM_STRATEGY_SENSITIVE

 |
| `usiResponseTime` | No |

**Type:** integer · **Format:** uint16 · **Default:** 3 · **Minimum:** 0 · **Maximum:** 60

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

**Type:** integer · **Format:** uint8 · **Default:** 1

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
| `CustomSectors` | No |

**Type:** array · **Minimum items:** 12 · **Maximum items:** 12

**Items:**

**Type:** boolean · **Default:** false

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /ContaminationData](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-contaminationdata)

Returns the contamination state of all contamination sectors.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ContaminationData` | No |

**Type:** array · **Minimum items:** 12 · **Maximum items:** 12

**Items:**

**Fields:** [ContaminationData_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-contaminationdata-t)

 |

 |

#### [GET /ContaminationActiveSectors](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-contaminationactivesectors)

Returns the active contamination sectors. Starts with right backside of the sensor when looking to the device on topside view and continues counterclockwise.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ContaminationActiveSectors` | No |

**Type:** array · **Minimum items:** 12 · **Maximum items:** 12

**Items:**

**Type:** boolean · **Default:** false

 |

 |

#### [GET /ContaminationResult](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-contaminationresult)

Returns the contamination indication state of the device.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `warningActive` | No |

**Type:** boolean · **Default:** false

 |
| `errorActive` | No |

**Type:** boolean · **Default:** false

 |

 |

### 8 - Ethernet 

#### [GET /EtherIPAddress](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-etheripaddress)

Returns/sets used static IP address.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8

 |

 |

#### [POST /EtherIPAddress](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-etheripaddress)

Returns/sets used static IP address.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

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

**Type:** integer · **Format:** uint8

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /EtherIPGateAddress](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-etheripgateaddress)

Returns/sets default gateway address.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8

 |

 |

#### [POST /EtherIPGateAddress](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-etheripgateaddress)

Returns/sets default gateway address.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

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

**Type:** integer · **Format:** uint8

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /EtherIPMask](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-etheripmask)

Returns/sets the subnet mask.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8

 |

 |

#### [POST /EtherIPMask](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-etheripmask)

Returns/sets the subnet mask.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

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

**Type:** integer · **Format:** uint8

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /EtherAddressingMode](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-etheraddressingmode)

Returns/sets the mode for the IP address assignment (static or DHCP).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - TX_IP_STATIC
 * 1 - TX_IP_DHCP

 |

 |

#### [POST /EtherAddressingMode](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-etheraddressingmode)

Returns/sets the mode for the IP address assignment (static or DHCP).

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /EtherDHCPFallback](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-etherdhcpfallback)

Returns/sets the mode for the DHCP fallback (retry or static).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 1

Mapping:
 * 0 - TX_USE_STATIC_IP
 * 1 - TX_RETRY_DHCP

 |

 |

#### [POST /EtherDHCPFallback](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-etherdhcpfallback)

Returns/sets the mode for the DHCP fallback (retry or static).

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 1

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [POST /EthernetUpdate](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-ethernetupdate)

Applies the ethernet settings. This needs to be executed to actually change the ethernet settings.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /EtherIPAddressDHCP](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-etheripaddressdhcp)

Returns the assigned DHCP IP address.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8

 |

 |

#### [GET /EtherIPGateAddressDHCP](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-etheripgateaddressdhcp)

Returns the assigned DHCP default gateway address.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8

 |

 |

#### [GET /EtherIPMaskDHCP](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-etheripmaskdhcp)

Returns the assigned DHCP subnet mask.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8

 |

 |

#### [GET /EtherMACAddress](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-ethermacaddress)

Returns the MAC address of the ethernet interface.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8

 |

 |

#### [POST /EtherColaTransmitTimeout](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-ethercolatransmittimeout)

This parameter should only be changed in case the sensor is connected to a network where reconnections may be required caused by e.g. loose contact of the Ethernet cable. This command changes the Acknowledge timeout for TCP based CoLa protocols. Reducing the Acknowledge timeout allows a faster restart of data transmission after unwanted disconnects. In large networks with high amount of data traffic, a reduced Acknowledge timeout may lead to a port close, initiated by the sensor.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherColaTransmitTimeout` | No |

**Type:** integer · **Format:** uint16 · **Default:** 15000 · **Minimum:** 250 · **Maximum:** 15000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

### 9 - Leagcy protocols 

#### [GET /EtherAuxEnabled](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-etherauxenabled)

Enables/disables the legacy interface CoLa A/B. If enabled CoLa A uses port 2111 and CoLa B uses 2112.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherAuxEnabled` | No |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /EtherAuxEnabled](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-etherauxenabled)

Enables/disables the legacy interface CoLa A/B. If enabled CoLa A uses port 2111 and CoLa B uses 2112.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /EnableColaScan](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-enablecolascan)

Enables/disables the device search by SICK tools. If disabled, finding the device via device search and changing the IP address via SICK tools is not possible.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EnableColaScan` | No |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /EnableColaScan](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-enablecolascan)

Enables/disables the device search by SICK tools. If disabled, finding the device via device search and changing the IP address via SICK tools is not possible.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EnableColaScan` | No |

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

### 10 - Webserver settings 

#### [POST /SetWebserverEnabled](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-setwebserverenabled)

Sets availability of the webserver (reboot required). If disabled, the webserver-based GUI and the REST interface can not be used anymore.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

### 11 - Inputs and outputs 

#### [GET /InputState](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-inputstate)

Returns the state of all inputs.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `uiVersionNumber` | No |

**Type:** integer · **Format:** uint16 · **Default:** 1

 |
| `udiSystCount` | No |

**Type:** integer · **Format:** uint32

 |
| `aDigitalIn` | No |

**Type:** array · **Minimum items:** 6 · **Maximum items:** 6

**Items:**

Fields
| Field | Required | Details |
| `IOState` | No |

**Fields:** [IOState_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-iostate-t)

 |

 |
| `aTimeBlock` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-datetime-t)

 |
| --- | --- | --- |

 |

#### [GET /OutputState](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-outputstate)

Returns the state of all outputs.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `uiVersionNumber` | No |

**Type:** integer · **Format:** uint16 · **Default:** 1

 |
| `udiSystCount` | No |

**Type:** integer · **Format:** uint32

 |
| `aDigitalOut` | No |

**Type:** array · **Minimum items:** 6 · **Maximum items:** 6

**Items:**

Fields
| Field | Required | Details |
| `IOState` | No |

**Fields:** [IOState_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-iostate-t)

 |
| `udiCounter` | No |

**Type:** integer · **Format:** uint32

 |

 |
| `aTimeBlock` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-datetime-t)

 |
| --- | --- | --- |

 |

#### [GET /PortState](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-portstate)

Returns the state of the ports. PortState is preferred over OutputState.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `uiVersionNumber` | No |

**Type:** integer · **Format:** uint16

 |
| `udiSystCount` | No |

**Type:** integer · **Format:** uint32

 |
| `aInternalPorts` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 6

**Items:**

**Fields:** [PortStateAndCounter_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-portstateandcounter-t)

 |
| `aExternalPorts` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 6

**Items:**

**Fields:** [PortStateAndCounter_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-portstateandcounter-t)

 |
| `aTimeBlock` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-datetime-t)

 |

 |

#### [POST /mResetOutputCounter](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-mresetoutputcounter)

Resets the counter for the outputs.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - SOPAS_ERR_NO_ERR
 * 1 - SOPAS_ERR_STATE_CHANGE_NOT_PERMITTED

 |

 |

#### [GET /PortConfiguration](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-portconfiguration)

Returns/sets the port configuration of all I/Os.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `PortConfiguration` | No |

**Type:** array · **Minimum items:** 6 · **Maximum items:** 6

**Items:**

Fields
| Field | Required | Details |
| `PortType` | No |

**Allowed values:**

```json
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
| `Name` | No |

**Type:** string · **Default:** IOx · **Maximum length:** 20

 |
| `InputSettings` | No |

Fields
| Field | Required | Details |
| `Logic` | No |

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-logic-t)

 |
| `Debounce` | No |

**Type:** integer · **Format:** uint16 · **Default:** 10 · **Minimum:** 5 · **Maximum:** 10000

 |
| `Sensitivity` | No |

**Allowed values:**

```json
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
| `Reserved1` | No |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Reserved2` | No |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |

 |
| `OutputSettings` | No |

Fields
| Field | Required | Details |
| `Logic` | No |

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-logic-t)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - RESTART_IMMEDATE
 * 1 - RESTART_TIME
 * 2 - RESTART_INPUT

 |
| `RestartTime` | No |

**Type:** integer · **Format:** uint32 · **Default:** 200 · **Minimum:** 20 · **Maximum:** 600000

 |
| `RestartInput` | No |

**Type:** integer · **Format:** uint16 · **Default:** 1 · **Minimum:** 1 · **Maximum:** 8

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

**Type:** integer · **Format:** uint8 · **Default:** 1

Mapping:
 * 0 - AND
 * 1 - OR
 * 2 - XOR

 |
| `Reserved3` | No |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Reserved4` | No |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Sources` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 20

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

**Type:** integer · **Format:** uint8 · **Default:** 0

 |
| `Reserved6` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |

 |

 |
| `Reserved7` | No |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| --- | --- | --- |
| `Reserved8` | No |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Reserved9` | No |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Reserved10` | No |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |

 |

 |

#### [POST /PortConfiguration](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-portconfiguration)

Returns/sets the port configuration of all I/Os.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

**Example:**

```json
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

Fields
| Field | Required | Details |
| `PortConfiguration` | No |

**Type:** array · **Minimum items:** 6 · **Maximum items:** 6

**Items:**

Fields
| Field | Required | Details |
| `PortType` | No |

**Allowed values:**

```json
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
| `Name` | No |

**Type:** string · **Default:** IOx · **Maximum length:** 20

 |
| `InputSettings` | No |

Fields
| Field | Required | Details |
| `Logic` | No |

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-logic-t)

 |
| `Debounce` | No |

**Type:** integer · **Format:** uint16 · **Default:** 10 · **Minimum:** 5 · **Maximum:** 10000

 |
| `Sensitivity` | No |

**Allowed values:**

```json
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
| `Reserved1` | No |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Reserved2` | No |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |

 |
| `OutputSettings` | No |

Fields
| Field | Required | Details |
| `Logic` | No |

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-logic-t)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - RESTART_IMMEDATE
 * 1 - RESTART_TIME
 * 2 - RESTART_INPUT

 |
| `RestartTime` | No |

**Type:** integer · **Format:** uint32 · **Default:** 200 · **Minimum:** 20 · **Maximum:** 600000

 |
| `RestartInput` | No |

**Type:** integer · **Format:** uint16 · **Default:** 1 · **Minimum:** 1 · **Maximum:** 8

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

**Type:** integer · **Format:** uint8 · **Default:** 1

Mapping:
 * 0 - AND
 * 1 - OR
 * 2 - XOR

 |
| `Reserved3` | No |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Reserved4` | No |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Sources` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 20

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

**Type:** integer · **Format:** uint8 · **Default:** 0

 |
| `Reserved6` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |

 |

 |
| `Reserved7` | No |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| --- | --- | --- |
| `Reserved8` | No |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Reserved9` | No |

**Type:** integer · **Format:** uint16 · **Default:** 0

 |
| `Reserved10` | No |

**Type:** integer · **Format:** uint16 · **Default:** 0

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [POST /SetOutput](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-setoutput)

Sets the output state for an individual output. Precondition: output source set to SOPAS command.

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

**Type:** integer · **Format:** uint8

 |
| `Value` | No |

**Type:** integer · **Format:** uint8

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Success` | No |

**Type:** boolean · **Default:** false

 |

 |

### 12 - Data output 

#### [GET /DataOutputRange](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-dataoutputrange)

Select the start and stop angle of the measurement data output for the currently active configuration. Once a valid configuration is set, the device will transmit valid distance values between the selected start and stop angle and for all other angles zero values. The amount of transmitted data will not be reduced by using this function.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `uiLength` | No |

**Type:** integer · **Format:** uint16 · **Default:** 1 · **Minimum:** 1 · **Maximum:** 1

 |
| `aRange` | No |

**Type:** array · **Minimum items:** 1 · **Maximum items:** 1

**Items:**

Fields
| Field | Required | Details |
| `udiAngleRes` | No |

**Type:** integer · **Format:** uint32 · **Default:** 1200 · **Minimum:** 200 · **Maximum:** 4800

 |
| `diStartAngle` | No |

**Type:** integer · **Format:** int32 · **Default:** -1800000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `diStopAngle` | No |

**Type:** integer · **Format:** int32 · **Default:** 1800000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |

 |

 |

#### [POST /DataOutputRange](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-dataoutputrange)

Select the start and stop angle of the measurement data output for the currently active configuration. Once a valid configuration is set, the device will transmit valid distance values between the selected start and stop angle and for all other angles zero values. The amount of transmitted data will not be reduced by using this function.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `DataOutputRange` | No |

Fields
| Field | Required | Details |
| `uiLength` | No |

**Type:** integer · **Format:** uint16 · **Default:** 1 · **Minimum:** 1 · **Maximum:** 1

 |
| `aRange` | No |

**Type:** array · **Minimum items:** 1 · **Maximum items:** 1

**Items:**

Fields
| Field | Required | Details |
| `udiAngleRes` | No |

**Type:** integer · **Format:** uint32 · **Default:** 1200 · **Minimum:** 200 · **Maximum:** 4800

 |
| `diStartAngle` | No |

**Type:** integer · **Format:** int32 · **Default:** -1800000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |
| `diStopAngle` | No |

**Type:** integer · **Format:** int32 · **Default:** 1800000 · **Minimum:** -1800000 · **Maximum:** 1800000

 |

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /ScanDataScaleFactor](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-scandatascalefactor)

Configure the scaling factor for distance measurements when LMDscandata or Compact is selected as the data output format.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ScanDataScaleFactor` | No |

**Type:** number · **Format:** float · **Default:** 1.0 · **Minimum:** 0.1 · **Maximum:** 16.0

 |

 |

#### [POST /ScanDataScaleFactor](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-scandatascalefactor)

Configure the scaling factor for distance measurements when LMDscandata or Compact is selected as the data output format.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ScanDataScaleFactor` | No |

**Type:** number · **Format:** float · **Default:** 1.0 · **Minimum:** 0.1 · **Maximum:** 16.0

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /ScanDataFormat](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-scandataformat)

Returns/sets the scan data format (e.g. Compact format) or disable scan data transmission.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ScanDataFormat` | No |

**Allowed values:**

```json
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

 |

#### [POST /ScanDataFormat](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-scandataformat)

Returns/sets the scan data format (e.g. Compact format) or disable scan data transmission.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ScanDataFormat` | No |

**Allowed values:**

```json
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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

### 13 - IMU data output 

#### [POST /EnableInertialMeasurementUnit](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-enableinertialmeasurementunit)

Enables/Disables IMU data streaming output on CoLa A/B protocol.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EnableInertialMeasurementUnit` | No |

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /InertialMeasurementUnit](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-inertialmeasurementunit)

Returns the current IMU data (e.g. Acceleration, Orientation, ... ). The data is given in the following coordinate system which is based on the DIN70000 system: The x-axis lies on the 90 degree beam of the 0 degree layer. The y-axis is perpendicular to the x-axis and lies in the 0 degree layer. The y-values are rising in the counterclockwise rotation direction (right-handed system). The z-axis is perpendicular to the x-y-plane and the scanner top points to rising z-values.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Acceleration` | No |

**Type:** array · **Minimum items:** 3 · **Maximum items:** 3

**Items:**

**Type:** number · **Format:** float · **Default:** 0.0

 |
| `AngularVelocity` | No |

**Type:** array · **Minimum items:** 3 · **Maximum items:** 3

**Items:**

**Type:** number · **Format:** float · **Default:** 0.0

 |
| `MagneticField` | No |

**Type:** array · **Minimum items:** 3 · **Maximum items:** 3

**Items:**

**Type:** number · **Format:** float · **Default:** 0.0

 |
| `Orientation` | No |

**Type:** array · **Minimum items:** 4 · **Maximum items:** 4

**Items:**

**Type:** number · **Format:** float · **Default:** 0.0

 |
| `TimeStamp` | No |

**Type:** integer · **Format:** uint32 · **Default:** 0

 |

 |

### 14 - Region of interest 

#### [GET /LFPradialDistanceRangeFilter](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-lfpradialdistancerangefilter)

Returns/sets the scanning range filter settings. Restriction of the distance measurements to a specified distance range. Measurement distances outside of the specified distance are assigned the distance and RSSI value 0.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `ulDistMin` | No |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** 0 · **Maximum:** 300000

 |
| `ulDistMax` | No |

**Type:** integer · **Format:** int32 · **Default:** 200000 · **Minimum:** 0 · **Maximum:** 300000

 |

 |

#### [POST /LFPradialDistanceRangeFilter](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-lfpradialdistancerangefilter)

Returns/sets the scanning range filter settings. Restriction of the distance measurements to a specified distance range. Measurement distances outside of the specified distance are assigned the distance and RSSI value 0.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

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

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** 0 · **Maximum:** 300000

 |
| `ulDistMax` | No |

**Type:** integer · **Format:** int32 · **Default:** 200000 · **Minimum:** 0 · **Maximum:** 300000

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

### 15 - Field evaluation 

#### [GET /FieldEvaluationResult](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-fieldevaluationresult)

Returns the state of all possible fields.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `FieldEvaluationResult` | No |

**Fields:** [FieldEvaluationResult_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-fieldevaluationresult-t)

 |

 |

#### [POST /ActivateEvaluationGroup](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-activateevaluationgroup)

Sets the activation condition for all existing evaluation groups, when activation is set to Telegram.

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

**Type:** integer · **Format:** uint16 · **Default:** 1 · **Minimum:** 1 · **Maximum:** 48

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

#### [POST /SetFieldEvaluationContour](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-setfieldevaluationcontour)

Sets the contour of an existing field.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

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

**Type:** integer · **Format:** uint16

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

**Type:** integer · **Format:** int32 · **Default:** 0

 |
| `y` | No |

**Type:** integer · **Format:** int32 · **Default:** 0

 |

 |
| `LowerZLimit` | No |

**Type:** integer · **Format:** int32 · **Minimum:** -100000 · **Maximum:** 100000

 |
| --- | --- | --- |
| `UpperZLimit` | No |

**Type:** integer · **Format:** int32 · **Minimum:** -100000 · **Maximum:** 100000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - SOPAS_ERR_NO_ERR
 * 1 - SOPAS_ERR_INVALID_EVALUATION_ID
 * 2 - SOPAS_ERR_INVALID_POLYGON
 * 3 - SOPAS_ERR_INVALID_ZLIM

 |

 |

#### [POST /GetFieldEvaluationContour](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-getfieldevaluationcontour)

Returns the contour of an existing field.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EvaluationId` | No |

**Type:** integer · **Format:** uint16

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint16

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

**Type:** integer · **Format:** int32 · **Default:** 0

 |
| `y` | No |

**Type:** integer · **Format:** int32 · **Default:** 0

 |

 |
| `LowerZLimit` | No |

**Type:** integer · **Format:** int32 · **Minimum:** -100000 · **Maximum:** 100000

 |
| --- | --- | --- |
| `UpperZLimit` | No |

**Type:** integer · **Format:** int32 · **Minimum:** -100000 · **Maximum:** 100000

 |

 |

 |

#### [GET /EvaluationGroupType](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-evaluationgrouptype)

Reads the evaluation group type whether it's a field evaluation or perpendicular distance.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EvaluationGroupType` | No |

**Type:** array · **Minimum items:** 48 · **Maximum items:** 48

**Items:**

**Allowed values:**

```json
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

 |

#### [POST /EvaluationGroupType](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-evaluationgrouptype)

Reads the evaluation group type whether it's a field evaluation or perpendicular distance.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EvaluationGroupType` | No |

**Type:** array · **Minimum items:** 48 · **Maximum items:** 48

**Items:**

**Allowed values:**

```json
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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /FieldEvaluationGroupState](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-fieldevaluationgroupstate)

Returns the activation condition for all existing evaluation groups (not configured, active, or inactive).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - NOT_CONFIGURED
 * 1 - ACTIVE
 * 2 - INACTIVE

 |

 |

#### [GET /FieldEvaluationApplicationState](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-fieldevaluationapplicationstate)

Get the field evaluation application state. It returns the information whether the field evaluation application is active, configuring or deactivated. 0 - Deactivated - no evaluation is set up. 1 - Activated - at least one active evaluation (group activation has no influence on that). 2 - Configuring - new calculation of the e.g. field geometries.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - DEACTIVATED
 * 1 - ACTIVE
 * 2 - CONFIGURING
 * 3 - ERROR

 |

 |

#### [POST /StartTeachIn](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-startteachin)

Starts the teach in process.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [POST /StopTeachIn](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-stopteachin)

Stops the teach in process.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /perpendicularDistanceResult](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-perpendiculardistanceresult)

Returns the perpendicular distance within a field.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `timestamp` | No |

**Type:** integer · **Format:** uint64

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

**Type:** integer · **Format:** uint16

 |
| `minimumDistance` | No |

**Type:** integer · **Format:** int32

 |
| `maximumDistance` | No |

**Type:** integer · **Format:** int32

 |
| `minimumDistancePosition` | No |

**Fields:** [Point3d_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-point3d-t)

 |
| `maximumDistancePosition` | No |

**Fields:** [Point3d_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-point3d-t)

 |

 |

 |

### 16 - Operating data 

#### [GET /LastParaDate](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-lastparadate)

Returns the last date (e.g. 12.11.2024) when a permanent parameter save was executed.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LastParaDate` | No |

**Type:** string · **Default:** DD.MM.YYYY · **Maximum length:** 10

 |

 |

#### [GET /LastParaTime](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-lastparatime)

Returns the last time (e.g. 13:24) when a permanent parameter save was executed.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LastParaTime` | No |

**Type:** string · **Default:** HH:MM · **Maximum length:** 5

 |

 |

#### [GET /PowerOnCnt](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-poweroncnt)

Returns the number of power on cycles.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `PowerOnCnt` | No |

**Type:** integer · **Format:** uint32 · **Default:** 0

 |

 |

#### [GET /DailyOpHours](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-dailyophours)

Returns the runtime duration since the last power on (non-persistent).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `DailyOpHours` | No |

**Type:** number · **Format:** float · **Default:** 0.0

 |

 |

#### [GET /OpHours](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-ophours)

Returns the total number of operating hours during the lifetime of the device. The resolution is a 1/10 hour.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `OpHours` | No |

**Type:** integer · **Format:** uint32 · **Default:** 0

 |

 |

#### [GET /CurrentTempDev](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-currenttempdev)

Returns the current device temperature.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `CurrentTempDev` | No |

**Type:** number · **Format:** float · **Default:** 20.0

 |

 |

### 17 - 3D scan recording 

#### [POST /ScanMergerEnabled](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-scanmergerenabled)

Enable/ disable the Scan Merger functionality.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ScanMergerEnabled` | No |

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [POST /ScanMergerSource](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-scanmergersource)

Select the source of the rotation that should be used to create the 3D point cloud.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ScanMergerSource` | No |

**Allowed values:**

```json
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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [POST /ScanMergeTrigger](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-scanmergetrigger)

Select a trigger for the Scan Merger functionality.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ScanMergeTrigger` | No |

**Allowed values:**

```json
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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /RotationOffset](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-rotationoffset)

Read/Write the current rotation offset of the scan merge in x, y and z direction in mm.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `x` | No |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `y` | No |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `z` | No |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |

 |

#### [POST /RotationOffset](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-rotationoffset)

Read/Write the current rotation offset of the scan merge in x, y and z direction in mm.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `RotationOffset` | No |

Fields
| Field | Required | Details |
| `x` | No |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `y` | No |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `z` | No |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [POST /EncoderTransformationType](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-encodertransformationtype)

Select the Encoder type that is used to create the scan merge when the Scan Merger source is set to Encoder.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EncoderTransformationType` | No |

**Allowed values:**

```json
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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [POST /EncoderRotation](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-encoderrotation)

Set the start orientation when the encoder transformation type is set to rotation.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EncoderRotation` | No |

Fields
| Field | Required | Details |
| `yaw` | No |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |
| `pitch` | No |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

 |
| `roll` | No |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -3600000 · **Maximum:** 3600000

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [POST /EncoderTranslation](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-encodertranslation)

Set the start orientation when the encoder transformation type is set to translation.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EncoderTranslation` | No |

Fields
| Field | Required | Details |
| `x` | No |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `y` | No |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `z` | No |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [POST /StartScanMerge](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-startscanmerge)

Start the recording of a scan merge when the Scan Merger functionality is enabled. The recording time is limited to 15 or 30 seconds, depending on the selected scan configuration.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [POST /StopScanMerge](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-stopscanmerge)

Stop the recording of a running scan merge.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

### 18 - Motor synchronization 

#### [POST /SyncMode](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-syncmode)

synchronisation mode e.g. no synchronisation, hardware synchronisation, CAN synchronisation or CLOCK synchronisation (LRS4000 only supports Clock-Sync and wire sync).

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `SyncMode` | No |

**Allowed values:**

```json
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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [POST /SyncPhase](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-syncphase)

synchronisation phase difference between master and slave.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `SyncPhase` | No |

**Type:** integer · **Format:** int16 · **Default:** 180 · **Minimum:** -180 · **Maximum:** 180

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /MotorSyncStatus](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-motorsyncstatus)

Check if PTP master and slave are synced.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `MotorSyncStatus` | No |

**Allowed values:**

```json
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

 |

### 19- Encoder 

#### [POST /EncSetting](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-encsetting)

Select the encoder type.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EncSetting` | No |

**Allowed values:**

```json
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

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [POST /EncResolution](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-encresolution)

Set the encoder resolution in mm/Inc.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EncResolution` | No |

**Type:** number · **Format:** float · **Default:** 10 · **Minimum:** 0.001 · **Maximum:** 2000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /ActualEncSpeed](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-actualencspeed)

Read encoder speed in m/s.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ActualEncSpeed` | No |

**Type:** number · **Format:** float

 |

 |

### 20-Diagnostic file 

#### [POST /DoDiagnosisDump](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-dodiagnosisdump)

Creates a diagnostic file (zip file) for further analysis.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Successfull` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /GetDiagnosisDumpInfo](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-getdiagnosisdumpinfo)

Returns additional meta-information about the diagnostic file.

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `DiagDumpExists` | No |

**Type:** boolean · **Default:** false

 |
| `DiagDumpTimestamp` | No |

**Type:** integer · **Format:** uint32

 |

 |

### 21 - Detection History 

#### [GET /EnableDetectionHistory](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-enabledetectionhistory)

Returns/sets the detection history.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EnableDetectionHistory` | No |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /EnableDetectionHistory](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-enabledetectionhistory)

Returns/sets the detection history.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [GET /EvaluationsToLog](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-evaluationstolog)

Returns/sets the evaluations which are logged (if they are in use).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

#### [POST /EvaluationsToLog](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-evaluationstolog)

Returns/sets the evaluations which are logged (if they are in use).

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

#### [POST /ResetDetectionHistory](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-post-resetdetectionhistory)

Resets the detection history logs.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |

### 22 - Cybersecurity 

#### [GET /httpsStatus](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-httpsstatus)

Returns the status of the HTTPS interface.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `enabled` | No |

**Type:** boolean · **Default:** false

 |
| `errorCode` | No |

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-httpserror-t)

 |

 |

#### [GET /certificateBundleInfo](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#rest-get-certificatebundleinfo)

Returns information about the uploaded certificate bundle.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-responseheader)

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

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-httpserror-t)

 |
| --- | --- | --- |

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

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-e-user-level-type)

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

Fields
| Field | Required | Details |
| --- | --- | --- |
| `error` | No |

**Type:** string · **Default:**   · **Maximum length:** 100

 |

#### DateTime_t 

Fields
| Field | Required | Details |
| --- | --- | --- |
| `uiYear` | No |

**Type:** integer · **Format:** uint16 · **Default:** 0 · **Minimum:** 0 · **Maximum:** 2105

 |
| `usiMonth` | No |

**Type:** integer · **Format:** uint8 · **Default:** 1 · **Minimum:** 0 · **Maximum:** 12

 |
| `usiDay` | No |

**Type:** integer · **Format:** uint8 · **Default:** 1 · **Minimum:** 0 · **Maximum:** 31

 |
| `usiHour` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0 · **Minimum:** 0 · **Maximum:** 23

 |
| `usiMinute` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0 · **Minimum:** 0 · **Maximum:** 59

 |
| `usiSec` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0 · **Minimum:** 0 · **Maximum:** 59

 |
| `udiUSec` | No |

**Type:** integer · **Format:** uint32 · **Default:** 0 · **Minimum:** 0 · **Maximum:** 999999

 |

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

**Type:** integer · **Format:** uint8 · **Default:** 2

Mapping:
 * 0 - IOS_LOW
 * 1 - IOS_HIGH
 * 2 - IOS_TRISTATE

 |

#### ContaminationData_t 

**Allowed values:**

```json
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

```json
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

```json
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

**Type:** integer · **Format:** uint8 · **Default:** 2

Mapping:
 * 0 - OUTPUT_NOT_ACTIVE
 * 1 - OUTPUT_ACTIVE
 * 2 - TRISTATE
 * 3 - INPUT_ACTIVE
 * 4 - INPUT_NOT_ACTIVE

 |
| `PortCounter` | No |

**Type:** integer · **Format:** uint32

 |

#### Point2d_t 

Fields
| Field | Required | Details |
| --- | --- | --- |
| `x` | No |

**Type:** integer · **Format:** int32 · **Default:** 0

 |
| `y` | No |

**Type:** integer · **Format:** int32 · **Default:** 0

 |

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - NOT_CONFIGURED
 * 1 - INACTIVE
 * 2 - FREE
 * 3 - DETECTING_INFRINGED
 * 4 - INFRINGED
 * 5 - DETECTING_FREE

 |
| `Positions` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Fields:** [Point2d_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-point2d-t)

 |

#### FieldEvaluationResult_t 

Fields
| Field | Required | Details |
| --- | --- | --- |
| `Version` | No |

**Type:** integer · **Format:** uint16 · **Default:** 1

 |
| `Timestamp` | No |

**Type:** integer · **Format:** uint64

 |
| `EvaluationResultList` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 48

**Items:**

**Fields:** [EvaluationResult_t](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/rest-api-openapi/#schema-evaluationresult-t)

 |

#### Point3d_t 

Fields
| Field | Required | Details |
| --- | --- | --- |
| `x` | No |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -500000 · **Maximum:** 500000

 |
| `y` | No |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -500000 · **Maximum:** 500000

 |
| `z` | No |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -500000 · **Maximum:** 500000

 |
