# picoScan120 API | REST | OpenAPI

> Download the picoScan120 OpenAPI description and search its REST endpoints, request parameters, and response schemas.

Sections: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/sections.md (one small file per endpoint, schema, or telegram)

Source: https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/

# API | REST | OpenAPI {#api-rest-openapi}

<div class="tool-intro tool-intro--centered" markdown>

![OpenAPI](https://sickag.github.io/sick_lidar_developer_guide/assets/openapi-logo.png)

This page provides the searchable REST reference and the downloadable OpenAPI
description for the picoScan120. For REST concepts, authentication, and request
patterns, see [REST API / OpenAPI](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/).

</div>

[picoScan120_2.3.3.0R.yaml (Download)](https://sickag.github.io/sick_lidar_developer_guide/assets/picoScan100/openapi/picoScan120_2.3.3.0R.yaml)

Always match the file to your device model and actual firmware version.
Function availability can vary by variant and installed software package.
Using a picoScan150? Its endpoints differ; see the
[picoScan150 REST API reference](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan150/api-rest-openapi/).

### General {#picoscan120-category-1-general}

#### [POST /checkCredentials](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-checkcredentials) {#picoscan120-rest-post-checkcredentials}

Returns authentication success. For more details see https://github.com/SICKAG/sick_scan_rest_client.

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [PUT /update](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-put-update) {#picoscan120-rest-put-update}

Transfers a firmware file (.spk.signed) from the file location to the device. The maximum possible file size is 100 MB.

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

#### [GET /parameterbackup](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-parameterbackup) {#picoscan120-rest-get-parameterbackup}

Reads/transfers the backup file (JSON) from/to the device.

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

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-e-user-level-type)

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

#### [PUT /parameterbackup](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-put-parameterbackup) {#picoscan120-rest-put-parameterbackup}

Reads/transfers the backup file (JSON) from/to the device.

See [Configuration Backup and Restore](https://sickag.github.io/sick_lidar_developer_guide/configuration/configuration-backup-and-restore/) for the parameter backup workflow.

This operation uploads a file or uses a non-JSON body. Use the request media type and upload fields below.

**Request body**

**Media type: `multipart/form-data`**

`datei`

**Type:** string · **Format:** binary

Json-File

**Responses**

**Status `200`**

#### [POST /SetPassword](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-setpassword) {#picoscan120-rest-post-setpassword}

Sets the password for the CoLa A/B interface only. In this example the password for user level: Service (4) is set to - test - (integer value of the password hash - test -). For more details see  https://github.com/SICKAG/sick_scan_rest_client.

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`bSuccess`

**Type:** boolean · **Default:** false

 |

#### [POST /getChallenge](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-getchallenge) {#picoscan120-rest-post-getchallenge}

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

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-e-user-level-type)

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

#### [POST /changePassword](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-changepassword) {#picoscan120-rest-post-changepassword}

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

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-e-user-level-type)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

#### [POST /EnableUserLevel](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-enableuserlevel) {#picoscan120-rest-post-enableuserlevel}

Activates / deactivates a specific user level for the REST interface.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

 |
| --- | --- |
| `data` |
| `userLevel` |

**Type:** integer · **Format:** uint8

 |
| `isEnabled` |

**Type:** boolean · **Default:** false

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

`result`

**Allowed values:**

```
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

#### [POST /WriteEeprom](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-writeeeprom) {#picoscan120-rest-post-writeeeprom}

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`Success`

**Type:** boolean · **Default:** false

 |

#### [POST /SoftReset](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-softreset) {#picoscan120-rest-post-softreset}

Reboots the device. All non-saved parameters are lost.

This function requires at least user level: Authorized Client.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [POST /RebootDevice](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-rebootdevice) {#picoscan120-rest-post-rebootdevice}

Reboots the device. All parameters are saved.

This function requires at least user level: Authorized Client.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [POST /LoadFactoryDefaults](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-loadfactorydefaults) {#picoscan120-rest-post-loadfactorydefaults}

Resets all parameters to default.

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
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [POST /LoadApplicationDefaults](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-loadapplicationdefaults) {#picoscan120-rest-post-loadapplicationdefaults}

Resets only the user parametrization of the fields, evaluation cases, and parameters under the section "Application". Other parameters like interface settings, echo filter, etc. remain unchanged. This function requires the user level: Service.

This function requires at least user level: Authorized Client.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [POST /EnableLegacyUserLevel](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-enablelegacyuserlevel) {#picoscan120-rest-post-enablelegacyuserlevel}

Activates / deactivates a specific user level for the CoLa A/B interface.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

 |
| --- | --- |
| `data` |
| `userLevel` |

**Type:** integer · **Format:** uint8 · **Minimum:** 0 · **Maximum:** 7

 |
| `isEnabled` |

**Type:** boolean · **Default:** false

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

`result`

**Type:** boolean · **Default:** false

 |

#### [GET /laserType](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-lasertype) {#picoscan120-rest-get-lasertype}

Returns the type of the sending unit.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/laserType"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`laserType`

**Type:** integer · **Format:** uint8 · **Default:** 0

 |

#### [GET /sipmType](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-sipmtype) {#picoscan120-rest-get-sipmtype}

Returns the type of the receiving unit.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/sipmType"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`sipmType`

**Type:** integer · **Format:** uint8 · **Default:** 0

 |

#### [POST /RunFirmwareUpdate](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-runfirmwareupdate) {#picoscan120-rest-post-runfirmwareupdate}

Starts the firmware update process.

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
  }
}
```

**Try the request**

Protected requests need challenge-response authentication, so `curl` alone cannot send them; use the [Python script on the REST Interface page](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).

**Request body**

**Required:** true

**Media type: `application/json`**

`header`

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /UpdateState](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-updatestate) {#picoscan120-rest-get-updatestate}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - Initial
 * 1 - Started
 * 2 - Finished
 * 3 - Error

 |

#### [GET /CreateParameterBackupResult](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-createparameterbackupresult) {#picoscan120-rest-get-createparameterbackupresult}

Returns the current status of the parameter backup process.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/CreateParameterBackupResult"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |
| `Status` |

**Allowed values:**

```
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
| `Result` |

**Type:** boolean · **Default:** false

 |

 |

#### [GET /RestoreParameterBackupResult](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-restoreparameterbackupresult) {#picoscan120-rest-get-restoreparameterbackupresult}

Returns the current status of the parameter restoration process.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/RestoreParameterBackupResult"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |
| `Status` |

**Allowed values:**

```
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
| `RestoreResult` |

**Fields:** [RestoreBackupResult](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-restorebackupresult)

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

#### [POST /CreateParameterBackup](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-createparameterbackup) {#picoscan120-rest-post-createparameterbackup}

Creates a parameter backup file on the device.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`Result`

**Type:** boolean · **Default:** false

 |

#### [POST /RestoreParameterBackup](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-restoreparameterbackup) {#picoscan120-rest-post-restoreparameterbackup}

Restores the backup file on the device. The restored parameters will then be applied.

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
    "Passphrase": " ",
    "Filter": 0
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
| `Passphrase` |

**Type:** string · **Default:**   · **Maximum length:** 256

 |
| `Filter` |

**Type:** integer · **Format:** uint32 · **Default:** 0

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

`Result`

**Type:** boolean · **Default:** false

 |

#### [GET /LFTchecksum](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-lftchecksum) {#picoscan120-rest-get-lftchecksum}

Returns a checksum over all software parts and configurations.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LFTchecksum"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |
| `MD5SumOK` |

**Type:** boolean · **Default:** false

 |
| `MD5LinuxRoot` |

**Type:** string · **Default:**   · **Maximum length:** 32

 |
| `MD5App` |

**Type:** string · **Default:**   · **Maximum length:** 32

 |
| `MD5Calibration` |

**Type:** string · **Default:**   · **Maximum length:** 32

 |
| `MD5Parameters` |

**Type:** string · **Default:**   · **Maximum length:** 32

 |

 |

#### [POST /CreateSessionToken](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-createsessiontoken) {#picoscan120-rest-post-createsessiontoken}

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

### Status {#picoscan120-category-2-status}

#### [GET /DeviceStatus](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-devicestatus) {#picoscan120-rest-get-devicestatus}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`DeviceStatus`

**Fields:** [DeviceStatus](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-devicestatus)

 |

#### [GET /SCdevicestate](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-scdevicestate) {#picoscan120-rest-get-scdevicestate}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

### Device Information {#picoscan120-category-3-device-information}

#### [GET /DeviceIdent](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-deviceident) {#picoscan120-rest-get-deviceident}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |
| `Name` |

**Type:** string · **Default:** picoScan120 · **Maximum length:** 11

 |
| `Version` |

**Type:** string · **Default:** 2.3.3.0R · **Maximum length:** 8

 |

 |

#### [GET /LocationName](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-locationname) {#picoscan120-rest-get-locationname}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`LocationName`

**Type:** string · **Default:** not defined · **Maximum length:** 32

 |

#### [POST /LocationName](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-locationname) {#picoscan120-rest-post-locationname}

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /SerialNumber](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-serialnumber) {#picoscan120-rest-get-serialnumber}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`SerialNumber`

**Type:** string · **Default:** 123456789 · **Maximum length:** 9

 |

#### [GET /FirmwareVersion](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-firmwareversion) {#picoscan120-rest-get-firmwareversion}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`FirmwareVersion`

**Type:** string · **Default:** XXXXXXXXXX · **Maximum length:** 40

 |

#### [GET /OrderNumber](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-ordernumber) {#picoscan120-rest-get-ordernumber}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`OrderNumber`

**Type:** string · **Default:** 1234567 · **Maximum length:** 32

 |

#### [GET /DeviceType](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-devicetype) {#picoscan120-rest-get-devicetype}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`DeviceType`

**Type:** string · **Default:** picoScan1xx · **Maximum length:** 18

 |

#### [POST /FindMe](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-findme) {#picoscan120-rest-post-findme}

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

**Type:** integer · **Format:** uint16 · **Minimum:** 1

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

### Basic Settings {#picoscan120-category-4-basic-settings}

#### [GET /LEDState](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-ledstate) {#picoscan120-rest-get-ledstate}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

**Fields:** [LedStateType](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-ledstatetype)

 |

#### [GET /LEDEnable](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-ledenable) {#picoscan120-rest-get-ledenable}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`LEDEnable`

**Type:** boolean · **Default:** true

 |

#### [POST /LEDEnable](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-ledenable) {#picoscan120-rest-post-ledenable}

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [POST /mStartMeasure](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-mstartmeasure) {#picoscan120-rest-post-mstartmeasure}

Starts motor and measurement.

This function requires at least user level: Authorized Client.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

#### [POST /mStandby](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-mstandby) {#picoscan120-rest-post-mstandby}

Enables/disables the laser (on/off).

This function requires at least user level: Authorized Client.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

#### [POST /mStopMeasure](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-mstopmeasure) {#picoscan120-rest-post-mstopmeasure}

Stops motor and measurement.

This function requires at least user level: Authorized Client.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

#### [GET /AutoStartMeasure](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-autostartmeasure) {#picoscan120-rest-get-autostartmeasure}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`AutoStartMeasure`

**Type:** boolean · **Default:** true

 |

#### [POST /AutoStartMeasure](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-autostartmeasure) {#picoscan120-rest-post-autostartmeasure}

Returns/sets the mode for automatic start of measurement after boot-up.

This function requires at least user level: Authorized Client.

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
    "AutoStartMeasure": true
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

`AutoStartMeasure`

**Type:** boolean · **Default:** true

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /ScanConfig](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-scanconfig) {#picoscan120-rest-get-scanconfig}

Configuration of angular resolution, scanning frequency, start and stop angle.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ScanConfig"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |
| `udiScanFreq` |

**Type:** integer · **Format:** uint32 · **Default:** 2000 · **Minimum:** 1500 · **Maximum:** 5000

 |
| `ScanRange` |
| `uiLength` |

**Type:** integer · **Format:** uint16 · **Default:** 1 · **Minimum:** 1 · **Maximum:** 1

 |
| `aRange` |

**Type:** array · **Minimum items:** 1 · **Maximum items:** 1

**Items:**
| `udiAngleRes` |

**Type:** integer · **Format:** uint32 · **Default:** 1000 · **Minimum:** 500 · **Maximum:** 10000

 |
| `diStartAngle` |

**Type:** integer · **Format:** int32 · **Default:** -1380000 · **Minimum:** -1380000 · **Maximum:** 1380000

 |
| `diStopAngle` |

**Type:** integer · **Format:** int32 · **Default:** 1380000 · **Minimum:** -1380000 · **Maximum:** 1380000

 |

 |

 |

 |

#### [GET /operatingMode](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-operatingmode) {#picoscan120-rest-get-operatingmode}

Returns/sets the operating mode of the receiver unit.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/operatingMode"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`operatingMode`

**Allowed values:**

```
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

#### [POST /operatingMode](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-operatingmode) {#picoscan120-rest-post-operatingmode}

Returns/sets the operating mode of the receiver unit.

This function requires at least user level: Authorized Client.

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
    "operatingMode": 0
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

`operatingMode`

**Allowed values:**

```
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

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

### Date and System Time {#picoscan120-category-5-date-and-system-time}

#### [GET /TSCRole](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-tscrole) {#picoscan120-rest-get-tscrole}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - TX_NONE
 * 1 - TX_CLIENT
 * 3 - TX_PTP_SLAVE

 |

#### [POST /TSCRole](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-tscrole) {#picoscan120-rest-post-tscrole}

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - TX_NONE
 * 1 - TX_CLIENT
 * 3 - TX_PTP_SLAVE

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /TSCTCSrvAddr](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-tsctcsrvaddr) {#picoscan120-rest-get-tsctcsrvaddr}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

#### [POST /TSCTCSrvAddr](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-tsctcsrvaddr) {#picoscan120-rest-post-tsctcsrvaddr}

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /TSCTCtimezone](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-tsctctimezone) {#picoscan120-rest-get-tsctctimezone}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

#### [POST /TSCTCtimezone](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-tsctctimezone) {#picoscan120-rest-post-tsctctimezone}

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /TSCTCupdatetime](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-tsctcupdatetime) {#picoscan120-rest-get-tsctcupdatetime}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`TSCTCupdatetime`

**Type:** integer · **Format:** uint32 · **Default:** 600 · **Minimum:** 1 · **Maximum:** 3600

 |

#### [POST /TSCTCupdatetime](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-tsctcupdatetime) {#picoscan120-rest-post-tsctcupdatetime}

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /LSPdatetime](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-lspdatetime) {#picoscan120-rest-get-lspdatetime}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`LSPdatetime`

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-datetime-t)

 |

#### [POST /LSPsetdatetime](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-lspsetdatetime) {#picoscan120-rest-post-lspsetdatetime}

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

 |
| --- | --- |
| `data` |

`DateTime`

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-datetime-t)

 |

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

### Filter {#picoscan120-category-6-filter}

#### [GET /LFPparticle](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-lfpparticle) {#picoscan120-rest-get-lfpparticle}

Returns/sets the particle filter settings. Filters out disturbances in the measurement data caused by particles such as dust, snowflakes, or similar. Configure the minimal threshold of the required distance step (mm) between the echo to be filtered and the echoes of surrounding beam angles.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LFPparticle"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `uiThreshold` |

**Type:** integer · **Format:** uint16 · **Default:** 500 · **Minimum:** 20 · **Maximum:** 5000

 |

 |

#### [POST /LFPparticle](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-lfpparticle) {#picoscan120-rest-post-lfpparticle}

Returns/sets the particle filter settings. Filters out disturbances in the measurement data caused by particles such as dust, snowflakes, or similar. Configure the minimal threshold of the required distance step (mm) between the echo to be filtered and the echoes of surrounding beam angles.

This function requires at least user level: Authorized Client.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

 |
| --- | --- |
| `data` |

`LFPparticle`
| `bEnable` |

**Type:** boolean · **Default:** false

 |
| `uiThreshold` |

**Type:** integer · **Format:** uint16 · **Default:** 500 · **Minimum:** 20 · **Maximum:** 5000

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

### Ethernet {#picoscan120-category-7-ethernet}

#### [GET /EtherIPAddress](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-etheripaddress) {#picoscan120-rest-get-etheripaddress}

Returns/sets the used static IP address.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherIPAddress"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

#### [POST /EtherIPAddress](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-etheripaddress) {#picoscan120-rest-post-etheripaddress}

Returns/sets the used static IP address.

This function requires at least user level: Authorized Client.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /EtherIPGateAddress](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-etheripgateaddress) {#picoscan120-rest-get-etheripgateaddress}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

#### [POST /EtherIPGateAddress](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-etheripgateaddress) {#picoscan120-rest-post-etheripgateaddress}

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /EtherIPMask](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-etheripmask) {#picoscan120-rest-get-etheripmask}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

#### [POST /EtherIPMask](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-etheripmask) {#picoscan120-rest-post-etheripmask}

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /EtherAddressingMode](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-etheraddressingmode) {#picoscan120-rest-get-etheraddressingmode}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

#### [POST /EtherAddressingMode](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-etheraddressingmode) {#picoscan120-rest-post-etheraddressingmode}

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /EtherDHCPFallback](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-etherdhcpfallback) {#picoscan120-rest-get-etherdhcpfallback}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - TX_USE_STATIC_IP
 * 1 - TX_RETRY_DHCP

 |

#### [POST /EtherDHCPFallback](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-etherdhcpfallback) {#picoscan120-rest-post-etherdhcpfallback}

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
    "user": "Run"
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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

Mapping:
 * 0 - TX_USE_STATIC_IP
 * 1 - TX_RETRY_DHCP

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [POST /EthernetUpdate](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-ethernetupdate) {#picoscan120-rest-post-ethernetupdate}

Applies the Ethernet settings. This needs to be executed to actually change the Ethernet settings.

This function requires at least user level: Authorized Client.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /EtherIPAddressDHCP](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-etheripaddressdhcp) {#picoscan120-rest-get-etheripaddressdhcp}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

#### [GET /EtherIPGateAddressDHCP](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-etheripgateaddressdhcp) {#picoscan120-rest-get-etheripgateaddressdhcp}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

#### [GET /EtherIPMaskDHCP](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-etheripmaskdhcp) {#picoscan120-rest-get-etheripmaskdhcp}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

#### [GET /EtherMACAddress](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-ethermacaddress) {#picoscan120-rest-get-ethermacaddress}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

### Inputs And Outputs {#picoscan120-category-8-inputs-and-outputs}

#### [GET /OutputState](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-outputstate) {#picoscan120-rest-get-outputstate}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

**Type:** array · **Minimum items:** 8 · **Maximum items:** 8

**Items:**
| `IOState` |

**Fields:** [IOState_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-iostate-t)

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

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-datetime-t)

 |
| --- | --- |

 |

#### [GET /PortState](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-portstate) {#picoscan120-rest-get-portstate}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

**Type:** array · **Minimum items:** 0 · **Maximum items:** 8

**Items:**

**Fields:** [PortStateAndCounter_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-portstateandcounter-t)

 |
| `aExternalPorts` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 8

**Items:**

**Fields:** [PortStateAndCounter_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-portstateandcounter-t)

 |
| `aTimeBlock` |

**Default:**

```
[]
```

**Type:** array · **Minimum items:** 0 · **Maximum items:** 1

**Items:**

**Fields:** [DateTime_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-datetime-t)

 |

 |

#### [POST /mResetOutputCounter](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-mresetoutputcounter) {#picoscan120-rest-post-mresetoutputcounter}

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

#### [GET /PortConfiguration](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-portconfiguration) {#picoscan120-rest-get-portconfiguration}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-logic-t)

 |
| `Debounce` |

**Type:** integer · **Format:** uint16 · **Default:** 10 · **Minimum:** 1 · **Maximum:** 1000

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

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-logic-t)

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

**Type:** array · **Minimum items:** 0 · **Maximum items:** 128

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

**Type:** integer · **Format:** uint16 · **Default:** 0

Mapping:
 * 0 - NONE
 * 1 - ENCODER_A
 * 2 - ENCODER_B
 * 3 - AUX1
 * 4 - AUX2

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

#### [POST /PortConfiguration](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-portconfiguration) {#picoscan120-rest-post-portconfiguration}

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
    "user": "Run"
  },
  "data": {
    "PortConfiguration": [
      {
        "PortType": 0,
        "Name": "IOx",
        "InputSettings": {
          "Logic": 0,
          "Debounce": 10,
          "Sensitivity": 0,
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
        "EncoderPortType": 0,
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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 0

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

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-logic-t)

 |
| `Debounce` |

**Type:** integer · **Format:** uint16 · **Default:** 10 · **Minimum:** 1 · **Maximum:** 1000

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

**Fields:** [Logic_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-logic-t)

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

**Type:** array · **Minimum items:** 0 · **Maximum items:** 128

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

**Type:** integer · **Format:** uint16 · **Default:** 0

Mapping:
 * 0 - NONE
 * 1 - ENCODER_A
 * 2 - ENCODER_B
 * 3 - AUX1
 * 4 - AUX2

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [POST /SetOutput](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-setoutput) {#picoscan120-rest-post-setoutput}

Sets the output state for an individual output. Precondition is to set the output source to "SOPAS command".

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`Success`

**Type:** boolean · **Default:** false

 |

### Measurement Data Output {#picoscan120-category-9-measurement-data-output}

#### [GET /EtherHostIPPort](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-etherhostipport) {#picoscan120-rest-get-etherhostipport}

Returns/sets the port settings for the LMDscandata output (CoLa Binary TCP).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherHostIPPort"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherHostIPPort`

**Type:** integer · **Format:** uint16 · **Default:** 2112 · **Minimum:** 1024

 |

#### [POST /EtherHostIPPort](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-etherhostipport) {#picoscan120-rest-post-etherhostipport}

Returns/sets the port settings for the LMDscandata output (CoLa Binary TCP).

This function requires at least user level: Authorized Client.

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
    "EtherHostIPPort": 2112
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

`EtherHostIPPort`

**Type:** integer · **Format:** uint16 · **Default:** 2112 · **Minimum:** 1024

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /EtherAuxIPPort](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-etherauxipport) {#picoscan120-rest-get-etherauxipport}

Returns/sets the port settings for the LMDscandata output 2 (CoLa ASCII TCP).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherAuxIPPort"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherAuxIPPort`

**Type:** integer · **Format:** uint16 · **Default:** 2111 · **Minimum:** 1024

 |

#### [POST /EtherAuxIPPort](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-etherauxipport) {#picoscan120-rest-post-etherauxipport}

Returns/sets the port settings for the LMDscandata output 2 (CoLa ASCII TCP).

This function requires at least user level: Authorized Client.

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
    "EtherAuxIPPort": 2111
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

`EtherAuxIPPort`

**Type:** integer · **Format:** uint16 · **Default:** 2111 · **Minimum:** 1024

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /EtherSessionTimeout](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-ethersessiontimeout) {#picoscan120-rest-get-ethersessiontimeout}

Returns/sets the session timeout for the LMDscandata output. Be careful with low values as they might cause unexpected disconnections.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherSessionTimeout"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherSessionTimeout`

**Type:** integer · **Format:** uint32 · **Default:** 15000

 |

#### [POST /EtherSessionTimeout](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-ethersessiontimeout) {#picoscan120-rest-post-ethersessiontimeout}

Returns/sets the session timeout for the LMDscandata output. Be careful with low values as they might cause unexpected disconnections.

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
    "EtherSessionTimeout": 15000
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

`EtherSessionTimeout`

**Type:** integer · **Format:** uint32 · **Default:** 15000

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /ScanDataEthSettings](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-scandataethsettings) {#picoscan120-rest-get-scandataethsettings}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 1

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

**Type:** integer · **Format:** uint8

 |
| `Port` |

**Type:** integer · **Format:** uint16 · **Default:** 2115

 |

 |

#### [POST /ScanDataEthSettings](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-scandataethsettings) {#picoscan120-rest-post-scandataethsettings}

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
    "user": "Run"
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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 1

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

**Type:** integer · **Format:** uint8

 |
| `Port` |

**Type:** integer · **Format:** uint16 · **Default:** 2115

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /ScanDataEnable](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-scandataenable) {#picoscan120-rest-get-scandataenable}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`ScanDataEnable`

**Type:** boolean · **Default:** false

 |

#### [POST /ScanDataEnable](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-scandataenable) {#picoscan120-rest-post-scandataenable}

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
    "user": "Run"
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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /ScanDataFormat](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-scandataformat) {#picoscan120-rest-get-scandataformat}

Returns/sets the scan data format (e.g., Compact format).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ScanDataFormat"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 2

Mapping:
 * 1 - MSGPACK
 * 2 - Compact
 * 3 - LMDscandata
 * 4 - NativeROS2

 |

#### [POST /ScanDataFormat](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-scandataformat) {#picoscan120-rest-post-scandataformat}

Returns/sets the scan data format (e.g., Compact format).

This function requires at least user level: Authorized Client.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 2

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /rosFrameId](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-rosframeid) {#picoscan120-rest-get-rosframeid}

Returns/sets the frame ID of the published topics.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/rosFrameId"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`rosFrameId`

**Type:** string · **Default:** picoScan_ · **Maximum length:** 64

 |

#### [POST /rosFrameId](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-rosframeid) {#picoscan120-rest-post-rosframeid}

Returns/sets the frame ID of the published topics.

This function requires at least user level: Authorized Client.

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
    "rosFrameId": "picoScan_"
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

`rosFrameId`

**Type:** string · **Default:** picoScan_ · **Maximum length:** 64

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /rosParentFrameId](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-rosparentframeid) {#picoscan120-rest-get-rosparentframeid}

Returns/sets the parent frame ID of the published topics.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/rosParentFrameId"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`rosParentFrameId`

**Type:** string · **Default:** world · **Maximum length:** 64

 |

#### [POST /rosParentFrameId](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-rosparentframeid) {#picoscan120-rest-post-rosparentframeid}

Returns/sets the parent frame ID of the published topics.

This function requires at least user level: Authorized Client.

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
    "rosParentFrameId": "world"
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

`rosParentFrameId`

**Type:** string · **Default:** world · **Maximum length:** 64

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /rosNamespace](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-rosnamespace) {#picoscan120-rest-get-rosnamespace}

Returns/sets the namespace of the published topics.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/rosNamespace"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`rosNamespace`

**Type:** string · **Default:**   · **Maximum length:** 64

 |

#### [POST /rosNamespace](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-rosnamespace) {#picoscan120-rest-post-rosnamespace}

Returns/sets the namespace of the published topics.

This function requires at least user level: Authorized Client.

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
    "rosNamespace": " "
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

`rosNamespace`

**Type:** string · **Default:**   · **Maximum length:** 64

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /ScanDataConfig](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-scandataconfig) {#picoscan120-rest-get-scandataconfig}

Returns/sets the configuration of LMDscandata such as the content of the scan data (e.g., whether to include the RSSI values).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/ScanDataConfig"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |
| `reserved` |

**Type:** integer · **Format:** uint16

 |
| `RemDataConfig` |
| `bEnable` |

**Type:** boolean · **Default:** true

 |
| `reserved1` |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |
| `reserved2` |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |

 |
| `EnableEncoderBlock` |

**Type:** boolean · **Default:** false

 |
| --- | --- |
| `reserved1` |

**Type:** boolean · **Default:** false

 |
| `bEnableDeviceName` |

**Type:** boolean · **Default:** false

 |
| `reserved2` |

**Type:** boolean · **Default:** false

 |
| `bEnableTimeBlock` |

**Type:** boolean · **Default:** false

 |
| `reserved3` |

**Type:** integer · **Format:** uint16 · **Default:** 1

 |

 |

#### [POST /ScanDataConfig](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-scandataconfig) {#picoscan120-rest-post-scandataconfig}

Returns/sets the configuration of LMDscandata such as the content of the scan data (e.g., whether to include the RSSI values).

This function requires at least user level: Authorized Client.

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
    "ScanDataConfig": {
      "reserved": "<integer>",
      "RemDataConfig": {
        "bEnable": true,
        "reserved1": 0,
        "reserved2": 0
      },
      "EnableEncoderBlock": false,
      "reserved1": false,
      "bEnableDeviceName": false,
      "reserved2": false,
      "bEnableTimeBlock": false,
      "reserved3": 1
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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

 |
| --- | --- |
| `data` |

`ScanDataConfig`
| `reserved` |

**Type:** integer · **Format:** uint16

 |
| `RemDataConfig` |
| `bEnable` |

**Type:** boolean · **Default:** true

 |
| `reserved1` |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |
| `reserved2` |

**Type:** integer · **Format:** uint8 · **Default:** 0

 |

 |
| `EnableEncoderBlock` |

**Type:** boolean · **Default:** false

 |
| --- | --- |
| `reserved1` |

**Type:** boolean · **Default:** false

 |
| `bEnableDeviceName` |

**Type:** boolean · **Default:** false

 |
| `reserved2` |

**Type:** boolean · **Default:** false

 |
| `bEnableTimeBlock` |

**Type:** boolean · **Default:** false

 |
| `reserved3` |

**Type:** integer · **Format:** uint16 · **Default:** 1

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /rosDomainId](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-rosdomainid) {#picoscan120-rest-get-rosdomainid}

Returns/sets the ROS domain ID used for the ROS 2 communication.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/rosDomainId"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`rosDomainId`

**Type:** integer · **Format:** uint8 · **Default:** 0 · **Maximum:** 232

 |

#### [POST /rosDomainId](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-rosdomainid) {#picoscan120-rest-post-rosdomainid}

Returns/sets the ROS domain ID used for the ROS 2 communication.

This function requires at least user level: Authorized Client.

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
    "rosDomainId": 0
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

`rosDomainId`

**Type:** integer · **Format:** uint8 · **Default:** 0 · **Maximum:** 232

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /compactTelegramType1Content](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-compacttelegramtype1content) {#picoscan120-rest-get-compacttelegramtype1content}

Returns/sets the content of the Compact telegram type 1 (e.g. whether to include the RSSI values).

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/compactTelegramType1Content"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |
| `includeRssi` |

**Type:** boolean · **Default:** true

 |
| `includeProperties` |

**Type:** boolean · **Default:** true

 |

 |

#### [POST /compactTelegramType1Content](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-compacttelegramtype1content) {#picoscan120-rest-post-compacttelegramtype1content}

Returns/sets the content of the Compact telegram type 1 (e.g. whether to include the RSSI values).

This function requires at least user level: Authorized Client.

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
    "compactTelegramType1Content": {
      "includeRssi": true,
      "includeProperties": true
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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

 |
| --- | --- |
| `data` |

`compactTelegramType1Content`
| `includeRssi` |

**Type:** boolean · **Default:** true

 |
| `includeProperties` |

**Type:** boolean · **Default:** true

 |

 |

**Responses**

**Status `200`**

**Media type: `application/json`**

`header`

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /SensorPosition](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-sensorposition) {#picoscan120-rest-get-sensorposition}

Returns/sets the mounting position in 1/10000 deg. This only affects the PointCloud2 format output by native ROS2.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/SensorPosition"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

#### [POST /SensorPosition](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-sensorposition) {#picoscan120-rest-post-sensorposition}

Returns/sets the mounting position in 1/10000 deg. This only affects the PointCloud2 format output by native ROS2.

This function requires at least user level: Authorized Client.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

 |
| --- | --- |
| `data` |

`SensorPosition`
| `x` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `y` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
| `z` |

**Type:** integer · **Format:** int32 · **Default:** 0 · **Minimum:** -100000 · **Maximum:** 100000

 |
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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

### Operating Data {#picoscan120-category-10-operating-data}

#### [GET /LastParaDate](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-lastparadate) {#picoscan120-rest-get-lastparadate}

Returns the last date (e.g., 12.11.2024) when a permanent parameter save was executed.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LastParaDate"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`LastParaDate`

**Type:** string · **Default:** DD.MM.YYYY · **Maximum length:** 10

 |

#### [GET /LastParaTime](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-lastparatime) {#picoscan120-rest-get-lastparatime}

Returns the last time (e.g., 13:24) when a permanent parameter save was executed.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/LastParaTime"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`LastParaTime`

**Type:** string · **Default:** HH:MM · **Maximum length:** 5

 |

#### [GET /PowerOnCnt](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-poweroncnt) {#picoscan120-rest-get-poweroncnt}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`PowerOnCnt`

**Type:** integer · **Format:** uint32 · **Default:** 0

 |

#### [GET /DailyOpHours](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-dailyophours) {#picoscan120-rest-get-dailyophours}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`DailyOpHours`

**Type:** number · **Format:** float · **Default:** 0.0

 |

#### [GET /OpHours](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-ophours) {#picoscan120-rest-get-ophours}

Returns the total number of operating hours during the lifetime of the device. The resolution is 1/10 hour.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/OpHours"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`OpHours`

**Type:** integer · **Format:** uint32 · **Default:** 0

 |

#### [GET /CurrentTempDev](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-currenttempdev) {#picoscan120-rest-get-currenttempdev}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`CurrentTempDev`

**Type:** number · **Format:** float · **Default:** 20.0

 |

### Diagnostics {#picoscan120-category-11-diagnostics}

#### [GET /crown/file](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-crown-file) {#picoscan120-rest-get-crown-file}

Download files (e.g. OpenAPI description or diagnostic files) if one exists.

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

#### [POST /DoDiagnosisDump](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-dodiagnosisdump) {#picoscan120-rest-post-dodiagnosisdump}

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`Successful`

**Type:** boolean · **Default:** false

 |

#### [POST /GetDiagnosisDumpInfo](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-getdiagnosisdumpinfo) {#picoscan120-rest-post-getdiagnosisdumpinfo}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

### Cybersecurity {#picoscan120-category-12-cybersecurity}

#### [GET /EtherAuxEnabled](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-etherauxenabled) {#picoscan120-rest-get-etherauxenabled}

Enables/disables the legacy interface CoLa A/B. If enabled, CoLa A uses port 2111 and CoLa B uses 2112.

**Try the request**

Copy this command into a terminal. In Windows PowerShell, use `curl.exe` instead of `curl`.

```bash
curl --request GET "http://192.168.0.1/api/EtherAuxEnabled"
```

**Responses**

**Status `200`**

**Media type: `application/json`**
| `header` |

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`EtherAuxEnabled`

**Type:** boolean · **Default:** true

 |

#### [POST /EtherAuxEnabled](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-etherauxenabled) {#picoscan120-rest-post-etherauxenabled}

Enables/disables the legacy interface CoLa A/B. If enabled, CoLa A uses port 2111 and CoLa B uses 2112.

This function requires at least user level: Authorized Client.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /EtherCoLaScanMode](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-ethercolascanmode) {#picoscan120-rest-get-ethercolascanmode}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 3

Mapping:
 * 0 - ENABLED
 * 1 - IP_CONFIG_DISABLED
 * 2 - DISABLED
 * 3 - IP_CONFIG_TIME_LIMIT

 |

#### [POST /EtherCoLaScanMode](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-ethercolascanmode) {#picoscan120-rest-post-ethercolascanmode}

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
    "user": "Run"
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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

**Type:** integer · **Format:** uint8 · **Default:** 3

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [GET /httpsStatus](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-httpsstatus) {#picoscan120-rest-get-httpsstatus}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |
| `enabled` |

**Type:** boolean · **Default:** false

 |
| `errorCode` |

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-httpserror-t)

 |

 |

#### [GET /certificateBundleInfo](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-get-certificatebundleinfo) {#picoscan120-rest-get-certificatebundleinfo}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

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

**Fields:** [httpsError_t](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-httpserror-t)

 |
| --- | --- |

 |

#### [POST /removeCertificateBundle](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-removecertificatebundle) {#picoscan120-rest-post-removecertificatebundle}

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

#### [POST /setCertificateBundle](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-setcertificatebundle) {#picoscan120-rest-post-setcertificatebundle}

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

#### [POST /SetWebserverEnabled](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-setwebserverenabled) {#picoscan120-rest-post-setwebserverenabled}

Sets the availability of the web server (reboot required). If disabled, the web server-based GUI and the REST interface cannot be used anymore.

This function requires at least user level: Authorized Client.

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

**Fields:** [PostBodyHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-postbodyheader)

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

#### [POST /GetWebserverEnabled](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-rest-post-getwebserverenabled) {#picoscan120-rest-post-getwebserverenabled}

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

**Fields:** [ResponseHeader](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-responseheader)

 |
| --- | --- |
| `data` |

`IsEnabled`

**Type:** boolean · **Default:** true

 |

### Shared request and response fields {#picoscan120-openapi-schemas}

#### ResponseHeader {#picoscan120-schema-responseheader}
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

#### PostBodyHeader {#picoscan120-schema-postbodyheader}
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

**Fields:** [E_USER_LEVEL_TYPE](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/picoScan120/api-rest-openapi/#picoscan120-schema-e-user-level-type)

 |

#### E_USER_LEVEL_TYPE {#picoscan120-schema-e-user-level-type}

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

#### DeviceStatus {#picoscan120-schema-devicestatus}

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

#### DateTime_t {#picoscan120-schema-datetime-t}
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

#### httpsError_t {#picoscan120-schema-httpserror-t}

`error`

**Type:** string · **Default:**   · **Maximum length:** 100

#### RestoreBackupResult {#picoscan120-schema-restorebackupresult}

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

#### Logic_t {#picoscan120-schema-logic-t}

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

#### IOState_t {#picoscan120-schema-iostate-t}

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

#### PortStateAndCounter_t {#picoscan120-schema-portstateandcounter-t}
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

#### LedStateType {#picoscan120-schema-ledstatetype}
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

**Type:** integer · **Format:** uint8 · **Default:** 0

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
| `Id` |

**Type:** string · **Default:**   · **Maximum length:** 8

 |

#### SessionToken {#picoscan120-schema-sessiontoken}

**Type:** string · **Default:**   · **Maximum length:** 36
