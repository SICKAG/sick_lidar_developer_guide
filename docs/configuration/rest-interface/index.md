# SICK LiDAR REST API: Requests, Authentication, OpenAPI

> Configure SICK LiDAR sensors over REST: base URL, JSON envelope, persistence, challenge-response authentication, and session tokens.

Source: https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/

# REST Interface

Compatible with: LRS4000 multiScan100 multiScan200 picoScan100

The REST API is the primary interface to configure and control the sensor. It is JSON over HTTP on port 80, or port 443 with [HTTPS](https://sickag.github.io/sick_lidar_developer_guide/configuration/https-and-certificates/).

For endpoints and request examples, open the reference for your device:
[LRS4000](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/),
[multiScan100](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/),
[multiScan200](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/),
[picoScan120](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-rest-openapi/#picoscan120-rest-api), or
[picoScan150](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-rest-openapi/#picoscan150-rest-api).

## Base URL and JSON Envelope

```txt
http[s]://<device-ip>/api/<VariableOrMethod>
```

Every response uses the same envelope. `header.status` = `0` means success:

```json
{
  "header": { "status": 0, "message": "Ok" },
  "data": { "LocationName": "picoScan150 25420067" }
}
```

The example is the response to `GET /api/LocationName`. The key inside `data` always matches the endpoint name exactly, including capitalization.

## Reading vs. Writing

<p class="table-caption" markdown>**Reading vs. Writing:** operation, method, and authentication.</p>

| Operation | Method | Authentication |
| --- | --- | --- |
| Read a parameter | `GET /api/<Variable>` | None |
| Write a parameter | `POST /api/<Variable>` | [Challenge-response](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication) |
| Call a protected method (reboot, defaults, teach-in, …) | `POST /api/<Method>` | [Challenge-response](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication) |
| Binary file transfer (backup, firmware) | `GET`/`PUT /api/parameterbackup`, `PUT /api/update` where supported | [Session token](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#session-token-authentication) where required by firmware |

A `POST` to a parameter changes only the working copy in RAM. The change is lost at the next power cycle unless you call `POST /api/WriteEeprom`, as in the [script below](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication). `RebootDevice` also persists RAM to EEPROM before it reboots. `SoftReset` and a power cycle discard unsaved changes. See [Checksums](https://sickag.github.io/sick_lidar_developer_guide/shared-features/checksums/#ram-vs-persistent-storage) for how this shows in `MD5Parameters`.

## User Levels

Writes require an enabled [user level](https://sickag.github.io/sick_lidar_developer_guide/shared-features/user-levels/). By default, only Service is enabled.

## Authentication

<p class="table-caption" markdown>**Authentication:** method, use case, and reference.</p>

| Method | Use case | Reference |
| --- | --- | --- |
| Challenge-response | Every `POST`: parameter writes and method calls | [Challenge-response](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#challenge-response-authentication) |
| Session token | Binary file transfer: configuration backup and firmware upload | [Session token](https://sickag.github.io/sick_lidar_developer_guide/configuration/rest-interface/#session-token-authentication) |

### Challenge-Response Authentication

Protected `POST` requests use challenge-response authentication. The client
proves that it knows the password with a SHA-256 hash chain; the password
itself is never sent. `getChallenge` and some credential-check endpoints are
exceptions because they start or test the authentication flow.

For production code, use [sick_scan_rest_client](https://github.com/SICKAG/sick_scan_rest_client).
This Python client handles challenge-response authentication on all devices in this guide.

1. Request a challenge for the user level that will send the request. The challenge is returned in the top-level `challenge` object, not in `data`:

    ```http
    POST /api/getChallenge
    Content-Type: application/json

    { "data": { "user": "Service" } }
    ```

    ```json
    {
      "header": { "status": 0, "message": "Ok" },
      "challenge": {
        "realm": "SICK Sensor",
        "nonce": "e03caead8342067f4b91fefab37cb4fea551ab3adbd1739785657baf54a598ca",
        "opaque": "9ec7f4b6f6a26b11c4b4257c1feee26e1a7511d3f9d806d5b2b64fe9868062cc",
        "salt": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    }
    ```

2. Compute the response hash. `endpoint` is the path without `/api/`, for example `LocationName`:

    ```txt
    hash1    = SHA256("<user>:<realm>:<password>:" + salt_bytes)   # with salt
    hash1    = SHA256("<user>:<realm>:<password>")                 # without salt
    hash2    = SHA256("POST:<endpoint>")
    response = SHA256("<hash1>:<nonce>:<hash2>")
    ```

    `salt_bytes` are the raw byte values of the `salt` array, appended after
    the colon, not the JSON text of the array. If the challenge contains a
    `salt` field, use the salted form; an unsalted `hash1` is rejected with
    `header.status` 4 (Access Denied). All hashes are lowercase hex strings.

3. Send the hash in `header` with every protected `POST`. This script writes
   `LocationName` and saves it with `WriteEeprom`. Each `POST` gets its own
   challenge:

    ```python
    import hashlib, os, requests

    BASE = "http://192.168.0.1/api"
    USER = "Service"
    PASSWORD = os.environ["SICK_PASSWORD"]

    def sha256(data):
        return hashlib.sha256(data if isinstance(data, bytes) else data.encode()).hexdigest()

    def post(endpoint, data=None):
        challenge = requests.post(f"{BASE}/getChallenge", json={"data": {"user": USER}}).json()["challenge"]
        secret = f"{USER}:{challenge['realm']}:{PASSWORD}".encode()
        if challenge.get("salt") is not None:
            secret += b":" + bytes(challenge["salt"])
        response = sha256(f"{sha256(secret)}:{challenge['nonce']}:{sha256('POST:' + endpoint)}")
        header = {"user": USER, "realm": challenge["realm"], "nonce": challenge["nonce"],
                  "opaque": challenge["opaque"], "response": response}
        body = {"header": header, "data": data} if data is not None else {"header": header}
        reply = requests.post(f"{BASE}/{endpoint}", json=body).json()
        if reply["header"]["status"] != 0:
            raise RuntimeError(f"{endpoint}: {reply['header']}")
        return reply

    post("LocationName", {"LocationName": "my-sensor"})
    post("WriteEeprom")
    ```

    Example code: [MIT License](https://opensource.org/license/mit), © 2026 SICK AG. Provided as is, without warranty. Test it before you use it with a machine or in production.

Use each challenge for one request only. A challenge for another user level
invalidates the pending one, and the request fails with `header.status` 10
(Invalid Challenge). If several clients write to the same sensor, serialize the
challenge-and-`POST` sequence and retry once on status 10.

The [Postman pre-request script](https://sickag.github.io/sick_lidar_developer_guide/configuration/third-party-tools/#add-the-pre-request-script) is a complete, working implementation of this algorithm.

### Session Token Authentication

Binary file transfers such as configuration backup and firmware upload can use
a session token instead of the JSON `header` object. Check the matching OpenAPI
file for the exact file-transfer authentication required by your firmware.

1. Create a token with `POST /api/CreateSessionToken` at Service level. The response contains `data.token` and its lifetime in `data.timeToLive`.
2. Send the token in the `X-Session-Token` header of each `GET`/`PUT` file transfer.
3. Reuse the token for several transfers until it expires.

See [Backup & Restore](https://sickag.github.io/sick_lidar_developer_guide/configuration/configuration-backup-and-restore/) and [Firmware Update](https://sickag.github.io/sick_lidar_developer_guide/shared-features/firmware-update/) for complete sequences.

## Status Codes and Errors

The REST API answers every request with HTTP `200 OK`, including failed requests. Check `header.status` in the JSON response: only `0` means success.

<p class="table-caption" markdown>**Status Codes and Errors:** status, message, typical cause, and fix.</p>

| Status | Message | Typical cause | Fix |
| --- | --- | --- | --- |
| 0 | Ok | Request succeeded | - |
| 1 | Parsing Failed | Body is not valid JSON, or a required `data` field is missing | Compare the body with the OpenAPI schema |
| 2 | Invalid Data | The `data` key does not match the endpoint name (case-sensitive), or a value has the wrong type | Use the endpoint name as `data` key |
| 3 | Internal Server Error | For example, `getChallenge` with an unknown user name | Use `Service`, `Maintenance`, or `AuthorizedClient` |
| 4 | Access Denied | Wrong password, missing or wrong `header`, hash computed for another endpoint, user level not enabled, or authentication temporarily locked | Check the password, the user level, and the hash; see the lock below |
| 5 | Not Found | Unknown endpoint, or wrong HTTP method, for example `GET` on a method | Check the endpoint name and method in the OpenAPI file |
| 6 | Out Of Range | Value outside the allowed range | Check the limits in the OpenAPI file |
| 7 | Out Of Bounds | Value outside the allowed bounds, for example the user name `Authorized Client` with a space | Check the allowed values |
| 8 | Read Only | Write to a read-only variable | Only read the variable |
| 9 | Illegal Value | Value not in the allowed set, for example an undefined enum value | Use a value listed in the OpenAPI file |
| 10 | Invalid Challenge | The challenge was invalidated by a challenge for another user level | Fetch a new challenge and retry once |
| 11 | Out Of Connections | Too many simultaneous connections | Close idle connections and retry |

After five failed logins in a row, the device locks authentication for 30 seconds. During the lock, `getChallenge` itself answers with `header.status` 4, so even the correct password fails. Bursts of many `getChallenge` requests in a short time are rejected in the same way for a few seconds. Wait at least 30 seconds before retrying instead of retrying immediately.

Real HTTP error codes occur only for binary file transfers:

<p class="table-caption" markdown>**Status Codes and Errors:** HTTP status, cause, and fix.</p>

| HTTP status | Cause | Fix |
| --- | --- | --- |
| 403 | `GET` or `PUT /api/parameterbackup` without a valid `X-Session-Token` | Create a new session token |
| 404 | `GET /api/parameterbackup` before a backup file has been created | Call `CreateParameterBackup` first |

## OpenAPI

OpenAPI (formerly Swagger) is a machine-readable description of every REST endpoint: paths, parameters, and request and response schemas. Use it to generate a typed client in almost any language, or import it into a REST client.

SICK publishes an OpenAPI file for each firmware. Download it from the SICK product page under *Software*, or use the files in this guide:

- [picoScan100 REST API reference](https://sickag.github.io/sick_lidar_developer_guide/picoScan100/api-rest-openapi/)
- [multiScan100 REST API reference](https://sickag.github.io/sick_lidar_developer_guide/multiScan100/api-rest-openapi/)
- [multiScan200 REST API reference](https://sickag.github.io/sick_lidar_developer_guide/multiScan200/api-rest-openapi/)
- [LRS4000 REST API reference](https://sickag.github.io/sick_lidar_developer_guide/LRS4000/api-rest-openapi/)

The OpenAPI file does not describe the challenge-response authentication. Configure your client to compute it, or use [Insomnia or Postman](https://sickag.github.io/sick_lidar_developer_guide/configuration/third-party-tools/) with the prepared SICK plug-in or script.

## Related Articles

*How to use the OpenAPI file with Insomnia.*
