# Firmware Update for SICK LiDAR Sensors via GUI or REST API

> Update SICK LiDAR firmware through a supported web interface, SOPAS ET, Sentio Creator, or the REST API, depending on the product family.

Source: https://sickag.github.io/sick_lidar_developer_guide/shared-features/firmware-update/

# Firmware Update

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

Update the firmware to get fixes and new functions. The available methods
depend on the device:

- LRS4000: Sentio Creator or SOPAS ET.
- multiScan100, multiScan200, and picoScan100: SOPASair, Sentio Creator,
  SOPAS ET, or the REST API.

## Where to Get the Package

Download the package that matches your device and target version from its
product page under *Downloads* / *Software*:
[picoScan100](https://www.sick.com/de/en/search?text=picoScan100),
[multiScan100](https://www.sick.com/de/en/search?text=multiScan100),
[multiScan200](https://www.sick.com/de/en/search?text=multiScan200), or
[LRS4000](https://www.sick.com/de/en/search?text=LRS4000).

[Sentio Creator](https://sickag.github.io/sick_lidar_developer_guide/visualization/sentio-creator/) can also provide firmware packages.

Read the release notes for your device before you update:
[LRS4000](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/release-notes/),
[multiScan100](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/release-notes/),
[multiScan200](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/release-notes/), or
[picoScan100](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/release-notes/).

## Web GUI

Open the device's firmware page in SOPASair and follow the update workflow.

![Firmware update in the Web GUI](https://sickag.github.io/sick_lidar_developer_guide/assets/shared-features/firmware-update-webgui.png)
*Firmware update in the Web GUI.*

## SOPAS ET

1. Unpack the firmware package (`.spk`). Connect the sensor over Ethernet and
   keep the power supply stable during the update.
2. Find the sensor in SOPAS ET, add it to the project, and save the parameter
   file (`.sopas`) as a precaution.
3. Open the device settings, choose **Download firmware**, select the `.spk`
   package, and log in at the **Service** user level when prompted.
4. Wait until the device has rebooted and its LED is green. Check the firmware
   version; reinstall the device driver if SOPAS ET asks for it.
5. Check that the device works as expected. If its state is unclear, load the
   factory defaults at the Service user level and then load the saved parameter
   file.

## Sentio Creator

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

Use Sentio Creator to discover the device, select the firmware version, and install the update.

![Firmware update in Sentio Creator](https://sickag.github.io/sick_lidar_developer_guide/assets/shared-features/firmware-update-sentio-creator.png)
*Firmware update in Sentio Creator.*

## Headless via the REST API

Compatible with: multiScan100 multiScan200 picoScan100

Device-specific endpoints: [multiScan100 REST API](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/),
[multiScan200 REST API](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/), and
[picoScan100 REST API](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-rest-openapi/).

Automate the update with the five steps below. Run them in order; skipping or reordering steps can leave the device in an inconsistent state. After flashing, the device reboots automatically and is unreachable for a few minutes. The update is successful only when the device is back online with the expected version.

### Get a Session Token

multiScan200 and picoScan100 use `POST /api/CreateSessionToken` at Service
level with [challenge-response](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication).
This endpoint also accepts HTTP Basic authentication, which is convenient in scripts:

```http
POST /api/CreateSessionToken
Authorization: Basic <base64(Service:<password>)>
Content-Type: application/json

{}
```

Basic authentication sends the password only Base64-encoded. Use it only over HTTPS or on an isolated network.

The response contains the session token:

```json
{ "header": { "status": 0 }, "data": { "token": "eyJhbGci..." } }
```

The multiScan100 REST interface documents `/update`, `RunFirmwareUpdate`, and
`UpdateState`, but not `CreateSessionToken`. Use the authentication flow from
the release notes or the OpenAPI file for the installed firmware.

### Upload the Package

`PUT /api/update` with the firmware file as the binary body. On multiScan200
and picoScan100, the `X-Session-Token` header authorizes this transfer, so
Basic Auth is not required here.

```http
PUT /api/update
X-Session-Token: <token>
Content-Type: application/octet-stream

<binary firmware file content>
```

A `200 OK` confirms the package was received.

### Start the Update

`POST /api/RunFirmwareUpdate` accepts only [challenge-response](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication) for `POST:RunFirmwareUpdate`, not Basic Auth or the session token:

```json
{
  "header": {
    "nonce": "...",
    "opaque": "...",
    "realm": "...",
    "user": "Service",
    "response": "<computed hash>"
  }
}
```

### Poll the Update State

`GET /api/UpdateState` every ~5 s until it reaches Finished (2) or the device becomes unreachable (reboot started). Stop on Error (3) and investigate before retrying.

```http
GET /api/UpdateState
```

Example response:

```json
{ "data": { "UpdateState": 1 } }
```

### Verify the New Version

After the device is back online, read the identity and compare against the expected version:

```http
GET /api/DeviceIdent
```

Example response:

```json
{ "data": { "DeviceIdent": { "Name": "picoScan", "Version": "2.3.3.0R" } } }
```

`DeviceIdent.Version` and `GET /api/FirmwareVersion` may format the same firmware version slightly differently, so normalize them before comparing.

## UpdateState Values

<p class="table-caption" markdown>**UpdateState Values:** value, state, and meaning.</p>

| Value | State    | Meaning                                                                                |
| ----- | -------- | -------------------------------------------------------------------------------------- |
| 0     | Initial  | No update in progress. Package may be uploaded but flashing hasn't started.            |
| 1     | Started  | Flashing in progress. Do not power-cycle the device.                                   |
| 2     | Finished | Flash complete; the device reboots automatically.                                      |
| 3     | Error    | Update failed. Check package compatibility and retry. Do not power-cycle immediately.  |

## Error Handling

- `PUT /api/update` returns 403: Missing or expired session token. Create a fresh token and add `X-Session-Token`.
- `RunFirmwareUpdate` returns `header.status` 4 (Access Denied) or 10 (Invalid Challenge): Basic Auth or the session token was used instead of challenge-response, or the challenge was invalidated. Use a new [challenge](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication) for `POST:RunFirmwareUpdate`.
- `UpdateState` = 3 (Error): Wrong package or an unsigned package on firmware V2.2.0 or later. Download the correct `.spk.signed` and retry.
- Device never returns: Normal reboot takes 2-5 minutes. Wait and keep UDP sockets open across the reboot.

While `UpdateState` is Started (1), never power-cycle the device. Allow 2-5 minutes total for the flash and reboot. Keep measurement sockets open across the reboot, so the OS doesn't buffer an ICMP port-unreachable message that would break the first `recv()` call afterwards (on Windows, apply `SIO_UDP_CONNRESET`).

On multiScan200 and picoScan100, subscribe to the [`UpdateState` WebSocket event](https://sickag.github.io/sick_lidar_developer_guide/data-streaming/websocket-events/) instead of polling to get progress pushes during the flash. On multiScan200 and picoScan100, verify integrity after the update with the [`LFTchecksum`](https://sickag.github.io/sick_lidar_developer_guide/shared-features/checksums/): a firmware change updates `MD5LinuxRoot` and `MD5App` but leaves `MD5Parameters` and `MD5Calibration` untouched.

## Related Articles

*How to perform a firmware update via HTTP.*
*How to perform a firmware update with SOPASair.*
*How to perform a firmware update with SOPAS ET.*
