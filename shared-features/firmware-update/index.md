# Firmware Update

The available update methods depend on the product family and firmware.
multiScan100 firmware can be updated through SOPAS ET, Sentio Creator, the web
UI (SOPASair), or supported REST endpoints. LRS4000 firmware can be updated
through SOPAS ET or SICK AppManager. Check the product-specific release notes
before updating.

## Where to Get the Package

Download the package that matches your device and target version from the device's product page on [sick.com](https://www.sick.com) under *Downloads* / *Software*.

- [picoScan100](https://www.sick.com/de/en/catalog/products/lidar-and-radar-sensors/lidar-sensors/picoscan100/pics150-01000-pro-1/p/p677850?category=g569793&tab=downloads)
- [multiScan100](https://www.sick.com/de/en/catalog/products/lidar-and-radar-sensors/lidar-sensors/multiscan100/muls1aa-114322-multiscan165/p/p680210?category=g568283&tab=downloads)
- [multiScan200](https://www.sick.com/de/en/search?text=multiScan200)
- [LRS4000](https://www.sick.com/de/en/catalog/products/lidar-and-radar-sensors/lidar-sensors/lrs4000/c/g555594?tab=downloads)

For multiScan100, multiScan200, and picoScan100, [Sentio Creator](../visualization/sentio-creator.md), which can also provide firmware packages as well.

Read the release notes for your device before you update:
[LRS4000](../LRS4000/release-notes.md),
[multiScan100](../multiScan100/release-notes.md),
[multiScan200](../multiScan200/release-notes.md), or
[picoScan100](../picoScan100/release-notes.md).

## Web GUI

Open the device's firmware page in SOPASair and follow the update workflow.

![Firmware update in the Web GUI](../assets/shared-features/firmware-update-webgui.png)
*Firmware update in the Web GUI.*

## Sentio Creator

Use Sentio Creator to discover the device, select the firmware version, and install the update.

![Firmware update in Sentio Creator](../assets/shared-features/firmware-update-sentio-creator.png)
*Firmware update in Sentio Creator.*

## Headless via the REST API

Automate the update with the five steps below. Run them in order; skipping or reordering steps can leave the device in an inconsistent state. After flashing, the device reboots automatically and is unreachable for a few minutes. The update is successful only when the device is back online with the expected version.

### Get a Session Token

multiScan200 and picoScan100 use `POST /api/CreateSessionToken` at Service
level with [challenge-response](../configuration/rest-interface.md#challenge-response-authentication)
in the JSON body. This endpoint also accepts HTTP Basic authentication, which
is convenient in scripts:

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

`RunFirmwareUpdate` is a protected method requiring [challenge-response](../configuration/rest-interface.md#challenge-response-authentication) in the JSON body. Basic Auth and the session token are not accepted here, so fetch a fresh challenge immediately before calling it.

```http
POST /api/RunFirmwareUpdate
Content-Type: application/json
```

Fetch a fresh challenge and compute the hash for `POST:RunFirmwareUpdate`, then send it in the JSON body:

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
- `RunFirmwareUpdate` returns `header.status` 4 (Access Denied) or 10 (Invalid Challenge): Basic Auth or the session token was used instead of challenge-response, or the challenge was invalidated. Use a new [challenge](../configuration/rest-interface.md#challenge-response-authentication) for `POST:RunFirmwareUpdate`.
- `UpdateState` = 3 (Error): Wrong package or an unsigned package on firmware V2.2.0 or later. Download the correct `.spk.signed` and retry.
- Device never returns: Normal reboot takes 2-5 minutes. Wait and keep UDP sockets open across the reboot.

While `UpdateState` is Started (1), never power-cycle the device. Allow 2-5 minutes total for the flash and reboot. Keep measurement sockets open across the reboot, so the OS doesn't buffer an ICMP port-unreachable message that would break the first `recv()` call afterwards (on Windows, apply `SIO_UDP_CONNRESET`).

On picoScan100, subscribe to the [`UpdateState` WebSocket event](../data-streaming/websocket-events.md) instead of polling to get progress pushes during the flash. On multiScan200 and picoScan100, verify integrity after the update with the [`LFTchecksum`](./checksums.md): a firmware change updates `MD5LinuxRoot` and `MD5App` but leaves `MD5Parameters` and `MD5Calibration` untouched.

## Related Articles

<!-- SICK video: 0_erqjzive; source: https://support.sick.com/sick-knowledgebase/article?id=041c7064-9568-f011-bec1-000d3abc6bf4 -->
*How to perform a firmware update via HTTP.*
<!-- SICK video: 0_jqjmjcxh; source: https://support.sick.com/sick-knowledgebase/article?id=ceb31358-9568-f011-bec1-000d3abc6bf4 -->
*How to perform a firmware update with SOPASair.*
<!-- SICK video: 0_v1llvox0; source: https://support.sick.com/sick-knowledgebase/article?id=e6ec5f45-9568-f011-bec1-000d3abc6bf4 -->
*How to perform a firmware update with SOPAS ET.*
