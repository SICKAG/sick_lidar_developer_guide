# picoScan100 REST API Reference (OpenAPI)

> Download the picoScan120 and picoScan150 OpenAPI descriptions and search model-specific REST endpoints, request parameters, and response schemas.

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/

# picoScan100 REST API | OpenAPI

<div class="tool-intro tool-intro--centered" markdown>

![OpenAPI](https://sickag.github.io/sick_lidar_developer_guide/assets/openapi-logo.png)

This page provides searchable REST references and downloadable OpenAPI
descriptions for picoScan120 and picoScan150. For REST concepts,
authentication, and request patterns, see
[REST API / OpenAPI](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/).

</div>

## OpenAPI Files

- [picoScan150 V2.3.3.0R - OpenAPI (YAML)](https://sickag.github.io/sick_lidar_developer_guide/assets/picoScan100/openapi/picoScan150_picoScan_2.3.3.0R_OpenApi.yaml)
- [picoScan120 V2.3.3.0R - OpenAPI (YAML)](https://sickag.github.io/sick_lidar_developer_guide/assets/picoScan100/openapi/picoScan120_picoScan120_2.3.3.0R_OpenApi.yaml)

Always match the file to your device model and actual firmware version.
Function availability can vary by variant and installed software package.
Use the reference for your model below; the two models do not share every
endpoint.

## picoScan150 Endpoint Reference

### 1 - General 

#### [POST /checkCredentials](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-checkcredentials)

Returns authentication success. For more details see https://github.com/SICKAG/sick_scan_rest_client.

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [PUT /update](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-put-update)

Transfers a firmware file (.spk.signed) from the file location to the device. The maximum possible file size is 100 MB.

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

#### [GET /parameterbackup](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-parameterbackup)

Reads/transfers the backup file (json) from/to the device.

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

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-e-user-level-type)

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

#### [PUT /parameterbackup](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-put-parameterbackup)

Reads/transfers the backup file (json) from/to the device.

**Request body**

**Media type: `multipart/form-data`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `datei` | No |

**Type:** string · **Format:** binary

Json-File

 |

**Responses**

**Status `200`**

#### [POST /SetPassword](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-setpassword)

Sets the password for the CoLa A/B interface only. In this example the password for user level: Service (4) is set to - test - (integer value of the password hash - test -). For more details see  https://github.com/SICKAG/sick_scan_rest_client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `data` | No |

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bSuccess` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /getChallenge](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-getchallenge)

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

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-e-user-level-type)

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [POST /changePassword](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-changepassword)

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

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-e-user-level-type)

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [POST /EnableUserLevel](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-enableuserlevel)

Activates / deactivates a specific user level for the REST interface.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `userLevel` | No |

**Type:** integer · **Format:** uint8

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - SUCCESS
 * 2 - NOT_ACCEPTED

 |

 |

#### [POST /WriteEeprom](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-writeeeprom)

Saves all parameters permanently.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Success` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /SoftReset](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-softreset)

Reboots the device. All non-saved parameters are lost.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [POST /RebootDevice](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-rebootdevice)

Reboots the device. All parameters are saved.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [POST /LoadFactoryDefaults](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-loadfactorydefaults)

Resets all parameters to default.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [POST /LoadApplicationDefaults](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-loadapplicationdefaults)

Resets only the user parametrization of the fields, evaluation cases, and parameters under the section "Application". Other parameters like interface settings, echo filter, etc. remain unchanged. This function requires the user level: Service.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [POST /EnableLegacyUserLevel](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-enablelegacyuserlevel)

Activates / deactivates a specific user level for the CoLa A/B interface.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `userLevel` | No |

**Type:** integer · **Format:** uint8 · **Minimum:** 0 · **Maximum:** 7

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `result` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [GET /laserType](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-lasertype)

Returns the type of the sending unit.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `laserType` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |

 |

#### [GET /sipmType](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-sipmtype)

Returns the type of the receiving unit.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `sipmType` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |

 |

#### [POST /RunFirmwareUpdate](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-runfirmwareupdate)

Starts the firmware update process.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /UpdateState](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-updatestate)

Returns the state of the update process.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - Initial
 * 1 - Started
 * 2 - Finished
 * 3 - Error

 |

 |

#### [GET /CreateParameterBackupResult](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-createparameterbackupresult)

Returns the current status of the parameter backup process.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Status` | No |

**Allowed values:**

```json
[
  0,
  1
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - Pending
 * 1 - Finished

 |
| `Result` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [GET /RestoreParameterBackupResult](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-restoreparameterbackupresult)

Returns the current status of the parameter restoration process.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Status` | No |

**Allowed values:**

```json
[
  0,
  1
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - Pending
 * 1 - Finished

 |
| `RestoreResult` | No |

**Fields:** [RestoreBackupResult](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-restorebackupresult)

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

#### [POST /CreateParameterBackup](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-createparameterbackup)

Creates a parameter backup file on the device.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Result` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /RestoreParameterBackup](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-restoreparameterbackup)

Restores the backup file on the device. The restored parameters will then be applied.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Passphrase` | No |

**Type:** string · **Default:**   · **Maximum length:** 256

 |
| `Filter` | No |

**Type:** integer · **Format:** uint32 · **Default:** 0

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Result` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [GET /LFTchecksum](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-lftchecksum)

Returns a checksum over all software parts and configurations.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `MD5SumOK` | No |

**Type:** boolean · **Default:** false

 |
| `MD5LinuxRoot` | No |

**Type:** string · **Default:**   · **Maximum length:** 32

 |
| `MD5App` | No |

**Type:** string · **Default:**   · **Maximum length:** 32

 |
| `MD5Calibration` | No |

**Type:** string · **Default:**   · **Maximum length:** 32

 |
| `MD5Parameters` | No |

**Type:** string · **Default:**   · **Maximum length:** 32

 |

 |

#### [POST /CreateSessionToken](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-createsessiontoken)

A short-lived session token to pass to a HTTP request header.

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `token` | No |

**Fields:** [SessionToken](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-sessiontoken)

 |
| `timeToLive` | No |

**Type:** integer · **Format:** uint16

 |

 |

### 2 - Status 

#### [GET /DeviceStatus](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-devicestatus)

Returns the device state (9 possible states).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `DeviceStatus` | No |

**Fields:** [DeviceStatus](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-devicestatus)

 |

 |

#### [GET /SCdevicestate](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-scdevicestate)

Returns the device state (busy, ready, or error).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

### 3 - Device Information 

#### [GET /DeviceIdent](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-deviceident)

Returns the device name and the firmware version.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Name` | No |

**Type:** string · **Default:** picoScan · **Maximum length:** 8

 |
| `Version` | No |

**Type:** string · **Default:** 2.3.3.0R · **Maximum length:** 8

 |

 |

#### [GET /LocationName](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-locationname)

Returns/sets the device name.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LocationName` | No |

**Type:** string · **Default:** not defined · **Maximum length:** 32

 |

 |

#### [POST /LocationName](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-locationname)

Returns/sets the device name.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /SerialNumber](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-serialnumber)

Returns the serial number.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `SerialNumber` | No |

**Type:** string · **Default:** 123456789 · **Maximum length:** 9

 |

 |

#### [GET /FirmwareVersion](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-firmwareversion)

Returns the current firmware version.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `FirmwareVersion` | No |

**Type:** string · **Default:** XXXXXXXXXX · **Maximum length:** 40

 |

 |

#### [GET /OrderNumber](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-ordernumber)

Returns the order number (SICK part number).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `OrderNumber` | No |

**Type:** string · **Default:** 1234567 · **Maximum length:** 32

 |

 |

#### [GET /DeviceType](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-devicetype)

Returns the device type.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `DeviceType` | No |

**Type:** string · **Default:** picoScan1xx · **Maximum length:** 18

 |

 |

#### [POST /FindMe](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-findme)

Sets the device LEDs into blinking mode for better identification.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `data` | No |

Fields
| Field | Required | Details |
| `uiDuration` | No |

**Type:** integer · **Format:** uint16 · **Minimum:** 1

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

### 4 - Basic Settings 

#### [GET /LEDState](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-ledstate)

Returns the LED status.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

**Fields:** [LedStateType](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-ledstatetype)

 |

 |

#### [GET /LEDEnable](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-ledenable)

Returns/sets the LED mode (on/off).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LEDEnable` | No |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /LEDEnable](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-ledenable)

Returns/sets the LED mode (on/off).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [POST /mStartMeasure](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-mstartmeasure)

Starts motor and measurement.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [POST /mStandby](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-mstandby)

Enables/disables the Laser (on/off).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [POST /mStopMeasure](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-mstopmeasure)

Stops motor and measurement.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [GET /AutoStartMeasure](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-autostartmeasure)

Returns/sets the mode for automatic start of measurement after boot-up.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `AutoStartMeasure` | No |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /AutoStartMeasure](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-autostartmeasure)

Returns/sets the mode for automatic start of measurement after boot-up.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /PerformanceProfileNumber](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-performanceprofilenumber)

Returns/sets the scan configuration (scanning frequency and angular resolution).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `PerformanceProfileNumber` | No |

**Fields:** [PerformanceProfiles_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-performanceprofiles-t)

 |

 |

#### [POST /PerformanceProfileNumber](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-performanceprofilenumber)

Returns/sets the scan configuration (scanning frequency and angular resolution).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `PerformanceProfileNumber` | No |

**Fields:** [PerformanceProfiles_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-performanceprofiles-t)

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /ScanConfig](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-scanconfig)

Returns the configuration of angular resolution, scanning frequency, start and stop angle.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `udiScanFreq` | No |

**Type:** integer · **Format:** uint32 · **Default:** 4000 · **Minimum:** 1500 · **Maximum:** 5000

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

**Type:** integer · **Format:** uint32 · **Default:** 2500 · **Minimum:** 500 · **Maximum:** 10000

 |
| `diStartAngle` | No |

**Type:** integer · **Format:** int32 · **Default:** -1380000 · **Minimum:** -1380000 · **Maximum:** 1380000

 |
| `diStopAngle` | No |

**Type:** integer · **Format:** int32 · **Default:** 1380000 · **Minimum:** -1380000 · **Maximum:** 1380000

 |

 |

 |

 |

#### [GET /EnableLongRangeMode](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-enablelongrangemode)

Enables/disables the maximum scanning range depending on the scan configuration.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EnableLongRangeMode` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /EnableLongRangeMode](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-enablelongrangemode)

Enables/disables the maximum scanning range depending on the scan configuration.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EnableLongRangeMode` | No |

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /SensitivityMode](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-sensitivitymode)

Returns/sets the sensitivity of the receiver unit.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 1

Mapping:
 * 0 - MAXIMUM_ROBUSTNESS
 * 1 - STANDARD
 * 2 - MAXIMUM_DETECTIVITY

 |

 |

#### [POST /SensitivityMode](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-sensitivitymode)

Returns/sets the sensitivity of the receiver unit.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 1

Mapping:
 * 0 - MAXIMUM_ROBUSTNESS
 * 1 - STANDARD
 * 2 - MAXIMUM_DETECTIVITY

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

### 5 - Date and System Time 

#### [GET /TSCRole](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-tscrole)

Returns/sets the time synchronization role (none, NTP or PTP).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - TX_NONE
 * 1 - TX_CLIENT
 * 3 - TX_PTP_SLAVE

 |

 |

#### [POST /TSCRole](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-tscrole)

Returns/sets the time synchronization role (none, NTP or PTP).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /TSCTCSrvAddr](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-tsctcsrvaddr)

Returns/sets the IP address of the time server.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [POST /TSCTCSrvAddr](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-tsctcsrvaddr)

Returns/sets the IP address of the time server.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /TSCTCtimezone](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-tsctctimezone)

Returns/sets the time zone of the client.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [POST /TSCTCtimezone](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-tsctctimezone)

Returns/sets the time zone of the client.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /TSCTCupdatetime](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-tsctcupdatetime)

Returns/sets the update time of the client.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `TSCTCupdatetime` | No |

**Type:** integer · **Format:** uint32 · **Default:** 600 · **Minimum:** 1 · **Maximum:** 3600

 |

 |

#### [POST /TSCTCupdatetime](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-tsctcupdatetime)

Returns/sets the update time of the client.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /LSPdatetime](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-lspdatetime)

Returns the current time of the device (years, months, days, hours, minutes, seconds, microseconds).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LSPdatetime` | No |

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-datetime-t)

 |

 |

#### [POST /LSPsetdatetime](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-lspsetdatetime)

Sets the time of the device (years, months, days, hours, minutes, seconds, microseconds).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `DateTime` | No |

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-datetime-t)

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [GET /MCSenseLevel](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-mcsenselevel)

Returns/sets the fog filter settings.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `MCSenseLevel` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0 · **Minimum:** 0 · **Maximum:** 1

 |

 |

#### [POST /MCSenseLevel](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-mcsenselevel)

Returns/sets the fog filter settings.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `MCSenseLevel` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0 · **Minimum:** 0 · **Maximum:** 1

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /LFPparticle](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-lfpparticle)

Returns/sets the particle filter settings. Filters out disturbances in the measurement data caused by particles such as dust, snowflakes, or similar. Configure the minimal threshold of the required distance step (mm) between the echo to be filtered and the echoes of surrounding beam angles.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `uiThreshold` | No |

**Type:** integer · **Format:** uint16 · **Default:** 500 · **Minimum:** 20 · **Maximum:** 5000

 |

 |

#### [POST /LFPparticle](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-lfpparticle)

Returns/sets the particle filter settings. Filters out disturbances in the measurement data caused by particles such as dust, snowflakes, or similar. Configure the minimal threshold of the required distance step (mm) between the echo to be filtered and the echoes of surrounding beam angles.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Type:** integer · **Format:** uint16 · **Default:** 500 · **Minimum:** 20 · **Maximum:** 5000

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /LFPmovingAveragingFilter](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-lfpmovingaveragingfilter)

Returns/sets the mean filter settings. This filter smooths the distance value by calculating the arithmetic mean from the configured number of scans (2..4 scans). Points with zero distance are treated as missing values and are not taken into account for averaging. If all distances considered for averaging have the value 0, the result will be 0 as well.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `uiAveragingDepth` | No |

**Type:** integer · **Format:** uint16 · **Default:** 3 · **Minimum:** 2 · **Maximum:** 4

 |

 |

#### [POST /LFPmovingAveragingFilter](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-lfpmovingaveragingfilter)

Returns/sets the mean filter settings. This filter smooths the distance value by calculating the arithmetic mean from the configured number of scans (2..4 scans). Points with zero distance are treated as missing values and are not taken into account for averaging. If all distances considered for averaging have the value 0, the result will be 0 as well.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Type:** integer · **Format:** uint16 · **Default:** 3 · **Minimum:** 2 · **Maximum:** 4

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /FREchoFilter](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-frechofilter)

Returns/sets the multi-echo filter settings. Depending on the environment the sensor receives several measurement points on the same angular step (multi-echo). The filter can filter out the first echo, the last echo or all echoes.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 1

Mapping:
 * 0 - FIRST_ECHO
 * 1 - ALL_ECHOS
 * 2 - LAST_ECHO

 |

 |

#### [POST /FREchoFilter](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-frechofilter)

Returns/sets the multi-echo filter settings. Depending on the environment the sensor receives several measurement points on the same angular step (multi-echo). The filter can filter out the first echo, the last echo or all echoes.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 1

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

### 7 - Contamination Indication 

#### [GET /ContaminationConfig](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-contaminationconfig)

Returns/sets the contamination indication settings such as sensitivity, response time, threshold for warning, and active sectors.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

**Type:** integer · **Format:** uint16 · **Default:** 3 · **Minimum:** 3 · **Maximum:** 60

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

#### [POST /ContaminationConfig](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-contaminationconfig)

Returns/sets the contamination indication settings such as sensitivity, response time, threshold for warning, and active sectors.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Type:** integer · **Format:** uint16 · **Default:** 3 · **Minimum:** 3 · **Maximum:** 60

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /ContaminationActiveSectors](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-contaminationactivesectors)

Returns the active contamination sectors. Starts by the first sector at -138 degree and continues counterclockwise.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [GET /ContaminationData](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-contaminationdata)

Returns the contamination state of all contamination sectors.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - CM_DATA_NONE
 * 1 - CM_DATA_CLEAN
 * 2 - CM_DATA_WARN
 * 3 - CM_DATA_ERROR

 |

 |

#### [GET /ContaminationResult](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-contaminationresult)

Returns the contamination indication state of the device.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [GET /treatBlockedSectorsAsErrorSectors](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-treatblockedsectorsaserrorsectors)

Returns/sets the state if blocked sectors are treated as blocked or contaminated sectors.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `treatBlockedSectorsAsErrorSectors` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /treatBlockedSectorsAsErrorSectors](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-treatblockedsectorsaserrorsectors)

Returns/sets the state if blocked sectors are treated as blocked or contaminated sectors.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `treatBlockedSectorsAsErrorSectors` | No |

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

### 8 - Ethernet 

#### [GET /EtherIPAddress](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-etheripaddress)

Returns/sets the used static IP address.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [POST /EtherIPAddress](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-etheripaddress)

Returns/sets the used static IP address.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /EtherIPGateAddress](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-etheripgateaddress)

Returns/sets the default gateway address.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [POST /EtherIPGateAddress](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-etheripgateaddress)

Returns/sets the default gateway address.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /EtherIPMask](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-etheripmask)

Returns/sets the subnet mask.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [POST /EtherIPMask](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-etheripmask)

Returns/sets the subnet mask.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /EtherAddressingMode](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-etheraddressingmode)

Returns/sets the mode for the IP address assignment (static or DHCP).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [POST /EtherAddressingMode](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-etheraddressingmode)

Returns/sets the mode for the IP address assignment (static or DHCP).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /EtherDHCPFallback](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-etherdhcpfallback)

Returns/sets the mode for the DHCP fallback (retry or static).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - TX_USE_STATIC_IP
 * 1 - TX_RETRY_DHCP

 |

 |

#### [POST /EtherDHCPFallback](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-etherdhcpfallback)

Returns/sets the mode for the DHCP fallback (retry or static).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [POST /EthernetUpdate](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-ethernetupdate)

Applies the ethernet settings. This needs to be executed to actually change the ethernet settings.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /EtherIPAddressDHCP](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-etheripaddressdhcp)

Returns the assigned DHCP IP address.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [GET /EtherIPGateAddressDHCP](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-etheripgateaddressdhcp)

Returns the assigned DHCP default gateway address.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [GET /EtherIPMaskDHCP](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-etheripmaskdhcp)

Returns the assigned DHCP subnet mask.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [GET /EtherMACAddress](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-ethermacaddress)

Returns the MAC address of the ethernet interface.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

### 9 - Inputs and Outputs 

#### [GET /InputState](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-inputstate)

Returns the state of all inputs.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

**Type:** array · **Minimum items:** 8 · **Maximum items:** 8

**Items:**

Fields
| Field | Required | Details |
| `IOState` | No |

**Fields:** [IOState_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-iostate-t)

 |

 |
| `aTimeBlock` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-datetime-t)

 |
| --- | --- | --- |

 |

#### [GET /OutputState](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-outputstate)

Returns the state of all outputs.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

**Type:** array · **Minimum items:** 8 · **Maximum items:** 8

**Items:**

Fields
| Field | Required | Details |
| `IOState` | No |

**Fields:** [IOState_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-iostate-t)

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

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-datetime-t)

 |
| --- | --- | --- |

 |

#### [GET /PortState](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-portstate)

Returns the state of the ports. "PortState" is preferred over "OutputState".

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

**Type:** array · **Minimum items:** 0 · **Maximum items:** 8

**Items:**

**Fields:** [PortStateAndCounter_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-portstateandcounter-t)

 |
| `aExternalPorts` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 8

**Items:**

**Fields:** [PortStateAndCounter_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-portstateandcounter-t)

 |
| `aTimeBlock` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-datetime-t)

 |

 |

#### [POST /mResetOutputCounter](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-mresetoutputcounter)

Resets the counter for the outputs.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [GET /enableCloningPlug](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-enablecloningplug)

Enables/disables the cloning functionality of the system plug.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `enableCloningPlug` | No |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /enableCloningPlug](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-enablecloningplug)

Enables/disables the cloning functionality of the system plug.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `enableCloningPlug` | No |

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /PortConfiguration](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-portconfiguration)

Returns/sets the port configuration of all I/Os.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-logic-t)

 |
| `Debounce` | No |

**Type:** integer · **Format:** uint16 · **Default:** 10 · **Minimum:** 1 · **Maximum:** 1000

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

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-logic-t)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

 |
| `Reserved6` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Type:** integer · **Format:** uint16 · **Default:** 0

Mapping:
 * 0 - NONE
 * 1 - ENCODER_A
 * 2 - ENCODER_B
 * 3 - AUX1
 * 4 - AUX2

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

#### [POST /PortConfiguration](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-portconfiguration)

Returns/sets the port configuration of all I/Os.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-logic-t)

 |
| `Debounce` | No |

**Type:** integer · **Format:** uint16 · **Default:** 10 · **Minimum:** 1 · **Maximum:** 1000

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

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-logic-t)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

 |
| `Reserved6` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Type:** integer · **Format:** uint16 · **Default:** 0

Mapping:
 * 0 - NONE
 * 1 - ENCODER_A
 * 2 - ENCODER_B
 * 3 - AUX1
 * 4 - AUX2

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [POST /SetOutput](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-setoutput)

Sets the output state for an individual output. Precondition is to set the output source to "SOPAS command".

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Success` | No |

**Type:** boolean · **Default:** false

 |

 |

### 10 - Measurement Data Output 

#### [GET /EtherHostIPPort](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-etherhostipport)

Returns/sets the port settings for the LMDscandata output (CoLa Binary TCP).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherHostIPPort` | No |

**Type:** integer · **Format:** uint16 · **Default:** 2112 · **Minimum:** 1024

 |

 |

#### [POST /EtherHostIPPort](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-etherhostipport)

Returns/sets the port settings for the LMDscandata output (CoLa Binary TCP).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherHostIPPort` | No |

**Type:** integer · **Format:** uint16 · **Default:** 2112 · **Minimum:** 1024

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /EtherAuxIPPort](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-etherauxipport)

Returns/sets the port settings for the LMDscandata output 2 (CoLa ASCII TCP).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherAuxIPPort` | No |

**Type:** integer · **Format:** uint16 · **Default:** 2111 · **Minimum:** 1024

 |

 |

#### [POST /EtherAuxIPPort](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-etherauxipport)

Returns/sets the port settings for the LMDscandata output 2 (CoLa ASCII TCP).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherAuxIPPort` | No |

**Type:** integer · **Format:** uint16 · **Default:** 2111 · **Minimum:** 1024

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /EtherSessionTimeout](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-ethersessiontimeout)

Returns/sets the session timeout for the LMDscandata output. Be careful with low values as they might cause unexpected disconnections.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherSessionTimeout` | No |

**Type:** integer · **Format:** uint32 · **Default:** 15000

 |

 |

#### [POST /EtherSessionTimeout](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-ethersessiontimeout)

Returns/sets the session timeout for the LMDscandata output. Be careful with low values as they might cause unexpected disconnections.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherSessionTimeout` | No |

**Type:** integer · **Format:** uint32 · **Default:** 15000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /ScanDataEthSettings](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-scandataethsettings)

Returns/sets the destination IP address settings for measurement data streaming (UDP).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 1

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

**Type:** integer · **Format:** uint8

 |
| `Port` | No |

**Type:** integer · **Format:** uint16 · **Default:** 2115

 |

 |

#### [POST /ScanDataEthSettings](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-scandataethsettings)

Returns/sets the destination IP address settings for measurement data streaming (UDP).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 1

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

**Type:** integer · **Format:** uint8

 |
| `Port` | No |

**Type:** integer · **Format:** uint16 · **Default:** 2115

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /ScanDataEnable](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-scandataenable)

Enables/disables the measurement data streaming. The measurement data itself is sent via a UDP-based SICK-specific format. A Python example can be found at https://github.com/SICKAG/ScanSegmentAPI.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ScanDataEnable` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /ScanDataEnable](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-scandataenable)

Enables/disables the measurement data streaming. The measurement data itself is sent via a UDP-based SICK-specific format. A Python example can be found at https://github.com/SICKAG/ScanSegmentAPI.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /ScanDataFormat](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-scandataformat)

Returns/sets the scan data format (e.g. Compact format).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 2

Mapping:
 * 1 - MSGPACK
 * 2 - Compact
 * 3 - LMDscandata
 * 4 - NativeROS2

 |

 |

#### [POST /ScanDataFormat](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-scandataformat)

Returns/sets the scan data format (e.g. Compact format).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 2

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /rosFrameId](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-rosframeid)

Returns/sets the frame ID of the published topics.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `rosFrameId` | No |

**Type:** string · **Default:** picoScan_ · **Maximum length:** 64

 |

 |

#### [POST /rosFrameId](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-rosframeid)

Returns/sets the frame ID of the published topics.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `rosFrameId` | No |

**Type:** string · **Default:** picoScan_ · **Maximum length:** 64

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /rosParentFrameId](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-rosparentframeid)

Returns/sets the parent frame ID of the published topics.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `rosParentFrameId` | No |

**Type:** string · **Default:** world · **Maximum length:** 64

 |

 |

#### [POST /rosParentFrameId](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-rosparentframeid)

Returns/sets the parent frame ID of the published topics.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `rosParentFrameId` | No |

**Type:** string · **Default:** world · **Maximum length:** 64

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /rosNamespace](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-rosnamespace)

Returns/sets the namespace of the published topics.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `rosNamespace` | No |

**Type:** string · **Default:**   · **Maximum length:** 64

 |

 |

#### [POST /rosNamespace](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-rosnamespace)

Returns/sets the namespace of the published topics.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `rosNamespace` | No |

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /ScanDataConfig](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-scandataconfig)

Returns/sets the configuration of LMDscandata such as the content of the scan data (e.g. whether to include the RSSI values).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `reserved` | No |

**Type:** integer · **Format:** uint16

 |
| `RemDataConfig` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** true

 |
| `reserved1` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |
| `reserved2` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |

 |
| `EnableEncoderBlock` | No |

**Type:** boolean · **Default:** false

 |
| --- | --- | --- |
| `reserved1` | No |

**Type:** boolean · **Default:** false

 |
| `bEnableDeviceName` | No |

**Type:** boolean · **Default:** false

 |
| `reserved2` | No |

**Type:** boolean · **Default:** false

 |
| `bEnableTimeBlock` | No |

**Type:** boolean · **Default:** false

 |
| `reserved3` | No |

**Type:** integer · **Format:** uint16 · **Default:** 1

 |

 |

#### [POST /ScanDataConfig](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-scandataconfig)

Returns/sets the configuration of LMDscandata such as the content of the scan data (e.g. whether to include the RSSI values).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ScanDataConfig` | No |

Fields
| Field | Required | Details |
| `reserved` | No |

**Type:** integer · **Format:** uint16

 |
| `RemDataConfig` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** true

 |
| `reserved1` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |
| `reserved2` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |

 |
| `EnableEncoderBlock` | No |

**Type:** boolean · **Default:** false

 |
| --- | --- | --- |
| `reserved1` | No |

**Type:** boolean · **Default:** false

 |
| `bEnableDeviceName` | No |

**Type:** boolean · **Default:** false

 |
| `reserved2` | No |

**Type:** boolean · **Default:** false

 |
| `bEnableTimeBlock` | No |

**Type:** boolean · **Default:** false

 |
| `reserved3` | No |

**Type:** integer · **Format:** uint16 · **Default:** 1

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /rosDomainId](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-rosdomainid)

Returns/sets the ROS domain ID used for the ROS 2 communication.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `rosDomainId` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0 · **Maximum:** 232

 |

 |

#### [POST /rosDomainId](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-rosdomainid)

Returns/sets the ROS domain ID used for the ROS 2 communication.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `rosDomainId` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0 · **Maximum:** 232

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /compactTelegramType1Content](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-compacttelegramtype1content)

Returns/sets the content of the Compact telegram type 1 (e.g. whether to include the RSSI values).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `includeRssi` | No |

**Type:** boolean · **Default:** true

 |
| `includeProperties` | No |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /compactTelegramType1Content](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-compacttelegramtype1content)

Returns/sets the content of the Compact telegram type 1 (e.g. whether to include the RSSI values).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `compactTelegramType1Content` | No |

Fields
| Field | Required | Details |
| `includeRssi` | No |

**Type:** boolean · **Default:** true

 |
| `includeProperties` | No |

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /SensorPosition](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-sensorposition)

Returns/sets the mounting position in 1/10000 deg. This only affects the PointCloud2 format output by native ROS2.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [POST /SensorPosition](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-sensorposition)

Returns/sets the mounting position in 1/10000 deg. This only affects the PointCloud2 format output by native ROS2.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `SensorPosition` | No |

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

### 11 - IMU Data Output 

#### [GET /ImuDataEthSettings](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-imudataethsettings)

Returns/sets the destination IP address settings for IMU data streaming (UDP).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 1

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

**Type:** integer · **Format:** uint8

 |
| `Port` | No |

**Type:** integer · **Format:** uint16 · **Default:** 7503

 |

 |

#### [POST /ImuDataEthSettings](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-imudataethsettings)

Returns/sets the destination IP address settings for IMU data streaming (UDP).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 1

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

**Type:** integer · **Format:** uint8

 |
| `Port` | No |

**Type:** integer · **Format:** uint16 · **Default:** 7503

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /ImuDataEnable](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-imudataenable)

Enables/Disables IMU data streaming.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ImuDataEnable` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /ImuDataEnable](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-imudataenable)

Enables/Disables IMU data streaming.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /InertialMeasurementUnit](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-inertialmeasurementunit)

Returns the current IMU data (e.g. Acceleration, Orientation, ... ). The data is given in the following coordinate system which is based on the DIN70000 system. The x-axis lies on the 90-degree-beam of the 0-degree-layer. The y-axis is perpendicular to the x-axis and lies in the 0-degree-layer. The y-values are rising in the counterclockwise rotation direction (right-handed system). The z-axis is perpendicular to the x-y-plane and the scanner top points to rising z-values.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

**Type:** number · **Format:** float · **Default:** 0.0

 |
| `AngularVelocity` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 3

**Items:**

**Type:** number · **Format:** float · **Default:** 0.0

 |
| `Orientation` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 4

**Items:**

**Type:** number · **Format:** float · **Default:** 0.0

 |
| `TimeStamp` | No |

**Type:** integer · **Format:** uint64

 |

 |

### 12 - Encoder Data Output 

#### [GET /EncoderDataEthSettings](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-encoderdataethsettings)

Returns/sets the destination IP address settings for encoder data streaming (UDP).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 1

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

**Type:** integer · **Format:** uint8

 |
| `Port` | No |

**Type:** integer · **Format:** uint16 · **Default:** 7504

 |

 |

#### [POST /EncoderDataEthSettings](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-encoderdataethsettings)

Returns/sets the destination IP address settings for encoder data streaming (UDP).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EncoderDataEthSettings` | No |

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

**Type:** integer · **Format:** uint8 · **Default:** 1

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

**Type:** integer · **Format:** uint8

 |
| `Port` | No |

**Type:** integer · **Format:** uint16 · **Default:** 7504

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /EncoderDataEnable](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-encoderdataenable)

Enables/disables the encoder data streaming. The encoder data itself is sent via a UDP-based SICK-specific format.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EncoderDataEnable` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /EncoderDataEnable](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-encoderdataenable)

Enables/disables the encoder data streaming. The encoder data itself is sent via a UDP-based SICK-specific format.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EncoderDataEnable` | No |

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /EncSetting](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-encsetting)

Returns/sets the encoder mode (e.g. phase mode).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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
  3,
  4
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - TX_OFF
 * 1 - TX_INCREMENT1
 * 2 - TX_DIR_PHASE12
 * 3 - TX_DIR_LEVEL12
 * 4 - TX_FIX_VELOCITY

 |

 |

#### [POST /EncSetting](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-encsetting)

Returns/sets the encoder mode (e.g. phase mode).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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
  3,
  4
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - TX_OFF
 * 1 - TX_INCREMENT1
 * 2 - TX_DIR_PHASE12
 * 3 - TX_DIR_LEVEL12
 * 4 - TX_FIX_VELOCITY

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /ActualEncPosition1Enable](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-actualencposition1enable)

Enables/disables the use of the 1st reference signal (port 3).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ActualEncPosition1Enable` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /ActualEncPosition1Enable](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-actualencposition1enable)

Enables/disables the use of the 1st reference signal (port 3).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ActualEncPosition1Enable` | No |

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /ActualEncPosition2Enable](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-actualencposition2enable)

Enables/disables the use of the 2nd reference signal (port 4).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ActualEncPosition2Enable` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /ActualEncPosition2Enable](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-actualencposition2enable)

Enables/disables the use of the 2nd reference signal (port 4).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ActualEncPosition2Enable` | No |

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /EncResolution](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-encresolution)

Enables/disables the use of the 2nd reference signal (Port4).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EncResolution` | No |

**Type:** number · **Format:** float · **Default:** 1.0 · **Minimum:** 0.001 · **Maximum:** 2000.0

 |

 |

#### [POST /EncResolution](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-encresolution)

Enables/disables the use of the 2nd reference signal (Port4).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EncResolution` | No |

**Type:** number · **Format:** float · **Default:** 1.0 · **Minimum:** 0.001 · **Maximum:** 2000.0

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [POST /mResetEncoderIncrement](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-mresetencoderincrement)

Resets the encoder tick value.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

### 13 - Data Reduction 

#### [GET /LFPangleRangeFilter](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-lfpanglerangefilter)

Returns/sets the angle range filter settings. The filter restricts the output scan to a specified angle range. Filtered measurement values are set to 0. If the content of a complete data segment is set to 0, this segment is not output anymore.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `fThetaStart` | No |

**Type:** integer · **Format:** int32 · **Default:** -900000 · **Minimum:** -1380000 · **Maximum:** 1380000

 |
| `fThetaStop` | No |

**Type:** integer · **Format:** int32 · **Default:** 900000 · **Minimum:** -1380000 · **Maximum:** 1380000

 |
| `fPhiStart` | No |

**Type:** integer · **Format:** int32 · **Default:** -900000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `fPhiStop` | No |

**Type:** integer · **Format:** int32 · **Default:** 900000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `uiBeamIncrement` | No |

**Type:** integer · **Format:** uint16 · **Default:** 1 · **Minimum:** 1 · **Maximum:** 20

 |

 |

#### [POST /LFPangleRangeFilter](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-lfpanglerangefilter)

Returns/sets the angle range filter settings. The filter restricts the output scan to a specified angle range. Filtered measurement values are set to 0. If the content of a complete data segment is set to 0, this segment is not output anymore.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Type:** integer · **Format:** int32 · **Default:** -900000 · **Minimum:** -1380000 · **Maximum:** 1380000

 |
| `fThetaStop` | No |

**Type:** integer · **Format:** int32 · **Default:** 900000 · **Minimum:** -1380000 · **Maximum:** 1380000

 |
| `fPhiStart` | No |

**Type:** integer · **Format:** int32 · **Default:** -900000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `fPhiStop` | No |

**Type:** integer · **Format:** int32 · **Default:** 900000 · **Minimum:** -900000 · **Maximum:** 900000

 |
| `uiBeamIncrement` | No |

**Type:** integer · **Format:** uint16 · **Default:** 1 · **Minimum:** 1 · **Maximum:** 20

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /LFPintervalFilter](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-lfpintervalfilter)

Returns/sets the interval filter settings. The filter reduces the scan output rate by a given factor.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `uiReductionFactor` | No |

**Type:** integer · **Format:** int32 · **Default:** 2 · **Minimum:** 2 · **Maximum:** 50

 |

 |

#### [POST /LFPintervalFilter](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-lfpintervalfilter)

Returns/sets the interval filter settings. The filter reduces the scan output rate by a given factor.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Type:** integer · **Format:** int32 · **Default:** 2 · **Minimum:** 2 · **Maximum:** 50

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

### 14 - Range Filter 

#### [GET /LFPradialDistanceRangeFilter](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-lfpradialdistancerangefilter)

Returns/sets the scanning range filter settings. Restriction of the distance measurements to a specified distance range. Measurement distances outside of the specified range are assigned the distance and RSSI value 0.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `ulDistMin` | No |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** 0 · **Maximum:** 200000

 |
| `ulDistMax` | No |

**Type:** integer · **Format:** int32 · **Default:** 200000 · **Minimum:** 0 · **Maximum:** 200000

 |

 |

#### [POST /LFPradialDistanceRangeFilter](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-lfpradialdistancerangefilter)

Returns/sets the scanning range filter settings. Restriction of the distance measurements to a specified distance range. Measurement distances outside of the specified range are assigned the distance and RSSI value 0.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** 0 · **Maximum:** 200000

 |
| `ulDistMax` | No |

**Type:** integer · **Format:** int32 · **Default:** 200000 · **Minimum:** 0 · **Maximum:** 200000

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /LFPcubicareafilter](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-lfpcubicareafilter)

Returns/sets the cuboid area filter settings. The cuboid area filter limits the measurement data to a box defined by its extension in the x- and y-axis.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `lXMin` | No |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lXMax` | No |

**Type:** integer · **Format:** int32 · **Default:** 5000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lYMin` | No |

**Type:** integer · **Format:** int32 · **Default:** -5000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lYMax` | No |

**Type:** integer · **Format:** int32 · **Default:** 5000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lZMin` | No |

**Type:** integer · **Format:** int32 · **Default:** -5 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lZMax` | No |

**Type:** integer · **Format:** int32 · **Default:** 5 · **Minimum:** -200000 · **Maximum:** 200000

 |

 |

#### [POST /LFPcubicareafilter](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-lfpcubicareafilter)

Returns/sets the cuboid area filter settings. The cuboid area filter limits the measurement data to a box defined by its extension in the x- and y-axis.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lXMax` | No |

**Type:** integer · **Format:** int32 · **Default:** 5000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lYMin` | No |

**Type:** integer · **Format:** int32 · **Default:** -5000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lYMax` | No |

**Type:** integer · **Format:** int32 · **Default:** 5000 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lZMin` | No |

**Type:** integer · **Format:** int32 · **Default:** -5 · **Minimum:** -200000 · **Maximum:** 200000

 |
| `lZMax` | No |

**Type:** integer · **Format:** int32 · **Default:** 5 · **Minimum:** -200000 · **Maximum:** 200000

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

### 15 - Field Evaluation 

#### [GET /FieldEvaluationResult](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-fieldevaluationresult)

Returns the state of all possible fields.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `FieldEvaluationResult` | No |

**Fields:** [FieldEvaluationResult_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-fieldevaluationresult-t)

 |

 |

#### [POST /ActivateEvaluationGroup](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-activateevaluationgroup)

Sets the activation condition for all existing evaluation groups (not configured, active, or inactive).

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [POST /SetFieldEvaluationContour](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-setfieldevaluationcontour)

Sets the contour of an existing field.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [POST /GetFieldEvaluationContour](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-getfieldevaluationcontour)

Returns the contour of an existing field.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [GET /EvaluationGroupType](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-evaluationgrouptype)

Returns the evaluation group type, whether it is a field evaluation or a perpendicular distance field.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [GET /FieldEvaluationGroupState](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-fieldevaluationgroupstate)

Returns the activation condition for all existing evaluation groups (not configured, active, or inactive).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [POST /StartTeachIn](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-startteachin)

Starts the teach in process.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [POST /StopTeachIn](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-stopteachin)

Stops the teach in process.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

### 16 - Perpendicular Distance 

#### [GET /perpendicularDistanceResult](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-perpendiculardistanceresult)

Returns the perpendicular distance within a field.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

**Fields:** [Point3d_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-point3d-t)

 |
| `maximumDistancePosition` | No |

**Fields:** [Point3d_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-point3d-t)

 |

 |

 |

### 17 - 3D scan recording 

#### [GET /ScanMergerEnabled](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-scanmergerenabled)

Enables/disables the 3D scan merger feature.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ScanMergerEnabled` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /ScanMergerEnabled](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-scanmergerenabled)

Enables/disables the 3D scan merger feature.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /ScanMergerSource](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-scanmergersource)

Returns/sets the data source for angle information used during scan merging (IMU or ENCODER).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [POST /ScanMergerSource](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-scanmergersource)

Returns/sets the data source for angle information used during scan merging (IMU or ENCODER).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /ScanMergeTrigger](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-scanmergetrigger)

Returns/sets how the scan merge is triggered (e.g. via method call).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ScanMergeTrigger` | No |

**Allowed values:**

```json
[
  0
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - METHOD

 |

 |

#### [POST /ScanMergeTrigger](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-scanmergetrigger)

Returns/sets how the scan merge is triggered (e.g. via method call).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ScanMergeTrigger` | No |

**Allowed values:**

```json
[
  0
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - METHOD

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /RotationOffset](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-rotationoffset)

Returns/sets the rotation center offset (x, y, z in mm) relative to the scanner.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [POST /RotationOffset](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-rotationoffset)

Returns/sets the rotation center offset (x, y, z in mm) relative to the scanner.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /EncoderTransformationType](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-encodertransformationtype)

Returns/sets the encoder transformation type (ROTATION or DISPLACEMENT).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [POST /EncoderTransformationType](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-encodertransformationtype)

Returns/sets the encoder transformation type (ROTATION or DISPLACEMENT).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /EncoderRotation](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-encoderrotation)

Returns/sets the rotation center of the encoder in mm.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `yaw` | No |

**Type:** number · **Format:** float · **Default:** 0 · **Minimum:** -360 · **Maximum:** 360

 |
| `pitch` | No |

**Type:** number · **Format:** float · **Default:** 0.1 · **Minimum:** -360 · **Maximum:** 360

 |
| `roll` | No |

**Type:** number · **Format:** float · **Default:** 0 · **Minimum:** -360 · **Maximum:** 360

 |

 |

#### [POST /EncoderRotation](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-encoderrotation)

Returns/sets the rotation center of the encoder in mm.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EncoderRotation` | No |

Fields
| Field | Required | Details |
| `yaw` | No |

**Type:** number · **Format:** float · **Default:** 0 · **Minimum:** -360 · **Maximum:** 360

 |
| `pitch` | No |

**Type:** number · **Format:** float · **Default:** 0.1 · **Minimum:** -360 · **Maximum:** 360

 |
| `roll` | No |

**Type:** number · **Format:** float · **Default:** 0 · **Minimum:** -360 · **Maximum:** 360

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /EncoderTranslation](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-encodertranslation)

Returns/sets the translation of the encoder in mm.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `x` | No |

**Type:** number · **Format:** float · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `y` | No |

**Type:** number · **Format:** float · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `z` | No |

**Type:** number · **Format:** float · **Default:** 1 · **Minimum:** -100000 · **Maximum:** 100000

 |

 |

#### [POST /EncoderTranslation](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-encodertranslation)

Returns/sets the translation of the encoder in mm.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EncoderTranslation` | No |

Fields
| Field | Required | Details |
| `x` | No |

**Type:** number · **Format:** float · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `y` | No |

**Type:** number · **Format:** float · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `z` | No |

**Type:** number · **Format:** float · **Default:** 1 · **Minimum:** -100000 · **Maximum:** 100000

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [POST /StartScanMerge](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-startscanmerge)

Starts the 3D scan merge recording.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [POST /StopScanMerge](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-stopscanmerge)

Stops the 3D scan merge recording.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [POST /ResetScanMergeView](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-resetscanmergeview)

Deletes the currently displayed point clouds.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /MergeSaving](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-mergesaving)

Returns/sets the status for saving the merged scans. As soon as a scan merge is completed, the point cloud is available for download on port 80 (192.168.0.1/cloud.pcd). Curl: http:///cloud.pcd -o cloud.pcd. Only the most recently created point cloud is available for download. The point cloud is ready for download when MergeSaving changes from 1 (Saving in progress) to 0 (Saving not active).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `MergeSaving` | No |

**Type:** boolean · **Default:** false

 |

 |

### 18 - Operating Data 

#### [GET /LastParaDate](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-lastparadate)

Returns the last date (e.g. 12.11.2024) when a permanent parameter save was executed.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LastParaDate` | No |

**Type:** string · **Default:** DD.MM.YYYY · **Maximum length:** 10

 |

 |

#### [GET /LastParaTime](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-lastparatime)

Returns the last time (e.g. 13:24) when a permanent parameter save was executed.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LastParaTime` | No |

**Type:** string · **Default:** HH:MM · **Maximum length:** 5

 |

 |

#### [GET /PowerOnCnt](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-poweroncnt)

Returns the number of power on cycles.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `PowerOnCnt` | No |

**Type:** integer · **Format:** uint32 · **Default:** 0

 |

 |

#### [GET /DailyOpHours](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-dailyophours)

Returns the runtime duration since the last power on (non-persistent).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `DailyOpHours` | No |

**Type:** number · **Format:** float · **Default:** 0.0

 |

 |

#### [GET /OpHours](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-ophours)

Returns the total number of operating hours during the lifetime of the device. The resolution is a 1/10 hour.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `OpHours` | No |

**Type:** integer · **Format:** uint32 · **Default:** 0

 |

 |

#### [GET /CurrentTempDev](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-currenttempdev)

Returns the current device temperature.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `CurrentTempDev` | No |

**Type:** number · **Format:** float · **Default:** 20.0

 |

 |

### 19 - Diagnostics 

#### [GET /crown/file](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-crown-file)

Download files (e.g. OpenAPI description or diagnostic files) if one exists.

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

#### [POST /DoDiagnosisDump](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-dodiagnosisdump)

Creates a diagnostic file (zip file) for further analysis.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |
| `data` | No |

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Successful` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /GetDiagnosisDumpInfo](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-getdiagnosisdumpinfo)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

### 20 - Cybersecurity 

#### [GET /EtherAuxEnabled](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-etherauxenabled)

Enables/disables the legacy interface CoLa A/B. If enabled CoLa A uses port 2111 and CoLa B uses 2112.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherAuxEnabled` | No |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /EtherAuxEnabled](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-etherauxenabled)

Enables/disables the legacy interface CoLa A/B. If enabled CoLa A uses port 2111 and CoLa B uses 2112.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /EtherCoLaScanMode](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-ethercolascanmode)

Configures the device search by SICK tools. If disabled, finding the device via device search and changing the IP address via SICK tools is not possible.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 3

Mapping:
 * 0 - ENABLED
 * 1 - IP_CONFIG_DISABLED
 * 2 - DISABLED
 * 3 - IP_CONFIG_TIME_LIMIT

 |

 |

#### [POST /EtherCoLaScanMode](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-ethercolascanmode)

Configures the device search by SICK tools. If disabled, finding the device via device search and changing the IP address via SICK tools is not possible.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 3

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /httpsStatus](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-httpsstatus)

Returns the status of the HTTPS interface.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `enabled` | No |

**Type:** boolean · **Default:** false

 |
| `errorCode` | No |

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-httpserror-t)

 |

 |

#### [GET /certificateBundleInfo](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-certificatebundleinfo)

Returns information about the uploaded certificate bundle.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-httpserror-t)

 |
| --- | --- | --- |

 |

#### [POST /removeCertificateBundle](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-removecertificatebundle)

Removes the uploaded certificate bundle.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `success` | No |

**Type:** boolean · **Default:** false

 |
| `errorCode` | No |

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-httpserror-t)

 |

 |

#### [POST /setCertificateBundle](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-setcertificatebundle)

Uploads a certificate bundle in the PEM format via JSON.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `success` | No |

**Type:** boolean · **Default:** false

 |
| `errorCode` | No |

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-httpserror-t)

 |

 |

#### [POST /SetWebserverEnabled](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-setwebserverenabled)

Sets availability of the webserver (reboot required). If disabled, the webserver-based GUI and the REST interface cannot be used anymore.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [POST /GetWebserverEnabled](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-getwebserverenabled)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `IsEnabled` | No |

**Type:** boolean · **Default:** true

 |

 |

### 21 - Detection History 

#### [GET /EnableDetectionHistory](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-enabledetectionhistory)

Enables/disables the detection history.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EnableDetectionHistory` | No |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /EnableDetectionHistory](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-enabledetectionhistory)

Enables/disables the detection history.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [GET /EvaluationsToLog](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-get-evaluationstolog)

Returns/sets the evaluations which are logged (if they are in use).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

#### [POST /EvaluationsToLog](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-evaluationstolog)

Returns/sets the evaluations which are logged (if they are in use).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

 |

#### [POST /ResetDetectionHistory](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-rest-post-resetdetectionhistory)

Resets the detection history logs.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-responseheader)

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

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-e-user-level-type)

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

#### httpsError_t 

Fields
| Field | Required | Details |
| --- | --- | --- |
| `error` | No |

**Type:** string · **Default:**   · **Maximum length:** 100

 |

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Fields:** [Point2d_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-point2d-t)

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

**Fields:** [EvaluationResult_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan150-schema-evaluationresult-t)

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

#### PerformanceProfiles_t 

**Allowed values:**

```json
[
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

**Type:** integer · **Format:** uint8 · **Default:** 2

Mapping:
 * 1 - MODE_1
 * 2 - MODE_2
 * 3 - MODE_3
 * 4 - MODE_4
 * 5 - MODE_5
 * 6 - MODE_6
 * 7 - MODE_7
 * 8 - MODE_8
 * 9 - MODE_9
 * 10 - MODE_10
 * 11 - MODE_11

#### SessionToken 

**Type:** string · **Default:**   · **Maximum length:** 36

## picoScan120 Endpoint Reference

### 1 - General 

#### [POST /checkCredentials](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-checkcredentials)

Returns authentication success. For more details see https://github.com/SICKAG/sick_scan_rest_client.

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [PUT /update](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-put-update)

Transfers a firmware file (.spk.signed) from the file location to the device. The maximum possible file size is 100 MB.

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

#### [GET /parameterbackup](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-parameterbackup)

Reads/transfers the backup file (JSON) from/to the device.

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

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-e-user-level-type)

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

#### [PUT /parameterbackup](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-put-parameterbackup)

Reads/transfers the backup file (JSON) from/to the device.

**Request body**

**Media type: `multipart/form-data`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `datei` | No |

**Type:** string · **Format:** binary

Json-File

 |

**Responses**

**Status `200`**

#### [POST /SetPassword](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-setpassword)

Sets the password for the CoLa A/B interface only. In this example the password for user level: Service (4) is set to - test - (integer value of the password hash - test -). For more details see  https://github.com/SICKAG/sick_scan_rest_client.

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bSuccess` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /getChallenge](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-getchallenge)

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

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-e-user-level-type)

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

#### [POST /changePassword](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-changepassword)

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

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-e-user-level-type)

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

#### [POST /EnableUserLevel](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-enableuserlevel)

Activates / deactivates a specific user level for the REST interface.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `userLevel` | No |

**Type:** integer · **Format:** uint8

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - SUCCESS
 * 2 - NOT_ACCEPTED

 |

 |

#### [POST /WriteEeprom](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-writeeeprom)

Saves all parameters permanently.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Success` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /SoftReset](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-softreset)

Reboots the device. All non-saved parameters are lost.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [POST /RebootDevice](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-rebootdevice)

Reboots the device. All parameters are saved.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [POST /LoadFactoryDefaults](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-loadfactorydefaults)

Resets all parameters to default.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [POST /LoadApplicationDefaults](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-loadapplicationdefaults)

Resets only the user parametrization of the fields, evaluation cases, and parameters under the section "Application". Other parameters like interface settings, echo filter, etc. remain unchanged. This function requires the user level: Service.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [POST /EnableLegacyUserLevel](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-enablelegacyuserlevel)

Activates / deactivates a specific user level for the CoLa A/B interface.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `userLevel` | No |

**Type:** integer · **Format:** uint8 · **Minimum:** 0 · **Maximum:** 7

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `result` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [GET /laserType](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-lasertype)

Returns the type of the sending unit.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `laserType` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |

 |

#### [GET /sipmType](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-sipmtype)

Returns the type of the receiving unit.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `sipmType` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |

 |

#### [POST /RunFirmwareUpdate](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-runfirmwareupdate)

Starts the firmware update process.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /UpdateState](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-updatestate)

Returns the state of the update process.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - Initial
 * 1 - Started
 * 2 - Finished
 * 3 - Error

 |

 |

#### [GET /CreateParameterBackupResult](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-createparameterbackupresult)

Returns the current status of the parameter backup process.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Status` | No |

**Allowed values:**

```json
[
  0,
  1
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - Pending
 * 1 - Finished

 |
| `Result` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [GET /RestoreParameterBackupResult](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-restoreparameterbackupresult)

Returns the current status of the parameter restoration process.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Status` | No |

**Allowed values:**

```json
[
  0,
  1
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - Pending
 * 1 - Finished

 |
| `RestoreResult` | No |

**Fields:** [RestoreBackupResult](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-restorebackupresult)

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

#### [POST /CreateParameterBackup](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-createparameterbackup)

Creates a parameter backup file on the device.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Result` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /RestoreParameterBackup](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-restoreparameterbackup)

Restores the backup file on the device. The restored parameters will then be applied.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Passphrase` | No |

**Type:** string · **Default:**   · **Maximum length:** 256

 |
| `Filter` | No |

**Type:** integer · **Format:** uint32 · **Default:** 0

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Result` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [GET /LFTchecksum](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-lftchecksum)

Returns a checksum over all software parts and configurations.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `MD5SumOK` | No |

**Type:** boolean · **Default:** false

 |
| `MD5LinuxRoot` | No |

**Type:** string · **Default:**   · **Maximum length:** 32

 |
| `MD5App` | No |

**Type:** string · **Default:**   · **Maximum length:** 32

 |
| `MD5Calibration` | No |

**Type:** string · **Default:**   · **Maximum length:** 32

 |
| `MD5Parameters` | No |

**Type:** string · **Default:**   · **Maximum length:** 32

 |

 |

#### [POST /CreateSessionToken](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-createsessiontoken)

A short-lived session token to pass to a HTTP request header.

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `token` | No |

**Fields:** [SessionToken](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-sessiontoken)

 |
| `timeToLive` | No |

**Type:** integer · **Format:** uint16

 |

 |

### 2 - Status 

#### [GET /DeviceStatus](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-devicestatus)

Returns the device state (9 possible states).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `DeviceStatus` | No |

**Fields:** [DeviceStatus](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-devicestatus)

 |

 |

#### [GET /SCdevicestate](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-scdevicestate)

Returns the device state (busy, ready, or error).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

### 3 - Device Information 

#### [GET /DeviceIdent](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-deviceident)

Returns the device name and the firmware version.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Name` | No |

**Type:** string · **Default:** picoScan120 · **Maximum length:** 11

 |
| `Version` | No |

**Type:** string · **Default:** 2.3.3.0R · **Maximum length:** 8

 |

 |

#### [GET /LocationName](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-locationname)

Returns/sets the device name.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LocationName` | No |

**Type:** string · **Default:** not defined · **Maximum length:** 32

 |

 |

#### [POST /LocationName](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-locationname)

Returns/sets the device name.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /SerialNumber](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-serialnumber)

Returns the serial number.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `SerialNumber` | No |

**Type:** string · **Default:** 123456789 · **Maximum length:** 9

 |

 |

#### [GET /FirmwareVersion](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-firmwareversion)

Returns the current firmware version.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `FirmwareVersion` | No |

**Type:** string · **Default:** XXXXXXXXXX · **Maximum length:** 40

 |

 |

#### [GET /OrderNumber](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-ordernumber)

Returns the order number (SICK part number).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `OrderNumber` | No |

**Type:** string · **Default:** 1234567 · **Maximum length:** 32

 |

 |

#### [GET /DeviceType](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-devicetype)

Returns the device type.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `DeviceType` | No |

**Type:** string · **Default:** picoScan1xx · **Maximum length:** 18

 |

 |

#### [POST /FindMe](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-findme)

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

**Type:** integer · **Format:** uint16 · **Minimum:** 1

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

### 4 - Basic Settings 

#### [GET /LEDState](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-ledstate)

Returns the LED status.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

**Fields:** [LedStateType](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-ledstatetype)

 |

 |

#### [GET /LEDEnable](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-ledenable)

Returns/sets the LED mode (on/off).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LEDEnable` | No |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /LEDEnable](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-ledenable)

Returns/sets the LED mode (on/off).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [POST /mStartMeasure](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-mstartmeasure)

Starts motor and measurement.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

#### [POST /mStandby](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-mstandby)

Enables/disables the laser (on/off).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

#### [POST /mStopMeasure](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-mstopmeasure)

Stops motor and measurement.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

#### [GET /AutoStartMeasure](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-autostartmeasure)

Returns/sets the mode for automatic start of measurement after boot-up.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `AutoStartMeasure` | No |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /AutoStartMeasure](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-autostartmeasure)

Returns/sets the mode for automatic start of measurement after boot-up.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |
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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /ScanConfig](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-scanconfig)

Configuration of angular resolution, scanning frequency, start and stop angle.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `udiScanFreq` | No |

**Type:** integer · **Format:** uint32 · **Default:** 2000 · **Minimum:** 1500 · **Maximum:** 5000

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

**Type:** integer · **Format:** uint32 · **Default:** 1000 · **Minimum:** 500 · **Maximum:** 10000

 |
| `diStartAngle` | No |

**Type:** integer · **Format:** int32 · **Default:** -1380000 · **Minimum:** -1380000 · **Maximum:** 1380000

 |
| `diStopAngle` | No |

**Type:** integer · **Format:** int32 · **Default:** 1380000 · **Minimum:** -1380000 · **Maximum:** 1380000

 |

 |

 |

 |

#### [GET /operatingMode](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-operatingmode)

Returns/sets the operating mode of the receiver unit.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `operatingMode` | No |

**Allowed values:**

```json
[
  0,
  1
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - STANDARD
 * 1 - REFLECTOR_OPTIMIZATION_MODE

 |

 |

#### [POST /operatingMode](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-operatingmode)

Returns/sets the operating mode of the receiver unit.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `operatingMode` | No |

**Allowed values:**

```json
[
  0,
  1
]
```

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - STANDARD
 * 1 - REFLECTOR_OPTIMIZATION_MODE

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

### 5 - Date and System Time 

#### [GET /TSCRole](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-tscrole)

Returns/sets the time synchronization role (none, NTP, or PTP).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - TX_NONE
 * 1 - TX_CLIENT
 * 3 - TX_PTP_SLAVE

 |

 |

#### [POST /TSCRole](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-tscrole)

Returns/sets the time synchronization role (none, NTP, or PTP).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /TSCTCSrvAddr](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-tsctcsrvaddr)

Returns/sets the IP address of the time server.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

#### [POST /TSCTCSrvAddr](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-tsctcsrvaddr)

Returns/sets the IP address of the time server.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /TSCTCtimezone](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-tsctctimezone)

Returns/sets the time zone of the client.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

#### [POST /TSCTCtimezone](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-tsctctimezone)

Returns/sets the time zone of the client.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /TSCTCupdatetime](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-tsctcupdatetime)

Returns/sets the update time of the client.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `TSCTCupdatetime` | No |

**Type:** integer · **Format:** uint32 · **Default:** 600 · **Minimum:** 1 · **Maximum:** 3600

 |

 |

#### [POST /TSCTCupdatetime](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-tsctcupdatetime)

Returns/sets the update time of the client.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /LSPdatetime](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-lspdatetime)

Returns the current time of the device (years, months, days, hours, minutes, seconds, microseconds).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LSPdatetime` | No |

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-datetime-t)

 |

 |

#### [POST /LSPsetdatetime](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-lspsetdatetime)

Sets the time of the device (years, months, days, hours, minutes, seconds, microseconds).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `DateTime` | No |

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-datetime-t)

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

#### [GET /LFPparticle](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-lfpparticle)

Returns/sets the particle filter settings. Filters out disturbances in the measurement data caused by particles such as dust, snowflakes, or similar. Configure the minimal threshold of the required distance step (mm) between the echo to be filtered and the echoes of surrounding beam angles.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** false

 |
| `uiThreshold` | No |

**Type:** integer · **Format:** uint16 · **Default:** 500 · **Minimum:** 20 · **Maximum:** 5000

 |

 |

#### [POST /LFPparticle](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-lfpparticle)

Returns/sets the particle filter settings. Filters out disturbances in the measurement data caused by particles such as dust, snowflakes, or similar. Configure the minimal threshold of the required distance step (mm) between the echo to be filtered and the echoes of surrounding beam angles.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Type:** integer · **Format:** uint16 · **Default:** 500 · **Minimum:** 20 · **Maximum:** 5000

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

### 7 - Ethernet 

#### [GET /EtherIPAddress](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-etheripaddress)

Returns/sets the used static IP address.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

#### [POST /EtherIPAddress](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-etheripaddress)

Returns/sets the used static IP address.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /EtherIPGateAddress](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-etheripgateaddress)

Returns/sets the default gateway address.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

#### [POST /EtherIPGateAddress](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-etheripgateaddress)

Returns/sets the default gateway address.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /EtherIPMask](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-etheripmask)

Returns/sets the subnet mask.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

#### [POST /EtherIPMask](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-etheripmask)

Returns/sets the subnet mask.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /EtherAddressingMode](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-etheraddressingmode)

Returns/sets the mode for the IP address assignment (static or DHCP).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

#### [POST /EtherAddressingMode](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-etheraddressingmode)

Returns/sets the mode for the IP address assignment (static or DHCP).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /EtherDHCPFallback](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-etherdhcpfallback)

Returns/sets the mode for the DHCP fallback (retry or static).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - TX_USE_STATIC_IP
 * 1 - TX_RETRY_DHCP

 |

 |

#### [POST /EtherDHCPFallback](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-etherdhcpfallback)

Returns/sets the mode for the DHCP fallback (retry or static).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [POST /EthernetUpdate](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-ethernetupdate)

Applies the Ethernet settings. This needs to be executed to actually change the Ethernet settings.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /EtherIPAddressDHCP](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-etheripaddressdhcp)

Returns the assigned DHCP IP address.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

#### [GET /EtherIPGateAddressDHCP](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-etheripgateaddressdhcp)

Returns the assigned DHCP default gateway address.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

#### [GET /EtherIPMaskDHCP](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-etheripmaskdhcp)

Returns the assigned DHCP subnet mask.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

#### [GET /EtherMACAddress](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-ethermacaddress)

Returns the MAC address of the Ethernet interface.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

### 8 - Inputs And Outputs 

#### [GET /OutputState](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-outputstate)

Returns the state of all outputs.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

**Type:** array · **Minimum items:** 8 · **Maximum items:** 8

**Items:**

Fields
| Field | Required | Details |
| `IOState` | No |

**Fields:** [IOState_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-iostate-t)

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

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-datetime-t)

 |
| --- | --- | --- |

 |

#### [GET /PortState](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-portstate)

Returns the state of the ports. "PortState" is preferred over "OutputState".

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

**Type:** array · **Minimum items:** 0 · **Maximum items:** 8

**Items:**

**Fields:** [PortStateAndCounter_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-portstateandcounter-t)

 |
| `aExternalPorts` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 8

**Items:**

**Fields:** [PortStateAndCounter_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-portstateandcounter-t)

 |
| `aTimeBlock` | No |

**Default:**

```json
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-datetime-t)

 |

 |

#### [POST /mResetOutputCounter](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-mresetoutputcounter)

Resets the counter for the outputs.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

#### [GET /PortConfiguration](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-portconfiguration)

Returns/sets the port configuration of all I/Os.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-logic-t)

 |
| `Debounce` | No |

**Type:** integer · **Format:** uint16 · **Default:** 10 · **Minimum:** 1 · **Maximum:** 1000

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

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-logic-t)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

 |
| `Reserved6` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Type:** integer · **Format:** uint16 · **Default:** 0

Mapping:
 * 0 - NONE
 * 1 - ENCODER_A
 * 2 - ENCODER_B
 * 3 - AUX1
 * 4 - AUX2

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

#### [POST /PortConfiguration](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-portconfiguration)

Returns/sets the port configuration of all I/Os.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-logic-t)

 |
| `Debounce` | No |

**Type:** integer · **Format:** uint16 · **Default:** 10 · **Minimum:** 1 · **Maximum:** 1000

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

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-logic-t)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

 |
| `Reserved6` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Type:** integer · **Format:** uint16 · **Default:** 0

Mapping:
 * 0 - NONE
 * 1 - ENCODER_A
 * 2 - ENCODER_B
 * 3 - AUX1
 * 4 - AUX2

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [POST /SetOutput](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-setoutput)

Sets the output state for an individual output. Precondition is to set the output source to "SOPAS command".

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Success` | No |

**Type:** boolean · **Default:** false

 |

 |

### 9 - Measurement Data Output 

#### [GET /EtherHostIPPort](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-etherhostipport)

Returns/sets the port settings for the LMDscandata output (CoLa Binary TCP).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherHostIPPort` | No |

**Type:** integer · **Format:** uint16 · **Default:** 2112 · **Minimum:** 1024

 |

 |

#### [POST /EtherHostIPPort](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-etherhostipport)

Returns/sets the port settings for the LMDscandata output (CoLa Binary TCP).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherHostIPPort` | No |

**Type:** integer · **Format:** uint16 · **Default:** 2112 · **Minimum:** 1024

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /EtherAuxIPPort](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-etherauxipport)

Returns/sets the port settings for the LMDscandata output 2 (CoLa ASCII TCP).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherAuxIPPort` | No |

**Type:** integer · **Format:** uint16 · **Default:** 2111 · **Minimum:** 1024

 |

 |

#### [POST /EtherAuxIPPort](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-etherauxipport)

Returns/sets the port settings for the LMDscandata output 2 (CoLa ASCII TCP).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherAuxIPPort` | No |

**Type:** integer · **Format:** uint16 · **Default:** 2111 · **Minimum:** 1024

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /EtherSessionTimeout](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-ethersessiontimeout)

Returns/sets the session timeout for the LMDscandata output. Be careful with low values as they might cause unexpected disconnections.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherSessionTimeout` | No |

**Type:** integer · **Format:** uint32 · **Default:** 15000

 |

 |

#### [POST /EtherSessionTimeout](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-ethersessiontimeout)

Returns/sets the session timeout for the LMDscandata output. Be careful with low values as they might cause unexpected disconnections.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherSessionTimeout` | No |

**Type:** integer · **Format:** uint32 · **Default:** 15000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /ScanDataEthSettings](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-scandataethsettings)

Returns/sets the destination IP address settings for measurement data streaming (UDP).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 1

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

**Type:** integer · **Format:** uint8

 |
| `Port` | No |

**Type:** integer · **Format:** uint16 · **Default:** 2115

 |

 |

#### [POST /ScanDataEthSettings](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-scandataethsettings)

Returns/sets the destination IP address settings for measurement data streaming (UDP).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 1

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

**Type:** integer · **Format:** uint8

 |
| `Port` | No |

**Type:** integer · **Format:** uint16 · **Default:** 2115

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /ScanDataEnable](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-scandataenable)

Enables/disables the measurement data streaming. The measurement data itself is sent via a UDP-based SICK-specific format. A Python example can be found at https://github.com/SICKAG/ScanSegmentAPI.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ScanDataEnable` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /ScanDataEnable](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-scandataenable)

Enables/disables the measurement data streaming. The measurement data itself is sent via a UDP-based SICK-specific format. A Python example can be found at https://github.com/SICKAG/ScanSegmentAPI.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /ScanDataFormat](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-scandataformat)

Returns/sets the scan data format (e.g., Compact format).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 2

Mapping:
 * 1 - MSGPACK
 * 2 - Compact
 * 3 - LMDscandata
 * 4 - NativeROS2

 |

 |

#### [POST /ScanDataFormat](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-scandataformat)

Returns/sets the scan data format (e.g., Compact format).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 2

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /rosFrameId](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-rosframeid)

Returns/sets the frame ID of the published topics.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `rosFrameId` | No |

**Type:** string · **Default:** picoScan_ · **Maximum length:** 64

 |

 |

#### [POST /rosFrameId](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-rosframeid)

Returns/sets the frame ID of the published topics.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `rosFrameId` | No |

**Type:** string · **Default:** picoScan_ · **Maximum length:** 64

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /rosParentFrameId](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-rosparentframeid)

Returns/sets the parent frame ID of the published topics.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `rosParentFrameId` | No |

**Type:** string · **Default:** world · **Maximum length:** 64

 |

 |

#### [POST /rosParentFrameId](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-rosparentframeid)

Returns/sets the parent frame ID of the published topics.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `rosParentFrameId` | No |

**Type:** string · **Default:** world · **Maximum length:** 64

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /rosNamespace](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-rosnamespace)

Returns/sets the namespace of the published topics.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `rosNamespace` | No |

**Type:** string · **Default:**   · **Maximum length:** 64

 |

 |

#### [POST /rosNamespace](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-rosnamespace)

Returns/sets the namespace of the published topics.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `rosNamespace` | No |

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /ScanDataConfig](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-scandataconfig)

Returns/sets the configuration of LMDscandata such as the content of the scan data (e.g., whether to include the RSSI values).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `reserved` | No |

**Type:** integer · **Format:** uint16

 |
| `RemDataConfig` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** true

 |
| `reserved1` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |
| `reserved2` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |

 |
| `EnableEncoderBlock` | No |

**Type:** boolean · **Default:** false

 |
| --- | --- | --- |
| `reserved1` | No |

**Type:** boolean · **Default:** false

 |
| `bEnableDeviceName` | No |

**Type:** boolean · **Default:** false

 |
| `reserved2` | No |

**Type:** boolean · **Default:** false

 |
| `bEnableTimeBlock` | No |

**Type:** boolean · **Default:** false

 |
| `reserved3` | No |

**Type:** integer · **Format:** uint16 · **Default:** 1

 |

 |

#### [POST /ScanDataConfig](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-scandataconfig)

Returns/sets the configuration of LMDscandata such as the content of the scan data (e.g., whether to include the RSSI values).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `ScanDataConfig` | No |

Fields
| Field | Required | Details |
| `reserved` | No |

**Type:** integer · **Format:** uint16

 |
| `RemDataConfig` | No |

Fields
| Field | Required | Details |
| `bEnable` | No |

**Type:** boolean · **Default:** true

 |
| `reserved1` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |
| `reserved2` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |

 |
| `EnableEncoderBlock` | No |

**Type:** boolean · **Default:** false

 |
| --- | --- | --- |
| `reserved1` | No |

**Type:** boolean · **Default:** false

 |
| `bEnableDeviceName` | No |

**Type:** boolean · **Default:** false

 |
| `reserved2` | No |

**Type:** boolean · **Default:** false

 |
| `bEnableTimeBlock` | No |

**Type:** boolean · **Default:** false

 |
| `reserved3` | No |

**Type:** integer · **Format:** uint16 · **Default:** 1

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /rosDomainId](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-rosdomainid)

Returns/sets the ROS domain ID used for the ROS 2 communication.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `rosDomainId` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0 · **Maximum:** 232

 |

 |

#### [POST /rosDomainId](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-rosdomainid)

Returns/sets the ROS domain ID used for the ROS 2 communication.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `rosDomainId` | No |

**Type:** integer · **Format:** uint8 · **Default:** 0 · **Maximum:** 232

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /compactTelegramType1Content](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-compacttelegramtype1content)

Returns/sets the content of the Compact telegram type 1 (e.g. whether to include the RSSI values).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `includeRssi` | No |

**Type:** boolean · **Default:** true

 |
| `includeProperties` | No |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /compactTelegramType1Content](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-compacttelegramtype1content)

Returns/sets the content of the Compact telegram type 1 (e.g. whether to include the RSSI values).

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `compactTelegramType1Content` | No |

Fields
| Field | Required | Details |
| `includeRssi` | No |

**Type:** boolean · **Default:** true

 |
| `includeProperties` | No |

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /SensorPosition](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-sensorposition)

Returns/sets the mounting position in 1/10000 deg. This only affects the PointCloud2 format output by native ROS2.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

#### [POST /SensorPosition](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-sensorposition)

Returns/sets the mounting position in 1/10000 deg. This only affects the PointCloud2 format output by native ROS2.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `SensorPosition` | No |

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

### 10 - Operating Data 

#### [GET /LastParaDate](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-lastparadate)

Returns the last date (e.g., 12.11.2024) when a permanent parameter save was executed.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LastParaDate` | No |

**Type:** string · **Default:** DD.MM.YYYY · **Maximum length:** 10

 |

 |

#### [GET /LastParaTime](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-lastparatime)

Returns the last time (e.g., 13:24) when a permanent parameter save was executed.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `LastParaTime` | No |

**Type:** string · **Default:** HH:MM · **Maximum length:** 5

 |

 |

#### [GET /PowerOnCnt](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-poweroncnt)

Returns the number of power-on cycles.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `PowerOnCnt` | No |

**Type:** integer · **Format:** uint32 · **Default:** 0

 |

 |

#### [GET /DailyOpHours](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-dailyophours)

Returns the runtime duration since the last power-on (non-persistent).

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `DailyOpHours` | No |

**Type:** number · **Format:** float · **Default:** 0.0

 |

 |

#### [GET /OpHours](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-ophours)

Returns the total number of operating hours during the lifetime of the device. The resolution is 1/10 hour.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `OpHours` | No |

**Type:** integer · **Format:** uint32 · **Default:** 0

 |

 |

#### [GET /CurrentTempDev](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-currenttempdev)

Returns the current device temperature.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `CurrentTempDev` | No |

**Type:** number · **Format:** float · **Default:** 20.0

 |

 |

### 11 - Diagnostics 

#### [POST /DoDiagnosisDump](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-dodiagnosisdump)

Creates a diagnostic file (zip file) for further analysis.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `Successful` | No |

**Type:** boolean · **Default:** false

 |

 |

#### [POST /GetDiagnosisDumpInfo](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-getdiagnosisdumpinfo)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

### 12 - Cybersecurity 

#### [GET /EtherAuxEnabled](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-etherauxenabled)

Enables/disables the legacy interface CoLa A/B. If enabled, CoLa A uses port 2111 and CoLa B uses 2112.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `EtherAuxEnabled` | No |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /EtherAuxEnabled](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-etherauxenabled)

Enables/disables the legacy interface CoLa A/B. If enabled, CoLa A uses port 2111 and CoLa B uses 2112.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /EtherCoLaScanMode](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-ethercolascanmode)

Configures the device search by SICK tools. If disabled, finding the device via device search and changing the IP address via SICK tools is not possible.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 3

Mapping:
 * 0 - ENABLED
 * 1 - IP_CONFIG_DISABLED
 * 2 - DISABLED
 * 3 - IP_CONFIG_TIME_LIMIT

 |

 |

#### [POST /EtherCoLaScanMode](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-ethercolascanmode)

Configures the device search by SICK tools. If disabled, finding the device via device search and changing the IP address via SICK tools is not possible.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 3

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [GET /httpsStatus](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-httpsstatus)

Returns the status of the HTTPS interface.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `enabled` | No |

**Type:** boolean · **Default:** false

 |
| `errorCode` | No |

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-httpserror-t)

 |

 |

#### [GET /certificateBundleInfo](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-certificatebundleinfo)

Returns information about the uploaded certificate bundle.

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

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

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-httpserror-t)

 |
| --- | --- | --- |

 |

#### [POST /removeCertificateBundle](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-removecertificatebundle)

Removes the uploaded certificate bundle.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | Yes |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `success` | No |

**Type:** boolean · **Default:** false

 |
| `errorCode` | No |

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-httpserror-t)

 |

 |

#### [POST /setCertificateBundle](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-setcertificatebundle)

Uploads a certificate bundle in the PEM format via JSON.

This function requires at least user level: Service.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `success` | No |

**Type:** boolean · **Default:** false

 |
| `errorCode` | No |

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-httpserror-t)

 |

 |

#### [POST /SetWebserverEnabled](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-setwebserverenabled)

Sets the availability of the web server (reboot required). If disabled, the web server-based GUI and the REST interface cannot be used anymore.

This function requires at least user level: Authorized Client.

**Request body**

**Required:** true

**Media type: `application/json`**

Fields
| Field | Required | Details |
| --- | --- | --- |
| `header` | No |

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |

#### [POST /GetWebserverEnabled](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-post-getwebserverenabled)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-responseheader)

 |
| `data` | No |

Fields
| Field | Required | Details |
| `IsEnabled` | No |

**Type:** boolean · **Default:** true

 |

 |

### 19 - Diagnostics 

#### [GET /crown/file](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-rest-get-crown-file)

Download files (e.g. OpenAPI description or diagnostic files) if one exists.

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

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/rest-api-openapi/#picoscan120-schema-e-user-level-type)

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

#### httpsError_t 

Fields
| Field | Required | Details |
| --- | --- | --- |
| `error` | No |

**Type:** string · **Default:**   · **Maximum length:** 100

 |

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

#### SessionToken 

**Type:** string · **Default:**   · **Maximum length:** 36
